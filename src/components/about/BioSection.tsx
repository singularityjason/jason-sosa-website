import React from "react";
import { cn } from "@/lib/utils";
const BioSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0" style={{
          transitionDelay: "200ms"
        }}>
            <div className="relative">
              
              <img src="/lovable-uploads/0381764e-9ae7-4073-a20e-c52956290819.webp" alt="Jason Sosa - AI strategist, keynote speaker, and technology entrepreneur" className="rounded-xl object-contain w-full max-h-[700px]" loading="lazy" width="600" height="700" />
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-gradient reveal opacity-0" style={{
            transitionDelay: "400ms"
          }}>
              ABOUT JASON
            </h2>
            
            <div className="space-y-6">
              <p className="text-white/80 reveal opacity-0" style={{
              transitionDelay: "500ms"
            }}>After 25 years building AI companies, Jason transforms complex technology into clear, actionable insights. He has raised $5M for his own ventures, facilitated over $100M for client companies, and built multiple companies through to acquisition.</p>

              <p className="text-white/80 reveal opacity-0" style={{
              transitionDelay: "700ms"
            }}>His track record includes Time Magazine's Top Startup in NYC, Business Insider's Top 25 Startups to Watch, and a patented system for facial and behavioral recognition. As a Bloomberg TechStars alumni, Entrepreneur-in-Residence at a $20M venture fund, and participant in 500 Startups and Plug and Play, Jason has been in the trenches of technology innovation for decades.</p>

              <p className="text-white/80 reveal opacity-0" style={{
              transitionDelay: "800ms"
            }}>Featured in Forbes, CNN, The Wall Street Journal, The New York Times, and Wired. He has delivered keynotes for Bank of America, Samsung, Stanford University, NASDAQ, Citywire, Stryker, MIT Enterprise Forum, and the National University of Singapore.</p>

              <div className="pt-8 reveal opacity-0" style={{
              transitionDelay: "900ms"
            }}>
                <h3 className="text-2xl font-bold text-accent mb-4">AN UNCONVENTIONAL PATH</h3>
                <p className="text-white/80 italic">
                  "For a guy who barely graduated high school with a 0.98 GPA and never went to college, his success as a serial entrepreneur would have seemed impossible to predict. His teachers told him he'd be better off digging ditches. Instead, he bartered his way into tech education, taught himself to code, built companies, and now advises Fortune 500 executives on AI strategy."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BioSection;