
import { useState, useEffect, useRef } from "react";

interface UseIntersectionObserverProps {
  elementRef: React.RefObject<HTMLElement>;
  threshold?: number;
  rootMargin?: string;
  // Enable/disable the observer
  enabled?: boolean;
  // Add a new option for more eager detection (default: false)
  eagerDetection?: boolean;
}

export const useIntersectionObserver = ({
  elementRef,
  threshold = 0.1,
  // Use a more generous rootMargin to detect elements before they fully appear
  rootMargin = "100px",
  enabled = true,
  eagerDetection = false
}: UseIntersectionObserverProps): boolean => {
  // Default to visible to ensure content loads
  const [isInView, setIsInView] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const inViewTimestampRef = useRef<number | null>(null);
  const wasEverInViewRef = useRef<boolean>(false);
  const mountCountRef = useRef<number>(0);

  useEffect(() => {
    // Track mount count to help with debugging
    mountCountRef.current += 1;
    console.log(`Intersection observer mounted (${mountCountRef.current})`);
    
    // If disabled or no element ref, default to visible and skip observer
    if (!enabled || !elementRef.current) {
      return;
    }

    // Cleanup previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // Check if IntersectionObserver is supported in the browser
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback for browsers without IntersectionObserver support
      setIsInView(true);
      return;
    }

    try {
      // Use a safer implementation with try/catch
      const effectiveThreshold = eagerDetection ? 0 : Math.max(0, Math.min(1, threshold));
      
      const options = { 
        threshold: Array.isArray(threshold) 
          ? threshold 
          : [effectiveThreshold], 
        rootMargin 
      };

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries && entries.length > 0) {
            const isVisible = entries[0].isIntersecting;
            const currentTime = Date.now();
            
            if (isVisible) {
              wasEverInViewRef.current = true;
              inViewTimestampRef.current = currentTime;
              
              console.log("Element came into view");
              setIsInView(true);
            } else if (wasEverInViewRef.current) {
              // Only register as not in view if it was previously in view
              console.log("Element went out of view");
              setIsInView(false);
            }
          }
        },
        options
      );

      if (elementRef.current) {
        observerRef.current.observe(elementRef.current);
        console.log("Intersection observer started tracking element");
      }
    } catch (error) {
      // Default to true if observer fails to ensure content loads
      console.error("Error setting up intersection observer:", error);
      setIsInView(true);
    }

    return () => {
      console.log("Cleaning up intersection observer");
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [elementRef, threshold, rootMargin, enabled, eagerDetection]);

  return isInView;
};
