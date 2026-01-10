
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Jason Sosa | Book AI Keynote Speaker for Your Event</title>
        <meta name="description" content="Book Jason Sosa for your next keynote on AI, blockchain, digital transformation, and the future of technology. Available for events in Singapore, Dubai, and APAC." />
        <link rel="canonical" href="https://jasonsosa.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Jason Sosa | Book AI Keynote Speaker" />
        <meta property="og:description" content="Book Jason Sosa for your next keynote on AI, blockchain, digital transformation, and the future of technology." />
        <meta property="og:url" content="https://jasonsosa.com/contact" />
        <meta property="og:image" content="https://jasonsosa.com/jason-sosa-speaker.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Jason Sosa | Book AI Keynote Speaker" />
        <meta name="twitter:description" content="Book Jason Sosa for your next keynote on AI, blockchain, digital transformation, and the future of technology." />
        <meta name="twitter:image" content="https://jasonsosa.com/jason-sosa-speaker.jpg" />
      </Helmet>
      
      <Header />
      <ContactHero />
      <div id="main-content" className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
