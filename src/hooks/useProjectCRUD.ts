import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface ProjectData {
  id?: string;
  title: string;
  description?: string | null;
  category?: string | null;
  client_name?: string | null;
  featured?: boolean | null;
  logo_url?: string | null;
  preview_media_url?: string | null;
  youtube_url?: string | null;
  vimeo_url?: string | null;
  project_date?: string | null;
  tags?: string[] | null;
  display_order?: number | null;
}

export interface Project extends ProjectData {
  id: string;
  created_at?: string | null;
  updated_at?: string | null;
}

export function useProjectCRUD() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await supabase
      .from("projects")
      .select("*")
      .order("display_order", { ascending: true });

    if (fetchError) {
      setError(fetchError.message);
      setLoading(false);
      return [];
    }

    setProjects(data || []);
    setLoading(false);
    return data || [];
  }, []);

  const createProject = async (projectData: Omit<ProjectData, "id">) => {
    setLoading(true);
    setError(null);

    const { data, error: createError } = await supabase
      .from("projects")
      .insert([projectData])
      .select()
      .single();

    if (createError) {
      setError(createError.message);
      setLoading(false);
      return { data: null, error: createError };
    }

    // Refresh the list
    await fetchProjects();
    setLoading(false);
    return { data, error: null };
  };

  const updateProject = async (id: string, projectData: Partial<ProjectData>) => {
    setLoading(true);
    setError(null);

    const { data, error: updateError } = await supabase
      .from("projects")
      .update(projectData)
      .eq("id", id)
      .select()
      .single();

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return { data: null, error: updateError };
    }

    // Refresh the list
    await fetchProjects();
    setLoading(false);
    return { data, error: null };
  };

  const deleteProject = async (id: string) => {
    setLoading(true);
    setError(null);

    // First delete related project_media
    const { error: mediaError } = await supabase
      .from("project_media")
      .delete()
      .eq("project_id", id);

    if (mediaError) {
      setError(mediaError.message);
      setLoading(false);
      return { error: mediaError };
    }

    // Then delete the project
    const { error: deleteError } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (deleteError) {
      setError(deleteError.message);
      setLoading(false);
      return { error: deleteError };
    }

    // Refresh the list
    await fetchProjects();
    setLoading(false);
    return { error: null };
  };

  return {
    projects,
    loading,
    error,
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
  };
}

export default useProjectCRUD;
