
import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useAnchorNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navigateToAnchor = useCallback((anchor: string) => {
    // If we're already on the homepage, just update hash and scroll to the anchor
    if (location.pathname === '/') {
      // Update the URL with hash without page reload
      window.history.replaceState(null, '', `/#${anchor}`);
      
      // Use setTimeout to ensure it runs after the current execution context
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
      return;
    }
    
    // If on a different page, navigate to homepage with hash
    navigate(`/#${anchor}`);
    
    // Then scroll to anchor after navigation completes
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small delay to ensure the page has loaded
  }, [location.pathname, navigate]);

  return { navigateToAnchor };
};
