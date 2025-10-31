import React, { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Anastasiia Erasova",
    title: "Permanent Makeup & Eyelash Extension Artist",
    image: "",
    bio: "Anastasiia Erasova is a certified permanent makeup and eyelash extension artist with over five years of international experience. Having run her own studio in Russia and worked in Nairobi, she specializes in modern techniques for all skin types and levels of complexity, from powder brows and eyeliner to lip blush and dark lip camouflage. With additional expertise in eyelash extensions of all volumes, as well as brow and lash lamination, shaping, and tinting, Anastasiia is committed to enhancing natural beauty with precision and care.",
    expertise: "Powder Brows • Eyeliner • Lip Blush • Lash Extensions • Brow & Lash Lamination",
    accent: "#A192A6"
  },
  {
    name: "Cherry Perez",
    title: "Senior Beauty Therapist & Skincare Specialist",
    image: "",
    bio: "With over 15 years in the beauty and aesthetics industry, Cherry Perez is a trusted expert in advanced facial treatments and personalized skincare. Her experience spans luxury spas, private wellness services, and medical aesthetics, combining modern technologies like Hydrafacial, Mesotherapy, and Radiofrequency with holistic client care. Cherry has held senior roles at Face Flex Dubai, Myoka Spa Malta, and Tips and Toes, with expertise in facial contouring, anti-aging therapies, and skin diagnostics. She is a Certified Nursing Assistant with diplomas in beauty therapy and medical aesthetics, committed to delivering results-driven treatments with a personal touch.",
    expertise: "Hydrafacial • Mesotherapy • Radiofrequency • Anti-Aging • Skin Diagnostics",
    accent: "#8FA48F"
  },
  {
    name: "Romel Abaca Sims",
    title: "Certified Nursing Assistant (CNA)",
    image: "",
    bio: "Romel Abaca Sims is a compassionate healthcare professional with a strong foundation in patient care, clinical support, and healthcare administration. With hands-on experience in dermatology and orthopedic procedures at Aster Hospital in Dubai, Romel combines medical knowledge with over a decade of administrative and customer service experience to ensure quality care and smooth operations. Certified in Basic Life Support and emergency response, Romel is also proficient in healthcare software and office tools. He holds a CNA certification from the Filipino Institute in Dubai and a Bachelor's degree in Financial Accounting from Far Eastern University, Manila.",
    expertise: "Patient Care • Clinical Support • Basic Life Support • Emergency Response • Healthcare Administration",
    accent: "#A192A6"
  },
  {
    name: "Yaz Aysberg",
    title: "Training & Education Manager",
    image: "",
    bio: "Yaz Aysberg is a global training leader with a strong track record in talent development, education strategy, and brand education across the beauty, fashion, and corporate sectors. With experience spanning Russia, Japan, and the Philippines, Yaz specializes in building impactful learning programs that drive performance and align with business goals. Fluent in English, Russian, and Japanese, Yaz brings cross-cultural insight to every project. Past roles include leadership positions at TONI&GUY, Coty (Wella), Tech Mahindra, and Procter & Gamble. Yaz holds an MBA from the Russian University of Humanities and advanced Japanese language certification from Arc Academy, Tokyo.",
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
            Expert professionals bringing passion, expertise, and personalized care to your beauty journey
          </p>
        </div>

        {/* Team Grid */}
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
              <div className="relative h-64 md:h-72 overflow-hidden">
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

              {/* Content Section */}
              <div className="p-6 md:p-8">
                <p className="text-[#595959] leading-relaxed text-sm md:text-base mb-6">
                  {member.bio}
                </p>
                
                {/* Decorative divider */}
                <div 
                  className="h-px w-full mb-6 opacity-20"
                  style={{ backgroundColor: member.accent }}
                />
                
                {/* Expertise section */}
                <div className="flex items-center gap-2">
                  <div 
                    className="h-1 w-12 rounded-full"
                    style={{ backgroundColor: member.accent }}
                  />
                  <span className="text-xs text-[#595959] font-medium">
                    {member.expertise}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}