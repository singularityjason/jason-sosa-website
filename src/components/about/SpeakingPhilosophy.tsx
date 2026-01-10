import React from "react";
import { Card, CardContent } from "@/components/ui/card";
const SpeakingPhilosophy = () => {
  return <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 text-gradient reveal opacity-0">
            Speaking Philosophy
          </h2>
          
          <p className="text-xl text-white/80 reveal opacity-0">"I don't talk about AI from a slide deck. I talk about it from 25 years of building companies with it. My goal is to give your audience both the inspiration and the practical frameworks they need to take action the next day."</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-black/50 border-white/10 text-white reveal opacity-0" style={{
          transitionDelay: "200ms"
        }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">Built, Not Borrowed</h3>
              <p className="text-white/70">
                Every insight comes from hands-on experience building and scaling AI companies. No recycled research or borrowed opinions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/50 border-white/10 text-white reveal opacity-0" style={{
          transitionDelay: "400ms"
        }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">Executive-Ready Content</h3>
              <p className="text-white/70">
                Complex technology translated into clear strategy. Your audience leaves with frameworks they can apply immediately.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/50 border-white/10 text-white reveal opacity-0" style={{
          transitionDelay: "600ms"
        }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">Trusted by Leaders</h3>
              <p className="text-white/70">
                Bank of America, Samsung, Stanford, NASDAQ, and MIT Enterprise Forum have trusted me to deliver high-stakes keynotes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default SpeakingPhilosophy;