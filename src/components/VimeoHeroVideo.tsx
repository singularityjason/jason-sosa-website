import React from "react";

interface VimeoHeroVideoProps {
  videoId: string;
  children?: React.ReactNode;
}

const VimeoHeroVideo: React.FC<VimeoHeroVideoProps> = ({ videoId, children }) => {
  const vimeoSrc = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&controls=0&autopause=0&dnt=1&badge=0`;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={vimeoSrc}
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 scale-100"
          style={{
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100vh',
            minWidth: '177.78vh', // 16:9 aspect ratio
          }}
          allow="autoplay; fullscreen"
          loading="eager"
          title="Background Video"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay-lighter z-20" />

      {/* Content */}
      <div className="relative z-30 w-full h-full">
        {children}
      </div>
    </section>
  );
};

export default VimeoHeroVideo;