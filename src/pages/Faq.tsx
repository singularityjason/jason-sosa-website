import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FAQStructuredData } from "@/components/StructuredData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, MessageSquare } from "lucide-react";

const Faq = () => {
  // Booking & Logistics FAQs
  const bookingFaqs = [
    {
      question: "How far in advance should we book Jason Sosa?",
      answer: "For optimal availability, I recommend booking 3-6 months in advance. However, I occasionally have openings for shorter timelines. Contact me to check current availability.",
    },
    {
      question: "Do you travel internationally for speaking engagements?",
      answer: "Yes, I regularly speak at events across APAC, MENA, Europe, and North America. Travel arrangements and accommodations are handled as part of the booking process. I'm based in the APAC region but frequently speak globally.",
    },
    {
      question: "What's included in the speaker fee?",
      answer: "The fee includes content customization, pre-event strategy call, the presentation itself, Q&A facilitation, and travel within the region. Additional services like workshops, extended engagements, or multiple sessions are quoted separately.",
    },
    {
      question: "Do you offer virtual or hybrid presentations?",
      answer: "Yes, I deliver broadcast-quality virtual keynotes from a professional studio setup. Virtual presentations include technical rehearsal, interactive polling and Q&A elements, and recording rights for internal use. Hybrid events (in-person + virtual audience) are also available.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellation terms are outlined in the booking agreement and vary based on timing. Generally, cancellations made 60+ days before the event receive a full refund minus deposit. Please contact me for specific terms.",
    },
  ];

  // Content & Customization FAQs
  const contentFaqs = [
    {
      question: "Can the keynote be customized for our industry?",
      answer: "Absolutely. Every presentation is tailored to your specific audience, industry challenges, and desired outcomes. I conduct pre-event research and stakeholder interviews to ensure maximum relevance and impact for your attendees.",
    },
    {
      question: "What topics does Jason Sosa speak about?",
      answer: "My core topics include AI & the Future of Work, Digital Transformation in Finance, Bitcoin & Corporate Treasury Strategy, Innovation Culture, Technological Singularity, and Transhumanism. Each topic can be customized to your specific industry and audience needs.",
    },
    {
      question: "How long are your presentations?",
      answer: "Keynote addresses typically run 45-60 minutes, including Q&A. Executive workshops can be half-day or full-day sessions. Virtual keynotes are usually 30-45 minutes. All formats can be adjusted to fit your event schedule.",
    },
    {
      question: "Do you provide presentation materials to attendees?",
      answer: "Yes, I can provide a summary document or key takeaways for attendees after the presentation. Slide decks are typically not shared directly, but custom resources can be arranged based on your needs.",
    },
  ];

  // Background & Expertise FAQs
  const backgroundFaqs = [
    {
      question: "What is Jason Sosa's background?",
      answer: "I'm a technology entrepreneur with 25+ years in AI. I founded IMRSV (emotion recognition AI, acquired by Kairos) and Azara AI (enterprise AI agents, acquired 2025). I was part of Techstars' inaugural 2011 class, served as faculty at Singularity University, and have been featured in Forbes, CNN, Bloomberg, and Wired.",
    },
    {
      question: "What companies has Jason Sosa spoken for?",
      answer: "I've delivered keynotes for Fortune 500 companies including Bank of America, Samsung, Stryker, and NASDAQ. I've also spoken at Stanford University, Carnegie Mellon, Singularity University, and major global conferences across finance, technology, and innovation sectors.",
    },
    {
      question: "What makes Jason different from other AI speakers?",
      answer: "Unlike many speakers who discuss AI theoretically, I've built and sold AI companies. My insights come from hands-on experience deploying AI in enterprise environments, raising venture capital, and navigating acquisitions. I translate complex technology into actionable business strategies.",
    },
  ];

  // Event Planning FAQs
  const eventFaqs = [
    {
      question: "What technical requirements do you have?",
      answer: "For in-person events, I require a lavalier microphone, confidence monitor, and standard presentation setup (HDMI connection). For virtual events, I present from my professional studio with broadcast-quality audio/video. A technical rehearsal is included to ensure seamless delivery.",
    },
    {
      question: "Do you meet with event organizers before the presentation?",
      answer: "Yes, I conduct a pre-event strategy call with organizers to understand your audience, objectives, and any specific topics or challenges to address. This ensures the presentation delivers maximum value for your attendees.",
    },
    {
      question: "Can you participate in panel discussions or fireside chats?",
      answer: "Absolutely. In addition to keynotes, I'm available for panel discussions, fireside chats, and moderated Q&A sessions. These formats work well as supplements to a keynote or as standalone sessions.",
    },
    {
      question: "Do you offer workshops in addition to keynotes?",
      answer: "Yes, I offer executive workshops that provide deeper dives into specific topics. Workshops are interactive, half-day or full-day sessions designed for smaller groups (15-50 executives) who want actionable strategies and hands-on exercises.",
    },
  ];

  // Combine all FAQs for structured data
  const allFaqs = [...bookingFaqs, ...contentFaqs, ...backgroundFaqs, ...eventFaqs];

  const FaqSection = ({
    title,
    faqs,
    defaultOpen
  }: {
    title: string;
    faqs: { question: string; answer: string }[];
    defaultOpen?: string;
  }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
      <Accordion type="single" collapsible defaultValue={defaultOpen} className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`${title}-${index}`}
            className="border border-white/10 rounded-lg px-6 bg-white/[0.02] data-[state=open]:bg-white/[0.04]"
          >
            <AccordionTrigger className="text-left hover:no-underline py-6">
              <span className="font-semibold pr-4">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-white/70 pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>FAQ | Jason Sosa - AI Keynote Speaker</title>
        <meta
          name="description"
          content="Frequently asked questions about booking Jason Sosa for keynote speaking engagements. Learn about topics, pricing, availability, and what to expect."
        />
        <link rel="canonical" href="https://jasonsosa.com/faq" />

        {/* Open Graph */}
        <meta property="og:title" content="FAQ | Jason Sosa - AI Keynote Speaker" />
        <meta property="og:description" content="Frequently asked questions about booking Jason Sosa for keynote speaking engagements on AI, finance transformation, and Bitcoin strategy." />
        <meta property="og:url" content="https://jasonsosa.com/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://jasonsosa.com/jason-sosa-speaker.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Jason Sosa - AI Keynote Speaker" />
        <meta name="twitter:description" content="Frequently asked questions about booking Jason Sosa for keynote speaking engagements." />
        <meta name="twitter:image" content="https://jasonsosa.com/jason-sosa-speaker.jpg" />
      </Helmet>

      {/* FAQ Structured Data */}
      <FAQStructuredData items={allFaqs} />

      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/70">
              Everything you need to know about booking Jason Sosa for your next event.
              Can't find what you're looking for? <Link to="/contact" className="text-accent hover:underline">Get in touch</Link>.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="max-w-3xl mx-auto">
            <FaqSection
              title="Booking & Logistics"
              faqs={bookingFaqs}
              defaultOpen="Booking & Logistics-0"
            />
            <FaqSection title="Topics & Customization" faqs={contentFaqs} />
            <FaqSection title="Background & Expertise" faqs={backgroundFaqs} />
            <FaqSection title="Event Planning" faqs={eventFaqs} />
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <div className="bg-gradient-to-r from-accent/10 via-background to-blue-500/10 border border-white/10 rounded-2xl p-8 md:p-12">
              <MessageSquare className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                I'm happy to discuss your event needs and answer any questions not covered here.
                Response guaranteed within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Contact Me
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Faq;
