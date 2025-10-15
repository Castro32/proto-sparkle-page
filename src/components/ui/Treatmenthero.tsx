// import { Button } from "@/components/ui/button";

// const TreatmentsHero = () => {
//   return (
//     <section className="bg-[#262626] py-16 md:py-24 text-white">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           <div className="space-y-8">
//             <h2
//               className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-white leading-tight"
//             >
//               TAILORED TREATMENTS FOR THE BEST VERSION OF YOU.
//             </h2>

//             <p
//               className="text-base md:text-lg text-white/90 leading-relaxed font-montserrat"
//             >
//               Welcome to Avya, Kenya’s first science-meets-beauty luxury salon. Combining advanced trichology, rare international techniques, and premium glam services, we deliver confidence, transformation, and wellness all under one exquisite roof.
//             </p>

//             <Button
//               className="bg-[#E2DBDF] hover:bg-[#B0C2B0] text-[#262626] px-8 py-6 text-base font-open-sans tracking-wider"
//             >
//               EXPLORE SERVICES
//             </Button>
//           </div>

//           <div className="grid grid-cols-2 gap-4">

//             <div className="relative overflow-hidden rounded-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=600&fit=crop"
//                 alt="Face treatment diagram"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="relative overflow-hidden rounded-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=600&fit=crop"
//                 alt="Diverse beauty"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TreatmentsHero;
import { Button } from "@/components/ui/button";
import img1 from "@/assets/h4.png";
import img2 from "@/assets/h5.png";

const TreatmentsHero = () => {
  return (
    <section className="bg-[#262626] py-16 md:py-24 text-white">
      <div className="max-w-[1231px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 max-w-[574px]">
            <h2 className="text-3xl md:text-[40px] font-hatton font-light text-white leading-tight">
              TAILORED TREATMENTS FOR THE BEST VERSION OF YOU.
            </h2>
            <p className="text-base md:text-[20px] text-white/90 leading-relaxed font-montserrat">
              Welcome to Avya, Kenya's first science-meets-beauty luxury salon. Combining advanced trichology, rare international techniques, and premium glam services, we deliver confidence, transformation, and wellness all under one exquisite roof.
            </p>
            <Button className="bg-[#E2DBDF] hover:bg-[#B0C2B0] text-[#262626] text-base font-open-sans tracking-wider w-full sm:w-[198px] h-[56px]">
              EXPLORE SERVICES
            </Button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-[657px] mx-auto lg:mx-0">
            {/* First Image */}
            <div className="relative overflow-hidden rounded-lg aspect-[318/534]">
              <img
                src={img1}
                alt="Face treatment diagram"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Second Image */}
            <div className="relative overflow-hidden rounded-lg aspect-[318/534]">
              <img
                src={img2}
                alt="Diverse beauty"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsHero;