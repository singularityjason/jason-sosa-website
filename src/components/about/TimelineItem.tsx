import React from "react";
import { TimelineItem as TimelineItemType } from "./types/timeline-types";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isMobile = useIsMobile();
  
  // Mobile view - vertical stack with icon, title, image, description order
  if (isMobile) {
    return (
      <div className="flex flex-col items-center text-center mb-8">
        {/* Icon at the top */}
        <div className="mb-4">
          <div className="w-12 h-12 rounded-full border-2 border-accent bg-background flex items-center justify-center">
            {item.icon}
          </div>
        </div>

        {/* Title section */}
        <div className="mb-3 px-4">
        <h3 className="text-xl font-bold font-heading mb-1">
          {item.title}
        </h3>
          {item.subtitle && <h4 className="text-accent text-sm mb-1">{item.subtitle}</h4>}
        {item.date && <p className="text-white/50 text-xs mb-2">{item.date}</p>}
        </div>
        
        {/* Image/Video section */}
        {item.imageSrc && (
          <div className="mb-4 w-full px-4">
            {index === 3 ? (
              <div className="rounded-lg overflow-hidden h-48 w-full shadow-lg border border-white/10">
                <iframe 
                  src="https://www.youtube.com/embed/oSujpozmMwE?si=ihz6TJEKT77rWN7j&start=73" 
                  className="w-full h-full" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen 
                  title="Multi-touch Computer Vision"
                />
              </div>
            ) : index === 4 ? (
              <div className="rounded-lg overflow-hidden h-48 w-full shadow-lg border border-white/10">
                <iframe 
                  src="https://player.vimeo.com/video/79306627?h=ab5a67a0c9&color=ffffff&title=0&byline=0&portrait=0" 
                  className="w-full h-full" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen 
                  title="Multi-touch Computer Vision"
                />
              </div>
            ) : (
              <img
                src={index === 0 ? "/lovable-uploads/f6f2bfe7-176f-4578-a4be-b4ee164ee41c.png" :
                    index === 2 ? "/lovable-uploads/02333ef8-afbc-4c99-8ecd-000bef19c1c2.png" :
                    index === 7 ? "/lovable-uploads/8af1f21b-a603-4388-a246-6e4c6d7a8eee.png" :
                    index === 8 ? "/lovable-uploads/13358c82-ee00-4772-9729-261553d17027.png" :
                    index === 10 ? "/lovable-uploads/orchestrator-logo.jpg" :
                    "/lovable-uploads/eca07038-b49e-4ef7-8bf5-1d0427f275a1.png"}
                alt={`${item.title} image`}
                className="rounded-lg h-48 w-auto object-cover shadow-lg border border-white/10 mx-auto"
              />
            )}
          </div>
        )}
        
        {/* Description */}
        <div className="px-4">
          <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
          {item.highlights && item.highlights.length > 0 && (
            <div className="flex flex-wrap justify-center gap-1.5 mt-3">
              {item.highlights.map((highlight, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent/80 border border-accent/20"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  // Desktop view - keep existing alternating layout
  return (
    <div className="relative flex flex-col md:flex-row items-center">
      {/* Content on left or right based on index */}
      <div
        className={`md:w-1/2 pb-4 md:pb-0 z-10 ${
          index % 2 === 0
            ? 'md:pr-12 text-right md:text-right text-center order-1 flex flex-col md:items-end items-center px-6 md:px-0'
            : 'md:pl-12 text-left md:text-left text-center order-2 md:order-2 flex flex-col md:items-start items-center px-6 md:px-0'
        } reveal opacity-0`}
        style={{ transitionDelay: index % 2 === 0 ? "0ms" : "200ms" }}
      >
        <h3 className="text-xl font-bold font-heading mb-1">
          {item.title}
        </h3>
        {item.subtitle && <h4 className="text-accent text-sm mb-1">{item.subtitle}</h4>}
        {item.date && <p className="text-white/50 text-xs">{item.date}</p>}
      </div>

      {/* Center Icon */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
        <div className="w-10 h-10 rounded-full border-2 border-accent bg-background flex items-center justify-center">
          {item.icon}
        </div>
      </div>
      
      {/* Content on right or left based on index */}
      <div
        className={`md:w-1/2 pt-4 md:pt-0 z-10 ${
          index % 2 === 0
            ? 'md:pl-12 text-left md:text-left text-center order-2 px-6 md:px-0'
            : 'md:pr-12 text-right md:text-right text-center order-1 md:order-1 flex flex-col md:items-end items-center px-6 md:px-0'
        } reveal opacity-0`}
        style={{ transitionDelay: index % 2 === 0 ? "200ms" : "0ms" }}
      >
        {item.imageSrc && (
          <div className={`mb-4 ${index % 2 === 0 ? 'self-start' : 'self-end'}`}>
            {index === 3 ? (
              <div className="rounded-lg overflow-hidden h-40 w-full shadow-lg border border-white/10">
                <iframe 
                  src="https://www.youtube.com/embed/oSujpozmMwE?si=ihz6TJEKT77rWN7j&start=73" 
                  className="w-full h-full" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen 
                  title="Multi-touch Computer Vision"
                />
              </div>
            ) : index === 4 ? (
              <div className="rounded-lg overflow-hidden h-40 w-full shadow-lg border border-white/10">
                <iframe
                  src="https://player.vimeo.com/video/79306627?h=ab5a67a0c9&color=ffffff&title=0&byline=0&portrait=0"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Multi-touch Computer Vision"
                />
              </div>
            ) : (
              <img
                src={index === 0 ? "/lovable-uploads/f6f2bfe7-176f-4578-a4be-b4ee164ee41c.png" :
                    index === 2 ? "/lovable-uploads/02333ef8-afbc-4c99-8ecd-000bef19c1c2.png" :
                    index === 7 ? "/lovable-uploads/8af1f21b-a603-4388-a246-6e4c6d7a8eee.png" :
                    index === 8 ? "/lovable-uploads/13358c82-ee00-4772-9729-261553d17027.png" :
                    index === 10 ? "/lovable-uploads/orchestrator-logo.jpg" :
                    "/lovable-uploads/eca07038-b49e-4ef7-8bf5-1d0427f275a1.png"}
                alt={`${item.title} image`}
                className="rounded-lg h-36 w-auto object-cover shadow-lg border border-white/10"
              />
            )}
          </div>
        )}

        <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
        {item.highlights && item.highlights.length > 0 && (
          <div className={`flex flex-wrap gap-1.5 mt-3 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            {item.highlights.map((highlight, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent/80 border border-accent/20"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
