
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BookingCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black/50 to-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gradient reveal opacity-0">
          Ready to Book Jason for Your Event?
        </h2>
        
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto reveal opacity-0" style={{ transitionDelay: "200ms" }}>
          Connect with our team to discuss how Jason can bring valuable insights and energy to your next conference or corporate event.
        </p>
        
        <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg reveal opacity-0" style={{ transitionDelay: "400ms" }} asChild>
          <Link to="/contact">Book Jason for Your Event</Link>
        </Button>
      </div>
    </section>
  );
};

export default BookingCTA;
