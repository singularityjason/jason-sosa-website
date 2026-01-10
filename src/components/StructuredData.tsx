
import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generates structured data for FAQ sections
 */
export const FAQStructuredData: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

/**
 * Generates structured data for video content
 */
export const VideoStructuredData: React.FC<{ 
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
}> = ({ name, description, thumbnailUrl, uploadDate, contentUrl }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "contentUrl": contentUrl
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

/**
 * Generates structured data for breadcrumb navigation
 */
export const BreadcrumbStructuredData: React.FC<{ 
  items: {name: string, item: string}[] 
}> = ({ items }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default {
  FAQStructuredData,
  VideoStructuredData,
  BreadcrumbStructuredData
};
