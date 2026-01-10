import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  ArrowRight,
  Brain,
  Coins,
  Rocket,
  Users,
  Cpu,
  Lightbulb,
  Target,
  CheckCircle2,
  Calendar,
  TrendingUp,
  Building2,
  Sparkles,
} from "lucide-react";
import VideoPopup from "@/components/VideoPopup";

const Topics = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const topics = [
    {
      id: "ai-future-work",
      icon: Brain,
      title: "AI & The Future of Work",
      tagline: "Navigate the AI revolution with confidence",
      shortDesc: "How artificial intelligence is reshaping industries, roles, and the very nature of work itself.",
      fullDesc: "The AI revolution isn't coming. It's here. In this provocative keynote, I demystify AI for business leaders, separating hype from reality while revealing the strategic opportunities most organizations are missing. From autonomous agents to generative AI, attendees leave with a clear roadmap for leading in an AI-augmented world.",
      duration: "45-60 min",
      idealFor: ["C-Suite Executives", "Board Members", "Innovation Teams", "HR Leaders"],
      takeaways: [
        "Understand the real capabilities (and limitations) of current AI systems",
        "Identify AI opportunities specific to your industry and organization",
        "Develop a framework for responsible AI adoption",
        "Prepare your workforce for AI collaboration, not replacement",
        "Navigate the ethical considerations of AI deployment",
      ],
      audiences: ["Fortune 500 Leadership", "Tech Conferences", "Industry Summits", "Board Retreats"],
      videoUrl: "https://youtu.be/65OerAFYuKU",
      popular: true,
      gradient: "from-violet-500/20 via-background to-indigo-500/10",
      accentColor: "violet",
    },
    {
      id: "bitcoin-treasury",
      icon: Coins,
      title: "Bitcoin & Corporate Treasury",
      tagline: "The strategic case for digital assets",
      shortDesc: "Why forward-thinking companies are adding Bitcoin to their balance sheets, and how to do it right.",
      fullDesc: "As traditional currencies face unprecedented challenges, Bitcoin has emerged as a legitimate treasury asset for major corporations. This keynote cuts through the noise to deliver a sophisticated analysis of Bitcoin as a strategic reserve asset, drawing on real-world case studies from companies like Strategy, Tesla, and private treasuries.",
      duration: "45-60 min",
      idealFor: ["CFOs & Finance Leaders", "Treasury Teams", "Investment Committees", "Family Offices"],
      takeaways: [
        "Evaluate Bitcoin's role in a diversified treasury strategy",
        "Understand the regulatory landscape and compliance requirements",
        "Assess custody solutions and security considerations",
        "Model scenarios for Bitcoin allocation decisions",
        "Learn from companies that have successfully integrated Bitcoin",
      ],
      audiences: ["Wealth Management Conferences", "CFO Summits", "Financial Services", "Investment Forums"],
      videoUrl: "https://youtu.be/65OerAFYuKU",
      popular: true,
      gradient: "from-amber-500/20 via-background to-orange-500/10",
      accentColor: "amber",
    },
    {
      id: "digital-transformation",
      icon: Rocket,
      title: "Digital Transformation in Finance",
      tagline: "From legacy to leading edge",
      shortDesc: "Practical strategies for modernizing financial services in the age of disruption.",
      fullDesc: "Traditional financial institutions face a stark choice: transform or be disrupted. This keynote provides a battle-tested framework for digital transformation, drawing on successes and failures from banks, insurers, and wealth managers worldwide. Attendees gain actionable strategies for modernization without sacrificing stability.",
      duration: "45-60 min",
      idealFor: ["Bank Executives", "Insurance Leaders", "Wealth Managers", "RegTech Teams"],
      takeaways: [
        "Assess your organization's digital maturity honestly",
        "Prioritize transformation initiatives for maximum impact",
        "Balance innovation with regulatory compliance",
        "Build the culture required for continuous transformation",
        "Measure and communicate transformation ROI",
      ],
      audiences: ["Banking Conferences", "Insurance Summits", "FinTech Events", "Regulatory Forums"],
      videoUrl: "https://youtu.be/65OerAFYuKU",
      popular: false,
      gradient: "from-cyan-500/20 via-background to-blue-500/10",
      accentColor: "cyan",
    },
    {
      id: "innovation-culture",
      icon: Lightbulb,
      title: "Building Innovation Culture",
      tagline: "Transform how your organization thinks",
      shortDesc: "Creating environments where breakthrough ideas emerge and thrive.",
      fullDesc: "Innovation isn't about ping pong tables and open offices. It's about psychology, process, and permission. This keynote reveals the hidden barriers that kill innovation in established organizations and provides a practical playbook for building cultures where creativity flourishes without sacrificing operational excellence.",
      duration: "45-60 min",
      idealFor: ["Leadership Teams", "HR & People Leaders", "Innovation Officers", "Department Heads"],
      takeaways: [
        "Identify and remove the hidden innovation blockers in your organization",
        "Design processes that encourage experimentation while managing risk",
        "Create psychological safety for creative risk-taking",
        "Balance exploration (innovation) with exploitation (execution)",
        "Measure innovation culture health and progress",
      ],
      audiences: ["Leadership Offsites", "HR Conferences", "Corporate Events", "Management Summits"],
      videoUrl: "https://youtu.be/65OerAFYuKU",
      popular: false,
      gradient: "from-emerald-500/20 via-background to-teal-500/10",
      accentColor: "emerald",
    },
    {
      id: "technological-singularity",
      icon: Cpu,
      title: "The Technological Singularity",
      tagline: "Preparing for exponential change",
      shortDesc: "What happens when technology advances faster than our ability to adapt, and how to prepare.",
      fullDesc: "We're approaching a point where technological change becomes so rapid and profound that it fundamentally transforms human civilization. This thought-provoking keynote explores the implications of exponential technology growth, from superintelligent AI to human augmentation, helping leaders prepare for possibilities that once seemed like science fiction.",
      duration: "45-60 min",
      idealFor: ["Visionary Leaders", "Strategy Teams", "Futurists", "Tech Executives"],
      takeaways: [
        "Understand the concept and timeline of the technological singularity",
        "Explore the potential impacts on business, society, and humanity",
        "Develop scenarios for navigating exponential change",
        "Consider the ethical implications of transformative technologies",
        "Build organizational resilience for radical uncertainty",
      ],
      audiences: ["Tech Conferences", "Future-Focused Events", "Think Tanks", "Academic Symposiums"],
      videoUrl: "https://youtu.be/65OerAFYuKU",
      popular: false,
      gradient: "from-rose-500/20 via-background to-pink-500/10",
      accentColor: "rose",
    },
    {
      id: "transhumanism",
      icon: Sparkles,
      title: "Transhumanism & Human Potential",
      tagline: "The next chapter of human evolution",
      shortDesc: "Exploring the technologies that will enhance and extend human capabilities.",
      fullDesc: "From brain-computer interfaces to genetic engineering, technologies that once seemed decades away are becoming reality. This visionary keynote explores the frontier of human enhancement, examining how emerging technologies will augment cognitive abilities, extend healthspan, and redefine what it means to be human.",
      duration: "45-60 min",
      idealFor: ["Healthcare Executives", "Biotech Leaders", "Futurists", "Ethics Committees"],
      takeaways: [
        "Survey the landscape of human enhancement technologies",
        "Understand the current state and near-term trajectory of key technologies",
        "Explore the ethical frameworks for human augmentation",
        "Consider implications for healthcare, insurance, and employment",
        "Prepare for a world of enhanced human capabilities",
      ],
      audiences: ["Healthcare Conferences", "Biotech Summits", "Ethics Forums", "Innovation Events"],
      videoUrl: "https://youtu.be/65OerAFYuKU",
      popular: false,
      gradient: "from-fuchsia-500/20 via-background to-purple-500/10",
      accentColor: "fuchsia",
    },
  ];

  const popularTopics = topics.filter(t => t.popular);
  const allTopics = topics;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Speaking Topics | Jason Sosa - AI & Innovation Keynote Speaker</title>
        <meta name="description" content="Explore Jason Sosa's keynote topics: AI & Future of Work, Bitcoin Treasury Strategy, Digital Transformation, Innovation Culture, and more. Custom presentations for your audience." />
        <link rel="canonical" href="https://jasonsosa.com/topics" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -translate-y-1/2" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 border-accent/30 text-accent">
                6 Signature Topics
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                Keynote Topics That
                <span className="block bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                  Drive Results
                </span>
              </h1>

              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
                Each topic is meticulously crafted and can be customized for your specific industry, audience, and objectives.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Topic
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
                  <Link to="/speaking">
                    View Speaking Formats
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Most Requested Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <TrendingUp className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold">Most Requested</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {popularTopics.map((topic) => (
                <Card
                  key={topic.id}
                  className={`relative overflow-hidden bg-gradient-to-br ${topic.gradient} border-white/10 group hover:border-accent/30 transition-all duration-500`}
                >
                  <div className="absolute inset-0 bg-background/80" />

                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                        <topic.icon className="h-7 w-7 text-accent" />
                      </div>
                      <Badge className="bg-accent/20 text-accent border-0">
                        Most Requested
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{topic.title}</h3>
                    <p className="text-accent/80 text-sm mb-4">{topic.tagline}</p>
                    <p className="text-white/70 mb-6">{topic.shortDesc}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {topic.idealFor.slice(0, 3).map((audience, i) => (
                        <Badge key={i} variant="outline" className="border-white/20 text-white/60">
                          {audience}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        className="text-accent hover:text-accent hover:bg-accent/10"
                        onClick={() => setSelectedVideo(topic.videoUrl)}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Watch Clip
                      </Button>
                      <Button asChild className="bg-accent hover:bg-accent/90">
                        <Link to="/contact">
                          Book This Topic
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Topics Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-10">All Topics</h2>

            <div className="space-y-6">
              {allTopics.map((topic, index) => (
                <Card
                  key={topic.id}
                  className={`overflow-hidden bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300 ${
                    expandedTopic === topic.id ? 'border-accent/30' : ''
                  }`}
                >
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.gradient} flex items-center justify-center flex-shrink-0`}>
                        <topic.icon className="h-6 w-6 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-bold">{topic.title}</h3>
                          {topic.popular && (
                            <Badge className="bg-accent/20 text-accent border-0 text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-white/60 text-sm truncate">{topic.tagline}</p>
                      </div>

                      <div className="hidden md:flex items-center gap-2 text-sm text-white/50">
                        <Target className="h-4 w-4" />
                        {topic.duration}
                      </div>

                      <ArrowRight
                        className={`h-5 w-5 text-white/50 transition-transform duration-300 ${
                          expandedTopic === topic.id ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedTopic === topic.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 border-t border-white/10 pt-6">
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Description */}
                        <div className="lg:col-span-2">
                          <h4 className="font-semibold mb-3 text-white/90">Overview</h4>
                          <p className="text-white/70 mb-6">{topic.fullDesc}</p>

                          <h4 className="font-semibold mb-3 text-white/90">Key Takeaways</h4>
                          <div className="space-y-2 mb-6">
                            {topic.takeaways.map((takeaway, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                                <span className="text-white/70 text-sm">{takeaway}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex gap-4">
                            <Button
                              variant="outline"
                              className="border-white/20 hover:bg-white/10"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedVideo(topic.videoUrl);
                              }}
                            >
                              <Play className="mr-2 h-4 w-4" />
                              Watch Sample
                            </Button>
                            <Button asChild className="bg-accent hover:bg-accent/90">
                              <Link to="/contact" onClick={(e) => e.stopPropagation()}>
                                Book This Topic
                              </Link>
                            </Button>
                          </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                          <div className="bg-white/[0.03] rounded-lg p-4">
                            <h4 className="font-semibold mb-3 text-sm text-white/90">Ideal For</h4>
                            <div className="flex flex-wrap gap-2">
                              {topic.idealFor.map((audience, i) => (
                                <Badge key={i} variant="outline" className="border-white/20 text-white/60 text-xs">
                                  {audience}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="bg-white/[0.03] rounded-lg p-4">
                            <h4 className="font-semibold mb-3 text-sm text-white/90">Popular With</h4>
                            <div className="space-y-2">
                              {topic.audiences.map((aud, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                                  <Building2 className="h-3 w-3" />
                                  {aud}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                            <p className="text-sm text-accent mb-2">Duration</p>
                            <p className="font-bold">{topic.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Topics CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <Card className="relative overflow-hidden bg-gradient-to-r from-accent/10 via-background to-blue-500/10 border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.2),transparent_60%)]" />

              <div className="relative p-12 text-center">
                <Lightbulb className="h-12 w-12 text-accent mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need a Custom Topic?
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
                  I regularly develop custom presentations tailored to specific industries, events, or organizational challenges. Let's discuss your unique needs.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/contact">
                    Discuss Custom Topics
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />

      {/* Video Popup */}
      <VideoPopup
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo}
      />
    </div>
  );
};

export default Topics;
