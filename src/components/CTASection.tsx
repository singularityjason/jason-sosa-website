
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Download, ArrowRight, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-background to-blue-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15),transparent_70%)]" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Ready to Transform Your Event?
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Give your audience the keynote they'll be talking about for years. Let's discuss how to make your next event unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button className="bg-white text-black hover:bg-white/90 px-10 py-6 text-lg font-semibold group" asChild>
              <Link to="/speaking">
                <Calendar className="mr-2 h-5 w-5" />
                Check Availability
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg" asChild>
              <Link to="/speaker-kit">
                <Download className="mr-2 h-5 w-5" />
                Download Speaker Kit
              </Link>
            </Button>
          </div>

          {/* Response Time */}
          <div className="flex items-center justify-center gap-2 text-white/50 text-sm mb-12">
            <Clock className="h-4 w-4" />
            <span>Typical response time: Under 24 hours</span>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/60">
              <Users className="h-5 w-5" />
              <span>100+ Keynotes Delivered</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <span className="font-semibold text-accent">10+</span>
              <span>Countries</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <span className="font-semibold text-accent">5</span>
              <span>Continents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
