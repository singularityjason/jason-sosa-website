
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/about/ScrollAnimation";
import HeroSection from "@/components/about/HeroSection";
import BioSection from "@/components/about/BioSection";
import SpeakingPhilosophy from "@/components/about/SpeakingPhilosophy";
import CareerHighlights from "@/components/about/CareerHighlights";

import SpeakingEngagements from "@/components/about/SpeakingEngagements";
import Testimonials from "@/components/about/Testimonials";
import BookingCTA from "@/components/about/BookingCTA";
import { Helmet } from "react-helmet";


const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Jason Sosa | AI Keynote Speaker | Traditional Finance & Bitcoin Innovation Expert</title>
        <meta name="description" content="AI keynote speaker specializing in traditional finance transformation and Bitcoin strategy. Featured at Bank of America, CityWire Asia. Book Jason for AI innovation, finance evolution, and future of work keynotes." />
        <meta name="keywords" content="AI keynote speaker, AI financial services expert, traditional finance AI innovation, banking AI transformation, AI future of work speaker, corporate AI implementation, AI transhumanism keynote" />
        <link rel="canonical" href="https://jasonsosa.com/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Jason Sosa | AI Keynote Speaker | Traditional Finance & Bitcoin Expert" />
        <meta property="og:description" content="AI keynote speaker and thought leader specializing in traditional finance transformation, Bitcoin strategy, and corporate AI implementation. Book for Fortune 500 events." />
        <meta property="og:url" content="https://jasonsosa.com/about" />
        <meta property="og:image" content="https://jasonsosa.com/jason-sosa-speaker.jpg" />
        <meta property="og:site_name" content="Jason Sosa - AI Keynote Speaker" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Jason Sosa | AI Keynote Speaker | Finance & Bitcoin Innovation Expert" />
        <meta property="twitter:description" content="AI keynote speaker for Fortune 500 companies. Expert in traditional finance transformation, Bitcoin strategy, and future of work." />
        <meta name="twitter:image" content="https://jasonsosa.com/jason-sosa-speaker.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jason Sosa",
            "jobTitle": "AI Keynote Speaker & CEO",
            "description": "AI keynote speaker specializing in traditional finance transformation and Bitcoin strategy",
            "url": "https://jasonsosa.com",
            "sameAs": [
              "https://linkedin.com/in/jasonsosa",
              "https://twitter.com/jasonsosa"
            ],
            "knowsAbout": [
              "Artificial Intelligence",
              "Traditional Finance",
              "Bitcoin Treasury",
              "Digital Transformation",
              "Future of Work",
              "Transhumanism",
              "Corporate Innovation"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Keynote Speaker",
              "occupationLocation": {
                "@type": "Place",
                "name": "Global"
              },
              "skills": "AI Innovation, Finance Transformation, Bitcoin Strategy"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Bitcoin Treasury Software Company"
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-24">
        
        <ScrollAnimation />
        <HeroSection />
        <BioSection />
        <CareerHighlights />
        <SpeakingPhilosophy />
        
        <SpeakingEngagements />
        <Testimonials />
        <BookingCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
