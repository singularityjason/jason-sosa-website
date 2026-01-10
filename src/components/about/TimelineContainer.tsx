
import React from "react";
import { TimelineItem } from "./types/timeline-types";
import TimelineItemComponent from "./TimelineItem";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineContainerProps {
  items: TimelineItem[];
}

const TimelineContainer = ({ items }: TimelineContainerProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Timeline Center Line - Only show on desktop */}
      {!isMobile && (
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30 z-0"></div>
      )}
      
      {/* Timeline Items */}
      <div className={`${isMobile ? 'space-y-6' : 'space-y-8 md:space-y-16'}`}>
        {items.map((item, index) => (
          <TimelineItemComponent key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TimelineContainer;
