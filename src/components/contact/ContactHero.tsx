
import React from "react";

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-16 min-h-[40vh]">
      <div className="absolute inset-0" style={{ backgroundColor: "#111111" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-background"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl">
            Have questions about booking Jason for your next event? Need more information about his speaking topics? 
            Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
