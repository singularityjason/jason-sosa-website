/**
 * Migration script to transfer static portfolio items to Supabase
 * Run with: npx tsx scripts/migrate-portfolio.ts
 */

import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface ProjectInsert {
  title: string;
  description: string | null;
  category: string | null;
  client_name: string | null;
  featured: boolean;
  logo_url: string | null;
  preview_media_url: string | null;
  youtube_url: string | null;
  vimeo_url: string | null;
  tags: string[] | null;
  display_order: number;
}

const portfolioProjects: ProjectInsert[] = [
  // Speaking Engagements
  {
    title: "Future of Finance Summit",
    description: "Keynote on AI implementation in banking and financial services, discussing the transformation of customer experience through machine learning algorithms.",
    category: "Speaking",
    client_name: "Bank of America",
    featured: true,
    logo_url: "/lovable-uploads/66ad1914-4df8-42f6-b3a5-2a96f74a6f78.png",
    preview_media_url: "/lovable-uploads/66ad1914-4df8-42f6-b3a5-2a96f74a6f78.png",
    youtube_url: null,
    vimeo_url: null,
    tags: ["ai", "finance", "banking", "keynote"],
    display_order: 10,
  },
  {
    title: "Exponential Technologies Conference",
    description: "Featured speaker discussing the convergence of AI, blockchain, and transhuman technologies and their implications for future society.",
    category: "Speaking",
    client_name: "Singularity University",
    featured: true,
    logo_url: "/lovable-uploads/2949721d-3613-4262-b4b3-abf89eb5003d.png",
    preview_media_url: "/lovable-uploads/2949721d-3613-4262-b4b3-abf89eb5003d.png",
    youtube_url: null,
    vimeo_url: null,
    tags: ["ai", "exponential", "transhumanism", "blockchain"],
    display_order: 11,
  },
  {
    title: "Wealth Management Forum",
    description: "Keynote presentation to CityWire Asia Wealth Management on AI and the Future of Money - focus on Bitcoin and AI convergence.",
    category: "Speaking",
    client_name: "CityWire Asia",
    featured: false,
    logo_url: "/lovable-uploads/b934d438-dc2c-472c-95c8-a8a1bc1de795.png",
    preview_media_url: "/lovable-uploads/b934d438-dc2c-472c-95c8-a8a1bc1de795.png",
    youtube_url: null,
    vimeo_url: null,
    tags: ["ai", "wealth", "bitcoin", "finance"],
    display_order: 12,
  },
  {
    title: "Future of Work Symposium",
    description: "Guest lecturer on the impact of artificial intelligence on education and workforce development, exploring the human-AI collaboration paradigm.",
    category: "Speaking",
    client_name: "Stanford University",
    featured: true,
    logo_url: "/lovable-uploads/ee34652c-0e56-40b5-a5f7-a8ed3c7a1a6c.png",
    preview_media_url: "/lovable-uploads/ee34652c-0e56-40b5-a5f7-a8ed3c7a1a6c.png",
    youtube_url: null,
    vimeo_url: null,
    tags: ["ai", "education", "workforce", "future of work"],
    display_order: 13,
  },
  {
    title: "Healthcare Innovation Summit",
    description: "Keynote on AI applications in medical devices and healthcare innovation, exploring the future of patient care through advanced technologies.",
    category: "Speaking",
    client_name: "Stryker",
    featured: false,
    logo_url: "/lovable-uploads/a5d82c6b-f512-43a4-a938-88135016f1e7.png",
    preview_media_url: "/lovable-uploads/a5d82c6b-f512-43a4-a938-88135016f1e7.png",
    youtube_url: null,
    vimeo_url: null,
    tags: ["ai", "healthcare", "medical", "innovation"],
    display_order: 14,
  },
  {
    title: "Digital Transformation Conference",
    description: "Executive presentation on telecommunications evolution and the role of AI in creating smart communication networks.",
    category: "Speaking",
    client_name: "GVTC",
    featured: false,
    logo_url: "/lovable-uploads/844b747d-e266-4a0f-afa0-67c466bf26de.png",
    preview_media_url: "/lovable-uploads/844b747d-e266-4a0f-afa0-67c466bf26de.png",
    youtube_url: null,
    vimeo_url: null,
    tags: ["ai", "telecom", "digital transformation"],
    display_order: 15,
  },
  {
    title: "Tech Startup Summit",
    description: "Presentation on entrepreneurial insights and the future of agent-to-agent commerce applications with blockchain as the monetary rail.",
    category: "Speaking",
    client_name: "Glow",
    featured: false,
    logo_url: "/lovable-uploads/bb07fffe-fdc8-4fed-9684-eb7b5ebb85de.png",
    preview_media_url: "/lovable-uploads/bb07fffe-fdc8-4fed-9684-eb7b5ebb85de.png",
    youtube_url: null,
    vimeo_url: null,
    tags: ["ai", "startup", "blockchain", "entrepreneurship"],
    display_order: 16,
  },
  {
    title: "Educational Technology Forum",
    description: "Featured speaker discussing the integration of AI into educational curricula and preparing students for an AI-augmented future.",
    category: "Speaking",
    client_name: "Aiken University",
    featured: false,
    logo_url: "/lovable-uploads/dc63d246-f608-4f2f-abea-a371587422c8.png",
    preview_media_url: "/lovable-uploads/dc63d246-f608-4f2f-abea-a371587422c8.png",
    youtube_url: null,
    vimeo_url: null,
    tags: ["ai", "education", "technology"],
    display_order: 17,
  },

  // Video Items
  {
    title: "Push Humanity Forward",
    description: "Vision on technological innovation and ethical AI development.",
    category: "Media",
    client_name: null,
    featured: true,
    logo_url: null,
    preview_media_url: "/lovable-uploads/26273aba-8a72-473f-846a-12f0f56060a1.png",
    youtube_url: "https://www.youtube.com/watch?v=4T0HZYJx5Qs",
    vimeo_url: null,
    tags: ["ai", "innovation", "technology", "vision"],
    display_order: 1,
  },
  {
    title: "Overcoming Imposter Syndrome in High Tech",
    description: "A.I. Expert discusses qualifying yourself in high tech - Full Exposure Podcast.",
    category: "Media",
    client_name: "Full Exposure Podcast",
    featured: false,
    logo_url: null,
    preview_media_url: "/lovable-uploads/b3f5d6a5-055c-4723-b8fe-29447e89628c.png",
    youtube_url: "https://www.youtube.com/watch?v=gcfeeonT-VI",
    vimeo_url: null,
    tags: ["ai", "podcast", "career", "tech"],
    display_order: 2,
  },
  {
    title: "What is the Future of Work?",
    description: "Self-sustaining companies of information and talent.",
    category: "Media",
    client_name: null,
    featured: false,
    logo_url: null,
    preview_media_url: "/lovable-uploads/b9582220-eed0-40e5-af4b-bc84df0580c5.png",
    youtube_url: "https://www.youtube.com/watch?v=2Dyc61j0V2E",
    vimeo_url: null,
    tags: ["ai", "future of work", "automation"],
    display_order: 3,
  },

  // Technology/Innovation Projects
  {
    title: "Activesite | Artprize 2009",
    description: "103-inch custom-made laser multi-touch wall - interactive installation showcasing innovative human-computer interaction.",
    category: "Technology",
    client_name: "Haworth R&D",
    featured: false,
    logo_url: null,
    preview_media_url: "/lovable-uploads/activesite-preview.jpg",
    youtube_url: null,
    vimeo_url: null,
    tags: ["multi-touch", "interactive", "installation", "artprize", "laser"],
    display_order: 20,
  },
];

async function migratePortfolio() {
  console.log("Starting portfolio migration...\n");
  console.log(`Inserting ${portfolioProjects.length} projects into Supabase...\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const project of portfolioProjects) {
    const { data, error } = await supabase
      .from("projects")
      .insert([project])
      .select()
      .single();

    if (error) {
      console.error(`❌ Failed to insert "${project.title}":`, error.message);
      errorCount++;
    } else {
      console.log(`✅ Inserted: ${project.title}`);
      successCount++;
    }
  }

  console.log("\n--- Migration Complete ---");
  console.log(`✅ Successfully inserted: ${successCount}`);
  console.log(`❌ Failed: ${errorCount}`);
}

migratePortfolio().catch(console.error);
