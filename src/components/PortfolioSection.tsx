
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FAQStructuredData } from "./StructuredData";
import { ArrowRight, Sparkles } from "lucide-react";

interface PortfolioItem {
  name: string;
  logo: string;
  eventTitle: string;
  eventDescription: string;
}

const PortfolioSection = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      name: "Bank of America",
      logo: "/lovable-uploads/66ad1914-4df8-42f6-b3a5-2a96f74a6f78.webp",
      eventTitle: "Future of Finance Summit",
      eventDescription: "Keynote on AI implementation in banking and financial services, discussing the transformation of customer experience through machine learning algorithms."
    },
    {
      name: "Singularity University",
      logo: "/lovable-uploads/2949721d-3613-4262-b4b3-abf89eb5003d.webp",
      eventTitle: "Exponential Technologies Conference",
      eventDescription: "Featured speaker discussing the convergence of AI, blockchain, and transhuman technologies and their implications for future society."
    },
    {
      name: "CityWire Asia",
      logo: "/lovable-uploads/b934d438-dc2c-472c-95c8-a8a1bc1de795.webp",
      eventTitle: "Wealth Management Forum",
      eventDescription: "Keynote presentation to CityWire Asia Wealth Management on AI and the Future of Money - focus on Bitcoin and AI convergence"
    },
    {
      name: "Stanford Junior University",
      logo: "/lovable-uploads/ee34652c-0e56-40b5-a5f7-a8ed3c7a1a6c.webp",
      eventTitle: "Future of Work Symposium",
      eventDescription: "Guest lecturer on the impact of artificial intelligence on education and workforce development, exploring the human-AI collaboration paradigm."
    },
    {
      name: "Stryker",
      logo: "/lovable-uploads/a5d82c6b-f512-43a4-a938-88135016f1e7.webp",
      eventTitle: "Healthcare Innovation Summit",
      eventDescription: "Keynote on AI applications in medical devices and healthcare innovation, exploring the future of patient care through advanced technologies."
    },
    {
      name: "GVTC",
      logo: "/lovable-uploads/844b747d-e266-4a0f-afa0-67c466bf26de.webp",
      eventTitle: "Digital Transformation Conference",
      eventDescription: "Executive presentation on telecommunications evolution and the role of AI in creating smart communication networks."
    },
    {
      name: "Glow",
      logo: "/lovable-uploads/bb07fffe-fdc8-4fed-9684-eb7b5ebb85de.webp",
      eventTitle: "Tech Startup Summit",
      eventDescription: "Presentation on entrepreneurial insights and the future of agent-to-agent commerce applications with blockchain as the monetary rail."
    },
    {
      name: "Aiken University",
      logo: "/lovable-uploads/dc63d246-f608-4f2f-abea-a371587422c8.webp",
      eventTitle: "Educational Technology Forum",
      eventDescription: "Featured speaker discussing the integration of AI into educational curricula and preparing students for an AI-augmented future."
    },
  ];

  const keynoteTitles = [
    "The Future of AI - What Comes after ChatGPT?",
    "AI Implementation - Strategy, Operations, Use Cases",
    "The Coming Transhuman Era",
    "The Future of Work and Education",
    "AI, Robotics, Crypto and the Future of Money",
  ];

  const speakerCategories = [
    "Artificial Intelligence",
    "Finance",
    "Blockchain",
    "Digital Assets",
    "Alternative Investments",
    "Bitcoin",
    "Entrepreneurship",
    "Digital Strategy",
    "Innovation",
  ];

  // FAQ data for structured data
  const faqItems = [
    {
      question: "What topics does Jason Sosa speak about?",
      answer: "Jason Sosa delivers keynote speeches on The Future of AI, Artificial Intelligence for Business, The Coming Transhuman Era, The Future of Work and Education, and Blockchain & Digital Economy topics."
    },
    {
      question: "Which organizations has Jason Sosa delivered keynotes for?",
      answer: "Jason has delivered keynote presentations for organizations including Bank of America, Singularity University, CityWire Asia, Stanford University, Stryker, GVTC, Glow, and Aiken University."
    },
    {
      question: "Where does Jason Sosa deliver keynote speeches?",
      answer: "Jason delivers keynote speeches globally with a focus on Singapore, Dubai, Hong Kong, Tokyo, Bangkok, and throughout the APAC region."
    },
    {
      question: "What industries benefit from Jason Sosa's keynote presentations?",
      answer: "Financial institutions, tech companies, educational organizations, healthcare innovators, and businesses undergoing digital transformation benefit from Jason's expertise in AI, blockchain, and emerging technologies."
    },
    {
      question: "How can I book Jason Sosa for a speaking engagement?",
      answer: "You can book Jason Sosa for your event by visiting the Contact page on his website to submit your event details and requirements."
    }
  ];

  return (
    <section id="speaking" className="py-20 bg-black/60">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-accent uppercase tracking-wider text-sm md:text-base font-medium mb-3">
            PORTFOLIO
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 speakable">
            Previous Keynote Speeches
          </h3>
          <p className="text-white/70">
            Jason has delivered impactful keynotes for leading organizations and events worldwide
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {portfolioItems.map((item, index) => {
            // Custom alt text for each organization based on their focus/industry
            let altText = "";
            
            switch(item.name) {
              case "Bank of America":
                altText = "Bank of America - Financial sector client where Jason Sosa delivered keynotes on AI innovation and fintech transformation";
                break;
              case "Singularity University":
                altText = "Singularity University - Technology education institution where Jason Sosa spoke about exponential technologies and the future of AI";
                break;
              case "CityWire Asia":
                altText = "CityWire Asia - Asian financial media company featuring Jason Sosa's insights on AI adoption in Asian markets";
                break;
              case "Stanford Junior University":
                altText = "Stanford University - Academic institution where Jason Sosa presented on AI ethics and technological advancement";
                break;
              case "Stryker":
                altText = "Stryker - Healthcare technology company that hosted Jason Sosa for keynotes on AI implementation in healthcare solutions";
                break;
              case "GVTC":
                altText = "GVTC - Telecommunications company client of Jason Sosa for digital transformation and emerging technology keynotes";
                break;
              case "Glow":
                altText = "Glow - Tech startup where Jason Sosa shared entrepreneurial insights and AI innovation strategies";
                break;
              case "Aiken University":
                altText = "Aiken University - Educational institution that invited Jason Sosa to speak on the future of work and AI in education";
                break;
              default:
                altText = `${item.name} - Client and keynote audience of Jason Sosa's presentations on AI innovation`;
            }
            
            return (
              <div key={index} className="relative group isolate">
                <Card 
                  className="glass-morphism p-6 flex items-center justify-center h-32 hover:shadow-accent/10 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <img
                    src={item.logo}
                    alt={altText}
                    className="max-h-16 max-w-full object-contain w-auto relative z-10"
                    loading="lazy"
                    width="150"
                    height="60"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col items-center justify-start p-4 text-center transition-opacity duration-300 overflow-y-auto z-20">
                    <h4 className="text-accent font-bold text-sm mb-1">{item.eventTitle}</h4>
                    <p className="text-white/90 text-xs leading-tight">{item.eventDescription}</p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Keynote Topics Section */}
        <div className="mt-20 relative">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 rounded-3xl" />

          <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left side - Header and description */}
              <div className="lg:max-w-md">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="text-accent uppercase tracking-wider text-sm font-medium">Signature Topics</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-bold mb-4 speakable">
                  Keynote Topics
                </h4>
                <p className="text-white/60 mb-6">
                  From AI in finance and digital assets strategy to innovation culture and the future of work. Keynotes that go beyond the hype to deliver actionable insights for corporate events and executive summits.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 group">
                  <Link to="/topics">
                    Explore All Topics
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Right side - Categories grid */}
              <div className="flex-1 lg:max-w-xl">
                <div className="flex flex-wrap gap-3">
                  {speakerCategories.map((category, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-white/[0.05] border border-white/10 text-white/80 hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hidden FAQ structured data for search engines */}
      <FAQStructuredData items={faqItems} />
    </section>
  );
};

export default PortfolioSection;
