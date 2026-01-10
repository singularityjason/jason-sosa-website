import React, { useState, useEffect } from "react";
import { Play, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoPopup from "@/components/VideoPopup";
import VimeoHeroVideo from "@/components/VimeoHeroVideo";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();
  const rotatingWords = ["Finance", "AI Agents", "Education", "Innovation", "Leadership"];
  const handleWatchKeynoteClick = () => {
    setIsVideoPopupOpen(true);
  };
  const handleCloseVideoPopup = () => {
    setIsVideoPopupOpen(false);
  };

  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex(prev => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);
  return <>
      <VimeoHeroVideo videoId="1085260201">
        {/* Content container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Main Content Area */}
          <div className="flex-1 flex items-center pt-32 md:pt-24">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-[1.1]">
                  <span style={{
                  animationDelay: "0.2s"
                }} className={`block opacity-0 animate-text-reveal text-5xl md:text-6xl ${isMobile ? "" : "whitespace-nowrap"}`}>
                    Future of{' '}
                    <span className={`inline-block ${isMobile ? "min-w-[120px]" : "min-w-[200px]"}`}>
                      <span className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                        {rotatingWords[currentWordIndex]}
                      </span>
                    </span>
                  </span>
                  <span style={{
                  animationDelay: "0.4s"
                }} className="block opacity-0 animate-text-reveal text-xl mx-0 my-[20px]">KEYNOTE SPEAKER | INNOVATION STRATEGY | TECHNOLOGIST</span>
                </h1>
                
                <p style={{
                animationDelay: "0.6s"
              }} className="text-lg md:text-xl text-white/80 mb-12 max-w-lg opacity-0 animate-text-reveal">Turning AI agents and finance complexity into competitive advantage. Jason delivers insights that transform technological disruption into strategic opportunity.</p>
                
                {/* CTA Buttons */}
                <div style={{
                animationDelay: "0.8s"
              }} className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-text-reveal">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold group shadow-lg shadow-accent/25">
                    <Link to="/speaking">
                      <Calendar className="w-5 h-5 mr-2" />
                      Check Availability
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleWatchKeynoteClick} className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold bg-white/5 backdrop-blur-sm">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Keynote Reel
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </VimeoHeroVideo>

      {/* Video Popup */}
      {isVideoPopupOpen && <VideoPopup isOpen={isVideoPopupOpen} onClose={handleCloseVideoPopup} videoUrl="https://youtu.be/65OerAFYuKU" />}
    </>;
};
export default HeroSection;