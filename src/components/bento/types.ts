import { ReactNode } from "react";

// Cell size variants following Bento conventions
export type BentoCellSize =
  | "large"   // 2x2 grid cells - featured items
  | "wide"    // 2x1 - horizontal emphasis
  | "tall"    // 1x2 - vertical emphasis
  | "medium"  // 1x1 - standard
  | "small";  // 1x1 with reduced padding

export type BentoCellType =
  | "video"
  | "image"
  | "logo"
  | "logoGroup"
  | "text"
  | "stats"
  | "project";

export interface LogoItem {
  name: string;
  url: string;
}

export interface BentoItem {
  id: string;
  type: BentoCellType;
  size: BentoCellSize;
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  logoUrl?: string;
  logos?: LogoItem[];
  videoUrl?: string;
  previewImageUrl?: string;
  link?: string;
  tags?: string[];
  category?: string;
  featured?: boolean;
  accentColor?: string;
  order?: number;
  // For stats cells
  statValue?: string;
  statLabel?: string;
  // Source indicator
  source: "supabase" | "static";
  projectData?: Project;
}

// Existing Project type from Supabase
export interface Project {
  id: string;
  title: string;
  description: string | null;
  logo_url: string | null;
  category: string | null;
  featured: boolean | null;
  client_name: string | null;
  tags: string[] | null;
  youtube_url: string | null;
  vimeo_url: string | null;
  project_date: string | null;
  display_order: number;
  preview_media_url?: string | null;
  project_media?: Array<{
    id: string;
    media_url: string;
    media_type: string;
    display_order: number;
  }>;
}

// Size class mappings
export const sizeClasses: Record<BentoCellSize, string> = {
  large: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2",
  wide: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-1",
  tall: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  medium: "col-span-1 row-span-1",
  small: "col-span-1 row-span-1",
};
