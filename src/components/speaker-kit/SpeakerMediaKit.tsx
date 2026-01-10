import React from "react";
import {
  Linkedin,
  MapPin,
  Quote,
  Monitor,
  Mic,
  Users,
  Clock,
  CheckCircle2,
  Video,
  Camera,
  FileText,
} from "lucide-react";

const SpeakerMediaKit = () => {
  const speakingTopics = [
    {
      title: "AI & The Future of Work",
      tagline: "Navigate the AI revolution with confidence",
      description:
        "The AI revolution isn't coming. It's here. In this provocative keynote, Jason demystifies AI for business leaders, separating hype from reality while revealing the strategic opportunities most organizations are missing. From autonomous agents to generative AI, attendees leave with a clear roadmap for leading in an AI-augmented world.",
      takeaways: [
        "Understand the real capabilities and limitations of current AI systems",
        "Identify AI opportunities specific to your industry and organization",
        "Develop a framework for responsible AI adoption",
        "Prepare your workforce for AI collaboration, not replacement",
      ],
      duration: "45-60 min",
      audience: "C-Suite, Board Members, Innovation Teams",
    },
    {
      title: "Bitcoin & Corporate Treasury",
      tagline: "The strategic case for digital assets",
      description:
        "As traditional currencies face unprecedented challenges, Bitcoin has emerged as a legitimate treasury asset for major corporations. This keynote cuts through the noise to deliver a sophisticated analysis of Bitcoin as a strategic reserve asset, drawing on real-world case studies from companies like Strategy, Tesla, and private treasuries.",
      takeaways: [
        "Evaluate Bitcoin's role in a diversified treasury strategy",
        "Understand the regulatory landscape and compliance requirements",
        "Assess custody solutions and security considerations",
        "Learn from companies that have successfully integrated Bitcoin",
      ],
      duration: "45-60 min",
      audience: "CFOs, Finance Leaders, Treasury Teams, Family Offices",
    },
    {
      title: "Digital Transformation in Finance",
      tagline: "From legacy to leading edge",
      description:
        "Traditional financial institutions face a stark choice: transform or be disrupted. This keynote provides a battle-tested framework for digital transformation, drawing on successes and failures from banks, insurers, and wealth managers worldwide.",
      takeaways: [
        "Assess your organization's digital maturity honestly",
        "Prioritize transformation initiatives for maximum impact",
        "Balance innovation with regulatory compliance",
        "Build the culture required for continuous transformation",
      ],
      duration: "45-60 min",
      audience: "Bank Executives, Insurance Leaders, Wealth Managers",
    },
    {
      title: "The Technological Singularity",
      tagline: "Preparing for exponential change",
      description:
        "We're approaching a point where technological change becomes so rapid and profound that it fundamentally transforms human civilization. This thought-provoking keynote explores the implications of exponential technology growth, helping leaders prepare for possibilities that once seemed like science fiction.",
      takeaways: [
        "Understand the concept and timeline of the technological singularity",
        "Explore potential impacts on business, society, and humanity",
        "Develop scenarios for navigating exponential change",
        "Build organizational resilience for radical uncertainty",
      ],
      duration: "45-60 min",
      audience: "Visionary Leaders, Strategy Teams, Tech Executives",
    },
  ];

  const testimonials = [
    {
      quote:
        "Jason delivered an outstanding keynote at our wealth management conference. His insights on AI and the future of finance resonated deeply with our high-net-worth clients. The feedback was exceptional.",
      author: "Event Director",
      company: "Global Wealth Summit",
    },
    {
      quote:
        "The most engaging speaker we've had in five years. Jason's ability to make complex AI concepts accessible while keeping executives on the edge of their seats is remarkable.",
      author: "Conference Chair",
      company: "FinTech Innovation Forum",
    },
    {
      quote:
        "Our board members were thoroughly impressed. Jason's presentation on digital transformation sparked conversations that led to real strategic initiatives. Worth every penny.",
      author: "Chief of Staff",
      company: "Fortune 500 Financial Services",
    },
    {
      quote:
        "Jason brings exceptional energy, enthusiasm, and integrity to every project. His strategic mindset and ability to build high-performing teams make him a valuable partner.",
      author: "Shahid Chishty",
      company: "Strategic Investment & Board Advisor",
    },
  ];

  const speakingFormats = [
    {
      title: "Keynote Address",
      duration: "45-60 minutes",
      audience: "500+ attendees",
      features: [
        "Custom content tailored to your audience",
        "Pre-event strategy call",
        "Audience Q&A session",
        "Social media promotion",
      ],
    },
    {
      title: "Executive Workshop",
      duration: "Half or Full Day",
      audience: "15-50 executives",
      features: [
        "Customized workshop materials",
        "Breakout session facilitation",
        "Action plan development",
        "30-day follow-up call",
      ],
    },
    {
      title: "Virtual Keynote",
      duration: "30-45 minutes",
      audience: "Unlimited virtual",
      features: [
        "Professional studio setup",
        "Interactive polling & Q&A",
        "Recording for internal use",
        "Technical rehearsal included",
      ],
    },
  ];

  const pastClients = [
    "Bank of America",
    "Samsung",
    "NASDAQ",
    "TEDx NYC",
    "Stanford University",
    "Stryker Corporation",
    "Citywire",
    "GVTC Communications",
    "Glow Financial",
    "USC Aiken",
    "National University of Singapore",
    "MIT Enterprise Forum",
    "New York Tech Meetup",
  ];

  const mediaFeatures = ["The Wall Street Journal", "The New York Times", "Forbes", "CNN", "Wired", "Esquire"];

  return (
    <div className="bg-white text-gray-900">
      {/* Print-optimized container */}
      <div className="max-w-[210mm] mx-auto bg-white print:shadow-none shadow-xl">

        {/* ============ PAGE 1: COVER ============ */}
        <div className="min-h-[297mm] print:min-h-[297mm] relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white p-12 print:p-10 flex flex-col justify-between">
          {/* Top Section */}
          <div>
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-2">Speaker Media Kit</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-4">Jason Sosa</h1>
            <p className="text-2xl text-cyan-300 mb-8">AI & Finance Keynote Speaker</p>
          </div>

          {/* Center - Photo */}
          <div className="flex-1 flex items-center justify-center py-12">
            <img
              src="/jason-sosa-speaker.jpg"
              alt="Jason Sosa"
              className="w-72 h-72 object-cover rounded-2xl shadow-2xl border-4 border-white/10"
            />
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-4 gap-6 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">100+</div>
              <div className="text-sm text-gray-300">Keynotes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">10+</div>
              <div className="text-sm text-gray-300">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">5</div>
              <div className="text-sm text-gray-300">Continents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">15+</div>
              <div className="text-sm text-gray-300">Industries</div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/20 flex justify-center text-sm text-gray-400">
            <span>Global Availability | Contact your speaker bureau representative</span>
          </div>
        </div>

        {/* ============ PAGE 2: ABOUT ============ */}
        <div className="min-h-[297mm] print:min-h-[297mm] p-12 print:p-10 print:break-before-page">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">About Jason</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-8"></div>

          <div className="grid grid-cols-3 gap-8 mb-10">
            <div className="col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Jason Sosa is an entrepreneur, technologist, and global business advisor with a
                track record of building companies and advising leaders at the frontier of artificial
                intelligence, automation, and digital asset strategy. Over his career, he has raised
                and structured more than $100 million in capital, scaling startups and advising
                boards, founders, and executives on innovation and capital allocation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As CEO and founder of IMRSV, a venture-backed AI company in New York City, Jason
                built and scaled technology at the cutting edge. He later served as Entrepreneur-in-Residence
                and advisor to a $20M early-stage venture fund in San Francisco, where he guided
                dozens of startups from Seed to Series B. He is an alumnus of TechStars, 500 Startups,
                and Plug and Play.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Jason is a Forbes contributing writer, with features in The Wall Street Journal,
                The New York Times, CNN, Wired, and Esquire. He is a four-time TEDx speaker and has
                delivered keynotes for Bank of America, Samsung, Stanford University, Carnegie Mellon,
                NUS Business School, and MIT Enterprise Forum.
              </p>
            </div>
            <div>
              <img
                src="/jason-sosa-headshot.jpg"
                alt="Jason Sosa - AI & Finance Keynote Speaker"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Credentials */}
          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Credentials & Experience</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-600 mb-2">Operator & Advisor</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                    <span>$100M+ capital raised and structured</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                    <span>CEO/Founder, IMRSV (venture-backed AI company)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                    <span>EIR & Advisor, $20M venture fund</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                    <span>TechStars, 500 Startups, Plug and Play alumnus</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-600 mb-2">Speaking & Media</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                    <span>Four-time TEDx speaker</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                    <span>Forbes contributing writer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                    <span>WSJ, NYT, CNN, Wired, Esquire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                    <span>Global audiences across 5 continents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* As Seen In */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">As Featured In</h3>
            <div className="flex gap-8 items-center">
              {mediaFeatures.map((media, index) => (
                <span key={index} className="text-2xl font-bold text-gray-400">
                  {media}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ============ PAGE 3: SPEAKING TOPICS ============ */}
        <div className="min-h-[297mm] print:min-h-[297mm] p-12 print:p-10 print:break-before-page">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Keynote Topics</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-8"></div>

          <div className="space-y-8">
            {speakingTopics.map((topic, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{topic.title}</h3>
                    <p className="text-cyan-600 italic">{topic.tagline}</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center gap-1 justify-end">
                      <Clock className="w-4 h-4" />
                      {topic.duration}
                    </div>
                    <div className="flex items-center gap-1 justify-end mt-1">
                      <Users className="w-4 h-4" />
                      {topic.audience}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{topic.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Takeaways:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {topic.takeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8 italic">
            All topics can be customized for your specific industry, audience, and objectives.
          </p>
        </div>

        {/* ============ PAGE 4: FORMATS & TESTIMONIALS ============ */}
        <div className="min-h-[297mm] print:min-h-[297mm] p-12 print:p-10 print:break-before-page">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Speaking Formats</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-8"></div>

          <div className="grid grid-cols-3 gap-6 mb-16">
            {speakingFormats.map((format, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{format.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {format.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {format.audience}
                  </span>
                </div>
                <ul className="space-y-2">
                  {format.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-2 text-gray-900">What Clients Say</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-8"></div>

          <div className="grid grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 relative">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-cyan-200" />
                <p className="text-gray-700 italic mb-4 ml-10 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="ml-10">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============ PAGE 5: CLIENTS & TECHNICAL ============ */}
        <div className="min-h-[297mm] print:min-h-[297mm] p-12 print:p-10 print:break-before-page">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Previous Clients</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-8"></div>

          <div className="grid grid-cols-4 gap-4 mb-16">
            {pastClients.map((client, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 flex items-center justify-center text-center"
              >
                <span className="font-semibold text-gray-700">{client}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-2 text-gray-900">Technical Requirements</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-8"></div>

          <div className="grid grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
                <Mic className="w-5 h-5 text-cyan-500" />
                Audio/Visual
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lavalier (lapel) microphone preferred</li>
                <li>• Handheld wireless as backup</li>
                <li>• Confidence monitor / timer visible from stage</li>
                <li>• HDMI connection for laptop</li>
                <li>• Screen minimum 10ft wide for audiences 200+</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
                <Monitor className="w-5 h-5 text-cyan-500" />
                Presentation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Slides provided in Keynote or PowerPoint</li>
                <li>• 16:9 aspect ratio standard</li>
                <li>• PDF backup provided</li>
                <li>• Videos encoded in H.264</li>
                <li>• Clicker/advancer provided or bring own</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-2 text-gray-900">Speaker Introduction</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-8"></div>

          <div className="bg-cyan-50 rounded-xl p-8 border border-cyan-200">
            <p className="text-gray-700 leading-relaxed italic">
              "Our next speaker has raised and structured over $100 million in capital, advised
              boards and executives on innovation strategy, and built venture-backed AI companies
              from the ground up. He's a four-time TEDx speaker, a Forbes contributing writer,
              and has been featured in The Wall Street Journal, The New York Times, CNN, and Wired.
              He's delivered keynotes for Bank of America, Samsung, CityWire Wealth Summit, Stanford,
              MIT Enterprise Forum, and NUS Business School. Today, he's here to share what he's
              learned at the frontier of AI and finance. Insights you won't get from analysts or
              academics, but from someone who's been in the arena. Please welcome... Jason Sosa!"
            </p>
          </div>
        </div>

        {/* ============ PAGE 6: BOOKING ============ */}
        <div className="min-h-[297mm] print:min-h-[297mm] p-12 print:p-10 print:break-before-page bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Book Jason</h2>
            <div className="w-20 h-1 bg-cyan-400 mb-8"></div>

            <p className="text-xl text-gray-300 mb-12 max-w-xl">
              Ready to inspire your audience? Contact your speaker bureau representative to discuss
              how Jason can make your next event unforgettable.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5" />
                    Global (APAC, MENA, Americas, EU)
                  </div>
                  <a
                    href="https://linkedin.com/in/jasonsosa"
                    className="flex items-center gap-3 text-gray-300 hover:text-white"
                  >
                    <Linkedin className="w-5 h-5" />
                    linkedin.com/in/jasonsosa
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Available Assets</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Video className="w-5 h-5" />
                    Speaker Reel (YouTube)
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Camera className="w-5 h-5" />
                    High-Resolution Photos
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FileText className="w-5 h-5" />
                    Bio (Short & Long versions)
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FileText className="w-5 h-5" />
                    Introduction Script
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12 border-t border-white/20">
            <p className="text-gray-400 mb-4">Contact your speaker bureau representative to check availability</p>
            <p className="text-xl font-bold text-cyan-400">Typical response time: Under 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerMediaKit;
