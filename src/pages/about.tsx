
// // // import { useState, useEffect, useRef } from "react";
// // // import heroTrichology from "@/assets/h3.png";
// // // import heroHairTreatments from "@/assets/h1.png";
// // // import heroGlam from "@/assets/h2.png";
// // // import img2 from "@/assets/h6.png";
// // // import img from "@/assets/h5.png";
// // // import img1 from "@/assets/h7.png";
// // // const Index = () => {
// // //   const [imageStates, setImageStates] = useState({
// // //     tricology: 0,
// // //     glam: 0,
// // //     longevity: 0,
// // //     exclusive: 0,
// // //     expert: 0,
// // //     special: 0,
// // //   });

// // //   const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
// // //   const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
// // //   const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
// // //   const images = {
// // //     tricology: [heroTrichology, heroHairTreatments],
// // //     glam: [heroGlam, img],
// // //     longevity: [heroTrichology, img1],
// // //     exclusive: [heroHairTreatments, img2],
// // //     expert: [img, heroGlam],
// // //     special: [img1, heroTrichology],
// // //   };

// // //   useEffect(() => {
// // //     const particleArray = Array.from({ length: 20 }, (_, i) => ({
// // //       id: i,
// // //       x: Math.random() * 100,
// // //       y: Math.random() * 100,
// // //       delay: Math.random() * 4,
// // //     }));
// // //     setParticles(particleArray);
// // //   }, []);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             setVisibleSections((prev) => new Set(prev).add(entry.target.id));
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
// // //     );
// // //     Object.values(sectionRefs.current).forEach((ref) => {
// // //       if (ref) observer.observe(ref);
// // //     });
// // //     return () => observer.disconnect();
// // //   }, []);

// // //   const handleMouseEnter = (key: string) => {
// // //     setImageStates((prev) => ({
// // //       ...prev,
// // //       [key]: (prev[key as keyof typeof prev] + 1) % images[key as keyof typeof images].length,
// // //     }));
// // //   };

// // //   const handleMouseLeave = (key: string) => {
// // //     setImageStates((prev) => ({
// // //       ...prev,
// // //       [key]: 0,
// // //     }));
// // //   };

// // //   const isVisible = (id: string) => visibleSections.has(id);
// // //   return (
// // //     <div className="min-h-screen bg-black font-sans relative overflow-hidden">
// // //       {/* Futuristic Grid Background */}
// // //       <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
// // //       {/* Floating Particles */}
// // //       {particles.map((particle) => (
// // //         <div
// // //           key={particle.id}
// // //           className="fixed w-1 h-1 bg-[#B0C2B0] rounded-full particle pointer-events-none"
// // //           style={{
// // //             left: `${particle.x}%`,
// // //             top: `${particle.y}%`,
// // //             animationDelay: `${particle.delay}s`,
// // //             opacity: 0.6,
// // //           }}
// // //         />
// // //       ))}

// // //       <section className="relative h-screen overflow-hidden bg-[#262626]">
// // //         {/* Scanline Effect (optional) */}
// // //         <div className="absolute inset-0 scanline pointer-events-none z-10" />
// // //         {/* Background Image */}
// // //         <div
// // //           className="absolute inset-0 bg-cover bg-center"
// // //           style={{
// // //             backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&h=1080&fit=crop')",
// // //             opacity: 0.7,
// // //           }}

// // //         >
// // //           {/* Dark overlay for better text contrast */}
// // //           <div className="absolute inset-0 bg-black/50" />
// // //         </div>

// // //         {/* Content */}

// // //         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">

// // //           <div className="max-w-4xl">
// // //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8">
// // //               <span className="w-2 h-2 rounded-full bg-[#B0C2B0] animate-pulse" />
// // //               <span className="text-sm tracking-wider text-white font-light font-montserrat">ABOUT US</span>
// // //             </div>

// // //             <h1 className="text-5xl md:text-7xl lg:text-8xl font-hatton font-light text-[#E2DBDF]  mb-6 leading-[1.1] tracking-tight animate-fade-in-up cyber-text">

// // //               Nairobi's Premier Longevity Beauty Salon

// // //             </h1>

// // //             <p className="text-lg md:text-xl text-[#C1B5C6] font-hatton mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>

// // //               Where Science Meets Beauty

// // //             </p>

// // //           </div>

// // //         </div>

// // //         {/* Data Stream Indicators (optional) */}

// // //         <div className="absolute right-8 top-1/4 space-y-4 opacity-40">

// // //           {[0, 1, 2].map((i) => (

// // //             <div

// // //               key={i}

// // //               className="w-px h-20 bg-gradient-to-b from-transparent via-[#B0C2B0] to-transparent data-stream"

// // //               style={{ animationDelay: `${i * 0.5}s` }}

// // //             />

// // //           ))}

// // //         </div>

// // //         {/* Scroll Indicator */}

// // //         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

// // //           <div className="relative">

// // //             <div className="absolute inset-0 blur-lg bg-[#B0C2B0] opacity-50 rounded-full" />

// // //             <svg className="w-6 h-6 text-white/60 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />

// // //             </svg>

// // //           </div>

// // //         </div>

// // //       </section>

      

// // //       <section

// // //         id="philosophy"

// // //         ref={(el) => (sectionRefs.current.philosophy = el)}

// // //         className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"

// // //       >

// // //         {/* Dark gradient background */}

// // //         <div className="absolute inset-0 bg-[#C1B5C6] from-black via-gray-900 to-black" />

// // //         {/* Hex pattern overlay */}

// // //         <div className="absolute inset-0 hex-pattern opacity-20" />

// // //         {/* Animated background elements with glow */}

// // //         <div

// // //           className="absolute top-20 right-20 w-96 h-96 bg-[#595959]/20 rounded-full blur-[100px] glow transition-opacity duration-1000 pulse-ring"

// // //           style={{

// // //             opacity: isVisible("philosophy") ? 1 : 0,

// // //             transitionDelay: "0.2s"

// // //           }}

// // //         />

// // //         <div

// // //           className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-[#E2DBDF]/10 rounded-full blur-[120px] glow-accent transition-opacity duration-1000 pulse-ring"

// // //           style={{

// // //             opacity: isVisible("philosophy") ? 1 : 0,

// // //             transitionDelay: "0.4s",

// // //             animationDelay: "1s"

// // //           }}

// // //         />

// // //         <div className="relative max-w-7xl mx-auto">

// // //           <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

// // //             {/* Text Content - Left Side */}

// // //             <div

// // //               className={`lg:w-1/2 space-y-8 lg:pr-12 transition-all duration-1000 ${

// // //                 isVisible("philosophy")

// // //                   ? "opacity-100 translate-x-0"

// // //                   : "opacity-0 -translate-x-12"

// // //               }`}

// // //             >

// // //               <div className="inline-flex items-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40">

// // //                 <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />

// // //                 <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-montserrat">Our Philosophy</span>

// // //               </div>

// // //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] leading-tight">

// // //                 Beauty is Science,<br />

// // //                 And Science is Personal

// // //               </h2>

// // //               <div className="w-24 h-px bg-gradient-to-r from-[#B0C2B0] to-[#595959] glow" />

// // //               <div className="space-y-4 text-[#595959]">

// // //                 <p className="text-xl leading-relaxed font-hatton">

// // //                   At Avya, beauty is science, and science is personal. We are Kenya's first salon dedicated to science-meets-beauty treatments, combining advanced technology, global techniques, and luxury beauty rituals. Whether you're seeking a transformative experience or simply in search of a high-performance beauty partner, we deliver real results in a space designed for comfort, wellness, and confidence.

// // //                 </p>

// // //               </div>

// // //             </div>

// // //             {/* Visual Element - Right Side */}

// // //             <div

// // //               className={`lg:w-1/2 relative transition-all duration-1000 delay-300 font-montserrat ${

// // //                 isVisible("philosophy")

// // //                   ? "opacity-100 translate-x-0"

// // //                   : "opacity-0 translate-x-12"

// // //               }`}

// // //             >

// // //               <div className="relative group">

// // //                 {/* Glowing frame effect */}

// // //                 <div className="absolute -inset-4 neon-border rounded-3xl blur-xl transition-all duration-700" />

// // //                 <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#595959]/30 glow">

// // //                   <img

// // //                     src={heroHairTreatments}

// // //                     alt="Beauty Treatment"

// // //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

// // //                   />

// // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

// // //                   {/* Holographic overlay */}

// // //                   <div className="absolute inset-0 holographic opacity-20 group-hover:opacity-30 transition-opacity" />

// // //                   {/* Corner accents */}

// // //                   <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#B0C2B0] glow" />

// // //                   <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#B0C2B0] glow" />

// // //                   <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#B0C2B0] glow" />

// // //                   <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#B0C2B0] glow" />

// // //                 </div>

// // //                 {/* Floating tech elements */}

// // //                 <div className="absolute -top-6 -right-6 w-20 h-20 border border-[#FFFFFF] rounded-full animate-spin-slow glow" />

// // //                 <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[#FFFFFF] rounded-lg rotate-45 animate-pulse glow-accent" />

// // //               </div>

// // //             </div>

// // //           </div>

// // //         </div>

// // //       </section>

// // //       <section

// // //         id="services"

// // //         ref={(el) => (sectionRefs.current.services = el)}

// // //         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#E2DBDF] relative overflow-hidden"

// // //       >

// // //         {/* Background effects */}

// // //         <div className="absolute top-20 right-0 w-96 h-96 bg-[#B0C2B0]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />

// // //         <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />

// // //         <div className="absolute inset-0 grid-bg opacity-10" style={{ backgroundColor: "#262626" }} />

// // //         <div className="max-w-7xl mx-auto relative">

// // //           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

// // //             <div className="inline-block px-6 py-3 border border-[#C1B5C6] rounded-full mb-6 backdrop-blur-xl bg-[#262626]/40">

// // //               <span className="text-xs tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">The Avya Difference</span>

// // //             </div>

// // //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] mb-6">

// // //               What Makes Avya <span>Different</span>

// // //             </h2>

// // //             <p className="text-lg text-[#595959] max-w-2xl font-hatton mx-auto">

// // //               Innovation, Expertise, and Care in Every Service

// // //             </p>

// // //           </div>

// // //           {/* Bento Grid */}

// // //           <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 ${isVisible("services") ? "animate-stagger" : ""}`}>

// // //             {/* Large Featured Card: Advanced Tricology */}

// // //             <div

// // //               className="md:col-span-4 md:row-span-2 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // //               onMouseEnter={() => handleMouseEnter("tricology")}


// // //               onMouseLeave={() => handleMouseLeave("tricology")}

// // //             >

// // //               <div className="absolute inset-0">

// // //                 <img

// // //                   src={images.tricology[imageStates.tricology]}

// // //                   alt="Advanced Tricology"

// // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // //                 />

// // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF] via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// // //               </div>

// // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // //               <div className="relative p-8 lg:p-12 h-full flex flex-col justify-end">

// // //                 <div className="mb-6 w-16 h-16 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">

// // //                   <svg className="w-8 h-8 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />

// // //                   </svg>

// // //                 </div>

// // //                 <h3 className="text-3xl lg:text-4xl font-hatton font-light text-[#C1B5C6] mb-4 transform group-hover:translate-x-2 transition-transform duration-300">

// // //                   Advanced Tricology

// // //                 </h3>

// // //                 <p className="text-base font-montserrat lg:text-lg leading-relaxed text-[#E2DBDF] max-w-xl transform group-hover:translate-x-2 transition-transform duration-300 delay-75">

// // //                   Evidence-based hair and scalp solutions using cutting-edge technology and scientific research.

// // //                 </p>

// // //               </div>

// // //             </div>

// // //             {/* Medium Card: Premium Glam */}

// // //             <div

// // //               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // //               onMouseEnter={() => handleMouseEnter("glam")}

// // //               onMouseLeave={() => handleMouseLeave("glam")}

// // //             >

// // //               <div className="absolute inset-0">

// // //                 <img

// // //                   src={images.glam[imageStates.glam]}

// // //                   alt="Premium Glam Services"

// // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // //                 />

// // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/40 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// // //               </div>

// // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // //               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">

// // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">

// // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />

// // //                   </svg>

// // //                 </div>

// // //                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-[#C1B5C6] mb-3">

// // //                   Premium Glam Services

// // //                 </h3>

// // //                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">

// // //                   Luxury hair, skin, and aesthetic treatments for transformative results.

// // //                 </p>

// // //               </div>

// // //             </div>

// // //             {/* Small Card: Longevity Focus */}

// // //             <div

// // //               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // //               onMouseEnter={() => handleMouseEnter("longevity")}

// // //               onMouseLeave={() => handleMouseLeave("longevity")}

// // //             >

// // //               <div className="absolute inset-0">

// // //                 <img

// // //                   src={images.longevity[imageStates.longevity]}

// // //                   alt="Longevity Focus"

// // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // //                 />

// // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/20 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// // //               </div>

// // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // //               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">

// // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">

// // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />

// // //                   </svg>

// // //                 </div>

// // //                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-[#C1B5C6] mb-3">

// // //                   Longevity Focus

// // //                 </h3>

// // //                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">

// // //                   Treatments that go beyond surface beauty, promoting wellness.

// // //                 </p>

// // //               </div>

// // //             </div>

// // //             {/* Medium Card: Exclusive Experience */}

// // //             <div

// // //               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // //               onMouseEnter={() => handleMouseEnter("exclusive")}

// // //               onMouseLeave={() => handleMouseLeave("exclusive")}

// // //             >

// // //               <div className="absolute inset-0">

// // //                 <img

// // //                   src={images.exclusive[imageStates.exclusive]}

// // //                   alt="Exclusive Experience"

// // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // //                 />

// // //                 <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/50 to-transparent group-hover:opacity-0 transition-opacity duration-700" />

// // //               </div>

// // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // //               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">

// // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">

// // //                   <svg className="w-6 h-6 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />

// // //                   </svg>

// // //                 </div>

// // //                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-[#C1B5C6] mb-3">

// // //                   Exclusive Experience

// // //                 </h3>

// // //                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">

// // //                   Aesthetics, appointments, and ambiance designed for those who demand the best.

// // //                 </p>

// // //               </div>

// // //             </div>

// // //             {/* Medium Card: Expert Care */}

// // //             <div

// // //               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // //               onMouseEnter={() => handleMouseEnter("expert")}

// // //               onMouseLeave={() => handleMouseLeave("expert")}

// // //             >

// // //               <div className="absolute inset-0">

// // //                 <img

// // //                   src={images.expert[imageStates.expert]}

// // //                   alt="Expert-Led Personalized Care"

// // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // //                 />

// // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/30 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// // //               </div>

// // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // //               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">

// // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">

// // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />

// // //                   </svg>

// // //                 </div>

// // //                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-[#C1B5C6] mb-3">

// // //                   Expert-Led Personalized Care

// // //                 </h3>

// // //                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">

// // //                   Every service is tailored by internationally trained experts who understand your unique needs.

// // //                 </p>

// // //               </div>

// // //             </div>

// // //             {/* Wide Card: Special Events */}

// // //             <div

// // //               className="md:col-span-6 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // //               onMouseEnter={() => handleMouseEnter("special")}

// // //               onMouseLeave={() => handleMouseLeave("special")}

// // //             >

// // //               <div className="absolute inset-0">

// // //                 <img

// // //                   src={images.special[imageStates.special]}

// // //                   alt="Special Pricing Events"

// // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-105 transition-all duration-700"

// // //                 />

// // //                 <div className="absolute inset-0 bg-gradient-to-r from-[#262626] via-[#E2DBDF]/10 to-[#262626]/50 group-hover:opacity-0 transition-opacity duration-700" />

// // //               </div>

// // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // //               <div className="relative p-6 lg:p-10 h-full min-h-[200px] flex items-center">

// // //                 <div className="flex items-center gap-6 lg:gap-8 max-w-4xl">

// // //                   <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">

// // //                     <svg className="w-8 lg:w-10 h-8 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

// // //                     </svg>

// // //                   </div>

// // //                   <div>

// // //                     <h3 className="text-2xl lg:text-3xl font-hatton font-light text-[#C1B5C6] mb-2">

// // //                       Special Pricing Events

// // //                     </h3>

// // //                     <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">

// // //                       Exclusive moments to enjoy your trusted treatments at special rates. Be part of our inner circle.

// // //                     </p>

// // //                   </div>

// // //                 </div>

// // //               </div>

// // //             </div>

// // //           </div>

// // //         </div>

// // //       </section>

// // //       {/* CTA Section: Join the Avya Circle */}

// // //       <section

// // //         id="cta"

// // //         ref={(el) => (sectionRefs.current.cta = el)}

// // //         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#262626] relative overflow-hidden"

// // //       >

// // //         {/* Background effects */}

// // //         <div className="absolute inset-0 bg-gradient-to-b from-[#262626] via-black to-[#262626] opacity-90" />

// // //         <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B0C2B0]/10 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: "6s" }} />

// // //         <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s", animationDelay: "2s" }} />

// // //         <div className="relative max-w-4xl mx-auto text-center transition-all duration-1000" style={{ opacity: isVisible("cta") ? 1 : 0, transform: isVisible("cta") ? "translate-y-0" : "translate-y-8" }}>

// // //           <div className="inline-flex items-center justify-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40 mb-8 mx-auto w-fit">

// // //             <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />

// // //             <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">Inner Circle</span>

// // //           </div>

// // //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-white mb-6 leading-tight cyber-text">

// // //             Join the <span className="text-gradient glow-accent">Avya Circle</span>

// // //           </h2>

// // //           <p className="text-lg md:text-xl text-[#B0C2B0] mb-10 max-w-2xl mx-auto leading-relaxed">

// // //             Unlock exclusive access to special events, personalized offers, and insider beauty science insights. Be part of our community of visionaries.

// // //           </p>

// // //           <button className="relative inline-block group">
// // //                 <a
// // //                   href="/contact#contact-form"
// // //                   className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors"
// // //                 > 
// // //                   BOOK APPOINTMENT
// // //                 </a>
// // //           </button>

// // //         </div>

// // //       </section>

// // //     </div>

// // //   );

// // // };

// // // export default Index;
// // import { useState, useEffect, useRef } from "react";
// // import heroTrichology from "@/assets/h3.png";
// // import heroHairTreatments from "@/assets/h1.png";
// // import heroGlam from "@/assets/h2.png";
// // import img2 from "@/assets/h6.png";
// // import img from "@/assets/h5.png";
// // import img1 from "@/assets/h7.png";
// // import img3 from "@/assets/op3.png";

// // const Index = () => {
// //   const [imageStates, setImageStates] = useState({
// //     tricology: 0,
// //     glam: 0,
// //     longevity: 0,
// //     exclusive: 0,
// //     expert: 0,
// //     special: 0,
// //   });

// //   const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
// //   const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
// //   const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
// //   const images = {
// //     tricology: [heroTrichology, heroHairTreatments],
// //     glam: [heroGlam, img],
// //     longevity: [heroTrichology, img1],
// //     exclusive: [heroHairTreatments, img2],
// //     expert: [img, heroGlam],
// //     special: [img1, heroTrichology],
// //   };

// //   useEffect(() => {
// //     const particleArray = Array.from({ length: 20 }, (_, i) => ({
// //       id: i,
// //       x: Math.random() * 100,
// //       y: Math.random() * 100,
// //       delay: Math.random() * 4,
// //     }));
// //     setParticles(particleArray);
// //   }, []);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setVisibleSections((prev) => new Set(prev).add(entry.target.id));
// //           }
// //         });
// //       },
// //       { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
// //     );
// //     Object.values(sectionRefs.current).forEach((ref) => {
// //       if (ref) observer.observe(ref);
// //     });
// //     return () => observer.disconnect();
// //   }, []);

// //   const handleMouseEnter = (key: string) => {
// //     setImageStates((prev) => ({
// //       ...prev,
// //       [key]: (prev[key as keyof typeof prev] + 1) % images[key as keyof typeof images].length,
// //     }));
// //   };

// //   const handleMouseLeave = (key: string) => {
// //     setImageStates((prev) => ({
// //       ...prev,
// //       [key]: 0,
// //     }));
// //   };

// //   const isVisible = (id: string) => visibleSections.has(id);
// //   return (
// //     <div className="min-h-screen bg-black font-sans relative overflow-hidden">
// //       {/* Futuristic Grid Background */}
// //       <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
// //       {/* Floating Particles */}
// //       {particles.map((particle) => (
// //         <div
// //           key={particle.id}
// //           className="fixed w-1 h-1 bg-[#B0C2B0] rounded-full particle pointer-events-none"
// //           style={{
// //             left: `${particle.x}%`,
// //             top: `${particle.y}%`,
// //             animationDelay: `${particle.delay}s`,
// //             opacity: 0.6,
// //           }}
// //         />
// //       ))}

// //       <section className="relative h-screen overflow-hidden bg-[#262626]">
// //         {/* Scanline Effect (optional) */}
// //         <div className="absolute inset-0 scanline pointer-events-none z-10" />
// //         {/* Background Image */}
// //         <div
// //           className="absolute inset-0 bg-cover bg-center"
// //           style={{
// //              backgroundImage: `url(${img3})`,
// //           }}

// //         >
// //           {/* Dark overlay for better text contrast */}
// //           <div className="absolute inset-0 bg-black/50" />
// //         </div>

// //         {/* Content */}

// //         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">

// //           <div className="max-w-4xl">
// //             {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8">
// //               <span className="w-2 h-2 rounded-full bg-[#B0C2B0] animate-pulse" />
// //               <span className="text-sm tracking-wider text-white font-light font-montserrat">ABOUT US</span>
// //             </div> */}

// //             {/* <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">

// //               Nairobi's Premier Longevity Beauty Salon

// //             </h1>

// //             <p className="text-lg md:text-xl text-[#C1B5C6] font-hatton mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>

// //               Where Science Meets Beauty

// //             </p> */}
// //             <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
// //               Nairobi's Premier Longevity
// //               <br />
// //               <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">Beauty Salon</span>
// //             </h1>
// //             <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
// //               Where Science Meets Beauty
// //             </p>

// //           </div>

// //         </div>

// //         {/* Data Stream Indicators (optional) */}

// //         <div className="absolute right-8 top-1/4 space-y-4 opacity-40">

// //           {[0, 1, 2].map((i) => (

// //             <div

// //               key={i}

// //               className="w-px h-20 bg-gradient-to-b from-transparent via-[#B0C2B0] to-transparent data-stream"

// //               style={{ animationDelay: `${i * 0.5}s` }}

// //             />

// //           ))}

// //         </div>

// //         {/* Scroll Indicator */}

// //         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

// //           <div className="relative">

// //             <div className="absolute inset-0 blur-lg bg-[#B0C2B0] opacity-50 rounded-full" />

// //             <svg className="w-6 h-6 text-white/60 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />

// //             </svg>

// //           </div>

// //         </div>

// //       </section>

      

// //       <section

// //         id="philosophy"

// //         ref={(el) => (sectionRefs.current.philosophy = el)}

// //         className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"

// //       >

// //         {/* Dark gradient background */}

// //         <div className="absolute inset-0 bg-[#C1B5C6] from-black via-gray-900 to-black" />

// //         {/* Hex pattern overlay */}

// //         <div className="absolute inset-0 hex-pattern opacity-20" />

// //         {/* Animated background elements with glow */}

// //         <div

// //           className="absolute top-20 right-20 w-96 h-96 bg-[#595959]/20 rounded-full blur-[100px] glow transition-opacity duration-1000 pulse-ring"

// //           style={{

// //             opacity: isVisible("philosophy") ? 1 : 0,

// //             transitionDelay: "0.2s"

// //           }}

// //         />

// //         <div

// //           className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-[#E2DBDF]/10 rounded-full blur-[120px] glow-accent transition-opacity duration-1000 pulse-ring"

// //           style={{

// //             opacity: isVisible("philosophy") ? 1 : 0,

// //             transitionDelay: "0.4s",

// //             animationDelay: "1s"

// //           }}

// //         />

// //         <div className="relative max-w-7xl mx-auto">

// //           <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

// //             {/* Text Content - Left Side */}

// //             <div

// //               className={`lg:w-1/2 space-y-8 lg:pr-12 transition-all duration-1000 ${

// //                 isVisible("philosophy")

// //                   ? "opacity-100 translate-x-0"

// //                   : "opacity-0 -translate-x-12"

// //               }`}

// //             >

// //               <div className="inline-flex items-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40">

// //                 <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />

// //                 <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-montserrat">Our Philosophy</span>

// //               </div>

// //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] leading-tight">

// //                 Beauty is Science,<br />

// //                 And Science is Personal

// //               </h2>

// //               <div className="w-24 h-px bg-gradient-to-r from-[#B0C2B0] to-[#595959] glow" />

// //               <div className="space-y-4 text-[#595959]">

// //                 <p className="text-xl leading-relaxed font-hatton">

// //                   At Avya, beauty is science, and science is personal. We are Kenya's first salon dedicated to science-meets-beauty treatments, combining advanced technology, global techniques, and luxury beauty rituals. Whether you're seeking a transformative experience or simply in search of a high-performance beauty partner, we deliver real results in a space designed for comfort, wellness, and confidence.

// //                 </p>

// //               </div>

// //             </div>

// //             {/* Visual Element - Right Side */}

// //             <div

// //               className={`lg:w-1/2 relative transition-all duration-1000 delay-300 font-montserrat ${

// //                 isVisible("philosophy")

// //                   ? "opacity-100 translate-x-0"

// //                   : "opacity-0 translate-x-12"

// //               }`}

// //             >

// //               <div className="relative group">

// //                 {/* Glowing frame effect */}

// //                 <div className="absolute -inset-4 neon-border rounded-3xl blur-xl transition-all duration-700" />

// //                 <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#595959]/30 glow">

// //                   <img

// //                     src={heroHairTreatments}

// //                     alt="Beauty Treatment"

// //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

// //                   />

// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

// //                   {/* Holographic overlay */}

// //                   <div className="absolute inset-0 holographic opacity-20 group-hover:opacity-30 transition-opacity" />

// //                   {/* Corner accents */}

// //                   <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#B0C2B0] glow" />

// //                   <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#B0C2B0] glow" />

// //                   <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#B0C2B0] glow" />

// //                   <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#B0C2B0] glow" />

// //                 </div>

// //                 {/* Floating tech elements */}

// //                 <div className="absolute -top-6 -right-6 w-20 h-20 border border-[#FFFFFF] rounded-full animate-spin-slow glow" />

// //                 <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[#FFFFFF] rounded-lg rotate-45 animate-pulse glow-accent" />

// //               </div>

// //             </div>

// //           </div>

// //         </div>

// //       </section>

// //       <section

// //         id="services"

// //         ref={(el) => (sectionRefs.current.services = el)}

// //         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden"

// //       >

// //         {/* Dark gradient background */}

// //         <div className="absolute inset-0 bg-[#C1B5C6] from-black via-gray-900 to-black" />

// //         {/* Hex pattern overlay */}

// //         <div className="absolute inset-0 hex-pattern opacity-20" />

// //         {/* Background effects */}

// //         <div className="absolute top-20 right-0 w-96 h-96 bg-[#B0C2B0]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />

// //         <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />

// //         <div className="absolute inset-0 grid-bg opacity-10" style={{ backgroundColor: "#262626" }} />

// //         <div className="max-w-7xl mx-auto relative">

// //           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

// //             <div className="inline-block px-6 py-3 border border-[#C1B5C6] rounded-full mb-6 backdrop-blur-xl bg-[#262626]/40">

// //               <span className="text-xs tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">The Avya Difference</span>

// //             </div>

// //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] mb-6">

// //               What Makes Avya <span>Different</span>

// //             </h2>

// //             <p className="text-lg text-[#595959] max-w-2xl font-hatton mx-auto">

// //               Innovation, Expertise, and Care in Every Service

// //             </p>

// //           </div>

// //           {/* Bento Grid */}

// //           <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 ${isVisible("services") ? "animate-stagger" : ""}`}>

// //             {/* Large Featured Card: Advanced Tricology */}

// //             <div

// //               className="md:col-span-4 md:row-span-2 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// //               onMouseEnter={() => handleMouseEnter("tricology")}


// //               onMouseLeave={() => handleMouseLeave("tricology")}

// //             >

// //               <div className="absolute inset-0">

// //                 <img

// //                   src={images.tricology[imageStates.tricology]}

// //                   alt="Advanced Tricology"

// //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// //                 />

// //                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF] via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// //               </div>

// //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// //               <div className="relative p-8 lg:p-12 h-full flex flex-col justify-end">

// //                 <div className="mb-6 w-16 h-16 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">

// //                   <svg className="w-8 h-8 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />

// //                   </svg>

// //                 </div>

// //                 <h3 className="text-3xl lg:text-4xl font-hatton font-light text-[#C1B5C6] mb-4 transform group-hover:translate-x-2 transition-transform duration-300">

// //                   Advanced Tricology

// //                 </h3>

// //                 <p className="text-base font-montserrat lg:text-lg leading-relaxed text-[#E2DBDF] max-w-xl transform group-hover:translate-x-2 transition-transform duration-300 delay-75">

// //                   Evidence-based hair and scalp solutions using cutting-edge technology and scientific research.

// //                 </p>

// //               </div>

// //             </div>

// //             {/* Medium Card: Premium Glam */}

// //             <div

// //               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// //               onMouseEnter={() => handleMouseEnter("glam")}

// //               onMouseLeave={() => handleMouseLeave("glam")}

// //             >

// //               <div className="absolute inset-0">

// //                 <img

// //                   src={images.glam[imageStates.glam]}

// //                   alt="Premium Glam Services"

// //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// //                 />

// //                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/40 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// //               </div>

// //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// //               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">

// //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">

// //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />

// //                   </svg>

// //                 </div>

// //                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-[#C1B5C6] mb-3">

// //                   Premium Glam Services

// //                 </h3>

// //                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">

// //                   Luxury hair, skin, and aesthetic treatments for transformative results.

// //                 </p>

// //               </div>

// //             </div>

// //             {/* Small Card: Longevity Focus */}

// //             <div

// //               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// //               onMouseEnter={() => handleMouseEnter("longevity")}

// //               onMouseLeave={() => handleMouseLeave("longevity")}

// //             >

// //               <div className="absolute inset-0">

// //                 <img

// //                   src={images.longevity[imageStates.longevity]}

// //                   alt="Longevity Focus"

// //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// //                 />

// //                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/20 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// //               </div>

// //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// //               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">

// //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">

// //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />

// //                   </svg>

// //                 </div>

// //                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-[#C1B5C6] mb-3">

// //                   Longevity Focus

// //                 </h3>

// //                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">

// //                   Treatments that go beyond surface beauty, promoting wellness.

// //                 </p>

// //               </div>

// //             </div>

// //             {/* Medium Card: Exclusive Experience */}

// //             <div

// //               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// //               onMouseEnter={() => handleMouseEnter("exclusive")}

// //               onMouseLeave={() => handleMouseLeave("exclusive")}

// //             >

// //               <div className="absolute inset-0">

// //                 <img

// //                   src={images.exclusive[imageStates.exclusive]}

// //                   alt="Exclusive Experience"

// //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// //                 />

// //                 <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/50 to-transparent group-hover:opacity-0 transition-opacity duration-700" />

// //               </div>

// //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// //               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">

// //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">

// //                   <svg className="w-6 h-6 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />

// //                   </svg>

// //                 </div>

// //                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-[#C1B5C6] mb-3">

// //                   Exclusive Experience

// //                 </h3>

// //                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">

// //                   Aesthetics, appointments, and ambiance designed for those who demand the best.

// //                 </p>

// //               </div>

// //             </div>

// //             {/* Medium Card: Expert Care */}

// //             <div

// //               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// //               onMouseEnter={() => handleMouseEnter("expert")}

// //               onMouseLeave={() => handleMouseLeave("expert")}

// //             >

// //               <div className="absolute inset-0">

// //                 <img

// //                   src={images.expert[imageStates.expert]}

// //                   alt="Expert-Led Personalized Care"

// //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// //                 />

// //                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/30 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// //               </div>

// //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// //               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">

// //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">

// //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />

// //                   </svg>

// //                 </div>

// //                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-[#C1B5C6] mb-3">

// //                   Expert-Led Personalized Care

// //                 </h3>

// //                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">

// //                   Every service is tailored by internationally trained experts who understand your unique needs.

// //                 </p>

// //               </div>

// //             </div>

// //             {/* Wide Card: Special Events */}

// //             <div

// //               className="md:col-span-6 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// //               onMouseEnter={() => handleMouseEnter("special")}

// //               onMouseLeave={() => handleMouseLeave("special")}

// //             >

// //               <div className="absolute inset-0">

// //                 <img

// //                   src={images.special[imageStates.special]}

// //                   alt="Special Pricing Events"

// //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-105 transition-all duration-700"

// //                 />

// //                 <div className="absolute inset-0 bg-gradient-to-r from-[#262626] via-[#E2DBDF]/10 to-[#262626]/50 group-hover:opacity-0 transition-opacity duration-700" />

// //               </div>

// //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// //               <div className="relative p-6 lg:p-10 h-full min-h-[200px] flex items-center">

// //                 <div className="flex items-center gap-6 lg:gap-8 max-w-4xl">

// //                   <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">

// //                     <svg className="w-8 lg:w-10 h-8 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

// //                     </svg>

// //                   </div>

// //                   <div>

// //                     <h3 className="text-2xl lg:text-3xl font-hatton font-light text-[#C1B5C6] mb-2">

// //                       Special Pricing Events

// //                     </h3>

// //                     <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">

// //                       Exclusive moments to enjoy your trusted treatments at special rates. Be part of our inner circle.

// //                     </p>

// //                   </div>

// //                 </div>

// //               </div>

// //             </div>

// //           </div>

// //         </div>

// //       </section>

// //       {/* CTA Section: Join the Avya Circle */}

// //       <section

// //         id="cta"

// //         ref={(el) => (sectionRefs.current.cta = el)}

// //         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#262626] relative overflow-hidden"

// //       >

// //         {/* Background effects */}

// //         <div className="absolute inset-0 bg-gradient-to-b from-[#262626] via-black to-[#262626] opacity-90" />

// //         <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B0C2B0]/10 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: "6s" }} />

// //         <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s", animationDelay: "2s" }} />

// //         <div className="relative max-w-4xl mx-auto text-center transition-all duration-1000" style={{ opacity: isVisible("cta") ? 1 : 0, transform: isVisible("cta") ? "translate-y-0" : "translate-y-8" }}>

// //           <div className="inline-flex items-center justify-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40 mb-8 mx-auto w-fit">

// //             <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />

// //             <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">Inner Circle</span>

// //           </div>

// //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-white mb-6 leading-tight cyber-text">

// //             Join the <span className="text-gradient glow-accent">Avya Circle</span>

// //           </h2>

// //           <p className="text-lg md:text-xl text-[#B0C2B0] mb-10 max-w-2xl mx-auto leading-relaxed">

// //             Unlock exclusive access to special events, personalized offers, and insider beauty science insights. Be part of our community of visionaries.

// //           </p>

// //           <button className="relative inline-block group">
// //                 <a
// //                   href="/contact#contact-form"
// //                   className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors"
// //                 > 
// //                   BOOK APPOINTMENT
// //                 </a>
// //           </button>

// //         </div>

// //       </section>

// //     </div>

// //   );

// // };

// // export default Index;
// import { useState, useEffect, useRef } from "react";
// import heroTrichology from "@/assets/h3.png";
// import heroHairTreatments from "@/assets/h1.png";
// import heroGlam from "@/assets/h2.png";
// import img2 from "@/assets/h6.png";
// import img from "@/assets/h5.png";
// import img1 from "@/assets/h7.png";
// import img3 from "@/assets/op3.png";

// const Index = () => {
//   const [imageStates, setImageStates] = useState({
//     tricology: 0,
//     glam: 0,
//     longevity: 0,
//     exclusive: 0,
//     expert: 0,
//     special: 0,
//   });

//   const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
//   const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
//   const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

//   const images = {
//     tricology: [heroTrichology, heroHairTreatments],
//     glam: [heroGlam, img],
//     longevity: [heroTrichology, img1],
//     exclusive: [heroHairTreatments, img2],
//     expert: [img, heroGlam],
//     special: [img1, heroTrichology],
//   };

//   useEffect(() => {
//     const particleArray = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       delay: Math.random() * 4,
//     }));
//     setParticles(particleArray);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleSections((prev) => new Set(prev).add(entry.target.id));
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
//     );
//     Object.values(sectionRefs.current).forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });
//     return () => observer.disconnect();
//   }, []);

//   const handleMouseEnter = (key: string) => {
//     setImageStates((prev) => ({
//       ...prev,
//       [key]: (prev[key as keyof typeof prev] + 1) % images[key as keyof typeof images].length,
//     }));
//   };

//   const handleMouseLeave = (key: string) => {
//     setImageStates((prev) => ({
//       ...prev,
//       [key]: 0,
//     }));
//   };

//   const isVisible = (id: string) => visibleSections.has(id);

//   return (
//     <div className="min-h-screen bg-[#E2DBDF] font-sans relative overflow-hidden">
//       {/* Futuristic Grid Background */}
//       <div className="fixed inset-0 grid-bg opacity-10 pointer-events-none" />

//       {/* Floating Particles */}
//       {particles.map((particle) => (
//         <div
//           key={particle.id}
//           className="fixed w-1 h-1 bg-[#B0C2B0] rounded-full particle pointer-events-none"
//           style={{
//             left: `${particle.x}%`,
//             top: `${particle.y}%`,
//             animationDelay: `${particle.delay}s`,
//             opacity: 0.4,
//           }}
//         />
//       ))}

//       {/* Hero Section */}
//       <section className="relative h-screen overflow-hidden bg-[#262626]">
//         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}>
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
//           <div className="max-w-4xl">
//             <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
//               Nairobi's Premier Longevity
//               <br />
//               <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
//                 Beauty Salon
//               </span>
//             </h1>
//             <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
//               Where Science Meets Beauty
//             </p>
//           </div>
//         </div>
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
//           <div className="relative">
//             <div className="absolute inset-0 blur-lg bg-[#B0C2B0] opacity-50 rounded-full" />
//             <svg
//               className="w-6 h-6 text-white/60 relative z-10"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               />
//             </svg>
//           </div>
//         </div>
//       </section>

//       {/* Philosophy Section */}
//       <section
//         id="philosophy"
//         ref={(el) => (sectionRefs.current.philosophy = el)}
//         className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#262626]"
//       >
//         <div className="absolute inset-0 hex-pattern opacity-10" />
//         <div
//           className="absolute top-20 right-20 w-96 h-96 bg-[#595959]/20 rounded-full blur-[100px] glow transition-opacity duration-1000 pulse-ring"
//           style={{ opacity: isVisible("philosophy") ? 1 : 0, transitionDelay: "0.2s" }}
//         />
//         <div
//           className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-[#E2DBDF]/10 rounded-full blur-[120px] glow-accent transition-opacity duration-1000 pulse-ring"
//           style={{ opacity: isVisible("philosophy") ? 1 : 0, transitionDelay: "0.4s", animationDelay: "1s" }}
//         />
//         <div className="relative max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
//             <div
//               className={`lg:w-1/2 space-y-8 lg:pr-12 transition-all duration-1000 ${
//                 isVisible("philosophy") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
//               }`}
//             >
//               <div className="inline-flex items-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40">
//                 <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />
//                 <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-montserrat">
//                   Our Philosophy
//                 </span>
//               </div>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-white leading-tight">
//                 Beauty is Science,
//                 <br />
//                 And Science is Personal
//               </h2>
//               <div className="w-24 h-px bg-gradient-to-r from-[#B0C2B0] to-[#595959] glow" />
//               <div className="space-y-4 text-[#E2DBDF]">
//                 <p className="text-xl leading-relaxed font-hatton">
//                   At Avya, beauty is science, and science is personal. We are Kenya's first salon dedicated to
//                   science-meets-beauty treatments, combining advanced technology, global techniques, and luxury beauty
//                   rituals. Whether you're seeking a transformative experience or simply in search of a high-performance
//                   beauty partner, we deliver real results in a space designed for comfort, wellness, and confidence.
//                 </p>
//               </div>
//             </div>
//             <div
//               className={`lg:w-1/2 relative transition-all duration-1000 delay-300 font-montserrat ${
//                 isVisible("philosophy") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
//               }`}
//             >
//               <div className="relative group">
//                 <div className="absolute -inset-4 neon-border rounded-3xl blur-xl transition-all duration-700" />
//                 <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#595959]/30 glow">
//                   <img
//                     src={heroHairTreatments}
//                     alt="Beauty Treatment"
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//                   <div className="absolute inset-0 holographic opacity-20 group-hover:opacity-30 transition-opacity" />
//                   <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#B0C2B0] glow" />
//                   <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#B0C2B0] glow" />
//                   <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#B0C2B0] glow" />
//                   <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#B0C2B0] glow" />
//                 </div>
//                 <div className="absolute -top-6 -right-6 w-20 h-20 border border-[#FFFFFF] rounded-full animate-spin-slow glow" />
//                 <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[#FFFFFF] rounded-lg rotate-45 animate-pulse glow-accent" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section
//         id="services"
//         ref={(el) => (sectionRefs.current.services = el)}
//         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#262626]"
//       >
//         <div className="absolute inset-0 hex-pattern opacity-10" />
//         <div className="absolute top-20 right-0 w-96 h-96 bg-[#B0C2B0]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />
//         <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
//         <div className="max-w-7xl mx-auto relative">
//           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//             <div className="inline-block px-6 py-3 border border-[#C1B5C6] rounded-full mb-6 backdrop-blur-xl bg-[#262626]/40">
//               <span className="text-xs tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">
//                 The Avya Difference
//               </span>
//             </div>
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-white mb-6">
//               What Makes Avya <span>Different</span>
//             </h2>
//             <p className="text-lg text-[#E2DBDF] max-w-2xl font-hatton mx-auto">
//               Innovation, Expertise, and Care in Every Service
//             </p>
//           </div>
//           <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 ${isVisible("services") ? "animate-stagger" : ""}`}>
//             {/* Large Featured Card: Advanced Tricology */}
//             <div
//               className="md:col-span-4 md:row-span-2 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
//               onMouseEnter={() => handleMouseEnter("tricology")}
//               onMouseLeave={() => handleMouseLeave("tricology")}
//             >
//               <div className="absolute inset-0">
//                 <img
//                   src={images.tricology[imageStates.tricology]}
//                   alt="Advanced Tricology"
//                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF] via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
//               </div>
//               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//               <div className="relative p-8 lg:p-12 h-full flex flex-col justify-end">
//                 <div className="mb-6 w-16 h-16 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
//                   <svg className="w-8 h-8 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-3xl lg:text-4xl font-hatton font-light text-white mb-4 transform group-hover:translate-x-2 transition-transform duration-300">
//                   Advanced Tricology
//                 </h3>
//                 <p className="text-base font-montserrat lg:text-lg leading-relaxed text-[#E2DBDF] max-w-xl transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
//                   Evidence-based hair and scalp solutions using cutting-edge technology and scientific research.
//                 </p>
//               </div>
//             </div>

//             {/* Medium Card: Premium Glam */}
//             <div
//               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
//               onMouseEnter={() => handleMouseEnter("glam")}
//               onMouseLeave={() => handleMouseLeave("glam")}
//             >
//               <div className="absolute inset-0">
//                 <img
//                   src={images.glam[imageStates.glam]}
//                   alt="Premium Glam Services"
//                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/40 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
//               </div>
//               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">
//                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-white mb-3">
//                   Premium Glam Services
//                 </h3>
//                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">
//                   Luxury hair, skin, and aesthetic treatments for transformative results.
//                 </p>
//               </div>
//             </div>

//             {/* Small Card: Longevity Focus */}
//             <div
//               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
//               onMouseEnter={() => handleMouseEnter("longevity")}
//               onMouseLeave={() => handleMouseLeave("longevity")}
//             >
//               <div className="absolute inset-0">
//                 <img
//                   src={images.longevity[imageStates.longevity]}
//                   alt="Longevity Focus"
//                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/20 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
//               </div>
//               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">
//                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-white mb-3">
//                   Longevity Focus
//                 </h3>
//                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">
//                   Treatments that go beyond surface beauty, promoting wellness.
//                 </p>
//               </div>
//             </div>

//             {/* Medium Card: Exclusive Experience */}
//             <div
//               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
//               onMouseEnter={() => handleMouseEnter("exclusive")}
//               onMouseLeave={() => handleMouseLeave("exclusive")}
//             >
//               <div className="absolute inset-0">
//                 <img
//                   src={images.exclusive[imageStates.exclusive]}
//                   alt="Exclusive Experience"
//                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/50 to-transparent group-hover:opacity-0 transition-opacity duration-700" />
//               </div>
//               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">
//                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
//                   <svg className="w-6 h-6 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-white mb-3">
//                   Exclusive Experience
//                 </h3>
//                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">
//                   Aesthetics, appointments, and ambiance designed for those who demand the best.
//                 </p>
//               </div>
//             </div>

//             {/* Medium Card: Expert Care */}
//             <div
//               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
//               onMouseEnter={() => handleMouseEnter("expert")}
//               onMouseLeave={() => handleMouseLeave("expert")}
//             >
//               <div className="absolute inset-0">
//                 <img
//                   src={images.expert[imageStates.expert]}
//                   alt="Expert-Led Personalized Care"
//                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/30 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
//               </div>
//               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">
//                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-white mb-3">
//                   Expert-Led Personalized Care
//                 </h3>
//                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">
//                   Every service is tailored by internationally trained experts who understand your unique needs.
//                 </p>
//               </div>
//             </div>

//             {/* Wide Card: Special Events */}
//             <div
//               className="md:col-span-6 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
//               onMouseEnter={() => handleMouseEnter("special")}
//               onMouseLeave={() => handleMouseLeave("special")}
//             >
//               <div className="absolute inset-0">
//                 <img
//                   src={images.special[imageStates.special]}
//                   alt="Special Pricing Events"
//                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-105 transition-all duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#262626] via-[#E2DBDF]/10 to-[#262626]/50 group-hover:opacity-0 transition-opacity duration-700" />
//               </div>
//               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//               <div className="relative p-6 lg:p-10 h-full min-h-[200px] flex items-center">
//                 <div className="flex items-center gap-6 lg:gap-8 max-w-4xl">
//                   <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
//                     <svg className="w-8 lg:w-10 h-8 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-2xl lg:text-3xl font-hatton font-light text-white mb-2">
//                       Special Pricing Events
//                     </h3>
//                     <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">
//                       Exclusive moments to enjoy your trusted treatments at special rates. Be part of our inner circle.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section
//         id="cta"
//         ref={(el) => (sectionRefs.current.cta = el)}
//         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#262626] relative overflow-hidden"
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-[#262626] via-black to-[#262626] opacity-90" />
//         <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B0C2B0]/10 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: "6s" }} />
//         <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s", animationDelay: "2s" }} />
//         <div className="relative max-w-4xl mx-auto text-center transition-all duration-1000" style={{ opacity: isVisible("cta") ? 1 : 0, transform: isVisible("cta") ? "translate-y-0" : "translate-y-8" }}>
//           <div className="inline-flex items-center justify-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40 mb-8 mx-auto w-fit">
//             <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />
//             <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">
//               Inner Circle
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-white mb-6 leading-tight cyber-text">
//             Join the <span className="text-gradient glow-accent">Avya Circle</span>
//           </h2>
//           <p className="text-lg md:text-xl text-[#B0C2B0] mb-10 max-w-2xl mx-auto leading-relaxed">
//             Unlock exclusive access to special events, personalized offers, and insider beauty science insights. Be part of our community of visionaries.
//           </p>
//           <button className="relative inline-block group">
//             <a
//               href="/contact#contact-form"
//               className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors"
//             >
//               BOOK APPOINTMENT
//             </a>
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Index;
import { useState, useEffect, useRef } from "react";
import heroTrichology from "@/assets/h3.png";
import heroHairTreatments from "@/assets/h1.png";
import heroGlam from "@/assets/h2.png";
import img2 from "@/assets/h6.png";
import img from "@/assets/h5.png";
import img1 from "@/assets/h7.png";
import img3 from "@/assets/op3.png";

const Index = () => {
  const [imageStates, setImageStates] = useState({
    tricology: 0,
    glam: 0,
    longevity: 0,
    exclusive: 0,
    expert: 0,
    special: 0,
  });
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  const images = {
    tricology: [heroTrichology, heroHairTreatments],
    glam: [heroGlam, img],
    longevity: [heroTrichology, img1],
    exclusive: [heroHairTreatments, img2],
    expert: [img, heroGlam],
    special: [img1, heroTrichology],
  };

  useEffect(() => {
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }));
    setParticles(particleArray);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (key: string) => {
    setImageStates((prev) => ({
      ...prev,
      [key]: (prev[key as keyof typeof prev] + 1) % images[key as keyof typeof images].length,
    }));
  };

  const handleMouseLeave = (key: string) => {
    setImageStates((prev) => ({
      ...prev,
      [key]: 0,
    }));
  };

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-[#E2DBDF] font-sans relative overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="fixed inset-0 grid-bg opacity-10 pointer-events-none" />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-1 h-1 bg-[#B0C2B0] rounded-full particle pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            opacity: 0.4,
          }}
        />
      ))}

      {/* Hero Section (kept dark for contrast) */}
      <section className="relative h-screen overflow-hidden bg-[#262626]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
              Nairobi's Premier Longevity
              <br />
              <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
                Beauty Salon
              </span>
            </h1>
            <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
              Where Science Meets Beauty
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="relative">
            <div className="absolute inset-0 blur-lg bg-[#B0C2B0] opacity-50 rounded-full" />
            <svg
              className="w-6 h-6 text-white/60 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        id="philosophy"
        ref={(el) => (sectionRefs.current.philosophy = el)}
        className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#E2DBDF]"
      >
        <div className="absolute inset-0 hex-pattern opacity-10" />
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-[#595959]/20 rounded-full blur-[100px] glow transition-opacity duration-1000 pulse-ring"
          style={{ opacity: isVisible("philosophy") ? 1 : 0, transitionDelay: "0.2s" }}
        />
        <div
          className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-[#B0C2B0]/10 rounded-full blur-[120px] glow-accent transition-opacity duration-1000 pulse-ring"
          style={{ opacity: isVisible("philosophy") ? 1 : 0, transitionDelay: "0.4s", animationDelay: "1s" }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
            <div
              className={`lg:w-1/2 space-y-8 lg:pr-12 transition-all duration-1000 ${
                isVisible("philosophy") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="inline-flex items-start gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40">
                <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />
                <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-montserrat">
                  Our Philosophy
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] leading-tight">
                Beauty is Science,
                <br />
                And Science is Personal
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-[#B0C2B0] to-[#595959] glow" />
              <div className="space-y-4 text-[#262626]">
                <p className="text-xl leading-relaxed font-hatton">
                  At Avya, beauty is science, and science is personal. We are Kenya's first salon dedicated to
                  science-meets-beauty treatments, combining advanced technology, global techniques, and luxury beauty
                  rituals. Whether you're seeking a transformative experience or simply in search of a high-performance
                  beauty partner, we deliver real results in a space designed for comfort, wellness, and confidence.
                </p>
              </div>
            </div>
            <div
              className={`lg:w-1/2 relative transition-all duration-1000 delay-300 font-montserrat ${
                isVisible("philosophy") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 neon-border rounded-3xl blur-xl transition-all duration-700" />
                <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#595959]/30 glow">
                  <img
                    src={heroHairTreatments}
                    alt="Beauty Treatment"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 holographic opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#B0C2B0] glow" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#B0C2B0] glow" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#B0C2B0] glow" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#B0C2B0] glow" />
                </div>
                <div className="absolute -top-6 -right-6 w-20 h-20 border border-[#FFFFFF] rounded-full animate-spin-slow glow" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[#FFFFFF] rounded-lg rotate-45 animate-pulse glow-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={(el) => (sectionRefs.current.services = el)}
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#E2DBDF]"
      >
        <div className="absolute inset-0 hex-pattern opacity-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#B0C2B0]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
        <div className="max-w-7xl mx-auto relative">
          <div className={`text-start mb-16 transition-all duration-1000 ${isVisible("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-block px-6 py-3 border border-[#C1B5C6] rounded-full mb-6 backdrop-blur-xl bg-[#262626]/40">
              <span className="text-xs tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">
                The Avya Difference
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] mb-6">
              What Makes Avya <span>Different</span>
            </h2>
            <p className="text-lg text-[#262626]  font-hatton mx-auto">
              Innovation, Expertise, and Care in Every Service
            </p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 ${isVisible("services") ? "animate-stagger" : ""}`}>
            {/* Large Featured Card: Advanced Tricology */}
            <div
              className="md:col-span-4 md:row-span-2 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
              onMouseEnter={() => handleMouseEnter("tricology")}
              onMouseLeave={() => handleMouseLeave("tricology")}
            >
              <div className="absolute inset-0">
                <img
                  src={images.tricology[imageStates.tricology]}
                  alt="Advanced Tricology"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF] via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
              </div>
              <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative p-8 lg:p-12 h-full flex flex-col justify-end">
                <div className="mb-6 w-16 h-16 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl lg:text-4xl font-hatton font-light text-white mb-4 transform group-hover:translate-x-2 transition-transform duration-300">
                  Advanced Tricology
                </h3>
                <p className="text-base font-montserrat lg:text-lg leading-relaxed text-[#E2DBDF] max-w-xl transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                  Evidence-based hair and scalp solutions using cutting-edge technology and scientific research.
                </p>
              </div>
            </div>
            {/* Medium Card: Premium Glam */}
            <div
              className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
              onMouseEnter={() => handleMouseEnter("glam")}
              onMouseLeave={() => handleMouseLeave("glam")}
            >
              <div className="absolute inset-0">
                <img
                  src={images.glam[imageStates.glam]}
                  alt="Premium Glam Services"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/40 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
              </div>
              <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">
                <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-hatton font-light text-white mb-3">
                  Premium Glam Services
                </h3>
                <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">
                  Luxury hair, skin, and aesthetic treatments for transformative results.
                </p>
              </div>
            </div>
            {/* Small Card: Longevity Focus */}
            <div
              className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
              onMouseEnter={() => handleMouseEnter("longevity")}
              onMouseLeave={() => handleMouseLeave("longevity")}
            >
              <div className="absolute inset-0">
                <img
                  src={images.longevity[imageStates.longevity]}
                  alt="Longevity Focus"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/20 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
              </div>
              <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">
                <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-hatton font-light text-white mb-3">
                  Longevity Focus
                </h3>
                <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">
                  Treatments that go beyond surface beauty, promoting wellness.
                </p>
              </div>
            </div>
            {/* Medium Card: Exclusive Experience */}
            <div
              className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
              onMouseEnter={() => handleMouseEnter("exclusive")}
              onMouseLeave={() => handleMouseLeave("exclusive")}
            >
              <div className="absolute inset-0">
                <img
                  src={images.exclusive[imageStates.exclusive]}
                  alt="Exclusive Experience"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/50 to-transparent group-hover:opacity-0 transition-opacity duration-700" />
              </div>
              <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">
                <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-hatton font-light text-white mb-3">
                  Exclusive Experience
                </h3>
                <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">
                  Aesthetics, appointments, and ambiance designed for those who demand the best.
                </p>
              </div>
            </div>
            {/* Medium Card: Expert Care */}
            <div
              className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
              onMouseEnter={() => handleMouseEnter("expert")}
              onMouseLeave={() => handleMouseLeave("expert")}
            >
              <div className="absolute inset-0">
                <img
                  src={images.expert[imageStates.expert]}
                  alt="Expert-Led Personalized Care"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/30 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
              </div>
              <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">
                <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-hatton font-light text-white mb-3">
                  Expert-Led Personalized Care
                </h3>
                <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">
                  Every service is tailored by internationally trained experts who understand your unique needs.
                </p>
              </div>
            </div>
            {/* Wide Card: Special Events */}
            <div
              className="md:col-span-6 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
              onMouseEnter={() => handleMouseEnter("special")}
              onMouseLeave={() => handleMouseLeave("special")}
            >
              <div className="absolute inset-0">
                <img
                  src={images.special[imageStates.special]}
                  alt="Special Pricing Events"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#262626] via-[#E2DBDF]/10 to-[#262626]/50 group-hover:opacity-0 transition-opacity duration-700" />
              </div>
              <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative p-6 lg:p-10 h-full min-h-[200px] flex items-center">
                <div className="flex items-center gap-6 lg:gap-8 max-w-4xl">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg className="w-8 lg:w-10 h-8 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-hatton font-light text-white mb-2">
                      Special Pricing Events
                    </h3>
                    <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">
                      Exclusive moments to enjoy your trusted treatments at special rates. Be part of our inner circle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        ref={(el) => (sectionRefs.current.cta = el)}
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#E2DBDF] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#E2DBDF] via-white to-[#E2DBDF] opacity-90" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B0C2B0]/10 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s", animationDelay: "2s" }} />
        <div className="relative max-w-4xl mx-auto text-center transition-all duration-1000" style={{ opacity: isVisible("cta") ? 1 : 0, transform: isVisible("cta") ? "translate-y-0" : "translate-y-8" }}>
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40 mb-8 mx-auto w-fit">
            <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />
            <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">
              Inner Circle
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] mb-6 leading-tight cyber-text">
            Join the <span className="text-gradient glow-accent">Avya Circle</span>
          </h2>
          <p className="text-lg md:text-xl text-[#262626] mb-10 max-w-2xl mx-auto leading-relaxed">
            Unlock exclusive access to special events, personalized offers, and insider beauty science insights. Be part of our community of visionaries.
          </p>
          <button className="relative inline-block group">
            <a
              href="/contact#contact-form"
              className="bg-[#262626] hover:bg-[#595959] text-[#E2DBDF] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors"
            >
              Join Circle
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
