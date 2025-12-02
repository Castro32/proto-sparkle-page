// // // // // // import { useState, useEffect } from "react";
// // // // // // import { ChevronLeft, ChevronRight } from "lucide-react";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import heroTrichology from "@/assets/hero-trichology.jpg";
// // // // // // import heroHairTreatments from "@/assets/hero-hair-treatments.jpg";
// // // // // // import heroGlam from "@/assets/hero-glam.jpg";

// // // // // // const slides = [
// // // // // //   {
// // // // // //     id: 1,
// // // // // //     image: heroTrichology,
// // // // // //     title: "Trichology",
// // // // // //     subtitle: " & Scalp",
// // // // // //     scriptText: "Health",
// // // // // //     description:
// // // // // //       "Expert diagnosis and treatment for optimal scalp and hair health",
// // // // // //     alt: "Trichology and scalp health treatment showing healthy hair roots",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 2,
// // // // // //     image: heroHairTreatments,
// // // // // //     title: "Hair Treatments",
// // // // // //     subtitle: "Restorative",
// // // // // //     scriptText: "Rituals",
// // // // // //     description:
// // // // // //       " Luxurious treatments to restore and rejuvenate your hair",
// // // // // //     alt: "Luxurious hair treatment ritual in spa setting",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 3,
// // // // // //     image: heroGlam,
// // // // // //     title: "Premium",
// // // // // //     subtitle: " Glam",
// // // // // //     scriptText: "Services",
// // // // // //     description:
// // // // // //       "Professional styling and makeup for your special moments",
// // // // // //     alt: "Premium glamorous beauty styling and makeup services",
// // // // // //   },
// // // // // // ];

// // // // // // const HeroSlider = () => {
// // // // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // // // //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

// // // // // //   const nextSlide = () => {
// // // // // //     setCurrentSlide((prev) => (prev + 1) % slides.length);
// // // // // //   };

// // // // // //   const prevSlide = () => {
// // // // // //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
// // // // // //   };

// // // // // //   const goToSlide = (index: number) => {
// // // // // //     setCurrentSlide(index);
// // // // // //     setIsAutoPlaying(false);
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     if (!isAutoPlaying) return;

// // // // // //     const interval = setInterval(() => {
// // // // // //       nextSlide();
// // // // // //     }, 5000);

// // // // // //     return () => clearInterval(interval);
// // // // // //   }, [isAutoPlaying, currentSlide]);

// // // // // //   return (
// // // // // //     <section className="relative min-h-screen w-full overflow-hidden">

// // // // // //       {slides.map((slide, index) => (
// // // // // //         <div
// // // // // //           key={slide.id}
// // // // // //           className={`absolute inset-0 transition-opacity duration-1000 ${
// // // // // //             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
// // // // // //           }`}
// // // // // //         >
// // // // // //           <div className="absolute inset-0">
// // // // // //             <img
// // // // // //               src={slide.image}
// // // // // //               alt={slide.alt}
// // // // // //               className="w-full h-full object-cover"
// // // // // //             />
// // // // // //             <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
// // // // // //           </div>

// // // // // //           <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
// // // // // //             <div className="max-w-2xl animate-fade-in">
// // // // // //               <h1 className="mb-6">
// // // // // //                 <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
// // // // // //                   {slide.title}
// // // // // //                 </span>
// // // // // //                 <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
// // // // // //                   {slide.subtitle}{" "}
// // // // // //                   <span className="font-script font-normal">{slide.scriptText}</span>
// // // // // //                 </span>
// // // // // //               </h1>
// // // // // //               <p className="text-lg md:text-xl text-white/90 font-playfair leading-relaxed max-w-xl">
// // // // // //                 {slide.description}
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default HeroSlider;
// // // // // import { useState, useEffect } from "react";
// // // // // import { ChevronLeft, ChevronRight } from "lucide-react";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import heroTrichology from "@/assets/hero-trichology.jpg";
// // // // // import heroHairTreatments from "@/assets/hero-hair-treatments.jpg";
// // // // // import heroGlam from "@/assets/hero-glam.jpg";

// // // // // const slides = [
// // // // //   {
// // // // //     id: 1,
// // // // //     image: heroTrichology,
// // // // //     title: "Trichology",
// // // // //     subtitle: " & Scalp",
// // // // //     scriptText: "Health",
// // // // //     description: "Expert diagnosis and treatment for optimal scalp and hair health",
// // // // //     alt: "Trichology and scalp health treatment showing healthy hair roots",
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     image: heroHairTreatments,
// // // // //     title: "Hair Treatments",
// // // // //     subtitle: "Restorative",
// // // // //     scriptText: "Rituals",
// // // // //     description: "Luxurious treatments to restore and rejuvenate your hair",
// // // // //     alt: "Luxurious hair treatment ritual in spa setting",
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     image: heroGlam,
// // // // //     title: "Premium",
// // // // //     subtitle: " Glam",
// // // // //     scriptText: "Services",
// // // // //     description: "Professional styling and makeup for your special moments",
// // // // //     alt: "Premium glamorous beauty styling and makeup services",
// // // // //   },
// // // // // ];

// // // // // const HeroSlider = () => {
// // // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // // //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

// // // // //   const nextSlide = () => {
// // // // //     setCurrentSlide((prev) => (prev + 1) % slides.length);
// // // // //   };

// // // // //   const prevSlide = () => {
// // // // //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
// // // // //   };

// // // // //   const goToSlide = (index) => {
// // // // //     setCurrentSlide(index);
// // // // //     setIsAutoPlaying(false);
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (!isAutoPlaying) return;
// // // // //     const interval = setInterval(() => {
// // // // //       nextSlide();
// // // // //     }, 5000);
// // // // //     return () => clearInterval(interval);
// // // // //   }, [isAutoPlaying, currentSlide]);

// // // // //   return (
// // // // //     <section className="relative min-h-screen w-full overflow-hidden">
// // // // //       {slides.map((slide, index) => (
// // // // //         <div
// // // // //           key={slide.id}
// // // // //           className={`absolute inset-0 transition-opacity duration-1000 ${
// // // // //             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
// // // // //           }`}
// // // // //         >
// // // // //           <div className="absolute inset-0 -z-10">
// // // // //             <img
// // // // //               src={slide.image}
// // // // //               alt={slide.alt}
// // // // //               className="w-full h-full object-cover"
// // // // //             />
// // // // //             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
// // // // //           </div>
// // // // //           <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
// // // // //             <div className="max-w-3xl animate-fade-in">
// // // // //               <h1 className="mb-6">
// // // // //                 <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
// // // // //                   {slide.title}
// // // // //                 </span>
// // // // //                 <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
// // // // //                   {slide.subtitle}{" "}
// // // // //                   <span className="font-script font-normal">{slide.scriptText}</span>
// // // // //                 </span>
// // // // //               </h1>
// // // // //               <p className="text-lg md:text-xl text-white/90 font-playfair leading-relaxed max-w-xl mb-8">
// // // // //                 {slide.description}
// // // // //               </p>
// // // // //               <div className="flex gap-4">
// // // // //                 <Button
// // // // //                   variant="outline"
// // // // //                   size="lg"
// // // // //                   className="text-white border-white hover:bg-white/10 hover:text-white transition-colors"
// // // // //                 >
// // // // //                   Learn More
// // // // //                 </Button>
// // // // //                 <Button
// // // // //                   size="lg"
// // // // //                   className="bg-white text-black hover:bg-white/90 transition-colors"
// // // // //                 >
// // // // //                   Book Now
// // // // //                 </Button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       ))}
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default HeroSlider;
// // // // import { useState, useEffect } from "react";
// // // // import { ChevronLeft, ChevronRight } from "lucide-react";
// // // // import { Button } from "@/components/ui/button";
// // // // import heroTrichology from "@/assets/h3.png";
// // // // import heroHairTreatments from "@/assets/h2.png";
// // // // import heroGlam from "@/assets/h1.png";

// // // // const slides = [
// // // //   {
// // // //     id: 1,
// // // //     image: heroTrichology,
// // // //     title: "Trichology & Scalp Health",
// // // //     //subtitle: " & Scalp Health",
// // // //     // scriptText: "Health",
// // // //     description: "Expert diagnosis and treatment for optimal scalp and hair health",
// // // //     alt: "Trichology and scalp health treatment showing healthy hair roots",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     image: heroHairTreatments,
// // // //     title: "Hair Treatments & Restorative Rituals",
// // // //     //subtitle: "Restorative Rituals",
// // // //     // scriptText: "Rituals",
// // // //     description: "Luxurious treatments to restore and rejuvenate your hair",
// // // //     alt: "Luxurious hair treatment ritual in spa setting",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     image: heroGlam,
// // // //     title: "Premium Glam Services",
// // // //     //subtitle: " Glam Services",
// // // //     // scriptText: "Services",
// // // //     description: "Professional styling and makeup for your special moments",
// // // //     alt: "Premium glamorous beauty styling and makeup services",
// // // //   },
// // // // ];

// // // // const HeroSlider = () => {
// // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

// // // //   const nextSlide = () => {
// // // //     setCurrentSlide((prev) => (prev + 1) % slides.length);
// // // //   };

// // // //   const prevSlide = () => {
// // // //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
// // // //   };

// // // //   const goToSlide = (index) => {
// // // //     setCurrentSlide(index);
// // // //     setIsAutoPlaying(false);
// // // //   };

// // // //   useEffect(() => {
// // // //     if (!isAutoPlaying) return;
// // // //     const interval = setInterval(() => {
// // // //       nextSlide();
// // // //     }, 5000);
// // // //     return () => clearInterval(interval);
// // // //   }, [isAutoPlaying, currentSlide]);

// // // //   return (
// // // //     <section className="relative min-h-screen w-full overflow-hidden">
// // // //       {slides.map((slide, index) => (
// // // //         <div
// // // //           key={slide.id}
// // // //           className={`absolute inset-0 transition-opacity duration-1000 ${
// // // //             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
// // // //           }`}
// // // //         >
// // // //           <div className="absolute inset-0 -z-10">
// // // //             <img
// // // //               src={slide.image}
// // // //               alt={slide.alt}
// // // //               className="w-full h-full object-cover"
// // // //             />
// // // //             <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
// // // //           </div>
// // // //           <div className="relative z-10 container mx-auto px-6 h-screen flex items-end pb-12">
// // // //             <div className="max-w-3xl animate-fade-in">
// // // //               <h1 className="mb-4">
// // // //                 <span className="block text-[120px] font-hatton font-light text-[#E2DBDF] leading-tight tracking-wide">
// // // //                   {slide.title}
// // // //                 </span>
// // // //                 {/* <span className="block text-[120px] font-hatton font-light text-[#E2DBDF] leading-tight tracking-wide">
// // // //                   {slide.subtitle}{" "}
// // // //                   <span className="font-montserrat font-normal italic text-[#C1B5C6]">{slide.scriptText}</span>
// // // //                 </span> */}
// // // //               </h1>
// // // //               <p className="text-lg md:text-xl text-[#B0C2B0] font-montserrat leading-relaxed max-w-xl mb-8">
// // // //                 {slide.description}
// // // //               </p>
// // // //               <div className="flex gap-4">
// // // //                 <Button
// // // //                   variant="outline"
// // // //                   size="lg"
// // // //                   className="text-[#E2DBDF] border-[#E2DBDF] bg-[#262626] hover:bg-[#595959] hover:text-[#E2DBDF] transition-colors"
// // // //                 >
// // // //                   Book Appointment
// // // //                 </Button>
// // // //                 <Button
// // // //                   size="lg"
// // // //                   className="bg-[#E2DBDF] text-[#262626] hover:bg-[#E2DBDF]/90 transition-colors"
// // // //                 >
// // // //                   Explore Services
// // // //                 </Button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       ))}
// // // //       {/* Navigation buttons (optional, uncomment if needed) */}
// // // //       {/* <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
// // // //         <ChevronLeft className="text-white" size={40} />
// // // //       </button>
// // // //       <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
// // // //         <ChevronRight className="text-white" size={40} />
// // // //       </button> */}
// // // //     </section>
// // // //   );
// // // // };

// // // // export default HeroSlider;

// // // import { useState, useEffect } from "react";
// // // import { ChevronLeft, ChevronRight } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import heroTrichology from "@/assets/h3.png";
// // // import heroHairTreatments from "@/assets/h1.png";
// // // import heroGlam from "@/assets/h2.png";

// // // const slides = [
// // //   {
// // //     id: 1,
// // //     image: heroTrichology,
// // //     title: "Trichology & Scalp Health",
// // //     description: "Expert diagnosis and treatment for optimal scalp and hair health",
// // //     alt: "Trichology and scalp health treatment showing healthy hair roots",
// // //   },
// // //   {
// // //     id: 2,
// // //     image: heroHairTreatments,
// // //     title: "Hair Treatments & Rituals",
// // //     description: "Luxurious treatments to restore and rejuvenate your hair",
// // //     alt: "Luxurious hair treatment ritual in spa setting",
// // //   },
// // //   {
// // //     id: 3,
// // //     image: heroGlam,
// // //     title: "Premium Glam Services",
// // //     description: "Professional styling and makeup for your special moments",
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

// // //   const goToSlide = (index) => {
// // //     setCurrentSlide(index);
// // //     setIsAutoPlaying(false);
// // //   };

// // //   useEffect(() => {
// // //     if (!isAutoPlaying) return;
// // //     const interval = setInterval(nextSlide, 5000);
// // //     return () => clearInterval(interval);
// // //   }, [isAutoPlaying]);

// // //   return (
// // //     <section className="relative min-h-screen w-full overflow-hidden">
// // //       {slides.map((slide, index) => (
// // //         <div
// // //           key={slide.id}
// // //           className={`absolute inset-0 transition-opacity duration-1000 ${
// // //             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
// // //           }`}
// // //         >
// // //           <div className="absolute inset-0 -z-10">
// // //             <img
// // //               src={slide.image}
// // //               alt={slide.alt}
// // //               className="w-full h-full object-cover"
// // //             />
// // //             <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
// // //           </div>

// // //           {/* Content pushed to the left */}
// // //           <div className="relative z-10 container mx-auto px-1 h-screen flex items-end pb-12 justify-start">
// // //             <div className="max-w-3xl animate-fade-in">
// // //               <h1 className="mb-4">
// // //                 <span className="block text-[120px] font-hatton font-light text-[#E2DBDF] leading-tight tracking-wide">
// // //                   {slide.title}
// // //                 </span>
// // //               </h1>
// // //               <p className="text-lg md:text-xl text-[#B0C2B0] font-montserrat leading-relaxed max-w-xl mb-8">
// // //                 {slide.description}
// // //               </p>
// // //               <div className="flex gap-4">
// // //                 <Button
// // //                   variant="outline"
// // //                   size="lg"
// // //                   className="text-[#E2DBDF] border-[#E2DBDF] bg-[#262626] hover:bg-[#595959] hover:text-[#E2DBDF] transition-colors"
// // //                 >
// // //                   Book Appointment
// // //                 </Button>
// // //                 <Button
// // //                   size="lg"
// // //                   className="bg-[#E2DBDF] text-[#262626] hover:bg-[#E2DBDF]/90 transition-colors"
// // //                 >
// // //                   Explore Services
// // //                 </Button>
// // //               </div>
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
// // import heroTrichology from "@/assets/op.png";
// // import heroHairTreatments from "@/assets/op1.png";
// // import heroGlam from "@/assets/op3.png";
// // import about from "@/assets/op5.png";

// // const slides = [
// //   {
// //     id: 1,
// //     image: about,
// //     title: "Welcome to",
// //     titleGradient: "Avya",
// //     description: "Kenya's first luxury salon where science meets beauty. We're redefining what a salon experience can be by combining advanced haircare science, precision techniques, and elevated service for those who expect more.",
// //     mobileDescription: "Where science meets beauty.\n\nAvya is Kenya's first luxury salon blending advanced haircare, expert techniques, and personalized care.",
// //     alt: "Avya Beauty Salon Interior",
// //   },
// //   {
// //     id: 2,
// //     image: heroTrichology,
// //     title: "Expert Trichology &",
// //     titleGradient: "Scalp Health",
// //     description: "Every visit is personal. From restorative scalp therapies to transformative styling, each treatment is tailored to your individual needs, goals, and hair profile - because no two clients are the same.",
// //     mobileDescription: "Tailored just for you.\n\nFrom scalp therapies to styling, every treatment is crafted to your unique hair and beauty needs.",
// //     alt: "Trichology and scalp health treatment showing healthy hair roots",
// //   },
// //   {
// //     id: 3,
// //     image: heroHairTreatments,
// //     title: "Luxurious Hair",
// //     titleGradient: "Treatments",
// //     description: "More than a salon, Avya is a beauty destination. Our serene, design-led space offers a blend of innovation and indulgence, creating an experience that's both luxurious and deeply restorative.",
// //     mobileDescription: "More than a salon.\n\nStep into a calming, design-led space where indulgence meets innovation.",
// //     alt: "Luxurious hair treatment ritual in spa setting",
// //   },
// //   {
// //     id: 4,
// //     image: heroGlam,
// //     title: "Six Hands",
// //     titleGradient: "Rituals",
// //     description: "Located in Nairobi, Avya is the city's premier longevity beauty spa. We invite you to step into a world where expert care meets modern elegance and leave feeling radiant, renewed, and undeniably you.",
// //     mobileDescription: "Nairobi's luxury beauty destination.\n\nExperience Avya — and leave feeling radiant, restored, and completely you.",
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
// //     const interval = setInterval(nextSlide, 5000);
// //     return () => clearInterval(interval);
// //   }, [isAutoPlaying]);

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
// //             <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
// //           </div>

// //           {/* Content pushed to the left */}
// //           <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
// //             <div className="w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-3xl animate-fade-in">
// //                 <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
// //                   {slide.title}
// //                   <br />
// //                   <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
// //                     {slide.titleGradient}
// //                   </span>
// //                 </h1>
// //               {/* Desktop Description */}
// //               <div className="hidden lg:block">
// //                 <div className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
// //                   {slide.description.split('\n\n').map((paragraph, index) => (
// //                     <p key={index} className={index > 0 ? 'mt-4' : ''}>
// //                       {paragraph}
// //                     </p>
// //                   ))}
// //                 </div>
// //               </div>
              
// //               {/* Mobile Description */}
// //               <div className="lg:hidden">
// //                 <div className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
// //                   {(slide.mobileDescription || slide.description).split('\n\n').map((paragraph, index) => (
// //                     <p key={index} className={index > 0 ? 'mt-4' : ''}>
// //                       {paragraph}
// //                     </p>
// //                   ))}
// //                 </div>
// //               </div>
// //               <div className="flex flex-nowrap gap-2 sm:gap-4">
// //                 <a
// //                   href="#book"
// //                   className="bg-white hover:bg-[#595959] text-[#262626] hover:text-white w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
// //                 > 
// //                   BOOK APPOINTMENT
// //                 </a>
// //                 {/* <a
// //                   href="#book"
// //                   className="bg-white/30 hover:bg-white/50 text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded-full border border-white/40 transition-all duration-300 hover:scale-105"
// //                 > 
// //                   EXPLORE SERVICES
// //                 </a> */}
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
// import heroTrichology from "@/assets/op.png";
// import heroHairTreatments from "@/assets/DSC00050-Edit.jpg";
// import mobilescreen from "@/assets/DSC00039-Edit.jpg";
// import heroGlam from "@/assets/op3.png";
// import about from "@/assets/op5.png";

// const slides = [
//   {
//     id: 1,
//     //image: about,
//     image: heroHairTreatments,
//     title: "Welcome to",
//     titleGradient: "Avya",
//     alt: "Avya Beauty Salon Interior",
//   },
//   // {
//   //   id: 2,
//   //   image: heroTrichology,
//   //   title: "Expert Trichology &",
//   //   titleGradient: "Scalp Health",
//   //   alt: "Trichology and scalp health treatment showing healthy hair roots",
//   // },
//   // {
//   //   id: 2,
//   //   image: heroTrichology,
//   //   image: heroHairTreatments,
//   //   title: "Hair Cut &",
//   //   titleGradient: "Balayage",
//   //   alt: "Expert hair cutting and balayage services to enhance your natural beauty.",
//   // },
//   // {
//   //   id: 3,
//   //   image: heroHairTreatments,
//   //   title: "Luxurious Hair",
//   //   titleGradient: "Treatments",
//   //   alt: "Luxurious hair treatment ritual in spa setting",
//   // },
//   // {
//   //   id: 4,
//   //   image: heroGlam,
//   //   image: heroHairTreatments,
//   //   title: "Six Hands",
//   //   titleGradient: "Rituals",
//   //   alt: "Premium glamorous beauty styling and makeup services",
//   // },
// ];

// // Static content that stays visible
// const staticContent = {
//   description: "Kenya's first science-meets-beauty, luxury salon.",
//   mobileDescription: "Kenya's first science-meets-beauty, luxury salon.",
// };
// const phoneNumber = "254116444433";
// const encodedMessage = encodeURIComponent("Hello, I'd like to book an appointment");
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
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

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

//           <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
//             <div className="w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-3xl animate-fade-in">
//               <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
//                 {slide.title}
//                 <br />
//                 <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
//                   {slide.titleGradient}
//                 </span>
//               </h1>

//               {/* Desktop Description - Static content */}
//               <div className="hidden lg:block">
//                 <div className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
//                   {staticContent.description.split('\n\n').map((paragraph, index) => (
//                     <p key={index} className={index > 0 ? 'mt-4' : ''}>
//                       {paragraph}
//                     </p>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Mobile Description - Static content */}
//               <div className="lg:hidden">
//                 <div className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
//                   {staticContent.mobileDescription.split('\n\n').map((paragraph, index) => (
//                     <p key={index} className={index > 0 ? 'mt-4' : ''}>
//                       {paragraph}
//                     </p>
//                   ))}
//                 </div>
//               </div>

//               <div className="hidden md:flex flex-nowrap gap-2 sm:gap-4">
//                 <a
//                   href='https://avyasalon.zenoti.com/webstore'
//                   target="_blank"
                  
//                   className="bg-white hover:bg-[#595959] text-[#262626] hover:text-white w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
//                 > 
//                   BOOK APPOINTMENT
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default HeroSlider;
import { Button } from "@/components/ui/button";
import heroHairTreatments from "@/assets/DSC00026-Edit.jpg";
import mobilescreen from "@/assets/DSC00039-Edit.jpg";

const staticContent = {
  description: "Kenya's first science-meets-beauty, luxury salon.",
  mobileDescription: "Kenya's first science-meets-beauty, luxury salon.",
};

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden 
      /* Mobile: ~80vh → feels tall but not overwhelming 
         Tablet & up: full screen */ 
      h-[80vh] sm:h-[85vh] lg:h-screen
    ">
      {/* Responsive Background Images */}
      <div className="absolute inset-0 -z-10">
        {/* Mobile Image */}
        <img
          src={mobilescreen}
          alt="Avya Beauty Salon"
          className="w-full h-full object-cover lg:hidden"
        />
        {/* Desktop Image */}
        <img
          src={heroHairTreatments}
          alt="Avya Beauty Salon Interior"
          className="hidden lg:block w-full h-full object-cover"
        />
        {/* Dark gradient overlay (left → right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 
        h-full flex flex-col justify-end pb-8 sm:pb-12 lg:pb-16
      ">
        <div className="max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-white leading-tight">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
              Avya
            </span>
          </h1>

          {/* Description – hidden on very small screens if you want even more space */}
          <div className="mt-4 sm:mt-6">
            <p className="text-base sm:text-lg text-[#E2DBDF] font-light max-w-lg">
              {staticContent.mobileDescription}
            </p>
          </div>

          {/* Book Button – visible from md+ (you can change to sm+ if you want it on mobile too) */}
          <div className="mt-8 hidden md:block">
            <a
              href="https://avyasalon.zenoti.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center 
                w-[198px] h-14 bg-white hover:bg-[#595959] 
                text-[#262626] hover:text-white 
                text-sm tracking-wider rounded transition-all duration-300"
            >
              BOOK APPOINTMENT
            </a>
          </div>

          {/* Optional: Smaller CTA button for mobile */}
          <div className="mt-6 md:hidden">
            <a
              href="https://avyasalon.zenoti.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center 
                w-full max-w-[220px] h-12 bg-white hover:bg-[#595959] 
                text-[#262626] hover:text-white 
                text-sm tracking-wider rounded transition-all duration-300"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;