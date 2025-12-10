// // // // // import React from "react";

// // // // // // Assuming you have your logo image asset, or you can use text for now
// // // // // // import AvyaLogo from "@/assets/avya-logo.png"; // Uncomment and replace with your actual logo path if needed

// // // // // const HolidayPackagesSection: React.FC = () => {
// // // // //   // Data for the holiday packages
// // // // //   const holidayPackages = [
// // // // //     {
// // // // //       id: "essential-glow",
// // // // //       title: "The Essential Glow",
// // // // //       descriptionItems: [
// // // // //         "Wash & Blow Dry",
// // // // //         "Gel Manicure",
// // // // //         "Express Face Workout",
// // // // //       ],
// // // // //       price: "17,500/-",
// // // // //     },
// // // // //     {
// // // // //       id: "signature-beauty",
// // // // //       title: "The Signature Beauty",
// // // // //       descriptionItems: [
// // // // //         "Hair treatment",
// // // // //         "Wash & Blow Dry",
// // // // //         "Brow Tint plus Shaping",
// // // // //         "Gel Manicure",
// // // // //       ],
// // // // //       price: "16,000/-",
// // // // //     },
// // // // //     {
// // // // //       id: "luxe-rejuvenation-womens",
// // // // //       title: "The Luxe Rejuvenation Experience (Women's)",
// // // // //       descriptionItems: ["Facial", "Cut & Style", "Neck & Shoulder Massage"],
// // // // //       price: "18,000/-",
// // // // //     },
// // // // //     {
// // // // //       id: "luxe-rejuvenation-mens",
// // // // //       title: "The Luxe Rejuvenation Experience (Men's)",
// // // // //       descriptionItems: [
// // // // //         "Express face massage",
// // // // //         "Cut & Style",
// // // // //         "Neck & Shoulder Massage",
// // // // //       ],
// // // // //       price: "20,000/-",
// // // // //     },
// // // // //   ];

// // // // //   const phoneNumber = "0116 444 433"; // Assuming this is the direct number
// // // // //   const emailAddress = "Info@avyabeauty.com";
// // // // //   const websiteUrl = "https://www.avyabeauty.com";

// // // // //   return (
// // // // //     <div className="bg-[#f0f0f0] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
// // // // //       <section className="max-w-screen-xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-16">
// // // // //         {/* Header/Logo Section */}
// // // // //         <div className="text-center mb-12">
// // // // //           {/* If you have an actual logo image: */}
// // // // //           {/* <img src={AvyaLogo} alt="AVYA Beauty Logo" className="mx-auto h-20 mb-4" /> */}
// // // // //           <h1 className="font-['Playfair_Display'] text-5xl font-light text-[#5a2d8a] tracking-wider mb-2">
// // // // //             AVYA
// // // // //           </h1>
// // // // //           <p className="font-['Montserrat'] text-sm text-gray-600 tracking-wider uppercase">
// // // // //             Luxury | Beauty | Science | Longevity
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Main Title */}
// // // // //         <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-normal text-gray-800 text-center uppercase mb-16 tracking-wide">
// // // // //           Holiday Glow Packages
// // // // //         </h2>

// // // // //         {/* Packages Grid */}
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
// // // // //           {holidayPackages.map((pkg) => (
// // // // //             <div
// // // // //               key={pkg.id}
// // // // //               className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-between"
// // // // //             >
// // // // //               <div>
// // // // //                 <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#5a2d8a] mb-4 min-h-[3rem]">
// // // // //                   {pkg.title}
// // // // //                 </h3>
// // // // //                 <ul className="list-none p-0 mb-6 text-gray-700 space-y-2">
// // // // //                   {pkg.descriptionItems.map((item, index) => (
// // // // //                     <li key={index} className="flex items-center text-lg">
// // // // //                       <span className="text-[#5a2d8a] text-xl mr-2">•</span>
// // // // //                       {item}
// // // // //                     </li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>
// // // // //               <div className="mt-auto pt-4 border-t border-gray-200">
// // // // //                 <p className="font-['Montserrat'] text-3xl font-bold text-gray-900">
// // // // //                   {pkg.price}
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Booking Details */}
// // // // //         <div className="text-center border-t border-gray-200 pt-12">
// // // // //           <h3 className="font-['Playfair_Display'] text-3xl font-medium text-[#5a2d8a] mb-6">
// // // // //             Booking Details
// // // // //           </h3>
// // // // //           <p className="font-['Montserrat'] text-xl text-gray-700 mb-2">
// // // // //             {phoneNumber} |{" "}
// // // // //             <a
// // // // //               href={`mailto:${emailAddress}`}
// // // // //               className="text-[#5a2d8a] hover:underline"
// // // // //             >
// // // // //               {emailAddress}
// // // // //             </a>
// // // // //           </p>
// // // // //           <p className="font-['Montserrat'] text-xl text-gray-700 mb-8">
// // // // //             <a
// // // // //               href={websiteUrl}
// // // // //               target="_blank"
// // // // //               rel="noopener noreferrer"
// // // // //               className="text-[#5a2d8a] hover:underline"
// // // // //             >
// // // // //               {websiteUrl}
// // // // //             </a>
// // // // //           </p>
// // // // //           <p className="font-['Montserrat'] text-sm text-gray-500 mt-4">
// // // // //             *Terms & Conditions Apply
// // // // //           </p>
// // // // //         </div>
// // // // //       </section>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default HolidayPackagesSection;
// // // // import React from 'react';

// // // // interface HolidayPackage {
// // // //   id: string;
// // // //   title: string;
// // // //   descriptionItems: string[];
// // // //   price: string;
// // // // }

// // // // interface HolidayPackagesProps {
// // // //   packages?: HolidayPackage[]; // Make packages optional in the interface
// // // // }

// // // // const HolidayPackages: React.FC<HolidayPackagesProps> = ({ packages = [] }) => {
// // // //   const holidayPackages = [
// // // //     {
// // // //       id: "essential-glow",
// // // //       title: "The Essential Glow",
// // // //       descriptionItems: [
// // // //         "Wash & Blow Dry",
// // // //         "Gel Manicure",
// // // //         "Express Face Workout",
// // // //       ],
// // // //       price: "17,500/-",
// // // //     },
// // // //     {
// // // //       id: "signature-beauty",
// // // //       title: "The Signature Beauty",
// // // //       descriptionItems: [
// // // //         "Hair treatment",
// // // //         "Wash & Blow Dry",
// // // //         "Brow Tint plus Shaping",
// // // //         "Gel Manicure",
// // // //       ],
// // // //       price: "16,000/-",
// // // //     },
// // // //     {
// // // //       id: "luxe-rejuvenation-womens",
// // // //       title: "The Luxe Rejuvenation Experience (Women's)",
// // // //       descriptionItems: ["Facial", "Cut & Style", "Neck & Shoulder Massage"],
// // // //       price: "18,000/-",
// // // //     },
// // // //     {
// // // //       id: "luxe-rejuvenation-mens",
// // // //       title: "The Luxe Rejuvenation Experience (Men's)",
// // // //       descriptionItems: [
// // // //         "Express face massage",
// // // //         "Cut & Style",
// // // //         "Neck & Shoulder Massage",
// // // //       ],
// // // //       price: "20,000/-",
// // // //     },
// // // //   ];


// // // //   return (
// // // //     <div className="bg-[#1a362e] py-16 px-5 font-inter text-gray-200 flex flex-col items-center">
// // // //       {/* Section Title */}
// // // //       <h2 className="text-5xl font-bold text-white mb-2 text-center">Our Holiday Packages</h2>
// // // //       {/* Divider */}
// // // //       <div className="w-20 h-1 bg-[#68b488] mx-auto mb-12"></div>
// // // //       {/* Section Subtitle */}
// // // //       <p className="text-xl text-gray-400 mb-16 text-center max-w-2xl">
// // // //         Indulge yourself or your loved ones with our specially curated holiday experiences.
// // // //       </p>

// // // //       {/* Package Grid */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
// // // //         {/* Now `packages.map` is safe because `packages` is guaranteed to be an array */}
// // // //         {packages.map((pkg) => (
// // // //           <div
// // // //             key={pkg.id}
// // // //             className="bg-[#274b41] rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1"
// // // //           >
// // // //             {/* Package Image Placeholder */}
// // // //             <div className="h-48 bg-gradient-to-br from-[#3d6e5a] to-[#274b41] flex justify-center items-center text-5xl text-gray-400 relative">
// // // //               {/* Optional: Subtle pattern for visual interest */}
// // // //               <div className="absolute inset-0 bg-radial-gradient opacity-10"></div>
// // // //               {pkg.title.split(' ')[0]}
// // // //             </div>

// // // //             {/* Package Content */}
// // // //             <div className="p-6 flex flex-col flex-grow">
// // // //               <h3 className="text-3xl font-semibold text-white mb-4 text-center">{pkg.title}</h3>
// // // //               <ul className="list-none p-0 mb-6 flex-grow">
// // // //                 {pkg.descriptionItems.map((item, index) => (
// // // //                   <li key={index} className="text-lg text-gray-300 mb-2 flex items-center">
// // // //                     <span className="text-xl text-[#68b488] mr-3">•</span>
// // // //                     {item}
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //               {/* Price Tag */}
// // // //               <div className="bg-[#68b488] text-[#1a362e] text-2xl font-bold py-3 px-5 rounded-lg text-center self-end mt-auto">
// // // //                 {pkg.price}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //     </div>
// // // //   );
// // // // };

// // // // export default HolidayPackages;
// // // import React from 'react';

// // // interface IconProps extends React.SVGProps<SVGSVGElement> {
// // //   className?: string;
// // // }



// // // interface HolidayPackage {
// // //   id: string;
// // //   title: string;
// // //   subtitle: string;
// // //   description: string;
// // //   price: string;
// // //   image: string; 

// // //   imageAlt: string; 
// // // }


// // // const HolidayPackages: React.FC = () => {
// // //   const holidayPackages: HolidayPackage[] = [
// // //     {
// // //       id: "essential-glow",
// // //       title: "The Essential Glow",
// // //       subtitle: "RELAX & REFRESH",
// // //       description: "A perfect blend of pampering treatments to leave you feeling radiant and revitalized.",
// // //       price: "17,500/-",
// // //       image: "https://images.unsplash.com/photo-1544161511-c97b5e8c1b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      
// // //       imageAlt: "Serene spa setting with candles and flowers"
// // //     },
// // //     {
// // //       id: "signature-beauty",
// // //       title: "The Signature Beauty",
// // //       subtitle: "HAIR & NAILS",
// // //       description: "Our signature package focusing on exquisite hair treatments and flawless nail care.",
// // //       price: "16,000/-",
// // //       image: "https://images.unsplash.com/photo-1608620894578-838038622c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      
     
// // //       imageAlt: "Close-up of a person getting a manicure"
// // //     },
// // //     {
// // //       id: "luxe-rejuvenation-womens",
// // //       title: "Luxe Rejuvenation (Women)",
// // //       subtitle: "ULTIMATE INDULGENCE",
// // //       description: "Experience ultimate luxury with a comprehensive facial, stylish cut, and soothing massage.",
// // //       price: "18,000/-",
// // //       image: "https://images.unsplash.com/photo-1531386762283-36c567882200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
     
   
// // //       imageAlt: "Woman relaxing during a facial treatment"
// // //     },
// // //     {
// // //       id: "luxe-rejuvenation-mens",
// // //       title: "Luxe Rejuvenation (Men)",
// // //       subtitle: "GENTLEMAN'S RETREAT",
// // //       description: "Tailored express facial, modern cut & style, and a tension-melting neck massage.",
// // //       price: "20,000/-",
// // //       image: "https://images.unsplash.com/photo-1582234056221-a0a65349e5d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    
// // //       imageAlt: "Man getting a professional haircut"
// // //     },
// // //   ];

// // //   return (
// // //     <div className="bg-[#C1B5C6] py-16 px-5 font-inter text-gray-200 flex flex-col items-center">
// // //       <h2 className="text-5xl font-bold text-white mb-2 text-center">Our Holiday Packages</h2>
// // //       <div className="w-20 h-1 bg-[#68b488] mx-auto mb-12"></div>
// // //       <p className="text-xl text-gray-400 mb-16 text-center max-w-2xl">
// // //         Indulge yourself or your loved ones with our specially curated holiday experiences.
// // //       </p>
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
// // //         {holidayPackages.map((pkg) => {
// // //           return (
// // //             <div
// // //               key={pkg.id}
// // //               className="group bg-[#C1B5C6] rounded-b-[20px] shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1"
// // //             >
              
// // //               <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-t-[100px] rounded-b-[20px] border border-white/10 bg-white/5">
// // //                 <img
// // //                   src={pkg.image}
// // //                   alt={pkg.imageAlt}
// // //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
// // //                 />
            
// // //               </div>

            
// // //               <div className="p-6 pt-0 flex flex-col flex-grow text-center">
// // //                 <h3 className="text-3xl font-semibold text-white mb-2">{pkg.title}</h3>
// // //                 <p className="text-md text-[#68b488] uppercase tracking-wider mb-4">{pkg.subtitle}</p>
// // //                 <p className="text-lg text-gray-300 mb-6 flex-grow leading-relaxed">{pkg.description}</p>

                
// // //                 <div className="text-[#68b488] text-4xl font-bold mt-auto">
// // //                   {pkg.price}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default HolidayPackages;
// // import React from 'react';

// // import { 
// //   Sparkles, Star, Zap, Leaf, Flame, 
// //   ArrowRight
// // } from 'lucide-react';

// // export default function MysticGardenPage() {
  
// //   const characters = [
// //     {
// //       name: "The Essential Glow",
// //       title: "RELAX & REFRESH",
// //       desc: "A perfect blend of pampering treatments to leave you feeling radiant and revitalized.",
// //       price: "17,500/-",
// //       image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
// //       color: "text-yellow-400"
// //     },
// //     {
// //       name: "The Signature Beauty",
// //       title: "HAIR & NAILS",
// //       desc: "Our signature package focusing on exquisite hair treatments and flawless nail care.",
// //       price: "16,000/-",
// //       image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
// //       color: "text-cyan-400"
// //     },
// //     {
// //       name: "Luxe Rejuvenation (Women)",
// //       title: "ULTIMATE INDULGENCE",
// //       desc: "Experience ultimate luxury with a comprehensive facial, stylish cut, and soothing massage.",
// //       price: "18,000/-",
// //       image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
// //       color: "text-green-400"
// //     },
// //     {
// //       name: "Luxe Rejuvenation (Men)",
// //       title: "GENTLEMAN'S RETREAT",
// //       desc: "Tailored express facial, modern cut & style, and a tension-melting neck massage.",
// //       price: "20,000/-",
// //       image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=800&q=80",
// //       color: "text-orange-400"
// //     }
// //   ];


// //   return (
// //     <div className="min-h-screen font-sans bg-white text-[#E2DBDF]">
      


// //       <section className="py-32 bg-[#C1B5B6] text-white overflow-hidden">
// //         <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
// //           <div className="text-start mb-16">
// //           <h2 className="text-4xl md:text-5xl font-hatton font-light text-[#262626] mb-4">
// //             Our Holiday Packages
// //           </h2>
// //           <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#A192A6] to-transparent mb-6" />
// //           <p className="text-[18px] md:text-[20px] text-[#595959] max-w-md font-hatton">
// //             Indulge yourself or your loved ones with our specially curated holiday experiences.
// //           </p>
// //         </div>
          
// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
// //             {characters.map((char, idx) => (
// //               <div key={idx} className="group flex flex-col items-center text-center">
                
                
// //                 <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-t-[100px] rounded-b-[20px] border border-white/10 bg-white/5">
// //                   <img 
// //                     src={char.image} 
// //                     alt={char.name}
// //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
// //                   />
                 
// //                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12  rounded-full flex items-center justify-center border shadow-xl z-10">
// //                     <span className={`text-white ${char.color}`}>{char.price}</span>
// //                   </div>

// //                 </div>
                
// //                 {/* Text Content */}
// //                 <div className="space-y-3 px-2">
// //                   <h3 className="text-2xl font-bold text-white group-hover:text-[#262626] transition-colors">
// //                     {char.name}
// //                   </h3>
// //                   <h4 className="text-[#595959] text-l font-bold uppercase tracking-widest">
// //                     {char.title}
// //                   </h4>
// //                   <p className="text-white/90 text-l leading-relaxed max-w-[240px] mx-auto">
// //                     {char.desc}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
      
// //     </div>
// //   );
// // }
// import React from 'react';

// import { 
//   Sparkles, Star, Zap, Leaf, Flame, 
//   ArrowRight
// } from 'lucide-react';

// export default function MysticGardenPage() {
  
//   const characters = [
//     {
//       name: "The Essential Glow",
//       title: "RELAX & REFRESH",
//       desc: "A perfect blend of pampering treatments to leave you feeling radiant and revitalized.",
//       price: "Ksh 17,500",
//       image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
//       color: "text-yellow-400"
//     },
//     {
//       name: "The Signature Beauty",
//       title: "HAIR & NAILS",
//       desc: "Our signature package focusing on exquisite hair treatments and flawless nail care.",
//       price: "Ksh 16,000",
//       image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
//       color: "text-cyan-400"
//     },
//     {
//       name: "Luxe Rejuvenation (Women)",
//       title: "ULTIMATE INDULGENCE",
//       desc: "Experience ultimate luxury with a comprehensive facial, stylish cut, and soothing massage.",
//       price: "Ksh 18,000",
//       image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
//       color: "text-green-400"
//     },
//     {
//       name: "Luxe Rejuvenation (Men)",
//       title: "GENTLEMAN'S RETREAT",
//       desc: "Tailored express facial, modern cut & style, and a tension-melting neck massage.",
//       price: "Ksh 20,000",
//       image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=800&q=80",
//       color: "text-orange-400"
//     }
//   ];


//   return (
//     <div className="min-h-screen font-sans bg-white text-[#E2DBDF]">
      


//       <section className="py-32 bg-[#C1B5B6] text-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
//           <div className="text-start mb-16">
//           <h2 className="text-4xl md:text-5xl font-hatton font-light text-[#262626] mb-4">
//             Our Holiday Packages
//           </h2>
//           <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#A192A6] to-transparent mb-6" />
//           <p className="text-[18px] md:text-[20px] text-[#595959] max-w-md font-hatton">
//             Indulge yourself or your loved ones with our specially curated holiday experiences.
//           </p>
//         </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
//             {characters.map((char, idx) => (
//               <div key={idx} className="group flex flex-col items-center text-center">
                
                
//                 <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-t-[100px] rounded-b-[20px] border border-white/10 bg-white/5">
//                   <img 
//                     src={char.image} 
//                     alt={char.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
//                   />
                 
//                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12  rounded-full flex items-center justify-center border shadow-xl z-10">
//                     <span className={`text-white ${char.color}`}>{char.price}</span>
//                   </div>

//                 </div>
                
//                 {/* Text Content */}
//                 <div className="space-y-3 px-2">
//                   <h3 className="text-2xl font-bold text-white group-hover:text-[#262626] transition-colors">
//                     {char.name}
//                   </h3>
//                   <h4 className="text-[#595959] text-l font-bold uppercase tracking-widest">
//                     {char.title}
//                   </h4>
//                   <p className="text-white/90 text-l leading-relaxed max-w-[240px] mx-auto mb-6">
//                     {char.desc}
//                   </p>
//                   <a
//                     href="https://avyasalon.zenoti.com/webstore"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center 
//                       w-[198px] h-14 bg-white hover:bg-[#595959] 
//                       text-[#262626] hover:text-white 
//                       text-sm tracking-wider rounded transition-all duration-300"
//                   >
//                     BOOK APPOINTMENT
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//     </div>
//   );
// }
import React from 'react';

import { 
  Sparkles, Star, Zap, Leaf, Flame, 
  ArrowRight
} from 'lucide-react';
import wash from "@/assets/DSC04725.jpg";

export default function HolidayPackages() {
  
  const characters = [
    
    {
      name: "The Signature Beauty",
      title: "HAIR & NAILS",
      desc: "Hair treatment, Wash & Blow Dry, Brow Tint plus Shaping, Gel Manicure",
      price: "Ksh 16,000",
      image: "https://images.pexels.com/photos/3997374/pexels-photo-3997374.jpeg",
      color: "text-cyan-400"
    },
    {
      name: "The Essential Glow",
      title: "RELAX & REFRESH",
      desc: "Wash & Blow Dry, Gel Manicure,  and Express Face Workout",
      price: "Ksh 17,500",
      image: wash,
      color: "text-yellow-400"
    },
    {
      name: "Luxe Rejuvenation (Women)",
      title: "ULTIMATE INDULGENCE",
      desc: "Facial, Cut & Style, Neck & Shoulder Massage",
      price: "Ksh 18,000",
      image: "https://images.pexels.com/photos/3865496/pexels-photo-3865496.jpeg",
      color: "text-green-400"
    },
    {
      name: "Luxe Rejuvenation (Men)",
      title: "GENTLEMAN'S RETREAT",
      desc: "Cut & Style, Neck & Shoulder Massage",
      price: "Ksh 20,000",
      image: "https://images.pexels.com/photos/5584459/pexels-photo-5584459.jpeg",
      color: "text-orange-400"
    }
  ];


  return (
    <div className="min-h-screen font-sans bg-white text-[#E2DBDF]">
      


      <section className="py-32 bg-[#C1B5B6] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-start mb-16">
          <h2 className="text-4xl md:text-5xl font-hatton font-light text-[#262626] mb-4">
            Our Holiday Packages
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#A192A6] to-transparent mb-6" />
          <p className="text-[18px] md:text-[20px] text-[#595959] max-w-md font-hatton">
            Indulge yourself or your loved ones with our specially curated holiday experiences.
          </p>
        </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {characters.map((char, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                
                
                <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-t-[100px] rounded-b-[20px] border border-white/10 bg-white/5">
                  <img 
                    src={char.image} 
                    alt={char.name}
                    // className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                  />
                 
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full flex items-center justify-center border shadow-xl z-10 bg-white">
                    <span className="text-[#262626] text-sm font-bold">{char.price}</span>
                  </div>

                </div>
                
                {/* Text Content */}
                <div className="space-y-3 px-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#262626] transition-colors">
                    {char.name}
                  </h3>
                  <h4 className="text-[#595959] text-l font-bold uppercase tracking-widest">
                    {char.title}
                  </h4>
                  <p className="text-white text-bold leading-relaxed max-w-[240px] mx-auto mb-6">
                    {char.desc}
                  </p>
                  <a
                    href="https://avyasalon.zenoti.com/webstoreNew/services/6d6c66ef-8041-4964-bf75-93b1ba5ada31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center 
                      w-[198px] h-14 bg-[#595959] hover:bg-white
                      text-white hover:text-[#262626] 
                      text-sm tracking-wider rounded transition-all duration-300"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}