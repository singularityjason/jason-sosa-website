
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BreadcrumbStructuredData } from "./StructuredData";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);
  
  // Don't show breadcrumbs on homepage
  if (pathnames.length === 0) {
    return null;
  }
  
  // Create breadcrumb items with proper URLs for structured data
  const breadcrumbItems = [
    { name: "Home", item: "https://jasonsosa.com/" },
    ...pathnames.map((name, index) => {
      // Build URL for this level
      const url = `https://jasonsosa.com/${pathnames.slice(0, index + 1).join("/")}`;
      // Format name to be more readable (capitalize first letter)
      const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
      return { name: formattedName, item: url };
    })
  ];

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-2">
      <ol className="flex flex-wrap items-center space-x-2 text-sm">
        {breadcrumbItems.map((breadcrumb, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2 text-white/50">/</span>}
              
              {isLast ? (
                <span className="text-white/70" aria-current="page">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link 
                  to={breadcrumb.item === "https://jasonsosa.com/" ? "/" : breadcrumb.item.replace("https://jasonsosa.com", "")} 
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      
      {/* Add structured data for search engines */}
      <BreadcrumbStructuredData items={breadcrumbItems} />
    </nav>
  );
};

export default Breadcrumb;
