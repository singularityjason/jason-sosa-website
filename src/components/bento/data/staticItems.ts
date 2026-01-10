import { BentoItem } from "../types";

// Companies Built
export const companyItems: BentoItem[] = [
  {
    id: "company-imrsv",
    type: "text",
    size: "wide",
    title: "IMRSV",
    subtitle: "Emotion Recognition AI",
    description: "Acquired by Kairos",
    accentColor: "from-blue-500/20 via-cyan-500/10 to-transparent",
    source: "static",
    featured: true,
    order: 1,
  },
  {
    id: "company-orchestrator",
    type: "text",
    size: "wide",
    title: "Orchestrator",
    subtitle: "AI-Powered Automation",
    description: "Current Venture",
    accentColor: "from-accent/30 via-accent/10 to-transparent",
    source: "static",
    featured: true,
    order: 2,
  },
  {
    id: "company-azara",
    type: "text",
    size: "medium",
    title: "Azara AI",
    subtitle: "Enterprise AI Agents",
    description: "Acquired 2025",
    accentColor: "from-purple-500/20 via-purple-500/5 to-transparent",
    source: "static",
    order: 5,
  },
  {
    id: "company-radio",
    type: "text",
    size: "medium",
    title: "Radio Research",
    subtitle: "Music Analytics Platform",
    description: "Acquired by Troy Research",
    accentColor: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    source: "static",
    order: 6,
  },
];

// Awards & Recognition
export const awardItems: BentoItem[] = [
  {
    id: "award-time",
    type: "stats",
    size: "medium",
    title: "Time Magazine",
    statValue: "TIME",
    statLabel: "Top Startup NYC",
    source: "static",
    order: 10,
  },
  {
    id: "award-bi",
    type: "stats",
    size: "medium",
    title: "Business Insider",
    statValue: "TOP 25",
    statLabel: "Startups to Watch",
    source: "static",
    order: 11,
  },
];

// Stats Cells
export const statsItems: BentoItem[] = [
  {
    id: "stat-acquisitions",
    type: "stats",
    size: "medium",
    statValue: "3",
    statLabel: "Companies Acquired",
    source: "static",
    order: 20,
  },
  {
    id: "stat-years",
    type: "stats",
    size: "medium",
    statValue: "25+",
    statLabel: "Years in AI",
    source: "static",
    order: 21,
  },
  {
    id: "stat-capital",
    type: "stats",
    size: "medium",
    statValue: "$100M+",
    statLabel: "Capital Facilitated",
    source: "static",
    order: 22,
  },
  {
    id: "stat-ieee",
    type: "stats",
    size: "medium",
    statValue: "IEEE",
    statLabel: "CVPR Published",
    source: "static",
    order: 23,
  },
];

// Media Appearances - Logo Group
export const mediaLogosItem: BentoItem = {
  id: "media-logos",
  type: "logoGroup",
  size: "wide",
  title: "Featured In",
  logos: [
    { name: "Forbes", url: "/lovable-uploads/3c6d8a93-ffcd-4d1e-ab79-30730f5a8bc3.png" },
    { name: "Bloomberg", url: "/logos/bloomberg.svg" },
    { name: "CNN", url: "/logos/cnn.svg" },
    { name: "WSJ", url: "/logos/wsj.svg" },
    { name: "NYT", url: "/logos/nyt.svg" },
    { name: "Wired", url: "/logos/wired.svg" },
  ],
  source: "static",
  order: 30,
};

// Speaking Clients - Logo Group
export const speakingClientsItem: BentoItem = {
  id: "speaking-clients",
  type: "logoGroup",
  size: "wide",
  title: "Keynote Clients",
  logos: [
    { name: "Bank of America", url: "/lovable-uploads/66ad1914-4df8-42f6-b3a5-2a96f74a6f78.png" },
    { name: "Stanford", url: "/lovable-uploads/ee34652c-0e56-40b5-a5f7-a8ed3c7a1a6c.png" },
    { name: "Samsung", url: "/logos/samsung.svg" },
    { name: "Stryker", url: "/lovable-uploads/a5d82c6b-f512-43a4-a938-88135016f1e7.png" },
    { name: "Citywire", url: "/lovable-uploads/b934d438-dc2c-472c-95c8-a8a1bc1de795.png" },
    { name: "Singularity U", url: "/lovable-uploads/2949721d-3613-4262-b4b3-abf89eb5003d.png" },
  ],
  source: "static",
  order: 31,
};

// Techstars TV Show highlight
export const techstarsItem: BentoItem = {
  id: "techstars-tv",
  type: "text",
  size: "medium",
  title: "Bloomberg Techstars",
  subtitle: "Inaugural Class",
  description: "Later became a TV show",
  accentColor: "from-sky-500/20 via-sky-500/5 to-transparent",
  source: "static",
  order: 12,
};

// Combine all static items
export const allStaticItems: BentoItem[] = [
  ...companyItems,
  ...awardItems,
  ...statsItems,
  mediaLogosItem,
  speakingClientsItem,
  techstarsItem,
];
