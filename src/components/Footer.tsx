import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Linkedin, Youtube, Mail, Calendar } from "lucide-react";
import { useAnchorNavigation } from "@/hooks/useAnchorNavigation";
const Footer = () => {
  const navigate = useNavigate();
  const {
    navigateToAnchor
  } = useAnchorNavigation();
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
  };
  const handleTopicsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToAnchor("topics");
  };
  const handleSpeakingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToAnchor("speaking");
  };
  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/about");
    window.scrollTo(0, 0);
  };
  return <footer className="bg-background py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="/" onClick={handleLogoClick} className="inline-block mb-4">
              <img src="/lovable-uploads/9665de38-19c5-4203-8ea9-2424aba5422e.webp" alt="Jason Sosa" className="h-12 w-auto" />
            </a>
            <p className="text-white/60 mb-6 max-w-md">Jason Sosa is a technologist and keynote speaker on AI and the future of finance. He has delivered keynotes for Bank of America, Samsung, NASDAQ, and Stanford to executive audiences globally.</p>
            <div className="flex space-x-4">
              <a href="https://x.com/jasonsosa" aria-label="X (Twitter)" className="text-white/60 hover:text-accent transition-colors">
                <X size={20} />
              </a>
              <a href="https://www.linkedin.com/in/jasonsosa" aria-label="LinkedIn" className="text-white/60 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-white/60 hover:text-accent transition-colors">
                
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">For Event Planners</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/topics" className="text-white/60 hover:text-white transition-colors">
                  Keynote Topics
                </Link>
              </li>
              <li>
                <Link to="/speaking" className="text-white/60 hover:text-white transition-colors">
                  Speaking Formats
                </Link>
              </li>
              <li>
                <Link to="/speaker-kit" className="text-white/60 hover:text-white transition-colors">
                  Speaker Kit
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-white transition-colors">
                  Check Availability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" onClick={handleAboutClick} className="text-white/60 hover:text-white transition-colors">
                  About Jason
                </a>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/60 hover:text-white transition-colors">
                  Past Clients
                </Link>
              </li>
            </ul>
          </div>
          
          
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Jason Sosa. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/40 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/40 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;