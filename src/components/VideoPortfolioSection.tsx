
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import VideoPopup from "./VideoPopup";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
}

const VideoPortfolioSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const videoItems: VideoItem[] = [
    {
      id: "2",
      title: "The Coming Transhuman Era: Jason Sosa at TEDxGrandRapids",
      description: "Sosa is the founder and CEO of IMRSV, a computer vision and artificial intelligence company and was named one of \"10 Startups to Watch in NYC\" by Time Inc. and one of \"25 Hot and...",
      thumbnail: "/lovable-uploads/adc79355-2449-45f5-9874-d51fc16986b6.png",
      youtubeUrl: "https://www.youtube.com/watch?v=1Ugo2KEV2XQ"
    },
    {
      id: "1",
      title: "Push Humanity Forward",
      description: "Jason Sosa shares his vision on how we can collectively push humanity forward through technological innovation, ethical AI development, and creating systems that benefit all of humanity.",
      thumbnail: "/lovable-uploads/26273aba-8a72-473f-846a-12f0f56060a1.png",
      youtubeUrl: "https://www.youtube.com/watch?v=4T0HZYJx5Qs"
    },
    {
      id: "3",
      title: "A.I. Expert Jason Sosa Discusses Overcoming Imposter Syndrome And Qualifying Himself In High Tech",
      description: "Much more at: www.fullexposurepodcast.com/sosa Jason Sosa - AI Strategist & Entrepreneur. Jason Sosa is one of the top artificial intelligence strategists working today. Fo...",
      thumbnail: "/lovable-uploads/b3f5d6a5-055c-4723-b8fe-29447e89628c.png",
      youtubeUrl: "https://www.youtube.com/watch?v=gcfeeonT-VI"
    },
    {
      id: "4",
      title: "What is the Future of Work?",
      description: "The future of work is a self-sustaining company of information and talent. Choose to embrace...",
      thumbnail: "/lovable-uploads/b9582220-eed0-40e5-af4b-bc84df0580c5.png",
      youtubeUrl: "https://www.youtube.com/watch?v=2Dyc61j0V2E"
    }
  ];

  const handleVideoClick = (youtubeUrl: string) => {
    setSelectedVideo(youtubeUrl);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black/80 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-accent uppercase tracking-wider text-sm md:text-base font-medium mb-3">
            VIDEO PORTFOLIO
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Featured Keynotes & Interviews
          </h3>
          <p className="text-white/70">
            Watch Jason's past speaking engagements and interviews discussing the future of AI, technology, and business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {videoItems.map((video) => {
            // Custom alt text for each video
            let altText = "";
            
            switch(video.id) {
              case "1":
                altText = "Push Humanity Forward - Jason Sosa keynote on technological innovation and ethical AI development for societal advancement";
                break;
              case "2":
                altText = "The Coming Transhuman Era - Jason Sosa's TEDxGrandRapids talk on future human evolution and technological integration";
                break;
              case "3":
                altText = "A.I. Expert Jason Sosa on Full Exposure Podcast discussing overcoming imposter syndrome in high-tech entrepreneurship";
                break;
              case "4":
                altText = "What is the Future of Work - Jason Sosa's presentation on AI automation and the evolution of employment in the digital age";
                break;
              default:
                altText = `${video.title} - Jason Sosa keynote presentation on AI and future technology`;
            }
            
            return (
              <Card 
                key={video.id} 
                className="bg-black/40 border-white/10 overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                <div className="relative aspect-video cursor-pointer" onClick={() => handleVideoClick(video.youtubeUrl)}>
                  <img 
                    src={video.thumbnail} 
                    alt={altText}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/50 transition-all duration-300">
                    <PlayCircle className="h-16 w-16 text-accent opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-2 line-clamp-2">{video.title}</h4>
                  <p className="text-white/60 text-sm line-clamp-3 mb-4">{video.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/10 hover:bg-white/5"
                    onClick={() => handleVideoClick(video.youtubeUrl)}
                  >
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
            <Link to="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
      
      {/* Video Popup */}
      <VideoPopup 
        videoUrl={selectedVideo} 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup}
      />
    </section>
  );
};

export default VideoPortfolioSection;
