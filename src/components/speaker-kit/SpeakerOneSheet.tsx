import React from "react";
import { Linkedin, MapPin, Quote } from "lucide-react";

const SpeakerOneSheet = () => {
  const speakingTopics = [
    {
      title: "AI & The Future of Work",
      description: "How artificial intelligence is reshaping industries, roles, and the nature of work itself.",
    },
    {
      title: "Bitcoin & Corporate Treasury",
      description: "The strategic case for digital assets in corporate treasury and wealth management.",
    },
    {
      title: "Digital Transformation in Finance",
      description: "Practical strategies for modernizing financial services in the age of disruption.",
    },
    {
      title: "The Technological Singularity",
      description: "Preparing leaders for exponential technological change and its implications.",
    },
  ];

  const testimonials = [
    {
      quote: "Jason delivered an outstanding keynote. His insights on AI and the future of finance resonated deeply with our audience.",
      author: "Event Director",
      company: "Global Wealth Summit",
    },
    {
      quote: "The most engaging speaker we've had in five years. Jason makes complex AI concepts accessible while keeping executives engaged.",
      author: "Conference Chair",
      company: "FinTech Innovation Forum",
    },
  ];

  const clientLogos = [
    "Bank of America",
    "Samsung",
    "NASDAQ",
    "Stanford University",
    "TEDx NYC",
    "Stryker Corporation",
    "MIT Enterprise Forum",
    "National University of Singapore",
  ];

  const stats = [
    { value: "100+", label: "Keynotes Delivered" },
    { value: "10+", label: "Countries" },
    { value: "5", label: "Continents" },
    { value: "15+", label: "Industries" },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Print-optimized container - A4 size */}
      <div className="max-w-[210mm] mx-auto bg-white print:shadow-none shadow-xl">

        {/* Page 1 */}
        <div className="p-8 md:p-12 print:p-10 min-h-[297mm] print:min-h-[297mm] relative">

          {/* Header */}
          <header className="flex flex-col md:flex-row gap-8 mb-10 pb-8 border-b-2 border-gray-100">
            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src="/jason-sosa-speaker.jpg"
                alt="Jason Sosa - AI Keynote Speaker"
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Name & Tagline */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Jason Sosa
              </h1>
              <p className="text-xl text-cyan-600 font-semibold mb-4">
                Entrepreneur | AI & Finance Keynote Speaker | Four-Time TEDx Speaker
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jason has raised and structured $100M+ in capital, founded a venture-backed AI company,
                and advised boards and executives on innovation strategy. A Forbes contributing writer
                featured in The Wall Street Journal, The New York Times, and CNN, he delivers keynotes
                for organizations like Bank of America, Samsung, Stanford, and MIT Enterprise Forum.
              </p>

              {/* Location */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Global Availability (APAC, MENA, Americas, EU)
                </span>
              </div>
            </div>
          </header>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 mb-10 py-6 bg-gray-50 rounded-lg">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-600">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Speaking Topics */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide border-b pb-2">
              Signature Keynote Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {speakingTopics.map((topic, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-1">{topic.title}</h3>
                  <p className="text-sm text-gray-600">{topic.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide border-b pb-2">
              Topic Categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Artificial Intelligence",
                "Finance",
                "Blockchain",
                "Digital Assets",
                "Bitcoin",
                "Innovation",
                "Digital Strategy",
                "Future of Work",
                "Entrepreneurship",
              ].map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm bg-cyan-50 text-cyan-700 rounded-full border border-cyan-200"
                >
                  {category}
                </span>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide border-b pb-2">
              What Event Organizers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative bg-gray-50 p-5 rounded-lg">
                  <Quote className="absolute top-3 left-3 w-6 h-6 text-cyan-200" />
                  <p className="text-gray-700 italic mb-3 pl-6 text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="pl-6">
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Previous Clients */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide border-b pb-2">
              Previous Speaking Engagements
            </h2>
            <div className="flex flex-wrap gap-3">
              {clientLogos.map((client, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg font-medium"
                >
                  {client}
                </span>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="absolute bottom-8 left-8 right-8 pt-6 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/in/jasonsosa" className="flex items-center gap-1 hover:text-cyan-600">
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/jasonsosa
              </a>
            </div>
            <div className="text-gray-600">
              Contact your speaker bureau representative to book
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SpeakerOneSheet;
