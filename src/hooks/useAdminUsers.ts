import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface AdminUser {
  id: string;
  email: string;
  name: string | null;
  role: string;
  created_at: string;
  is_active: boolean;
}

export function useAdminUsers() {
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAdmins = useCallback(async () => {
    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await supabase
      .from("admin_users")
      .select("*")
      .order("created_at", { ascending: true });

    if (fetchError) {
      setError(fetchError.message);
      setLoading(false);
      return [];
    }

    setAdmins((data as AdminUser[]) || []);
    setLoading(false);
    return data || [];
  }, []);

  const checkIsAdmin = async (email: string): Promise<boolean> => {
    const { data, error } = await supabase
      .from("admin_users")
      .select("id")
      .eq("email", email)
      .eq("is_active", true)
      .single();

    if (error || !data) {
      return false;
    }
    return true;
  };

  const addAdmin = async (email: string, name?: string) => {
    setLoading(true);
    setError(null);

    const { data, error: insertError } = await supabase
      .from("admin_users")
      .insert([{ email, name: name || null, role: "admin" }])
      .select()
      .single();

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
      return { data: null, error: insertError };
    }

    await fetchAdmins();
    setLoading(false);
    return { data, error: null };
  };

  const updateAdmin = async (id: string, updates: Partial<AdminUser>) => {
    setLoading(true);
    setError(null);

    const { data, error: updateError } = await supabase
      .from("admin_users")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return { data: null, error: updateError };
    }

    await fetchAdmins();
    setLoading(false);
    return { data, error: null };
  };

  const removeAdmin = async (id: string) => {
    setLoading(true);
    setError(null);

    const { error: deleteError } = await supabase
      .from("admin_users")
      .delete()
      .eq("id", id);

    if (deleteError) {
      setError(deleteError.message);
      setLoading(false);
      return { error: deleteError };
    }

    await fetchAdmins();
    setLoading(false);
    return { error: null };
  };

  const toggleAdminStatus = async (id: string, isActive: boolean) => {
    return updateAdmin(id, { is_active: isActive });
  };

  return {
    admins,
    loading,
    error,
    fetchAdmins,
    checkIsAdmin,
    addAdmin,
    updateAdmin,
    removeAdmin,
    toggleAdminStatus,
  };
}

export default useAdminUsers;
