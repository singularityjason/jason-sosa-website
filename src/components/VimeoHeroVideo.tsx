import React, { useState, useEffect, useRef, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface VimeoHeroVideoProps {
  videoId: string;
  posterUrl?: string;
  children?: React.ReactNode;
}

const VimeoHeroVideo: React.FC<VimeoHeroVideoProps> = ({
  videoId,
  posterUrl = "/lovable-uploads/6b6aaf2b-ee52-4c17-b6e7-ce5826ecc91f.webp",
  children
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const vimeoSrc = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&controls=0&autopause=0&dnt=1&badge=0&quality=720p`;

  // Use IntersectionObserver to lazy load the video
  useEffect(() => {
    // Skip video on mobile - use poster only
    if (isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start loading video when container is in view
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px" // Start loading slightly before it's visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  // Handle iframe load event
  const handleIframeLoad = useCallback(() => {
    // Add a small delay for smoother transition
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Poster Image - Shows immediately for fast LCP */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          isLoaded && !isMobile ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ zIndex: 1 }}
      >
        <img
          src={posterUrl}
          alt="Jason Sosa speaking at a conference"
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1280"
        />
      </div>

      {/* Video Background - Only loads on desktop after poster is visible */}
      {shouldLoadVideo && !isMobile && (
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: 2 }}
        >
          <iframe
            src={vimeoSrc}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.78vh', // 16:9 aspect ratio
            }}
            allow="autoplay; fullscreen"
            title="Background Video"
            onLoad={handleIframeLoad}
          />
        </div>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 10 }} />

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay-lighter" style={{ zIndex: 11 }} />

      {/* Content */}
      <div className="relative w-full h-full" style={{ zIndex: 20 }}>
        {children}
      </div>
    </section>
  );
};

export default React.memo(VimeoHeroVideo);
