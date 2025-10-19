// // // // import React, { useState } from "react";
// // // // import { motion } from "framer-motion";
// // // // import { Sparkles, Award, Users, Heart } from "lucide-react";
// // // // import { Card } from "@/components/ui/card";
// // // // import { Badge } from "@/components/ui/badge";

// // // // const teamMembers = [
// // // //   {
// // // //     name: "Anastasiia Erasova",
// // // //     title: "Permanent Makeup & Eyelash Extension Artist",
// // // //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
// // // //     bio: "Certified permanent makeup and eyelash extension artist with over five years of international experience. Having run her own studio in Russia and worked in Nairobi, she specializes in modern techniques for all skin types and levels of complexity, from powder brows and eyeliner to lip blush and dark lip camouflage.",
// // // //     specialties: ["Powder Brows", "Eyeliner", "Lip Blush", "Lash Extensions", "Brow Lamination"],
// // // //     accent: "#C1B5C6"
// // // //   },
// // // //   {
// // // //     name: "Cherry Perez",
// // // //     title: "Senior Beauty Therapist & Skincare Specialist",
// // // //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
// // // //     bio: "With over 15 years in the beauty and aesthetics industry, Cherry is a trusted expert in advanced facial treatments and personalized skincare. Her experience spans luxury spas, private wellness services, and medical aesthetics, combining modern technologies like Hydrafacial, Mesotherapy, and Radiofrequency with holistic client care.",
// // // //     specialties: ["Hydrafacial", "Mesotherapy", "Radiofrequency", "Anti-Aging", "Skin Diagnostics"],
// // // //     accent: "#B0C2B0"
// // // //   },
// // // //   {
// // // //     name: "Romel Abaca Sims",
// // // //     title: "Certified Nursing Assistant (CNA)",
// // // //     image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
// // // //     bio: "Compassionate healthcare professional with a strong foundation in patient care, clinical support, and healthcare administration. With hands-on experience in dermatology and orthopedic procedures at Aster Hospital in Dubai, Romel combines medical knowledge with over a decade of administrative experience to ensure quality care and smooth operations.",
// // // //     specialties: ["Patient Care", "Clinical Support", "Healthcare Admin", "Emergency Response", "BLS Certified"],
// // // //     accent: "#C1B5C6"
// // // //   },
// // // //   {
// // // //     name: "Yaz Aysberg",
// // // //     title: "Training & Education Manager",
// // // //     image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
// // // //     bio: "Global training leader with a strong track record in talent development, education strategy, and brand education across the beauty, fashion, and corporate sectors. With experience spanning Russia, Japan, and the Philippines, Yaz specializes in building impactful learning programs that drive performance and align with business goals.",
// // // //     specialties: ["Talent Development", "Education Strategy", "Brand Education", "Cross-Cultural Training", "MBA"],
// // // //     accent: "#B0C2B0"
// // // //   }
// // // // ];

// // // // export default function Team() {
// // // //   const [hoveredIndex, setHoveredIndex] = useState(null);
// // // //   const [selectedMember, setSelectedMember] = useState(null);

// // // //   return (
// // // //     <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#262626' }}>
// // // //       {/* Ambient background effects */}
// // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // //         <div 
// // // //           className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
// // // //           style={{ background: 'radial-gradient(circle, #C1B5C6 0%, transparent 70%)' }}
// // // //         />
// // // //         <div 
// // // //           className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-15"
// // // //           style={{ background: 'radial-gradient(circle, #B0C2B0 0%, transparent 70%)' }}
// // // //         />
// // // //       </div>

// // // //       {/* Floating particles */}
// // // //       <div className="absolute inset-0 pointer-events-none">
// // // //         {[...Array(20)].map((_, i) => (
// // // //           <motion.div
// // // //             key={i}
// // // //             className="absolute w-1 h-1 rounded-full"
// // // //             style={{ 
// // // //               backgroundColor: i % 2 === 0 ? '#C1B5C6' : '#B0C2B0',
// // // //               left: `${Math.random() * 100}%`,
// // // //               top: `${Math.random() * 100}%`,
// // // //             }}
// // // //             animate={{
// // // //               y: [0, -30, 0],
// // // //               opacity: [0.2, 0.5, 0.2],
// // // //             }}
// // // //             transition={{
// // // //               duration: 3 + Math.random() * 2,
// // // //               repeat: Infinity,
// // // //               delay: Math.random() * 2,
// // // //             }}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
// // // //         {/* Hero Section */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 30 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8 }}
// // // //           className="text-center mb-20"
// // // //         >
// // // //           <motion.div
// // // //             initial={{ scale: 0.9, opacity: 0 }}
// // // //             animate={{ scale: 1, opacity: 1 }}
// // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // //             className="inline-block mb-6"
// // // //           >
// // // //             <Badge 
// // // //               className="px-6 py-2 text-sm font-medium border-2"
// // // //               style={{ 
// // // //                 backgroundColor: 'rgba(193, 181, 198, 0.1)',
// // // //                 borderColor: '#C1B5C6',
// // // //                 color: '#E2DBDF'
// // // //               }}
// // // //             >
// // // //               <Sparkles className="w-4 h-4 mr-2 inline" />
// // // //               Excellence in Beauty & Wellness
// // // //             </Badge>
// // // //           </motion.div>

// // // //           <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ color: '#E2DBDF' }}>
// // // //             Meet Our
// // // //             <span 
// // // //               className="block mt-2 bg-clip-text text-transparent"
// // // //               style={{ 
// // // //                 backgroundImage: 'linear-gradient(135deg, #C1B5C6 0%, #B0C2B0 100%)'
// // // //               }}
// // // //             >
// // // //               Expert Team
// // // //             </span>
// // // //           </h1>

// // // //           <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#595959' }}>
// // // //             World-class professionals bringing years of expertise, innovation, and dedication to your beauty journey
// // // //           </p>
// // // //         </motion.div>

// // // //         {/* Team Grid */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
// // // //           {teamMembers.map((member, index) => (
// // // //             <motion.div
// // // //               key={member.name}
// // // //               initial={{ opacity: 0, y: 50 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: index * 0.1 }}
// // // //               onHoverStart={() => setHoveredIndex(index)}
// // // //               onHoverEnd={() => setHoveredIndex(null)}
// // // //               onClick={() => setSelectedMember(selectedMember === index ? null : index)}
// // // //               className="cursor-pointer"
// // // //             >
// // // //               <Card 
// // // //                 className="relative overflow-hidden border-2 transition-all duration-500 h-full"
// // // //                 style={{
// // // //                   backgroundColor: hoveredIndex === index ? 'rgba(89, 89, 89, 0.4)' : 'rgba(89, 89, 89, 0.2)',
// // // //                   borderColor: hoveredIndex === index ? member.accent : 'rgba(226, 219, 223, 0.1)',
// // // //                   backdropFilter: 'blur(10px)',
// // // //                 }}
// // // //               >
// // // //                 {/* Glow effect on hover */}
// // // //                 <motion.div
// // // //                   className="absolute inset-0 opacity-0 transition-opacity duration-500"
// // // //                   style={{
// // // //                     background: `radial-gradient(circle at 50% 50%, ${member.accent}20 0%, transparent 70%)`,
// // // //                   }}
// // // //                   animate={{
// // // //                     opacity: hoveredIndex === index ? 1 : 0,
// // // //                   }}
// // // //                 />

// // // //                 <div className="relative p-6 md:p-8">
// // // //                   <div className="flex flex-col md:flex-row gap-6 items-start">
// // // //                     {/* Image */}
// // // //                     <motion.div 
// // // //                       className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0"
// // // //                       animate={{
// // // //                         scale: hoveredIndex === index ? 1.05 : 1,
// // // //                       }}
// // // //                       transition={{ duration: 0.3 }}
// // // //                     >
// // // //                       <div 
// // // //                         className="absolute inset-0 rounded-2xl blur-xl opacity-50"
// // // //                         style={{ backgroundColor: member.accent }}
// // // //                       />
// // // //                       <img
// // // //                         src={member.image}
// // // //                         alt={member.name}
// // // //                         className="relative w-full h-full object-cover rounded-2xl ring-2 ring-offset-4"
// // // //                         style={{ 
// // // //                           ringColor: member.accent,
// // // //                           ringOffsetColor: '#262626'
// // // //                         }}
// // // //                       />
// // // //                       <motion.div
// // // //                         className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center"
// // // //                         style={{ backgroundColor: member.accent }}
// // // //                         animate={{
// // // //                           rotate: hoveredIndex === index ? 360 : 0,
// // // //                         }}
// // // //                         transition={{ duration: 0.6 }}
// // // //                       >
// // // //                         <Award className="w-6 h-6 text-white" />
// // // //                       </motion.div>
// // // //                     </motion.div>

// // // //                     {/* Content */}
// // // //                     <div className="flex-1 text-center md:text-left">
// // // //                       <h3 
// // // //                         className="text-2xl md:text-3xl font-bold mb-2 tracking-tight"
// // // //                         style={{ color: '#E2DBDF' }}
// // // //                       >
// // // //                         {member.name}
// // // //                       </h3>
// // // //                       <p 
// // // //                         className="text-sm md:text-base font-medium mb-4"
// // // //                         style={{ color: member.accent }}
// // // //                       >
// // // //                         {member.title}
// // // //                       </p>

// // // //                       <motion.div
// // // //                         initial={{ height: 0, opacity: 0 }}
// // // //                         animate={{
// // // //                           height: selectedMember === index ? 'auto' : 0,
// // // //                           opacity: selectedMember === index ? 1 : 0,
// // // //                         }}
// // // //                         transition={{ duration: 0.4 }}
// // // //                         className="overflow-hidden"
// // // //                       >
// // // //                         <p 
// // // //                           className="text-sm leading-relaxed mb-4"
// // // //                           style={{ color: '#595959' }}
// // // //                         >
// // // //                           {member.bio}
// // // //                         </p>
// // // //                       </motion.div>

// // // //                       {/* Specialties */}
// // // //                       <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
// // // //                         {member.specialties.slice(0, selectedMember === index ? member.specialties.length : 3).map((specialty, i) => (
// // // //                           <motion.span
// // // //                             key={specialty}
// // // //                             initial={{ scale: 0, opacity: 0 }}
// // // //                             animate={{ scale: 1, opacity: 1 }}
// // // //                             transition={{ delay: i * 0.05 }}
// // // //                             className="px-3 py-1 rounded-full text-xs font-medium border"
// // // //                             style={{
// // // //                               backgroundColor: `${member.accent}20`,
// // // //                               borderColor: member.accent,
// // // //                               color: '#E2DBDF'
// // // //                             }}
// // // //                           >
// // // //                             {specialty}
// // // //                           </motion.span>
// // // //                         ))}
// // // //                       </div>

// // // //                       {/* Read more indicator */}
// // // //                       <motion.div
// // // //                         className="mt-4 flex items-center justify-center md:justify-start gap-2 text-xs font-medium"
// // // //                         style={{ color: member.accent }}
// // // //                         animate={{
// // // //                           opacity: hoveredIndex === index ? 1 : 0.6,
// // // //                         }}
// // // //                       >
// // // //                         <span>{selectedMember === index ? 'Click to collapse' : 'Click to read more'}</span>
// // // //                         <motion.div
// // // //                           animate={{
// // // //                             y: selectedMember === index ? [0, -3, 0] : [0, 3, 0],
// // // //                           }}
// // // //                           transition={{
// // // //                             duration: 1,
// // // //                             repeat: Infinity,
// // // //                           }}
// // // //                         >
// // // //                           {selectedMember === index ? '▲' : '▼'}
// // // //                         </motion.div>
// // // //                       </motion.div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Corner accent */}
// // // //                 <div 
// // // //                   className="absolute top-0 right-0 w-20 h-20 opacity-20"
// // // //                   style={{
// // // //                     background: `linear-gradient(135deg, transparent 50%, ${member.accent} 50%)`,
// // // //                   }}
// // // //                 />
// // // //               </Card>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Bottom CTA */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 30 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8, delay: 0.6 }}
// // // //           className="mt-20 text-center"
// // // //         >
// // // //           <div 
// // // //             className="inline-block px-8 py-4 rounded-2xl backdrop-blur-md border-2"
// // // //             style={{
// // // //               backgroundColor: 'rgba(226, 219, 223, 0.05)',
// // // //               borderColor: '#C1B5C6'
// // // //             }}
// // // //           >
// // // //             <div className="flex items-center gap-3 flex-wrap justify-center">
// // // //               <Users className="w-5 h-5" style={{ color: '#C1B5C6' }} />
// // // //               <span className="text-sm font-medium" style={{ color: '#E2DBDF' }}>
// // // //                 Combined 30+ years of expertise
// // // //               </span>
// // // //               <span style={{ color: '#595959' }}>•</span>
// // // //               <Heart className="w-5 h-5" style={{ color: '#B0C2B0' }} />
// // // //               <span className="text-sm font-medium" style={{ color: '#E2DBDF' }}>
// // // //                 Thousands of satisfied clients
// // // //               </span>
// // // //             </div>
// // // //           </div>
// // // //         </motion.div>
// // // //       </div>

// // // //       {/* Bottom gradient overlay */}
// // // //       <div 
// // // //         className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
// // // //         style={{
// // // //           background: 'linear-gradient(to top, rgba(38, 38, 38, 1) 0%, transparent 100%)'
// // // //         }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // }
// // // import { Award, Briefcase, GraduationCap } from 'lucide-react';

// // // interface TeamMember {
// // //   name: string;
// // //   title: string;
// // //   bio: string;
// // //   specialties: string[];
// // //   experience?: string;
// // // }

// // // const teamMembers: TeamMember[] = [
// // //   {
// // //     name: 'Anastasiia Erasova',
// // //     title: 'Permanent Makeup & Eyelash Extension Artist',
// // //     bio: 'Anastasiia Erasova is a certified permanent makeup and eyelash extension artist with over five years of international experience. Having run her own studio in Russia and worked in Nairobi, she specializes in modern techniques for all skin types and levels of complexity, from powder brows and eyeliner to lip blush and dark lip camouflage.',
// // //     specialties: [
// // //       'Powder Brows & Eyeliner',
// // //       'Lip Blush & Dark Lip Camouflage',
// // //       'Eyelash Extensions (All Volumes)',
// // //       'Brow & Lash Lamination'
// // //     ],
// // //     experience: '5+ years international'
// // //   },
// // //   {
// // //     name: 'Cherry Perez',
// // //     title: 'Senior Beauty Therapist & Skincare Specialist',
// // //     bio: 'With over 15 years in the beauty and aesthetics industry, Cherry Perez is a trusted expert in advanced facial treatments and personalized skincare. Her experience spans luxury spas, private wellness services, and medical aesthetics, combining modern technologies like Hydrafacial, Mesotherapy, and Radiofrequency with holistic client care.',
// // //     specialties: [
// // //       'Hydrafacial & Mesotherapy',
// // //       'Facial Contouring & Anti-aging',
// // //       'Skin Diagnostics',
// // //       'Medical Aesthetics'
// // //     ],
// // //     experience: '15+ years'
// // //   },
// // //   {
// // //     name: 'Romel Abaca Sims',
// // //     title: 'Certified Nursing Assistant (CNA)',
// // //     bio: 'Romel Abaca Sims is a compassionate healthcare professional with a strong foundation in patient care, clinical support, and healthcare administration. With hands-on experience in dermatology and orthopedic procedures at Aster Hospital in Dubai, Romel combines medical knowledge with over a decade of administrative and customer service experience to ensure quality care and smooth operations.',
// // //     specialties: [
// // //       'Patient Care & Clinical Support',
// // //       'Dermatology Procedures',
// // //       'Basic Life Support Certified',
// // //       'Healthcare Administration'
// // //     ],
// // //     experience: '10+ years'
// // //   },
// // //   {
// // //     name: 'Yaz Aysberg',
// // //     title: 'Training & Education Manager',
// // //     bio: 'Yaz Aysberg is a global training leader with a strong track record in talent development, education strategy, and brand education across the beauty, fashion, and corporate sectors. With experience spanning Russia, Japan, and the Philippines, Yaz specializes in building impactful learning programs that drive performance and align with business goals.',
// // //     specialties: [
// // //       'Talent Development',
// // //       'Education Strategy',
// // //       'Cross-cultural Training',
// // //       'Brand Education'
// // //     ],
// // //     experience: 'Global experience'
// // //   }
// // // ];

// // // export default function TeamPage() {
// // //   return (
// // //     <div className="min-h-screen bg-[#262626] relative overflow-hidden">
// // //       <div className="absolute inset-0 bg-gradient-to-br from-[#262626] via-[#595959] to-[#262626] opacity-50"></div>

// // //       <div className="absolute inset-0">
// // //         <div className="absolute top-20 left-10 w-72 h-72 bg-[#C1B5C6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
// // //         <div className="absolute top-40 right-10 w-72 h-72 bg-[#B0C2B0] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
// // //         <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#E2DBDF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
// // //       </div>

// // //       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
// // //         <div className="text-center mb-32">
// // //           <div className="relative inline-block mb-8">
// // //             <div className="absolute inset-0 bg-gradient-to-r from-[#C1B5C6] via-[#B0C2B0] to-[#C1B5C6] blur-3xl opacity-30 animate-pulse"></div>
// // //             <h1 className="relative text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E2DBDF] via-[#C1B5C6] to-[#E2DBDF] tracking-tight">
// // //               Our Team
// // //             </h1>
// // //           </div>
// // //           <p className="text-2xl text-[#E2DBDF]/70 max-w-3xl mx-auto leading-relaxed font-light">
// // //             Meet the exceptional professionals dedicated to excellence and innovation
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //           {teamMembers.map((member, index) => (
// // //             <div
// // //               key={index}
// // //               className="group relative bg-gradient-to-br from-[#595959]/40 to-[#262626]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#595959]/30 hover:border-[#C1B5C6]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C1B5C6]/20 hover:-translate-y-1"
// // //             >
// // //               <div className="absolute inset-0 bg-gradient-to-br from-[#C1B5C6]/0 to-[#B0C2B0]/0 group-hover:from-[#C1B5C6]/5 group-hover:to-[#B0C2B0]/5 rounded-2xl transition-all duration-500"></div>

// // //               <div className="relative">
// // //                 <div className="flex items-start justify-between mb-6">
// // //                   <div className="flex-1">
// // //                     <h2 className="text-3xl font-bold text-[#E2DBDF] mb-2 group-hover:text-[#C1B5C6] transition-colors duration-300">
// // //                       {member.name}
// // //                     </h2>
// // //                     <p className="text-[#B0C2B0] text-lg font-medium">
// // //                       {member.title}
// // //                     </p>
// // //                   </div>
// // //                   {member.experience && (
// // //                     <div className="flex items-center space-x-2 bg-[#262626]/60 px-4 py-2 rounded-full border border-[#595959]/40">
// // //                       <Award className="w-5 h-5 text-[#C1B5C6]" />
// // //                       <span className="text-sm text-[#E2DBDF] font-medium">
// // //                         {member.experience}
// // //                       </span>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 <div className="mb-6">
// // //                   <div className="flex items-center space-x-2 mb-3">
// // //                     <Briefcase className="w-5 h-5 text-[#C1B5C6]" />
// // //                     <h3 className="text-sm font-semibold text-[#E2DBDF] uppercase tracking-wider">
// // //                       About
// // //                     </h3>
// // //                   </div>
// // //                   <p className="text-[#E2DBDF]/80 leading-relaxed text-base">
// // //                     {member.bio}
// // //                   </p>
// // //                 </div>

// // //                 <div>
// // //                   <div className="flex items-center space-x-2 mb-4">
// // //                     <GraduationCap className="w-5 h-5 text-[#B0C2B0]" />
// // //                     <h3 className="text-sm font-semibold text-[#E2DBDF] uppercase tracking-wider">
// // //                       Specialties
// // //                     </h3>
// // //                   </div>
// // //                   <div className="grid grid-cols-2 gap-3">
// // //                     {member.specialties.map((specialty, idx) => (
// // //                       <div
// // //                         key={idx}
// // //                         className="flex items-center space-x-2 bg-[#262626]/40 px-4 py-3 rounded-lg border border-[#595959]/20 group-hover:border-[#B0C2B0]/30 transition-all duration-300"
// // //                       >
// // //                         <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0]"></div>
// // //                         <span className="text-sm text-[#E2DBDF]/90">
// // //                           {specialty}
// // //                         </span>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div className="mt-16 text-center">
// // //           <div className="inline-block bg-gradient-to-r from-[#262626]/60 to-[#595959]/60 backdrop-blur-sm px-8 py-4 rounded-full border border-[#595959]/30">
// // //             <p className="text-[#E2DBDF] text-sm">
// // //               Committed to excellence • Driven by passion • Focused on results
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         @keyframes blob {
// // //           0%, 100% { transform: translate(0, 0) scale(1); }
// // //           33% { transform: translate(30px, -50px) scale(1.1); }
// // //           66% { transform: translate(-20px, 20px) scale(0.9); }
// // //         }
// // //         .animate-blob {
// // //           animation: blob 7s infinite;
// // //         }
// // //         .animation-delay-2000 {
// // //           animation-delay: 2s;
// // //         }
// // //         .animation-delay-4000 {
// // //           animation-delay: 4s;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }
// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import { Sparkles, Award, Users, Heart } from "lucide-react";
// // import { Card } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";

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

// //   const lightBg = "#F7F5F6";
// //   const darkText = "#262626";
// //   const lightText = "#595959";

// //   return (
// //     <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: lightBg }}>
// //       {/* Hero Section with Background */}
// //       <div className="relative mb-20">
// //         {/* Hero Background Image with Overlay */}
// //         <div className="absolute inset-0 h-[600px] md:h-[700px]">
// //           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[${lightBg}]" style={{ zIndex: 2 }} />
// //           <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(193, 181, 198, 0.1) 0%, rgba(176, 194, 176, 0.1) 100%)', zIndex: 1 }} />
// //           <img
// //             src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80"
// //             alt="Beauty salon"
// //             className="w-full h-full object-cover opacity-20"
// //           />
// //         </div>

// //         {/* Animated geometric shapes */}
// //         <div className="absolute inset-0 h-[600px] md:h-[700px] overflow-hidden pointer-events-none" style={{ zIndex: 3 }}>
// //           <motion.div
// //             className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
// //             style={{ backgroundColor: '#C1B5C6' }}
// //             animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
// //             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// //           />
// //           <motion.div
// //             className="absolute top-40 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
// //             style={{ backgroundColor: '#B0C2B0' }}
// //             animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 30, 0] }}
// //             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// //           />
// //         </div>

// //         {/* Hero Content */}
// //         <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-40 pb-20">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-center max-w-5xl mx-auto"
// //           >
// //             {/* Floating badge */}
// //             <motion.div
// //               initial={{ scale: 0.8, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               className="inline-block mb-8"
// //             >
// //               <Badge 
// //                 className="px-8 py-3 text-base font-medium border-2 backdrop-blur-md shadow-lg"
// //                 style={{ 
// //                   backgroundColor: 'rgba(255, 255, 255, 0.2)',
// //                   borderColor: 'rgba(38, 38, 38, 0.2)',
// //                   color: darkText
// //                 }}
// //               >
// //                 <Sparkles className="w-5 h-5 mr-2 inline" />
// //                 Excellence in Beauty & Wellness
// //               </Badge>
// //             </motion.div>

// //             {/* Main heading */}
// //             <motion.h1 
// //               className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.3 }}
// //             >
// //               <span className="block" style={{ color: darkText }}>
// //                 Meet Our
// //               </span>
// //               <span 
// //                 className="block mt-2 bg-clip-text text-transparent relative"
// //                 style={{ 
// //                   backgroundImage: 'linear-gradient(135deg, #A192A6 0%, #8FA48F 100%)'
// //                 }}
// //               >
// //                 Expert Team
// //               </span>
// //             </motion.h1>

// //             {/* Subtitle with glass effect */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.5 }}
// //               className="inline-block"
// //             >
// //               <div 
// //                 className="px-10 py-6 rounded-2xl backdrop-blur-xl border shadow-lg max-w-3xl"
// //                 style={{
// //                   backgroundColor: 'rgba(255, 255, 255, 0.4)',
// //                   borderColor: 'rgba(38, 38, 38, 0.1)'
// //                 }}
// //               >
// //                 <p className="text-xl md:text-2xl leading-relaxed font-light" style={{ color: darkText }}>
// //                   World-class professionals bringing years of expertise, innovation, and dedication to your beauty journey
// //                 </p>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </div>

// //       {/* Ambient background effects for rest of page */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none top-[600px]">
// //         <div 
// //           className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
// //           style={{ background: 'radial-gradient(circle, #C1B5C6 0%, transparent 70%)' }}
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
// //                         className="relative w-full h-full object-cover rounded-2xl ring-2 ring-offset-4"
// //                         style={{ ringColor: member.accent, ringOffsetColor: lightBg }}
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
// //                       <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight" style={{ color: darkText }}>
// //                         {member.name}
// //                       </h3>
// //                       <p className="text-sm md:text-base font-semibold mb-4" style={{ color: member.accent }}>
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
// //                         <p className="text-sm leading-relaxed mb-4" style={{ color: lightText }}>
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
// //                         className="mt-4 flex items-center justify-center md:justify-start gap-2 text-xs font-medium"
// //                         style={{ color: member.accent }}
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

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Sparkles, Award, Users, Heart } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import img1 from "@/assets/h4.png";

// const teamMembers = [
//   {
//     name: "Anastasiia Erasova",
//     title: "Permanent Makeup & Eyelash Extension Artist",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
//     bio: "Certified permanent makeup and eyelash extension artist with over five years of international experience. Having run her own studio in Russia and worked in Nairobi, she specializes in modern techniques for all skin types and levels of complexity, from powder brows and eyeliner to lip blush and dark lip camouflage.",
//     specialties: ["Powder Brows", "Eyeliner", "Lip Blush", "Lash Extensions", "Brow Lamination"],
//     accent: "#A192A6" // Darker Thistle
//   },
//   {
//     name: "Cherry Perez",
//     title: "Senior Beauty Therapist & Skincare Specialist",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
//     bio: "With over 15 years in the beauty and aesthetics industry, Cherry is a trusted expert in advanced facial treatments and personalized skincare. Her experience spans luxury spas, private wellness services, and medical aesthetics, combining modern technologies like Hydrafacial, Mesotherapy, and Radiofrequency with holistic client care.",
//     specialties: ["Hydrafacial", "Mesotherapy", "Radiofrequency", "Anti-Aging", "Skin Diagnostics"],
//     accent: "#8FA48F" // Darker Ash Gray
//   },
//   {
//     name: "Romel Abaca Sims",
//     title: "Certified Nursing Assistant (CNA)",
//     image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
//     bio: "Compassionate healthcare professional with a strong foundation in patient care, clinical support, and healthcare administration. With hands-on experience in dermatology and orthopedic procedures at Aster Hospital in Dubai, Romel combines medical knowledge with over a decade of administrative experience to ensure quality care and smooth operations.",
//     specialties: ["Patient Care", "Clinical Support", "Healthcare Admin", "Emergency Response", "BLS Certified"],
//     accent: "#A192A6" // Darker Thistle
//   },
//   {
//     name: "Yaz Aysberg",
//     title: "Training & Education Manager",
//     image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
//     bio: "Global training leader with a strong track record in talent development, education strategy, and brand education across the beauty, fashion, and corporate sectors. With experience spanning Russia, Japan, and the Philippines, Yaz specializes in building impactful learning programs that drive performance and align with business goals.",
//     specialties: ["Talent Development", "Education Strategy", "Brand Education", "Cross-Cultural Training", "MBA"],
//     accent: "#8FA48F" // Darker Ash Gray
//   }
// ];

// export default function Team() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const lightBg = "#C1B5C6";
//   const darkText = "#262626";
//   const lightText = "#595959";

//   return (
//     <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: lightBg }}>
//       {/* Hero Section with Background */}
//       <div className="relative mb-20">
//         {/* Hero Background Image with Overlay */}
//         <div className="absolute inset-0 h-screen">
//             <img
//             src={img1}
//             alt="Beauty salon"
//             className="w-full h-full object-cover"
//             />
//             <div
//             className="absolute inset-0"
//             style={{
//                 background: `linear-gradient(to bottom, rgba(38, 38, 38, 0.4), transparent 50%, ${lightBg} 100%)`,
//                 zIndex: 1,
//             }}
//             />
//         </div>

//         {/* Animated geometric shapes */}
//         <div
//             className="absolute inset-0 h-screen overflow-hidden pointer-events-none"
//             style={{ zIndex: 2 }}
//         >
//             <motion.div
//             className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
//             style={{ backgroundColor: "#C1B5C6" }}
//             animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             />
//             <motion.div
//             className="absolute top-40 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
//             style={{ backgroundColor: "#B0C2B0" }}
//             animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 30, 0] }}
//             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//             />
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 container mx-auto px-4 pt-40 pb-20 h-screen flex flex-col justify-center items-center text-center">
//             <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-5xl mx-auto"
//             >
//             {/* Floating badge */}
//             {/* <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="inline-block mb-8"
//             >
//                 <Badge className="px-8 py-3 text-base font-medium border-2 shadow-lg">
//                 <Sparkles className="w-5 h-5 mr-2 inline" />
//                 Excellence in Beauty & Wellness
//                 </Badge>
//             </motion.div> */}

//             {/* Main heading */}
//             <motion.h1
//                 className="text-6xl md:text-8xl lg:text-9xl font-hatton mb-8 tracking-tight leading-none"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//             >
//                 <span className="block" style={{ color: `#E2DBDF` }}>Meet Our</span>
//                 <span
//                 className="block mt-2 bg-clip-text text-transparent"
//                 style={{ color: `#E2DBDF` }}
//                 >
//                 Expert Team
//                 </span>
//             </motion.h1>

//             {/* Subtitle with glass effect */}
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className="inline-block"
//             >
//                 <div
//                 className="px-10 py-6 rounded-2xl backdrop-blur-xl border shadow-lg max-w-3xl"
//                 style={{
//                     backgroundColor: "rgba(255, 255, 255, 0.1)",
//                     borderColor: "rgba(247, 245, 246, 0.2)",
//                 }}
//                 >
//                 <p className="text-xl md:text-2xl leading-relaxed font-light">
//                     World-class professionals bringing years of expertise, innovation,
//                     and dedication to your beauty journey
//                 </p>
//                 </div>
//             </motion.div>
//             </motion.div>
//         </div>
//         </div>


//       {/* Ambient background effects for rest of page */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none top-[600px]">
//         <div 
//           className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
//           style={{ background: 'radial-gradient(circle, #C1B5C6 0%, transparent 70%)' }}
//         />
//         <div 
//           className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-25"
//           style={{ background: 'radial-gradient(circle, #B0C2B0 0%, transparent 70%)' }}
//         />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 py-16">
//         {/* Team Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={member.name}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               onHoverStart={() => setHoveredIndex(index)}
//               onHoverEnd={() => setHoveredIndex(null)}
//               onClick={() => setSelectedMember(selectedMember === index ? null : index)}
//               className="cursor-pointer"
//             >
//               <Card 
//                 className="relative overflow-hidden border-2 transition-all duration-500 h-full shadow-md"
//                 style={{
//                   backgroundColor: 'rgba(255, 255, 255, 0.5)',
//                   borderColor: hoveredIndex === index ? member.accent : 'rgba(38, 38, 38, 0.1)',
//                   backdropFilter: 'blur(12px)',
//                 }}
//               >
//                 <motion.div
//                   className="absolute inset-0 opacity-0 transition-opacity duration-500"
//                   style={{ background: `radial-gradient(circle at 50% 50%, ${member.accent}30 0%, transparent 70%)` }}
//                   animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
//                 />

//                 <div className="relative p-6 md:p-8">
//                   <div className="flex flex-col md:flex-row gap-6 items-start">
//                     <motion.div 
//                       className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0"
//                       animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <div 
//                         className="absolute inset-0 rounded-2xl blur-xl opacity-60"
//                         style={{ backgroundColor: member.accent }}
//                       />
//                       <img
//                         src={member.image}
//                         alt={member.name}
//                         className="relative w-full h-full object-cover rounded-2xl ring-2 ring-offset-4"
//                         style={{ color: `#595959` }}
//                       />
//                       <motion.div
//                         className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
//                         style={{ backgroundColor: member.accent }}
//                         animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
//                         transition={{ duration: 0.6 }}
//                       >
//                         <Award className="w-6 h-6 text-white" />
//                       </motion.div>
//                     </motion.div>

//                     <div className="flex-1 text-center md:text-left">
//                       <h3 className="text-2xl md:text-3xl font-hatton mb-2 tracking-tight" style={{ color: darkText }}>
//                         {member.name}
//                       </h3>
//                       <p className="text-lg md:text-base font-hatton font-semibold mb-4" style={{ color: member.accent }}>
//                         {member.title}
//                       </p>

//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{
//                           height: selectedMember === index ? 'auto' : 0,
//                           opacity: selectedMember === index ? 1 : 0,
//                         }}
//                         transition={{ duration: 0.4 }}
//                         className="overflow-hidden"
//                       >
//                         <p className="text-m font-montserrat leading-relaxed mb-4 text-[#262626 ]" >
//                           {member.bio}
//                         </p>
//                       </motion.div>

//                       <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
//                         {member.specialties.slice(0, selectedMember === index ? member.specialties.length : 3).map((specialty, i) => (
//                           <motion.span
//                             key={specialty}
//                             initial={{ scale: 0, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             transition={{ delay: i * 0.05 }}
//                             className="px-3 py-1 rounded-full text-xs font-medium border"
//                             style={{
//                               backgroundColor: `${member.accent}15`,
//                               borderColor: member.accent,
//                               color: darkText
//                             }}
//                           >
//                             {specialty}
//                           </motion.span>
//                         ))}
//                       </div>

//                       <motion.div
//                         className="mt-4 flex items-center justify-center md:justify-start gap-2 text-sm font-hatton text-[#262626]"
//                         style={{ color: `#595959` }}
//                         animate={{ opacity: hoveredIndex === index ? 1 : 0.6 }}
//                       >
//                         <span>{selectedMember === index ? 'Click to collapse' : 'Click to read more'}</span>
//                         <motion.div
//                           animate={{ y: selectedMember === index ? [0, -3, 0] : [0, 3, 0] }}
//                           transition={{ duration: 1, repeat: Infinity }}
//                         >
//                           {selectedMember === index ? '▲' : '▼'}
//                         </motion.div>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>

//                 <div 
//                   className="absolute top-0 right-0 w-20 h-20 opacity-20"
//                   style={{ background: `linear-gradient(135deg, transparent 50%, ${member.accent} 50%)` }}
//                 />
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mt-20 text-center"
//         >
//           <div 
//             className="inline-block px-8 py-4 rounded-2xl backdrop-blur-md border"
//             style={{
//               backgroundColor: 'rgba(255, 255, 255, 0.2)',
//               borderColor: 'rgba(38, 38, 38, 0.2)'
//             }}
//           >
//             <div className="flex items-center gap-3 flex-wrap justify-center">
//               <Users className="w-5 h-5" style={{ color: '#A192A6' }} />
//               <span className="text-sm font-medium" style={{ color: darkText }}>
//                 Combined 30+ years of expertise
//               </span>
//               <span style={{ color: lightText }}>•</span>
//               <Heart className="w-5 h-5" style={{ color: '#8FA48F' }} />
//               <span className="text-sm font-medium" style={{ color: darkText }}>
//                 Thousands of satisfied clients
//               </span>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <div 
//         className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
//         style={{ background: `linear-gradient(to top, ${lightBg} 0%, transparent 100%)` }}
//       />
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Anastasiia Erasova",
    title: "Permanent Makeup & Eyelash Extension Artist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    bio: "Certified permanent makeup and eyelash extension artist with over five years of international experience. Having run her own studio in Russia and worked in Nairobi, she specializes in modern techniques for all skin types and levels of complexity, from powder brows and eyeliner to lip blush and dark lip camouflage.",
    specialties: ["Powder Brows", "Eyeliner", "Lip Blush", "Lash Extensions", "Brow Lamination"],
    accent: "#A192A6" // Darker Thistle
  },
  {
    name: "Cherry Perez",
    title: "Senior Beauty Therapist & Skincare Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    bio: "With over 15 years in the beauty and aesthetics industry, Cherry is a trusted expert in advanced facial treatments and personalized skincare. Her experience spans luxury spas, private wellness services, and medical aesthetics, combining modern technologies like Hydrafacial, Mesotherapy, and Radiofrequency with holistic client care.",
    specialties: ["Hydrafacial", "Mesotherapy", "Radiofrequency", "Anti-Aging", "Skin Diagnostics"],
    accent: "#8FA48F" // Darker Ash Gray
  },
  {
    name: "Romel Abaca Sims",
    title: "Certified Nursing Assistant (CNA)",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
    bio: "Compassionate healthcare professional with a strong foundation in patient care, clinical support, and healthcare administration. With hands-on experience in dermatology and orthopedic procedures at Aster Hospital in Dubai, Romel combines medical knowledge with over a decade of administrative experience to ensure quality care and smooth operations.",
    specialties: ["Patient Care", "Clinical Support", "Healthcare Admin", "Emergency Response", "BLS Certified"],
    accent: "#A192A6" // Darker Thistle
  },
  {
    name: "Yaz Aysberg",
    title: "Training & Education Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    bio: "Global training leader with a strong track record in talent development, education strategy, and brand education across the beauty, fashion, and corporate sectors. With experience spanning Russia, Japan, and the Philippines, Yaz specializes in building impactful learning programs that drive performance and align with business goals.",
    specialties: ["Talent Development", "Education Strategy", "Brand Education", "Cross-Cultural Training", "MBA"],
    accent: "#8FA48F" // Darker Ash Gray
  }
];

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const lightBg = "#C1B5C6";
  const darkText = "#262626";
  const lightText = "#595959";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: lightBg }}>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-end px-4 pb-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 mb-8">
              <Users className="w-4 h-4 text-white" />
              <span className="text-sm tracking-wider text-white font-montserrat">MEET THE TEAM</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-hatton font-light text-[#E2DBDF]  mb-6 leading-[1.1] tracking-tight animate-fade-in-up cyber-text">
              Meet Our
              <br />
              Expert Team
            </h1>
            <p className="text-lg md:text-xl text-[#C1B5C6] font-hatton mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              World-class professionals bringing years of expertise, innovation, <br />
              and dedication to your beauty journey.
            </p>
          </div>
        </div>
      </section>

      {/* Ambient background effects for rest of page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none top-[600px]">
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(circle, #E2DBDF 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-25"
          style={{ background: 'radial-gradient(circle, #B0C2B0 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              className="cursor-pointer"
            >
              <Card 
                className="relative overflow-hidden border-2 transition-all duration-500 h-full shadow-md"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderColor: hoveredIndex === index ? member.accent : 'rgba(38, 38, 38, 0.1)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${member.accent}30 0%, transparent 70%)` }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />

                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <motion.div 
                      className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0"
                      animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="absolute inset-0 rounded-2xl blur-xl opacity-60"
                        style={{ backgroundColor: member.accent }}
                      />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-full h-full object-cover rounded-2xl ring-2 ring-white ring-offset-4"
                        style={{ borderColor: member.accent }}
                      />
                      <motion.div
                        className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: member.accent }}
                        animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Award className="w-6 h-6 text-white" />
                      </motion.div>
                    </motion.div>

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-serif mb-2 tracking-tight" style={{ color: darkText }}>
                        {member.name}
                      </h3>
                      <p className="text-lg md:text-base font-serif font-semibold mb-4" style={{ color: member.accent }}>
                        {member.title}
                      </p>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: selectedMember === index ? 'auto' : 0,
                          opacity: selectedMember === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <p className="text-m font-sans leading-relaxed mb-4 text-gray-800" >
                          {member.bio}
                        </p>
                      </motion.div>

                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
                        {member.specialties.slice(0, selectedMember === index ? member.specialties.length : 3).map((specialty, i) => (
                          <motion.span
                            key={specialty}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-3 py-1 rounded-full text-xs font-medium border"
                            style={{
                              backgroundColor: `${member.accent}15`,
                              borderColor: member.accent,
                              color: darkText
                            }}
                          >
                            {specialty}
                          </motion.span>
                        ))}
                      </div>

                      <motion.div
                        className="mt-4 flex items-center justify-center md:justify-start gap-2 text-sm font-serif text-gray-600"
                        animate={{ opacity: hoveredIndex === index ? 1 : 0.6 }}
                      >
                        <span>{selectedMember === index ? 'Click to collapse' : 'Click to read more'}</span>
                        <motion.div
                          animate={{ y: selectedMember === index ? [0, -3, 0] : [0, 3, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          {selectedMember === index ? '▲' : '▼'}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-20"
                  style={{ background: `linear-gradient(135deg, transparent 50%, ${member.accent} 50%)` }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div 
            className="inline-block px-8 py-4 rounded-2xl backdrop-blur-md border"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderColor: 'rgba(38, 38, 38, 0.2)'
            }}
          >
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <Users className="w-5 h-5" style={{ color: '#A192A6' }} />
              <span className="text-sm font-medium" style={{ color: darkText }}>
                Combined 30+ years of expertise
              </span>
              <span style={{ color: lightText }}>•</span>
              <Heart className="w-5 h-5" style={{ color: '#8FA48F' }} />
              <span className="text-sm font-medium" style={{ color: darkText }}>
                Thousands of satisfied clients
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${lightBg} 0%, transparent 100%)` }}
      />
    </div>
  );
}
