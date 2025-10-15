// // // import { useState, useEffect } from "react";
// // // import { ChevronLeft, ChevronRight } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import heroTrichology from "@/assets/hero-trichology.jpg";
// // // import heroHairTreatments from "@/assets/hero-hair-treatments.jpg";
// // // import heroGlam from "@/assets/hero-glam.jpg";

// // // const slides = [
// // //   {
// // //     id: 1,
// // //     image: heroTrichology,
// // //     title: "Trichology",
// // //     subtitle: " & Scalp",
// // //     scriptText: "Health",
// // //     description:
// // //       "Expert diagnosis and treatment for optimal scalp and hair health",
// // //     alt: "Trichology and scalp health treatment showing healthy hair roots",
// // //   },
// // //   {
// // //     id: 2,
// // //     image: heroHairTreatments,
// // //     title: "Hair Treatments",
// // //     subtitle: "Restorative",
// // //     scriptText: "Rituals",
// // //     description:
// // //       " Luxurious treatments to restore and rejuvenate your hair",
// // //     alt: "Luxurious hair treatment ritual in spa setting",
// // //   },
// // //   {
// // //     id: 3,
// // //     image: heroGlam,
// // //     title: "Premium",
// // //     subtitle: " Glam",
// // //     scriptText: "Services",
// // //     description:
// // //       "Professional styling and makeup for your special moments",
// // //     alt: "Premium glamorous beauty styling and makeup services",
// // //   },
// // // ];

// // // const HeroSlider = () => {
// // //   const [currentSlide, setCurrentSlide] = useState(0);
// // //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

// // //   const nextSlide = () => {
// // //     setCurrentSlide((prev) => (prev + 1) % slides.length);
// // //   };

// // //   const prevSlide = () => {
// // //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
// // //   };

// // //   const goToSlide = (index: number) => {
// // //     setCurrentSlide(index);
// // //     setIsAutoPlaying(false);
// // //   };

// // //   useEffect(() => {
// // //     if (!isAutoPlaying) return;

// // //     const interval = setInterval(() => {
// // //       nextSlide();
// // //     }, 5000);

// // //     return () => clearInterval(interval);
// // //   }, [isAutoPlaying, currentSlide]);

// // //   return (
// // //     <section className="relative min-h-screen w-full overflow-hidden">

// // //       {slides.map((slide, index) => (
// // //         <div
// // //           key={slide.id}
// // //           className={`absolute inset-0 transition-opacity duration-1000 ${
// // //             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
// // //           }`}
// // //         >
// // //           <div className="absolute inset-0">
// // //             <img
// // //               src={slide.image}
// // //               alt={slide.alt}
// // //               className="w-full h-full object-cover"
// // //             />
// // //             <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
// // //           </div>

// // //           <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
// // //             <div className="max-w-2xl animate-fade-in">
// // //               <h1 className="mb-6">
// // //                 <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
// // //                   {slide.title}
// // //                 </span>
// // //                 <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
// // //                   {slide.subtitle}{" "}
// // //                   <span className="font-script font-normal">{slide.scriptText}</span>
// // //                 </span>
// // //               </h1>
// // //               <p className="text-lg md:text-xl text-white/90 font-playfair leading-relaxed max-w-xl">
// // //                 {slide.description}
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </section>
// // //   );
// // // };

// // // export default HeroSlider;
// // import { useState, useEffect } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import heroTrichology from "@/assets/hero-trichology.jpg";
// // import heroHairTreatments from "@/assets/hero-hair-treatments.jpg";
// // import heroGlam from "@/assets/hero-glam.jpg";

// // const slides = [
// //   {
// //     id: 1,
// //     image: heroTrichology,
// //     title: "Trichology",
// //     subtitle: " & Scalp",
// //     scriptText: "Health",
// //     description: "Expert diagnosis and treatment for optimal scalp and hair health",
// //     alt: "Trichology and scalp health treatment showing healthy hair roots",
// //   },
// //   {
// //     id: 2,
// //     image: heroHairTreatments,
// //     title: "Hair Treatments",
// //     subtitle: "Restorative",
// //     scriptText: "Rituals",
// //     description: "Luxurious treatments to restore and rejuvenate your hair",
// //     alt: "Luxurious hair treatment ritual in spa setting",
// //   },
// //   {
// //     id: 3,
// //     image: heroGlam,
// //     title: "Premium",
// //     subtitle: " Glam",
// //     scriptText: "Services",
// //     description: "Professional styling and makeup for your special moments",
// //     alt: "Premium glamorous beauty styling and makeup services",
// //   },
// // ];

// // const HeroSlider = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev + 1) % slides.length);
// //   };

// //   const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
// //   };

// //   const goToSlide = (index) => {
// //     setCurrentSlide(index);
// //     setIsAutoPlaying(false);
// //   };

// //   useEffect(() => {
// //     if (!isAutoPlaying) return;
// //     const interval = setInterval(() => {
// //       nextSlide();
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, [isAutoPlaying, currentSlide]);

// //   return (
// //     <section className="relative min-h-screen w-full overflow-hidden">
// //       {slides.map((slide, index) => (
// //         <div
// //           key={slide.id}
// //           className={`absolute inset-0 transition-opacity duration-1000 ${
// //             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
// //           }`}
// //         >
// //           <div className="absolute inset-0 -z-10">
// //             <img
// //               src={slide.image}
// //               alt={slide.alt}
// //               className="w-full h-full object-cover"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
// //           </div>
// //           <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
// //             <div className="max-w-3xl animate-fade-in">
// //               <h1 className="mb-6">
// //                 <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
// //                   {slide.title}
// //                 </span>
// //                 <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
// //                   {slide.subtitle}{" "}
// //                   <span className="font-script font-normal">{slide.scriptText}</span>
// //                 </span>
// //               </h1>
// //               <p className="text-lg md:text-xl text-white/90 font-playfair leading-relaxed max-w-xl mb-8">
// //                 {slide.description}
// //               </p>
// //               <div className="flex gap-4">
// //                 <Button
// //                   variant="outline"
// //                   size="lg"
// //                   className="text-white border-white hover:bg-white/10 hover:text-white transition-colors"
// //                 >
// //                   Learn More
// //                 </Button>
// //                 <Button
// //                   size="lg"
// //                   className="bg-white text-black hover:bg-white/90 transition-colors"
// //                 >
// //                   Book Now
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </section>
// //   );
// // };

// // export default HeroSlider;
// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import heroTrichology from "@/assets/h3.png";
// import heroHairTreatments from "@/assets/h2.png";
// import heroGlam from "@/assets/h1.png";

// const slides = [
//   {
//     id: 1,
//     image: heroTrichology,
//     title: "Trichology & Scalp Health",
//     //subtitle: " & Scalp Health",
//     // scriptText: "Health",
//     description: "Expert diagnosis and treatment for optimal scalp and hair health",
//     alt: "Trichology and scalp health treatment showing healthy hair roots",
//   },
//   {
//     id: 2,
//     image: heroHairTreatments,
//     title: "Hair Treatments & Restorative Rituals",
//     //subtitle: "Restorative Rituals",
//     // scriptText: "Rituals",
//     description: "Luxurious treatments to restore and rejuvenate your hair",
//     alt: "Luxurious hair treatment ritual in spa setting",
//   },
//   {
//     id: 3,
//     image: heroGlam,
//     title: "Premium Glam Services",
//     //subtitle: " Glam Services",
//     // scriptText: "Services",
//     description: "Professional styling and makeup for your special moments",
//     alt: "Premium glamorous beauty styling and makeup services",
//   },
// ];

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);
//   };

//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, currentSlide]);

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           <div className="absolute inset-0 -z-10">
//             <img
//               src={slide.image}
//               alt={slide.alt}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
//           </div>
//           <div className="relative z-10 container mx-auto px-6 h-screen flex items-end pb-12">
//             <div className="max-w-3xl animate-fade-in">
//               <h1 className="mb-4">
//                 <span className="block text-[120px] font-hatton font-light text-[#E2DBDF] leading-tight tracking-wide">
//                   {slide.title}
//                 </span>
//                 {/* <span className="block text-[120px] font-hatton font-light text-[#E2DBDF] leading-tight tracking-wide">
//                   {slide.subtitle}{" "}
//                   <span className="font-montserrat font-normal italic text-[#C1B5C6]">{slide.scriptText}</span>
//                 </span> */}
//               </h1>
//               <p className="text-lg md:text-xl text-[#B0C2B0] font-montserrat leading-relaxed max-w-xl mb-8">
//                 {slide.description}
//               </p>
//               <div className="flex gap-4">
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="text-[#E2DBDF] border-[#E2DBDF] bg-[#262626] hover:bg-[#595959] hover:text-[#E2DBDF] transition-colors"
//                 >
//                   Book Appointment
//                 </Button>
//                 <Button
//                   size="lg"
//                   className="bg-[#E2DBDF] text-[#262626] hover:bg-[#E2DBDF]/90 transition-colors"
//                 >
//                   Explore Services
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//       {/* Navigation buttons (optional, uncomment if needed) */}
//       {/* <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
//         <ChevronLeft className="text-white" size={40} />
//       </button>
//       <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
//         <ChevronRight className="text-white" size={40} />
//       </button> */}
//     </section>
//   );
// };

// export default HeroSlider;

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTrichology from "@/assets/h3.png";
import heroHairTreatments from "@/assets/h1.png";
import heroGlam from "@/assets/h2.png";

const slides = [
  {
    id: 1,
    image: heroTrichology,
    title: "Trichology & Scalp Health",
    description: "Expert diagnosis and treatment for optimal scalp and hair health",
    alt: "Trichology and scalp health treatment showing healthy hair roots",
  },
  {
    id: 2,
    image: heroHairTreatments,
    title: "Hair Treatments & Rituals",
    description: "Luxurious treatments to restore and rejuvenate your hair",
    alt: "Luxurious hair treatment ritual in spa setting",
  },
  {
    id: 3,
    image: heroGlam,
    title: "Premium Glam Services",
    description: "Professional styling and makeup for your special moments",
    alt: "Premium glamorous beauty styling and makeup services",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 -z-10">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
          </div>

          {/* Content pushed to the left */}
          <div className="relative z-10 container mx-auto px-1 h-screen flex items-end pb-12 justify-start">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="mb-4">
                <span className="block text-[120px] font-hatton font-light text-[#E2DBDF] leading-tight tracking-wide">
                  {slide.title}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#B0C2B0] font-montserrat leading-relaxed max-w-xl mb-8">
                {slide.description}
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-[#E2DBDF] border-[#E2DBDF] bg-[#262626] hover:bg-[#595959] hover:text-[#E2DBDF] transition-colors"
                >
                  Book Appointment
                </Button>
                <Button
                  size="lg"
                  className="bg-[#E2DBDF] text-[#262626] hover:bg-[#E2DBDF]/90 transition-colors"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;
