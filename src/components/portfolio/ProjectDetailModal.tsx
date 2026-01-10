import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string | null;
  logo_url: string | null;
  youtube_url: string | null;
  vimeo_url: string | null;
  project_date: string | null;
}

interface ProjectMedia {
  id: string;
  media_url: string;
  media_type: string;
  display_order: number;
}

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  const [media, setMedia] = useState<ProjectMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen && project) {
      fetchProjectMedia();
    }
  }, [isOpen, project]);

  const fetchProjectMedia = async () => {
    try {
      const { data, error } = await supabase
        .from("project_media")
        .select("*")
        .eq("project_id", project.id)
        .order("display_order", { ascending: true });

      if (error) throw error;
      setMedia(data || []);
    } catch (error) {
      console.error("Error fetching project media:", error);
    } finally {
      setLoading(false);
    }
  };

  const extractVideoId = (url: string, type: 'youtube' | 'vimeo'): string | null => {
    if (type === 'youtube') {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    } else {
      const regExp = /vimeo\.com\/(?:video\/)?(\d+)/;
      const match = url.match(regExp);
      return match ? match[1] : null;
    }
  };

  const extractStartTime = (url: string): string => {
    const timeMatch = url.match(/[?&]t=(\d+)/);
    return timeMatch ? `?start=${timeMatch[1]}` : '';
  };

  const renderVideoEmbed = () => {
    // Check project_media for video first
    const videoMedia = media.find(m => m.media_type === 'video');
    if (videoMedia) {
      const isYouTube = /youtu(\.be|be\.com)/.test(videoMedia.media_url) || videoMedia.media_url.includes('youtube.com');
      const isVimeo = videoMedia.media_url.includes('vimeo.com');
      if (isYouTube) {
        const videoId = extractVideoId(videoMedia.media_url, 'youtube');
        const startTime = extractStartTime(videoMedia.media_url);
        if (videoId) {
          return (
            <div className="aspect-video w-full mb-6">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}${startTime}`}
                title={`${project.title} - YouTube Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          );
        }
      }
      if (isVimeo) {
        const videoId = extractVideoId(videoMedia.media_url, 'vimeo');
        if (videoId) {
          return (
            <div className="aspect-video w-full mb-6">
              <iframe
                src={`https://player.vimeo.com/video/${videoId}`}
                title={`${project.title} - Vimeo Video`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          );
        }
      }
    }

    if (project.youtube_url) {
      const videoId = extractVideoId(project.youtube_url, 'youtube');
      const startTime = extractStartTime(project.youtube_url);
      if (videoId) {
        return (
          <div className="aspect-video w-full mb-6">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}${startTime}`}
              title={`${project.title} - YouTube Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        );
      }
    }
    
    if (project.vimeo_url) {
      const videoId = extractVideoId(project.vimeo_url, 'vimeo');
      if (videoId) {
        return (
          <div className="aspect-video w-full mb-6">
            <iframe
              src={`https://player.vimeo.com/video/${videoId}`}
              title={`${project.title} - Vimeo Video`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        );
      }
    }
    
    return null;
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogOverlay className="backdrop-blur-sm" />
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {project.description || `Details about ${project.title}`}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {project.project_date && (
            <p className="text-sm text-muted-foreground mb-4">
              {new Date(project.project_date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          )}
          
          {project.description && (
            <p className="text-muted-foreground mb-6 whitespace-pre-wrap">
              {project.description}
            </p>
          )}

          {renderVideoEmbed()}

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-48 w-full rounded-lg" />
              ))}
            </div>
          ) : media.filter(m => m.media_type !== 'video').length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {media.filter(m => m.media_type !== 'video').map((item, idx) => (
                  <div 
                    key={item.id} 
                    className="rounded-lg overflow-hidden bg-muted cursor-pointer"
                    onClick={() => setSelectedIndex(idx)}
                  >
                    <img
                      src={item.media_url}
                      alt={`${project.title} - Image ${item.display_order + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>

      {/* Image Lightbox */}
      {selectedIndex !== null && (() => {
        const images = media.filter(m => m.media_type !== 'video');
        return (
          <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
            <DialogOverlay className="backdrop-blur-sm bg-black/90" />
            <DialogContent className="max-w-7xl max-h-[95vh] border-0 bg-transparent shadow-none p-0">
              <DialogHeader className="sr-only">
                <DialogTitle>Image Viewer</DialogTitle>
                <DialogDescription>Full size project image with navigation</DialogDescription>
              </DialogHeader>
              <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Prev */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 hover:bg-background/90 shadow"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((i) => {
                      const idx = typeof i === 'number' ? i : 0;
                      return (idx - 1 + images.length) % images.length;
                    });
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M15.53 4.47a.75.75 0 010 1.06L9.06 12l6.47 6.47a.75.75 0 11-1.06 1.06l-7-7a.75.75 0 010-1.06l7-7a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Image */}
                <img
                  src={images[selectedIndex!]?.media_url}
                  alt={`Full size view ${selectedIndex! + 1} of ${images.length}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />

                {/* Next */}
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 hover:bg-background/90 shadow"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((i) => {
                      const idx = typeof i === 'number' ? i : 0;
                      return (idx + 1) % images.length;
                    });
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M8.47 19.53a.75.75 0 010-1.06L14.94 12 8.47 5.53a.75.75 0 111.06-1.06l7 7a.75.75 0 010 1.06l-7 7a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Counter */}
                <div className="absolute bottom-4 right-4 text-xs px-2 py-1 rounded bg-background/70">
                  {selectedIndex! + 1} / {images.length}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        );
      })()}
    </Dialog>
  );
};

export default ProjectDetailModal;
