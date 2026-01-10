
import React from "react";

const SkipLink = () => {
  return (
    <a 
      href="#main-content"
      className="bg-accent text-white p-3 absolute -top-20 left-6 z-50 focus:top-6 transition-all rounded-md"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
