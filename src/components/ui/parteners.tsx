// // import { motion } from "framer-motion";
// // import img2 from "@/assets/elan.png";
// // import img1 from "@/assets/bandi.jpeg";
// // import img from "@/assets/previa.jpeg";

// // interface Partner {
// //   name: string;
// //   logo: string;
// //   url: string;
// //   description: string;
// // }

// // const partners: Partner[] = [
// //   {
// //     name: "Elan Lash & Brow Lounge",
// //     logo: img2,
// //     url: "https://www.instagram.com/elan_lashbrow_lounge?igsh=cWJ6cnZjemJvNnRv",
// //     description: "Premium lash and brow services in Dubai including lash lifts, brow lamination, tinting, and halal brow architecture.",
// //   },
// //   {
// //     name: "Bandi Nails & Spa",
// //     logo: img1,
// //     url: "https://www.instagram.com/bandinailsme?igsh=bjJpN3MzbjNtamI1",
// //     description: "Eco-friendly nail salon offering professional gelish manicures in a relaxing environment with a wide selection of colors.",
// //   },
// //   {
// //     name: "FutureWorks",
// //     logo: img,
// //     url: "https://www.instagram.com/previa_haircare?igsh=MWdrZmJ0emtoazZk",
// //     description: "Sustainable Italian natural haircare brand offering regenerating treatments, curl care, and holistic wellness products.",
// //   },
// // ];

// // const PartnersSection = () => {
// //   return (
// //     <section className="min-h-[50vh] bg-[#E2DBDF] flex items-center justify-center px-4 py-12">
// //       <div className="max-w-7xl w-full">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="text-start mb-10"
// //         >
// //           <div className="text-[32px] md:text-[40px] font-hatton font-light text-[#262626] mb-2">
// //             Our Trusted Partners
// //             <div className="w-24 h-[1px] bg-[#595959] mt-2 mb-3"></div>
// //             <p className="text-[20px] text-[#595959] max-w-md font-hatton">
// //               Proudly partnering with trusted beauty and wellness experts.
// //             </p>
// //           </div>
// //         </motion.div>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {partners.map((partner, index) => (
// //             <motion.a
// //               key={partner.name}
// //               href={partner.url}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //               className="group relative h-full"
// //             >
// //               <div className="relative overflow-hidden rounded-xl bg-[#C1B5C6] from-black via-gray-900 to-black border border-[#595959]/30 p-8 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(38,38,38,0.2)] h-full flex flex-col">
// //                 {/* Logo container */}
// //                 <div className="relative z-10 flex items-center justify-center h-24 flex-shrink-0 mb-6">
// //                   <img 
// //                     src={partner.logo} 
// //                     alt={`${partner.name} logo`}
// //                     className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110"
// //                   />
// //                 </div>
                
// //                 {/* Separator Line */}
// //                 <div className="relative z-10 flex justify-center mb-6">
// //                   <div className="w-20 h-[2px] bg-[#595959] rounded-full"></div>
// //                 </div>
                
// //                 {/* Description */}
// //                 <p className="relative z-10 text-center text-xl text-[#262626] font-hatton leading-relaxed flex-1">
// //                   {partner.description}
// //                 </p>
// //                 {/* Shine effect */}
// //                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
// //               </div>
// //               {/* Floating indicator */}
// //               <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-2/3 h-0.5 bg-[#595959] transition-all duration-500 rounded-full" />
// //             </motion.a>
// //           ))}
// //         </div>
// //         <motion.p
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //           className="text-center mt-10 text-[#262626] text-xl font-hatton font-light"
// //         >
// //           We're proud to partner with leading beauty and wellness specialists who share our commitment to quality, innovation, and exceptional client experiences.
// //         </motion.p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PartnersSection;
// import { motion } from "framer-motion";
// import img2 from "@/assets/elan.png";
// import img1 from "@/assets/bandi.jpeg";
// import img from "@/assets/previa.jpeg";

// interface Partner {
//   name: string;
//   logo: string;
//   url: string;
//   description: string;
// }

// const partners: Partner[] = [
//   {
//     name: "Elan Lash & Brow Lounge",
//     logo: img2,
//     url: "https://www.instagram.com/elan_lashbrow_lounge?igsh=cWJ6cnZjemJvNnRv",
//     description: "Premium lash and brow services in Dubai including lash lifts, brow lamination, tinting, and halal brow architecture.",
//   },
//   {
//     name: "Bandi Nails & Spa",
//     logo: img1,
//     url: "https://www.instagram.com/bandinailsme?igsh=bjJpN3MzbjNtamI1",
//     description: "Eco-friendly nail salon offering professional gelish manicures in a relaxing environment with a wide selection of colors.",
//   },
//   {
//     name: "FutureWorks",
//     logo: img,
//     url: "https://www.instagram.com/previa_haircare?igsh=MWdrZmJ0emtoazZk",
//     description: "Sustainable Italian natural haircare brand offering regenerating treatments, curl care, and holistic wellness products.",
//   },
// ];

// const PartnersSection = () => {
//   return (
//     <section className="min-h-[50vh] bg-gradient-to-br from-[#E2DBDF] to-[#D1C4CF] flex items-center justify-center px-4 py-12 relative overflow-hidden">
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(201,165,193,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(201,165,193,0.1)_0%,transparent_50%)" />
//       </div>
//       <div className="max-w-7xl w-full relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-start mb-10"
//         >
//           <div className="text-[32px] md:text-[40px] font-hatton font-light text-[#262626] mb-2">
//             Our Trusted Partners
//             <div className="w-24 h-[1px] bg-gradient-to-r from-[#595959] to-transparent mt-2 mb-3"></div>
//             <p className="text-[20px] text-[#595959] max-w-md font-hatton">
//               Proudly partnering with trusted beauty and wellness experts.
//             </p>
//           </div>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {partners.map((partner, index) => (
//             <motion.a
//               key={partner.name}
//               href={partner.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               className="group relative h-full"
//             >
//               <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/95 transition-all duration-500 h-full flex flex-col p-6 md:p-8">
//                 {/* Logo container with modern circular frame - fixed fitting */}
//                 <div className="relative z-10 flex items-center justify-center h-20 md:h-24 flex-shrink-0 mb-6">
//                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-all duration-500 overflow-hidden bg-white/90">
//                     <img 
//                       src={partner.logo} 
//                       alt={`${partner.name} logo`}
//                       className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:brightness-110 p-2"
//                     />
//                   </div>
//                 </div>
                
//                 {/* Modern separator: subtle wave or dot line */}
//                 <div className="relative z-10 flex justify-center mb-6">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-[#595959] rounded-full group-hover:bg-[#262626] transition-colors duration-500"></div>
//                     <div className="w-2 h-2 bg-[#595959] rounded-full group-hover:bg-[#262626] transition-colors duration-500"></div>
//                     <div className="w-2 h-2 bg-[#595959] rounded-full group-hover:bg-[#262626] transition-colors duration-500"></div>
//                   </div>
//                 </div>
                
//                 {/* Description with improved typography */}
//                 <p className="relative z-10 text-center text-lg md:text-xl text-[#262626] font-hatton leading-relaxed flex-1 mb-4">
//                   {partner.description}
//                 </p>

//                 {/* Partner name as subtle footer */}
//                 <div className="relative z-10 text-center">
//                   <span className="text-sm md:text-base text-[#595959] font-hatton font-light group-hover:text-[#262626] transition-colors duration-500">
//                     {partner.name}
//                   </span>
//                 </div>

//                 {/* Enhanced shine effect with glassmorphism overlay */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12" />
//                 </div>

//                 {/* Modern bottom accent: curved underline */}
//                 <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-1 bg-gradient-to-r from-[#595959]/50 to-[#262626]/50 rounded-full transition-all duration-700 blur-sm" />
//               </div>
//             </motion.a>
//           ))}
//         </div>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-12 text-[#262626] text-xl font-hatton font-light max-w-2xl mx-auto"
//         >
//           We're proud to partner with leading beauty and wellness specialists who share our commitment to quality, innovation, and exceptional client experiences.
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default PartnersSection;
import { motion } from "framer-motion";
import img2 from "@/assets/elan.png";
import img1 from "@/assets/bandi.jpeg";
import img from "@/assets/previa.jpeg";

interface Partner {
  name: string;
  logo: string;
  url: string;
  description: string;
}

const partners: Partner[] = [
  {
    name: "Elan Lash & Brow Lounge",
    logo: img2,
    url: "https://www.instagram.com/elan_lashbrow_lounge?igsh=cWJ6cnZjemJvNnRv",
    description: "Expert lash and brow artistry in Dubai, offering bespoke lash lifts, precision brow sculpting, and eco-conscious beauty solutions.",
  },
  {
    name: "Bandi Nails & Spa",
    logo: img1,
    url: "https://www.instagram.com/bandinailsme?igsh=bjJpN3MzbjNtamI1",
    description: "Sustainable nail care haven, delivering vibrant gel manicures and serene spa experiences with an eco-friendly ethos.",
  },
  {
    name: "FutureWorks",
    logo: img,
    url: "https://www.instagram.com/previa_haircare?igsh=MWdrZmJ0emtoazZk",
    description: "Italian eco-luxe haircare brand, specializing in nourishing treatments and sustainable products for vibrant, healthy hair.",
  },
];

const PartnersSection = () => {
  return (
    <section className="min-h-[50vh] bg-gradient-to-br from-[#E2DBDF] to-[#D1C4CF] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(201,165,193,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(201,165,193,0.1)_0%,transparent_50%)" />
      </div>
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-start mb-10"
        >
          <div className="text-[32px] md:text-[40px] font-hatton font-light text-[#262626] mb-2">
            Our Esteemed Collaborators
            <div className="w-24 h-[1px] bg-gradient-to-r from-[#595959] to-transparent mt-2 mb-3"></div>
            <p className="text-[20px] text-[#595959] max-w-md font-hatton">
              Honored to work with premier beauty and wellness innovators.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/95 transition-all duration-500 h-full flex flex-col p-6 md:p-8">
                {/* Logo container with modern circular frame - fixed fitting */}
                <div className="relative z-10 flex items-center justify-center h-20 md:h-24 flex-shrink-0 mb-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-all duration-500 overflow-hidden bg-white/90">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:brightness-110 p-2"
                    />
                  </div>
                </div>
                
                {/* Modern separator: subtle wave or dot line */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#595959] rounded-full group-hover:bg-[#262626] transition-colors duration-500"></div>
                    <div className="w-2 h-2 bg-[#595959] rounded-full group-hover:bg-[#262626] transition-colors duration-500"></div>
                    <div className="w-2 h-2 bg-[#595959] rounded-full group-hover:bg-[#262626] transition-colors duration-500"></div>
                  </div>
                </div>
                
                {/* Description with improved typography */}
                <p className="relative z-10 text-center text-lg md:text-xl text-[#262626] font-hatton leading-relaxed flex-1 mb-4">
                  {partner.description}
                </p>

                {/* Partner name as subtle footer */}
                <div className="relative z-10 text-center">
                  <span className="text-sm md:text-base text-[#595959] font-hatton font-light group-hover:text-[#262626] transition-colors duration-500">
                    {partner.name}
                  </span>
                </div>

                {/* Enhanced shine effect with glassmorphism overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12" />
                </div>

                {/* Modern bottom accent: curved underline */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-1 bg-gradient-to-r from-[#595959]/50 to-[#262626]/50 rounded-full transition-all duration-700 blur-sm" />
              </div>
            </motion.a>
          ))}
        </div>
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-[#262626] text-xl font-hatton font-light max-w-2xl mx-auto"
        >
          We are thrilled to collaborate with visionary beauty and wellness brands dedicated to excellence, sustainability, and transformative client experiences.
        </motion.p> */}
      </div>
    </section>
  );
};

export default PartnersSection;