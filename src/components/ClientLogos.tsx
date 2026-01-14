
import React from "react";

// Define client logos with proper dimensions for aspect ratio preservation
const clients = [
  { 
    name: "CNN", 
    logo: "/lovable-uploads/c85695ee-902d-4588-b97e-2d6009329b20.webp",
    height: 60,
    width: 120,
    altText: "CNN - Global news network featuring Jason Sosa's expert commentary on artificial intelligence trends and business innovation"
  },
  { 
    name: "Entrepreneur", 
    logo: "/lovable-uploads/1e9233d3-5592-410f-914c-aedf10827631.webp",
    height: 58,
    width: 180,
    altText: "Entrepreneur Magazine - Business publication highlighting Jason Sosa's entrepreneurial journey and AI startup expertise"
  },
  { 
    name: "Esquire", 
    logo: "/lovable-uploads/9a8c7dcf-ce96-4254-882b-d04aa9cf534b.webp",
    height: 66,
    width: 160,
    altText: "Esquire - Lifestyle magazine profiling Jason Sosa as a thought leader in technology innovation and future thinking"
  },
  { 
    name: "Forbes", 
    logo: "/lovable-uploads/3c6d8a93-ffcd-4d1e-ab79-30730f5a8bc3.webp",
    height: 50,
    width: 140,
    altText: "Forbes - Business publication featuring Jason Sosa's insights on AI strategy and digital transformation for enterprises"
  },
  { 
    name: "Wired", 
    logo: "/lovable-uploads/a6ad5730-1682-4b3d-95c7-884bff2277d1.webp", 
    height: 30,
    width: 120,
    altText: "Wired - Technology magazine showcasing Jason Sosa's pioneering work in artificial intelligence and computer vision"
  },
  { 
    name: "Fast Company", 
    logo: "/lovable-uploads/a51ada11-80d2-4476-b764-841b30596518.webp",
    height: 58,
    width: 170,
    altText: "Fast Company - Innovation-focused publication covering Jason Sosa's forward-thinking approach to emerging technologies"
  },
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl text-[#8E9196] uppercase tracking-wider mb-10">
          Featured In
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.altText}
                className="object-contain opacity-70 filter brightness-0 invert"
                style={{ 
                  height: `${client.height}px`,
                  maxWidth: '280px' 
                }}
                width={client.width}
                height={client.height}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ClientLogos);
