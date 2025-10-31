// // import heroImage from "@/assets/hero-beauty.jpg";

// // const HeroSection = () => {
// //   return (
// //     <section className="relative min-h-screen w-full overflow-hidden">

// //       <div className="absolute inset-0">
// //         <img
// //           src={heroImage}
// //           alt="Beautiful skin close-up showing natural radiance and healthy texture"
// //           className="w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
// //       </div>


// //       <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
// //         <div className="max-w-2xl animate-fade-in">
// //           <h1 className="mb-6">
// //             <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
// //               WHERE SCIENCE
// //             </span>
// //             <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
// //               MEETS{" "}
// //               <span className="font-script font-normal">Beauty</span>
// //             </span>
// //           </h1>
// //           <p className="text-lg md:text-xl text-white/90 font-playfair leading-relaxed max-w-xl">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// //             eiusmod tempor incididunt ut labore et dolore magna aliqua
// //           </p>
// //         </div>
// //       </div>

// //     </section>
// //   );
// // };

// // export default HeroSection;
// import heroImage from "@/assets/hero-beauty.jpg";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden">
      
//       <div className="absolute inset-0 -z-10">
//         <img
//           src={heroImage}
//           alt="Beautiful skin close-up showing natural radiance and healthy texture"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
//       </div>

//       <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
//         <div className="max-w-2xl animate-fade-in">
//           <h1 className="mb-6">
//             <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
//               WHERE SCIENCE
//             </span>
//             <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
//               MEETS{" "}
//               <span className="font-script font-normal">Beauty</span>
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 font-playfair leading-relaxed max-w-xl">
//             Discover the perfect blend of science and beauty for radiant, healthy skin and hair.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import heroImage from "@/assets/hero-beauty.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Beautiful skin close-up showing natural radiance and healthy texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-end pb-12">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="mb-4">
            <span className="block text-5xl md:text-7xl font-hatton font-light text-[#E2DBDF] leading-tight tracking-wide">
              WHERE SCIENCE
            </span>
            <span className="block text-5xl md:text-7xl font-hatton font-light text-[#E2DBDF] leading-tight tracking-wide">
              MEETS{" "}
              <span className="font-montserrat font-normal italic text-[#C1B5C6]">Beauty</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#B0C2B0] font-montserrat leading-relaxed max-w-xl">
            Welcome to AVYA, a destination where beauty is elevated through the perfect balance of science, innovation and luxury.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
