
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoPopupProps {
  videoUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoPopup = ({ videoUrl, isOpen, onClose }: VideoPopupProps) => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [platform, setPlatform] = useState<'youtube' | 'vimeo' | 'gdrive' | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [vimeoEmbedUrl, setVimeoEmbedUrl] = useState<string | null>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (videoUrl) {
      // Detect platform and extract video info
      const extractVideoInfo = (url: string) => {
        // YouTube patterns
        const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const youtubeMatch = url.match(youtubeRegExp);
        if (youtubeMatch && youtubeMatch[2].length === 11) {
          return { platform: 'youtube' as const, id: youtubeMatch[2], embedUrl: null };
        }

        // Google Drive patterns
        const driveRegExp = /drive\.google\.com\/file\/d\/([^\/]+)/;
        const driveMatch = url.match(driveRegExp);
        if (driveMatch && driveMatch[1]) {
          const fileId = driveMatch[1];
          const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
          return { platform: 'gdrive' as const, id: fileId, embedUrl };
        }

        // Vimeo patterns - use URL parser to preserve query params
        try {
          const urlObj = new URL(url);

          // Check if it's a Vimeo URL
          if (urlObj.hostname.includes('vimeo.com')) {
            let videoId: string | null = null;

            // Extract video ID from path
            if (urlObj.hostname === 'player.vimeo.com') {
              const match = urlObj.pathname.match(/\/video\/(\d+)/);
              if (match) videoId = match[1];
            } else {
              const match = urlObj.pathname.match(/\/(\d+)/);
              if (match) videoId = match[1];
            }

            if (videoId) {
              // Build embed URL preserving important query params
              const embedUrl = new URL(`https://player.vimeo.com/video/${videoId}`);

              // Preserve allowed params: h (signature), t (time)
              const allowedParams = ['h', 't'];
              allowedParams.forEach(param => {
                const value = urlObj.searchParams.get(param);
                if (value) embedUrl.searchParams.set(param, value);
              });

              // Add required params
              embedUrl.searchParams.set('autoplay', '1');
              embedUrl.searchParams.set('title', '0');
              embedUrl.searchParams.set('byline', '0');
              embedUrl.searchParams.set('portrait', '0');
              embedUrl.searchParams.set('dnt', '1');

              return {
                platform: 'vimeo' as const,
                id: videoId,
                embedUrl: embedUrl.toString()
              };
            }
          }
        } catch (e) {
          console.error('Error parsing Vimeo URL:', e);
        }

        return { platform: null, id: null, embedUrl: null };
      };

      const { platform: detectedPlatform, id, embedUrl } = extractVideoInfo(videoUrl);
      setPlatform(detectedPlatform);
      setVideoId(id);
      setVimeoEmbedUrl(embedUrl);
      setShowFallback(false);
    } else {
      setPlatform(null);
      setVideoId(null);
      setVimeoEmbedUrl(null);
      setShowFallback(false);
    }

    // Reset loading state when video changes
    setIsLoading(true);
  }, [videoUrl]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Fallback timeout - show alternative if video doesn't load
  useEffect(() => {
    if (isLoading && isOpen && videoId) {
      const fallbackTimer = setTimeout(() => {
        if (isLoading) {
          setShowFallback(true);
          setIsLoading(false);
        }
      }, 4000); // 4 second timeout

      return () => clearTimeout(fallbackTimer);
    }
  }, [isLoading, isOpen, videoId]);

  // Clean up when dialog closes
  useEffect(() => {
    if (!isOpen) {
      // Small delay to allow close animation to play
      const timer = setTimeout(() => {
        setVideoId(null);
        setVimeoEmbedUrl(null);
        setShowFallback(false);
        setIsLoading(true);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const videoTitle = "Jason Sosa Keynote Video";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogOverlay className="backdrop-blur-sm" />
      <DialogContent 
        className="p-0 border-none bg-transparent shadow-none max-w-4xl w-[90vw] overflow-hidden [&>button]:hidden"
        onPointerDownOutside={onClose}
        onEscapeKeyDown={onClose}
      >
        <DialogTitle className="sr-only">{videoTitle}</DialogTitle>
        <div className="relative aspect-video w-full bg-black/80 rounded-lg overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {videoId && platform === 'youtube' && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={`absolute inset-0 w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              onLoad={handleIframeLoad}
            />
          )}
          
          {videoId && platform === 'vimeo' && vimeoEmbedUrl && (
            <iframe
              src={vimeoEmbedUrl}
              title={videoTitle}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className={`absolute inset-0 w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              onLoad={handleIframeLoad}
            />
          )}

          {videoId && platform === 'gdrive' && vimeoEmbedUrl && (
            <iframe
              src={vimeoEmbedUrl}
              title={videoTitle}
              allow="autoplay; fullscreen"
              allowFullScreen
              className={`absolute inset-0 w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              onLoad={handleIframeLoad}
            />
          )}
          
          {showFallback && videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/90 p-8">
              <div className="text-center">
                <p className="text-white mb-4">Unable to load video preview</p>
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Open video on Vimeo
                </a>
              </div>
            </div>
          )}
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-black/90 transition-colors z-10"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPopup;
