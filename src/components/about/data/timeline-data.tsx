
import React from "react";
import { TimelineItem } from "../types/timeline-types";
import {
  Briefcase, Radio, Camera, Monitor,
  BrainCircuit, Network, Bot, Bitcoin,
  PenTool, TrendingUp
} from "lucide-react";

export const timelineItems: TimelineItem[] = [
  {
    title: "The Factory Floor",
    subtitle: "Where It Started",
    description: "Straight out of high school with a 0.98 GPA, I worked as a welder on the factory floor. While others clocked out, I stayed up reading business books and teaching myself to code. No college degree. No connections. Just stubborn persistence and a refusal to accept the path others predicted for me.",
    icon: <Briefcase className="h-5 w-5 text-accent" />,
    imageSrc: "/lovable-uploads/37679e7d-3b48-4f4a-a894-65ebd7e41997.webp"
  },
  {
    title: "First Business: Global E-Commerce",
    subtitle: "One-Man Operation, 40 Countries",
    description: "Built an e-commerce company from my garage selling to 40 countries. Designed 40+ products, coded the fulfillment systems, and scaled to a warehouse operation. eBay PowerSeller. Distribution through Walmart, Amazon, and Buy.com. All as a one-man operation for 5 years. Proof that execution beats credentials.",
    icon: <Camera className="h-5 w-5 text-accent" />,
    imageSrc: "/lovable-uploads/514dd7f1-2730-40d1-b911-e8c87659df71.webp"
  },
  {
    title: "First Exit: Radio Research Platform",
    subtitle: "Featured in Billboard Magazine",
    date: "2004-2009 (Acquired)",
    description: "Created a music survey platform reaching 65,000 radio panelists across 18 US markets in its first year. Presented at Conclave Radio Conference. Featured in Billboard Magazine. But here's the real story: I had a stutter and crippling social anxiety. Spent a year in Toastmasters before I could give that first speech. Acquired by Troy Research.",
    icon: <Radio className="h-5 w-5 text-accent" />
  },
  {
    title: "Self-Taught Computer Vision",
    subtitle: "Building What Didn't Exist",
    date: "2009-2010",
    description: "Developed a 103-inch multi-touch wall in collaboration with Haworth R&D for ArtPrize Grand Rapids. Taught myself computer vision programming using OpenCV and OpenFrameworks. No formal training. Just documentation, trial, error, and late nights. This period shaped everything that came next.",
    icon: <Monitor className="h-5 w-5 text-accent" />,
    imageSrc: "/lovable-uploads/2949721d-3613-4262-b4b3-abf89eb5003d.webp"
  },
  {
    title: "IMRSV: Techstars NYC",
    subtitle: "Time Magazine Top Startup",
    date: "2010-2015 (Acquired)",
    description: "Selected for Bloomberg Techstars NYC inaugural class (1% acceptance rate), later featured as a TV show. Built emotion recognition AI and published research at IEEE CVPR. As CEO, led offices in NYC and Singapore. Raised $3M+ in venture capital. Named Time Magazine's Top Startup in NYC and Business Insider's Top 25 Startups to Watch. Acquired by Kairos in 2015.",
    icon: <BrainCircuit className="h-5 w-5 text-accent" />,
    imageSrc: "/lovable-uploads/66ad1914-4df8-42f6-b3a5-2a96f74a6f78.webp",
    highlights: ["IEEE CVPR Publication", "Bloomberg TV", "Patented Technology"]
  },
  {
    title: "Forbes Contributing Writer",
    subtitle: "Published Thought Leadership",
    date: "2015-Present",
    description: "Regular contributor to Forbes covering AI, emerging technology, and digital transformation. Translating complex technical concepts into strategic insights for business leaders.",
    icon: <PenTool className="h-5 w-5 text-accent" />,
    highlights: ["AI Strategy", "Digital Transformation", "Emerging Tech"]
  },
  {
    title: "Entrepreneur-in-Residence",
    subtitle: "$20M Venture Fund",
    date: "2016-2017",
    description: "Selected as EIR to evaluate investment opportunities, mentor portfolio founders, and advise on technology strategy. Trusted by LPs to identify and vet high-potential companies.",
    icon: <TrendingUp className="h-5 w-5 text-accent" />,
    highlights: ["Deal Flow", "Due Diligence", "Portfolio Support"]
  },
  {
    title: "C-Suite Innovation Advisor",
    subtitle: "Fortune 500 Strategy",
    date: "2016-2021",
    description: "Advised founders, CEOs, and Fortune 500 executives on technology strategy and digital transformation. Facilitated $30M+ in capital raises. Led initiatives across AI, wearables, 3D body scanning, and enterprise software.",
    icon: <Network className="h-5 w-5 text-accent" />,
    imageSrc: "/lovable-uploads/844b747d-e266-4a0f-afa0-67c466bf26de.webp",
    highlights: ["Singularity University", "Carnegie Mellon", "Stanford University", "MIT Enterprise Forum"]
  },
  {
    title: "Chief Technology Officer",
    subtitle: "Futuri Media",
    date: "2021-2022",
    description: "Led AI-driven audience engagement and sales intelligence initiatives at Futuri. CEO Dan Anstandig: \"Jason brings a unique perspective and passion for digital transformation and disruptive technology. He'll be a strong contributor to the growth of both Futuri and our partners.\"",
    icon: <BrainCircuit className="h-5 w-5 text-accent" />
  },
  {
    title: "Second Exit: Azara AI",
    subtitle: "Enterprise AI Agents",
    date: "2022-2025 (Acquired)",
    description: "Built AI agent workflows for enterprise automation. Pioneered multi-agent systems that work alongside human teams to complete complex business processes. Acquired in 2025. Third successful exit.",
    icon: <Bot className="h-5 w-5 text-accent" />
  },
  {
    title: "Orchestrator",
    subtitle: "Current Venture",
    date: "2025-Present",
    description: "Building the next generation of intelligent automation. Orchestrator manages business and financial workflows through AI agents that act on your behalf, with every key decision still in your hands.",
    icon: <Bitcoin className="h-5 w-5 text-accent" />,
    imageSrc: "/lovable-uploads/68e1fe31-88da-4f07-bed9-b98e7f13d3dd.webp"
  }
];
