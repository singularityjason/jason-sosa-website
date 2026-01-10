
import React from "react";
import { BackgroundOverlay } from "@/components/BackgroundOverlay";

interface FallbackImageProps {
  fallbackImage: string;
  children?: React.ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
  overlayClassName?: string;
  brightness?: "normal" | "bright" | "brighter";
  backgroundColor?: string;
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  fallbackImage,
  children,
  overlay = true,
  overlayOpacity = 0.35,
  overlayClassName = "",
  brightness = "normal",
  backgroundColor = "#111111"
}) => {
  const getGridOverlayClass = () => {
    switch (brightness) {
      case "bright":
        return "grid-overlay-lighter";
      case "brighter":
        return "grid-overlay-lightest";
      default:
        return "grid-overlay";
    }
  };

  return (
    <div 
      className="relative overflow-hidden w-full h-full"
      style={{ backgroundColor }} // Add background color for immediate display
    >
      {fallbackImage && (
        <img
          src={fallbackImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
          decoding="async"
        />
      )}
      
      {/* Grid overlay */}
      <div className={`absolute inset-0 ${getGridOverlayClass()}`} style={{ zIndex: 4 }}></div>
      
      {/* Background overlay with opacity */}
      {overlay && <BackgroundOverlay opacity={overlayOpacity} className={overlayClassName} style={{ zIndex: 5 }} />}
      
      {/* Content */}
      <div className="relative" style={{ zIndex: 20 }}>{children}</div>
    </div>
  );
};
