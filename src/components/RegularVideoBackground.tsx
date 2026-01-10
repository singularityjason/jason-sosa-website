
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { BackgroundOverlay } from './BackgroundOverlay';

interface RegularVideoBackgroundProps {
  videoUrl: string;
  posterUrl?: string;
  fallbackImageUrl?: string;
  mobileFallbackImage?: string;
  children?: React.ReactNode;
  overlay?: boolean;
  className?: string;
  overlayClassName?: string;
  videoClassName?: string;
  playbackRate?: number;
}

const RegularVideoBackground: React.FC<RegularVideoBackgroundProps> = ({ 
  videoUrl, 
  posterUrl, 
  fallbackImageUrl,
  mobileFallbackImage,
  children,
  overlay = true,
  className = "",
  overlayClassName = "",
  videoClassName = "",
  playbackRate = 1,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isMobile = useIsMobile();
  
  // Use consistent fallback image
  const fallbackImage = mobileFallbackImage || fallbackImageUrl || posterUrl || '';
  
  // Background color (make sure it's always visible while loading)
  const backgroundColor = "#111111";

  // Handle video play event
  const handlePlay = useCallback(() => {
    console.log('Video playback started');
    // Only set playing after a short delay to ensure smooth transition
    setTimeout(() => setVideoPlaying(true), 500);
  }, []);

  // Handle video loaded data event
  const handleLoadedData = useCallback(() => {
    console.log('Video data loaded');
    setVideoLoaded(true);
    const video = videoRef.current;
    if (video && playbackRate !== 1 && video.playbackRate !== playbackRate) {
      video.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Handle video error event
  const handleError = useCallback((e: any) => {
    console.error("Video error occurred:", e);
    setVideoError(true);
  }, []);

  // Setup intersection observer to detect when video is in viewport
  useEffect(() => {
    if (isMobile || !videoRef.current) return;

    console.log('Setting up intersection observer for video');
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        console.log('Video in view:', isVisible);
        setIsInView(isVisible);
        
        const video = videoRef.current;
        if (!video) return;
        
        if (isVisible) {
          video.play().catch(err => {
            console.error("Error playing video:", err);
            // If autoplay fails, we need to keep showing the poster
            setVideoError(true);
          });
        } else if (!video.paused) {
          video.pause();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    observerRef.current.observe(videoRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [isMobile]);

  // Set up event listeners when video element is available
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('Adding video event listeners');
    video.addEventListener('play', handlePlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    
    // Handle playback rate
    if (playbackRate !== 1 && video.playbackRate !== playbackRate) {
      video.playbackRate = playbackRate;
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [handlePlay, handleLoadedData, handleError, playbackRate]);

  // Use fallback image for mobile or if video errors
  if (videoError || isMobile) {
    console.log('Using fallback image due to:', videoError ? 'error' : 'mobile device');
    return (
      <div className={`relative overflow-hidden w-full h-full ${className}`} style={{ backgroundColor }}>
        {/* Background image - always visible */}
        <img
          src={fallbackImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
          style={{ zIndex: 3 }}
        />
        
        {/* Background overlay */}
        {overlay && <BackgroundOverlay className={overlayClassName} style={{ zIndex: 5 }} />}
        
        {/* Content */}
        <div className="relative" style={{ zIndex: 20 }}>{children}</div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`} style={{ backgroundColor }}>
      {/* Poster image - visible until video is playing */}
      {posterUrl && (
        <img
          src={posterUrl}
          alt="Video poster"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            videoPlaying ? 'opacity-0' : 'opacity-100'
          }`}
          loading="eager"
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
          style={{ zIndex: 3 }}
        />
      )}
      
      {/* Video element - fades in when playing */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={posterUrl}
        className={`absolute top-0 left-0 w-full h-full object-cover ${videoClassName} transition-opacity duration-700 ease-in-out ${
          videoPlaying ? 'opacity-100' : 'opacity-0'
        }`}
        preload="metadata"
        style={{ zIndex: 2 }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Background overlay */}
      {overlay && <BackgroundOverlay className={overlayClassName} style={{ zIndex: 5 }} />}
      
      {/* Content */}
      <div className="relative" style={{ zIndex: 20 }}>{children}</div>
    </div>
  );
};

export default React.memo(RegularVideoBackground);
