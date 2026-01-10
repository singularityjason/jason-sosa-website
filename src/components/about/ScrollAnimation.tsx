
import React, { useEffect, useRef } from "react";

const ScrollAnimation = () => {
  // Use ref to store the observer
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Performance optimized observer options
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 50px 0px", // Start animation slightly before elements come into view
      threshold: 0.1,
    };

    // Create a single observer instance and reuse it
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother animations
          requestAnimationFrame(() => {
            entry.target.classList.add("animate-fade-in");
          });
          // Unobserve after animation is triggered
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements at once for better performance
    const elements = document.querySelectorAll(".reveal");
    
    elements.forEach((el) => {
      // Remove any existing animation classes first
      el.classList.remove("animate-fade-in");
      // Start observing the element
      observerRef.current?.observe(el);
    });

    return () => {
      // Clean up by disconnecting the observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default React.memo(ScrollAnimation);
