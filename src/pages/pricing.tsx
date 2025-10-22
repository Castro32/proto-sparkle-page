// // // // import React, { useState } from 'react';
// // // // import { ChevronDown, ChevronUp, Scissors, Palette, Heart, Eye, Sparkles, Crown, Star, Shield, Zap, Clock } from 'lucide-react';

// // // // const Pricing = () => {
// // // //   const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

// // // //   const toggleSection = (section: string) => {
// // // //     setOpenSections(prev => ({
// // // //       ...prev,
// // // //       [section]: !prev[section]
// // // //     }));
// // // //   };

// // // //   const serviceCategories = [
// // // //     {
// // // //       id: 'cutting-styling',
// // // //       title: 'Cutting & Styling',
// // // //       icon: Scissors,
// // // //       services: [
// // // //         { name: 'Haircut', price: '6,000', duration: '1h' },
// // // //         { name: "Men's Haircut", price: '4,500', duration: '45 mins' },
// // // //         { name: 'Fringe Cut', price: '2,000', duration: '20 mins' },
// // // //         { name: "Kid's Haircut (under 12)", price: '3,000', duration: '30 mins' },
// // // //         { name: 'Wash & Blow-Dry', price: '4,000', duration: '45 mins' },
// // // //         { name: 'Hair Up (Event Styling)', price: 'from 8,000', duration: '1-2h' }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 'colour',
// // // //       title: 'Colour Services',
// // // //       icon: Palette,
// // // //       services: [
// // // //         { name: 'Full Colour - Short', price: 'from 10,000', duration: '2h' },
// // // //         { name: 'Full Colour - Medium', price: 'from 15,000', duration: '2.5h' },
// // // //         { name: 'Full Colour - Long', price: 'from 18,000', duration: '3h' },
// // // //         { name: 'Highlights T-Section', price: '10,000', duration: '2h', note: 'Toner not included' },
// // // //         { name: 'Highlights Halfhead', price: '16,000', duration: '2.5h', note: 'Toner not included' },
// // // //         { name: 'Highlights Fullhead', price: '30,000', duration: '3h', note: 'Toner not included' },
// // // //         { name: 'Freehand Highlights', price: 'from 20,000', duration: '3h' },
// // // //         { name: 'Creative Colour', price: 'from 20,000', duration: '3h' },
// // // //         { name: 'Bleaching', price: 'from 20,000', duration: '2h' },
// // // //         { name: 'Toner - Short', price: '8,000', duration: '30 mins' },
// // // //         { name: 'Toner - Medium', price: '12,000', duration: '45 mins' },
// // // //         { name: 'Toner - Long', price: '15,000', duration: '1h' }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 'nails-makeup',
// // // //       title: 'Nails & Makeup',
// // // //       icon: Heart,
// // // //       services: [
// // // //         { name: 'Overlays on natural nails', price: '4,500', duration: '1h 30 mins' },
// // // //         { name: 'Overlays soakoff', price: '1,000', duration: '20-45 mins' },
// // // //         { name: 'Shellac manicure', price: '3,500', duration: '45 mins' },
// // // //         { name: 'Shellac application', price: '2,000', duration: '30 mins' },
// // // //         { name: 'Manicure', price: '2,000', duration: '30 mins' },
// // // //         { name: 'Shellac soakoff', price: '1,000', duration: '15 mins' },
// // // //         { name: 'Pedicure', price: '3,700', duration: '45 mins' },
// // // //         { name: 'Shellac pedicure', price: '4,000', duration: '1-1h 15 mins' },
// // // //         { name: 'Day glam', price: '4,000', duration: '30 mins' },
// // // //         { name: 'Full glam', price: '5,000', duration: '45 mins' },
// // // //         { name: 'Acrylic extension', price: '8,000', duration: '2 hours' },
// // // //         { name: 'Nail art', price: 'from 2,000', duration: '30 mins' },
// // // //         { name: 'Bridal glam', price: 'from 10,000', duration: '1h' }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 'permanent-makeup',
// // // //       title: 'Permanent Makeup',
// // // //       icon: Eye,
// // // //       services: [
// // // //         { name: 'Eyebrows', price: '33,000', duration: '2-3h' },
// // // //         { name: 'Lips', price: '38,000', duration: '2-3h' },
// // // //         { name: 'Eyeliner', price: '27,000', duration: '1-2h' },
// // // //         { name: 'Touch up (in 1 month)', price: '11,000', duration: '1h', note: 'For Permanent Makeup' }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 'eyelash-extensions',
// // // //       title: 'Eyelash Extensions',
// // // //       icon: Sparkles,
// // // //       services: [
// // // //         { name: 'Classic', price: '8,800', duration: '1.5h' },
// // // //         { name: '2D', price: '10,000', duration: '2h' },
// // // //         { name: '3D', price: '11,000', duration: '2h' },
// // // //         { name: '4D', price: '12,000', duration: '2.5h' },
// // // //         { name: '5D', price: '13,000', duration: '2.5h' }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 'lamination',
// // // //       title: 'Lamination & Other Services',
// // // //       icon: Crown,
// // // //       services: [
// // // //         { name: 'Eyebrows Lamination', price: '8,800', duration: '1h' },
// // // //         { name: 'Eyelash Lamination', price: '7,700', duration: '45 mins' },
// // // //         { name: 'Eyebrow tinting and Shaping', price: '5,500', duration: '30 mins' }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 'face-fitness',
// // // //       title: 'Face Fitness',
// // // //       icon: Star,
// // // //       services: [
// // // //         { name: 'Face Cardio', price: '20,000', duration: '1h' },
// // // //         { name: 'Face HIIT', price: '20,000', duration: '1h' },
// // // //         { name: 'Reset Recover', price: '33,000', duration: '1.5h' },
// // // //         { name: 'Face Reformer', price: '45,000', duration: '2h' }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 'addons',
// // // //       title: 'Add-ons',
// // // //       icon: Shield,
// // // //       services: [
// // // //         { name: 'Eye Treatment', price: '7,000', duration: '30 mins' },
// // // //         { name: 'Radio Frequency Partial Face', price: '14,000', duration: '45 mins', note: 'TBC' },
// // // //         { name: 'Radio Frequency Full Face', price: '24,000', duration: '1h', note: 'TBC' },
// // // //         { name: 'Photo Therapy Lights', price: '8,000', duration: '30 mins' },
// // // //         { name: 'Ultrasound Treatment', price: '10,000', duration: '45 mins' },
// // // //         { name: 'Deep Cleansing Facial', price: '9,000', duration: '1h' },
// // // //         { name: 'Buccal', price: '8,000', duration: '30 mins' },
// // // //         { name: 'Head Massage', price: '3,000', duration: '15 mins' },
// // // //         { name: 'Neck & Shoulder', price: '3,000', duration: '15 mins' },
// // // //         { name: 'Oxygen Therapy', price: '12,000', duration: '45 mins' }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 'cosmetology',
// // // //       title: 'Cosmetology/Trichology',
// // // //       icon: Zap,
// // // //       services: [
// // // //         { name: 'Meso Therapy', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'Platelet Rich Plasma', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'Biogenix kit', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'PRP+MESO+DERMA PEN', price: 'TBC', duration: '2h', note: 'Available from Jan 26' }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 'slimming',
// // // //       title: 'Slimming Treatment',
// // // //       icon: Clock,
// // // //       services: [
// // // //         { name: 'Meso Lipo (1ML) - Double Chin', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'Meso Lipo (3ML) - Arms', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'Meso Lipo (5-10ML) - Tummy', price: 'TBC', duration: '1.5h', note: 'Available from Jan 26' },
// // // //         { name: 'Cavitation - Chin Area', price: 'TBC', duration: '45 mins', note: 'Available from Jan 26' },
// // // //         { name: 'Cavitation - Arms Area', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'Cavitation - Tummy Area', price: 'TBC', duration: '1h', note: 'Available from Jan 26' }
// // // //       ]
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen bg-transparent">
// // // //       {/* Hero Section */}
// // // //       <section className="relative py-24 px-6">
// // // //         <div className="container mx-auto max-w-6xl text-center">
// // // //           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
// // // //             <span className="w-2 h-2 rounded-full bg-[#B0C2B0]" />
// // // //             <span className="text-sm tracking-wider text-white font-medium">PRICING</span>
// // // //           </div>
// // // //           <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight">
// // // //             Service
// // // //             <br />
// // // //             <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
// // // //               Pricing
// // // //             </span>
// // // //           </h1>
// // // //           <p className="text-lg text-[#C1B5C6] max-w-2xl mx-auto leading-relaxed font-light">
// // // //             Transparent pricing for all our beauty services. Professional treatments at competitive rates.
// // // //           </p>
// // // //         </div>
// // // //       </section>

// // // //       {/* Pricing Categories */}
// // // //       <section className="py-12 px-6">
// // // //         <div className="container mx-auto max-w-6xl">
// // // //           <div className="space-y-6">
// // // //             {serviceCategories.map((category, index) => (
// // // //               <div
// // // //                 key={category.id}
// // // //                 className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
// // // //               >
// // // //                 <button
// // // //                   onClick={() => toggleSection(category.id)}
// // // //                   className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
// // // //                 >
// // // //                   <div className="flex items-center gap-4">
// // // //                     <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20">
// // // //                       <category.icon className="w-6 h-6 text-[#B0C2B0]" />
// // // //                     </div>
// // // //                     <h2 className="text-2xl font-light text-white">{category.title}</h2>
// // // //                   </div>
// // // //                   {openSections[category.id] ? (
// // // //                     <ChevronUp className="w-6 h-6 text-[#B0C2B0]" />
// // // //                   ) : (
// // // //                     <ChevronDown className="w-6 h-6 text-[#B0C2B0]" />
// // // //                   )}
// // // //                 </button>

// // // //                 {openSections[category.id] && (
// // // //                   <div className="border-t border-white/10 p-6">
// // // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // //                       {category.services.map((service, serviceIndex) => (
// // // //                         <div
// // // //                           key={serviceIndex}
// // // //                           className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
// // // //                         >
// // // //                           <div className="flex justify-between items-start mb-2">
// // // //                             <h3 className="text-white font-medium text-sm">{service.name}</h3>
// // // //                             <span className="text-[#B0C2B0] font-bold text-lg">{service.price}</span>
// // // //                           </div>
// // // //                           <div className="flex justify-between items-center text-xs text-[#C1B5C6]">
// // // //                             <span>{service.duration}</span>
// // // //                             {service.note && (
// // // //                               <span className="text-[#B0C2B0]/70 italic">{service.note}</span>
// // // //                             )}
// // // //                           </div>
// // // //                         </div>
// // // //                       ))}
// // // //                     </div>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* CTA Section */}
// // // //       <section className="py-24 px-6">
// // // //         <div className="container mx-auto max-w-4xl text-center">
// // // //           <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-12">
// // // //             <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
// // // //               Ready to Book?
// // // //             </h2>
// // // //             <p className="text-lg text-[#C1B5C6] mb-8 max-w-2xl mx-auto">
// // // //               Contact us to schedule your appointment or for any questions about our services and pricing.
// // // //             </p>
// // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // // //               <a
// // // //                 href="/contact"
// // // //                 className="bg-[#B0C2B0] hover:bg-[#C1B5C6] text-[#262626] px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
// // // //               >
// // // //                 Book Appointment
// // // //               </a>
// // // //               <a
// // // //                 href="tel:+254116444433"
// // // //                 className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
// // // //               >
// // // //                 Call Now
// // // //               </a>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Pricing;
// // // import React, { useState } from 'react';
// // // import { ChevronDown, ChevronUp, Scissors, Palette, Heart, Eye, Sparkles, Crown, Star, Shield, Zap, Clock } from 'lucide-react';
// // // import IMG from "@/assets/li.png";

// // // interface PricingHeroProps {
// // //   title: string;
// // //   titleGradient?: string;
// // //   description: string;
// // //   image: string;
// // //   imageAlt: string;
// // // }

// // // const PricingHero: React.FC<PricingHeroProps> = ({
// // //   title,
// // //   titleGradient,
// // //   description,
// // //   image,
// // //   imageAlt,
// // // }) => {
// // //   return (
// // //     <section className="relative min-h-screen w-full overflow-hidden">
// // //       {/* Background Image */}
// // //       <div className="absolute inset-0 -z-10">
// // //         <img
// // //           src={image}
// // //           alt={imageAlt}
// // //           className="w-full h-full object-cover"
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
// // //       </div>
// // //       {/* Content */}
// // //       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
// // //         <div className="w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-3xl animate-fade-in">
// // //           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
// // //             <span className="w-2 h-2 rounded-full bg-[#B0C2B0]" />
// // //             <span className="text-sm tracking-wider text-white font-medium">PRICING</span>
// // //           </div>
// // //           <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
// // //             {title}
// // //             {titleGradient && (
// // //               <>
// // //                 <br />
// // //                 <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
// // //                   {titleGradient}
// // //                 </span>
// // //               </>
// // //             )}
// // //           </h1>
// // //           <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
// // //             {description}
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // const Pricing = () => {
// // //   const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

// // //   const toggleSection = (section: string) => {
// // //     setOpenSections(prev => ({
// // //       ...prev,
// // //       [section]: !prev[section]
// // //     }));
// // //   };

// // //   const serviceCategories = [
// // //     {
// // //       id: 'cutting-styling',
// // //       title: 'Cutting & Styling',
// // //       icon: Scissors,
// // //       services: [
// // //         { name: 'Haircut', price: '6,000', duration: '1h' },
// // //         { name: "Men's Haircut", price: '4,500', duration: '45 mins' },
// // //         { name: 'Fringe Cut', price: '2,000', duration: '20 mins' },
// // //         { name: "Kid's Haircut (under 12)", price: '3,000', duration: '30 mins' },
// // //         { name: 'Wash & Blow-Dry', price: '4,000', duration: '45 mins' },
// // //         { name: 'Hair Up (Event Styling)', price: 'from 8,000', duration: '1-2h' }
// // //       ]
// // //     },
// // //     {
// // //       id: 'colour',
// // //       title: 'Colour Services',
// // //       icon: Palette,
// // //       services: [
// // //         { name: 'Full Colour - Short', price: 'from 10,000', duration: '2h' },
// // //         { name: 'Full Colour - Medium', price: 'from 15,000', duration: '2.5h' },
// // //         { name: 'Full Colour - Long', price: 'from 18,000', duration: '3h' },
// // //         { name: 'Highlights T-Section', price: '10,000', duration: '2h', note: 'Toner not included' },
// // //         { name: 'Highlights Halfhead', price: '16,000', duration: '2.5h', note: 'Toner not included' },
// // //         { name: 'Highlights Fullhead', price: '30,000', duration: '3h', note: 'Toner not included' },
// // //         { name: 'Freehand Highlights', price: 'from 20,000', duration: '3h' },
// // //         { name: 'Creative Colour', price: 'from 20,000', duration: '3h' },
// // //         { name: 'Bleaching', price: 'from 20,000', duration: '2h' },
// // //         { name: 'Toner - Short', price: '8,000', duration: '30 mins' },
// // //         { name: 'Toner - Medium', price: '12,000', duration: '45 mins' },
// // //         { name: 'Toner - Long', price: '15,000', duration: '1h' }
// // //       ]
// // //     },
// // //     {
// // //       id: 'nails-makeup',
// // //       title: 'Nails & Makeup',
// // //       icon: Heart,
// // //       services: [
// // //         { name: 'Overlays on natural nails', price: '4,500', duration: '1h 30 mins' },
// // //         { name: 'Overlays soakoff', price: '1,000', duration: '20-45 mins' },
// // //         { name: 'Shellac manicure', price: '3,500', duration: '45 mins' },
// // //         { name: 'Shellac application', price: '2,000', duration: '30 mins' },
// // //         { name: 'Manicure', price: '2,000', duration: '30 mins' },
// // //         { name: 'Shellac soakoff', price: '1,000', duration: '15 mins' },
// // //         { name: 'Pedicure', price: '3,700', duration: '45 mins' },
// // //         { name: 'Shellac pedicure', price: '4,000', duration: '1-1h 15 mins' },
// // //         { name: 'Day glam', price: '4,000', duration: '30 mins' },
// // //         { name: 'Full glam', price: '5,000', duration: '45 mins' },
// // //         { name: 'Acrylic extension', price: '8,000', duration: '2 hours' },
// // //         { name: 'Nail art', price: 'from 2,000', duration: '30 mins' },
// // //         { name: 'Bridal glam', price: 'from 10,000', duration: '1h' }
// // //       ]
// // //     },
// // //     {
// // //       id: 'permanent-makeup',
// // //       title: 'Permanent Makeup',
// // //       icon: Eye,
// // //       services: [
// // //         { name: 'Eyebrows', price: '33,000', duration: '2-3h' },
// // //         { name: 'Lips', price: '38,000', duration: '2-3h' },
// // //         { name: 'Eyeliner', price: '27,000', duration: '1-2h' },
// // //         { name: 'Touch up (in 1 month)', price: '11,000', duration: '1h', note: 'For Permanent Makeup' }
// // //       ]
// // //     },
// // //     {
// // //       id: 'eyelash-extensions',
// // //       title: 'Eyelash Extensions',
// // //       icon: Sparkles,
// // //       services: [
// // //         { name: 'Classic', price: '8,800', duration: '1.5h' },
// // //         { name: '2D', price: '10,000', duration: '2h' },
// // //         { name: '3D', price: '11,000', duration: '2h' },
// // //         { name: '4D', price: '12,000', duration: '2.5h' },
// // //         { name: '5D', price: '13,000', duration: '2.5h' }
// // //       ]
// // //     },
// // //     {
// // //       id: 'lamination',
// // //       title: 'Lamination & Other Services',
// // //       icon: Crown,
// // //       services: [
// // //         { name: 'Eyebrows Lamination', price: '8,800', duration: '1h' },
// // //         { name: 'Eyelash Lamination', price: '7,700', duration: '45 mins' },
// // //         { name: 'Eyebrow tinting and Shaping', price: '5,500', duration: '30 mins' }
// // //       ]
// // //     },
// // //     {
// // //       id: 'face-fitness',
// // //       title: 'Face Fitness',
// // //       icon: Star,
// // //       services: [
// // //         { name: 'Face Cardio', price: '20,000', duration: '1h' },
// // //         { name: 'Face HIIT', price: '20,000', duration: '1h' },
// // //         { name: 'Reset Recover', price: '33,000', duration: '1.5h' },
// // //         { name: 'Face Reformer', price: '45,000', duration: '2h' }
// // //       ]
// // //     },
// // //     {
// // //       id: 'addons',
// // //       title: 'Add-ons',
// // //       icon: Shield,
// // //       services: [
// // //         { name: 'Eye Treatment', price: '7,000', duration: '30 mins' },
// // //         { name: 'Radio Frequency Partial Face', price: '14,000', duration: '45 mins', note: 'TBC' },
// // //         { name: 'Radio Frequency Full Face', price: '24,000', duration: '1h', note: 'TBC' },
// // //         { name: 'Photo Therapy Lights', price: '8,000', duration: '30 mins' },
// // //         { name: 'Ultrasound Treatment', price: '10,000', duration: '45 mins' },
// // //         { name: 'Deep Cleansing Facial', price: '9,000', duration: '1h' },
// // //         { name: 'Buccal', price: '8,000', duration: '30 mins' },
// // //         { name: 'Head Massage', price: '3,000', duration: '15 mins' },
// // //         { name: 'Neck & Shoulder', price: '3,000', duration: '15 mins' },
// // //         { name: 'Oxygen Therapy', price: '12,000', duration: '45 mins' }
// // //       ]
// // //     },
// // //     {
// // //       id: 'cosmetology',
// // //       title: 'Cosmetology/Trichology',
// // //       icon: Zap,
// // //       services: [
// // //         { name: 'Meso Therapy', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// // //         { name: 'Platelet Rich Plasma', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// // //         { name: 'Biogenix kit', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// // //         { name: 'PRP+MESO+DERMA PEN', price: 'TBC', duration: '2h', note: 'Available from Jan 26' }
// // //       ]
// // //     },
// // //     {
// // //       id: 'slimming',
// // //       title: 'Slimming Treatment',
// // //       icon: Clock,
// // //       services: [
// // //         { name: 'Meso Lipo (1ML) - Double Chin', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// // //         { name: 'Meso Lipo (3ML) - Arms', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// // //         { name: 'Meso Lipo (5-10ML) - Tummy', price: 'TBC', duration: '1.5h', note: 'Available from Jan 26' },
// // //         { name: 'Cavitation - Chin Area', price: 'TBC', duration: '45 mins', note: 'Available from Jan 26' },
// // //         { name: 'Cavitation - Arms Area', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// // //         { name: 'Cavitation - Tummy Area', price: 'TBC', duration: '1h', note: 'Available from Jan 26' }
// // //       ]
// // //     }
// // //   ];

// // //   return (
// // //     <>
// // //       <PricingHero
// // //         title="Service"
// // //         titleGradient="Pricing"
// // //         description="Transparent pricing for all our beauty services. Professional treatments at competitive rates."
// // //         image={IMG} // Replace with your actual image import
// // //         imageAlt="Pricing at Avya Beauty"
// // //       />

// // //       {/* Pricing Categories */}
// // //       <section className="py-12 px-6 bg-[#1a1a1a]">
// // //         <div className="container mx-auto max-w-6xl">
// // //           <div className="space-y-6">
// // //             {serviceCategories.map((category) => (
// // //               <div
// // //                 key={category.id}
// // //                 className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
// // //               >
// // //                 <button
// // //                   onClick={() => toggleSection(category.id)}
// // //                   className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
// // //                 >
// // //                   <div className="flex items-center gap-4">
// // //                     <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20">
// // //                       <category.icon className="w-6 h-6 text-[#B0C2B0]" />
// // //                     </div>
// // //                     <h2 className="text-2xl font-light text-white">{category.title}</h2>
// // //                   </div>
// // //                   {openSections[category.id] ? (
// // //                     <ChevronUp className="w-6 h-6 text-[#B0C2B0]" />
// // //                   ) : (
// // //                     <ChevronDown className="w-6 h-6 text-[#B0C2B0]" />
// // //                   )}
// // //                 </button>

// // //                 {openSections[category.id] && (
// // //                   <div className="border-t border-white/10 p-6">
// // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // //                       {category.services.map((service, serviceIndex) => (
// // //                         <div
// // //                           key={serviceIndex}
// // //                           className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
// // //                         >
// // //                           <div className="flex justify-between items-start mb-2">
// // //                             <h3 className="text-white font-medium text-sm">{service.name}</h3>
// // //                             <span className="text-[#B0C2B0] font-bold text-lg">{service.price}</span>
// // //                           </div>
// // //                           <div className="flex justify-between items-center text-xs text-[#C1B5C6]">
// // //                             <span>{service.duration}</span>
// // //                             {service.note && (
// // //                               <span className="text-[#B0C2B0]/70 italic">{service.note}</span>
// // //                             )}
// // //                           </div>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CTA Section */}
// // //       <section className="py-24 px-6 bg-[#1a1a1a]">
// // //         <div className="container mx-auto max-w-4xl text-center">
// // //           <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-12">
// // //             <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
// // //               Ready to Book?
// // //             </h2>
// // //             <p className="text-lg text-[#C1B5C6] mb-8 max-w-2xl mx-auto">
// // //               Contact us to schedule your appointment or for any questions about our services and pricing.
// // //             </p>
// // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // //               <a
// // //                 href="/contact"
// // //                 className="bg-[#B0C2B0] hover:bg-[#C1B5C6] text-[#262626] px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
// // //               >
// // //                 Book Appointment
// // //               </a>
// // //               <a
// // //                 href="tel:+254116444433"
// // //                 className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
// // //               >
// // //                 Call Now
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // };

// // // export default Pricing;

// // import React, { useState } from 'react';
// // import { ChevronDown, ChevronUp, Scissors, Palette, Heart, Eye, Sparkles, Crown, Star, Shield, Zap, Clock } from 'lucide-react';
// // import IMG from "@/assets/li.png";

// // interface PricingHeroProps {
// //   title: string;
// //   titleGradient?: string;
// //   description: string;
// //   image: string;
// //   imageAlt: string;
// // }

// // const PricingHero: React.FC<PricingHeroProps> = ({
// //   title,
// //   titleGradient,
// //   description,
// //   image,
// //   imageAlt,
// // }) => {
// //   return (
// //     <section className="relative min-h-screen w-full overflow-hidden">
// //       {/* Background Image */}
// //       <div className="absolute inset-0 -z-10">
// //         <img
// //           src={image}
// //           alt={imageAlt}
// //           className="w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
// //       </div>
// //       {/* Content */}
// //       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
// //         <div className="w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-3xl animate-fade-in">
// //           {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
// //             <span className="w-2 h-2 rounded-full bg-[#B0C2B0]" />
// //             <span className="text-sm tracking-wider text-white font-medium">PRICING</span>
// //           </div> */}
// //           <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
// //             {title}
// //             {titleGradient && (
// //               <>
// //                 <br />
// //                 <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
// //                   {titleGradient}
// //                 </span>
// //               </>
// //             )}
// //           </h1>
// //           <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
// //             {description}
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const Pricing = () => {
// //   const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

// //   const toggleSection = (section: string) => {
// //     setOpenSections(prev => ({
// //       ...prev,
// //       [section]: !prev[section]
// //     }));
// //   };

// //   const serviceCategories = [
// //     {
// //       id: 'cutting-styling',
// //       title: 'Cutting & Styling',
// //       icon: Scissors,
// //       services: [
// //         { name: 'Haircut', price: 'Ksh 6,000', duration: '1h' },
// //         { name: "Men's Haircut", price: 'Ksh 4,500', duration: '45 mins' },
// //         { name: 'Fringe Cut', price: 'Ksh 2,000', duration: '20 mins' },
// //         { name: "Kid's Haircut (under 12)", price: 'Ksh 3,000', duration: '30 mins' },
// //         { name: 'Wash & Blow-Dry', price: 'Ksh 4,000', duration: '45 mins' },
// //         { name: 'Hair Up (Event Styling)', price: 'from Ksh 8,000', duration: '1-2h' }
// //       ]
// //     },
// //     {
// //       id: 'colour',
// //       title: 'Colour Services',
// //       icon: Palette,
// //       services: [
// //         { name: 'Full Colour - Short', price: 'from Ksh 10,000', duration: '2h' },
// //         { name: 'Full Colour - Medium', price: 'from Ksh 15,000', duration: '2.5h' },
// //         { name: 'Full Colour - Long', price: 'from Ksh 18,000', duration: '3h' },
// //         { name: 'Highlights T-Section', price: 'Ksh 10,000', duration: '2h', note: 'Toner not included' },
// //         { name: 'Highlights Halfhead', price: 'Ksh 16,000', duration: '2.5h', note: 'Toner not included' },
// //         { name: 'Highlights Fullhead', price: 'Ksh 30,000', duration: '3h', note: 'Toner not included' },
// //         { name: 'Freehand Highlights', price: 'from Ksh 20,000', duration: '3h' },
// //         { name: 'Creative Colour', price: 'from Ksh 20,000', duration: '3h' },
// //         { name: 'Bleaching', price: 'from Ksh 20,000', duration: '2h' },
// //         { name: 'Toner - Short', price: 'Ksh 8,000', duration: '30 mins' },
// //         { name: 'Toner - Medium', price: 'Ksh 12,000', duration: '45 mins' },
// //         { name: 'Toner - Long', price: 'Ksh 15,000', duration: '1h' }
// //       ]
// //     },
// //     {
// //       id: 'nails-makeup',
// //       title: 'Nails & Makeup',
// //       icon: Heart,
// //       services: [
// //         { name: 'Overlays on natural nails', price: 'Ksh 4,500', duration: '1h 30 mins' },
// //         { name: 'Overlays soakoff', price: 'Ksh 1,000', duration: '20-45 mins' },
// //         { name: 'Shellac manicure', price: 'Ksh 3,500', duration: '45 mins' },
// //         { name: 'Shellac application', price: 'Ksh 2,000', duration: '30 mins' },
// //         { name: 'Manicure', price: 'Ksh 2,000', duration: '30 mins' },
// //         { name: 'Shellac soakoff', price: 'Ksh 1,000', duration: '15 mins' },
// //         { name: 'Pedicure', price: 'Ksh 3,700', duration: '45 mins' },
// //         { name: 'Shellac pedicure', price: 'Ksh 4,000', duration: '1-1h 15 mins' },
// //         { name: 'Day glam', price: 'Ksh 4,000', duration: '30 mins' },
// //         { name: 'Full glam', price: 'Ksh 5,000', duration: '45 mins' },
// //         { name: 'Acrylic extension', price: 'Ksh 8,000', duration: '2 hours' },
// //         { name: 'Nail art', price: 'from Ksh 2,000', duration: '30 mins' },
// //         { name: 'Bridal glam', price: 'from Ksh 10,000', duration: '1h' }
// //       ]
// //     },
// //     {
// //       id: 'permanent-makeup',
// //       title: 'Permanent Makeup',
// //       icon: Eye,
// //       services: [
// //         { name: 'Eyebrows', price: 'Ksh 33,000', duration: '2-3h' },
// //         { name: 'Lips', price: 'Ksh 38,000', duration: '2-3h' },
// //         { name: 'Eyeliner', price: 'Ksh 27,000', duration: '1-2h' },
// //         { name: 'Touch up (in 1 month)', price: 'Ksh 11,000', duration: '1h', note: 'For Permanent Makeup' }
// //       ]
// //     },
// //     {
// //       id: 'eyelash-extensions',
// //       title: 'Eyelash Extensions',
// //       icon: Sparkles,
// //       services: [
// //         { name: 'Classic', price: 'Ksh 8,800', duration: '1.5h' },
// //         { name: '2D', price: 'Ksh 10,000', duration: '2h' },
// //         { name: '3D', price: 'Ksh 11,000', duration: '2h' },
// //         { name: '4D', price: 'Ksh 12,000', duration: '2.5h' },
// //         { name: '5D', price: 'Ksh 13,000', duration: '2.5h' }
// //       ]
// //     },
// //     {
// //       id: 'lamination',
// //       title: 'Lamination & Other Services',
// //       icon: Crown,
// //       services: [
// //         { name: 'Eyebrows Lamination', price: 'Ksh 8,800', duration: '1h' },
// //         { name: 'Eyelash Lamination', price: 'Ksh 7,700', duration: '45 mins' },
// //         { name: 'Eyebrow tinting and Shaping', price: 'Ksh 5,500', duration: '30 mins' }
// //       ]
// //     },
// //     {
// //       id: 'face-fitness',
// //       title: 'Face Fitness',
// //       icon: Star,
// //       services: [
// //         { name: 'Face Cardio', price: 'Ksh 20,000', duration: '1h' },
// //         { name: 'Face HIIT', price: 'Ksh 20,000', duration: '1h' },
// //         { name: 'Reset Recover', price: 'Ksh 33,000', duration: '1.5h' },
// //         { name: 'Face Reformer', price: 'Ksh 45,000', duration: '2h' }
// //       ]
// //     },
// //     {
// //       id: 'addons',
// //       title: 'Add-ons',
// //       icon: Shield,
// //       services: [
// //         { name: 'Eye Treatment', price: 'Ksh 7,000', duration: '30 mins' },
// //         { name: 'Radio Frequency Partial Face', price: 'Ksh 14,000', duration: '45 mins', note: 'TBC' },
// //         { name: 'Radio Frequency Full Face', price: 'Ksh 24,000', duration: '1h', note: 'TBC' },
// //         { name: 'Photo Therapy Lights', price: 'Ksh 8,000', duration: '30 mins' },
// //         { name: 'Ultrasound Treatment', price: 'Ksh 10,000', duration: '45 mins' },
// //         { name: 'Deep Cleansing Facial', price: 'Ksh 9,000', duration: '1h' },
// //         { name: 'Buccal', price: 'Ksh 8,000', duration: '30 mins' },
// //         { name: 'Head Massage', price: 'Ksh 3,000', duration: '15 mins' },
// //         { name: 'Neck & Shoulder', price: 'Ksh 3,000', duration: '15 mins' },
// //         { name: 'Oxygen Therapy', price: 'Ksh 12,000', duration: '45 mins' }
// //       ]
// //     },
// //     {
// //       id: 'cosmetology',
// //       title: 'Cosmetology/Trichology',
// //       icon: Zap,
// //       services: [
// //         { name: 'Meso Therapy', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// //         { name: 'Platelet Rich Plasma', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// //         { name: 'Biogenix kit', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// //         { name: 'PRP+MESO+DERMA PEN', price: 'TBC', duration: '2h', note: 'Available from Jan 26' }
// //       ]
// //     },
// //     {
// //       id: 'slimming',
// //       title: 'Slimming Treatment',
// //       icon: Clock,
// //       services: [
// //         { name: 'Meso Lipo (1ML) - Double Chin', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// //         { name: 'Meso Lipo (3ML) - Arms', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// //         { name: 'Meso Lipo (5-10ML) - Tummy', price: 'TBC', duration: '1.5h', note: 'Available from Jan 26' },
// //         { name: 'Cavitation - Chin Area', price: 'TBC', duration: '45 mins', note: 'Available from Jan 26' },
// //         { name: 'Cavitation - Arms Area', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
// //         { name: 'Cavitation - Tummy Area', price: 'TBC', duration: '1h', note: 'Available from Jan 26' }
// //       ]
// //     }
// //   ];

// //   return (
// //     <>
// //       <PricingHero
// //         title="Service"
// //         titleGradient="Pricing"
// //         description="Transparent pricing for all our beauty services. Professional treatments at competitive rates."
// //         image={IMG} // Replace with your actual image import
// //         imageAlt="Pricing at Avya Beauty"
// //       />

// //       {/* Pricing Categories */}
// //       <section className="py-12 px-6 bg-[#E2DBDF]">
// //         <div className="container mx-auto max-w-6xl">
// //           <div className="space-y-6">
// //             {serviceCategories.map((category) => (
// //               <div
// //                 key={category.id}
// //                 className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-300"
// //               >
// //                 <button
// //                   onClick={() => toggleSection(category.id)}
// //                   className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
// //                 >
// //                   <div className="flex items-center gap-4">
// //                     <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20">
// //                       <category.icon className="w-6 h-6 text-[#B0C2B0]" />
// //                     </div>
// //                     <h2 className="text-2xl font-light text-gray-800">{category.title}</h2>
// //                   </div>
// //                   {openSections[category.id] ? (
// //                     <ChevronUp className="w-6 h-6 text-[#B0C2B0]" />
// //                   ) : (
// //                     <ChevronDown className="w-6 h-6 text-[#B0C2B0]" />
// //                   )}
// //                 </button>

// //                 {openSections[category.id] && (
// //                   <div className="border-t border-gray-200 p-6">
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                       {category.services.map((service, serviceIndex) => (
// //                         <div
// //                           key={serviceIndex}
// //                           className="p-4 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
// //                         >
// //                           <div className="flex justify-between items-start mb-2">
// //                             <h3 className="text-gray-800 font-medium text-sm">{service.name}</h3>
// //                             <span className="text-[#B0C2B0] font-bold text-lg">{service.price}</span>
// //                           </div>
// //                           <div className="flex justify-between items-center text-xs text-gray-500">
// //                             <span>{service.duration}</span>
// //                             {service.note && (
// //                               <span className="text-[#B0C2B0]/70 italic">{service.note}</span>
// //                             )}
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-24 px-6 bg-[#E2DBDF]">
// //         <div className="container mx-auto max-w-4xl text-center">
// //           <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-12">
// //             <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
// //               Ready to Book?
// //             </h2>
// //             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
// //               Contact us to schedule your appointment or for any questions about our services and pricing.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <a
// //                 href="/contact"
// //                 className="bg-[#B0C2B0] hover:bg-[#C1B5C6] text-gray-800 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
// //               >
// //                 Book Appointment
// //               </a>
// //               <a
// //                 href="tel:+254116444433"
// //                 className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
// //               >
// //                 Call Now
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Pricing;

// import React, { useState } from 'react';
// import {
//   ChevronDown,
//   ChevronUp,
//   Scissors,
//   Palette,
//   Heart,
//   Eye,
//   Sparkles,
//   Crown,
//   Star,
//   Shield,
//   Zap,
//   Clock,
// } from 'lucide-react';
// import IMG from "@/assets/li.png";

// interface PricingHeroProps {
//   title: string;
//   titleGradient?: string;
//   description: string;
//   image: string;
//   imageAlt: string;
// }

// const PricingHero: React.FC<PricingHeroProps> = ({
//   title,
//   titleGradient,
//   description,
//   image,
//   imageAlt,
// }) => {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <img
//           src={image}
//           alt={imageAlt}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
//       </div>
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
//         <div className="w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-3xl animate-fade-in">
//           <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
//             {title}
//             {titleGradient && (
//               <>
//                 <br />
//                 <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
//                   {titleGradient}
//                 </span>
//               </>
//             )}
//           </h1>
//           <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
//             {description}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Pricing = () => {
//   const [openSection, setOpenSection] = useState<string | null>(null);

//   const toggleSection = (section: string) => {
//     setOpenSection(prev => prev === section ? null : section);
//   };

//   const serviceCategories = [
//     {
//       id: 'cutting-styling',
//       title: 'Cutting & Styling',
//       icon: Scissors,
//       services: [
//         { name: 'Haircut', price: 'Ksh 6,000', duration: '1h' },
//         { name: "Men's Haircut", price: 'Ksh 4,500', duration: '45 mins' },
//         { name: 'Fringe Cut', price: 'Ksh 2,000', duration: '20 mins' },
//         { name: "Kid's Haircut (under 12)", price: 'Ksh 3,000', duration: '30 mins' },
//         { name: 'Wash & Blow-Dry', price: 'Ksh 4,000', duration: '45 mins' },
//         { name: 'Hair Up (Event Styling)', price: 'from Ksh 8,000', duration: '1-2h' },
//       ],
//     },
//     {
//       id: 'colour',
//       title: 'Colour Services',
//       icon: Palette,
//       services: [
//         { name: 'Full Colour - Short', price: 'from Ksh 10,000', duration: '2h' },
//         { name: 'Full Colour - Medium', price: 'from Ksh 15,000', duration: '2.5h' },
//         { name: 'Full Colour - Long', price: 'from Ksh 18,000', duration: '3h' },
//         { name: 'Highlights T-Section', price: 'Ksh 10,000', duration: '2h', note: 'Toner not included' },
//         { name: 'Highlights Halfhead', price: 'Ksh 16,000', duration: '2.5h', note: 'Toner not included' },
//         { name: 'Highlights Fullhead', price: 'Ksh 30,000', duration: '3h', note: 'Toner not included' },
//         { name: 'Freehand Highlights', price: 'from Ksh 20,000', duration: '3h' },
//         { name: 'Creative Colour', price: 'from Ksh 20,000', duration: '3h' },
//         { name: 'Bleaching', price: 'from Ksh 20,000', duration: '2h' },
//         { name: 'Toner - Short', price: 'Ksh 8,000', duration: '30 mins' },
//         { name: 'Toner - Medium', price: 'Ksh 12,000', duration: '45 mins' },
//         { name: 'Toner - Long', price: 'Ksh 15,000', duration: '1h' },
//       ],
//     },
//     {
//       id: 'nails-makeup',
//       title: 'Nails & Makeup',
//       icon: Heart,
//       services: [
//         { name: 'Overlays on natural nails', price: 'Ksh 4,500', duration: '1h 30 mins' },
//         { name: 'Overlays soakoff', price: 'Ksh 1,000', duration: '20-45 mins' },
//         { name: 'Shellac manicure', price: 'Ksh 3,500', duration: '45 mins' },
//         { name: 'Shellac application', price: 'Ksh 2,000', duration: '30 mins' },
//         { name: 'Manicure', price: 'Ksh 2,000', duration: '30 mins' },
//         { name: 'Shellac soakoff', price: 'Ksh 1,000', duration: '15 mins' },
//         { name: 'Pedicure', price: 'Ksh 3,700', duration: '45 mins' },
//         { name: 'Shellac pedicure', price: 'Ksh 4,000', duration: '1-1h 15 mins' },
//         { name: 'Day glam', price: 'Ksh 4,000', duration: '30 mins' },
//         { name: 'Full glam', price: 'Ksh 5,000', duration: '45 mins' },
//         { name: 'Acrylic extension', price: 'Ksh 8,000', duration: '2 hours' },
//         { name: 'Nail art', price: 'from Ksh 2,000', duration: '30 mins' },
//         { name: 'Bridal glam', price: 'from Ksh 10,000', duration: '1h' },
//       ],
//     },
//     {
//       id: 'permanent-makeup',
//       title: 'Permanent Makeup',
//       icon: Eye,
//       services: [
//         { name: 'Eyebrows', price: 'Ksh 33,000', duration: '2-3h' },
//         { name: 'Lips', price: 'Ksh 38,000', duration: '2-3h' },
//         { name: 'Eyeliner', price: 'Ksh 27,000', duration: '1-2h' },
//         { name: 'Touch up (in 1 month)', price: 'Ksh 11,000', duration: '1h', note: 'For Permanent Makeup' },
//       ],
//     },
//     {
//       id: 'eyelash-extensions',
//       title: 'Eyelash Extensions',
//       icon: Sparkles,
//       services: [
//         { name: 'Classic', price: 'Ksh 8,800', duration: '1.5h' },
//         { name: '2D', price: 'Ksh 10,000', duration: '2h' },
//         { name: '3D', price: 'Ksh 11,000', duration: '2h' },
//         { name: '4D', price: 'Ksh 12,000', duration: '2.5h' },
//         { name: '5D', price: 'Ksh 13,000', duration: '2.5h' },
//       ],
//     },
//     {
//       id: 'lamination',
//       title: 'Lamination & Other Services',
//       icon: Crown,
//       services: [
//         { name: 'Eyebrows Lamination', price: 'Ksh 8,800', duration: '1h' },
//         { name: 'Eyelash Lamination', price: 'Ksh 7,700', duration: '45 mins' },
//         { name: 'Eyebrow tinting and Shaping', price: 'Ksh 5,500', duration: '30 mins' },
//       ],
//     },
//     {
//       id: 'face-fitness',
//       title: 'Face Fitness',
//       icon: Star,
//       services: [
//         { name: 'Face Cardio', price: 'Ksh 20,000', duration: '1h' },
//         { name: 'Face HIIT', price: 'Ksh 20,000', duration: '1h' },
//         { name: 'Reset Recover', price: 'Ksh 33,000', duration: '1.5h' },
//         { name: 'Face Reformer', price: 'Ksh 45,000', duration: '2h' },
//       ],
//     },
//     {
//       id: 'addons',
//       title: 'Add-ons',
//       icon: Shield,
//       services: [
//         { name: 'Eye Treatment', price: 'Ksh 7,000', duration: '30 mins' },
//         { name: 'Radio Frequency Partial Face', price: 'Ksh 14,000', duration: '45 mins', note: 'TBC' },
//         { name: 'Radio Frequency Full Face', price: 'Ksh 24,000', duration: '1h', note: 'TBC' },
//         { name: 'Photo Therapy Lights', price: 'Ksh 8,000', duration: '30 mins' },
//         { name: 'Ultrasound Treatment', price: 'Ksh 10,000', duration: '45 mins' },
//         { name: 'Deep Cleansing Facial', price: 'Ksh 9,000', duration: '1h' },
//         { name: 'Buccal', price: 'Ksh 8,000', duration: '30 mins' },
//         { name: 'Head Massage', price: 'Ksh 3,000', duration: '15 mins' },
//         { name: 'Neck & Shoulder', price: 'Ksh 3,000', duration: '15 mins' },
//         { name: 'Oxygen Therapy', price: 'Ksh 12,000', duration: '45 mins' },
//       ],
//     },
//     {
//       id: 'cosmetology',
//       title: 'Cosmetology/Trichology',
//       icon: Zap,
//       services: [
//         { name: 'Meso Therapy', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
//         { name: 'Platelet Rich Plasma', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
//         { name: 'Biogenix kit', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
//         { name: 'PRP+MESO+DERMA PEN', price: 'TBC', duration: '2h', note: 'Available from Jan 26' },
//       ],
//     },
//     {
//       id: 'slimming',
//       title: 'Slimming Treatment',
//       icon: Clock,
//       services: [
//         { name: 'Meso Lipo (1ML) - Double Chin', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
//         { name: 'Meso Lipo (3ML) - Arms', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
//         { name: 'Meso Lipo (5-10ML) - Tummy', price: 'TBC', duration: '1.5h', note: 'Available from Jan 26' },
//         { name: 'Cavitation - Chin Area', price: 'TBC', duration: '45 mins', note: 'Available from Jan 26' },
//         { name: 'Cavitation - Arms Area', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
//         { name: 'Cavitation - Tummy Area', price: 'TBC', duration: '1h', note: 'Available from Jan 26' },
//       ],
//     },
//   ];

//   return (
//     <>
//       <PricingHero
//         title="Service"
//         titleGradient="Pricing"
//         description="Transparent pricing for all our beauty services. Professional treatments at competitive rates."
//         image={IMG}
//         imageAlt="Pricing at Avya Beauty"
//       />
//       <section className="py-12 px-6 bg-[#E2DBDF]">
//         <div className="container mx-auto max-w-6xl">
//           <div className="space-y-6">
//             {serviceCategories.map((category) => (
//               <div
//                 key={category.id}
//                 className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-300"
//               >
//                 <button
//                   onClick={() => toggleSection(category.id)}
//                   className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20">
//                       <category.icon className="w-6 h-6 text-[#B0C2B0]" />
//                     </div>
//                     <h2 className="text-2xl font-light text-gray-800">{category.title}</h2>
//                   </div>
//                   {openSection === category.id ? (
//                     <ChevronUp className="w-6 h-6 text-[#B0C2B0]" />
//                   ) : (
//                     <ChevronDown className="w-6 h-6 text-[#B0C2B0]" />
//                   )}
//                 </button>
//                 {openSection === category.id && (
//                   <div className="border-t border-gray-200 p-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {category.services.map((service, serviceIndex) => (
//                         <div
//                           key={serviceIndex}
//                           className="p-4 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
//                         >
//                           <div className="flex justify-between items-start mb-2">
//                             <h3 className="text-gray-800 font-medium text-sm">{service.name}</h3>
//                             <span className="text-[#B0C2B0] font-bold text-lg">{service.price}</span>
//                           </div>
//                           <div className="flex justify-between items-center text-xs text-gray-500">
//                             <span>{service.duration}</span>
//                             {service.note && (
//                               <span className="text-[#B0C2B0]/70 italic">{service.note}</span>
//                             )}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="py-24 px-6 bg-[#E2DBDF]">
//         <div className="container mx-auto max-w-4xl text-center">
//           <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-12">
//             <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
//               Ready to Book?
//             </h2>
//             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//               Contact us to schedule your appointment or for any questions about our services and pricing.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="/contact"
//                 className="bg-[#B0C2B0] hover:bg-[#C1B5C6] text-gray-800 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
//               >
//                 Book Appointment
//               </a>
//               <a
//                 href="tel:+254116444433"
//                 className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
//               >
//                 Call Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Pricing;
import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Scissors,
  Palette,
  Heart,
  Eye,
  Sparkles,
  Crown,
  Star,
  Shield,
  Zap,
  Clock,
} from 'lucide-react';
import IMG from "@/assets/li.png";

interface PricingHeroProps {
  title: string;
  titleGradient?: string;
  description: string;
  image: string;
  imageAlt: string;
}

const PricingHero: React.FC<PricingHeroProps> = ({
  title,
  titleGradient,
  description,
  image,
  imageAlt,
}) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
        <div className="w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
            {title}
            {titleGradient && (
              <>
                <br />
                <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
                  {titleGradient}
                </span>
              </>
            )}
          </h1>
          <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(prev => prev === section ? null : section);
  };

  const serviceCategories = [
    {
      id: 'cutting-styling',
      title: 'Cutting & Styling',
      icon: Scissors,
      services: [
        { name: 'Haircut', price: 'Ksh 6,000', duration: '1h' },
        { name: "Men's Haircut", price: 'Ksh 4,500', duration: '45 mins' },
        { name: 'Fringe Cut', price: 'Ksh 2,000', duration: '20 mins' },
        { name: "Kid's Haircut (under 12)", price: 'Ksh 3,000', duration: '30 mins' },
        { name: 'Wash & Blow-Dry', price: 'Ksh 4,000', duration: '45 mins' },
        { name: 'Hair Up (Event Styling)', price: 'from Ksh 8,000', duration: '1-2h' },
      ],
    },
    {
      id: 'colour',
      title: 'Colour Services',
      icon: Palette,
      services: [
        { name: 'Full Colour - Short', price: 'from Ksh 10,000', duration: '2h' },
        { name: 'Full Colour - Medium', price: 'from Ksh 15,000', duration: '2.5h' },
        { name: 'Full Colour - Long', price: 'from Ksh 18,000', duration: '3h' },
        { name: 'Highlights T-Section', price: 'Ksh 10,000', duration: '2h', note: 'Toner not included' },
        { name: 'Highlights Halfhead', price: 'Ksh 16,000', duration: '2.5h', note: 'Toner not included' },
        { name: 'Highlights Fullhead', price: 'Ksh 30,000', duration: '3h', note: 'Toner not included' },
        { name: 'Freehand Highlights', price: 'from Ksh 20,000', duration: '3h' },
        { name: 'Creative Colour', price: 'from Ksh 20,000', duration: '3h' },
        { name: 'Bleaching', price: 'from Ksh 20,000', duration: '2h' },
        { name: 'Toner - Short', price: 'Ksh 8,000', duration: '30 mins' },
        { name: 'Toner - Medium', price: 'Ksh 12,000', duration: '45 mins' },
        { name: 'Toner - Long', price: 'Ksh 15,000', duration: '1h' },
      ],
    },
    {
      id: 'nails-makeup',
      title: 'Nails & Makeup',
      icon: Heart,
      services: [
        { name: 'Overlays on natural nails', price: 'Ksh 4,500', duration: '1h 30 mins' },
        { name: 'Overlays soakoff', price: 'Ksh 1,000', duration: '20-45 mins' },
        { name: 'Shellac manicure', price: 'Ksh 3,500', duration: '45 mins' },
        { name: 'Shellac application', price: 'Ksh 2,000', duration: '30 mins' },
        { name: 'Manicure', price: 'Ksh 2,000', duration: '30 mins' },
        { name: 'Shellac soakoff', price: 'Ksh 1,000', duration: '15 mins' },
        { name: 'Pedicure', price: 'Ksh 3,700', duration: '45 mins' },
        { name: 'Shellac pedicure', price: 'Ksh 4,000', duration: '1-1h 15 mins' },
        { name: 'Day glam', price: 'Ksh 4,000', duration: '30 mins' },
        { name: 'Full glam', price: 'Ksh 5,000', duration: '45 mins' },
        { name: 'Acrylic extension', price: 'Ksh 8,000', duration: '2 hours' },
        { name: 'Nail art', price: 'from Ksh 2,000', duration: '30 mins' },
        { name: 'Bridal glam', price: 'from Ksh 10,000', duration: '1h' },
      ],
    },
    {
      id: 'permanent-makeup',
      title: 'Permanent Makeup',
      icon: Eye,
      services: [
        { name: 'Eyebrows', price: 'Ksh 33,000', duration: '2-3h' },
        { name: 'Lips', price: 'Ksh 38,000', duration: '2-3h' },
        { name: 'Eyeliner', price: 'Ksh 27,000', duration: '1-2h' },
        { name: 'Touch up (in 1 month)', price: 'Ksh 11,000', duration: '1h', note: 'For Permanent Makeup' },
      ],
    },
    {
      id: 'eyelash-extensions',
      title: 'Eyelash Extensions',
      icon: Sparkles,
      services: [
        { name: 'Classic', price: 'Ksh 8,800', duration: '1.5h' },
        { name: '2D', price: 'Ksh 10,000', duration: '2h' },
        { name: '3D', price: 'Ksh 11,000', duration: '2h' },
        { name: '4D', price: 'Ksh 12,000', duration: '2.5h' },
        { name: '5D', price: 'Ksh 13,000', duration: '2.5h' },
      ],
    },
    {
      id: 'lamination',
      title: 'Lamination & Other Services',
      icon: Crown,
      services: [
        { name: 'Eyebrows Lamination', price: 'Ksh 8,800', duration: '1h' },
        { name: 'Eyelash Lamination', price: 'Ksh 7,700', duration: '45 mins' },
        { name: 'Eyebrow tinting and Shaping', price: 'Ksh 5,500', duration: '30 mins' },
      ],
    },
    {
      id: 'face-fitness',
      title: 'Face Fitness',
      icon: Star,
      services: [
        { name: 'Face Cardio', price: 'Ksh 20,000', duration: '1h' },
        { name: 'Face HIIT', price: 'Ksh 20,000', duration: '1h' },
        { name: 'Reset Recover', price: 'Ksh 33,000', duration: '1.5h' },
        { name: 'Face Reformer', price: 'Ksh 45,000', duration: '2h' },
      ],
    },
    {
      id: 'addons',
      title: 'Add-ons',
      icon: Shield,
      services: [
        { name: 'Eye Treatment', price: 'Ksh 7,000', duration: '30 mins' },
        { name: 'Radio Frequency Partial Face', price: 'Ksh 14,000', duration: '45 mins', note: 'Available from Jan 26' },
        { name: 'Radio Frequency Full Face', price: 'Ksh 24,000', duration: '1h', note: 'Available from Jan 26' },
        { name: 'Photo Therapy Lights', price: 'Ksh 8,000', duration: '30 mins' },
        { name: 'Ultrasound Treatment', price: 'Ksh 10,000', duration: '45 mins' },
        { name: 'Deep Cleansing Facial', price: 'Ksh 9,000', duration: '1h' },
        { name: 'Buccal', price: 'Ksh 8,000', duration: '30 mins' },
        { name: 'Head Massage', price: 'Ksh 3,000', duration: '15 mins' },
        { name: 'Neck & Shoulder', price: 'Ksh 3,000', duration: '15 mins' },
        { name: 'Oxygen Therapy', price: 'Ksh 12,000', duration: '45 mins' },
      ],
    },
    {
      id: 'cosmetology',
      title: 'Cosmetology/Trichology',
      icon: Zap,
      services: [
        { name: 'Meso Therapy', price: '', duration: '1h', note: 'Available from Jan 26' },
        { name: 'Platelet Rich Plasma', price: '', duration: '1h', note: 'Available from Jan 26' },
        { name: 'Biogenix kit', price: '', duration: '1h', note: 'Available from Jan 26' },
        { name: 'PRP+MESO+DERMA PEN', price: '', duration: '2h', note: 'Available from Jan 26' },
      ],
    },
    {
      id: 'slimming',
      title: 'Slimming Treatment',
      icon: Clock,
      services: [
        { name: 'Meso Lipo (1ML) - Double Chin', price: '', duration: '1h', note: 'Available from Jan 26' },
        { name: 'Meso Lipo (3ML) - Arms', price: '', duration: '1h', note: 'Available from Jan 26' },
        { name: 'Meso Lipo (5-10ML) - Tummy', price: '', duration: '1.5h', note: 'Available from Jan 26' },
        { name: 'Cavitation - Chin Area', price: '', duration: '45 mins', note: 'Available from Jan 26' },
        { name: 'Cavitation - Arms Area', price: '', duration: '1h', note: 'Available from Jan 26' },
        { name: 'Cavitation - Tummy Area', price: '', duration: '1h', note: 'Available from Jan 26' },
      ],
    },
  ];

  return (
    <>
      <PricingHero
        title="Service"
        titleGradient="Pricing"
        description="Transparent pricing for all our beauty services. Professional treatments at competitive rates."
        image={IMG}
        imageAlt="Pricing at Avya Beauty"
      />
      <section className="py-12 px-6 bg-[#E2DBDF]">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-300"
              >
                <button
                  onClick={() => toggleSection(category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20">
                      <category.icon className="w-6 h-6 text-[#B0C2B0]" />
                    </div>
                    <h2 className="text-2xl font-light text-gray-800">{category.title}</h2>
                  </div>
                  {openSection === category.id ? (
                    <ChevronUp className="w-6 h-6 text-[#B0C2B0]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#B0C2B0]" />
                  )}
                </button>
                {openSection === category.id && (
                  <div className="border-t border-gray-200 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="p-4 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-gray-800 font-medium text-sm">{service.name}</h3>
                            <span className="text-[#B0C2B0] font-bold text-lg">{service.price}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-gray-500">
                            <span>{service.duration}</span>
                            {service.note && (
                              <span className="text-[#B0C2B0] font-bold text-sm">{service.note}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-[#E2DBDF]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Ready to Book?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to schedule your appointment or for any questions about our services and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#B0C2B0] hover:bg-[#C1B5C6] text-gray-800 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Book Appointment
              </a>
              <a
                href="tel:+254116444433"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
