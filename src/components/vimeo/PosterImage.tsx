
import React from "react";

interface PosterImageProps {
  posterUrl: string | undefined;
  isLoaded: boolean;
  alt?: string;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

export const PosterImage: React.FC<PosterImageProps> = ({ 
  posterUrl, 
  isLoaded,
  alt = "Video poster",
  backgroundColor = "#111111",
  style = {}
}) => {
  if (!posterUrl) return null;
  
  // Validate the URL to ensure it's from a trusted source
  const isTrustedUrl = (url: string): boolean => {
    try {
      // Allow only specific image domains or relative paths
      const urlObj = new URL(url, window.location.origin);
      const trustedDomains = [
        'lovableproject.com',
        'jasonsosa.com',
        'i.vimeocdn.com'
      ];
      
      // Check if it's a relative URL or from a trusted domain
      return url.startsWith('/') || 
        trustedDomains.some(domain => urlObj.hostname.includes(domain));
    } catch {
      // If URL parsing fails, return false
      return false;
    }
  };
  
  if (!isTrustedUrl(posterUrl)) {
    console.warn("Untrusted image URL blocked:", posterUrl);
    return null;
  }
  
  // Combine provided style with default styles
  const combinedStyle: React.CSSProperties = {
    backgroundColor,
    ...style
  };
  
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full"
      style={combinedStyle}
    >
      <img
        src={posterUrl}
        alt={alt}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        loading="eager"
        fetchPriority="high"
        width="1920"
        height="1080"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
