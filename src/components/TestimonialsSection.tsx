
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

interface TestimonialSet {
  title: string;
  testimonials: Testimonial[];
}

const TestimonialsSection = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const testimonialSets: TestimonialSet[] = [
    {
      title: "What Industry Leaders Say",
      testimonials: [
        {
          quote: "Jason brings exceptional energy, enthusiasm, and integrity to every project. His strategic mindset, branding expertise, and ability to build and scale high-performing teams make him a valuable partner.",
          author: "Shahid Chishty",
          position: "Strategic Investment & Board Advisor | C-Suite Executive",
        },
        {
          quote: "Jason brings passion, vision, and a rare breadth of skills to every project. His experience with innovative startups and dedication to leadership make him an invaluable asset.",
          author: "Stephen Moore PhD",
          position: "VP of AI & Data Science",
        },
        {
          quote: "Jason's drive, focus, and energy are unmatched. As a smart and passionate entrepreneur, he gets things done quickly and effectively. I highly recommend him.",
          author: "Tom Higley",
          position: "Founder & CEO, X Genesis | Techstars Mentor",
        },
      ],
    },
    {
      title: "What Customers Say",
      testimonials: [
        {
          quote: "One of the most intelligent, mentally sharp entrepreneurship consultants I've had the pleasure of hiring. Jason is very aware of the tech startup industry and has real world business experience to back it up. Great ROI on the investment.",
          author: "Executive Career Coach",
          position: "Private Equity and Venture Capital Industry Specialist",
        },
        {
          quote: "I had the pleasure of working with Jason on a strategic advisory and executive coaching project in the PE/VC space. He exceeded all expectations and was particularly knowledgeable on the ecosystem, consulting, and latest trends in technology.",
          author: "Tech Startup Fund Advisor",
          position: "Venture Capital & Innovation Strategy",
        },
        {
          quote: "Jason delivered an outstanding keynote at our wealth management conference. His insights on AI and the future of finance resonated deeply with our high-net-worth clients. Professional, engaging, and incredibly knowledgeable.",
          author: "Event Coordinator",
          position: "Financial Wealth Management Summit",
        },
      ],
    },
  ];

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % testimonialSets.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [autoRotate]);

  const handleDotClick = (index: number) => {
    setCurrentSet(index);
    setAutoRotate(false);
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-accent uppercase tracking-wider text-sm md:text-base font-medium mb-3">
            TESTIMONIALS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 transition-opacity duration-500">
            {testimonialSets[currentSet].title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {testimonialSets[currentSet].testimonials.map((testimonial, index) => (
            <Card 
              key={`${currentSet}-${index}`} 
              className="glass-morphism p-8 relative animate-in fade-in duration-700"
            >
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

        <div className="flex justify-center gap-3">
          {testimonialSets.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSet === index 
                  ? 'bg-accent scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`View ${testimonialSets[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
