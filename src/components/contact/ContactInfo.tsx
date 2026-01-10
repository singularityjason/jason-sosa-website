import React from "react";
import { Mail, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
const ContactInfo = () => {
  // Email obfuscation technique
  const createEmail = () => {
    const parts = ['jason', '@', 'jasonsosa.com'];
    return parts.join('');
  };
  return <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
        <p className="text-white/70 mb-8">
          Jason is available for keynote speaking engagements worldwide. For inquiries about availability,
          speaking fees, or custom presentation requests, please use one of the contact methods below.
        </p>
      </div>

      <div className="space-y-6">
        

        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-accent mr-4 mt-1" />
          <div>
            <h3 className="text-white font-semibold text-lg">Location</h3>
            <p className="text-white/70">Speaking engagements available ASEAN, APAC,  EU, and MENA regions. </p>
          </div>
        </div>

        <div className="flex items-start">
          <Calendar className="h-6 w-6 text-accent mr-4 mt-1" />
          <div>
            <h3 className="text-white font-semibold text-lg">Schedule</h3>
            <p className="text-white/70 mb-2">
              Check availability and book a call directly
            </p>
            <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
              <a href="https://calendly.com/jasonsosa" target="_blank" rel="noopener noreferrer">
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default ContactInfo;