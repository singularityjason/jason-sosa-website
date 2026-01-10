import React from "react";
import TimelineContainer from "./TimelineContainer";
import { timelineItems } from "./data/timeline-data";
const CareerHighlights = () => {
  return <section className="py-20 bg-background" id="career">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-center text-gradient reveal opacity-0">
          My Story
        </h2>
        
        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto text-center reveal opacity-0" style={{
        transitionDelay: "200ms"
      }}>My father was an entrepreneur who put me to work young. Lemonade stands, collecting parking fees, recycling cans, carnival booths, selling hackie sacks from a family assembly line. I touched my first computer at 9 and bartered my way into tech learning centers to study the fundamentals. No formal education. Just relentless learning by doing.</p>
        
        <div className="mt-16">
          <TimelineContainer items={timelineItems} />
        </div>
      </div>
    </section>;
};
export default CareerHighlights;