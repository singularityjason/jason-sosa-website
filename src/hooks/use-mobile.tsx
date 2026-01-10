
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Using lazy initialization for the state to prevent hydration mismatch
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Initialize with current window size on mount, avoiding SSR issues
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT;
    }
    // Default to false if window is not available (SSR)
    return false;
  });

  React.useEffect(() => {
    // Use ResizeObserver to efficiently detect size changes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Use requestAnimationFrame for better performance
    let resizeTimer: number | null = null;
    const handleResize = () => {
      if (resizeTimer) {
        window.cancelAnimationFrame(resizeTimer);
      }
      resizeTimer = window.requestAnimationFrame(checkMobile);
    };
    
    // Add event listener with passive option for better performance
    window.addEventListener("resize", handleResize, { passive: true });

    // Clean up event listeners
    return () => {
      if (resizeTimer) {
        window.cancelAnimationFrame(resizeTimer);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
