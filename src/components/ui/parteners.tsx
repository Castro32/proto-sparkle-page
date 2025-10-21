// // // import { motion } from "framer-motion";
// // // import img2 from "@/assets/elan.png";
// // // import img1 from "@/assets/bandi.jpeg";
// // // import img from "@/assets/previa.jpeg";

// // // interface Partner {
// // //   name: string;
// // //   logo: string;
// // //   url: string;
// // // }

// // // const partners: Partner[] = [
// // //   {
// // //     name: "Elan Lash & Brow Lounge",
// // //     logo: img2,
// // //     url: "https://www.instagram.com/elan_lashbrow_lounge?igsh=cWJ6cnZjemJvNnRv",
// // //   },
// // //   {
// // //     name: "Bandi Nails & Spa",
// // //     logo: img1,
// // //     url: "https://www.instagram.com/bandinailsme?igsh=bjJpN3MzbjNtamI1",
// // //   },
// // //   {
// // //     name: "FutureWorks",
// // //     logo: img,
// // //     url: "https://www.instagram.com/previa_haircare?igsh=MWdrZmJ0emtoazZk",
// // //   },
// // // ];

// // // const PartnersSection = () => {
// // //   return (
// // //     <section className="min-h-[50vh] bg-black flex items-center justify-center bg-gradient-to-br from-background via-partner-platinum to-background px-4 py-12">
// // //       <div className="max-w-5xl w-full">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           className="text-center mb-10"
// // //         >
// // //           <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3 tracking-tight">
// // //             Our Trusted Partners
// // //           </h2>
// // //           <div className="h-1 w-20 bg-gradient-to-r from-partner-thistle to-partner-ash mx-auto rounded-full" />
// // //         </motion.div>

// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //           {partners.map((partner, index) => (
// // //             <motion.a
// // //               key={partner.name}
// // //               href={partner.url}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               initial={{ opacity: 0, y: 30 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5, delay: index * 0.1 }}
// // //               className="group relative"
// // //             >
// // //               <div className="relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border p-8 transition-all duration-500 hover:scale-105 hover:shadow-[var(--shadow-glow)]">
// // //                 {/* Gradient overlay on hover */}
// // //                 <div className="absolute inset-0 bg-gradient-to-br from-partner-thistle/10 to-partner-ash/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
// // //                 {/* Logo container */}
// // //                 <div className="relative z-10 flex items-center justify-center h-24">
// // //                   <img 
// // //                     src={partner.logo} 
// // //                     alt={`${partner.name} logo`}
// // //                     className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110"
// // //                   />
// // //                 </div>

// // //                 {/* Shine effect */}
// // //                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
// // //               </div>

// // //               {/* Floating indicator */}
// // //               <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-2/3 h-0.5 bg-gradient-to-r from-partner-thistle to-partner-ash transition-all duration-500 rounded-full" />
// // //             </motion.a>
// // //           ))}
// // //         </div>

// // //         <motion.p
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           transition={{ duration: 0.6, delay: 0.4 }}
// // //           className="text-center mt-10 text-muted-foreground text-base"
// // //         >
// // //           We're proud to partner with leading beauty and wellness specialists who share our commitment to quality, innovation, and exceptional client experiences.
// // //         </motion.p>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default PartnersSection;
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
// //     <section className="min-h-[50vh] bg-[#262626] flex items-center justify-center bg-gradient-to-br from-[#262626] via-[#E2DBDF] to-[#262626] px-4 py-12">
// //       <div className="max-w-5xl w-full">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="text-start mb-10"
// //         >
// //           <h2 className="text-3xl md:text-4xl justify-start text-[#262626] mb-3 tracking-tight font-hatton font-light">
// //             Our Trusted Partners
// //           </h2>
// //           <div className="h-1 w-20 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] rounded-full mb-4" />

// //           <p className="text-[20px] text-[#FFFFFF] max-w-md font-hatton">
// //             Excellence Through Collaboration
// //           </p>
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
// //               className="group relative"
// //             >
// //               <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-[#595959]/50 p-8 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(193,181,198,0.3)]">
// //                 {/* Gradient overlay on hover */}
// //                 <div className="absolute inset-0 bg-gradient-to-br from-[#C1B5C6]/10 to-[#B0C2B0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
// //                 {/* Logo container */}
// //                 <div className="relative z-10 flex items-center justify-center h-24">
// //                   <img 
// //                     src={partner.logo} 
// //                     alt={`${partner.name} logo`}
// //                     className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110"
// //                   />
// //                 </div>

// //                 {/* Description */}
// //                 <p className="relative z-10 mt-4 text-center text-xl text-[#595959] font-hatton leading-relaxed">
// //                   {partner.description}
// //                 </p>

// //                 {/* Shine effect */}
// //                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
// //               </div>

// //               {/* Floating indicator */}
// //               <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-2/3 h-0.5 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] transition-all duration-500 rounded-full" />
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
//     <section className="min-h-[50vh] bg-[#E2DBDF] flex items-center justify-center px-4 py-12">
//       <div className="max-w-6xl w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-start mb-10"
//         >
//           {/* <h2 className="text-3xl md:text-4xl justify-start text-[#262626] mb-3 tracking-tight font-hatton font-light">
//             Our Trusted Partners
//           </h2>       
//           <div className="h-1 w-20 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] rounded-full mb-4" />
//           <p>We're proud to partner with leading beauty and wellness specialists who share our<br/>commitment to quality, innovation, and exceptional client experiences.</p> */}
//           <div className="text-[32px] md:text-[40px] font-hatton font-light text-[#262626] mb-2">
//               Our Trusted Partners
//               <div className="w-24 h-[1px] bg-[#595959] mt-2 mb-3"></div>
//               <p className="text-[20px] text-[#595959] max-w-md font-hatton">
//                 Proudly partnering with trusted beauty and wellness experts.
//               </p>
//             </div>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {partners.map((partner, index) => (
//             <motion.a
//               key={partner.name}
//               href={partner.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group relative h-full"
//             >
//               <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-[#C1B5C6]/50 p-8 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(193,181,198,0.3)] h-full flex flex-col">
//                 {/* Gradient overlay on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#C1B5C6]/10 to-[#B0C2B0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 {/* Logo container */}
//                 <div className="relative z-10 flex items-center justify-center h-24 flex-shrink-0">
//                   <img 
//                     src={partner.logo} 
//                     alt={`${partner.name} logo`}
//                     className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110"
//                   />
//                 </div>
//                 {/* Description */}
//                 <p className="relative z-10 mt-4 text-center text-xl text-[#000000] font-hatton leading-relaxed flex-1">
//                   {partner.description}
//                 </p>
//                 {/* Shine effect */}
//                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//               </div>
//               {/* Floating indicator */}
//               <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-2/3 h-0.5 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] transition-all duration-500 rounded-full" />
//             </motion.a>
//           ))}
//         </div>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-10 text-[#262626] text-xl font-hatton font-light"
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
    description: "Premium lash and brow services in Dubai including lash lifts, brow lamination, tinting, and halal brow architecture.",
  },
  {
    name: "Bandi Nails & Spa",
    logo: img1,
    url: "https://www.instagram.com/bandinailsme?igsh=bjJpN3MzbjNtamI1",
    description: "Eco-friendly nail salon offering professional gelish manicures in a relaxing environment with a wide selection of colors.",
  },
  {
    name: "FutureWorks",
    logo: img,
    url: "https://www.instagram.com/previa_haircare?igsh=MWdrZmJ0emtoazZk",
    description: "Sustainable Italian natural haircare brand offering regenerating treatments, curl care, and holistic wellness products.",
  },
];

const PartnersSection = () => {
  return (
    <section className="min-h-[50vh] bg-[#E2DBDF] flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-start mb-10"
        >
          {/* <h2 className="text-3xl md:text-4xl justify-start text-[#262626] mb-3 tracking-tight font-hatton font-light">
            Our Trusted Partners
          </h2>       
          <div className="h-1 w-20 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] rounded-full mb-4" />
          <p>We're proud to partner with leading beauty and wellness specialists who share our<br/>commitment to quality, innovation, and exceptional client experiences.</p> */}
          <div className="text-[32px] md:text-[40px] font-hatton font-light text-[#262626] mb-2">
              Our Trusted Partners
              <div className="w-24 h-[1px] bg-[#595959] mt-2 mb-3"></div>
              <p className="text-[20px] text-[#595959] max-w-md font-hatton">
                Proudly partnering with trusted beauty and wellness experts.
              </p>
            </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="relative overflow-hidden rounded-xl bg-white border border-[#C1B5C6]/50 p-8 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(193,181,198,0.3)] h-full flex flex-col">
                {/* Logo container */}
                <div className="relative z-10 flex items-center justify-center h-24 flex-shrink-0">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110"
                  />
                </div>
                {/* Description */}
                <p className="relative z-10 mt-4 text-center text-xl text-[#000000] font-hatton leading-relaxed flex-1">
                  {partner.description}
                </p>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
              {/* Floating indicator */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-2/3 h-0.5 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] transition-all duration-500 rounded-full" />
            </motion.a>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 text-[#262626] text-xl font-hatton font-light"
        >
          We're proud to partner with leading beauty and wellness specialists who share our commitment to quality, innovation, and exceptional client experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default PartnersSection;