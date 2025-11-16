// // // import { Button } from "@/components/ui/button";

// // // const TreatmentsHero = () => {
// // //   return (
// // //     <section className="bg-[#262626] py-16 md:py-24 text-white">
// // //       <div className="container mx-auto px-6">
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

// // //           <div className="space-y-8">
// // //             <h2
// // //               className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-white leading-tight"
// // //             >
// // //               TAILORED TREATMENTS FOR THE BEST VERSION OF YOU.
// // //             </h2>

// // //             <p
// // //               className="text-base md:text-lg text-white/90 leading-relaxed font-montserrat"
// // //             >
// // //               Welcome to Avya, Kenya’s first science-meets-beauty luxury salon. Combining advanced trichology, rare international techniques, and premium glam services, we deliver confidence, transformation, and wellness all under one exquisite roof.
// // //             </p>

// // //             <Button
// // //               className="bg-[#E2DBDF] hover:bg-[#B0C2B0] text-[#262626] px-8 py-6 text-base font-open-sans tracking-wider"
// // //             >
// // //               EXPLORE SERVICES
// // //             </Button>
// // //           </div>

// // //           <div className="grid grid-cols-2 gap-4">

// // //             <div className="relative overflow-hidden rounded-lg">
// // //               <img
// // //                 src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=600&fit=crop"
// // //                 alt="Face treatment diagram"
// // //                 className="w-full h-full object-cover"
// // //               />
// // //             </div>

// // //             <div className="relative overflow-hidden rounded-lg">
// // //               <img
// // //                 src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=600&fit=crop"
// // //                 alt="Diverse beauty"
// // //                 className="w-full h-full object-cover"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default TreatmentsHero;
// // import { Button } from "@/components/ui/button";
// // import img1 from "@/assets/h4.png";
// // import img2 from "@/assets/h5.png";

// // const TreatmentsHero = () => {
// //   return (
// //     <section className="bg-[#262626] py-16 md:py-24 text-white">
// //       <div className="max-w-[1231px] mx-auto px-6">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
// //           {/* Left Content */}
// //           <div className="space-y-6 md:space-y-8 max-w-[574px]">
// //             <h2 className="text-3xl md:text-[40px] font-hatton font-light text-white leading-tight">
// //               TAILORED TREATMENTS FOR THE BEST VERSION OF YOU.
// //             </h2>
// //             <p className="text-base md:text-[20px] text-white/90 leading-relaxed font-montserrat">
// //               Welcome to Avya, Kenya's first science-meets-beauty luxury salon. Combining advanced trichology, rare international techniques, and premium glam services, we deliver confidence, transformation, and wellness all under one exquisite roof.
// //             </p>
// //             <Button className="bg-[#E2DBDF] hover:bg-[#B0C2B0] text-[#262626] text-base font-open-sans tracking-wider w-full sm:w-[198px] h-[56px]">
// //               EXPLORE SERVICES
// //             </Button>
// //           </div>

// //           {/* Right Images */}
// //           <div className="grid grid-cols-2 gap-4 w-full max-w-[657px] mx-auto lg:mx-0">
// //             {/* First Image */}
// //             <div className="relative overflow-hidden rounded-lg aspect-[318/534]">
// //               <img
// //                 src={img1}
// //                 alt="Face treatment diagram"
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //             {/* Second Image */}
// //             <div className="relative overflow-hidden rounded-lg aspect-[318/534]">
// //               <img
// //                 src={img2}
// //                 alt="Diverse beauty"
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TreatmentsHero;
// import { Button } from "@/components/ui/button";
// import img1 from "@/assets/nail.png";
// import img2 from "@/assets/op5.png";
// import { useNavigate } from "react-router-dom";

// const TreatmentsHero = () => {
//   const navigate = useNavigate();
//   return (
//     <section className="bg-[#E2DBDF] py-16 md:py-24 text-[#262626]">
//       <div className="max-w-[1231px] mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-6 md:space-y-8 max-w-[574px]">
//             <h2 className="text-3xl md:text-[40px] font-hatton font-light text-[#262626] leading-tight">
//               SETTING A NEW STANDARD IN KENYAN BEAUTY SPACE.
//             </h2>
//             <p className="text-base md:text-[20px] text-[#595959] leading-relaxed font-montserrat">
//               As Kenya’s first science-meets-beauty luxury hair salon, Avya is redefining the salon experience for a discerning clientele. We blend advanced haircare science, precision techniques, and personalized service within an exclusive, elevated environment.
//             </p>
//             {/* <Button className="bg-[#262626] hover:bg-[#595959] text-[#E2DBDF] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors">
//               EXPLORE PRICES
//             </Button> */}
//             <Button
//                   onClick={() => navigate("/pricing")}
//                   className="bg-[#262626] hover:bg-[#595959] text-[#E2DBDF] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
//                 >
//                   EXPLORE PRICES
//                 </Button>
//           </div>
//           {/* Right Images */}
//           {/* <div className="grid grid-cols-2 gap-4 w-full max-w-[657px] mx-auto lg:mx-0">
//             <div className="relative overflow-hidden  aspect-[318/534]">
//               <img
//                 src={img1}
//                 alt="Face treatment diagram"
//                 className="w-full h-full object-cover"
//               />
//             </div>
          
//             <div className="relative overflow-hidden aspect-[318/534]">
//               <img
//                 src={img2}
//                 alt="Diverse beauty"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div> */}
//           <div className="grid grid-cols-2 gap-4 w-full max-w-[657px] mx-auto lg:mx-0">
//   {/* First Image */}
//           <a
//             href="/about"
//             className="relative overflow-hidden aspect-[318/534] group block"
//           >
//             <img
//               src={img1}
//               alt="Face treatment diagram"
//               className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
//           </a>

//           {/* Second Image */}
//           <a
//             href="/contact"
//             className="relative overflow-hidden aspect-[318/534] group block"
//           >
//             <img
//               src={img2}
//               alt="Diverse beauty"
//               className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
//           </a>
//         </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default TreatmentsHero;
import { Button } from "@/components/ui/button";
import img1 from "@/assets/DSC04515.jpg";
import img2 from "@/assets/DSC04725.jpg";
import { useNavigate } from "react-router-dom";

const TreatmentsHero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#E2DBDF] py-16 md:py-24 text-[#262626]">
      <div className="max-w-[1231px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 max-w-[574px]">

            {/* <h3 className="text-xl md:text-2xl font-hatton font-light text-[#262626]">
              About Avya
            </h3> */}
            <h2 className="text-3xl md:text-[40px] font-hatton font-light text-[#262626] leading-tight">
              KENYA'S FIRST SCIENCE-MEETS-BEAUTY LUXURY SALON.
            </h2>
            {/* <h3 className="text-xl md:text-2xl font-hatton font-light text-[#262626]">
              About Avya
            </h3> */}
            <p className="text-base md:text-[20px] text-[#595959] leading-relaxed font-montserrat">
              At AVYA, luxury and science come together to redefine beauty. Our expert hair stylists and beauty specialists deliver advanced treatments designed not only to enhance your look today but to support healthy, lasting beauty for tomorrow. In our serene, modern space, every detail is crafted to inspire confidence, well-being, and timeless elegance.
            </p>
            {/* <Button
              onClick={() => navigate("/about")}
              className="bg-[#262626] hover:bg-[#595959] text-[#E2DBDF] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
            >
              VIEW
            </Button> */}
          </div>
          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-[657px] mx-auto lg:mx-0">
            {/* First Image */}
            <a
              //href="/about"
              className="relative overflow-hidden aspect-[318/534] group block"
            >
              <img
                src={img1}
                alt="Face treatment diagram"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            </a>
            {/* Second Image */}
            <a
              //href="/contact"
              className="relative overflow-hidden aspect-[318/534] group block"
            >
              <img
                src={img2}
                alt="Diverse beauty"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsHero;