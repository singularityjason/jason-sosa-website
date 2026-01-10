import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { BentoItem, BentoCellSize, Project } from "./types";
import { allStaticItems } from "./data/staticItems";

// Fisher-Yates shuffle for randomizing stats items
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Interleave stats items throughout the non-stats items
function interleaveStats(nonStats: BentoItem[], stats: BentoItem[]): BentoItem[] {
  if (stats.length === 0) return nonStats;
  if (nonStats.length === 0) return stats;

  const result: BentoItem[] = [];
  const interval = Math.max(2, Math.floor(nonStats.length / (stats.length + 1)));
  let statsIndex = 0;

  for (let i = 0; i < nonStats.length; i++) {
    result.push(nonStats[i]);
    // Insert a stat every 'interval' items, if we have stats left
    if ((i + 1) % interval === 0 && statsIndex < stats.length) {
      result.push(stats[statsIndex]);
      statsIndex++;
    }
  }

  // Add any remaining stats at the end
  while (statsIndex < stats.length) {
    result.push(stats[statsIndex]);
    statsIndex++;
  }

  return result;
}

interface UseBentoItemsOptions {
  categoryFilter?: string;
  searchQuery?: string;
  sortBy?: string;
}

export function useBentoItems(options: UseBentoItemsOptions = {}) {
  const { categoryFilter = "all", searchQuery = "", sortBy = "featured" } = options;

  const [projects, setProjects] = useState<Project[]>([]);
  // Start with loading=false so static items show immediately
  const [loading, setLoading] = useState(false);
  const [supabaseLoading, setSupabaseLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data: projectsData, error: projectsError } = await supabase
        .from("projects")
        .select("*")
        .order("display_order", { ascending: true });

      if (projectsError) throw projectsError;

      const { data: mediaData, error: mediaError } = await supabase
        .from("project_media")
        .select("*")
        .order("display_order", { ascending: true });

      if (mediaError) throw mediaError;

      const projectsWithMedia = (projectsData || []).map((project) => ({
        ...project,
        project_media: (mediaData || []).filter((m) => m.project_id === project.id),
      }));

      setProjects(projectsWithMedia);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError(err as Error);
    } finally {
      setSupabaseLoading(false);
    }
  };

  // Convert Supabase projects to BentoItems
  const projectBentoItems: BentoItem[] = useMemo(() => {
    return projects
      .map((project) => {
        // Determine type based on content
        const hasVideo = project.youtube_url || project.vimeo_url;
        const type = hasVideo ? "video" : "project";

        // Determine size based on featured status and content type
        let size: BentoCellSize = "medium";
        if (project.featured && hasVideo) {
          size = "large";
        } else if (project.featured) {
          size = "wide";
        } else if (hasVideo) {
          size = "wide";
        }

        // Get preview image
        const previewMedia = project.project_media?.find(
          (m) => m.media_type === "image"
        );
        const previewImageUrl = project.preview_media_url || previewMedia?.media_url;

        return {
          id: `project-${project.id}`,
          type,
          size,
          title: project.title,
          subtitle: project.client_name || undefined,
          description: project.description || undefined,
          imageUrl: project.logo_url || undefined,
          previewImageUrl,
          videoUrl: project.youtube_url || project.vimeo_url || undefined,
          category: project.category || undefined,
          tags: project.tags || undefined,
          featured: project.featured || false,
          order: project.display_order,
          source: "supabase" as const,
          projectData: project,
        };
      })
      // Only keep items with explicit preview images set
      // (Don't rely on auto-generated YouTube/Vimeo thumbnails)
      .filter((item) => {
        // Must have a preview image set
        return !!item.previewImageUrl;
      });
  }, [projects]);

  // Filter and sort items
  const filteredItems = useMemo(() => {
    // Combine items with deduplication (static items take priority)
    const staticTitles = new Set(
      allStaticItems
        .map((item) => item.title?.toLowerCase().trim())
        .filter(Boolean)
    );

    // Filter out Supabase items that have static equivalents
    const dedupedProjects = projectBentoItems.filter(
      (item) => !staticTitles.has(item.title?.toLowerCase().trim())
    );

    let items = [...dedupedProjects, ...allStaticItems];

    // Filter by category
    if (categoryFilter !== "all") {
      if (categoryFilter === "speaking-media") {
        items = items.filter(
          (item) =>
            item.category === "Speaking" ||
            item.category === "Media" ||
            item.category === "Press" ||
            item.category === "Speaking & Media" ||
            // Include static items related to media/speaking
            item.id.includes("media") ||
            item.id.includes("speaking") ||
            item.id.includes("award")
        );
      } else if (categoryFilter === "technology-innovation") {
        items = items.filter(
          (item) =>
            item.category === "Technology" ||
            item.category === "Innovation" ||
            item.category === "Product" ||
            item.category === "Technology & Innovation" ||
            // Include company-related static items
            item.id.includes("company") ||
            item.id.includes("stat")
        );
      }
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.title?.toLowerCase().includes(query) ||
          item.subtitle?.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.category?.toLowerCase().includes(query) ||
          item.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort items
    items.sort((a, b) => {
      switch (sortBy) {
        case "featured":
          // Featured items first, then by order
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return (a.order || 999) - (b.order || 999);

        case "recent":
          // For "recent" sort: Supabase projects by date (newest first), then static items by order
          const aDate = a.projectData?.project_date;
          const bDate = b.projectData?.project_date;

          // If both have dates, compare dates (newest first)
          if (aDate && bDate) {
            return new Date(bDate).getTime() - new Date(aDate).getTime();
          }
          // Items with dates come before items without
          if (aDate && !bDate) return -1;
          if (!aDate && bDate) return 1;
          // For items without dates (static), use order
          return (a.order || 999) - (b.order || 999);

        case "title":
          return (a.title || "").localeCompare(b.title || "");

        default:
          // Default: order by the order field
          return (a.order || 999) - (b.order || 999);
      }
    });

    // Randomize stats/KPIs placement (separate, shuffle, interleave)
    const statsItems = items.filter((item) => item.type === "stats");
    const nonStatsItems = items.filter((item) => item.type !== "stats");
    const shuffledStats = shuffleArray(statsItems);
    const finalItems = interleaveStats(nonStatsItems, shuffledStats);

    return finalItems;
  }, [projectBentoItems, categoryFilter, searchQuery, sortBy]);

  return {
    items: filteredItems,
    loading,
    error,
    refetch: fetchProjects,
  };
}

export default useBentoItems;
