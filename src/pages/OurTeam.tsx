import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Ana from "@/assets/anastacia.jpeg";

const teamMembers = [
  {
    name: "Anastasiia Erasova",
    title: "Permanent Makeup & Lash Artist",
    image: Ana,
    bio: "Anastasiia is a certified permanent makeup and eyelash extension artist renowned for her refined technique and artistic precision. She creates soft, natural enhancements tailored to each client. Her expertise in lash extensions and brow design ensures a flawless, polished finish every time.",
    expertise: "Powder Brows • Eyeliner • Lip Blush • Lash Extensions • Brow & Lash Lamination",
    accent: "#A192A6"
  },
  {
    name: "Cherry Perez",
    title: "Skincare & Facial Specialist",
    image: "",
    bio: "Cherry is a highly skilled facial and skincare specialist celebrated for her personalized, results-driven treatments. Blending advanced technologies such as Hydrafacial, Mesotherapy, and Radiofrequency with a holistic touch, she delivers radiant, youthful complexions while providing an indulgent, spa-like experience.",
    expertise: "Hydrafacial • Mesotherapy • Radiofrequency • Anti-Aging • Skin Diagnostics",
    accent: "#8FA48F"
  },
  {
    name: "Romel Abaca Sims",
    title: "Client Care & Medical Support Specialist",
    image: "",
    bio: "Romel brings a calm, professional presence to every client interaction, ensuring comfort, safety, and exceptional care. With a strong foundation in dermatology and aesthetic support, he upholds the salon’s commitment to excellence and a seamless luxury experience.",
    expertise: "Patient Care • Clinical Support • Basic Life Support • Emergency Response • Healthcare Administration",
    accent: "#A192A6"
  },
  {
    name: "Yaz Aysberg",
    title: "Training Director & Salon Manager",
    image: "",
    bio: "Yaz leads the salon’s education and development programs with a focus on innovation, artistry, and client experience. With extensive global expertise in beauty and brand education, Yaz ensures the team maintains the highest standards of luxury service and professional excellence.",
    expertise: "Talent Development • Education Strategy • Brand Education • Cross-Cultural Training",
    accent: "#8FA48F"
  }
];

export default function Team() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#E2DBDF] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-start mb-16">
          <h2 className="text-4xl md:text-5xl font-hatton font-light text-[#262626] mb-4">
            Meet The Team
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#A192A6] to-transparent mb-6" />
          <p className="text-[18px] md:text-[20px] text-[#595959] max-w-md font-hatton">
            Expert professionals bringing passion, expertise, and personalized care to your beauty journey.
          </p>
        </div>

        {/* Team Grid */}
        <Accordion type="single" collapsible className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  borderTop: `4px solid ${member.accent}`,
                  boxShadow: hoveredCard === index
                    ? `0 20px 40px -10px ${member.accent}30, 0 0 0 1px ${member.accent}10`
                    : '0 10px 30px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Section */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-base text-white/90 font-light">
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Accordion Content Section */}
                <div className="p-6 md:p-8">
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="hover:no-underline py-2">
                      <span 
                        className="text-sm md:text-base font-medium"
                        style={{ color: member.accent }}
                      >
                        Click to learn more
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-[#595959] leading-relaxed text-sm md:text-base mb-6">
                        {member.bio}
                      </p>
                      
                      {/* Decorative divider */}
                      {/* <div 
                        className="h-px w-full mb-6 opacity-20"
                        style={{ backgroundColor: member.accent }}
                      /> */}
                      
                      {/* Expertise section */}
                      {/* <div className="flex items-center gap-2">
                        <div 
                          className="h-1 w-12 rounded-full"
                          style={{ backgroundColor: member.accent }}
                        />
                        <span className="text-xs text-[#595959] font-medium">
                          {member.expertise}
                        </span>
                      </div> */}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
}