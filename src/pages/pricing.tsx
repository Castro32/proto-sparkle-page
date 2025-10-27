// // // // import React, { useState } from 'react';
// // // // import {
// // // //   ChevronDown,
// // // //   ChevronUp,
// // // //   Scissors,
// // // //   Palette,
// // // //   Heart,
// // // //   Eye,
// // // //   Sparkles,
// // // //   Crown,
// // // //   Star,
// // // //   Shield,
// // // //   Zap,
// // // //   Clock,
// // // // } from 'lucide-react';
// // // // import IMG from "@/assets/li.png";

// // // // interface PricingHeroProps {
// // // //   title: string;
// // // //   titleGradient?: string;
// // // //   description: string;
// // // //   image: string;
// // // //   imageAlt: string;
// // // // }

// // // // const PricingHero: React.FC<PricingHeroProps> = ({
// // // //   title,
// // // //   titleGradient,
// // // //   description,
// // // //   image,
// // // //   imageAlt,
// // // // }) => {
// // // //   return (
// // // //     <section className="relative min-h-screen w-full overflow-hidden">
// // // //       <div className="absolute inset-0 -z-10">
// // // //         <img
// // // //           src={image}
// // // //           alt={imageAlt}
// // // //           className="w-full h-full object-cover"
// // // //         />
// // // //         <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
// // // //       </div>
// // // //       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
// // // //         <div className="w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-3xl animate-fade-in">
// // // //           <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
// // // //             {title}
// // // //             {titleGradient && (
// // // //               <>
// // // //                 <br />
// // // //                 <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
// // // //                   {titleGradient}
// // // //                 </span>
// // // //               </>
// // // //             )}
// // // //           </h1>
// // // //           <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
// // // //             {description}
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // const Pricing = () => {
// // // //   const [openSection, setOpenSection] = useState<string | null>(null);

// // // //   const toggleSection = (section: string) => {
// // // //     setOpenSection(prev => prev === section ? null : section);
// // // //   };

// // // //   const serviceCategories = [
// // // //     {
// // // //       id: 'cutting-styling',
// // // //       title: 'Cutting & Styling',
// // // //       icon: Scissors,
// // // //       services: [
// // // //         { name: 'Haircut', price: 'Ksh 6,000', duration: '1h' },
// // // //         { name: "Men's Haircut", price: 'Ksh 4,500', duration: '45 mins' },
// // // //         { name: 'Fringe Cut', price: 'Ksh 2,000', duration: '20 mins' },
// // // //         { name: "Kid's Haircut (under 12)", price: 'Ksh 3,000', duration: '30 mins' },
// // // //         { name: 'Wash & Blow-Dry', price: 'Ksh 4,000', duration: '45 mins' },
// // // //         { name: 'Hair Up (Event Styling)', price: 'from Ksh 8,000', duration: '1-2h' },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: 'colour',
// // // //       title: 'Colour Services',
// // // //       icon: Palette,
// // // //       services: [
// // // //         { name: 'Full Colour - Short', price: 'from Ksh 10,000', duration: '2h' },
// // // //         { name: 'Full Colour - Medium', price: 'from Ksh 15,000', duration: '2.5h' },
// // // //         { name: 'Full Colour - Long', price: 'from Ksh 18,000', duration: '3h' },
// // // //         { name: 'Highlights T-Section', price: 'Ksh 10,000', duration: '2h', note: 'Toner not included' },
// // // //         { name: 'Highlights Halfhead', price: 'Ksh 16,000', duration: '2.5h', note: 'Toner not included' },
// // // //         { name: 'Highlights Fullhead', price: 'Ksh 30,000', duration: '3h', note: 'Toner not included' },
// // // //         { name: 'Freehand Highlights', price: 'from Ksh 20,000', duration: '3h' },
// // // //         { name: 'Creative Colour', price: 'from Ksh 20,000', duration: '3h' },
// // // //         { name: 'Bleaching', price: 'from Ksh 20,000', duration: '2h' },
// // // //         { name: 'Toner - Short', price: 'Ksh 8,000', duration: '30 mins' },
// // // //         { name: 'Toner - Medium', price: 'Ksh 12,000', duration: '45 mins' },
// // // //         { name: 'Toner - Long', price: 'Ksh 15,000', duration: '1h' },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: 'nails-makeup',
// // // //       title: 'Nails & Makeup',
// // // //       icon: Heart,
// // // //       services: [
// // // //         { name: 'Overlays on natural nails', price: 'Ksh 4,500', duration: '1h 30 mins' },
// // // //         { name: 'Overlays soakoff', price: 'Ksh 1,000', duration: '20-45 mins' },
// // // //         { name: 'Shellac manicure', price: 'Ksh 3,500', duration: '45 mins' },
// // // //         { name: 'Shellac application', price: 'Ksh 2,000', duration: '30 mins' },
// // // //         { name: 'Manicure', price: 'Ksh 2,000', duration: '30 mins' },
// // // //         { name: 'Shellac soakoff', price: 'Ksh 1,000', duration: '15 mins' },
// // // //         { name: 'Pedicure', price: 'Ksh 3,700', duration: '45 mins' },
// // // //         { name: 'Shellac pedicure', price: 'Ksh 4,000', duration: '1-1h 15 mins' },
// // // //         { name: 'Day glam', price: 'Ksh 4,000', duration: '30 mins' },
// // // //         { name: 'Full glam', price: 'Ksh 5,000', duration: '45 mins' },
// // // //         { name: 'Acrylic extension', price: 'Ksh 8,000', duration: '2 hours' },
// // // //         { name: 'Nail art', price: 'from Ksh 2,000', duration: '30 mins' },
// // // //         { name: 'Bridal glam', price: 'from Ksh 10,000', duration: '1h' },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: 'permanent-makeup',
// // // //       title: 'Permanent Makeup',
// // // //       icon: Eye,
// // // //       services: [
// // // //         { name: 'Eyebrows', price: 'Ksh 33,000', duration: '2-3h' },
// // // //         { name: 'Lips', price: 'Ksh 38,000', duration: '2-3h' },
// // // //         { name: 'Eyeliner', price: 'Ksh 27,000', duration: '1-2h' },
// // // //         { name: 'Touch up (in 1 month)', price: 'Ksh 11,000', duration: '1h', note: 'For Permanent Makeup' },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: 'eyelash-extensions',
// // // //       title: 'Eyelash Extensions',
// // // //       icon: Sparkles,
// // // //       services: [
// // // //         { name: 'Classic', price: 'Ksh 8,800', duration: '1.5h' },
// // // //         { name: '2D', price: 'Ksh 10,000', duration: '2h' },
// // // //         { name: '3D', price: 'Ksh 11,000', duration: '2h' },
// // // //         { name: '4D', price: 'Ksh 12,000', duration: '2.5h' },
// // // //         { name: '5D', price: 'Ksh 13,000', duration: '2.5h' },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: 'lamination',
// // // //       title: 'Lamination & Other Services',
// // // //       icon: Crown,
// // // //       services: [
// // // //         { name: 'Eyebrows Lamination', price: 'Ksh 8,800', duration: '1h' },
// // // //         { name: 'Eyelash Lamination', price: 'Ksh 7,700', duration: '45 mins' },
// // // //         { name: 'Eyebrow tinting and Shaping', price: 'Ksh 5,500', duration: '30 mins' },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: 'face-fitness',
// // // //       title: 'Face Fitness',
// // // //       icon: Star,
// // // //       services: [
// // // //         { name: 'Face Cardio', price: 'Ksh 20,000', duration: '1h' },
// // // //         { name: 'Face HIIT', price: 'Ksh 20,000', duration: '1h' },
// // // //         { name: 'Reset Recover', price: 'Ksh 33,000', duration: '1.5h' },
// // // //         { name: 'Face Reformer', price: 'Ksh 45,000', duration: '2h' },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: 'addons',
// // // //       title: 'Add-ons',
// // // //       icon: Shield,
// // // //       services: [
// // // //         { name: 'Eye Treatment', price: 'Ksh 7,000', duration: '30 mins' },
// // // //         { name: 'Radio Frequency Partial Face', price: 'Ksh 14,000', duration: '45 mins', note: 'Available from Jan 26' },
// // // //         { name: 'Radio Frequency Full Face', price: 'Ksh 24,000', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'Photo Therapy Lights', price: 'Ksh 8,000', duration: '30 mins' },
// // // //         { name: 'Ultrasound Treatment', price: 'Ksh 10,000', duration: '45 mins' },
// // // //         { name: 'Deep Cleansing Facial', price: 'Ksh 9,000', duration: '1h' },
// // // //         { name: 'Buccal', price: 'Ksh 8,000', duration: '30 mins' },
// // // //         { name: 'Head Massage', price: 'Ksh 3,000', duration: '15 mins' },
// // // //         { name: 'Neck & Shoulder', price: 'Ksh 3,000', duration: '15 mins' },
// // // //         { name: 'Oxygen Therapy', price: 'Ksh 12,000', duration: '45 mins' },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: 'cosmetology',
// // // //       title: 'Cosmetology/Trichology',
// // // //       icon: Zap,
// // // //       services: [
// // // //         { name: 'Meso Therapy', price: '', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'Platelet Rich Plasma', price: '', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'Biogenix kit', price: '', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'PRP+MESO+DERMA PEN', price: '', duration: '2h', note: 'Available from Jan 26' },
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: 'slimming',
// // // //       title: 'Slimming Treatment',
// // // //       icon: Clock,
// // // //       services: [
// // // //         { name: 'Meso Lipo (1ML) - Double Chin', price: '', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'Meso Lipo (3ML) - Arms', price: '', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'Meso Lipo (5-10ML) - Tummy', price: '', duration: '1.5h', note: 'Available from Jan 26' },
// // // //         { name: 'Cavitation - Chin Area', price: '', duration: '45 mins', note: 'Available from Jan 26' },
// // // //         { name: 'Cavitation - Arms Area', price: '', duration: '1h', note: 'Available from Jan 26' },
// // // //         { name: 'Cavitation - Tummy Area', price: '', duration: '1h', note: 'Available from Jan 26' },
// // // //       ],
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       <PricingHero
// // // //         title="Service"
// // // //         titleGradient="Pricing"
// // // //         description="Transparent pricing for all our beauty services. Professional treatments at competitive rates."
// // // //         image={IMG}
// // // //         imageAlt="Pricing at Avya Beauty"
// // // //       />
// // // //       <section className="py-12 px-6 bg-[#E2DBDF]">
// // // //         <div className="container mx-auto max-w-6xl">
// // // //           <div className="space-y-6">
// // // //             {serviceCategories.map((category) => (
// // // //               <div
// // // //                 key={category.id}
// // // //                 className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-300"
// // // //               >
// // // //                 <button
// // // //                   onClick={() => toggleSection(category.id)}
// // // //                   className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
// // // //                 >
// // // //                   <div className="flex items-center gap-4">
// // // //                     <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20">
// // // //                       <category.icon className="w-6 h-6 text-[#B0C2B0]" />
// // // //                     </div>
// // // //                     <h2 className="text-2xl font-light text-gray-800">{category.title}</h2>
// // // //                   </div>
// // // //                   {openSection === category.id ? (
// // // //                     <ChevronUp className="w-6 h-6 text-[#B0C2B0]" />
// // // //                   ) : (
// // // //                     <ChevronDown className="w-6 h-6 text-[#B0C2B0]" />
// // // //                   )}
// // // //                 </button>
// // // //                 {openSection === category.id && (
// // // //                   <div className="border-t border-gray-200 p-6">
// // // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // //                       {category.services.map((service, serviceIndex) => (
// // // //                         <div
// // // //                           key={serviceIndex}
// // // //                           className="p-4 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
// // // //                         >
// // // //                           <div className="flex justify-between items-start mb-2">
// // // //                             <h3 className="text-gray-800 font-medium text-sm">{service.name}</h3>
// // // //                             <span className="text-[#B0C2B0] font-bold text-lg">{service.price}</span>
// // // //                           </div>
// // // //                           <div className="flex justify-between items-center text-xs text-gray-500">
// // // //                             <span>{service.duration}</span>
// // // //                             {service.note && (
// // // //                               <span className="text-[#B0C2B0] font-bold text-sm">{service.note}</span>
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
// // // //       <section className="py-24 px-6 bg-[#E2DBDF]">
// // // //         <div className="container mx-auto max-w-4xl text-center">
// // // //           <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-12">
// // // //             <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
// // // //               Ready to Book?
// // // //             </h2>
// // // //             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
// // // //               Contact us to schedule your appointment or for any questions about our services and pricing.
// // // //             </p>
// // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // // //               <a
// // // //                 href="/contact"
// // // //                 className="bg-[#262626] hover:bg-[#595959] text-[#E2DBDF] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
// // // //               >
// // // //                 Book Appointment
// // // //               </a>
              
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Pricing;
// import React, { useState } from 'react';
// import {
//   Scissors, Palette, Heart, Eye, Sparkles, Crown, Star, Shield, Zap, Droplets, Activity, AlertCircle
// } from 'lucide-react';

// const PricingHero = ({ title, titleGradient, description, image, imageAlt }) => {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <img
//           src={image}
//           alt={imageAlt}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-[#595959]/30" />
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
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const serviceCategories = [
//     {
//       id: 'cutting-styling',
//       title: 'Cutting & Styling',
//       icon: Scissors,
//       description: 'Please allow a full hour for all our cutting and styling appointments so that we have sufficient time to understand your needs and you can relax with complimentary drinks from our salon bar.',
//       services: [
//         { name: 'Haircut', price: 'Ksh 6,000' },
//         { name: "Men's Haircut", price: 'Ksh 4,500' },
//         { name: 'Fringe Cut', price: 'Ksh 2,000' },
//         { name: "Kid's Haircut (under 12)", price: 'Ksh 3,000' },
//         { name: 'Wash & Blow-Dry', price: 'Ksh 4,000' },
//         { name: 'Hair Up (Event Styling)', price: 'from Ksh 8,000' },
//       ],
//     },
//     {
//       id: 'colour',
//       title: 'Colour Services',
//       icon: Palette,
//       description: 'Transform your look with our professional colour services. From subtle highlights to bold creative colours, our experienced stylists use premium products for stunning, long-lasting results.',
//       services: [
//         { name: 'Full Colour - Short', price: 'from Ksh 10,000' },
//         { name: 'Full Colour - Medium', price: 'from Ksh 15,000' },
//         { name: 'Full Colour - Long', price: 'from Ksh 18,000' },
//         { name: 'Highlights T-Section', price: 'Ksh 10,000', note: 'Toner not included' },
//         { name: 'Highlights Halfhead', price: 'Ksh 16,000', note: 'Toner not included' },
//         { name: 'Highlights Fullhead', price: 'Ksh 30,000', note: 'Toner not included' },
//         { name: 'Freehand Highlights', price: 'from Ksh 20,000' },
//         { name: 'Creative Colour', price: 'from Ksh 20,000' },
//         { name: 'Bleaching', price: 'from Ksh 20,000' },
//         { name: 'Toner - Short', price: 'Ksh 8,000' },
//         { name: 'Toner - Medium', price: 'Ksh 12,000' },
//         { name: 'Toner - Long', price: 'Ksh 15,000' },
//       ],
//     },
//     {
//       id: 'nails-makeup',
//       title: 'Nails & Makeup',
//       icon: Heart,
//       description: 'Complete your look with our nail and makeup services. From everyday elegance to special occasion glamour, we offer a full range of treatments to enhance your natural beauty.',
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
//       description: 'Wake up with perfect makeup every day. Our permanent makeup services use advanced techniques for natural-looking, long-lasting results that enhance your features beautifully.',
//       services: [
//         { name: 'Eyebrows', price: 'Ksh 33,000' },
//         { name: 'Lips', price: 'Ksh 38,000' },
//         { name: 'Eyeliner', price: 'Ksh 27,000' },
//         { name: 'Touch up (in 1 month)', price: 'Ksh 11,000', note: 'For Permanent Makeup' },
//       ],
//     },
//     {
//       id: 'eyelash-extensions',
//       title: 'Eyelash Extensions',
//       icon: Sparkles,
//       description: 'Enhance your natural lashes with our premium extensions. Choose from classic to dramatic volume looks that suit your style and last for weeks.',
//       services: [
//         { name: 'Classic', price: 'Ksh 8,800' },
//         { name: '2D', price: 'Ksh 10,000' },
//         { name: '3D', price: 'Ksh 11,000' },
//         { name: '4D', price: 'Ksh 12,000' },
//         { name: '5D', price: 'Ksh 13,000' },
//       ],
//     },
//     {
//       id: 'lamination',
//       title: 'Lamination & Other Services',
//       icon: Crown,
//       description: 'Perfect your brows and lashes with our lamination and tinting services. Achieve fuller, more defined features that require minimal daily maintenance.',
//       services: [
//         { name: 'Eyebrows Lamination', price: 'Ksh 8,800' },
//         { name: 'Eyelash Lamination', price: 'Ksh 7,700' },
//         { name: 'Eyebrow tinting and Shaping', price: 'Ksh 5,500' },
//       ],
//     },
//     {
//       id: 'face-fitness',
//       title: 'Face Fitness',
//       icon: Star,
//       description: 'Tone and sculpt your facial muscles with our innovative face fitness treatments. Natural, non-invasive techniques for a lifted, youthful appearance.',
//       services: [
//         { name: 'Face Cardio', price: 'Ksh 20,000' },
//         { name: 'Face HIIT', price: 'Ksh 20,000' },
//         { name: 'Reset Recover', price: 'Ksh 33,000' },
//         { name: 'Face Reformer', price: 'Ksh 45,000' },
//       ],
//     },
//     {
//       id: 'addons',
//       title: 'Treatment Add-ons',
//       icon: Shield,
//       description: 'Enhance any treatment with our luxurious add-ons. From advanced technology to relaxing therapies, customize your experience for optimal results.',
//       services: [
//         { name: 'Eye Treatment', price: 'Ksh 7,000' },
//         { name: 'Radio Frequency Partial Face', price: 'Ksh 14,000', note: 'N/A' },
//         { name: 'Radio Frequency Full Face', price: 'Ksh 24,000', note: 'N/A' },
//         { name: 'Photo Therapy Lights', price: 'Ksh 8,000' },
//         { name: 'Ultrasound Treatment', price: 'Ksh 10,000' },
//         { name: 'Deep Cleansing Facial', price: 'Ksh 9,000' },
//         { name: 'Buccal', price: 'Ksh 8,000' },
//         { name: 'Head Massage', price: 'Ksh 3,000' },
//         { name: 'Neck & Shoulder', price: 'Ksh 3,000' },
//         { name: 'Oxygen Therapy', price: 'Ksh 12,000' },
//       ],
//     },
//     {
//       id: 'cosmetology',
//       title: 'Cosmetology/Trichology',
//       icon: Zap,
//       description: 'Advanced medical-grade treatments for face and scalp. Our cosmetology services address hair loss, skin rejuvenation, and more using cutting-edge techniques.',
//       services: [
//         { name: 'Meso Therapy', area: 'Face or Scalp', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Platelet Rich Plasma', area: 'Face or Scalp', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Biogenix kit', area: 'Face or Scalp', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'PRP+MESO+DERMA PEN', area: 'Face or Scalp', price: 'N/A', note: 'Available from Jan 26' },
//       ],
//     },
//     {
//       id: 'slimming',
//       title: 'Slimming Treatment',
//       icon: Activity,
//       description: 'Non-surgical body contouring treatments to help you achieve your desired shape. Target specific areas with our advanced slimming technologies.',
//       services: [
//         { name: 'Meso Lipo (1ML)', area: 'Double Chin', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Meso Lipo (3ML)', area: 'Arms', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Meso Lipo (5-10ML)', area: 'Tummy', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Cavitation', area: 'Chin Area', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Cavitation', area: 'Arms Area', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Cavitation', area: 'Tummy Area', price: 'N/A', note: 'Available from Jan 26' },
//       ],
//     },
//     {
//       id: 'peeling',
//       title: 'Peeling Treatments',
//       icon: Droplets,
//       description: 'Reveal fresh, glowing skin with our professional peeling treatments. Choose from light to chemical peels based on your skin needs.',
//       services: [
//         { name: 'Light Peeling', area: 'Face', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Chemical Peeling', area: 'Face', price: 'N/A', note: 'Available from Jan 26' },
//       ],
//     },
//     {
//       id: 'injections',
//       title: 'Injection into Skin Lesion',
//       icon: AlertCircle,
//       description: 'Specialized injection treatments for alopecia and keloids. Medical-grade solutions administered by trained professionals.',
//       services: [
//         { name: 'Alopecia Injection', area: 'Scalp, Beard, Mustache', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Keloids Injection', price: 'N/A', note: 'Available from Jan 26' },
//       ],
//     },
//     {
//       id: 'removal',
//       title: 'Warts & Skin Tags Removal',
//       icon: Zap,
//       description: 'Safe and effective removal of warts and skin tags using electric cautery. Quick, minimally invasive treatments with excellent results.',
//       services: [
//         { name: 'Electric Cautery', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Warts and Skin tag (per piece)', area: 'Face, Neck, Under Arm', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Warts and Skin Tag', area: 'Full Face', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Warts and Skin Tag', area: 'Full Neck', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Warts and Skin Tag', area: 'Full Face and Neck', price: 'N/A', note: 'Available from Jan 26' },
//         { name: 'Warts and Skin Tag', area: 'Chest and Back', price: 'N/A', note: 'Available from Jan 26' },
//       ],
//     },
//   ];

//   const filteredCategories = selectedCategory === 'all'
//     ? serviceCategories
//     : serviceCategories.filter(cat => cat.id === selectedCategory);

//   return (
//     <>
//       <PricingHero
//         title="Service"
//         titleGradient="Pricing"
//         description="Transparent pricing for all our beauty services. Professional treatments at competitive rates."
//         image="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80"
//         imageAlt="Pricing at Avya Beauty"
//       />

//       {/* Sticky Filter Menu */}
//       <div className="sticky top-0 z-50 bg-[#E2DBDF] border-b border-[#595959] shadow-sm">
//         <div className="container mx-auto px-6 py-4">
//           <h3 className="text-center text-2xl font-light text-[#262626] mb-6 tracking-wide">MENU</h3>
//           <div className="flex flex-wrap gap-3 justify-center">
//             <button
//               onClick={() => setSelectedCategory('all')}
//               className={`px-6 py-3 text-sm tracking-wider transition-all border ${
//                 selectedCategory === 'all'
//                   ? 'bg-[#C1B5C6] text-white border-[#C1B5C6]'
//                   : 'bg-[#E2DBDF] text-[#262626] border-[#595959] hover:border-[#C1B5C6]'
//               }`}
//             >
//               ALL SERVICES
//             </button>
//             {serviceCategories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`px-6 py-3 text-sm tracking-wider transition-all border whitespace-nowrap ${
//                   selectedCategory === category.id
//                     ? 'bg-[#C1B5C6] text-white border-[#C1B5C6]'
//                     : 'bg-[#E2DBDF] text-[#262626] border-[#595959] hover:border-[#C1B5C6]'
//                 }`}
//               >
//                 {category.title.toUpperCase()}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Service Categories */}
//       <section className="py-16 px-6 bg-[#E2DBDF]">
//         <div className="container mx-auto max-w-7xl space-y-20">
//           {filteredCategories.map((category) => (
//             <div key={category.id} className="bg-white rounded-sm shadow-sm overflow-hidden">
//               <div className="p-8 md:p-12">
//                 <div className="flex items-start gap-6 mb-8">
//                   <div className="flex-shrink-0">
//                     <category.icon className="w-8 h-8 text-[#C1B5C6]" />
//                   </div>
//                   <div className="flex-1">
//                     <h2 className="text-3xl md:text-4xl font-light text-[#262626] mb-4 tracking-wide">
//                       {category.title}
//                     </h2>
//                     <p className="text-[#595959] leading-relaxed max-w-4xl">
//                       {category.description}
//                     </p>
//                   </div>
//                 </div>
//                 <button className="mb-8 px-8 py-3 bg-[#C1B5C6] text-white text-sm tracking-widest hover:bg-[#B0C2B0] transition-colors">
//                   BOOK NOW
//                 </button>
//                 <div className="border border-[#595959] overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="border-b border-[#595959]">
//                         <th className="text-left p-4 md:p-6 font-normal text-[#262626] text-sm md:text-base whitespace-nowrap">Service</th>
//                         {category.services[0]?.area && (
//                           <th className="text-center p-4 md:p-6 font-normal text-[#262626] text-sm md:text-base whitespace-nowrap">Area</th>
//                         )}
//                         {category.services[0]?.duration && (
//                           <th className="text-center p-4 md:p-6 font-normal text-[#262626] text-sm md:text-base whitespace-nowrap">Duration</th>
//                         )}
//                         <th className="text-center p-4 md:p-6 font-normal text-[#262626] text-sm md:text-base whitespace-nowrap">Price</th>
//                         {category.services.some(s => s.note) && (
//                           <th className="text-center p-4 md:p-6 font-normal text-[#262626] text-sm md:text-base whitespace-nowrap">Notes</th>
//                         )}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {category.services.map((service, idx) => (
//                         <tr key={idx} className="border-b border-[#595959] last:border-b-0">
//                           <td className="p-4 md:p-6 text-[#262626] text-sm md:text-base">{service.name}</td>
//                           {category.services[0]?.area && (
//                             <td className="p-4 md:p-6 text-center text-[#595959] text-sm md:text-base">{service.area || '-'}</td>
//                           )}
//                           {category.services[0]?.duration && (
//                             <td className="p-4 md:p-6 text-center text-[#595959] text-sm md:text-base">{service.duration || '-'}</td>
//                           )}
//                           <td className="p-4 md:p-6 text-center text-[#262626] text-sm md:text-base font-medium">{service.price}</td>
//                           {category.services.some(s => s.note) && (
//                             <td className="p-4 md:p-6 text-center text-[#595959] text-xs md:text-sm italic">{service.note || '-'}</td>
//                           )}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Call-to-Action */}
//       <section className="py-24 px-6 bg-[#E2DBDF]">
//         <div className="container mx-auto max-w-4xl text-center">
//           <div className="bg-white rounded-sm shadow-sm p-12">
//             <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-6">
//               Ready to Book?
//             </h2>
//             <p className="text-lg text-[#595959] mb-8 max-w-2xl mx-auto">
//               Contact us to schedule your appointment or for any questions about our services and pricing.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="/contact"
//                 className="bg-[#C1B5C6] hover:bg-[#B0C2B0] text-white px-12 py-4 text-sm tracking-widest transition-colors inline-block"
//               >
//                 BOOK APPOINTMENT
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
  Scissors, Palette, Heart, Eye, Sparkles, Crown, Star, Shield, Zap, Droplets, Activity, AlertCircle, ChevronDown, ChevronUp
} from 'lucide-react';

// Hero Section Component
const PricingHero = ({ title, titleGradient, description, image, imageAlt }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-[#595959]/30" />
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

// Service Table Component
const ServiceTable = ({ services }) => {
  return (
    <div className="border border-[#595959] overflow-x-auto mt-4">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#595959]">
            <th className="text-left p-4 md:p-6 font-normal text-[#262626] text-sm md:text-base whitespace-nowrap">Service</th>
            {services[0]?.area && (
              <th className="text-center p-4 md:p-6 font-normal text-[#262626] text-sm md:text-base whitespace-nowrap">Area</th>
            )}
            {services[0]?.duration && (
              <th className="text-center p-4 md:p-6 font-normal text-[#262626] text-sm md:text-base whitespace-nowrap">Duration</th>
            )}
            <th className="text-center p-4 md:p-6 font-normal text-[#262626] text-sm md:text-base whitespace-nowrap">Price</th>
            {services.some(s => s.note) && (
              <th className="text-center p-4 md:p-6 font-normal text-[#262626] text-sm md:text-base whitespace-nowrap">Notes</th>
            )}
          </tr>
        </thead>
        <tbody>
          {services.map((service, idx) => (
            <tr key={idx} className="border-b border-[#595959] last:border-b-0">
              <td className="p-4 md:p-6 text-[#262626] text-sm md:text-base">{service.name}</td>
              {services[0]?.area && (
                <td className="p-4 md:p-6 text-center text-[#595959] text-sm md:text-base">{service.area || '-'}</td>
              )}
              {services[0]?.duration && (
                <td className="p-4 md:p-6 text-center text-[#595959] text-sm md:text-base">{service.duration || '-'}</td>
              )}
              <td className="p-4 md:p-6 text-center text-[#262626] text-sm md:text-base font-medium">{service.price}</td>
              {services.some(s => s.note) && (
                <td className="p-4 md:p-6 text-center text-[#595959] text-xs md:text-sm italic">{service.note || '-'}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Service Category Component
const ServiceCategory = ({ category, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <button
          onClick={() => onToggle(category.id)}
          className="flex items-center justify-between w-full text-left"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#E2DBDF] rounded-lg">
              <category.icon className="w-6 h-6 text-[#C1B5C6]" />
            </div>
            <h2 className="text-xl md:text-2xl font-light text-[#262626]">
              {category.title}
            </h2>
          </div>
          {isOpen ? <ChevronUp className="text-[#C1B5C6]" /> : <ChevronDown className="text-[#C1B5C6]" />}
        </button>
        {isOpen && (
          <>
            <p className="text-[#595959] leading-relaxed mt-4 max-w-4xl">
              {category.description}
            </p>
            {/* <button className="bg-[#595959] hover:bg-[#595959] text-[#262626] hover:text-white w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-8 md:mt-0 rounded transition-colors">
              BOOK NOW
            </button> */}
            <ServiceTable services={category.services} />
          </>
        )}
      </div>
    </div>
  );
};

// Main Pricing Component
const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (categoryId) => {
    setOpenDropdown(openDropdown === categoryId ? null : categoryId);
  };

  const serviceCategories = [
    {
      id: 'cutting-styling',
      title: 'Cutting & Styling',
      icon: Scissors,
      description: 'Please allow a full hour for all our cutting and styling appointments so that we have sufficient time to understand your needs and you can relax with complimentary drinks from our salon bar.',
      services: [
        { name: 'Haircut', price: 'Ksh 6,000' },
        { name: "Men's Haircut", price: 'Ksh 4,500' },
        { name: 'Fringe Cut', price: 'Ksh 2,000' },
        { name: "Kid's Haircut (under 12)", price: 'Ksh 3,000' },
        { name: 'Wash & Blow-Dry', price: 'Ksh 4,000' },
        { name: 'Hair Up (Event Styling)', price: 'from Ksh 8,000' },
      ],
    },
    {
      id: 'colour',
      title: 'Colour Services',
      icon: Palette,
      description: 'Transform your look with our professional colour services. From subtle highlights to bold creative colours, our experienced stylists use premium products for stunning, long-lasting results.',
      services: [
        { name: 'Full Colour - Short', price: 'from Ksh 10,000' },
        { name: 'Full Colour - Medium', price: 'from Ksh 15,000' },
        { name: 'Full Colour - Long', price: 'from Ksh 18,000' },
        { name: 'Highlights T-Section', price: 'Ksh 10,000', note: 'Toner not included' },
        { name: 'Highlights Halfhead', price: 'Ksh 16,000', note: 'Toner not included' },
        { name: 'Highlights Fullhead', price: 'Ksh 30,000', note: 'Toner not included' },
        { name: 'Freehand Highlights', price: 'from Ksh 20,000' },
        { name: 'Creative Colour', price: 'from Ksh 20,000' },
        { name: 'Bleaching', price: 'from Ksh 20,000' },
        { name: 'Toner - Short', price: 'Ksh 8,000' },
        { name: 'Toner - Medium', price: 'Ksh 12,000' },
        { name: 'Toner - Long', price: 'Ksh 15,000' },
      ],
    },
    {
      id: 'nails-makeup',
      title: 'Nails & Makeup',
      icon: Heart,
      description: 'Complete your look with our nail and makeup services. From everyday elegance to special occasion glamour, we offer a full range of treatments to enhance your natural beauty.',
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
      description: 'Wake up with perfect makeup every day. Our permanent makeup services use advanced techniques for natural-looking, long-lasting results that enhance your features beautifully.',
      services: [
        { name: 'Eyebrows', price: 'Ksh 33,000' },
        { name: 'Lips', price: 'Ksh 38,000' },
        { name: 'Eyeliner', price: 'Ksh 27,000' },
        { name: 'Touch up (in 1 month)', price: 'Ksh 11,000', note: 'For Permanent Makeup' },
      ],
    },
    {
      id: 'eyelash-extensions',
      title: 'Eyelash Extensions',
      icon: Sparkles,
      description: 'Enhance your natural lashes with our premium extensions. Choose from classic to dramatic volume looks that suit your style and last for weeks.',
      services: [
        { name: 'Classic', price: 'Ksh 8,800' },
        { name: '2D', price: 'Ksh 10,000' },
        { name: '3D', price: 'Ksh 11,000' },
        { name: '4D', price: 'Ksh 12,000' },
        { name: '5D', price: 'Ksh 13,000' },
      ],
    },
    {
      id: 'lamination',
      title: 'Lamination & Other Services',
      icon: Crown,
      description: 'Perfect your brows and lashes with our lamination and tinting services. Achieve fuller, more defined features that require minimal daily maintenance.',
      services: [
        { name: 'Eyebrows Lamination', price: 'Ksh 8,800' },
        { name: 'Eyelash Lamination', price: 'Ksh 7,700' },
        { name: 'Eyebrow tinting and Shaping', price: 'Ksh 5,500' },
      ],
    },
    {
      id: 'face-fitness',
      title: 'Face Fitness',
      icon: Star,
      description: 'Tone and sculpt your facial muscles with our innovative face fitness treatments. Natural, non-invasive techniques for a lifted, youthful appearance.',
      services: [
        { name: 'Face Cardio', price: 'Ksh 20,000' },
        { name: 'Face HIIT', price: 'Ksh 20,000' },
        { name: 'Reset Recover', price: 'Ksh 33,000' },
        { name: 'Face Reformer', price: 'Ksh 45,000' },
      ],
    },
    {
      id: 'addons',
      title: 'Treatment Add-ons',
      icon: Shield,
      description: 'Enhance any treatment with our luxurious add-ons. From advanced technology to relaxing therapies, customize your experience for optimal results.',
      services: [
        { name: 'Eye Treatment', price: 'Ksh 7,000' },
        { name: 'Radio Frequency Partial Face', price: 'Ksh 14,000', note: 'N/A' },
        { name: 'Radio Frequency Full Face', price: 'Ksh 24,000', note: 'N/A' },
        { name: 'Photo Therapy Lights', price: 'Ksh 8,000' },
        { name: 'Ultrasound Treatment', price: 'Ksh 10,000' },
        { name: 'Deep Cleansing Facial', price: 'Ksh 9,000' },
        { name: 'Buccal', price: 'Ksh 8,000' },
        { name: 'Head Massage', price: 'Ksh 3,000' },
        { name: 'Neck & Shoulder', price: 'Ksh 3,000' },
        { name: 'Oxygen Therapy', price: 'Ksh 12,000' },
      ],
    },
    {
      id: 'cosmetology',
      title: 'Cosmetology/Trichology',
      icon: Zap,
      description: 'Advanced medical-grade treatments for face and scalp. Our cosmetology services address hair loss, skin rejuvenation, and more using cutting-edge techniques.',
      services: [
        { name: 'Meso Therapy', area: 'Face or Scalp', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Platelet Rich Plasma', area: 'Face or Scalp', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Biogenix kit', area: 'Face or Scalp', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'PRP+MESO+DERMA PEN', area: 'Face or Scalp', price: 'N/A', note: 'Available from Jan 26' },
      ],
    },
    {
      id: 'slimming',
      title: 'Slimming Treatment',
      icon: Activity,
      description: 'Non-surgical body contouring treatments to help you achieve your desired shape. Target specific areas with our advanced slimming technologies.',
      services: [
        { name: 'Meso Lipo (1ML)', area: 'Double Chin', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Meso Lipo (3ML)', area: 'Arms', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Meso Lipo (5-10ML)', area: 'Tummy', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Cavitation', area: 'Chin Area', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Cavitation', area: 'Arms Area', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Cavitation', area: 'Tummy Area', price: 'N/A', note: 'Available from Jan 26' },
      ],
    },
    {
      id: 'peeling',
      title: 'Peeling Treatments',
      icon: Droplets,
      description: 'Reveal fresh, glowing skin with our professional peeling treatments. Choose from light to chemical peels based on your skin needs.',
      services: [
        { name: 'Light Peeling', area: 'Face', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Chemical Peeling', area: 'Face', price: 'N/A', note: 'Available from Jan 26' },
      ],
    },
    {
      id: 'injections',
      title: 'Injection into Skin Lesion',
      icon: AlertCircle,
      description: 'Specialized injection treatments for alopecia and keloids. Medical-grade solutions administered by trained professionals.',
      services: [
        { name: 'Alopecia Injection', area: 'Scalp, Beard, Mustache', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Keloids Injection', price: 'N/A', note: 'Available from Jan 26' },
      ],
    },
    {
      id: 'removal',
      title: 'Warts & Skin Tags Removal',
      icon: Zap,
      description: 'Safe and effective removal of warts and skin tags using electric cautery. Quick, minimally invasive treatments with excellent results.',
      services: [
        { name: 'Electric Cautery', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Warts and Skin tag (per piece)', area: 'Face, Neck, Under Arm', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Warts and Skin Tag', area: 'Full Face', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Warts and Skin Tag', area: 'Full Neck', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Warts and Skin Tag', area: 'Full Face and Neck', price: 'N/A', note: 'Available from Jan 26' },
        { name: 'Warts and Skin Tag', area: 'Chest and Back', price: 'N/A', note: 'Available from Jan 26' },
      ],
    },
  ];

  const filteredCategories = selectedCategory === 'all'
    ? serviceCategories
    : serviceCategories.filter(cat => cat.id === selectedCategory);

  return (
    <>
      <PricingHero
        title="Service"
        titleGradient="Pricing"
        description="Transparent pricing for all our beauty services. Professional treatments at competitive rates."
        image="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80"
        imageAlt="Pricing at Avya Beauty"
      />

      {/* Service Categories */}
      <section className="py-16 px-6 bg-[#E2DBDF]">
        <div className="container mx-auto max-w-7xl space-y-6">
          {filteredCategories.map((category) => (
            <ServiceCategory
              key={category.id}
              category={category}
              isOpen={openDropdown === category.id}
              onToggle={toggleDropdown}
            />
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      {/* <section className="py-24 px-6 bg-[#E2DBDF]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-sm shadow-sm p-12">
            <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-6">
              Ready to Book?
            </h2>
            <p className="text-lg text-[#595959] mb-8 max-w-2xl mx-auto">
              Contact us to schedule your appointment or for any questions about our services and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#C1B5C6] hover:bg-[#B0C2B0] text-white px-12 py-4 text-sm tracking-widest transition-colors inline-block"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Pricing;
