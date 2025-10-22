// // import React, { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { Sparkles, Award, Users, Heart } from "lucide-react";
// // import { Card } from "@/components/ui/card";

// // const teamMembers = [
// //   {
// //     name: "Anastasiia Erasova",
// //     title: "Permanent Makeup & Eyelash Extension Artist",
// //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
// //     bio: "Certified permanent makeup and eyelash extension artist with over five years of international experience. Having run her own studio in Russia and worked in Nairobi, she specializes in modern techniques for all skin types and levels of complexity, from powder brows and eyeliner to lip blush and dark lip camouflage.",
// //     specialties: ["Powder Brows", "Eyeliner", "Lip Blush", "Lash Extensions", "Brow Lamination"],
// //     accent: "#A192A6" // Darker Thistle
// //   },
// //   {
// //     name: "Cherry Perez",
// //     title: "Senior Beauty Therapist & Skincare Specialist",
// //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
// //     bio: "With over 15 years in the beauty and aesthetics industry, Cherry is a trusted expert in advanced facial treatments and personalized skincare. Her experience spans luxury spas, private wellness services, and medical aesthetics, combining modern technologies like Hydrafacial, Mesotherapy, and Radiofrequency with holistic client care.",
// //     specialties: ["Hydrafacial", "Mesotherapy", "Radiofrequency", "Anti-Aging", "Skin Diagnostics"],
// //     accent: "#8FA48F" // Darker Ash Gray
// //   },
// //   {
// //     name: "Romel Abaca Sims",
// //     title: "Certified Nursing Assistant (CNA)",
// //     image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
// //     bio: "Compassionate healthcare professional with a strong foundation in patient care, clinical support, and healthcare administration. With hands-on experience in dermatology and orthopedic procedures at Aster Hospital in Dubai, Romel combines medical knowledge with over a decade of administrative experience to ensure quality care and smooth operations.",
// //     specialties: ["Patient Care", "Clinical Support", "Healthcare Admin", "Emergency Response", "BLS Certified"],
// //     accent: "#A192A6" // Darker Thistle
// //   },
// //   {
// //     name: "Yaz Aysberg",
// //     title: "Training & Education Manager",
// //     image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
// //     bio: "Global training leader with a strong track record in talent development, education strategy, and brand education across the beauty, fashion, and corporate sectors. With experience spanning Russia, Japan, and the Philippines, Yaz specializes in building impactful learning programs that drive performance and align with business goals.",
// //     specialties: ["Talent Development", "Education Strategy", "Brand Education", "Cross-Cultural Training", "MBA"],
// //     accent: "#8FA48F" // Darker Ash Gray
// //   }
// // ];

// // export default function Team() {
// //   const [hoveredIndex, setHoveredIndex] = useState(null);
// //   const [selectedMember, setSelectedMember] = useState(null);
// //   const [isVisible, setIsVisible] = useState(false);

// //   const lightBg = "#C1B5C6";
// //   const darkText = "#262626";
// //   const lightText = "#595959";

// //   useEffect(() => {
// //     setIsVisible(true);
// //   }, []);

// //   return (
// //     <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: lightBg }}>
// //       {/* Hero Section */}
// //       <section
// //         className="relative h-screen flex items-end px-4 pb-20"
// //         style={{
// //           backgroundImage: "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80')",
// //           backgroundSize: 'cover',
// //           backgroundPosition: 'center',
// //         }}
// //       >
// //         <div className="absolute inset-0 bg-black/40" />
// //         <div className="relative z-10 max-w-7xl mx-auto w-full">
// //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 mb-8">
// //               <Users className="w-4 h-4 text-white" />
// //               <span className="text-sm tracking-wider text-white font-montserrat">MEET THE TEAM</span>
// //             </div>
// //             <h1 className="text-5xl md:text-7xl lg:text-8xl font-hatton font-light text-[#E2DBDF]  mb-6 leading-[1.1] tracking-tight animate-fade-in-up cyber-text">
// //               Meet Our
// //               <br />
// //               Expert Team
// //             </h1>
// //             <p className="text-lg md:text-xl text-[#C1B5C6] font-hatton mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
// //               World-class professionals bringing years of expertise, innovation, <br />
// //               and dedication to your beauty journey.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Ambient background effects for rest of page */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none top-[600px]">
// //         <div 
// //           className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
// //           style={{ background: 'radial-gradient(circle, #E2DBDF 0%, transparent 70%)' }}
// //         />
// //         <div 
// //           className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-25"
// //           style={{ background: 'radial-gradient(circle, #B0C2B0 0%, transparent 70%)' }}
// //         />
// //       </div>

// //       <div className="relative z-10 container mx-auto px-4 py-16">
// //         {/* Team Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
// //           {teamMembers.map((member, index) => (
// //             <motion.div
// //               key={member.name}
// //               initial={{ opacity: 0, y: 50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: index * 0.1 }}
// //               onHoverStart={() => setHoveredIndex(index)}
// //               onHoverEnd={() => setHoveredIndex(null)}
// //               onClick={() => setSelectedMember(selectedMember === index ? null : index)}
// //               className="cursor-pointer"
// //             >
// //               <Card 
// //                 className="relative overflow-hidden border-2 transition-all duration-500 h-full shadow-md"
// //                 style={{
// //                   backgroundColor: 'rgba(255, 255, 255, 0.5)',
// //                   borderColor: hoveredIndex === index ? member.accent : 'rgba(38, 38, 38, 0.1)',
// //                   backdropFilter: 'blur(12px)',
// //                 }}
// //               >
// //                 <motion.div
// //                   className="absolute inset-0 opacity-0 transition-opacity duration-500"
// //                   style={{ background: `radial-gradient(circle at 50% 50%, ${member.accent}30 0%, transparent 70%)` }}
// //                   animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
// //                 />

// //                 <div className="relative p-6 md:p-8">
// //                   <div className="flex flex-col md:flex-row gap-6 items-start">
// //                     <motion.div 
// //                       className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0"
// //                       animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
// //                       transition={{ duration: 0.3 }}
// //                     >
// //                       <div 
// //                         className="absolute inset-0 rounded-2xl blur-xl opacity-60"
// //                         style={{ backgroundColor: member.accent }}
// //                       />
// //                       <img
// //                         src={member.image}
// //                         alt={member.name}
// //                         className="relative w-full h-full object-cover rounded-2xl ring-2 ring-white ring-offset-4"
// //                         style={{ borderColor: member.accent }}
// //                       />
// //                       <motion.div
// //                         className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
// //                         style={{ backgroundColor: member.accent }}
// //                         animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
// //                         transition={{ duration: 0.6 }}
// //                       >
// //                         <Award className="w-6 h-6 text-white" />
// //                       </motion.div>
// //                     </motion.div>

// //                     <div className="flex-1 text-center md:text-left">
// //                       <h3 className="text-2xl md:text-3xl font-serif mb-2 tracking-tight" style={{ color: darkText }}>
// //                         {member.name}
// //                       </h3>
// //                       <p className="text-lg md:text-base font-serif font-semibold mb-4" style={{ color: member.accent }}>
// //                         {member.title}
// //                       </p>

// //                       <motion.div
// //                         initial={{ height: 0, opacity: 0 }}
// //                         animate={{
// //                           height: selectedMember === index ? 'auto' : 0,
// //                           opacity: selectedMember === index ? 1 : 0,
// //                         }}
// //                         transition={{ duration: 0.4 }}
// //                         className="overflow-hidden"
// //                       >
// //                         <p className="text-m font-sans leading-relaxed mb-4 text-gray-800" >
// //                           {member.bio}
// //                         </p>
// //                       </motion.div>

// //                       <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
// //                         {member.specialties.slice(0, selectedMember === index ? member.specialties.length : 3).map((specialty, i) => (
// //                           <motion.span
// //                             key={specialty}
// //                             initial={{ scale: 0, opacity: 0 }}
// //                             animate={{ scale: 1, opacity: 1 }}
// //                             transition={{ delay: i * 0.05 }}
// //                             className="px-3 py-1 rounded-full text-xs font-medium border"
// //                             style={{
// //                               backgroundColor: `${member.accent}15`,
// //                               borderColor: member.accent,
// //                               color: darkText
// //                             }}
// //                           >
// //                             {specialty}
// //                           </motion.span>
// //                         ))}
// //                       </div>

// //                       <motion.div
// //                         className="mt-4 flex items-center justify-center md:justify-start gap-2 text-sm font-serif text-gray-600"
// //                         animate={{ opacity: hoveredIndex === index ? 1 : 0.6 }}
// //                       >
// //                         <span>{selectedMember === index ? 'Click to collapse' : 'Click to read more'}</span>
// //                         <motion.div
// //                           animate={{ y: selectedMember === index ? [0, -3, 0] : [0, 3, 0] }}
// //                           transition={{ duration: 1, repeat: Infinity }}
// //                         >
// //                           {selectedMember === index ? '▲' : '▼'}
// //                         </motion.div>
// //                       </motion.div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div 
// //                   className="absolute top-0 right-0 w-20 h-20 opacity-20"
// //                   style={{ background: `linear-gradient(135deg, transparent 50%, ${member.accent} 50%)` }}
// //                 />
// //               </Card>
// //             </motion.div>
// //           ))}
// //         </div>

// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.6 }}
// //           className="mt-20 text-center"
// //         >
// //           <div 
// //             className="inline-block px-8 py-4 rounded-2xl backdrop-blur-md border"
// //             style={{
// //               backgroundColor: 'rgba(255, 255, 255, 0.2)',
// //               borderColor: 'rgba(38, 38, 38, 0.2)'
// //             }}
// //           >
// //             <div className="flex items-center gap-3 flex-wrap justify-center">
// //               <Users className="w-5 h-5" style={{ color: '#A192A6' }} />
// //               <span className="text-sm font-medium" style={{ color: darkText }}>
// //                 Combined 30+ years of expertise
// //               </span>
// //               <span style={{ color: lightText }}>•</span>
// //               <Heart className="w-5 h-5" style={{ color: '#8FA48F' }} />
// //               <span className="text-sm font-medium" style={{ color: darkText }}>
// //                 Thousands of satisfied clients
// //               </span>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>

// //       <div 
// //         className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
// //         style={{ background: `linear-gradient(to top, ${lightBg} 0%, transparent 100%)` }}
// //       />
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import { Award, Users, Heart } from "lucide-react";

// const teamMembers = [
//   {
//     name: "Anastasiia Erasova",
//     title: "Permanent Makeup & Eyelash Extension Artist",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
//     bio: "Certified permanent makeup and eyelash extension artist with over five years of international experience. Having run her own studio in Russia and worked in Nairobi, she specializes in modern techniques for all skin types and levels of complexity, from powder brows and eyeliner to lip blush and dark lip camouflage.",
//     specialties: ["Powder Brows", "Eyeliner", "Lip Blush", "Lash Extensions", "Brow Lamination"],
//     accent: "#A192A6"
//   },
//   {
//     name: "Cherry Perez",
//     title: "Senior Beauty Therapist & Skincare Specialist",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
//     bio: "With over 15 years in the beauty and aesthetics industry, Cherry is a trusted expert in advanced facial treatments and personalized skincare. Her experience spans luxury spas, private wellness services, and medical aesthetics, combining modern technologies like Hydrafacial, Mesotherapy, and Radiofrequency with holistic client care.",
//     specialties: ["Hydrafacial", "Mesotherapy", "Radiofrequency", "Anti-Aging", "Skin Diagnostics"],
//     accent: "#8FA48F"
//   },
//   {
//     name: "Romel Abaca Sims",
//     title: "Certified Nursing Assistant (CNA)",
//     image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
//     bio: "Compassionate healthcare professional with a strong foundation in patient care, clinical support, and healthcare administration. With hands-on experience in dermatology and orthopedic procedures at Aster Hospital in Dubai, Romel combines medical knowledge with over a decade of administrative experience to ensure quality care and smooth operations.",
//     specialties: ["Patient Care", "Clinical Support", "Healthcare Admin", "Emergency Response", "BLS Certified"],
//     accent: "#A192A6"
//   },
//   {
//     name: "Yaz Aysberg",
//     title: "Training & Education Manager",
//     image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
//     bio: "Global training leader with a strong track record in talent development, education strategy, and brand education across the beauty, fashion, and corporate sectors. With experience spanning Russia, Japan, and the Philippines, Yaz specializes in building impactful learning programs that drive performance and align with business goals.",
//     specialties: ["Talent Development", "Education Strategy", "Brand Education", "Cross-Cultural Training", "MBA"],
//     accent: "#8FA48F"
//   }
// ];

// export default function Team() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Hero Section */}
//       <section
//         className="relative h-screen flex items-end px-4 pb-20"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40" />
//         <div className="relative z-10 max-w-7xl mx-auto w-full">
//           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 mb-8">
//               <Users className="w-4 h-4 text-white" />
//               <span className="text-sm tracking-wider text-white font-sans">MEET THE TEAM</span>
//             </div>
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight tracking-tight">
//               Meet Our
//               <br />
//               Expert Team
//             </h1>
//             <p className="text-lg md:text-xl text-gray-200 mb-10">
//               World-class professionals bringing years of expertise, innovation,
//               <br />
//               and dedication to your beauty journey.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Team Cards Section */}
//       <div className="py-28 px-4">
//         <h2 className="text-center text-5xl font-medium mb-12 bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
//           Our Team Members
//         </h2>
        
//         <div className="flex flex-col items-center gap-16 mt-12">
//           {teamMembers.map((member, index) => (
//             <div
//               key={member.name}
//               className="w-full max-w-5xl flex justify-center items-center gap-8 bg-gradient-to-br from-gray-100 to-white rounded-3xl border border-gray-200 transition-all duration-300 hover:shadow-2xl"
//               style={{
//                 position: 'sticky',
//                 top: `${5 + index * 2}rem`,
//                 boxShadow: '11px 11px 24px #d1d1d1, -11px -11px 24px #ffffff',
//                 minHeight: '400px'
//               }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-1/2 h-full object-cover rounded-l-3xl hidden md:block"
//                 style={{ minHeight: '400px' }}
//               />
              
//               <div className="flex flex-col p-8 md:pr-10 flex-1">
//                 <h2 className="text-3xl font-medium text-gray-800 mb-2">{member.name}</h2>
//                 <h3 className="text-xl text-gray-500 mb-4">{member.title}</h3>
                
//                 <div className="flex items-center gap-1 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Award key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
                
//                 <p className="text-gray-600 leading-relaxed mb-6 overflow-y-auto max-h-40">
//                   {member.bio}
//                 </p>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {member.specialties.map((specialty) => (
//                     <span
//                       key={specialty}
//                       className="px-3 py-1 rounded-full text-xs font-medium border"
//                       style={{
//                         backgroundColor: `${member.accent}20`,
//                         borderColor: member.accent,
//                         color: '#333'
//                       }}
//                     >
//                       {specialty}
//                     </span>
//                   ))}
//                 </div>
                
//                 <button
//                   className="self-start px-6 py-3 bg-gray-800 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-900"
//                   onClick={() => alert(`Book with ${member.name}`)}
//                 >
//                   Book Now!
//                 </button>
//               </div>
//             </div>
//           ))}
          
//           {/* See All Card */}
//           <div
//             className="w-full max-w-5xl bg-white rounded-3xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl cursor-pointer"
//             style={{
//               position: 'sticky',
//               top: `${5 + teamMembers.length * 2}rem`,
//               height: '400px',
//               boxShadow: '11px 11px 24px #d1d1d1, -11px -11px 24px #ffffff'
//             }}
//           >
//             <button className="text-4xl font-medium px-12 py-6 bg-gray-800 text-white rounded-xl transition-all duration-300 hover:bg-gray-900">
//               SEE ALL
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-20 text-center">
//         <div className="inline-block px-8 py-6 rounded-2xl backdrop-blur-md border border-gray-300 bg-white/50">
//           <div className="flex items-center gap-6 flex-wrap justify-center">
//             <Users className="w-6 h-6 text-purple-600" />
//             <span className="text-base font-medium text-gray-800">
//               Combined 30+ years of expertise
//             </span>
//             <span className="text-gray-400">•</span>
//             <Heart className="w-6 h-6 text-green-600" />
//             <span className="text-base font-medium text-gray-800">
//               Thousands of satisfied clients
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { Award, Users, Heart } from "lucide-react";
import img3 from "@/assets/op3.png";

const teamMembers = [
  {
    name: "Anastasiia Erasova",
    title: "Permanent Makeup & Eyelash Extension Artist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    bio: "Certified permanent makeup and eyelash extension artist with over five years of international experience. Having run her own studio in Russia and worked in Nairobi, she specializes in modern techniques for all skin types and levels of complexity, from powder brows and eyeliner to lip blush and dark lip camouflage.",
    specialties: ["Powder Brows", "Eyeliner", "Lip Blush", "Lash Extensions", "Brow Lamination"],
    accent: "#A192A6"
  },
  {
    name: "Cherry Perez",
    title: "Senior Beauty Therapist & Skincare Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    bio: "With over 15 years in the beauty and aesthetics industry, Cherry is a trusted expert in advanced facial treatments and personalized skincare. Her experience spans luxury spas, private wellness services, and medical aesthetics, combining modern technologies like Hydrafacial, Mesotherapy, and Radiofrequency with holistic client care.",
    specialties: ["Hydrafacial", "Mesotherapy", "Radiofrequency", "Anti-Aging", "Skin Diagnostics"],
    accent: "#8FA48F"
  },
  {
    name: "Romel Abaca Sims",
    title: "Certified Nursing Assistant (CNA)",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
    bio: "Compassionate healthcare professional with a strong foundation in patient care, clinical support, and healthcare administration. With hands-on experience in dermatology and orthopedic procedures at Aster Hospital in Dubai, Romel combines medical knowledge with over a decade of administrative experience to ensure quality care and smooth operations.",
    specialties: ["Patient Care", "Clinical Support", "Healthcare Admin", "Emergency Response", "BLS Certified"],
    accent: "#A192A6"
  },
  {
    name: "Yaz Aysberg",
    title: "Training & Education Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    bio: "Global training leader with a strong track record in talent development, education strategy, and brand education across the beauty, fashion, and corporate sectors. With experience spanning Russia, Japan, and the Philippines, Yaz specializes in building impactful learning programs that drive performance and align with business goals.",
    specialties: ["Talent Development", "Education Strategy", "Brand Education", "Cross-Cultural Training", "MBA"],
    accent: "#8FA48F"
  }
];

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#E2DBDF]">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-end px-4 pb-20"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 mb-8">
              <Users className="w-4 h-4 text-white" />
              <span className="text-sm tracking-wider text-white font-sans">MEET THE TEAM</span>
            </div> */}
            <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight">
              Meet Our
              <br />
              <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
                Expert Team
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light mb-10">
              World-class professionals bringing years of expertise, innovation,
              <br />
              and dedication to your beauty journey.
            </p>
          </div>
        </div>
      </section>

      {/* Team Cards Section */}
      <div className="py-28 px-4">
        <h2 className="text-center text-4xl font-light mb-12 bg-[#E2DBDF]">
          The Team Behind Avya
        </h2>

        <div className="flex flex-col items-center gap-16 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="w-full max-w-6xl flex justify-center items-center gap-8 bg-gradient-to-br from-gray-100 to-white rounded-3xl border border-gray-200 transition-all duration-300 hover:shadow-2xl"
              style={{
                position: 'sticky',
                top: `${5 + index * 2}rem`,
                boxShadow: '11px 11px 24px #d1d1d1, -11px -11px 24px #ffffff',
                minHeight: '300px',
                width: '90%',
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-1/3 h-full object-cover rounded-l-3xl hidden md:block"
                style={{ minHeight: '300px' }}
              />

              <div className="flex flex-col p-8 md:pr-10 flex-1">
                <h2 className="text-3xl font-medium text-gray-800 mb-2">{member.name}</h2>
                <h3 className="text-xl text-gray-500 mb-4">{member.title}</h3>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 overflow-y-auto max-h-32">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        backgroundColor: `${member.accent}20`,
                        borderColor: member.accent,
                        color: '#333'
                      }}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* <button
                  className="self-start px-6 py-3 bg-gray-800 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-900"
                  onClick={() => alert(`Book with ${member.name}`)}
                >
                  Book Now!
                </button> */}
              </div>
            </div>
          ))}

          {/* See All Card */}
          {/* <div
            className="w-full max-w-6xl bg-white rounded-3xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl cursor-pointer"
            style={{
              position: 'sticky',
              top: `${5 + teamMembers.length * 2}rem`,
              height: '300px',
              boxShadow: '11px 11px 24px #d1d1d1, -11px -11px 24px #ffffff',
              width: '90%',
            }}
          >
            <button className="text-4xl font-medium px-12 py-6 bg-gray-800 text-white rounded-xl transition-all duration-300 hover:bg-gray-900">
              SEE ALL
            </button>
          </div> */}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 text-center">
        <div className="inline-block px-8 py-6 rounded-2xl backdrop-blur-md border border-gray-300 bg-white/50">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Users className="w-6 h-6 text-purple-600" />
            <span className="text-base font-medium text-gray-800">
              Combined 30+ years of expertise
            </span>
            <span className="text-gray-400">•</span>
            <Heart className="w-6 h-6 text-green-600" />
            <span className="text-base font-medium text-gray-800">
              Thousands of satisfied clients
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
