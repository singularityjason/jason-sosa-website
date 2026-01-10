
import React from "react";
import { Card } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [{
    quote: "Jason brings exceptional energy, enthusiasm, and integrity to every project. His strategic mindset, branding expertise, and ability to build and scale high-performing teams make him a valuable partner.",
    author: "Shahid Chishty",
    position: "Strategic Investment & Board Advisor | C-Suite Executive"
  }, {
    quote: "Jason brings passion, vision, and a rare breadth of skills to every project. His experience with innovative startups and dedication to leadership make him an invaluable asset.",
    author: "Stephen Moore PhD",
    position: "VP of AI & Data Science"
  }, {
    quote: "Jason's drive, focus, and energy are unmatched. As a smart and passionate entrepreneur, he gets things done quickly and effectively. I highly recommend him.",
    author: "Tom Higley",
    position: "Founder & CEO, X Genesis | Techstars Mentor"
  }];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-accent uppercase tracking-wider text-sm md:text-base font-medium mb-3">
            TESTIMONIALS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            What Industry Leaders Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-morphism p-8 relative transform transition-all duration-300 hover:-translate-y-2">
              <QuoteIcon className="h-8 w-8 text-accent/30 absolute -top-4 left-8" />
              <p className="text-white/80 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-white/60 text-sm">
                  {testimonial.position}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
