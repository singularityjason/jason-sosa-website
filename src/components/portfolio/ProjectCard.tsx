import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Project {
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
  preview_media_url?: string | null;
  project_media?: Array<{
    id: string;
    media_url: string;
    media_type: string;
    display_order: number;
  }>;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index?: number;
}

const ProjectCard = ({ project, onClick, index = 0 }: ProjectCardProps) => {
  const videoMedia = project.project_media?.find(m => m.media_type === 'video');
  const hasVideo = project.youtube_url || project.vimeo_url || videoMedia;
  
  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1];
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  const getVimeoThumbnail = (url: string) => {
    const videoId = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1];
    return videoId ? `https://vumbnail.com/${videoId}.jpg` : null;
  };
  
  const getVideoThumbnail = () => {
    if (project.youtube_url) return getYouTubeThumbnail(project.youtube_url);
    if (project.vimeo_url) return getVimeoThumbnail(project.vimeo_url);
    if (videoMedia?.media_url) {
      if (videoMedia.media_url.includes('youtu')) return getYouTubeThumbnail(videoMedia.media_url);
      if (videoMedia.media_url.includes('vimeo')) return getVimeoThumbnail(videoMedia.media_url);
    }
    return null;
  };
  
  const getPreviewImage = () => {
    // Check for custom preview_media_url first
    if (project.preview_media_url) return project.preview_media_url;
    
    // Check for custom preview image in media
    const previewMedia = project.project_media?.find(m => m.media_type === 'preview');
    if (previewMedia?.media_url) return previewMedia.media_url;
    
    const videoThumb = getVideoThumbnail();
    if (videoThumb) return videoThumb;
    const imageMedia = project.project_media?.find(m => m.media_type !== 'video' && m.media_type !== 'preview');
    if (imageMedia?.media_url) return imageMedia.media_url;
    if (project.logo_url) return project.logo_url;
    return '/placeholder.svg';
  };

  // Color schemes for variety
  const colorSchemes = [
    "bg-gradient-to-br from-blue-400/90 to-blue-500/90 text-white", // Light blue
    "bg-card text-card-foreground", // White/default
    "bg-gradient-to-br from-slate-700/95 to-slate-800/95 text-white", // Dark
    "bg-gradient-to-br from-sky-400/90 to-sky-500/90 text-white", // Sky blue
  ];

  const cardColorClass = colorSchemes[index % colorSchemes.length];
  const isLight = cardColorClass.includes("bg-card");
  
  return (
    <Card
      className={cn(
        "cursor-pointer group overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in border-0",
        cardColorClass
      )}
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative">
          {/* Image Section - only if preview exists */}
          {getPreviewImage() !== '/placeholder.svg' && (
            <div className="relative w-full overflow-hidden">
              <img
                src={getPreviewImage()}
                alt={`${project.title} preview`}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {hasVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <svg 
                    className="w-16 h-16 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}
            </div>
          )}

          {/* Content Section */}
          <div className="p-6">
            {/* Title with arrow */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-xl font-semibold leading-tight group-hover:underline">
                {project.title} →
              </h3>
            </div>

            {/* Client name if available */}
            {project.client_name && (
              <p className={cn(
                "text-sm mb-3",
                isLight ? "text-muted-foreground" : "text-white/80"
              )}>
                {project.client_name}
              </p>
            )}
            
            {/* Description */}
            {project.description && (
              <p className={cn(
                "text-sm mb-4 line-clamp-3",
                isLight ? "text-muted-foreground" : "text-white/90"
              )}>
                {project.description}
              </p>
            )}

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={cn(
                      "text-xs px-2 py-1 rounded",
                      isLight 
                        ? "bg-muted text-muted-foreground" 
                        : "bg-white/20 text-white/80"
                    )}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Footer with date */}
            {project.project_date && (
              <div className="flex items-center pt-4 border-t border-current/10">
                <span className={cn(
                  "text-xs",
                  isLight ? "text-muted-foreground" : "text-white/60"
                )}>
                  {new Date(project.project_date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
