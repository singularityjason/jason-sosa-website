import { BentoItem } from "../types";

// ============================================
// ICP-FOCUSED CONTENT (Event Planners seeking $10K+ keynotes)
// Order flows: Speaking → Credibility → Companies → Impact
// ============================================

// Featured Speaking - Hero content for ICP
// NOTE: TEDx content removed - comes from Supabase projects table to avoid duplication
export const speakingItems: BentoItem[] = [
  {
    id: "speaking-enterprise",
    type: "text",
    size: "wide",
    title: "Enterprise AI Strategy",
    subtitle: "Fortune 500 Keynotes",
    description: "Bank of America • Samsung • Stryker",
    accentColor: "from-accent/30 via-accent/10 to-transparent",
    category: "Speaking",
    source: "static",
    featured: true,
    order: 2,
  },
];

// Speaking Stats - Key metrics for event planners (spread throughout layout)
export const speakingStatsItems: BentoItem[] = [
  {
    id: "stat-keynotes",
    type: "stats",
    size: "wide",
    statValue: "100+",
    statLabel: "Keynotes Delivered",
    source: "static",
    order: 4,  // After clients, before conference
  },
  {
    id: "stat-countries",
    type: "stats",
    size: "medium",
    statValue: "10+",
    statLabel: "Countries",
    source: "static",
    order: 6,  // After conference, before testimonial
  },
  {
    id: "stat-continents",
    type: "stats",
    size: "medium",
    statValue: "5",
    statLabel: "Continents",
    source: "static",
    order: 8,  // After testimonial
  },
];

// Awards & Recognition - Credibility builders
export const awardItems: BentoItem[] = [
  {
    id: "award-time",
    type: "stats",
    size: "tall",
    logoUrl: "/lovable-uploads/time-inc-logo.png",
    statLabel: "Top Startup NYC",
    source: "static",
    order: 10,
  },
  {
    id: "award-bi",
    type: "stats",
    size: "medium",
    logoUrl: "/lovable-uploads/business-insider-logo.png",
    statLabel: "Top 25 Startups to Watch",
    source: "static",
    order: 11,
  },
];

// Projects with missing Supabase images - moved to Supabase
// (Previously fallbackProjectItems - now managed via admin)
export const fallbackProjectItems: BentoItem[] = [];

// ============================================
// SPEAKING ENGAGEMENT ITEMS - MOVED TO SUPABASE
// These are now managed via the admin panel
// ============================================
export const speakingEngagementItems: BentoItem[] = [];

// ============================================
// VIDEO ITEMS - MOVED TO SUPABASE
// These are now managed via the admin panel
// ============================================
export const videoItems: BentoItem[] = [];

// ============================================
// TESTIMONIAL ITEMS (from home page)
// ============================================
export const testimonialItems: BentoItem[] = [
  {
    id: "testimonial-shahid",
    type: "text",
    size: "wide",
    title: '"Jason brings exceptional energy, enthusiasm, and integrity to every project."',
    subtitle: "Shahid Chishty, Strategic Investment & Board Advisor",
    accentColor: "from-green-500/20 via-green-500/5 to-transparent",
    category: "Speaking",
    source: "static",
    order: 60,
  },
  {
    id: "testimonial-moore",
    type: "text",
    size: "medium",
    title: '"Jason brings passion, vision, and a rare breadth of skills."',
    subtitle: "Stephen Moore PhD, VP of AI & Data Science",
    accentColor: "from-blue-500/20 via-blue-500/5 to-transparent",
    category: "Speaking",
    source: "static",
    order: 61,
  },
  {
    id: "testimonial-higley",
    type: "text",
    size: "medium",
    title: '"Jason\'s drive, focus, and energy are unmatched."',
    subtitle: "Tom Higley, Founder & CEO X Genesis | Techstars Mentor",
    accentColor: "from-purple-500/20 via-purple-500/5 to-transparent",
    category: "Speaking",
    source: "static",
    order: 62,
  },
  {
    id: "testimonial-career-coach",
    type: "text",
    size: "wide",
    title: '"One of the most intelligent, mentally sharp entrepreneurship consultants I\'ve hired."',
    subtitle: "Executive Career Coach, Private Equity & Venture Capital",
    accentColor: "from-amber-500/20 via-amber-500/5 to-transparent",
    category: "Speaking",
    source: "static",
    order: 63,
  },
  {
    id: "testimonial-fund-advisor",
    type: "text",
    size: "medium",
    title: '"He exceeded all expectations on strategic advisory and executive coaching."',
    subtitle: "Tech Startup Fund Advisor, Venture Capital & Innovation",
    accentColor: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    category: "Speaking",
    source: "static",
    order: 64,
  },
  {
    id: "testimonial-event-coordinator",
    type: "text",
    size: "medium",
    title: '"Jason delivered an outstanding keynote at our wealth management conference."',
    subtitle: "Event Coordinator, Financial Wealth Management Summit",
    accentColor: "from-rose-500/20 via-rose-500/5 to-transparent",
    category: "Speaking",
    source: "static",
    order: 65,
  },
];

// Companies Built - Track record
export const companyItems: BentoItem[] = [
  {
    id: "company-imrsv",
    type: "text",
    size: "large",
    title: "IMRSV",
    subtitle: "Emotion Recognition AI",
    description: "Acquired by Kairos",
    accentColor: "from-blue-500/20 via-cyan-500/10 to-transparent",
    source: "static",
    featured: true,
    order: 15,
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
    order: 16,
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
    order: 17,
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
    order: 18,
  },
];

// Impact Stats - Big numbers (interspersed with companies)
export const impactStatsItems: BentoItem[] = [
  {
    id: "stat-capital",
    type: "stats",
    size: "wide",
    statValue: "$100M+",
    statLabel: "Capital Facilitated",
    source: "static",
    order: 14,  // Before companies
  },
  {
    id: "stat-acquisitions",
    type: "stats",
    size: "wide",
    statValue: "3",
    statLabel: "Companies Acquired",
    source: "static",
    order: 17,  // Between companies
  },
];

// Academic & Research - Credibility
export const academicItems: BentoItem[] = [
  {
    id: "stat-ieee",
    type: "stats",
    size: "medium",
    statValue: "IEEE",
    statLabel: "CVPR Published",
    source: "static",
    order: 25,
  },
  {
    id: "stat-years",
    type: "stats",
    size: "medium",
    statValue: "25+",
    statLabel: "Years in AI",
    source: "static",
    order: 26,
  },
];

// Media Appearances - Logo Group (9 logos - expanded from 6)
export const mediaLogosItem: BentoItem = {
  id: "media-logos",
  type: "logoGroup",
  size: "large",  // Increased to large to fit 9 logos
  title: "Featured In",
  logos: [
    { name: "Forbes", url: "/lovable-uploads/3c6d8a93-ffcd-4d1e-ab79-30730f5a8bc3.png" },
    { name: "Bloomberg", url: "/lovable-uploads/bloomberg-preview.png" },
    { name: "CNN", url: "/lovable-uploads/c0ae8564-b87c-49b6-87e1-f959e7949cd9.png" },
    { name: "Wired", url: "/lovable-uploads/wired-logo.png" },
    { name: "Tech in Asia", url: "/lovable-uploads/675c8d4a-900e-4b8e-8ae6-0dadf20c0648.png" },
    { name: "The Verge", url: "/lovable-uploads/face-detection-verge.jpg" },
    // Additional logos from home page
    { name: "Entrepreneur", url: "/lovable-uploads/1e9233d3-5592-410f-914c-aedf10827631.png" },
    { name: "Esquire", url: "/lovable-uploads/9a8c7dcf-ce96-4254-882b-d04aa9cf534b.png" },
    { name: "Fast Company", url: "/lovable-uploads/a51ada11-80d2-4476-b764-841b30596518.png" },
  ],
  source: "static",
  order: 30,
};

// Speaking Clients - Logo Group (ICP-focused, large size)
export const speakingClientsItem: BentoItem = {
  id: "speaking-clients",
  type: "logoGroup",
  size: "large",
  title: "Keynote Clients",
  logos: [
    { name: "Bank of America", url: "/lovable-uploads/66ad1914-4df8-42f6-b3a5-2a96f74a6f78.png" },
    { name: "Stanford", url: "/lovable-uploads/ee34652c-0e56-40b5-a5f7-a8ed3c7a1a6c.png" },
    { name: "Stryker", url: "/lovable-uploads/a5d82c6b-f512-43a4-a938-88135016f1e7.png" },
    { name: "Citywire", url: "/lovable-uploads/b934d438-dc2c-472c-95c8-a8a1bc1de795.png" },
    { name: "Singularity U", url: "/lovable-uploads/2949721d-3613-4262-b4b3-abf89eb5003d.png" },
    { name: "Carnegie Mellon", url: "/lovable-uploads/ee34652c-0e56-40b5-a5f7-a8ed3c7a1a6c.png" },
  ],
  source: "static",
  featured: true,
  order: 3,  // Right after enterprise strategy
};

// Conference Circuit
export const conferenceItem: BentoItem = {
  id: "conference-circuit",
  type: "text",
  size: "medium",
  title: "Global Conferences",
  subtitle: "Thought Leadership",
  description: "Singularity U • Bitcoin Amsterdam • SXSW",
  accentColor: "from-orange-500/20 via-orange-500/5 to-transparent",
  category: "Speaking",
  source: "static",
  order: 5,  // After keynotes stat
};

// Techstars TV Show highlight
export const techstarsItem: BentoItem = {
  id: "techstars-tv",
  type: "stats",
  size: "medium",
  logoUrl: "/lovable-uploads/techstars-logo.png",
  statLabel: "Inaugural Class",
  subtitle: "2011",
  source: "static",
  order: 12,
};

// Testimonial - Social proof for event planners
export const testimonialItem: BentoItem = {
  id: "testimonial-enterprise",
  type: "text",
  size: "wide",
  title: '"Jason delivered an exceptional keynote"',
  subtitle: "— Enterprise Event Director",
  description: "Engaging, insightful, actionable",
  accentColor: "from-green-500/20 via-green-500/5 to-transparent",
  category: "Speaking",
  source: "static",
  order: 7,  // After countries stat
};

// Combine all static items - stats interspersed throughout for visual variety
// NOTE: TEDx video removed - comes from Supabase to avoid duplication
export const allStaticItems: BentoItem[] = [
  // Row 1: Hero speaking content (TEDx comes from Supabase)
  speakingItems[0],        // Enterprise AI Strategy (wide) - order 2

  // Row 2: Clients + First stat
  speakingClientsItem,     // Keynote Clients (large) - order 3
  speakingStatsItems[0],   // 100+ Keynotes (wide) - order 4

  // Row 3: Text + Stats mixed
  conferenceItem,          // Global Conferences (medium) - order 5
  speakingStatsItems[1],   // 10+ Countries (medium) - order 6
  testimonialItem,         // Testimonial (wide) - order 7
  speakingStatsItems[2],   // 5 Continents (medium) - order 8

  // Row 4: Awards
  awardItems[0],           // TIME (tall) - order 10
  awardItems[1],           // Business Insider (medium) - order 11
  techstarsItem,           // Bloomberg Techstars (medium) - order 12

  // Row 5: Impact stat + Companies
  impactStatsItems[0],     // $100M+ (wide) - order 14
  companyItems[0],         // IMRSV (large) - order 15
  companyItems[1],         // Orchestrator (wide) - order 16

  // Row 6: Acquisitions stat + More companies
  impactStatsItems[1],     // 3 Acquisitions (wide) - order 17
  companyItems[2],         // Azara AI (medium) - order 18
  companyItems[3],         // Radio Research (medium) - order 19

  // Row 7: Academic + Media
  academicItems[0],        // IEEE (medium) - order 22
  academicItems[1],        // 25+ Years (medium) - order 24
  mediaLogosItem,          // Featured In (large) - order 30

  // Testimonial items (static - not editable via admin)
  ...testimonialItems,

  // NOTE: Video items, speaking engagements, and project items
  // have been moved to Supabase and are now managed via admin panel
];
