// import React, { useState, useEffect } from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import Ana from "@/assets/anastacia.jpeg";
// import Fadi from "@/assets/fadi.jpeg";
// import Alex from "@/assets/Alex.jpeg";
// import ser from "@/assets/sar.jpeg";

// const teamMembers = [
//   {
//     name: "Fadi Elias",
//     title: " Senior Hairdresser",
//     image: Fadi,
//     bio: "Fadi Elias is a highly skilled hairdresser with over five years of professional experience. Specializing in advanced colouring techniques, precision cutting, and personalized client consultations, he has worked with renowned salons Known for his creativity, technical expertise, and client-focused approach.",
//     // expertise: "Powder Brows • Eyeliner • Lip Blush • Lash Extensions • Brow & Lash Lamination",
//     // accent: "#A192A6"
//   },
//   {
//     name: "Anastasiia Erasova",
//     title: " Permanent Makeup & Lash Artist ",
//     image: Ana,
//     bio: "Anastasiia is a certified permanent makeup and eyelash extension artist renowned for her refined technique and artistic precision. She creates soft, natural enhancements tailored to each client, with expertise in lash extensions and brow design for a flawless, polished finish.",
//     // expertise: "Hydrafacial • Mesotherapy • Radiofrequency • Anti-Aging • Skin Diagnostics",
//     // accent: "#8FA48F"
//   },
//   {
//     name: "Alexey Burmistrov",
//     title: " Style Director ",
//     image: Alex,
//     bio: "Alex is a seasoned hair educator and creative specialist with over 20 years of experience working with leading global brands. Known for blending trend-led artistry with technical precision, Alex has developed signature programs in colour, cutting, styling, and men’s grooming, and has contributed to product launches and major industry exhibitions.",
//     // expertise: "Patient Care • Clinical Support • Basic Life Support • Emergency Response • Healthcare Administration",
//     // accent: "#A192A6"
//   },
//   {
//     name: "Serfine Adhiambo",
//     title: "Training Director & Salon Manager",
//     image: ser,
//     bio: "Yaz leads the salon’s education and development programs with a focus on innovation, artistry, and client experience. With extensive global expertise in beauty and brand education, Yaz ensures the team maintains the highest standards of luxury service and professional excellence.",
//     expertise: "Talent Development • Education Strategy • Brand Education • Cross-Cultural Training",
//     accent: "#8FA48F"
//   }
// ];

// export default function Team() {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#E2DBDF] py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-start mb-16">
//           <h2 className="text-4xl md:text-5xl font-hatton font-light text-[#262626] mb-4">
//             Meet The Team
//           </h2>
//           <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#A192A6] to-transparent mb-6" />
//           <p className="text-[18px] md:text-[20px] text-[#595959] max-w-md font-hatton">
//             Expert professionals bringing passion, expertise, and personalized care to your beauty journey.
//           </p>
//         </div>

//         {/* Team Grid */}
//         <Accordion type="single" collapsible className="w-full">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={member.name}
//                 className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
//                 style={{
//                   borderTop: `4px solid ${member.accent}`,
//                   boxShadow: hoveredCard === index
//                     ? `0 20px 40px -10px ${member.accent}30, 0 0 0 1px ${member.accent}10`
//                     : '0 10px 30px rgba(0,0,0,0.08)',
//                 }}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 {/* Image Section */}
//                 <div className="relative h-64 md:h-auto overflow-hidden">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
//                   />
//                   <div 
//                     className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
//                   />
//                   <div className="absolute bottom-6 left-6 right-6">
//                     <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1">
//                       {member.name}
//                     </h3>
//                     <p className="text-base text-white/90 font-light">
//                       {member.title}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Accordion Content Section */}
//                 <div className="p-6 md:p-8">
//                   <AccordionItem value={`item-${index}`} className="border-none">
//                     <AccordionTrigger className="hover:no-underline py-2">
//                       <span 
//                         className="text-sm md:text-base font-medium"
//                         style={{ color: member.accent }}
//                       >
//                         Click to learn more
//                       </span>
//                     </AccordionTrigger>
//                     <AccordionContent className="pt-4">
//                       <p className="text-[#595959] leading-relaxed text-sm md:text-base mb-6">
//                         {member.bio}
//                       </p>
                      
//                       {/* Decorative divider */}
//                       {/* <div 
//                         className="h-px w-full mb-6 opacity-20"
//                         style={{ backgroundColor: member.accent }}
//                       /> */}
                      
//                       {/* Expertise section */}
//                       {/* <div className="flex items-center gap-2">
//                         <div 
//                           className="h-1 w-12 rounded-full"
//                           style={{ backgroundColor: member.accent }}
//                         />
//                         <span className="text-xs text-[#595959] font-medium">
//                           {member.expertise}
//                         </span>
//                       </div> */}
//                     </AccordionContent>
//                   </AccordionItem>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Accordion>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Make sure your image paths are correct
import Ana from "@/assets/anastacia.jpeg";
import Fadi from "@/assets/fadi.jpeg";
import Alex from "@/assets/Alex.jpeg";
import ser from "@/assets/sar.jpeg";

const teamMembers = [
   {
    name: "Fadi Elias",
    title: " Senior Hairdresser",
    image: Fadi,
    bio: "Fadi Elias is a highly skilled hairdresser with over five years of professional experience. Specializing in advanced colouring techniques, precision cutting, and personalized client consultations, he has worked with renowned salons Known for his creativity, technical expertise, and client-focused approach.",
    // expertise: "Powder Brows • Eyeliner • Lip Blush • Lash Extensions • Brow & Lash Lamination",
    accent: "#A192A6"
  },
  {
    name: "Anastasiia Erasova",
    title: " Permanent Makeup & Lash Artist ",
    image: Ana,
    bio: "Anastasiia is a certified permanent makeup and eyelash extension artist renowned for her refined technique and artistic precision. She creates soft, natural enhancements tailored to each client, with expertise in lash extensions and brow design for a flawless, polished finish.",
    // expertise: "Hydrafacial • Mesotherapy • Radiofrequency • Anti-Aging • Skin Diagnostics",
    accent: "#8FA48F"
  },
  {
    name: "Alexey Burmistrov",
    title: " Style Director ",
    image: Alex,
    bio: "Alex is a seasoned hair educator and creative specialist with over 20 years of experience working with leading global brands. Known for blending trend-led artistry with technical precision, Alex has developed signature programs in colour, cutting, styling, and men’s grooming, and has contributed to product launches and major industry exhibitions.",
    // expertise: "Patient Care • Clinical Support • Basic Life Support • Emergency Response • Healthcare Administration",
    accent: "#A192A6"
  },
  {
    name: "Serfine Adhiambo",
    title: "Hair & Wig Specialist",
    image: ser,
    bio: "Serfine is an experienced natural hair and wig specialist skilled in hairstyling support, wig preparation, customer care, and daily salon operations. She’s known for her professionalism, friendliness,  teamwork, and commitment to creating a welcoming, efficient salon experience.",
    //expertise: "Talent Development • Education Strategy • Brand Education • Cross-Cultural Training",
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
                {/* 
                   UPDATED IMAGE SECTION 
                   1. Changed h-64 to h-72 for better mobile proportion.
                   2. Changed md:h-auto to md:h-96 to limit desktop height.
                */}
                <div className="relative w-full h-72 md:h-96 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    // Added object-top to focus on faces
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
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