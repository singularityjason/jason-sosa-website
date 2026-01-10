import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnchorNavigation } from "@/hooks/useAnchorNavigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false); // State to force re-render on hash change
  const { navigateToAnchor } = useAnchorNavigation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add effect to handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      // Force re-render when hash changes
      setForceUpdate(prev => !prev);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTopicsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToAnchor("topics");
    setIsMobileMenuOpen(false);
  };

  const handleSpeakingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToAnchor("speaking");
    setIsMobileMenuOpen(false);
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/about");
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };
  
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    // For anchor links (links with # in them)
    if (path.includes('#')) {
      const anchor = path.split('#')[1];
      // Check if we're on home page and if the hash matches
      return location.pathname === '/' && location.hash === `#${anchor}`;
    }
    
    // For regular paths
    if (path === '/') {
      return location.pathname === '/' && !location.hash; // Home is active only if no hash
    }
    return location.pathname.includes(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 will-change-[background] ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
      style={{
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease"
      }}
    >
      <div className="container mx-auto px-6 py-4 md:py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4 md:space-x-12">
            <a href="/" onClick={handleLogoClick}>
              <img src="/lovable-uploads/40a45ce3-148b-4900-8242-7a229b39f300.png" alt="Jason Sosa Logo" className="h-[60px] md:h-[72px] w-auto" />
            </a>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/topics"
                className={`${isActive('/topics') ? 'text-[#0EA5E9]' : 'text-white/80'} hover:text-white transition-colors`}
              >
                Topics
              </Link>
              <Link
                to="/speaking"
                className={`${isActive('/speaking') ? 'text-[#0EA5E9]' : 'text-white/80'} hover:text-white transition-colors`}
              >
                Speaking
              </Link>
              <Link
                to="/about"
                className={`${isActive('/about') ? 'text-[#0EA5E9]' : 'text-white/80'} hover:text-white transition-colors`}
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className={`${isActive('/portfolio') ? 'text-[#0EA5E9]' : 'text-white/80'} hover:text-white transition-colors`}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className={`${isActive('/contact') ? 'text-[#0EA5E9]' : 'text-white/80'} hover:text-white transition-colors`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/speaking"
              className="hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white/70 hover:text-white transition-colors h-10 px-4 py-2"
            >
              Speaking
            </Link>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold bg-accent hover:bg-accent/90 text-white h-10 px-5 py-2 shadow-lg shadow-accent/20 transition-all"
            >
              Book Jason
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white ml-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md p-4 flex flex-col space-y-4 shadow-lg animate-fade-in z-50">
            <Link
              to="/topics"
              className={`${isActive('/topics') ? 'text-[#0EA5E9]' : 'text-white/80'} hover:text-white py-2 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Topics
            </Link>
            <Link
              to="/speaking"
              className={`${isActive('/speaking') ? 'text-[#0EA5E9]' : 'text-white/80'} hover:text-white py-2 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Speaking
            </Link>
            <Link
              to="/about"
              className={`${isActive('/about') ? 'text-[#0EA5E9]' : 'text-white/80'} hover:text-white py-2 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={`${isActive('/portfolio') ? 'text-[#0EA5E9]' : 'text-white/80'} hover:text-white py-2 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`${isActive('/contact') ? 'text-[#0EA5E9]' : 'text-white/80'} hover:text-white py-2 transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-semibold bg-accent hover:bg-accent/90 text-white h-12 px-6 shadow-lg shadow-accent/20 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Jason
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
