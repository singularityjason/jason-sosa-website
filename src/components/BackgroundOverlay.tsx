
import React from "react";

interface BackgroundOverlayProps {
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({ opacity = 0.35, className = "", style = {} }) => {
  return (
    <div
      className={`absolute inset-0 bg-black z-10 ${className}`}
      style={{ opacity, ...style }}
    ></div>
  );
};
