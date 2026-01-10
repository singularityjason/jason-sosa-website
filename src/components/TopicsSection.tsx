import React from "react";
import { Card } from "@/components/ui/card";
import { BrainCircuit, LineChart, Bitcoin, Workflow, Lightbulb, Cpu } from "lucide-react";
const TopicsSection = () => {
  const topics = [{
    title: "Artificial Intelligence",
    description: "How AI is transforming business operations and creating new opportunities for growth",
    icon: <BrainCircuit className="h-10 w-10 text-accent" />
  }, {
    title: "Bitcoin and Finance",
    description: "Understanding the implications of decentralized technologies on business and society",
    icon: <Bitcoin className="h-10 w-10 text-accent" />
  }, {
    title: "Future of Work",
    description: "Preparing organizations for the changing nature of work in an automated world",
    icon: <Workflow className="h-10 w-10 text-accent" />
  }, {
    title: "Digital Transformation",
    description: "Strategies for organizations to adapt and thrive in the digital economy",
    icon: <LineChart className="h-10 w-10 text-accent" />
  }, {
    title: "Innovation Culture",
    description: "Building resilient organizations that foster creativity and embrace change",
    icon: <Lightbulb className="h-10 w-10 text-accent" />
  }, {
    title: "Technological Singularity",
    description: "Exploring the implications of exponential technological growth on humanity's future",
    icon: <Cpu className="h-10 w-10 text-accent" />
  }];
  return <section id="topics" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 relative min-h-[600px] md:min-h-[700px] bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden" style={{
        backgroundImage: `url('/lovable-uploads/da672dda-9e6e-4ba1-a89b-107828203bbe.png')`
      }}>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Text content positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <h2 className="text-white font-bold uppercase tracking-wider text-sm md:text-base mb-3">
              KEYNOTE TOPICS
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">Insights for Forward-Thinking Organizations</h3>
            <p className="text-white/90">
              Jason delivers thought-provoking keynotes on emerging technologies 
              that are reshaping industries and transforming the enterprise landscape
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => <Card key={index} className="glass-morphism p-6 hover:shadow-accent/10 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">{topic.icon}</div>
              <h4 className="text-xl font-bold mb-2">{topic.title}</h4>
              <p className="text-white/70">{topic.description}</p>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default TopicsSection;