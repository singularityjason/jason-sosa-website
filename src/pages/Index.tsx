
import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import TopicsSection from "@/components/TopicsSection";
import PortfolioSection from "@/components/PortfolioSection";
import VideoPortfolioSection from "@/components/VideoPortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  // Preload critical assets for faster loading
  useEffect(() => {
    // Add preload hints programmatically for the background image
    const preloadBackgroundImage = () => {
      const linkEl = document.createElement('link');
      linkEl.rel = 'preload';
      linkEl.as = 'image';
      linkEl.href = '/lovable-uploads/6b6aaf2b-ee52-4c17-b6e7-ce5826ecc91f.png';
      linkEl.setAttribute('fetchPriority', 'high');
      document.head.appendChild(linkEl);
    };
    
    // Preload the video file
    const preloadVideo = () => {
      // Only preload video on desktop
      if (window.innerWidth < 768) return;
      
      const linkEl = document.createElement('link');
      linkEl.rel = 'preload';
      linkEl.as = 'video';
      linkEl.href = 'https://player.vimeo.com/progressive_redirect/playback/1085260201/rendition/1080p/file.mp4';
      linkEl.type = 'video/mp4';
      document.head.appendChild(linkEl);
    };
    
    // Add DNS preconnects for Vimeo resources
    const addVimeoPreconnects = () => {
      const domains = [
        'https://player.vimeo.com',
        'https://f.vimeocdn.com',
        'https://i.vimeocdn.com'
      ];
      
      domains.forEach(domain => {
        if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preconnect';
          link.href = domain;
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }
      });
    };
    
    // Execute preloading in sequence for better prioritization
    if (!document.querySelector('link[rel="preload"][href*="6b6aaf2b-ee52-4c17-b6e7-ce5826ecc91f.png"]')) {
      preloadBackgroundImage();
    }
    
    // Add Vimeo preconnects early
    addVimeoPreconnects();
    
    // Attempt to preload video after image is loaded
    setTimeout(() => {
      preloadVideo();
    }, 500);
    
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Jason Sosa | AI Keynote Speaker | Finance Transformation & Bitcoin Expert</title>
        <meta name="description" content="AI keynote speaker specializing in traditional finance transformation and Bitcoin strategy. Featured at Bank of America, CityWire Asia. Book Jason for AI innovation, digital transformation, and future of work keynotes to Fortune 500 companies globally." />
        <meta name="keywords" content="AI keynote speaker, AI financial services expert, traditional finance AI innovation, banking AI transformation, AI future of work speaker, corporate AI implementation, Fortune 500 AI consultant, digital transformation speaker" />
        <link rel="canonical" href="https://jasonsosa.com/" />
        
        {/* Critical preloads for faster loading */}
        <link rel="preconnect" href="https://player.vimeo.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://f.vimeocdn.com" crossOrigin="anonymous" />
        
        {/* Preload hero image with high priority */}
        <link 
          rel="preload" 
          href="/lovable-uploads/6b6aaf2b-ee52-4c17-b6e7-ce5826ecc91f.png" 
          as="image" 
          type="image/png"
          fetchPriority="high"
        />
        
        {/* Open Graph tags for better social sharing */}
        <meta property="og:title" content="Jason Sosa | AI Keynote Speaker | Finance & Bitcoin Innovation Expert" />
        <meta property="og:description" content="AI keynote speaker and thought leader specializing in traditional finance transformation, Bitcoin strategy, and corporate AI implementation. Featured at Bank of America, CityWire Asia. Book for Fortune 500 events." />
        <meta property="og:url" content="https://jasonsosa.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://jasonsosa.com/jason-sosa-speaker.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Jason Sosa, AI Keynote Speaker and Finance Innovation Expert" />
        <meta property="og:site_name" content="Jason Sosa - AI Keynote Speaker" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jason Sosa | AI Keynote Speaker | Finance Transformation Expert" />
        <meta name="twitter:description" content="AI keynote speaker for Fortune 500 companies. Expert in traditional finance transformation, Bitcoin strategy, transhumanism, and future of work." />
        <meta name="twitter:image" content="https://jasonsosa.com/jason-sosa-speaker.jpg" />
        
        {/* Geographic targeting */}
        <meta name="geo.region" content="Global" />
        <meta name="geo.placename" content="APAC, MENA, EU, North America" />
        
        {/* Structured Data for Homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://jasonsosa.com/#person",
                "name": "Jason Sosa",
                "jobTitle": "AI Keynote Speaker & CEO",
                "description": "AI keynote speaker specializing in traditional finance transformation and Bitcoin strategy",
                "url": "https://jasonsosa.com",
                "image": "https://jasonsosa.com/jason-sosa-speaker.jpg",
                "sameAs": [
                  "https://linkedin.com/in/jasonsosa",
                  "https://twitter.com/jasonsosa"
                ],
                "knowsAbout": [
                  "Artificial Intelligence",
                  "Traditional Finance Transformation",
                  "Bitcoin Treasury Strategy",
                  "Digital Transformation",
                  "Future of Work",
                  "Transhumanism",
                  "Corporate Innovation"
                ],
                "hasCredential": [
                  "Bank of America Keynote Speaker",
                  "CityWire Asia Featured Expert",
                  "Glow Financial Presenter"
                ],
                "worksFor": {
                  "@type": "Organization",
                  "name": "Bitcoin Treasury Software Company"
                }
              },
              {
                "@type": "Service",
                "@id": "https://jasonsosa.com/#service",
                "name": "AI & Finance Keynote Speaking",
                "description": "Professional keynote speaking services specializing in AI innovation, traditional finance transformation, and Bitcoin strategy for Fortune 500 companies",
                "provider": {
                  "@id": "https://jasonsosa.com/#person"
                },
                "serviceType": "Keynote Speaking",
                "areaServed": [
                  "APAC",
                  "MENA", 
                  "Europe",
                  "North America"
                ],
                "audience": [
                  "Fortune 500 Companies",
                  "Financial Services",
                  "Hedge Funds",
                  "Board of Directors"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://jasonsosa.com/#website",
                "url": "https://jasonsosa.com",
                "name": "Jason Sosa - AI Keynote Speaker",
                "description": "AI keynote speaker specializing in traditional finance transformation and Bitcoin strategy",
                "publisher": {
                  "@id": "https://jasonsosa.com/#person"
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <Header />
      <main id="main-content">
        <HeroSection />
        <ClientLogos />
        <TopicsSection />
        <PortfolioSection />
        <VideoPortfolioSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
