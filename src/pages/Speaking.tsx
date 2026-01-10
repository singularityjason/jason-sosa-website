import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Play,
  Calendar,
  Users,
  Mic2,
  Video,
  Clock,
  CheckCircle2,
  ArrowRight,
  Download,
  Globe,
  Sparkles,
  MessageSquareQuote,
} from "lucide-react";
import VideoPopup from "@/components/VideoPopup";

const Speaking = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const speakingFormats = [
    {
      icon: Mic2,
      title: "Keynote Address",
      duration: "45-60 minutes",
      description: "High-impact presentation designed to inspire and transform. Perfect for conferences, corporate events, and executive summits.",
      ideal: "500+ attendees",
      features: ["Custom content tailored to your audience", "Pre-event strategy call", "Audience Q&A session", "Social media promotion"],
    },
    {
      icon: Users,
      title: "Executive Workshop",
      duration: "Half or Full Day",
      description: "Interactive deep-dive session with hands-on exercises. Ideal for leadership teams seeking actionable transformation strategies.",
      ideal: "15-50 executives",
      features: ["Customized workshop materials", "Breakout session facilitation", "Action plan development", "30-day follow-up call"],
    },
    {
      icon: Video,
      title: "Virtual Keynote",
      duration: "30-45 minutes",
      description: "Broadcast-quality virtual presentation with full production value. Engage global audiences from anywhere.",
      ideal: "Unlimited virtual attendees",
      features: ["Professional studio setup", "Interactive polling & Q&A", "Recording for internal use", "Technical rehearsal included"],
    },
  ];

  const bookingProcess = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We discuss your event goals, audience, and desired outcomes to ensure perfect alignment.",
    },
    {
      step: "02",
      title: "Custom Proposal",
      description: "Receive a tailored proposal with topic recommendations, logistics, and investment details.",
    },
    {
      step: "03",
      title: "Content Development",
      description: "Jason customizes the presentation to your specific industry, challenges, and objectives.",
    },
    {
      step: "04",
      title: "Event Delivery",
      description: "A transformative experience that leaves your audience inspired and equipped to act.",
    },
  ];

  const faqs = [
    {
      question: "How far in advance should we book?",
      answer: "For optimal availability, I recommend booking 3-6 months in advance. However, I occasionally have openings for shorter timelines. Contact me to check current availability.",
    },
    {
      question: "Do you travel internationally?",
      answer: "Yes, I regularly speak at events across APAC, MENA, Europe, and North America. Travel arrangements and accommodations are handled as part of the booking process.",
    },
    {
      question: "Can the keynote be customized for our industry?",
      answer: "Absolutely. Every presentation is tailored to your specific audience, industry challenges, and desired outcomes. I conduct pre-event research and stakeholder interviews to ensure maximum relevance.",
    },
    {
      question: "What's included in the speaker fee?",
      answer: "The fee includes content customization, pre-event strategy call, the presentation itself, Q&A facilitation, and travel within the region. Additional services like workshops or extended engagements are quoted separately.",
    },
    {
      question: "Do you offer virtual presentations?",
      answer: "Yes, I deliver broadcast-quality virtual keynotes from a professional studio setup. Virtual presentations include technical rehearsal, interactive elements, and recording rights for internal use.",
    },
    {
      question: "What topics do you speak about?",
      answer: "My core topics include AI & the Future of Work, Digital Transformation in Finance, Bitcoin & Treasury Strategy, Innovation Culture, and Technological Singularity. Each topic can be customized to your specific needs.",
    },
  ];

  const eventOrganizerTestimonials = [
    {
      quote: "Jason delivered an outstanding keynote at our wealth management conference. His insights on AI and the future of finance resonated deeply with our high-net-worth clients. The feedback was exceptional.",
      author: "Event Director",
      company: "Global Wealth Summit",
    },
    {
      quote: "The most engaging speaker we've had in five years. Jason's ability to make complex AI concepts accessible while keeping executives on the edge of their seats is remarkable.",
      author: "Conference Chair",
      company: "FinTech Innovation Forum",
    },
    {
      quote: "Our board members were thoroughly impressed. Jason's presentation on digital transformation sparked conversations that led to real strategic initiatives. Worth every penny.",
      author: "Chief of Staff",
      company: "Fortune 500 Financial Services",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Book Jason Sosa | AI Keynote Speaker for Corporate Events & Conferences</title>
        <meta name="description" content="Book Jason Sosa for your next keynote on AI, digital transformation, and the future of finance. Premium speaking engagements for Fortune 500 companies and global conferences." />
        <link rel="canonical" href="https://jasonsosa.com/speaking" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] animate-fade-in">
                Transform Your Event Into an
                <span className="block bg-gradient-to-r from-accent via-blue-400 to-accent bg-clip-text text-transparent">
                  Unforgettable Experience
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Keynotes that don't just inform, they ignite. Give your audience the insights they'll be talking about for years.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold group">
                  <Link to="/contact">
                    Check Availability
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsVideoOpen(true)}
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Speaker Reel
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 text-white/50 text-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>10+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>100+ Keynotes Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">5 Continents</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Speaking Formats Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-accent uppercase tracking-wider text-sm font-medium mb-4">
                Speaking Formats
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Choose Your Experience
              </h3>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                From intimate executive workshops to large-scale keynotes, every engagement is crafted for maximum impact.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {speakingFormats.map((format, index) => (
                <Card
                  key={format.title}
                  className="relative group bg-white/[0.02] border-white/10 p-8 hover:bg-white/[0.05] hover:border-accent/30 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <format.icon className="h-7 w-7 text-accent" />
                    </div>

                    <h4 className="text-2xl font-bold mb-2">{format.title}</h4>

                    <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {format.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {format.ideal}
                      </span>
                    </div>

                    <p className="text-white/70 mb-6">{format.description}</p>

                    <div className="space-y-3 mb-8">
                      {format.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-white/60">
                          <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <Button asChild className="w-full bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30">
                        <Link to="/contact">
                          Request Information
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

        {/* What's Included Section */}
        <section className="py-24 bg-gradient-to-b from-background via-accent/5 to-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-accent uppercase tracking-wider text-sm font-medium mb-4">
                  The Experience
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  More Than Just a Speech
                </h3>
                <p className="text-lg text-white/70 mb-8">
                  Every engagement is a partnership. From the first call to the standing ovation, I'm invested in making your event extraordinary.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Sparkles, title: "Custom Content", desc: "Every presentation tailored to your industry, audience, and goals" },
                    { icon: MessageSquareQuote, title: "Pre-Event Consultation", desc: "Strategy call to align on objectives and key messages" },
                    { icon: Users, title: "Audience Engagement", desc: "Interactive Q&A and real-time polling to maximize participation" },
                    { icon: Video, title: "Professional Assets", desc: "High-quality photos and video clips for your post-event marketing" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-white/60 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <Link to="/contact">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book a Call
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
                    <Link to="/speaker-kit">
                      <Download className="mr-2 h-5 w-5" />
                      Speaker Kit
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 via-background to-blue-500/10 p-1">
                  <div className="w-full h-full rounded-xl bg-background/80 backdrop-blur flex items-center justify-center overflow-hidden">
                    <img
                      src="/jason-sosa-speaker.jpg"
                      alt="Jason Sosa Speaking"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur border border-white/10 rounded-xl p-4 shadow-xl">
                  <div className="text-3xl font-bold text-accent">100+</div>
                  <div className="text-sm text-white/60">Keynotes Delivered</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-background/90 backdrop-blur border border-white/10 rounded-xl p-4 shadow-xl">
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-white/60">Would Book Again</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-accent uppercase tracking-wider text-sm font-medium mb-4">
                Simple Process
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                From Inquiry to Standing Ovation
              </h3>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                A streamlined process designed to make booking effortless for event organizers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {bookingProcess.map((item, index) => (
                  <div key={item.step} className="relative">
                    {/* Connector Line */}
                    {index < bookingProcess.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-accent/50 to-transparent" />
                    )}

                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                        <span className="text-xl font-bold text-accent">{item.step}</span>
                      </div>
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Event Organizer Testimonials */}
        <section className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-accent uppercase tracking-wider text-sm font-medium mb-4">
                Event Organizer Reviews
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                What Clients Say
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {eventOrganizerTestimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/[0.02] border-white/10 p-8">
                  <p className="text-white/80 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-white/50">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-accent uppercase tracking-wider text-sm font-medium mb-4">
                  FAQ
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Common Questions
                </h3>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-white/10 rounded-lg px-6 bg-white/[0.02] data-[state=open]:bg-white/[0.04]"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-background to-blue-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15),transparent_70%)]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Elevate Your Event?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Let's discuss how we can make your next event unforgettable. Response guaranteed within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 px-10 py-6 text-lg font-semibold">
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Check Availability
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg">
                  <Link to="/speaker-kit">
                    <Download className="mr-2 h-5 w-5" />
                    Download Speaker Kit
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-white/50">
                Typical response time: Under 24 hours
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Video Popup */}
      <VideoPopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://youtu.be/65OerAFYuKU"
      />
    </div>
  );
};

export default Speaking;
