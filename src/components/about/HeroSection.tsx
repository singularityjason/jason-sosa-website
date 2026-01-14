import React from "react";
import { ArrowDown } from "lucide-react";
const HeroSection = () => {
  return <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0" style={{
      backgroundColor: "#111111",
      zIndex: 1
    }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url('/lovable-uploads/6b6aaf2b-ee52-4c17-b6e7-ce5826ecc91f.webp')`,
        zIndex: 2
      }} role="img" aria-label="Jason Sosa at a keynote event"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-background" style={{
        zIndex: 5
      }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 mt-16 text-center">
        <h2 className="text-accent uppercase tracking-wider text-sm font-medium mb-4 reveal opacity-0 md:text-xl">
          KEYNOTE SPEAKER | INNOVATION STRATEGY | TECHNOLOGIST
        </h2>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 text-gradient reveal opacity-0 leading-tight py-2">Speaking From Experience</h1>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto reveal opacity-0">25 years building AI companies, from the factory floor to advising Fortune 500 executives on innovation strategy.</p>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20" aria-hidden="true">
        <ArrowDown className="h-10 w-10 text-accent" />
      </div>
    </section>;
};
export default React.memo(HeroSection);