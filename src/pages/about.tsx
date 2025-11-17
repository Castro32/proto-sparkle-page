
// // // // // // // // // // // // // // import { useState, useEffect, useRef } from "react";
// // // // // // // // // // // // // // import heroTrichology from "@/assets/h3.png";
// // // // // // // // // // // // // // import heroHairTreatments from "@/assets/h1.png";
// // // // // // // // // // // // // // import heroGlam from "@/assets/h2.png";
// // // // // // // // // // // // // // import img2 from "@/assets/h6.png";
// // // // // // // // // // // // // // import img from "@/assets/h5.png";
// // // // // // // // // // // // // // import img1 from "@/assets/h7.png";
// // // // // // // // // // // // // // const Index = () => {
// // // // // // // // // // // // // //   const [imageStates, setImageStates] = useState({
// // // // // // // // // // // // // //     tricology: 0,
// // // // // // // // // // // // // //     glam: 0,
// // // // // // // // // // // // // //     longevity: 0,
// // // // // // // // // // // // // //     exclusive: 0,
// // // // // // // // // // // // // //     expert: 0,
// // // // // // // // // // // // // //     special: 0,
// // // // // // // // // // // // // //   });

// // // // // // // // // // // // // //   const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
// // // // // // // // // // // // // //   const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
// // // // // // // // // // // // // //   const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
// // // // // // // // // // // // // //   const images = {
// // // // // // // // // // // // // //     tricology: [heroTrichology, heroHairTreatments],
// // // // // // // // // // // // // //     glam: [heroGlam, img],
// // // // // // // // // // // // // //     longevity: [heroTrichology, img1],
// // // // // // // // // // // // // //     exclusive: [heroHairTreatments, img2],
// // // // // // // // // // // // // //     expert: [img, heroGlam],
// // // // // // // // // // // // // //     special: [img1, heroTrichology],
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const particleArray = Array.from({ length: 20 }, (_, i) => ({
// // // // // // // // // // // // // //       id: i,
// // // // // // // // // // // // // //       x: Math.random() * 100,
// // // // // // // // // // // // // //       y: Math.random() * 100,
// // // // // // // // // // // // // //       delay: Math.random() * 4,
// // // // // // // // // // // // // //     }));
// // // // // // // // // // // // // //     setParticles(particleArray);
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // // // // //       (entries) => {
// // // // // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // // // // //             setVisibleSections((prev) => new Set(prev).add(entry.target.id));
// // // // // // // // // // // // // //           }
// // // // // // // // // // // // // //         });
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //       { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // //     Object.values(sectionRefs.current).forEach((ref) => {
// // // // // // // // // // // // // //       if (ref) observer.observe(ref);
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //     return () => observer.disconnect();
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   const handleMouseEnter = (key: string) => {
// // // // // // // // // // // // // //     setImageStates((prev) => ({
// // // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // // //       [key]: (prev[key as keyof typeof prev] + 1) % images[key as keyof typeof images].length,
// // // // // // // // // // // // // //     }));
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleMouseLeave = (key: string) => {
// // // // // // // // // // // // // //     setImageStates((prev) => ({
// // // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // // //       [key]: 0,
// // // // // // // // // // // // // //     }));
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const isVisible = (id: string) => visibleSections.has(id);
// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="min-h-screen bg-black font-sans relative overflow-hidden">
// // // // // // // // // // // // // //       {/* Futuristic Grid Background */}
// // // // // // // // // // // // // //       <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
// // // // // // // // // // // // // //       {/* Floating Particles */}
// // // // // // // // // // // // // //       {particles.map((particle) => (
// // // // // // // // // // // // // //         <div
// // // // // // // // // // // // // //           key={particle.id}
// // // // // // // // // // // // // //           className="fixed w-1 h-1 bg-[#B0C2B0] rounded-full particle pointer-events-none"
// // // // // // // // // // // // // //           style={{
// // // // // // // // // // // // // //             left: `${particle.x}%`,
// // // // // // // // // // // // // //             top: `${particle.y}%`,
// // // // // // // // // // // // // //             animationDelay: `${particle.delay}s`,
// // // // // // // // // // // // // //             opacity: 0.6,
// // // // // // // // // // // // // //           }}
// // // // // // // // // // // // // //         />
// // // // // // // // // // // // // //       ))}

// // // // // // // // // // // // // //       <section className="relative h-screen overflow-hidden bg-[#262626]">
// // // // // // // // // // // // // //         {/* Scanline Effect (optional) */}
// // // // // // // // // // // // // //         <div className="absolute inset-0 scanline pointer-events-none z-10" />
// // // // // // // // // // // // // //         {/* Background Image */}
// // // // // // // // // // // // // //         <div
// // // // // // // // // // // // // //           className="absolute inset-0 bg-cover bg-center"
// // // // // // // // // // // // // //           style={{
// // // // // // // // // // // // // //             backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&h=1080&fit=crop')",
// // // // // // // // // // // // // //             opacity: 0.7,
// // // // // // // // // // // // // //           }}

// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           {/* Dark overlay for better text contrast */}
// // // // // // // // // // // // // //           <div className="absolute inset-0 bg-black/50" />
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Content */}

// // // // // // // // // // // // // //         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">

// // // // // // // // // // // // // //           <div className="max-w-4xl">
// // // // // // // // // // // // // //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8">
// // // // // // // // // // // // // //               <span className="w-2 h-2 rounded-full bg-[#B0C2B0] animate-pulse" />
// // // // // // // // // // // // // //               <span className="text-sm tracking-wider text-white font-light font-montserrat">ABOUT US</span>
// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             <h1 className="text-5xl md:text-7xl lg:text-8xl font-hatton font-light text-[#E2DBDF]  mb-6 leading-[1.1] tracking-tight animate-fade-in-up cyber-text">

// // // // // // // // // // // // // //               Nairobi's Premier Longevity Beauty Salon

// // // // // // // // // // // // // //             </h1>

// // // // // // // // // // // // // //             <p className="text-lg md:text-xl text-[#C1B5C6] font-hatton mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>

// // // // // // // // // // // // // //               Where Science Meets Beauty

// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Data Stream Indicators (optional) */}

// // // // // // // // // // // // // //         <div className="absolute right-8 top-1/4 space-y-4 opacity-40">

// // // // // // // // // // // // // //           {[0, 1, 2].map((i) => (

// // // // // // // // // // // // // //             <div

// // // // // // // // // // // // // //               key={i}

// // // // // // // // // // // // // //               className="w-px h-20 bg-gradient-to-b from-transparent via-[#B0C2B0] to-transparent data-stream"

// // // // // // // // // // // // // //               style={{ animationDelay: `${i * 0.5}s` }}

// // // // // // // // // // // // // //             />

// // // // // // // // // // // // // //           ))}

// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Scroll Indicator */}

// // // // // // // // // // // // // //         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

// // // // // // // // // // // // // //           <div className="relative">

// // // // // // // // // // // // // //             <div className="absolute inset-0 blur-lg bg-[#B0C2B0] opacity-50 rounded-full" />

// // // // // // // // // // // // // //             <svg className="w-6 h-6 text-white/60 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />

// // // // // // // // // // // // // //             </svg>

// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //       </section>

      

// // // // // // // // // // // // // //       <section

// // // // // // // // // // // // // //         id="philosophy"

// // // // // // // // // // // // // //         ref={(el) => (sectionRefs.current.philosophy = el)}

// // // // // // // // // // // // // //         className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"

// // // // // // // // // // // // // //       >

// // // // // // // // // // // // // //         {/* Dark gradient background */}

// // // // // // // // // // // // // //         <div className="absolute inset-0 bg-[#C1B5C6] from-black via-gray-900 to-black" />

// // // // // // // // // // // // // //         {/* Hex pattern overlay */}

// // // // // // // // // // // // // //         <div className="absolute inset-0 hex-pattern opacity-20" />

// // // // // // // // // // // // // //         {/* Animated background elements with glow */}

// // // // // // // // // // // // // //         <div

// // // // // // // // // // // // // //           className="absolute top-20 right-20 w-96 h-96 bg-[#595959]/20 rounded-full blur-[100px] glow transition-opacity duration-1000 pulse-ring"

// // // // // // // // // // // // // //           style={{

// // // // // // // // // // // // // //             opacity: isVisible("philosophy") ? 1 : 0,

// // // // // // // // // // // // // //             transitionDelay: "0.2s"

// // // // // // // // // // // // // //           }}

// // // // // // // // // // // // // //         />

// // // // // // // // // // // // // //         <div

// // // // // // // // // // // // // //           className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-[#E2DBDF]/10 rounded-full blur-[120px] glow-accent transition-opacity duration-1000 pulse-ring"

// // // // // // // // // // // // // //           style={{

// // // // // // // // // // // // // //             opacity: isVisible("philosophy") ? 1 : 0,

// // // // // // // // // // // // // //             transitionDelay: "0.4s",

// // // // // // // // // // // // // //             animationDelay: "1s"

// // // // // // // // // // // // // //           }}

// // // // // // // // // // // // // //         />

// // // // // // // // // // // // // //         <div className="relative max-w-7xl mx-auto">

// // // // // // // // // // // // // //           <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

// // // // // // // // // // // // // //             {/* Text Content - Left Side */}

// // // // // // // // // // // // // //             <div

// // // // // // // // // // // // // //               className={`lg:w-1/2 space-y-8 lg:pr-12 transition-all duration-1000 ${

// // // // // // // // // // // // // //                 isVisible("philosophy")

// // // // // // // // // // // // // //                   ? "opacity-100 translate-x-0"

// // // // // // // // // // // // // //                   : "opacity-0 -translate-x-12"

// // // // // // // // // // // // // //               }`}

// // // // // // // // // // // // // //             >

// // // // // // // // // // // // // //               <div className="inline-flex items-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40">

// // // // // // // // // // // // // //                 <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />

// // // // // // // // // // // // // //                 <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-montserrat">Our Philosophy</span>

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] leading-tight">

// // // // // // // // // // // // // //                 Beauty is Science,<br />

// // // // // // // // // // // // // //                 And Science is Personal

// // // // // // // // // // // // // //               </h2>

// // // // // // // // // // // // // //               <div className="w-24 h-px bg-gradient-to-r from-[#B0C2B0] to-[#595959] glow" />

// // // // // // // // // // // // // //               <div className="space-y-4 text-[#595959]">

// // // // // // // // // // // // // //                 <p className="text-xl leading-relaxed font-hatton">

// // // // // // // // // // // // // //                   At Avya, beauty is science, and science is personal. We are Kenya's first salon dedicated to science-meets-beauty treatments, combining advanced technology, global techniques, and luxury beauty rituals. Whether you're seeking a transformative experience or simply in search of a high-performance beauty partner, we deliver real results in a space designed for comfort, wellness, and confidence.

// // // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             {/* Visual Element - Right Side */}

// // // // // // // // // // // // // //             <div

// // // // // // // // // // // // // //               className={`lg:w-1/2 relative transition-all duration-1000 delay-300 font-montserrat ${

// // // // // // // // // // // // // //                 isVisible("philosophy")

// // // // // // // // // // // // // //                   ? "opacity-100 translate-x-0"

// // // // // // // // // // // // // //                   : "opacity-0 translate-x-12"

// // // // // // // // // // // // // //               }`}

// // // // // // // // // // // // // //             >

// // // // // // // // // // // // // //               <div className="relative group">

// // // // // // // // // // // // // //                 {/* Glowing frame effect */}

// // // // // // // // // // // // // //                 <div className="absolute -inset-4 neon-border rounded-3xl blur-xl transition-all duration-700" />

// // // // // // // // // // // // // //                 <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#595959]/30 glow">

// // // // // // // // // // // // // //                   <img

// // // // // // // // // // // // // //                     src={heroHairTreatments}

// // // // // // // // // // // // // //                     alt="Beauty Treatment"

// // // // // // // // // // // // // //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

// // // // // // // // // // // // // //                   />

// // // // // // // // // // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

// // // // // // // // // // // // // //                   {/* Holographic overlay */}

// // // // // // // // // // // // // //                   <div className="absolute inset-0 holographic opacity-20 group-hover:opacity-30 transition-opacity" />

// // // // // // // // // // // // // //                   {/* Corner accents */}

// // // // // // // // // // // // // //                   <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#B0C2B0] glow" />

// // // // // // // // // // // // // //                   <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#B0C2B0] glow" />

// // // // // // // // // // // // // //                   <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#B0C2B0] glow" />

// // // // // // // // // // // // // //                   <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#B0C2B0] glow" />

// // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // //                 {/* Floating tech elements */}

// // // // // // // // // // // // // //                 <div className="absolute -top-6 -right-6 w-20 h-20 border border-[#FFFFFF] rounded-full animate-spin-slow glow" />

// // // // // // // // // // // // // //                 <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[#FFFFFF] rounded-lg rotate-45 animate-pulse glow-accent" />

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // //       <section

// // // // // // // // // // // // // //         id="services"

// // // // // // // // // // // // // //         ref={(el) => (sectionRefs.current.services = el)}

// // // // // // // // // // // // // //         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#E2DBDF] relative overflow-hidden"

// // // // // // // // // // // // // //       >

// // // // // // // // // // // // // //         {/* Background effects */}

// // // // // // // // // // // // // //         <div className="absolute top-20 right-0 w-96 h-96 bg-[#B0C2B0]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />

// // // // // // // // // // // // // //         <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />

// // // // // // // // // // // // // //         <div className="absolute inset-0 grid-bg opacity-10" style={{ backgroundColor: "#262626" }} />

// // // // // // // // // // // // // //         <div className="max-w-7xl mx-auto relative">

// // // // // // // // // // // // // //           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

// // // // // // // // // // // // // //             <div className="inline-block px-6 py-3 border border-[#C1B5C6] rounded-full mb-6 backdrop-blur-xl bg-[#262626]/40">

// // // // // // // // // // // // // //               <span className="text-xs tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">The Avya Difference</span>

// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] mb-6">

// // // // // // // // // // // // // //               What Makes Avya <span>Different</span>

// // // // // // // // // // // // // //             </h2>

// // // // // // // // // // // // // //             <p className="text-lg text-[#595959] max-w-2xl font-hatton mx-auto">

// // // // // // // // // // // // // //               Innovation, Expertise, and Care in Every Service

// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           {/* Bento Grid */}

// // // // // // // // // // // // // //           <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 ${isVisible("services") ? "animate-stagger" : ""}`}>

// // // // // // // // // // // // // //             {/* Large Featured Card: Advanced Tricology */}

// // // // // // // // // // // // // //             <div

// // // // // // // // // // // // // //               className="md:col-span-4 md:row-span-2 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // // // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("tricology")}


// // // // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("tricology")}

// // // // // // // // // // // // // //             >

// // // // // // // // // // // // // //               <div className="absolute inset-0">

// // // // // // // // // // // // // //                 <img

// // // // // // // // // // // // // //                   src={images.tricology[imageStates.tricology]}

// // // // // // // // // // // // // //                   alt="Advanced Tricology"

// // // // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // // // // // // // // // // // // //                 />

// // // // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF] via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // // // // // // // // // // // // //               <div className="relative p-8 lg:p-12 h-full flex flex-col justify-end">

// // // // // // // // // // // // // //                 <div className="mb-6 w-16 h-16 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">

// // // // // // // // // // // // // //                   <svg className="w-8 h-8 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />

// // // // // // // // // // // // // //                   </svg>

// // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // //                 <h3 className="text-3xl lg:text-4xl font-hatton font-light text-[#C1B5C6] mb-4 transform group-hover:translate-x-2 transition-transform duration-300">

// // // // // // // // // // // // // //                   Advanced Tricology

// // // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // // //                 <p className="text-base font-montserrat lg:text-lg leading-relaxed text-[#E2DBDF] max-w-xl transform group-hover:translate-x-2 transition-transform duration-300 delay-75">

// // // // // // // // // // // // // //                   Evidence-based hair and scalp solutions using cutting-edge technology and scientific research.

// // // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             {/* Medium Card: Premium Glam */}

// // // // // // // // // // // // // //             <div

// // // // // // // // // // // // // //               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // // // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("glam")}

// // // // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("glam")}

// // // // // // // // // // // // // //             >

// // // // // // // // // // // // // //               <div className="absolute inset-0">

// // // // // // // // // // // // // //                 <img

// // // // // // // // // // // // // //                   src={images.glam[imageStates.glam]}

// // // // // // // // // // // // // //                   alt="Premium Glam Services"

// // // // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // // // // // // // // // // // // //                 />

// // // // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/40 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // // // // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">

// // // // // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">

// // // // // // // // // // // // // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />

// // // // // // // // // // // // // //                   </svg>

// // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // //                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-[#C1B5C6] mb-3">

// // // // // // // // // // // // // //                   Premium Glam Services

// // // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // // //                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">

// // // // // // // // // // // // // //                   Luxury hair, skin, and aesthetic treatments for transformative results.

// // // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             {/* Small Card: Longevity Focus */}

// // // // // // // // // // // // // //             <div

// // // // // // // // // // // // // //               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // // // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("longevity")}

// // // // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("longevity")}

// // // // // // // // // // // // // //             >

// // // // // // // // // // // // // //               <div className="absolute inset-0">

// // // // // // // // // // // // // //                 <img

// // // // // // // // // // // // // //                   src={images.longevity[imageStates.longevity]}

// // // // // // // // // // // // // //                   alt="Longevity Focus"

// // // // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // // // // // // // // // // // // //                 />

// // // // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/20 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // // // // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">

// // // // // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">

// // // // // // // // // // // // // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />

// // // // // // // // // // // // // //                   </svg>

// // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // //                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-[#C1B5C6] mb-3">

// // // // // // // // // // // // // //                   Longevity Focus

// // // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // // //                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">

// // // // // // // // // // // // // //                   Treatments that go beyond surface beauty, promoting wellness.

// // // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             {/* Medium Card: Exclusive Experience */}

// // // // // // // // // // // // // //             <div

// // // // // // // // // // // // // //               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // // // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("exclusive")}

// // // // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("exclusive")}

// // // // // // // // // // // // // //             >

// // // // // // // // // // // // // //               <div className="absolute inset-0">

// // // // // // // // // // // // // //                 <img

// // // // // // // // // // // // // //                   src={images.exclusive[imageStates.exclusive]}

// // // // // // // // // // // // // //                   alt="Exclusive Experience"

// // // // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // // // // // // // // // // // // //                 />

// // // // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/50 to-transparent group-hover:opacity-0 transition-opacity duration-700" />

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // // // // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">

// // // // // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">

// // // // // // // // // // // // // //                   <svg className="w-6 h-6 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />

// // // // // // // // // // // // // //                   </svg>

// // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // //                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-[#C1B5C6] mb-3">

// // // // // // // // // // // // // //                   Exclusive Experience

// // // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // // //                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">

// // // // // // // // // // // // // //                   Aesthetics, appointments, and ambiance designed for those who demand the best.

// // // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             {/* Medium Card: Expert Care */}

// // // // // // // // // // // // // //             <div

// // // // // // // // // // // // // //               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // // // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("expert")}

// // // // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("expert")}

// // // // // // // // // // // // // //             >

// // // // // // // // // // // // // //               <div className="absolute inset-0">

// // // // // // // // // // // // // //                 <img

// // // // // // // // // // // // // //                   src={images.expert[imageStates.expert]}

// // // // // // // // // // // // // //                   alt="Expert-Led Personalized Care"

// // // // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // // // // // // // // // // // // //                 />

// // // // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/30 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // // // // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">

// // // // // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">

// // // // // // // // // // // // // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />

// // // // // // // // // // // // // //                   </svg>

// // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // //                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-[#C1B5C6] mb-3">

// // // // // // // // // // // // // //                   Expert-Led Personalized Care

// // // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // // //                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">

// // // // // // // // // // // // // //                   Every service is tailored by internationally trained experts who understand your unique needs.

// // // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             {/* Wide Card: Special Events */}

// // // // // // // // // // // // // //             <div

// // // // // // // // // // // // // //               className="md:col-span-6 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // // // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("special")}

// // // // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("special")}

// // // // // // // // // // // // // //             >

// // // // // // // // // // // // // //               <div className="absolute inset-0">

// // // // // // // // // // // // // //                 <img

// // // // // // // // // // // // // //                   src={images.special[imageStates.special]}

// // // // // // // // // // // // // //                   alt="Special Pricing Events"

// // // // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-105 transition-all duration-700"

// // // // // // // // // // // // // //                 />

// // // // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-r from-[#262626] via-[#E2DBDF]/10 to-[#262626]/50 group-hover:opacity-0 transition-opacity duration-700" />

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // // // // // // // // // // // // //               <div className="relative p-6 lg:p-10 h-full min-h-[200px] flex items-center">

// // // // // // // // // // // // // //                 <div className="flex items-center gap-6 lg:gap-8 max-w-4xl">

// // // // // // // // // // // // // //                   <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">

// // // // // // // // // // // // // //                     <svg className="w-8 lg:w-10 h-8 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

// // // // // // // // // // // // // //                     </svg>

// // // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // // //                   <div>

// // // // // // // // // // // // // //                     <h3 className="text-2xl lg:text-3xl font-hatton font-light text-[#C1B5C6] mb-2">

// // // // // // // // // // // // // //                       Special Pricing Events

// // // // // // // // // // // // // //                     </h3>

// // // // // // // // // // // // // //                     <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">

// // // // // // // // // // // // // //                       Exclusive moments to enjoy your trusted treatments at special rates. Be part of our inner circle.

// // // // // // // // // // // // // //                     </p>

// // // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // //       {/* CTA Section: Join the Avya Circle */}

// // // // // // // // // // // // // //       <section

// // // // // // // // // // // // // //         id="cta"

// // // // // // // // // // // // // //         ref={(el) => (sectionRefs.current.cta = el)}

// // // // // // // // // // // // // //         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#262626] relative overflow-hidden"

// // // // // // // // // // // // // //       >

// // // // // // // // // // // // // //         {/* Background effects */}

// // // // // // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-[#262626] via-black to-[#262626] opacity-90" />

// // // // // // // // // // // // // //         <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B0C2B0]/10 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: "6s" }} />

// // // // // // // // // // // // // //         <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s", animationDelay: "2s" }} />

// // // // // // // // // // // // // //         <div className="relative max-w-4xl mx-auto text-center transition-all duration-1000" style={{ opacity: isVisible("cta") ? 1 : 0, transform: isVisible("cta") ? "translate-y-0" : "translate-y-8" }}>

// // // // // // // // // // // // // //           <div className="inline-flex items-center justify-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40 mb-8 mx-auto w-fit">

// // // // // // // // // // // // // //             <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />

// // // // // // // // // // // // // //             <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">Inner Circle</span>

// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-white mb-6 leading-tight cyber-text">

// // // // // // // // // // // // // //             Join the <span className="text-gradient glow-accent">Avya Circle</span>

// // // // // // // // // // // // // //           </h2>

// // // // // // // // // // // // // //           <p className="text-lg md:text-xl text-[#B0C2B0] mb-10 max-w-2xl mx-auto leading-relaxed">

// // // // // // // // // // // // // //             Unlock exclusive access to special events, personalized offers, and insider beauty science insights. Be part of our community of visionaries.

// // // // // // // // // // // // // //           </p>

// // // // // // // // // // // // // //           <button className="relative inline-block group">
// // // // // // // // // // // // // //                 <a
// // // // // // // // // // // // // //                   href="/contact#contact-form"
// // // // // // // // // // // // // //                   className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors"
// // // // // // // // // // // // // //                 > 
// // // // // // // // // // // // // //                   BOOK APPOINTMENT
// // // // // // // // // // // // // //                 </a>
// // // // // // // // // // // // // //           </button>

// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // //     </div>

// // // // // // // // // // // // // //   );

// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Index;
// // // // // // // // // // // // // import { useState, useEffect, useRef } from "react";
// // // // // // // // // // // // // import heroTrichology from "@/assets/h3.png";
// // // // // // // // // // // // // import heroHairTreatments from "@/assets/h1.png";
// // // // // // // // // // // // // import heroGlam from "@/assets/h2.png";
// // // // // // // // // // // // // import img2 from "@/assets/h6.png";
// // // // // // // // // // // // // import img from "@/assets/h5.png";
// // // // // // // // // // // // // import img1 from "@/assets/h7.png";
// // // // // // // // // // // // // import img3 from "@/assets/op3.png";

// // // // // // // // // // // // // const Index = () => {
// // // // // // // // // // // // //   const [imageStates, setImageStates] = useState({
// // // // // // // // // // // // //     tricology: 0,
// // // // // // // // // // // // //     glam: 0,
// // // // // // // // // // // // //     longevity: 0,
// // // // // // // // // // // // //     exclusive: 0,
// // // // // // // // // // // // //     expert: 0,
// // // // // // // // // // // // //     special: 0,
// // // // // // // // // // // // //   });

// // // // // // // // // // // // //   const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
// // // // // // // // // // // // //   const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
// // // // // // // // // // // // //   const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
// // // // // // // // // // // // //   const images = {
// // // // // // // // // // // // //     tricology: [heroTrichology, heroHairTreatments],
// // // // // // // // // // // // //     glam: [heroGlam, img],
// // // // // // // // // // // // //     longevity: [heroTrichology, img1],
// // // // // // // // // // // // //     exclusive: [heroHairTreatments, img2],
// // // // // // // // // // // // //     expert: [img, heroGlam],
// // // // // // // // // // // // //     special: [img1, heroTrichology],
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const particleArray = Array.from({ length: 20 }, (_, i) => ({
// // // // // // // // // // // // //       id: i,
// // // // // // // // // // // // //       x: Math.random() * 100,
// // // // // // // // // // // // //       y: Math.random() * 100,
// // // // // // // // // // // // //       delay: Math.random() * 4,
// // // // // // // // // // // // //     }));
// // // // // // // // // // // // //     setParticles(particleArray);
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // // // //       (entries) => {
// // // // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // // // //             setVisibleSections((prev) => new Set(prev).add(entry.target.id));
// // // // // // // // // // // // //           }
// // // // // // // // // // // // //         });
// // // // // // // // // // // // //       },
// // // // // // // // // // // // //       { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //     Object.values(sectionRefs.current).forEach((ref) => {
// // // // // // // // // // // // //       if (ref) observer.observe(ref);
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //     return () => observer.disconnect();
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   const handleMouseEnter = (key: string) => {
// // // // // // // // // // // // //     setImageStates((prev) => ({
// // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // //       [key]: (prev[key as keyof typeof prev] + 1) % images[key as keyof typeof images].length,
// // // // // // // // // // // // //     }));
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleMouseLeave = (key: string) => {
// // // // // // // // // // // // //     setImageStates((prev) => ({
// // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // //       [key]: 0,
// // // // // // // // // // // // //     }));
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const isVisible = (id: string) => visibleSections.has(id);
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="min-h-screen bg-black font-sans relative overflow-hidden">
// // // // // // // // // // // // //       {/* Futuristic Grid Background */}
// // // // // // // // // // // // //       <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
// // // // // // // // // // // // //       {/* Floating Particles */}
// // // // // // // // // // // // //       {particles.map((particle) => (
// // // // // // // // // // // // //         <div
// // // // // // // // // // // // //           key={particle.id}
// // // // // // // // // // // // //           className="fixed w-1 h-1 bg-[#B0C2B0] rounded-full particle pointer-events-none"
// // // // // // // // // // // // //           style={{
// // // // // // // // // // // // //             left: `${particle.x}%`,
// // // // // // // // // // // // //             top: `${particle.y}%`,
// // // // // // // // // // // // //             animationDelay: `${particle.delay}s`,
// // // // // // // // // // // // //             opacity: 0.6,
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       ))}

// // // // // // // // // // // // //       <section className="relative h-screen overflow-hidden bg-[#262626]">
// // // // // // // // // // // // //         {/* Scanline Effect (optional) */}
// // // // // // // // // // // // //         <div className="absolute inset-0 scanline pointer-events-none z-10" />
// // // // // // // // // // // // //         {/* Background Image */}
// // // // // // // // // // // // //         <div
// // // // // // // // // // // // //           className="absolute inset-0 bg-cover bg-center"
// // // // // // // // // // // // //           style={{
// // // // // // // // // // // // //              backgroundImage: `url(${img3})`,
// // // // // // // // // // // // //           }}

// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           {/* Dark overlay for better text contrast */}
// // // // // // // // // // // // //           <div className="absolute inset-0 bg-black/50" />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Content */}

// // // // // // // // // // // // //         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">

// // // // // // // // // // // // //           <div className="max-w-4xl">
// // // // // // // // // // // // //             {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8">
// // // // // // // // // // // // //               <span className="w-2 h-2 rounded-full bg-[#B0C2B0] animate-pulse" />
// // // // // // // // // // // // //               <span className="text-sm tracking-wider text-white font-light font-montserrat">ABOUT US</span>
// // // // // // // // // // // // //             </div> */}

// // // // // // // // // // // // //             {/* <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">

// // // // // // // // // // // // //               Nairobi's Premier Longevity Beauty Salon

// // // // // // // // // // // // //             </h1>

// // // // // // // // // // // // //             <p className="text-lg md:text-xl text-[#C1B5C6] font-hatton mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>

// // // // // // // // // // // // //               Where Science Meets Beauty

// // // // // // // // // // // // //             </p> */}
// // // // // // // // // // // // //             <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
// // // // // // // // // // // // //               Nairobi's Premier Longevity
// // // // // // // // // // // // //               <br />
// // // // // // // // // // // // //               <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">Beauty Salon</span>
// // // // // // // // // // // // //             </h1>
// // // // // // // // // // // // //             <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
// // // // // // // // // // // // //               Where Science Meets Beauty
// // // // // // // // // // // // //             </p>

// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Data Stream Indicators (optional) */}

// // // // // // // // // // // // //         <div className="absolute right-8 top-1/4 space-y-4 opacity-40">

// // // // // // // // // // // // //           {[0, 1, 2].map((i) => (

// // // // // // // // // // // // //             <div

// // // // // // // // // // // // //               key={i}

// // // // // // // // // // // // //               className="w-px h-20 bg-gradient-to-b from-transparent via-[#B0C2B0] to-transparent data-stream"

// // // // // // // // // // // // //               style={{ animationDelay: `${i * 0.5}s` }}

// // // // // // // // // // // // //             />

// // // // // // // // // // // // //           ))}

// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Scroll Indicator */}

// // // // // // // // // // // // //         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

// // // // // // // // // // // // //           <div className="relative">

// // // // // // // // // // // // //             <div className="absolute inset-0 blur-lg bg-[#B0C2B0] opacity-50 rounded-full" />

// // // // // // // // // // // // //             <svg className="w-6 h-6 text-white/60 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />

// // // // // // // // // // // // //             </svg>

// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //       </section>

      

// // // // // // // // // // // // //       <section

// // // // // // // // // // // // //         id="philosophy"

// // // // // // // // // // // // //         ref={(el) => (sectionRefs.current.philosophy = el)}

// // // // // // // // // // // // //         className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"

// // // // // // // // // // // // //       >

// // // // // // // // // // // // //         {/* Dark gradient background */}

// // // // // // // // // // // // //         <div className="absolute inset-0 bg-[#C1B5C6] from-black via-gray-900 to-black" />

// // // // // // // // // // // // //         {/* Hex pattern overlay */}

// // // // // // // // // // // // //         <div className="absolute inset-0 hex-pattern opacity-20" />

// // // // // // // // // // // // //         {/* Animated background elements with glow */}

// // // // // // // // // // // // //         <div

// // // // // // // // // // // // //           className="absolute top-20 right-20 w-96 h-96 bg-[#595959]/20 rounded-full blur-[100px] glow transition-opacity duration-1000 pulse-ring"

// // // // // // // // // // // // //           style={{

// // // // // // // // // // // // //             opacity: isVisible("philosophy") ? 1 : 0,

// // // // // // // // // // // // //             transitionDelay: "0.2s"

// // // // // // // // // // // // //           }}

// // // // // // // // // // // // //         />

// // // // // // // // // // // // //         <div

// // // // // // // // // // // // //           className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-[#E2DBDF]/10 rounded-full blur-[120px] glow-accent transition-opacity duration-1000 pulse-ring"

// // // // // // // // // // // // //           style={{

// // // // // // // // // // // // //             opacity: isVisible("philosophy") ? 1 : 0,

// // // // // // // // // // // // //             transitionDelay: "0.4s",

// // // // // // // // // // // // //             animationDelay: "1s"

// // // // // // // // // // // // //           }}

// // // // // // // // // // // // //         />

// // // // // // // // // // // // //         <div className="relative max-w-7xl mx-auto">

// // // // // // // // // // // // //           <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

// // // // // // // // // // // // //             {/* Text Content - Left Side */}

// // // // // // // // // // // // //             <div

// // // // // // // // // // // // //               className={`lg:w-1/2 space-y-8 lg:pr-12 transition-all duration-1000 ${

// // // // // // // // // // // // //                 isVisible("philosophy")

// // // // // // // // // // // // //                   ? "opacity-100 translate-x-0"

// // // // // // // // // // // // //                   : "opacity-0 -translate-x-12"

// // // // // // // // // // // // //               }`}

// // // // // // // // // // // // //             >

// // // // // // // // // // // // //               <div className="inline-flex items-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40">

// // // // // // // // // // // // //                 <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />

// // // // // // // // // // // // //                 <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-montserrat">Our Philosophy</span>

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] leading-tight">

// // // // // // // // // // // // //                 Beauty is Science,<br />

// // // // // // // // // // // // //                 And Science is Personal

// // // // // // // // // // // // //               </h2>

// // // // // // // // // // // // //               <div className="w-24 h-px bg-gradient-to-r from-[#B0C2B0] to-[#595959] glow" />

// // // // // // // // // // // // //               <div className="space-y-4 text-[#595959]">

// // // // // // // // // // // // //                 <p className="text-xl leading-relaxed font-hatton">

// // // // // // // // // // // // //                   At Avya, beauty is science, and science is personal. We are Kenya's first salon dedicated to science-meets-beauty treatments, combining advanced technology, global techniques, and luxury beauty rituals. Whether you're seeking a transformative experience or simply in search of a high-performance beauty partner, we deliver real results in a space designed for comfort, wellness, and confidence.

// // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             {/* Visual Element - Right Side */}

// // // // // // // // // // // // //             <div

// // // // // // // // // // // // //               className={`lg:w-1/2 relative transition-all duration-1000 delay-300 font-montserrat ${

// // // // // // // // // // // // //                 isVisible("philosophy")

// // // // // // // // // // // // //                   ? "opacity-100 translate-x-0"

// // // // // // // // // // // // //                   : "opacity-0 translate-x-12"

// // // // // // // // // // // // //               }`}

// // // // // // // // // // // // //             >

// // // // // // // // // // // // //               <div className="relative group">

// // // // // // // // // // // // //                 {/* Glowing frame effect */}

// // // // // // // // // // // // //                 <div className="absolute -inset-4 neon-border rounded-3xl blur-xl transition-all duration-700" />

// // // // // // // // // // // // //                 <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#595959]/30 glow">

// // // // // // // // // // // // //                   <img

// // // // // // // // // // // // //                     src={heroHairTreatments}

// // // // // // // // // // // // //                     alt="Beauty Treatment"

// // // // // // // // // // // // //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

// // // // // // // // // // // // //                   />

// // // // // // // // // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

// // // // // // // // // // // // //                   {/* Holographic overlay */}

// // // // // // // // // // // // //                   <div className="absolute inset-0 holographic opacity-20 group-hover:opacity-30 transition-opacity" />

// // // // // // // // // // // // //                   {/* Corner accents */}

// // // // // // // // // // // // //                   <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#B0C2B0] glow" />

// // // // // // // // // // // // //                   <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#B0C2B0] glow" />

// // // // // // // // // // // // //                   <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#B0C2B0] glow" />

// // // // // // // // // // // // //                   <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#B0C2B0] glow" />

// // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // //                 {/* Floating tech elements */}

// // // // // // // // // // // // //                 <div className="absolute -top-6 -right-6 w-20 h-20 border border-[#FFFFFF] rounded-full animate-spin-slow glow" />

// // // // // // // // // // // // //                 <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[#FFFFFF] rounded-lg rotate-45 animate-pulse glow-accent" />

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //       <section

// // // // // // // // // // // // //         id="services"

// // // // // // // // // // // // //         ref={(el) => (sectionRefs.current.services = el)}

// // // // // // // // // // // // //         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden"

// // // // // // // // // // // // //       >

// // // // // // // // // // // // //         {/* Dark gradient background */}

// // // // // // // // // // // // //         <div className="absolute inset-0 bg-[#C1B5C6] from-black via-gray-900 to-black" />

// // // // // // // // // // // // //         {/* Hex pattern overlay */}

// // // // // // // // // // // // //         <div className="absolute inset-0 hex-pattern opacity-20" />

// // // // // // // // // // // // //         {/* Background effects */}

// // // // // // // // // // // // //         <div className="absolute top-20 right-0 w-96 h-96 bg-[#B0C2B0]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />

// // // // // // // // // // // // //         <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />

// // // // // // // // // // // // //         <div className="absolute inset-0 grid-bg opacity-10" style={{ backgroundColor: "#262626" }} />

// // // // // // // // // // // // //         <div className="max-w-7xl mx-auto relative">

// // // // // // // // // // // // //           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

// // // // // // // // // // // // //             <div className="inline-block px-6 py-3 border border-[#C1B5C6] rounded-full mb-6 backdrop-blur-xl bg-[#262626]/40">

// // // // // // // // // // // // //               <span className="text-xs tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">The Avya Difference</span>

// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] mb-6">

// // // // // // // // // // // // //               What Makes Avya <span>Different</span>

// // // // // // // // // // // // //             </h2>

// // // // // // // // // // // // //             <p className="text-lg text-[#595959] max-w-2xl font-hatton mx-auto">

// // // // // // // // // // // // //               Innovation, Expertise, and Care in Every Service

// // // // // // // // // // // // //             </p>

// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           {/* Bento Grid */}

// // // // // // // // // // // // //           <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 ${isVisible("services") ? "animate-stagger" : ""}`}>

// // // // // // // // // // // // //             {/* Large Featured Card: Advanced Tricology */}

// // // // // // // // // // // // //             <div

// // // // // // // // // // // // //               className="md:col-span-4 md:row-span-2 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("tricology")}


// // // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("tricology")}

// // // // // // // // // // // // //             >

// // // // // // // // // // // // //               <div className="absolute inset-0">

// // // // // // // // // // // // //                 <img

// // // // // // // // // // // // //                   src={images.tricology[imageStates.tricology]}

// // // // // // // // // // // // //                   alt="Advanced Tricology"

// // // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // // // // // // // // // // // //                 />

// // // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF] via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // // // // // // // // // // // //               <div className="relative p-8 lg:p-12 h-full flex flex-col justify-end">

// // // // // // // // // // // // //                 <div className="mb-6 w-16 h-16 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">

// // // // // // // // // // // // //                   <svg className="w-8 h-8 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />

// // // // // // // // // // // // //                   </svg>

// // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // //                 <h3 className="text-3xl lg:text-4xl font-hatton font-light text-[#C1B5C6] mb-4 transform group-hover:translate-x-2 transition-transform duration-300">

// // // // // // // // // // // // //                   Advanced Tricology

// // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // //                 <p className="text-base font-montserrat lg:text-lg leading-relaxed text-[#E2DBDF] max-w-xl transform group-hover:translate-x-2 transition-transform duration-300 delay-75">

// // // // // // // // // // // // //                   Evidence-based hair and scalp solutions using cutting-edge technology and scientific research.

// // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             {/* Medium Card: Premium Glam */}

// // // // // // // // // // // // //             <div

// // // // // // // // // // // // //               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("glam")}

// // // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("glam")}

// // // // // // // // // // // // //             >

// // // // // // // // // // // // //               <div className="absolute inset-0">

// // // // // // // // // // // // //                 <img

// // // // // // // // // // // // //                   src={images.glam[imageStates.glam]}

// // // // // // // // // // // // //                   alt="Premium Glam Services"

// // // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // // // // // // // // // // // //                 />

// // // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/40 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // // // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">

// // // // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">

// // // // // // // // // // // // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />

// // // // // // // // // // // // //                   </svg>

// // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // //                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-[#C1B5C6] mb-3">

// // // // // // // // // // // // //                   Premium Glam Services

// // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // //                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">

// // // // // // // // // // // // //                   Luxury hair, skin, and aesthetic treatments for transformative results.

// // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             {/* Small Card: Longevity Focus */}

// // // // // // // // // // // // //             <div

// // // // // // // // // // // // //               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("longevity")}

// // // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("longevity")}

// // // // // // // // // // // // //             >

// // // // // // // // // // // // //               <div className="absolute inset-0">

// // // // // // // // // // // // //                 <img

// // // // // // // // // // // // //                   src={images.longevity[imageStates.longevity]}

// // // // // // // // // // // // //                   alt="Longevity Focus"

// // // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // // // // // // // // // // // //                 />

// // // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/20 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // // // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">

// // // // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">

// // // // // // // // // // // // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />

// // // // // // // // // // // // //                   </svg>

// // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // //                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-[#C1B5C6] mb-3">

// // // // // // // // // // // // //                   Longevity Focus

// // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // //                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">

// // // // // // // // // // // // //                   Treatments that go beyond surface beauty, promoting wellness.

// // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             {/* Medium Card: Exclusive Experience */}

// // // // // // // // // // // // //             <div

// // // // // // // // // // // // //               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("exclusive")}

// // // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("exclusive")}

// // // // // // // // // // // // //             >

// // // // // // // // // // // // //               <div className="absolute inset-0">

// // // // // // // // // // // // //                 <img

// // // // // // // // // // // // //                   src={images.exclusive[imageStates.exclusive]}

// // // // // // // // // // // // //                   alt="Exclusive Experience"

// // // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // // // // // // // // // // // //                 />

// // // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/50 to-transparent group-hover:opacity-0 transition-opacity duration-700" />

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // // // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">

// // // // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">

// // // // // // // // // // // // //                   <svg className="w-6 h-6 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />

// // // // // // // // // // // // //                   </svg>

// // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // //                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-[#C1B5C6] mb-3">

// // // // // // // // // // // // //                   Exclusive Experience

// // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // //                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">

// // // // // // // // // // // // //                   Aesthetics, appointments, and ambiance designed for those who demand the best.

// // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             {/* Medium Card: Expert Care */}

// // // // // // // // // // // // //             <div

// // // // // // // // // // // // //               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("expert")}

// // // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("expert")}

// // // // // // // // // // // // //             >

// // // // // // // // // // // // //               <div className="absolute inset-0">

// // // // // // // // // // // // //                 <img

// // // // // // // // // // // // //                   src={images.expert[imageStates.expert]}

// // // // // // // // // // // // //                   alt="Expert-Led Personalized Care"

// // // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"

// // // // // // // // // // // // //                 />

// // // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/30 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // // // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">

// // // // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">

// // // // // // // // // // // // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />

// // // // // // // // // // // // //                   </svg>

// // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // //                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-[#C1B5C6] mb-3">

// // // // // // // // // // // // //                   Expert-Led Personalized Care

// // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // //                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">

// // // // // // // // // // // // //                   Every service is tailored by internationally trained experts who understand your unique needs.

// // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             {/* Wide Card: Special Events */}

// // // // // // // // // // // // //             <div

// // // // // // // // // // // // //               className="md:col-span-6 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"

// // // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("special")}

// // // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("special")}

// // // // // // // // // // // // //             >

// // // // // // // // // // // // //               <div className="absolute inset-0">

// // // // // // // // // // // // //                 <img

// // // // // // // // // // // // //                   src={images.special[imageStates.special]}

// // // // // // // // // // // // //                   alt="Special Pricing Events"

// // // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-105 transition-all duration-700"

// // // // // // // // // // // // //                 />

// // // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-r from-[#262626] via-[#E2DBDF]/10 to-[#262626]/50 group-hover:opacity-0 transition-opacity duration-700" />

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

// // // // // // // // // // // // //               <div className="relative p-6 lg:p-10 h-full min-h-[200px] flex items-center">

// // // // // // // // // // // // //                 <div className="flex items-center gap-6 lg:gap-8 max-w-4xl">

// // // // // // // // // // // // //                   <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">

// // // // // // // // // // // // //                     <svg className="w-8 lg:w-10 h-8 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

// // // // // // // // // // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

// // // // // // // // // // // // //                     </svg>

// // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // //                   <div>

// // // // // // // // // // // // //                     <h3 className="text-2xl lg:text-3xl font-hatton font-light text-[#C1B5C6] mb-2">

// // // // // // // // // // // // //                       Special Pricing Events

// // // // // // // // // // // // //                     </h3>

// // // // // // // // // // // // //                     <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">

// // // // // // // // // // // // //                       Exclusive moments to enjoy your trusted treatments at special rates. Be part of our inner circle.

// // // // // // // // // // // // //                     </p>

// // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //       {/* CTA Section: Join the Avya Circle */}

// // // // // // // // // // // // //       <section

// // // // // // // // // // // // //         id="cta"

// // // // // // // // // // // // //         ref={(el) => (sectionRefs.current.cta = el)}

// // // // // // // // // // // // //         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#262626] relative overflow-hidden"

// // // // // // // // // // // // //       >

// // // // // // // // // // // // //         {/* Background effects */}

// // // // // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-[#262626] via-black to-[#262626] opacity-90" />

// // // // // // // // // // // // //         <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B0C2B0]/10 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: "6s" }} />

// // // // // // // // // // // // //         <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s", animationDelay: "2s" }} />

// // // // // // // // // // // // //         <div className="relative max-w-4xl mx-auto text-center transition-all duration-1000" style={{ opacity: isVisible("cta") ? 1 : 0, transform: isVisible("cta") ? "translate-y-0" : "translate-y-8" }}>

// // // // // // // // // // // // //           <div className="inline-flex items-center justify-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40 mb-8 mx-auto w-fit">

// // // // // // // // // // // // //             <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />

// // // // // // // // // // // // //             <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">Inner Circle</span>

// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-white mb-6 leading-tight cyber-text">

// // // // // // // // // // // // //             Join the <span className="text-gradient glow-accent">Avya Circle</span>

// // // // // // // // // // // // //           </h2>

// // // // // // // // // // // // //           <p className="text-lg md:text-xl text-[#B0C2B0] mb-10 max-w-2xl mx-auto leading-relaxed">

// // // // // // // // // // // // //             Unlock exclusive access to special events, personalized offers, and insider beauty science insights. Be part of our community of visionaries.

// // // // // // // // // // // // //           </p>

// // // // // // // // // // // // //           <button className="relative inline-block group">
// // // // // // // // // // // // //                 <a
// // // // // // // // // // // // //                   href="/contact#contact-form"
// // // // // // // // // // // // //                   className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors"
// // // // // // // // // // // // //                 > 
// // // // // // // // // // // // //                   BOOK APPOINTMENT
// // // // // // // // // // // // //                 </a>
// // // // // // // // // // // // //           </button>

// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //     </div>

// // // // // // // // // // // // //   );

// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Index;
// // // // // // // // // // // // import { useState, useEffect, useRef } from "react";
// // // // // // // // // // // // import heroTrichology from "@/assets/h3.png";
// // // // // // // // // // // // import heroHairTreatments from "@/assets/h1.png";
// // // // // // // // // // // // import heroGlam from "@/assets/h2.png";
// // // // // // // // // // // // import img2 from "@/assets/h6.png";
// // // // // // // // // // // // import img from "@/assets/h5.png";
// // // // // // // // // // // // import img1 from "@/assets/h7.png";
// // // // // // // // // // // // import img3 from "@/assets/op3.png";

// // // // // // // // // // // // const Index = () => {
// // // // // // // // // // // //   const [imageStates, setImageStates] = useState({
// // // // // // // // // // // //     tricology: 0,
// // // // // // // // // // // //     glam: 0,
// // // // // // // // // // // //     longevity: 0,
// // // // // // // // // // // //     exclusive: 0,
// // // // // // // // // // // //     expert: 0,
// // // // // // // // // // // //     special: 0,
// // // // // // // // // // // //   });

// // // // // // // // // // // //   const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
// // // // // // // // // // // //   const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
// // // // // // // // // // // //   const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

// // // // // // // // // // // //   const images = {
// // // // // // // // // // // //     tricology: [heroTrichology, heroHairTreatments],
// // // // // // // // // // // //     glam: [heroGlam, img],
// // // // // // // // // // // //     longevity: [heroTrichology, img1],
// // // // // // // // // // // //     exclusive: [heroHairTreatments, img2],
// // // // // // // // // // // //     expert: [img, heroGlam],
// // // // // // // // // // // //     special: [img1, heroTrichology],
// // // // // // // // // // // //   };

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const particleArray = Array.from({ length: 20 }, (_, i) => ({
// // // // // // // // // // // //       id: i,
// // // // // // // // // // // //       x: Math.random() * 100,
// // // // // // // // // // // //       y: Math.random() * 100,
// // // // // // // // // // // //       delay: Math.random() * 4,
// // // // // // // // // // // //     }));
// // // // // // // // // // // //     setParticles(particleArray);
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // // //       (entries) => {
// // // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // // //             setVisibleSections((prev) => new Set(prev).add(entry.target.id));
// // // // // // // // // // // //           }
// // // // // // // // // // // //         });
// // // // // // // // // // // //       },
// // // // // // // // // // // //       { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
// // // // // // // // // // // //     );
// // // // // // // // // // // //     Object.values(sectionRefs.current).forEach((ref) => {
// // // // // // // // // // // //       if (ref) observer.observe(ref);
// // // // // // // // // // // //     });
// // // // // // // // // // // //     return () => observer.disconnect();
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   const handleMouseEnter = (key: string) => {
// // // // // // // // // // // //     setImageStates((prev) => ({
// // // // // // // // // // // //       ...prev,
// // // // // // // // // // // //       [key]: (prev[key as keyof typeof prev] + 1) % images[key as keyof typeof images].length,
// // // // // // // // // // // //     }));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleMouseLeave = (key: string) => {
// // // // // // // // // // // //     setImageStates((prev) => ({
// // // // // // // // // // // //       ...prev,
// // // // // // // // // // // //       [key]: 0,
// // // // // // // // // // // //     }));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const isVisible = (id: string) => visibleSections.has(id);

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="min-h-screen bg-[#E2DBDF] font-sans relative overflow-hidden">
// // // // // // // // // // // //       {/* Futuristic Grid Background */}
// // // // // // // // // // // //       <div className="fixed inset-0 grid-bg opacity-10 pointer-events-none" />

// // // // // // // // // // // //       {/* Floating Particles */}
// // // // // // // // // // // //       {particles.map((particle) => (
// // // // // // // // // // // //         <div
// // // // // // // // // // // //           key={particle.id}
// // // // // // // // // // // //           className="fixed w-1 h-1 bg-[#B0C2B0] rounded-full particle pointer-events-none"
// // // // // // // // // // // //           style={{
// // // // // // // // // // // //             left: `${particle.x}%`,
// // // // // // // // // // // //             top: `${particle.y}%`,
// // // // // // // // // // // //             animationDelay: `${particle.delay}s`,
// // // // // // // // // // // //             opacity: 0.4,
// // // // // // // // // // // //           }}
// // // // // // // // // // // //         />
// // // // // // // // // // // //       ))}

// // // // // // // // // // // //       {/* Hero Section */}
// // // // // // // // // // // //       <section className="relative h-screen overflow-hidden bg-[#262626]">
// // // // // // // // // // // //         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}>
// // // // // // // // // // // //           <div className="absolute inset-0 bg-black/60" />
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
// // // // // // // // // // // //           <div className="max-w-4xl">
// // // // // // // // // // // //             <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
// // // // // // // // // // // //               Nairobi's Premier Longevity
// // // // // // // // // // // //               <br />
// // // // // // // // // // // //               <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
// // // // // // // // // // // //                 Beauty Salon
// // // // // // // // // // // //               </span>
// // // // // // // // // // // //             </h1>
// // // // // // // // // // // //             <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
// // // // // // // // // // // //               Where Science Meets Beauty
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
// // // // // // // // // // // //           <div className="relative">
// // // // // // // // // // // //             <div className="absolute inset-0 blur-lg bg-[#B0C2B0] opacity-50 rounded-full" />
// // // // // // // // // // // //             <svg
// // // // // // // // // // // //               className="w-6 h-6 text-white/60 relative z-10"
// // // // // // // // // // // //               fill="none"
// // // // // // // // // // // //               stroke="currentColor"
// // // // // // // // // // // //               viewBox="0 0 24 24"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <path
// // // // // // // // // // // //                 strokeLinecap="round"
// // // // // // // // // // // //                 strokeLinejoin="round"
// // // // // // // // // // // //                 strokeWidth={1.5}
// // // // // // // // // // // //                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
// // // // // // // // // // // //               />
// // // // // // // // // // // //             </svg>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>

// // // // // // // // // // // //       {/* Philosophy Section */}
// // // // // // // // // // // //       <section
// // // // // // // // // // // //         id="philosophy"
// // // // // // // // // // // //         ref={(el) => (sectionRefs.current.philosophy = el)}
// // // // // // // // // // // //         className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#262626]"
// // // // // // // // // // // //       >
// // // // // // // // // // // //         <div className="absolute inset-0 hex-pattern opacity-10" />
// // // // // // // // // // // //         <div
// // // // // // // // // // // //           className="absolute top-20 right-20 w-96 h-96 bg-[#595959]/20 rounded-full blur-[100px] glow transition-opacity duration-1000 pulse-ring"
// // // // // // // // // // // //           style={{ opacity: isVisible("philosophy") ? 1 : 0, transitionDelay: "0.2s" }}
// // // // // // // // // // // //         />
// // // // // // // // // // // //         <div
// // // // // // // // // // // //           className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-[#E2DBDF]/10 rounded-full blur-[120px] glow-accent transition-opacity duration-1000 pulse-ring"
// // // // // // // // // // // //           style={{ opacity: isVisible("philosophy") ? 1 : 0, transitionDelay: "0.4s", animationDelay: "1s" }}
// // // // // // // // // // // //         />
// // // // // // // // // // // //         <div className="relative max-w-7xl mx-auto">
// // // // // // // // // // // //           <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
// // // // // // // // // // // //             <div
// // // // // // // // // // // //               className={`lg:w-1/2 space-y-8 lg:pr-12 transition-all duration-1000 ${
// // // // // // // // // // // //                 isVisible("philosophy") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
// // // // // // // // // // // //               }`}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <div className="inline-flex items-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40">
// // // // // // // // // // // //                 <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />
// // // // // // // // // // // //                 <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-montserrat">
// // // // // // // // // // // //                   Our Philosophy
// // // // // // // // // // // //                 </span>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-white leading-tight">
// // // // // // // // // // // //                 Beauty is Science,
// // // // // // // // // // // //                 <br />
// // // // // // // // // // // //                 And Science is Personal
// // // // // // // // // // // //               </h2>
// // // // // // // // // // // //               <div className="w-24 h-px bg-gradient-to-r from-[#B0C2B0] to-[#595959] glow" />
// // // // // // // // // // // //               <div className="space-y-4 text-[#E2DBDF]">
// // // // // // // // // // // //                 <p className="text-xl leading-relaxed font-hatton">
// // // // // // // // // // // //                   At Avya, beauty is science, and science is personal. We are Kenya's first salon dedicated to
// // // // // // // // // // // //                   science-meets-beauty treatments, combining advanced technology, global techniques, and luxury beauty
// // // // // // // // // // // //                   rituals. Whether you're seeking a transformative experience or simply in search of a high-performance
// // // // // // // // // // // //                   beauty partner, we deliver real results in a space designed for comfort, wellness, and confidence.
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <div
// // // // // // // // // // // //               className={`lg:w-1/2 relative transition-all duration-1000 delay-300 font-montserrat ${
// // // // // // // // // // // //                 isVisible("philosophy") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
// // // // // // // // // // // //               }`}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <div className="relative group">
// // // // // // // // // // // //                 <div className="absolute -inset-4 neon-border rounded-3xl blur-xl transition-all duration-700" />
// // // // // // // // // // // //                 <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#595959]/30 glow">
// // // // // // // // // // // //                   <img
// // // // // // // // // // // //                     src={heroHairTreatments}
// // // // // // // // // // // //                     alt="Beauty Treatment"
// // // // // // // // // // // //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// // // // // // // // // // // //                   />
// // // // // // // // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
// // // // // // // // // // // //                   <div className="absolute inset-0 holographic opacity-20 group-hover:opacity-30 transition-opacity" />
// // // // // // // // // // // //                   <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#B0C2B0] glow" />
// // // // // // // // // // // //                   <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#B0C2B0] glow" />
// // // // // // // // // // // //                   <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#B0C2B0] glow" />
// // // // // // // // // // // //                   <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#B0C2B0] glow" />
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <div className="absolute -top-6 -right-6 w-20 h-20 border border-[#FFFFFF] rounded-full animate-spin-slow glow" />
// // // // // // // // // // // //                 <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[#FFFFFF] rounded-lg rotate-45 animate-pulse glow-accent" />
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>

// // // // // // // // // // // //       {/* Services Section */}
// // // // // // // // // // // //       <section
// // // // // // // // // // // //         id="services"
// // // // // // // // // // // //         ref={(el) => (sectionRefs.current.services = el)}
// // // // // // // // // // // //         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#262626]"
// // // // // // // // // // // //       >
// // // // // // // // // // // //         <div className="absolute inset-0 hex-pattern opacity-10" />
// // // // // // // // // // // //         <div className="absolute top-20 right-0 w-96 h-96 bg-[#B0C2B0]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />
// // // // // // // // // // // //         <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
// // // // // // // // // // // //         <div className="max-w-7xl mx-auto relative">
// // // // // // // // // // // //           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
// // // // // // // // // // // //             <div className="inline-block px-6 py-3 border border-[#C1B5C6] rounded-full mb-6 backdrop-blur-xl bg-[#262626]/40">
// // // // // // // // // // // //               <span className="text-xs tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">
// // // // // // // // // // // //                 The Avya Difference
// // // // // // // // // // // //               </span>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-white mb-6">
// // // // // // // // // // // //               What Makes Avya <span>Different</span>
// // // // // // // // // // // //             </h2>
// // // // // // // // // // // //             <p className="text-lg text-[#E2DBDF] max-w-2xl font-hatton mx-auto">
// // // // // // // // // // // //               Innovation, Expertise, and Care in Every Service
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 ${isVisible("services") ? "animate-stagger" : ""}`}>
// // // // // // // // // // // //             {/* Large Featured Card: Advanced Tricology */}
// // // // // // // // // // // //             <div
// // // // // // // // // // // //               className="md:col-span-4 md:row-span-2 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
// // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("tricology")}
// // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("tricology")}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <div className="absolute inset-0">
// // // // // // // // // // // //                 <img
// // // // // // // // // // // //                   src={images.tricology[imageStates.tricology]}
// // // // // // // // // // // //                   alt="Advanced Tricology"
// // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
// // // // // // // // // // // //                 />
// // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF] via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
// // // // // // // // // // // //               <div className="relative p-8 lg:p-12 h-full flex flex-col justify-end">
// // // // // // // // // // // //                 <div className="mb-6 w-16 h-16 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
// // // // // // // // // // // //                   <svg className="w-8 h-8 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
// // // // // // // // // // // //                   </svg>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <h3 className="text-3xl lg:text-4xl font-hatton font-light text-white mb-4 transform group-hover:translate-x-2 transition-transform duration-300">
// // // // // // // // // // // //                   Advanced Tricology
// // // // // // // // // // // //                 </h3>
// // // // // // // // // // // //                 <p className="text-base font-montserrat lg:text-lg leading-relaxed text-[#E2DBDF] max-w-xl transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
// // // // // // // // // // // //                   Evidence-based hair and scalp solutions using cutting-edge technology and scientific research.
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             {/* Medium Card: Premium Glam */}
// // // // // // // // // // // //             <div
// // // // // // // // // // // //               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
// // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("glam")}
// // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("glam")}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <div className="absolute inset-0">
// // // // // // // // // // // //                 <img
// // // // // // // // // // // //                   src={images.glam[imageStates.glam]}
// // // // // // // // // // // //                   alt="Premium Glam Services"
// // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
// // // // // // // // // // // //                 />
// // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/40 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
// // // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">
// // // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
// // // // // // // // // // // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
// // // // // // // // // // // //                   </svg>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-white mb-3">
// // // // // // // // // // // //                   Premium Glam Services
// // // // // // // // // // // //                 </h3>
// // // // // // // // // // // //                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">
// // // // // // // // // // // //                   Luxury hair, skin, and aesthetic treatments for transformative results.
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             {/* Small Card: Longevity Focus */}
// // // // // // // // // // // //             <div
// // // // // // // // // // // //               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
// // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("longevity")}
// // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("longevity")}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <div className="absolute inset-0">
// // // // // // // // // // // //                 <img
// // // // // // // // // // // //                   src={images.longevity[imageStates.longevity]}
// // // // // // // // // // // //                   alt="Longevity Focus"
// // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
// // // // // // // // // // // //                 />
// // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/20 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
// // // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">
// // // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
// // // // // // // // // // // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
// // // // // // // // // // // //                   </svg>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-white mb-3">
// // // // // // // // // // // //                   Longevity Focus
// // // // // // // // // // // //                 </h3>
// // // // // // // // // // // //                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">
// // // // // // // // // // // //                   Treatments that go beyond surface beauty, promoting wellness.
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             {/* Medium Card: Exclusive Experience */}
// // // // // // // // // // // //             <div
// // // // // // // // // // // //               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
// // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("exclusive")}
// // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("exclusive")}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <div className="absolute inset-0">
// // // // // // // // // // // //                 <img
// // // // // // // // // // // //                   src={images.exclusive[imageStates.exclusive]}
// // // // // // // // // // // //                   alt="Exclusive Experience"
// // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
// // // // // // // // // // // //                 />
// // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/50 to-transparent group-hover:opacity-0 transition-opacity duration-700" />
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
// // // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">
// // // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
// // // // // // // // // // // //                   <svg className="w-6 h-6 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
// // // // // // // // // // // //                   </svg>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-white mb-3">
// // // // // // // // // // // //                   Exclusive Experience
// // // // // // // // // // // //                 </h3>
// // // // // // // // // // // //                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">
// // // // // // // // // // // //                   Aesthetics, appointments, and ambiance designed for those who demand the best.
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             {/* Medium Card: Expert Care */}
// // // // // // // // // // // //             <div
// // // // // // // // // // // //               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
// // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("expert")}
// // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("expert")}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <div className="absolute inset-0">
// // // // // // // // // // // //                 <img
// // // // // // // // // // // //                   src={images.expert[imageStates.expert]}
// // // // // // // // // // // //                   alt="Expert-Led Personalized Care"
// // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
// // // // // // // // // // // //                 />
// // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/30 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
// // // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">
// // // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
// // // // // // // // // // // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
// // // // // // // // // // // //                   </svg>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-white mb-3">
// // // // // // // // // // // //                   Expert-Led Personalized Care
// // // // // // // // // // // //                 </h3>
// // // // // // // // // // // //                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">
// // // // // // // // // // // //                   Every service is tailored by internationally trained experts who understand your unique needs.
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             {/* Wide Card: Special Events */}
// // // // // // // // // // // //             <div
// // // // // // // // // // // //               className="md:col-span-6 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
// // // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("special")}
// // // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("special")}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <div className="absolute inset-0">
// // // // // // // // // // // //                 <img
// // // // // // // // // // // //                   src={images.special[imageStates.special]}
// // // // // // // // // // // //                   alt="Special Pricing Events"
// // // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-105 transition-all duration-700"
// // // // // // // // // // // //                 />
// // // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-r from-[#262626] via-[#E2DBDF]/10 to-[#262626]/50 group-hover:opacity-0 transition-opacity duration-700" />
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
// // // // // // // // // // // //               <div className="relative p-6 lg:p-10 h-full min-h-[200px] flex items-center">
// // // // // // // // // // // //                 <div className="flex items-center gap-6 lg:gap-8 max-w-4xl">
// // // // // // // // // // // //                   <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
// // // // // // // // // // // //                     <svg className="w-8 lg:w-10 h-8 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // // // // // // // // //                     </svg>
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                   <div>
// // // // // // // // // // // //                     <h3 className="text-2xl lg:text-3xl font-hatton font-light text-white mb-2">
// // // // // // // // // // // //                       Special Pricing Events
// // // // // // // // // // // //                     </h3>
// // // // // // // // // // // //                     <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">
// // // // // // // // // // // //                       Exclusive moments to enjoy your trusted treatments at special rates. Be part of our inner circle.
// // // // // // // // // // // //                     </p>
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>

// // // // // // // // // // // //       {/* CTA Section */}
// // // // // // // // // // // //       <section
// // // // // // // // // // // //         id="cta"
// // // // // // // // // // // //         ref={(el) => (sectionRefs.current.cta = el)}
// // // // // // // // // // // //         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#262626] relative overflow-hidden"
// // // // // // // // // // // //       >
// // // // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-[#262626] via-black to-[#262626] opacity-90" />
// // // // // // // // // // // //         <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B0C2B0]/10 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: "6s" }} />
// // // // // // // // // // // //         <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s", animationDelay: "2s" }} />
// // // // // // // // // // // //         <div className="relative max-w-4xl mx-auto text-center transition-all duration-1000" style={{ opacity: isVisible("cta") ? 1 : 0, transform: isVisible("cta") ? "translate-y-0" : "translate-y-8" }}>
// // // // // // // // // // // //           <div className="inline-flex items-center justify-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40 mb-8 mx-auto w-fit">
// // // // // // // // // // // //             <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />
// // // // // // // // // // // //             <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">
// // // // // // // // // // // //               Inner Circle
// // // // // // // // // // // //             </span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-white mb-6 leading-tight cyber-text">
// // // // // // // // // // // //             Join the <span className="text-gradient glow-accent">Avya Circle</span>
// // // // // // // // // // // //           </h2>
// // // // // // // // // // // //           <p className="text-lg md:text-xl text-[#B0C2B0] mb-10 max-w-2xl mx-auto leading-relaxed">
// // // // // // // // // // // //             Unlock exclusive access to special events, personalized offers, and insider beauty science insights. Be part of our community of visionaries.
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //           <button className="relative inline-block group">
// // // // // // // // // // // //             <a
// // // // // // // // // // // //               href="/contact#contact-form"
// // // // // // // // // // // //               className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               BOOK APPOINTMENT
// // // // // // // // // // // //             </a>
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Index;
// // // // // // // // // // // import { useState, useEffect, useRef } from "react";
// // // // // // // // // // // import heroTrichology from "@/assets/h3.png";
// // // // // // // // // // // import heroHairTreatments from "@/assets/ab.jpg";
// // // // // // // // // // // import tr from "@/assets/tricology.jpeg";
// // // // // // // // // // // import heroGlam from "@/assets/h2.png";
// // // // // // // // // // // import img2 from "@/assets/h6.png";
// // // // // // // // // // // import img from "@/assets/h5.png";
// // // // // // // // // // // import img1 from "@/assets/h7.png";
// // // // // // // // // // // import img3 from "@/assets/op3.png";

// // // // // // // // // // // const Index = () => {
// // // // // // // // // // //   const [imageStates, setImageStates] = useState({
// // // // // // // // // // //     tricology: 0,
// // // // // // // // // // //     glam: 0,
// // // // // // // // // // //     longevity: 0,
// // // // // // // // // // //     exclusive: 0,
// // // // // // // // // // //     expert: 0,
// // // // // // // // // // //     special: 0,
// // // // // // // // // // //   });
// // // // // // // // // // //   const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
// // // // // // // // // // //   const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
// // // // // // // // // // //   const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

// // // // // // // // // // //   const images = {
// // // // // // // // // // //     tricology: [heroHairTreatments,tr],
// // // // // // // // // // //     glam: [heroGlam, img],
// // // // // // // // // // //     longevity: [heroTrichology, img1],
// // // // // // // // // // //     exclusive: [heroHairTreatments, img2],
// // // // // // // // // // //     expert: [img, heroGlam],
// // // // // // // // // // //     special: [img1, heroTrichology],
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const particleArray = Array.from({ length: 20 }, (_, i) => ({
// // // // // // // // // // //       id: i,
// // // // // // // // // // //       x: Math.random() * 100,
// // // // // // // // // // //       y: Math.random() * 100,
// // // // // // // // // // //       delay: Math.random() * 4,
// // // // // // // // // // //     }));
// // // // // // // // // // //     setParticles(particleArray);
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // //       (entries) => {
// // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // //             setVisibleSections((prev) => new Set(prev).add(entry.target.id));
// // // // // // // // // // //           }
// // // // // // // // // // //         });
// // // // // // // // // // //       },
// // // // // // // // // // //       { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
// // // // // // // // // // //     );
// // // // // // // // // // //     Object.values(sectionRefs.current).forEach((ref) => {
// // // // // // // // // // //       if (ref) observer.observe(ref);
// // // // // // // // // // //     });
// // // // // // // // // // //     return () => observer.disconnect();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const handleMouseEnter = (key: string) => {
// // // // // // // // // // //     setImageStates((prev) => ({
// // // // // // // // // // //       ...prev,
// // // // // // // // // // //       [key]: (prev[key as keyof typeof prev] + 1) % images[key as keyof typeof images].length,
// // // // // // // // // // //     }));
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleMouseLeave = (key: string) => {
// // // // // // // // // // //     setImageStates((prev) => ({
// // // // // // // // // // //       ...prev,
// // // // // // // // // // //       [key]: 0,
// // // // // // // // // // //     }));
// // // // // // // // // // //   };

// // // // // // // // // // //   const isVisible = (id: string) => visibleSections.has(id);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="min-h-screen bg-[#E2DBDF] font-sans relative overflow-hidden">
// // // // // // // // // // //       {/* Futuristic Grid Background */}
// // // // // // // // // // //       <div className="fixed inset-0 grid-bg opacity-10 pointer-events-none" />

// // // // // // // // // // //       {/* Floating Particles */}
// // // // // // // // // // //       {particles.map((particle) => (
// // // // // // // // // // //         <div
// // // // // // // // // // //           key={particle.id}
// // // // // // // // // // //           className="fixed w-1 h-1 bg-[#B0C2B0] rounded-full particle pointer-events-none"
// // // // // // // // // // //           style={{
// // // // // // // // // // //             left: `${particle.x}%`,
// // // // // // // // // // //             top: `${particle.y}%`,
// // // // // // // // // // //             animationDelay: `${particle.delay}s`,
// // // // // // // // // // //             opacity: 0.4,
// // // // // // // // // // //           }}
// // // // // // // // // // //         />
// // // // // // // // // // //       ))}

// // // // // // // // // // //       {/* Hero Section (kept dark for contrast) */}
// // // // // // // // // // //       <section className="relative h-screen overflow-hidden bg-[#262626]">
// // // // // // // // // // //         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}>
// // // // // // // // // // //           <div className="absolute inset-0 bg-black/60" />
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
// // // // // // // // // // //           <div className="max-w-4xl">
// // // // // // // // // // //             <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
// // // // // // // // // // //               Nairobi's Premier Longevity
// // // // // // // // // // //               <br />
// // // // // // // // // // //               <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
// // // // // // // // // // //                 Beauty Salon
// // // // // // // // // // //               </span>
// // // // // // // // // // //             </h1>
// // // // // // // // // // //             <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
// // // // // // // // // // //               Where Science Meets Beauty
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
// // // // // // // // // // //           <div className="relative">
// // // // // // // // // // //             <div className="absolute inset-0 blur-lg bg-[#B0C2B0] opacity-50 rounded-full" />
// // // // // // // // // // //             <svg
// // // // // // // // // // //               className="w-6 h-6 text-white/60 relative z-10"
// // // // // // // // // // //               fill="none"
// // // // // // // // // // //               stroke="currentColor"
// // // // // // // // // // //               viewBox="0 0 24 24"
// // // // // // // // // // //             >
// // // // // // // // // // //               <path
// // // // // // // // // // //                 strokeLinecap="round"
// // // // // // // // // // //                 strokeLinejoin="round"
// // // // // // // // // // //                 strokeWidth={1.5}
// // // // // // // // // // //                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
// // // // // // // // // // //               />
// // // // // // // // // // //             </svg>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* Philosophy Section */}
// // // // // // // // // // //       <section
// // // // // // // // // // //         id="philosophy"
// // // // // // // // // // //         ref={(el) => (sectionRefs.current.philosophy = el)}
// // // // // // // // // // //         className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#E2DBDF]"
// // // // // // // // // // //       >
// // // // // // // // // // //         <div className="absolute inset-0 hex-pattern opacity-10" />
// // // // // // // // // // //         <div
// // // // // // // // // // //           className="absolute top-20 right-20 w-96 h-96 bg-[#595959]/20 rounded-full blur-[100px] glow transition-opacity duration-1000 pulse-ring"
// // // // // // // // // // //           style={{ opacity: isVisible("philosophy") ? 1 : 0, transitionDelay: "0.2s" }}
// // // // // // // // // // //         />
// // // // // // // // // // //         <div
// // // // // // // // // // //           className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-[#B0C2B0]/10 rounded-full blur-[120px] glow-accent transition-opacity duration-1000 pulse-ring"
// // // // // // // // // // //           style={{ opacity: isVisible("philosophy") ? 1 : 0, transitionDelay: "0.4s", animationDelay: "1s" }}
// // // // // // // // // // //         />
// // // // // // // // // // //         <div className="relative max-w-7xl mx-auto">
// // // // // // // // // // //           <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
// // // // // // // // // // //             <div
// // // // // // // // // // //               className={`lg:w-1/2 space-y-8 lg:pr-12 transition-all duration-1000 ${
// // // // // // // // // // //                 isVisible("philosophy") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
// // // // // // // // // // //               }`}
// // // // // // // // // // //             >
// // // // // // // // // // //               <div className="inline-flex items-start gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40">
// // // // // // // // // // //                 <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />
// // // // // // // // // // //                 <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-montserrat">
// // // // // // // // // // //                   Our Philosophy
// // // // // // // // // // //                 </span>
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] leading-tight">
// // // // // // // // // // //                 Beauty is Science,
// // // // // // // // // // //                 <br />
// // // // // // // // // // //                 And Science is Personal
// // // // // // // // // // //               </h2>
// // // // // // // // // // //               <div className="w-24 h-px bg-gradient-to-r from-[#B0C2B0] to-[#595959] glow" />
// // // // // // // // // // //               <div className="space-y-4 text-[#262626]">
// // // // // // // // // // //                 <p className="text-xl leading-relaxed font-hatton">
// // // // // // // // // // //                   At Avya, beauty is science, and science is personal. We are Kenya's first salon dedicated to
// // // // // // // // // // //                   science-meets-beauty treatments, combining advanced technology, global techniques, and luxury beauty
// // // // // // // // // // //                   rituals. Whether you're seeking a transformative experience or simply in search of a high-performance
// // // // // // // // // // //                   beauty partner, we deliver real results in a space designed for comfort, wellness, and confidence.
// // // // // // // // // // //                 </p>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <div
// // // // // // // // // // //               className={`lg:w-1/2 relative transition-all duration-1000 delay-300 font-montserrat ${
// // // // // // // // // // //                 isVisible("philosophy") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
// // // // // // // // // // //               }`}
// // // // // // // // // // //             >
// // // // // // // // // // //               <div className="relative group">
// // // // // // // // // // //                 <div className="absolute -inset-4 neon-border rounded-3xl blur-xl transition-all duration-700" />
// // // // // // // // // // //                 <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#595959]/30 glow">
// // // // // // // // // // //                   <img
// // // // // // // // // // //                     src={heroHairTreatments}
// // // // // // // // // // //                     alt="Beauty Treatment"
// // // // // // // // // // //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// // // // // // // // // // //                   />
// // // // // // // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
// // // // // // // // // // //                   <div className="absolute inset-0 holographic opacity-20 group-hover:opacity-30 transition-opacity" />
// // // // // // // // // // //                   <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#B0C2B0] glow" />
// // // // // // // // // // //                   <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#B0C2B0] glow" />
// // // // // // // // // // //                   <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#B0C2B0] glow" />
// // // // // // // // // // //                   <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#B0C2B0] glow" />
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <div className="absolute -top-6 -right-6 w-20 h-20 border border-[#FFFFFF] rounded-full animate-spin-slow glow" />
// // // // // // // // // // //                 <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[#FFFFFF] rounded-lg rotate-45 animate-pulse glow-accent" />
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* Services Section */}
// // // // // // // // // // //       <section
// // // // // // // // // // //         id="services"
// // // // // // // // // // //         ref={(el) => (sectionRefs.current.services = el)}
// // // // // // // // // // //         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#E2DBDF]"
// // // // // // // // // // //       >
// // // // // // // // // // //         <div className="absolute inset-0 hex-pattern opacity-10" />
// // // // // // // // // // //         <div className="absolute top-20 right-0 w-96 h-96 bg-[#B0C2B0]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />
// // // // // // // // // // //         <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
// // // // // // // // // // //         <div className="max-w-7xl mx-auto relative">
// // // // // // // // // // //           <div className={`text-start mb-16 transition-all duration-1000 ${isVisible("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
// // // // // // // // // // //             <div className="inline-block px-6 py-3 border border-[#C1B5C6] rounded-full mb-6 backdrop-blur-xl bg-[#262626]/40">
// // // // // // // // // // //               <span className="text-xs tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">
// // // // // // // // // // //                 The Avya Difference
// // // // // // // // // // //               </span>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] mb-6">
// // // // // // // // // // //               What Makes Avya <span>Different</span>
// // // // // // // // // // //             </h2>
// // // // // // // // // // //             <p className="text-lg text-[#262626]  font-hatton mx-auto">
// // // // // // // // // // //               Innovation, Expertise, and Care in Every Service
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 ${isVisible("services") ? "animate-stagger" : ""}`}>
// // // // // // // // // // //             {/* Large Featured Card: Advanced Tricology */}
// // // // // // // // // // //             <div
// // // // // // // // // // //               className="md:col-span-4 md:row-span-2 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
// // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("tricology")}
// // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("tricology")}
// // // // // // // // // // //             >
// // // // // // // // // // //               <div className="absolute inset-0">
// // // // // // // // // // //                 <img
// // // // // // // // // // //                   src={images.tricology[imageStates.tricology]}
// // // // // // // // // // //                   alt="Advanced Tricology"
// // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
// // // // // // // // // // //                 />
// // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF] via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
// // // // // // // // // // //               <div className="relative p-8 lg:p-12 h-full flex flex-col justify-end">
// // // // // // // // // // //                 <div className="mb-6 w-16 h-16 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
// // // // // // // // // // //                   <svg className="w-8 h-8 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
// // // // // // // // // // //                   </svg>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <h3 className="text-3xl lg:text-4xl font-hatton font-light text-white mb-4 transform group-hover:translate-x-2 transition-transform duration-300">
// // // // // // // // // // //                   Advanced Tricology
// // // // // // // // // // //                 </h3>
// // // // // // // // // // //                 <p className="text-base font-montserrat lg:text-lg leading-relaxed text-[#E2DBDF] max-w-xl transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
// // // // // // // // // // //                   Evidence-based hair and scalp solutions using cutting-edge technology and scientific research.
// // // // // // // // // // //                 </p>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             {/* Medium Card: Premium Glam */}
// // // // // // // // // // //             <div
// // // // // // // // // // //               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
// // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("glam")}
// // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("glam")}
// // // // // // // // // // //             >
// // // // // // // // // // //               <div className="absolute inset-0">
// // // // // // // // // // //                 <img
// // // // // // // // // // //                   src={images.glam[imageStates.glam]}
// // // // // // // // // // //                   alt="Premium Glam Services"
// // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
// // // // // // // // // // //                 />
// // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/40 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
// // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">
// // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
// // // // // // // // // // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
// // // // // // // // // // //                   </svg>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-white mb-3">
// // // // // // // // // // //                   Premium Glam Services
// // // // // // // // // // //                 </h3>
// // // // // // // // // // //                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">
// // // // // // // // // // //                   Luxury hair, skin, and aesthetic treatments for transformative results.
// // // // // // // // // // //                 </p>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             {/* Small Card: Longevity Focus */}
// // // // // // // // // // //             <div
// // // // // // // // // // //               className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
// // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("longevity")}
// // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("longevity")}
// // // // // // // // // // //             >
// // // // // // // // // // //               <div className="absolute inset-0">
// // // // // // // // // // //                 <img
// // // // // // // // // // //                   src={images.longevity[imageStates.longevity]}
// // // // // // // // // // //                   alt="Longevity Focus"
// // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
// // // // // // // // // // //                 />
// // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/20 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
// // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[280px] flex flex-col justify-end">
// // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
// // // // // // // // // // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
// // // // // // // // // // //                   </svg>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <h3 className="text-xl lg:text-2xl font-hatton font-light text-white mb-3">
// // // // // // // // // // //                   Longevity Focus
// // // // // // // // // // //                 </h3>
// // // // // // // // // // //                 <p className="text-sm leading-relaxed font-montserrat text-[#E2DBDF]">
// // // // // // // // // // //                   Treatments that go beyond surface beauty, promoting wellness.
// // // // // // // // // // //                 </p>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             {/* Medium Card: Exclusive Experience */}
// // // // // // // // // // //             <div
// // // // // // // // // // //               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
// // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("exclusive")}
// // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("exclusive")}
// // // // // // // // // // //             >
// // // // // // // // // // //               <div className="absolute inset-0">
// // // // // // // // // // //                 <img
// // // // // // // // // // //                   src={images.exclusive[imageStates.exclusive]}
// // // // // // // // // // //                   alt="Exclusive Experience"
// // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
// // // // // // // // // // //                 />
// // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/50 to-transparent group-hover:opacity-0 transition-opacity duration-700" />
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
// // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">
// // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
// // // // // // // // // // //                   <svg className="w-6 h-6 text-[#B0C2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
// // // // // // // // // // //                   </svg>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-white mb-3">
// // // // // // // // // // //                   Exclusive Experience
// // // // // // // // // // //                 </h3>
// // // // // // // // // // //                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">
// // // // // // // // // // //                   Aesthetics, appointments, and ambiance designed for those who demand the best.
// // // // // // // // // // //                 </p>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             {/* Medium Card: Expert Care */}
// // // // // // // // // // //             <div
// // // // // // // // // // //               className="md:col-span-3 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
// // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("expert")}
// // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("expert")}
// // // // // // // // // // //             >
// // // // // // // // // // //               <div className="absolute inset-0">
// // // // // // // // // // //                 <img
// // // // // // // // // // //                   src={images.expert[imageStates.expert]}
// // // // // // // // // // //                   alt="Expert-Led Personalized Care"
// // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 transition-all duration-700"
// // // // // // // // // // //                 />
// // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#B0C2B0]/30 via-[#262626]/50 to-[#262626] group-hover:opacity-0 transition-opacity duration-700" />
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
// // // // // // // // // // //               <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-end">
// // // // // // // // // // //                 <div className="mb-4 w-12 h-12 rounded-xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
// // // // // // // // // // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
// // // // // // // // // // //                   </svg>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <h3 className="text-2xl lg:text-3xl font-hatton font-light text-white mb-3">
// // // // // // // // // // //                   Expert-Led Personalized Care
// // // // // // // // // // //                 </h3>
// // // // // // // // // // //                 <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">
// // // // // // // // // // //                   Every service is tailored by internationally trained experts who understand your unique needs.
// // // // // // // // // // //                 </p>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             {/* Wide Card: Special Events */}
// // // // // // // // // // //             <div
// // // // // // // // // // //               className="md:col-span-6 group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
// // // // // // // // // // //               onMouseEnter={() => handleMouseEnter("special")}
// // // // // // // // // // //               onMouseLeave={() => handleMouseLeave("special")}
// // // // // // // // // // //             >
// // // // // // // // // // //               <div className="absolute inset-0">
// // // // // // // // // // //                 <img
// // // // // // // // // // //                   src={images.special[imageStates.special]}
// // // // // // // // // // //                   alt="Special Pricing Events"
// // // // // // // // // // //                   className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-105 transition-all duration-700"
// // // // // // // // // // //                 />
// // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-r from-[#262626] via-[#E2DBDF]/10 to-[#262626]/50 group-hover:opacity-0 transition-opacity duration-700" />
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <div className="absolute inset-0 border border-[#C1B5C6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
// // // // // // // // // // //               <div className="relative p-6 lg:p-10 h-full min-h-[200px] flex items-center">
// // // // // // // // // // //                 <div className="flex items-center gap-6 lg:gap-8 max-w-4xl">
// // // // // // // // // // //                   <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl border border-[#C1B5C6] backdrop-blur-xl bg-[#262626]/40 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
// // // // // // // // // // //                     <svg className="w-8 lg:w-10 h-8 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // // // // // // // //                     </svg>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <div>
// // // // // // // // // // //                     <h3 className="text-2xl lg:text-3xl font-hatton font-light text-white mb-2">
// // // // // // // // // // //                       Special Pricing Events
// // // // // // // // // // //                     </h3>
// // // // // // // // // // //                     <p className="text-sm lg:text-base font-montserrat leading-relaxed text-[#E2DBDF]">
// // // // // // // // // // //                       Exclusive moments to enjoy your trusted treatments at special rates. Be part of our inner circle.
// // // // // // // // // // //                     </p>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* CTA Section */}
// // // // // // // // // // //       <section
// // // // // // // // // // //         id="cta"
// // // // // // // // // // //         ref={(el) => (sectionRefs.current.cta = el)}
// // // // // // // // // // //         className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#E2DBDF] relative overflow-hidden"
// // // // // // // // // // //       >
// // // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-[#E2DBDF] via-white to-[#E2DBDF] opacity-90" />
// // // // // // // // // // //         <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B0C2B0]/10 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: "6s" }} />
// // // // // // // // // // //         <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#C1B5C6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s", animationDelay: "2s" }} />
// // // // // // // // // // //         <div className="relative max-w-4xl mx-auto text-center transition-all duration-1000" style={{ opacity: isVisible("cta") ? 1 : 0, transform: isVisible("cta") ? "translate-y-0" : "translate-y-8" }}>
// // // // // // // // // // //           <div className="inline-flex items-center justify-center gap-3 px-6 py-3 neon-border rounded-2xl backdrop-blur-xl bg-black/40 mb-8 mx-auto w-fit">
// // // // // // // // // // //             <div className="w-2 h-2 bg-[#B0C2B0] rounded-full glow pulse-ring" />
// // // // // // // // // // //             <span className="text-sm tracking-[0.2em] uppercase text-[#B0C2B0] font-medium">
// // // // // // // // // // //               Inner Circle
// // // // // // // // // // //             </span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-hatton font-light text-[#262626] mb-6 leading-tight cyber-text">
// // // // // // // // // // //             Join the <span className="text-gradient glow-accent">Avya Circle</span>
// // // // // // // // // // //           </h2>
// // // // // // // // // // //           <p className="text-lg md:text-xl text-[#262626] mb-10 max-w-2xl mx-auto leading-relaxed">
// // // // // // // // // // //             Unlock exclusive access to special events, personalized offers, and insider beauty science insights. Be part of our community of visionaries.
// // // // // // // // // // //           </p>
// // // // // // // // // // //           <button className="relative inline-block group">
// // // // // // // // // // //             <a
// // // // // // // // // // //               href="/loyalty"
// // // // // // // // // // //               className="bg-[#262626] hover:bg-[#595959] text-[#E2DBDF] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors"
// // // // // // // // // // //             >
// // // // // // // // // // //               Join Circle
// // // // // // // // // // //             </a>
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Index;
// // // // // // // // // // import { useState, useEffect } from "react";

// // // // // // // // // // const Index = () => {
// // // // // // // // // //   const [scrollY, setScrollY] = useState(0);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const handleScroll = () => setScrollY(window.scrollY);
// // // // // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // // // // // //   }, []);

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen bg-white font-sans">
// // // // // // // // // //       {/* Hero Section */}
// // // // // // // // // //       <section className="relative min-h-screen bg-white px-6 md:px-12 lg:px-20 py-12">
// // // // // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // // // // //           {/* Top Image Grid */}
// // // // // // // // // //           <div className="grid grid-cols-2 gap-8 mb-16">
// // // // // // // // // //             <div className="space-y-4">
// // // // // // // // // //               <div className="w-32 h-32 bg-black overflow-hidden">
// // // // // // // // // //                 <img 
// // // // // // // // // //                   src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop" 
// // // // // // // // // //                   alt="Beauty" 
// // // // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // // // //                 />
// // // // // // // // // //               </div>
// // // // // // // // // //               <p className="text-[10px] uppercase tracking-wider leading-relaxed max-w-xs">
// // // // // // // // // //                 AVYA IS AN INDEPENDENT CREATIVE SPACE DEDICATED TO BEAUTY PIONEERING. OUR TECHNICAL AND AESTHETIC EXPERTISE DELIVERS TRANSFORMATIVE EXPERIENCES AND ATTITUDES.
// // // // // // // // // //               </p>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div className="flex justify-end">
// // // // // // // // // //               <div className="w-64 h-80 bg-black overflow-hidden">
// // // // // // // // // //                 <img 
// // // // // // // // // //                   src="https://images.unsplash.com/photo-1531891570158-e71b35c89fdc?w=600&h=800&fit=crop" 
// // // // // // // // // //                   alt="Portrait" 
// // // // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // // // //                 />
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Main Headline */}
// // // // // // // // // //           <div className="mb-24">
// // // // // // // // // //             <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-light italic leading-none tracking-tight">
// // // // // // // // // //               WE ARE
// // // // // // // // // //             </h1>
// // // // // // // // // //             <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none tracking-tight -mt-8">
// // // // // // // // // //               SICKY
// // // // // // // // // //             </h1>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Middle Section */}
// // // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
// // // // // // // // // //             <div>
// // // // // // // // // //               <h2 className="text-6xl md:text-7xl font-bold mb-4 leading-none">
// // // // // // // // // //                 EVERLASTING
// // // // // // // // // //               </h2>
// // // // // // // // // //               <h2 className="text-6xl md:text-7xl font-light mb-8 leading-none">
// // // // // // // // // //                 NEW <span className="font-bold">STATIC</span>
// // // // // // // // // //               </h2>
// // // // // // // // // //               <div className="w-48 h-64 bg-black overflow-hidden">
// // // // // // // // // //                 <img 
// // // // // // // // // //                   src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop" 
// // // // // // // // // //                   alt="Portrait" 
// // // // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // // // //                 />
// // // // // // // // // //               </div>
// // // // // // // // // //               <p className="text-xs uppercase mt-4 tracking-wider">
// // // // // // // // // //                 SILA MONI
// // // // // // // // // //               </p>
// // // // // // // // // //               <p className="text-[10px] uppercase mt-8 leading-relaxed max-w-sm tracking-wider">
// // // // // // // // // //                 "I'VE CONNECT WITH OUR VISION TO CREATE THE FUTURE OF BEAUTY SCIENCE"
// // // // // // // // // //               </p>
// // // // // // // // // //               <p className="text-[10px] uppercase mt-4 tracking-wider">
// // // // // // // // // //                 SEE MORE
// // // // // // // // // //               </p>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div className="flex flex-col justify-between">
// // // // // // // // // //               <div className="w-48 h-64 bg-black overflow-hidden ml-auto mb-8">
// // // // // // // // // //                 <img 
// // // // // // // // // //                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop" 
// // // // // // // // // //                   alt="Portrait" 
// // // // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // // // //                 />
// // // // // // // // // //               </div>
// // // // // // // // // //               <div>
// // // // // // // // // //                 <p className="text-xs uppercase mb-4 tracking-wider max-w-sm">
// // // // // // // // // //                   01. I AM INSANE SAY CLIENTS. COUNSELING FOR U.S COMMUNITY IS A COMMUNITY WHICH CHANGES THE WORLD.
// // // // // // // // // //                 </p>
// // // // // // // // // //                 <p className="text-[10px] uppercase leading-relaxed tracking-wider">
// // // // // // // // // //                   FUTURE MALL BREAHLO BRANDAN FROM TANZANIA A COMPANY THAT BELIEVES IN THE POWER TO PRMIGOST EQUALITY.
// // // // // // // // // //                 </p>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* The Science Section */}
// // // // // // // // // //           <div className="mb-24 relative">
// // // // // // // // // //             <h2 className="text-[100px] md:text-[140px] lg:text-[180px] font-bold leading-none">
// // // // // // // // // //               THE
// // // // // // // // // //             </h2>
// // // // // // // // // //             <h2 className="text-[100px] md:text-[140px] lg:text-[180px] font-bold leading-none -mt-8">
// // // // // // // // // //               SILENCE
// // // // // // // // // //             </h2>
// // // // // // // // // //             <div className="absolute right-0 bottom-0 text-right">
// // // // // // // // // //               <p className="text-[80px] md:text-[100px] font-light">2013</p>
// // // // // // // // // //             </div>
            
// // // // // // // // // //             <div className="grid grid-cols-2 gap-8 mt-12">
// // // // // // // // // //               <div className="w-full h-80 bg-black overflow-hidden">
// // // // // // // // // //                 <img 
// // // // // // // // // //                   src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=800&fit=crop" 
// // // // // // // // // //                   alt="Portrait" 
// // // // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // // // //                 />
// // // // // // // // // //               </div>
// // // // // // // // // //               <div className="flex items-end">
// // // // // // // // // //                 <div className="w-full h-64 bg-black overflow-hidden">
// // // // // // // // // //                   <img 
// // // // // // // // // //                     src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop" 
// // // // // // // // // //                     alt="Portrait" 
// // // // // // // // // //                     className="w-full h-full object-cover grayscale"
// // // // // // // // // //                   />
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             <p className="text-xs uppercase mt-8 tracking-wider max-w-2xl leading-relaxed">
// // // // // // // // // //               "WE SHALL WITH PERSONAL AND CENTED TO ENCOURAGING HEALING WOMEN PIONEERED FROM ALL CULTURES, ETHNISIES AND BLACK IN EVERY COMMUNITY"
// // // // // // // // // //             </p>
// // // // // // // // // //             <p className="text-[10px] uppercase mt-4 tracking-wider">
// // // // // // // // // //               O: A PLACE OF EMPURITY. AND WE ALWAYS EMPAHATICE "THE HOPE FROM WHICH, THAT'S."
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Scrolling Text */}
// // // // // // // // // //           <div className="overflow-hidden border-t border-b border-black py-4 mb-24">
// // // // // // // // // //             <div className="whitespace-nowrap animate-marquee">
// // // // // // // // // //               <span className="text-sm uppercase tracking-wider mx-8">
// // // // // // // // // //                 EMBRACE THE DIFFERENCE · EMBRACE THE DIFFERENCE · EMBRACE THE DIFFERENCE · EMBRACE THE DIFFERENCE
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* CTA Section */}
// // // // // // // // // //           <div className="mb-24">
// // // // // // // // // //             <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
// // // // // // // // // //               READY BE<br/>DIFFERENT?
// // // // // // // // // //             </h2>
// // // // // // // // // //             <div className="flex items-center gap-8">
// // // // // // // // // //               <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
// // // // // // // // // //               </svg>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Footer */}
// // // // // // // // // //           <div className="border-t border-black pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
// // // // // // // // // //             <div>
// // // // // // // // // //               <h3 className="text-xs uppercase tracking-wider font-bold mb-4">OUR SOCIAL</h3>
// // // // // // // // // //               <div className="space-y-2">
// // // // // // // // // //                 <p className="text-xs uppercase tracking-wider">INSTAGRAM</p>
// // // // // // // // // //                 <p className="text-xs uppercase tracking-wider">FACEBOOK</p>
// // // // // // // // // //                 <p className="text-xs uppercase tracking-wider">TWITTER</p>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div>
// // // // // // // // // //               <h3 className="text-xs uppercase tracking-wider font-bold mb-4">CONTACT US</h3>
// // // // // // // // // //               <div className="space-y-2">
// // // // // // // // // //                 <p className="text-xs uppercase tracking-wider">TELEPHONE</p>
// // // // // // // // // //                 <p className="text-xs uppercase tracking-wider">EMAIL</p>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Bottom Text */}
// // // // // // // // // //           <div className="mt-12 text-[8px] uppercase tracking-wider leading-relaxed opacity-60">
// // // // // // // // // //             <p>
// // // // // // // // // //               ISSA ROAD, KARYOBONGI, BRADA HIGH CORNER OTHER SOMAE ISSA ROTAMODA, OUR O OUR COPYRIGHT. OUR TERM ABOUT.
// // // // // // // // // //             </p>
// // // // // // // // // //             <p className="mt-2">
// // // // // // // // // //               HTML-LARA · GRAPHIC DESIGNERS©2013
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       <style jsx>{`
// // // // // // // // // //         @keyframes marquee {
// // // // // // // // // //           0% {
// // // // // // // // // //             transform: translateX(0);
// // // // // // // // // //           }
// // // // // // // // // //           100% {
// // // // // // // // // //             transform: translateX(-50%);
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //         .animate-marquee {
// // // // // // // // // //           display: inline-block;
// // // // // // // // // //           animation: marquee 20s linear infinite;
// // // // // // // // // //         }
// // // // // // // // // //       `}</style>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Index;
// // // // // // // // // import { useState, useEffect } from "react";

// // // // // // // // // const Index = () => {
// // // // // // // // //   const [scrollY, setScrollY] = useState(0);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handleScroll = () => setScrollY(window.scrollY);
// // // // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-white font-sans">
// // // // // // // // //       {/* Hero Section */}
// // // // // // // // //       <section className="relative min-h-screen bg-white px-6 md:px-12 lg:px-20 py-12">
// // // // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // // // //           {/* Top Image Grid */}
// // // // // // // // //           <div className="grid grid-cols-2 gap-8 mb-16">
// // // // // // // // //             <div className="space-y-4">
// // // // // // // // //               <div className="w-32 h-32 bg-black overflow-hidden">
// // // // // // // // //                 <img 
// // // // // // // // //                   src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop" 
// // // // // // // // //                   alt="Avya Beauty" 
// // // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //               <p className="text-[10px] uppercase tracking-wider leading-relaxed max-w-xs">
// // // // // // // // //                 KENYA'S FIRST SCIENCE-MEETS-BEAUTY LUXURY SALON. ADVANCED HAIRCARE, PRECISION TECHNIQUES, AND PERSONALIZED SERVICE IN AN ELEVATED, EXCLUSIVE ENVIRONMENT.
// // // // // // // // //               </p>
// // // // // // // // //             </div>
// // // // // // // // //             <div className="flex justify-end">
// // // // // // // // //               <div className="w-64 h-80 bg-black overflow-hidden">
// // // // // // // // //                 <img 
// // // // // // // // //                   src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop" 
// // // // // // // // //                   alt="Beauty Portrait" 
// // // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Main Headline */}
// // // // // // // // //           <div className="mb-24">
// // // // // // // // //             <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-light italic leading-none tracking-tight">
// // // // // // // // //               WE ARE
// // // // // // // // //             </h1>
// // // // // // // // //             <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none tracking-tight -mt-8">
// // // // // // // // //               AVYA
// // // // // // // // //             </h1>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Middle Section - Science & Beauty */}
// // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
// // // // // // // // //             <div>
// // // // // // // // //               <h2 className="text-6xl md:text-7xl font-bold mb-4 leading-none">
// // // // // // // // //                 SCIENCE
// // // // // // // // //               </h2>
// // // // // // // // //               <h2 className="text-6xl md:text-7xl font-light mb-8 leading-none">
// // // // // // // // //                 MEETS <span className="font-bold">BEAUTY</span>
// // // // // // // // //               </h2>
// // // // // // // // //               <div className="w-48 h-64 bg-black overflow-hidden">
// // // // // // // // //                 <img 
// // // // // // // // //                   src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop" 
// // // // // // // // //                   alt="Haircare" 
// // // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //               <p className="text-xs uppercase mt-4 tracking-wider">
// // // // // // // // //                 ADVANCED TRICOLOGY
// // // // // // // // //               </p>
// // // // // // // // //               <p className="text-[10px] uppercase mt-8 leading-relaxed max-w-sm tracking-wider">
// // // // // // // // //                 "FROM RESTORATIVE SCALP THERAPIES TO TRANSFORMATIVE STYLING, EVERY TREATMENT IS THOUGHTFULLY TAILORED TO YOUR UNIQUE NEEDS."
// // // // // // // // //               </p>
// // // // // // // // //               <p className="text-[10px] uppercase mt-4 tracking-wider">
// // // // // // // // //                 DISCOVER MORE
// // // // // // // // //               </p>
// // // // // // // // //             </div>
// // // // // // // // //             <div className="flex flex-col justify-between">
// // // // // // // // //               <div className="w-48 h-64 bg-black overflow-hidden ml-auto mb-8">
// // // // // // // // //                 <img 
// // // // // // // // //                   src="https://images.unsplash.com/photo-1595475884562-073c30d45670?w=400&h=600&fit=crop" 
// // // // // // // // //                   alt="Beauty Treatment" 
// // // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //               <div>
// // // // // // // // //                 <p className="text-xs uppercase mb-4 tracking-wider max-w-sm">
// // // // // // // // //                   01. EVIDENCE-BASED HAIR AND SCALP SOLUTIONS USING CUTTING-EDGE TECHNOLOGY AND SCIENTIFIC RESEARCH.
// // // // // // // // //                 </p>
// // // // // // // // //                 <p className="text-[10px] uppercase leading-relaxed tracking-wider">
// // // // // // // // //                   AVYA IS MORE THAN A SALON - IT'S NAIROBI'S PREMIER LONGEVITY BEAUTY SPA, WHERE INNOVATION AND INDULGENCE COME TOGETHER FOR TRULY EXCEPTIONAL HAIR AND BEAUTY.
// // // // // // // // //                 </p>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* The Avya Way Section */}
// // // // // // // // //           <div className="mb-24 relative">
// // // // // // // // //             <h2 className="text-[100px] md:text-[140px] lg:text-[180px] font-bold leading-none">
// // // // // // // // //               THE
// // // // // // // // //             </h2>
// // // // // // // // //             <h2 className="text-[100px] md:text-[140px] lg:text-[180px] font-bold leading-none -mt-8">
// // // // // // // // //               AVYA WAY
// // // // // // // // //             </h2>
// // // // // // // // //             <div className="absolute right-0 bottom-0 text-right">
// // // // // // // // //               <p className="text-[80px] md:text-[100px] font-light">2025</p>
// // // // // // // // //             </div>
            
// // // // // // // // //             <div className="grid grid-cols-2 gap-8 mt-12">
// // // // // // // // //               <div className="w-full h-3000 bg-black overflow-hidden">
// // // // // // // // //                 <img 
// // // // // // // // //                   src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop" 
// // // // // // // // //                   alt="Luxury Treatment" 
// // // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex items-end">
// // // // // // // // //                 <div className="w-full h-64 bg-black overflow-hidden">
// // // // // // // // //                   <img 
// // // // // // // // //                     src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop" 
// // // // // // // // //                     alt="Wellness" 
// // // // // // // // //                     className="w-full h-full object-cover grayscale"
// // // // // // // // //                   />
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             <p className="text-xs uppercase mt-8 tracking-wider max-w-2xl leading-relaxed">
// // // // // // // // //               "DELIVERING CONFIDENCE, TRANSFORMATION, AND TOTAL WELL-BEING. WE LEAD THE FUTURE OF BEAUTY IN AFRICA BY OFFERING AN UNMATCHED, EXCLUSIVE EXPERIENCE THAT FUSES SCIENCE-BACKED INNOVATION, LUXURY, AND PERSONALIZED CARE."
// // // // // // // // //             </p>
// // // // // // // // //             <p className="text-[10px] uppercase mt-4 tracking-wider">
// // // // // // // // //               SETTING A NEW STANDARD IN BEAUTY AND WELLNESS.
// // // // // // // // //             </p>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Services Grid */}
// // // // // // // // //           <div className="mb-24">
// // // // // // // // //             <h3 className="text-4xl md:text-5xl font-bold mb-12">WHAT SETS US APART</h3>
            
// // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
// // // // // // // // //               <div className="border-t-2 border-black pt-4">
// // // // // // // // //                 <h4 className="text-xl font-bold mb-2 uppercase">Advanced Tricology</h4>
// // // // // // // // //                 <p className="text-xs uppercase tracking-wide leading-relaxed">
// // // // // // // // //                   Evidence-based hair and scalp solutions using cutting-edge technology and scientific research.
// // // // // // // // //                 </p>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="border-t-2 border-black pt-4">
// // // // // // // // //                 <h4 className="text-xl font-bold mb-2 uppercase">Premium Glam Services</h4>
// // // // // // // // //                 <p className="text-xs uppercase tracking-wide leading-relaxed">
// // // // // // // // //                   Luxury hair, skin, and aesthetic treatments for transformative results.
// // // // // // // // //                 </p>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="border-t-2 border-black pt-4">
// // // // // // // // //                 <h4 className="text-xl font-bold mb-2 uppercase">Longevity Focus</h4>
// // // // // // // // //                 <p className="text-xs uppercase tracking-wide leading-relaxed">
// // // // // // // // //                   Treatments that go beyond surface beauty, promoting wellness.
// // // // // // // // //                 </p>
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // // // // // //               <div className="border-t-2 border-black pt-4">
// // // // // // // // //                 <h4 className="text-xl font-bold mb-2 uppercase">Exclusive Experience</h4>
// // // // // // // // //                 <p className="text-xs uppercase tracking-wide leading-relaxed">
// // // // // // // // //                   Aesthetics, appointments, and ambiance designed for those who demand the best.
// // // // // // // // //                 </p>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="border-t-2 border-black pt-4">
// // // // // // // // //                 <h4 className="text-xl font-bold mb-2 uppercase">Expert-Led Care</h4>
// // // // // // // // //                 <p className="text-xs uppercase tracking-wide leading-relaxed">
// // // // // // // // //                   Every service is tailored by internationally trained experts who understand your unique needs.
// // // // // // // // //                 </p>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="border-t-2 border-black pt-4">
// // // // // // // // //                 <h4 className="text-xl font-bold mb-2 uppercase">Special Events</h4>
// // // // // // // // //                 <p className="text-xs uppercase tracking-wide leading-relaxed">
// // // // // // // // //                   Exclusive moments to enjoy your trusted treatments at special rates. Be part of our inner circle.
// // // // // // // // //                 </p>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Scrolling Text */}
// // // // // // // // //           <div className="overflow-hidden border-t border-b border-black py-4 mb-24">
// // // // // // // // //             <div className="whitespace-nowrap animate-marquee">
// // // // // // // // //               <span className="text-sm uppercase tracking-wider mx-8">
// // // // // // // // //                 SCIENCE-BACKED INNOVATION · LUXURY · PERSONALIZED CARE · SCIENCE-BACKED INNOVATION · LUXURY · PERSONALIZED CARE
// // // // // // // // //               </span>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       <style jsx>{`
// // // // // // // // //         @keyframes marquee {
// // // // // // // // //           0% {
// // // // // // // // //             transform: translateX(0);
// // // // // // // // //           }
// // // // // // // // //           100% {
// // // // // // // // //             transform: translateX(-50%);
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //         .animate-marquee {
// // // // // // // // //           display: inline-block;
// // // // // // // // //           animation: marquee 25s linear infinite;
// // // // // // // // //         }
// // // // // // // // //       `}</style>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Index;
// // // // // // // // import { useState, useEffect } from "react";

// // // // // // // // const Index = () => {
// // // // // // // //   const [scrollY, setScrollY] = useState(0);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const handleScroll = () => setScrollY(window.scrollY);
// // // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-[#E2DBDF] px-4 md:px-12 lg:px-20 pb-20 ">
// // // // // // // //       {/* Hero Section */}
// // // // // // // //       <section className="relative px-8 md:px-16 py-8">
// // // // // // // //         <div className="max-w-[1400px] mx-auto">
          
// // // // // // // //           {/* <div className="grid grid-cols-12 gap-8 mb-20">
            
// // // // // // // //             <div className="col-span-12 md:col-span-5">
// // // // // // // //               <div className="w-28 h-36 border-4 border-black mb-6 overflow-hidden">
// // // // // // // //                 <img 
// // // // // // // //                   src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=400&fit=crop" 
// // // // // // // //                   alt="Avya" 
// // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //               <p className="text-[9px] uppercase tracking-wide leading-[1.6] max-w-[200px] font-medium">
// // // // // // // //                 KENYA'S FIRST SCIENCE-MEETS-BEAUTY LUXURY SALON. ADVANCED HAIRCARE, PRECISION TECHNIQUES, AND PERSONALIZED SERVICE IN AN ELEVATED ENVIRONMENT.
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //             <div className="col-span-12 md:col-span-7 flex justify-end">
// // // // // // // //               <div className="w-full max-w-[450px] h-[500px] overflow-hidden">
// // // // // // // //                 <img 
// // // // // // // //                   src="https://images.unsplash.com/photo-1531891570158-e71b35c89fdc?w=800&h=1000&fit=crop" 
// // // // // // // //                   alt="Beauty Portrait" 
// // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div> */}

// // // // // // // //           {/* Main Headline - WE ARE AVYA */}
// // // // // // // //           <div className="mb-32">
// // // // // // // //             <div className="relative">
// // // // // // // //               <h1 className="text-[100px] md:text-[160px] lg:text-[200px] font-light italic leading-[0.85] tracking-tight">
// // // // // // // //                 WE ARE
// // // // // // // //               </h1>
// // // // // // // //               <h1 className="text-[100px] md:text-[160px] lg:text-[200px] font-black leading-[0.85] tracking-tighter -mt-4">
// // // // // // // //                 AVYA
// // // // // // // //               </h1>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* SCIENCE MEETS BEAUTY Section */}
// // // // // // // //           <div className="grid grid-cols-12 gap-8 mb-32">
// // // // // // // //             {/* Left Column */}
// // // // // // // //             <div className="col-span-12 md:col-span-6">
// // // // // // // //               <h2 className="text-[70px] md:text-[90px] font-black leading-[0.9] mb-2">
// // // // // // // //                 SCIENCE
// // // // // // // //               </h2>
// // // // // // // //               <h2 className="text-[70px] md:text-[90px] leading-[0.9] mb-12">
// // // // // // // //                 MEETS <span className="font-black">BEAUTY</span>
// // // // // // // //               </h2>
              
// // // // // // // //               {/* Portrait */}
// // // // // // // //               <div className="w-full max-w-[280px] h-[380px] bg-black overflow-hidden mb-4">
// // // // // // // //                 <img 
// // // // // // // //                   src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop" 
// // // // // // // //                   alt="Treatment" 
// // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //               <p className="text-[10px] uppercase tracking-wide font-bold mb-8">
// // // // // // // //                 ADVANCED TRICOLOGY
// // // // // // // //               </p>
              
// // // // // // // //               <p className="text-[9px] uppercase tracking-wide leading-[1.7] max-w-[280px] mb-4">
// // // // // // // //                 "FROM RESTORATIVE SCALP THERAPIES TO TRANSFORMATIVE STYLING, EVERY TREATMENT IS THOUGHTFULLY TAILORED."
// // // // // // // //               </p>
// // // // // // // //               <p className="text-[9px] uppercase tracking-wide font-bold">
// // // // // // // //                 DISCOVER MORE
// // // // // // // //               </p>
// // // // // // // //             </div>

// // // // // // // //             {/* Right Column */}
// // // // // // // //             <div className="col-span-12 md:col-span-6 flex flex-col">
// // // // // // // //               {/* Top Portrait */}
// // // // // // // //               <div className="w-full max-w-[280px] h-[380px] bg-black overflow-hidden ml-auto mb-8">
// // // // // // // //                 <img 
// // // // // // // //                   src="https://images.unsplash.com/photo-1595475884562-073c30d45670?w=400&h=600&fit=crop" 
// // // // // // // //                   alt="Expert" 
// // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // //                 />
// // // // // // // //               </div>
              
// // // // // // // //               {/* Text Content */}
// // // // // // // //               <div className="ml-auto max-w-[320px]">
// // // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7] mb-6">
// // // // // // // //                   01. I AM INSANE SAY CLIENTS. EVIDENCE-BASED HAIR AND SCALP SOLUTIONS USING CUTTING-EDGE TECHNOLOGY.
// // // // // // // //                 </p>
// // // // // // // //                 <p className="text-[9px] uppercase tracking-wide leading-[1.7]">
// // // // // // // //                   AVYA IS MORE THAN A SALON - IT'S NAIROBI'S PREMIER LONGEVITY BEAUTY SPA WHERE INNOVATION AND INDULGENCE MEET.
// // // // // // // //                 </p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* THE SILENCE Section - Now THE AVYA WAY */}
// // // // // // // //           <div className="mb-32 relative">
// // // // // // // //             <div className="relative">
// // // // // // // //               <h2 className="text-[120px] md:text-[180px] font-black leading-[0.85]">
// // // // // // // //                 THE
// // // // // // // //               </h2>
// // // // // // // //               <h2 className="text-[120px] md:text-[180px] font-black leading-[0.85] -mt-6">
// // // // // // // //                 AVYA WAY
// // // // // // // //               </h2>
              
// // // // // // // //               {/* Year positioned absolutely */}
// // // // // // // //               <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
// // // // // // // //                 <p className="text-[120px] md:text-[160px] font-light leading-none">
// // // // // // // //                   2025
// // // // // // // //                 </p>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Two Images Below */}
// // // // // // // //             <div className="grid grid-cols-12 gap-6 mt-16 mb-12">
// // // // // // // //               <div className="col-span-6 h-[400px] bg-black overflow-hidden">
// // // // // // // //                 <img 
// // // // // // // //                   src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=700&h=900&fit=crop" 
// // // // // // // //                   alt="Luxury" 
// // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //               <div className="col-span-6 h-[400px] bg-black overflow-hidden">
// // // // // // // //                 <img 
// // // // // // // //                   src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=700&h=900&fit=crop" 
// // // // // // // //                   alt="Wellness" 
// // // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Quote Text */}
// // // // // // // //             <div className="max-w-[900px]">
// // // // // // // //               <p className="text-[11px] uppercase tracking-wide leading-[1.8] mb-4">
// // // // // // // //                 "DELIVERING CONFIDENCE, TRANSFORMATION, AND TOTAL WELL-BEING. WE LEAD THE FUTURE OF BEAUTY IN AFRICA BY OFFERING AN UNMATCHED EXCLUSIVE EXPERIENCE."
// // // // // // // //               </p>
// // // // // // // //               <p className="text-[9px] uppercase tracking-wide">
// // // // // // // //                 SETTING A NEW STANDARD IN BEAUTY AND WELLNESS THROUGH SCIENCE-BACKED INNOVATION.
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Services Grid */}
// // // // // // // //           <div className="mb-32">
// // // // // // // //             <h3 className="text-[50px] md:text-[60px] font-black mb-16 uppercase">
// // // // // // // //               What Sets Us Apart
// // // // // // // //             </h3>
            
// // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
// // // // // // // //               <div className="border-t-2 border-black pt-6">
// // // // // // // //                 <h4 className="text-[16px] font-black mb-3 uppercase tracking-tight">
// // // // // // // //                   Advanced Tricology
// // // // // // // //                 </h4>
// // // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7]">
// // // // // // // //                   Evidence-based hair and scalp solutions using cutting-edge technology and scientific research.
// // // // // // // //                 </p>
// // // // // // // //               </div>
              
// // // // // // // //               <div className="border-t-2 border-black pt-6">
// // // // // // // //                 <h4 className="text-[16px] font-black mb-3 uppercase tracking-tight">
// // // // // // // //                   Premium Glam Services
// // // // // // // //                 </h4>
// // // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7]">
// // // // // // // //                   Luxury hair, skin, and aesthetic treatments for transformative results.
// // // // // // // //                 </p>
// // // // // // // //               </div>
              
// // // // // // // //               <div className="border-t-2 border-black pt-6">
// // // // // // // //                 <h4 className="text-[16px] font-black mb-3 uppercase tracking-tight">
// // // // // // // //                   Longevity Focus
// // // // // // // //                 </h4>
// // // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7]">
// // // // // // // //                   Treatments that go beyond surface beauty, promoting wellness.
// // // // // // // //                 </p>
// // // // // // // //               </div>
              
// // // // // // // //               <div className="border-t-2 border-black pt-6">
// // // // // // // //                 <h4 className="text-[16px] font-black mb-3 uppercase tracking-tight">
// // // // // // // //                   Exclusive Experience
// // // // // // // //                 </h4>
// // // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7]">
// // // // // // // //                   Aesthetics, appointments, and ambiance designed for those who demand the best.
// // // // // // // //                 </p>
// // // // // // // //               </div>
              
// // // // // // // //               <div className="border-t-2 border-black pt-6">
// // // // // // // //                 <h4 className="text-[16px] font-black mb-3 uppercase tracking-tight">
// // // // // // // //                   Expert-Led Care
// // // // // // // //                 </h4>
// // // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7]">
// // // // // // // //                   Every service is tailored by internationally trained experts who understand your unique needs.
// // // // // // // //                 </p>
// // // // // // // //               </div>
              
// // // // // // // //               <div className="border-t-2 border-black pt-6">
// // // // // // // //                 <h4 className="text-[16px] font-black mb-3 uppercase tracking-tight">
// // // // // // // //                   Special Events
// // // // // // // //                 </h4>
// // // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7]">
// // // // // // // //                   Exclusive moments to enjoy your trusted treatments at special rates. Be part of our inner circle.
// // // // // // // //                 </p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>

          
// // // // // // // //         </div>
// // // // // // // //       </section>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Index;
// // // // // // // import { useState, useEffect } from "react";

// // // // // // // const Index = () => {
// // // // // // //   const [scrollY, setScrollY] = useState(0);

// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => setScrollY(window.scrollY);
// // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-[#E2DBDF] px-4 md:px-12 lg:px-20 pb-20">
// // // // // // //       {/* Hero Section */}
// // // // // // //       <section className="relative px-8 md:px-16 py-8">
// // // // // // //         <div className="max-w-[1400px] mx-auto">
// // // // // // //           {/* Main Headline - WE ARE AVYA */}
// // // // // // //           <div className="mb-16">
// // // // // // //             <div className="relative">
// // // // // // //               <h1 className="text-[100px] md:text-[160px] lg:text-[200px] font-light italic leading-[0.85] tracking-tight">
// // // // // // //                 WE ARE
// // // // // // //               </h1>
// // // // // // //               <h1 className="text-[100px] md:text-[160px] lg:text-[200px] font-black leading-[0.85] tracking-tighter -mt-4">
// // // // // // //                 AVYA
// // // // // // //               </h1>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* THE AVYA WAY Section - Moved to Hero */}
// // // // // // //           <div className="mb-32 relative">
// // // // // // //             <div className="relative">
// // // // // // //               <h2 className="text-[120px] md:text-[180px] font-black leading-[0.85]">
// // // // // // //                 THE
// // // // // // //               </h2>
// // // // // // //               <h2 className="text-[120px] md:text-[180px] font-black leading-[0.85] -mt-6">
// // // // // // //                 AVYA WAY
// // // // // // //               </h2>

// // // // // // //               {/* Year positioned absolutely */}
// // // // // // //               <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
// // // // // // //                 <p className="text-[120px] md:text-[160px] font-light leading-none">
// // // // // // //                   2025
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Two Images Below */}
// // // // // // //             <div className="grid grid-cols-12 gap-6 mt-16 mb-12">
// // // // // // //               <div className="col-span-6 h-[400px] bg-black overflow-hidden">
// // // // // // //                 <img
// // // // // // //                   src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=700&h=900&fit=crop"
// // // // // // //                   alt="Luxury"
// // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <div className="col-span-6 h-[400px] bg-black overflow-hidden">
// // // // // // //                 <img
// // // // // // //                   src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=700&h=900&fit=crop"
// // // // // // //                   alt="Wellness"
// // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Quote Text */}
// // // // // // //             <div className="max-w-[900px]">
// // // // // // //               <p className="text-[11px] uppercase tracking-wide leading-[1.8] mb-4">
// // // // // // //                 "DELIVERING CONFIDENCE, TRANSFORMATION, AND TOTAL WELL-BEING. WE LEAD THE FUTURE OF BEAUTY IN AFRICA BY OFFERING AN UNMATCHED EXCLUSIVE EXPERIENCE."
// // // // // // //               </p>
// // // // // // //               <p className="text-[9px] uppercase tracking-wide">
// // // // // // //                 SETTING A NEW STANDARD IN BEAUTY AND WELLNESS THROUGH SCIENCE-BACKED INNOVATION.
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* SCIENCE MEETS BEAUTY Section */}
// // // // // // //           <div className="grid grid-cols-12 gap-8 mb-32">
// // // // // // //             {/* Left Column */}
// // // // // // //             <div className="col-span-12 md:col-span-6">
// // // // // // //               <h2 className="text-[70px] md:text-[90px] font-black leading-[0.9] mb-2">
// // // // // // //                 SCIENCE
// // // // // // //               </h2>
// // // // // // //               <h2 className="text-[70px] md:text-[90px] leading-[0.9] mb-12">
// // // // // // //                 MEETS <span className="font-black">BEAUTY</span>
// // // // // // //               </h2>

// // // // // // //               {/* Portrait */}
// // // // // // //               <div className="w-full max-w-[280px] h-[380px] bg-black overflow-hidden mb-4">
// // // // // // //                 <img
// // // // // // //                   src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop"
// // // // // // //                   alt="Treatment"
// // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <p className="text-[10px] uppercase tracking-wide font-bold mb-8">
// // // // // // //                 ADVANCED TRICOLOGY
// // // // // // //               </p>

// // // // // // //               <p className="text-[9px] uppercase tracking-wide leading-[1.7] max-w-[280px] mb-4">
// // // // // // //                 "FROM RESTORATIVE SCALP THERAPIES TO TRANSFORMATIVE STYLING, EVERY TREATMENT IS THOUGHTFULLY TAILORED."
// // // // // // //               </p>
// // // // // // //               <p className="text-[9px] uppercase tracking-wide font-bold">
// // // // // // //                 DISCOVER MORE
// // // // // // //               </p>
// // // // // // //             </div>

// // // // // // //             {/* Right Column */}
// // // // // // //             <div className="col-span-12 md:col-span-6 flex flex-col">
// // // // // // //               {/* Top Portrait */}
// // // // // // //               <div className="w-full max-w-[280px] h-[380px] bg-black overflow-hidden ml-auto mb-8">
// // // // // // //                 <img
// // // // // // //                   src="https://images.unsplash.com/photo-1595475884562-073c30d45670?w=400&h=600&fit=crop"
// // // // // // //                   alt="Expert"
// // // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // // //                 />
// // // // // // //               </div>

// // // // // // //               {/* Text Content */}
// // // // // // //               <div className="ml-auto max-w-[320px]">
// // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7] mb-6">
// // // // // // //                   01. I AM INSANE SAY CLIENTS. EVIDENCE-BASED HAIR AND SCALP SOLUTIONS USING CUTTING-EDGE TECHNOLOGY.
// // // // // // //                 </p>
// // // // // // //                 <p className="text-[9px] uppercase tracking-wide leading-[1.7]">
// // // // // // //                   AVYA IS MORE THAN A SALON - IT'S NAIROBI'S PREMIER LONGEVITY BEAUTY SPA WHERE INNOVATION AND INDULGENCE MEET.
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Services Grid */}
// // // // // // //           <div className="mb-32">
// // // // // // //             <h3 className="text-[50px] md:text-[60px] font-black mb-16 uppercase">
// // // // // // //               What Sets Us Apart
// // // // // // //             </h3>

// // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
// // // // // // //               <div className="border-t-2 border-black pt-6">
// // // // // // //                 <h4 className="text-[16px] font-black mb-3 uppercase tracking-tight">
// // // // // // //                   Advanced Tricology
// // // // // // //                 </h4>
// // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7]">
// // // // // // //                   Evidence-based hair and scalp solutions using cutting-edge technology and scientific research.
// // // // // // //                 </p>
// // // // // // //               </div>

// // // // // // //               <div className="border-t-2 border-black pt-6">
// // // // // // //                 <h4 className="text-[16px] font-black mb-3 uppercase tracking-tight">
// // // // // // //                   Premium Glam Services
// // // // // // //                 </h4>
// // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7]">
// // // // // // //                   Luxury hair, skin, and aesthetic treatments for transformative results.
// // // // // // //                 </p>
// // // // // // //               </div>

// // // // // // //               <div className="border-t-2 border-black pt-6">
// // // // // // //                 <h4 className="text-[16px] font-black mb-3 uppercase tracking-tight">
// // // // // // //                   Longevity Focus
// // // // // // //                 </h4>
// // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7]">
// // // // // // //                   Treatments that go beyond surface beauty, promoting wellness.
// // // // // // //                 </p>
// // // // // // //               </div>

// // // // // // //               <div className="border-t-2 border-black pt-6">
// // // // // // //                 <h4 className="text-[16px] font-black mb-3 uppercase tracking-tight">
// // // // // // //                   Exclusive Experience
// // // // // // //                 </h4>
// // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7]">
// // // // // // //                   Aesthetics, appointments, and ambiance designed for those who demand the best.
// // // // // // //                 </p>
// // // // // // //               </div>

// // // // // // //               <div className="border-t-2 border-black pt-6">
// // // // // // //                 <h4 className="text-[16px] font-black mb-3 uppercase tracking-tight">
// // // // // // //                   Expert-Led Care
// // // // // // //                 </h4>
// // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7]">
// // // // // // //                   Every service is tailored by internationally trained experts who understand your unique needs.
// // // // // // //                 </p>
// // // // // // //               </div>

// // // // // // //               <div className="border-t-2 border-black pt-6">
// // // // // // //                 <h4 className="text-[16px] font-black mb-3 uppercase tracking-tight">
// // // // // // //                   Special Events
// // // // // // //                 </h4>
// // // // // // //                 <p className="text-[10px] uppercase tracking-wide leading-[1.7]">
// // // // // // //                   Exclusive moments to enjoy your trusted treatments at special rates. Be part of our inner circle.
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Index;
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { motion } from "framer-motion";

// // // // // // const features = [
// // // // // //   {
// // // // // //     title: "ADVANCED TRICOLOGY",
// // // // // //     description: "Evidence-based hair and scalp solutions powered by scientific innovation for healthier, resilient locks.",
// // // // // //     number: "01"
// // // // // //   },
// // // // // //   {
// // // // // //     title: "PREMIUM GLAM SERVICES",
// // // // // //     description: "Indulgent hair, skin, and aesthetic rituals that unlock radiant, transformative beauty.",
// // // // // //     number: "02"
// // // // // //   },
// // // // // //   {
// // // // // //     title: "LONGEVITY FOCUS",
// // // // // //     description: "Treatments designed for enduring wellness, nurturing body and spirit in equal measure.",
// // // // // //     number: "03"
// // // // // //   },
// // // // // //   {
// // // // // //     title: "EXCLUSIVE EXPERIENCES",
// // // // // //     description: "Curated aesthetics, seamless appointments, and serene ambiance for discerning visionaries.",
// // // // // //     number: "04"
// // // // // //   },
// // // // // //   {
// // // // // //     title: "EXPERT-LED CARE",
// // // // // //     description: "Tailored by global masters who intuitively understand your journey.",
// // // // // //     number: "05"
// // // // // //   },
// // // // // //   {
// // // // // //     title: "INNER CIRCLE EVENTS",
// // // // // //     description: "Join our community for privileged access to limited-edition offerings and insider insights.",
// // // // // //     number: "06"
// // // // // //   }
// // // // // // ];

// // // // // // export default function About() {
// // // // // //   const [scrollY, setScrollY] = useState(0);

// // // // // //   useEffect(() => {
// // // // // //     window.scrollTo(0, 0);
// // // // // //     const handleScroll = () => setScrollY(window.scrollY);
// // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-[#FAFAF9]">
// // // // // //       {/* HERO SECTION */}
// // // // // //       <div className="relative min-h-screen bg-[#E2DBDF] overflow-hidden">
// // // // // //         <div className="relative z-10 pt-20 px-6 md:px-12">
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 1 }}
// // // // // //             className="max-w-7xl mx-auto"
// // // // // //           >
// // // // // //             <div className="mb-8">
// // // // // //               <p className="text-[#595959] text-sm md:text-base tracking-[0.3em] mb-4 font-light">
// // // // // //                 NAIROBI, KENYA — EST. 2025
// // // // // //               </p>
// // // // // //             </div>
            
// // // // // //             <h1 className="text-[#262626] font-bold leading-[0.85] mb-12">
// // // // // //               <span className="block text-[12vw] md:text-[10vw]">WE ARE</span>
// // // // // //               <span className="block text-[12vw] md:text-[10vw] italic">AVYA</span>
// // // // // //             </h1>
// // // // // //           </motion.div>
// // // // // //         </div>

// // // // // //         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20">
// // // // // //           <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, x: -30 }}
// // // // // //               animate={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ duration: 1, delay: 0.3 }}
// // // // // //               className="relative"
// // // // // //             >
// // // // // //               <div className="relative aspect-[3/4] overflow-hidden">
// // // // // //                 <img
// // // // // //                   src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
// // // // // //                   alt="Avya Beauty"
// // // // // //                   className="w-full h-full object-cover grayscale"
// // // // // //                 />
// // // // // //                 <div className="absolute top-6 left-6 bg-[#E2DBDF] px-4 py-2">
// // // // // //                   <p className="text-[#262626] text-xs tracking-[0.2em] font-medium">
// // // // // //                     SCIENCE × BEAUTY
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </motion.div>

// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, x: 30 }}
// // // // // //               animate={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ duration: 1, delay: 0.5 }}
// // // // // //               className="space-y-8 mt-0 md:mt-20"
// // // // // //             >
// // // // // //               <div>
// // // // // //                 <h2 className="text-[#262626] text-4xl md:text-5xl font-bold mb-6 leading-tight">
// // // // // //                   KENYA'S FIRST
// // // // // //                   <br />
// // // // // //                   <span className="italic">SCIENCE-MEETS-BEAUTY</span>
// // // // // //                   <br />
// // // // // //                   LUXURY SALON
// // // // // //                 </h2>
// // // // // //               </div>

// // // // // //               <div className="space-y-6">
// // // // // //                 <p className="text-[#595959] text-base md:text-lg leading-relaxed font-light">
// // // // // //                   AVYA IS AN INDEPENDENT EXCLUSIVE LUXURY SALON WHICH PROMOTES ADVANCED TRICOLOGY, 
// // // // // //                   PRECISION TECHNIQUES, AND PERSONALIZED WELLNESS RITUALS WITH THE BEST INTERNATIONAL 
// // // // // //                   TRAINED SPECIALISTS.
// // // // // //                 </p>
                
// // // // // //                 <p className="text-[#595959] text-base md:text-lg leading-relaxed font-light">
// // // // // //                   AT AVYA, WE REDEFINE BEAUTY THROUGH THE LENS OF SCIENCE AND LONGEVITY. 
// // // // // //                   MORE THAN A SALON—IT'S A PREMIER LONGEVITY BEAUTY SPA WHERE INNOVATION 
// // // // // //                   MEETS INDULGENCE.
// // // // // //                 </p>
// // // // // //               </div>

// // // // // //               <div className="pt-6">
// // // // // //                 <button className="bg-[#262626] text-[#E2DBDF] px-10 py-4 text-sm tracking-[0.2em] font-medium hover:bg-[#595959] transition-colors duration-300">
// // // // // //                   BOOK EXPERIENCE
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </motion.div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 30 }}
// // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 1, delay: 0.7 }}
// // // // // //           className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20"
// // // // // //         >
// // // // // //           <div className="relative aspect-[21/9] overflow-hidden">
// // // // // //             <img
// // // // // //               src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1600&q=80"
// // // // // //               alt="Avya Experience"
// // // // // //               className="w-full h-full object-cover grayscale"
// // // // // //             />
// // // // // //           </div>
// // // // // //         </motion.div>
// // // // // //       </div>

// // // // // //       {/* PHILOSOPHY SECTION */}
// // // // // //       <section className="bg-[#262626] py-24 px-6 md:px-12">
// // // // // //         <div className="max-w-7xl mx-auto">
// // // // // //           <div className="grid lg:grid-cols-5 gap-12 items-center">
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 0.8 }}
// // // // // //               viewport={{ once: true }}
// // // // // //               className="lg:col-span-3"
// // // // // //             >
// // // // // //               <h2 className="text-[#E2DBDF] font-bold leading-[0.9] mb-12">
// // // // // //                 <span className="block text-6xl md:text-8xl">BEAUTY IS</span>
// // // // // //                 <span className="block text-6xl md:text-8xl italic">SCIENCE</span>
// // // // // //               </h2>

// // // // // //               <div className="space-y-8 max-w-2xl">
// // // // // //                 <p className="text-[#C1B5C6] text-lg md:text-xl leading-relaxed font-light">
// // // // // //                   WE BELIEVE TRUE BEAUTY EMERGES FROM A HARMONIOUS BLEND OF CUTTING-EDGE 
// // // // // //                   TECHNOLOGY, EVIDENCE-BASED RESEARCH, AND BESPOKE CARE.
// // // // // //                 </p>
                
// // // // // //                 <p className="text-[#B0C2B0] text-lg md:text-xl leading-relaxed font-light">
// // // // // //                   FOUNDED IN 2025, AVYA WAS BORN FROM A VISION TO ELEVATE AFRICAN BEAUTY 
// // // // // //                   STANDARDS BY INTEGRATING GLOBAL EXPERTISE WITH LOCAL EMPOWERMENT.
// // // // // //                 </p>

// // // // // //                 <div className="border-l-2 border-[#C1B5C6] pl-6 mt-12">
// // // // // //                   <p className="text-[#E2DBDF] text-base font-light italic">
// // // // // //                     "Our internationally trained specialists craft every treatment to your unique needs"
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </motion.div>

// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, x: 30 }}
// // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ duration: 0.8 }}
// // // // // //               viewport={{ once: true }}
// // // // // //               className="lg:col-span-2"
// // // // // //             >
// // // // // //               <div className="space-y-6">
// // // // // //                 <div className="aspect-[3/4] overflow-hidden">
// // // // // //                   <img
// // // // // //                     src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80"
// // // // // //                     alt="Philosophy"
// // // // // //                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <div className="bg-[#E2DBDF] p-6">
// // // // // //                   <p className="text-[#262626] text-xs tracking-[0.2em] font-medium">
// // // // // //                     ELEVATED. EXCLUSIVE. TRANSFORMATIVE.
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </motion.div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* FEATURES SECTION */}
// // // // // //       <section className="bg-[#E2DBDF] py-24 px-6 md:px-12">
// // // // // //         <div className="max-w-7xl mx-auto">
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.8 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="mb-20"
// // // // // //           >
// // // // // //             <h2 className="text-[#262626] font-bold leading-[0.9] mb-8">
// // // // // //               <span className="block text-5xl md:text-7xl">WHAT SETS</span>
// // // // // //               <span className="block text-5xl md:text-7xl italic">AVYA APART</span>
// // // // // //             </h2>
// // // // // //             <p className="text-[#595959] text-sm tracking-[0.2em] mt-6">
// // // // // //               SIX PILLARS OF EXCELLENCE
// // // // // //             </p>
// // // // // //           </motion.div>

// // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 0.6 }}
// // // // // //               viewport={{ once: true }}
// // // // // //               className="lg:col-span-2 lg:row-span-2"
// // // // // //             >
// // // // // //               <div className="h-full bg-[#262626] p-8 md:p-12 flex flex-col justify-between">
// // // // // //                 <div>
// // // // // //                   <span className="text-[#C1B5C6] text-7xl md:text-9xl font-bold opacity-30">
// // // // // //                     {features[0].number}
// // // // // //                   </span>
// // // // // //                 </div>
// // // // // //                 <div>
// // // // // //                   <h3 className="text-[#E2DBDF] text-3xl md:text-4xl font-bold mb-6 leading-tight">
// // // // // //                     {features[0].title}
// // // // // //                   </h3>
// // // // // //                   <p className="text-[#B0C2B0] text-lg leading-relaxed font-light">
// // // // // //                     {features[0].description}
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </motion.div>

// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 0.6, delay: 0.1 }}
// // // // // //               viewport={{ once: true }}
// // // // // //               className="aspect-square"
// // // // // //             >
// // // // // //               <img
// // // // // //                 src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80"
// // // // // //                 alt="Treatment"
// // // // // //                 className="w-full h-full object-cover grayscale"
// // // // // //               />
// // // // // //             </motion.div>

// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 0.6, delay: 0.2 }}
// // // // // //               viewport={{ once: true }}
// // // // // //               className="bg-[#C1B5C6] p-8"
// // // // // //             >
// // // // // //               <span className="text-[#262626] text-5xl font-bold opacity-50">
// // // // // //                 {features[1].number}
// // // // // //               </span>
// // // // // //               <h3 className="text-[#262626] text-2xl font-bold mt-6 mb-4">
// // // // // //                 {features[1].title}
// // // // // //               </h3>
// // // // // //               <p className="text-[#262626] text-sm leading-relaxed font-light">
// // // // // //                 {features[1].description}
// // // // // //               </p>
// // // // // //             </motion.div>

// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 0.6, delay: 0.3 }}
// // // // // //               viewport={{ once: true }}
// // // // // //               className="bg-[#B0C2B0] p-8"
// // // // // //             >
// // // // // //               <span className="text-[#262626] text-5xl font-bold opacity-50">
// // // // // //                 {features[2].number}
// // // // // //               </span>
// // // // // //               <h3 className="text-[#262626] text-2xl font-bold mt-6 mb-4">
// // // // // //                 {features[2].title}
// // // // // //               </h3>
// // // // // //               <p className="text-[#262626] text-sm leading-relaxed font-light">
// // // // // //                 {features[2].description}
// // // // // //               </p>
// // // // // //             </motion.div>

// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ duration: 0.6, delay: 0.4 }}
// // // // // //               viewport={{ once: true }}
// // // // // //               className="aspect-square"
// // // // // //             >
// // // // // //               <img
// // // // // //                 src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80"
// // // // // //                 alt="Salon"
// // // // // //                 className="w-full h-full object-cover grayscale"
// // // // // //               />
// // // // // //             </motion.div>

// // // // // //             {features.slice(3).map((feature, index) => (
// // // // // //               <motion.div
// // // // // //                 key={feature.number}
// // // // // //                 initial={{ opacity: 0, y: 30 }}
// // // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // // //                 transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
// // // // // //                 viewport={{ once: true }}
// // // // // //                 className="border-2 border-[#595959] p-8 hover:bg-[#262626] hover:border-[#262626] transition-colors duration-300 group"
// // // // // //               >
// // // // // //                 <span className="text-[#595959] group-hover:text-[#C1B5C6] text-5xl font-bold opacity-50 transition-colors">
// // // // // //                   {feature.number}
// // // // // //                 </span>
// // // // // //                 <h3 className="text-[#262626] group-hover:text-[#E2DBDF] text-2xl font-bold mt-6 mb-4 transition-colors">
// // // // // //                   {feature.title}
// // // // // //                 </h3>
// // // // // //                 <p className="text-[#595959] group-hover:text-[#B0C2B0] text-sm leading-relaxed font-light transition-colors">
// // // // // //                   {feature.description}
// // // // // //                 </p>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* CALL TO ACTION SECTION */}
// // // // // //       <section className="bg-[#262626] py-24 px-6 md:px-12">
// // // // // //         <div className="max-w-7xl mx-auto">
// // // // // //           <div className="grid lg:grid-cols-2 gap-16 items-center">
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, x: -30 }}
// // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ duration: 0.8 }}
// // // // // //               viewport={{ once: true }}
// // // // // //             >
// // // // // //               <div className="mb-12">
// // // // // //                 <p className="text-[#C1B5C6] text-sm tracking-[0.3em] mb-8 font-light">
// // // // // //                   THE AVYA WAY
// // // // // //                 </p>
                
// // // // // //                 <h2 className="text-[#E2DBDF] font-bold leading-[0.9] mb-12">
// // // // // //                   <span className="block text-5xl md:text-7xl">EVERLASTING</span>
// // // // // //                   <span className="block text-5xl md:text-7xl italic">NEW STATIC</span>
// // // // // //                 </h2>
// // // // // //               </div>

// // // // // //               <div className="space-y-8 mb-12">
// // // // // //                 <p className="text-[#B0C2B0] text-lg md:text-xl leading-relaxed font-light italic">
// // // // // //                   "Delivering confidence, transformation, and total well-being. We lead the future 
// // // // // //                   of beauty in Africa by offering an unmatched, exclusive experience that fuses 
// // // // // //                   science-backed innovation, luxury, and personalized care."
// // // // // //                 </p>
                
// // // // // //                 <p className="text-[#C1B5C6] text-base leading-relaxed font-light">
// // // // // //                   FROM RESTORATIVE THERAPIES TO VISIONARY STYLING, AVYA EMPOWERS YOU TO EMBRACE 
// // // // // //                   THE EXTRAORDINARY. DISCOVER YOUR MOST CONFIDENT SELF—WHERE SCIENCE MEETS BEAUTY, 
// // // // // //                   AND BEAUTY BECOMES ETERNAL.
// // // // // //                 </p>
// // // // // //               </div>

// // // // // //               <div className="space-y-4">
// // // // // //                 <button className="w-full md:w-auto bg-[#E2DBDF] text-[#262626] px-12 py-4 text-sm tracking-[0.2em] font-medium hover:bg-[#C1B5C6] transition-colors duration-300">
// // // // // //                   SCHEDULE CONSULTATION
// // // // // //                 </button>
// // // // // //                 <button className="w-full md:w-auto border-2 border-[#595959] text-[#E2DBDF] px-12 py-4 text-sm tracking-[0.2em] font-medium hover:border-[#E2DBDF] hover:bg-[#E2DBDF] hover:text-[#262626] transition-all duration-300 md:ml-4">
// // // // // //                   JOIN INNER CIRCLE
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </motion.div>

// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, x: 30 }}
// // // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ duration: 0.8 }}
// // // // // //               viewport={{ once: true }}
// // // // // //             >
// // // // // //               <div className="space-y-6">
// // // // // //                 <div className="aspect-[4/5] overflow-hidden">
// // // // // //                   <img
// // // // // //                     src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80"
// // // // // //                     alt="Avya Treatment"
// // // // // //                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <div className="grid grid-cols-2 gap-6">
// // // // // //                   <div className="aspect-square overflow-hidden">
// // // // // //                     <img
// // // // // //                       src="https://images.unsplash.com/photo-1528991435120-e73e05a58897?w=400&q=80"
// // // // // //                       alt="Detail 1"
// // // // // //                       className="w-full h-full object-cover grayscale"
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                   <div className="aspect-square bg-[#C1B5C6] flex items-center justify-center p-6">
// // // // // //                     <p className="text-[#262626] text-xs tracking-[0.2em] text-center font-medium">
// // // // // //                       ALL OUR TREATMENTS ARE CREATED EXCLUSIVELY FOR OUR COMMUNITY BY A TEAM OF EXPERTS AROUND THE WORLD
// // // // // //                     </p>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </motion.div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import React, { useEffect, useState } from "react";
// // // // // import { motion } from "framer-motion";

// // // // // const features = [
// // // // //   {
// // // // //     title: "ADVANCED TRICOLOGY",
// // // // //     description: "Evidence-based hair and scalp solutions powered by scientific innovation for healthier, resilient locks.",
// // // // //     number: "01"
// // // // //   },
// // // // //   {
// // // // //     title: "PREMIUM GLAM SERVICES",
// // // // //     description: "Indulgent hair, skin, and aesthetic rituals that unlock radiant, transformative beauty.",
// // // // //     number: "02"
// // // // //   },
// // // // //   {
// // // // //     title: "LONGEVITY FOCUS",
// // // // //     description: "Treatments designed for enduring wellness, nurturing body and spirit in equal measure.",
// // // // //     number: "03"
// // // // //   },
// // // // //   {
// // // // //     title: "EXCLUSIVE EXPERIENCES",
// // // // //     description: "Curated aesthetics, seamless appointments, and serene ambiance for discerning visionaries.",
// // // // //     number: "04"
// // // // //   },
// // // // //   {
// // // // //     title: "EXPERT-LED CARE",
// // // // //     description: "Tailored by global masters who intuitively understand your journey.",
// // // // //     number: "05"
// // // // //   },
// // // // //   {
// // // // //     title: "INNER CIRCLE EVENTS",
// // // // //     description: "Join our community for privileged access to limited-edition offerings and insider insights.",
// // // // //     number: "06"
// // // // //   }
// // // // // ];

// // // // // export default function About() {
// // // // //   const [scrollY, setScrollY] = useState(0);

// // // // //   useEffect(() => {
// // // // //     window.scrollTo(0, 0);
// // // // //     const handleScroll = () => setScrollY(window.scrollY);
// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="min-h-screen bg-[#FAFAF9]">
// // // // //       {/* HERO SECTION */}
// // // // //       <div className="relative min-h-screen bg-[#E2DBDF] overflow-hidden">
// // // // //         <div className="relative z-10 pt-20 px-6 md:px-12">
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 30 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 1 }}
// // // // //             className="max-w-7xl mx-auto"
// // // // //           >
// // // // //             <div className="mb-8">
// // // // //               <p className="text-[#595959] text-sm md:text-base tracking-[0.3em] mb-4 font-light">
// // // // //                 NAIROBI, KENYA — EST. 2025
// // // // //               </p>
// // // // //             </div>
            
// // // // //             <h1 className="text-[#262626] font-bold leading-[0.85] mb-12">
// // // // //               <span className="block text-[12vw] md:text-[10vw]">WE ARE</span>
// // // // //               <span className="block text-[12vw] md:text-[10vw] italic">AVYA</span>
// // // // //             </h1>
// // // // //           </motion.div>
// // // // //         </div>

// // // // //         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20">
// // // // //           <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, x: -30 }}
// // // // //               animate={{ opacity: 1, x: 0 }}
// // // // //               transition={{ duration: 1, delay: 0.3 }}
// // // // //               className="relative"
// // // // //             >
// // // // //               <div className="relative aspect-[3/4] overflow-hidden">
// // // // //                 <img
// // // // //                   src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
// // // // //                   alt="Avya Beauty"
// // // // //                   className="w-full h-full object-cover grayscale"
// // // // //                 />
// // // // //                 <div className="absolute top-6 left-6 bg-[#E2DBDF] px-4 py-2">
// // // // //                   <p className="text-[#262626] text-xs tracking-[0.2em] font-medium">
// // // // //                     SCIENCE × BEAUTY
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </motion.div>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, x: 30 }}
// // // // //               animate={{ opacity: 1, x: 0 }}
// // // // //               transition={{ duration: 1, delay: 0.5 }}
// // // // //               className="space-y-8 mt-0 md:mt-20"
// // // // //             >
// // // // //               <div>
// // // // //                 <h2 className="text-[#262626] text-4xl md:text-5xl font-bold mb-6 leading-tight">
// // // // //                   KENYA'S FIRST
// // // // //                   <br />
// // // // //                   <span className="italic">SCIENCE-MEETS-BEAUTY</span>
// // // // //                   <br />
// // // // //                   LUXURY SALON
// // // // //                 </h2>
// // // // //               </div>

// // // // //               <div className="space-y-6">
// // // // //                 <p className="text-[#595959] text-base md:text-lg leading-relaxed font-light">
// // // // //                   AVYA IS AN INDEPENDENT EXCLUSIVE LUXURY SALON WHICH PROMOTES ADVANCED TRICOLOGY, 
// // // // //                   PRECISION TECHNIQUES, AND PERSONALIZED WELLNESS RITUALS WITH THE BEST INTERNATIONAL 
// // // // //                   TRAINED SPECIALISTS.
// // // // //                 </p>
                
// // // // //                 <p className="text-[#595959] text-base md:text-lg leading-relaxed font-light">
// // // // //                   AT AVYA, WE REDEFINE BEAUTY THROUGH THE LENS OF SCIENCE AND LONGEVITY. 
// // // // //                   MORE THAN A SALON—IT'S A PREMIER LONGEVITY BEAUTY SPA WHERE INNOVATION 
// // // // //                   MEETS INDULGENCE.
// // // // //                 </p>
// // // // //               </div>

// // // // //               <div className="pt-6">
// // // // //                 <button className="bg-[#262626] text-[#E2DBDF] px-10 py-4 text-sm tracking-[0.2em] font-medium hover:bg-[#595959] transition-colors duration-300">
// // // // //                   BOOK EXPERIENCE
// // // // //                 </button>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           </div>
// // // // //         </div>

// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 30 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 1, delay: 0.7 }}
// // // // //           className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20"
// // // // //         >
// // // // //           <div className="relative aspect-[21/9] overflow-hidden">
// // // // //             <img
// // // // //               src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1600&q=80"
// // // // //               alt="Avya Experience"
// // // // //               className="w-full h-full object-cover grayscale"
// // // // //             />
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       </div>

// // // // //       {/* PHILOSOPHY SECTION */}
// // // // //       <section className="bg-[#262626] py-24 px-6 md:px-12">
// // // // //         <div className="max-w-7xl mx-auto">
// // // // //           <div className="grid lg:grid-cols-5 gap-12 items-center">
// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 30 }}
// // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.8 }}
// // // // //               viewport={{ once: true }}
// // // // //               className="lg:col-span-3"
// // // // //             >
// // // // //               <h2 className="text-[#E2DBDF] font-bold leading-[0.9] mb-12">
// // // // //                 <span className="block text-6xl md:text-8xl">BEAUTY IS</span>
// // // // //                 <span className="block text-6xl md:text-8xl italic">SCIENCE</span>
// // // // //               </h2>

// // // // //               <div className="space-y-8 max-w-2xl">
// // // // //                 <p className="text-[#C1B5C6] text-lg md:text-xl leading-relaxed font-light">
// // // // //                   WE BELIEVE TRUE BEAUTY EMERGES FROM A HARMONIOUS BLEND OF CUTTING-EDGE 
// // // // //                   TECHNOLOGY, EVIDENCE-BASED RESEARCH, AND BESPOKE CARE.
// // // // //                 </p>
                
// // // // //                 <p className="text-[#B0C2B0] text-lg md:text-xl leading-relaxed font-light">
// // // // //                   FOUNDED IN 2025, AVYA WAS BORN FROM A VISION TO ELEVATE AFRICAN BEAUTY 
// // // // //                   STANDARDS BY INTEGRATING GLOBAL EXPERTISE WITH LOCAL EMPOWERMENT.
// // // // //                 </p>

// // // // //                 <div className="border-l-2 border-[#C1B5C6] pl-6 mt-12">
// // // // //                   <p className="text-[#E2DBDF] text-base font-light italic">
// // // // //                     "Our internationally trained specialists craft every treatment to your unique needs"
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </motion.div>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, x: 30 }}
// // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // //               transition={{ duration: 0.8 }}
// // // // //               viewport={{ once: true }}
// // // // //               className="lg:col-span-2"
// // // // //             >
// // // // //               <div className="space-y-6">
// // // // //                 <div className="aspect-[3/4] overflow-hidden">
// // // // //                   <img
// // // // //                     src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80"
// // // // //                     alt="Philosophy"
// // // // //                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div className="bg-[#E2DBDF] p-6">
// // // // //                   <p className="text-[#262626] text-xs tracking-[0.2em] font-medium">
// // // // //                     ELEVATED. EXCLUSIVE. TRANSFORMATIVE.
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* FEATURES SECTION */}
// // // // //       <section className="bg-[#E2DBDF] py-24 px-6 md:px-12">
// // // // //         <div className="max-w-7xl mx-auto">
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 30 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.8 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="mb-20"
// // // // //           >
// // // // //             <h2 className="text-[#262626] font-bold leading-[0.9] mb-8">
// // // // //               <span className="block text-5xl md:text-7xl">WHAT SETS</span>
// // // // //               <span className="block text-5xl md:text-7xl italic">AVYA APART</span>
// // // // //             </h2>
// // // // //             <p className="text-[#595959] text-sm tracking-[0.2em] mt-6">
// // // // //               SIX PILLARS OF EXCELLENCE
// // // // //             </p>
// // // // //           </motion.div>

// // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 30 }}
// // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.6 }}
// // // // //               viewport={{ once: true }}
// // // // //               className="lg:col-span-2 lg:row-span-2"
// // // // //             >
// // // // //               <div className="h-full bg-[#262626] p-8 md:p-12 flex flex-col justify-between">
// // // // //                 <div>
// // // // //                   <span className="text-[#C1B5C6] text-7xl md:text-9xl font-bold opacity-30">
// // // // //                     {features[0].number}
// // // // //                   </span>
// // // // //                 </div>
// // // // //                 <div>
// // // // //                   <h3 className="text-[#E2DBDF] text-3xl md:text-4xl font-bold mb-6 leading-tight">
// // // // //                     {features[0].title}
// // // // //                   </h3>
// // // // //                   <p className="text-[#B0C2B0] text-lg leading-relaxed font-light">
// // // // //                     {features[0].description}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </motion.div>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 30 }}
// // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.6, delay: 0.1 }}
// // // // //               viewport={{ once: true }}
// // // // //               className="aspect-square"
// // // // //             >
// // // // //               <img
// // // // //                 src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80"
// // // // //                 alt="Treatment"
// // // // //                 className="w-full h-full object-cover grayscale"
// // // // //               />
// // // // //             </motion.div>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 30 }}
// // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.6, delay: 0.2 }}
// // // // //               viewport={{ once: true }}
// // // // //               className="bg-[#C1B5C6] p-8"
// // // // //             >
// // // // //               <span className="text-[#262626] text-5xl font-bold opacity-50">
// // // // //                 {features[1].number}
// // // // //               </span>
// // // // //               <h3 className="text-[#262626] text-2xl font-bold mt-6 mb-4">
// // // // //                 {features[1].title}
// // // // //               </h3>
// // // // //               <p className="text-[#262626] text-sm leading-relaxed font-light">
// // // // //                 {features[1].description}
// // // // //               </p>
// // // // //             </motion.div>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 30 }}
// // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.6, delay: 0.3 }}
// // // // //               viewport={{ once: true }}
// // // // //               className="bg-[#B0C2B0] p-8"
// // // // //             >
// // // // //               <span className="text-[#262626] text-5xl font-bold opacity-50">
// // // // //                 {features[2].number}
// // // // //               </span>
// // // // //               <h3 className="text-[#262626] text-2xl font-bold mt-6 mb-4">
// // // // //                 {features[2].title}
// // // // //               </h3>
// // // // //               <p className="text-[#262626] text-sm leading-relaxed font-light">
// // // // //                 {features[2].description}
// // // // //               </p>
// // // // //             </motion.div>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 30 }}
// // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.6, delay: 0.4 }}
// // // // //               viewport={{ once: true }}
// // // // //               className="aspect-square"
// // // // //             >
// // // // //               <img
// // // // //                 src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80"
// // // // //                 alt="Salon"
// // // // //                 className="w-full h-full object-cover grayscale"
// // // // //               />
// // // // //             </motion.div>

// // // // //             {features.slice(3).map((feature, index) => (
// // // // //               <motion.div
// // // // //                 key={feature.number}
// // // // //                 initial={{ opacity: 0, y: 30 }}
// // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
// // // // //                 viewport={{ once: true }}
// // // // //                 className="border-2 border-[#595959] p-8 hover:bg-[#262626] hover:border-[#262626] transition-colors duration-300 group"
// // // // //               >
// // // // //                 <span className="text-[#595959] group-hover:text-[#C1B5C6] text-5xl font-bold opacity-50 transition-colors">
// // // // //                   {feature.number}
// // // // //                 </span>
// // // // //                 <h3 className="text-[#262626] group-hover:text-[#E2DBDF] text-2xl font-bold mt-6 mb-4 transition-colors">
// // // // //                   {feature.title}
// // // // //                 </h3>
// // // // //                 <p className="text-[#595959] group-hover:text-[#B0C2B0] text-sm leading-relaxed font-light transition-colors">
// // // // //                   {feature.description}
// // // // //                 </p>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* CALL TO ACTION SECTION */}
// // // // //       <section className="bg-[#262626] py-24 px-6 md:px-12">
// // // // //         <div className="max-w-7xl mx-auto">
// // // // //           <div className="grid lg:grid-cols-2 gap-16 items-center">
// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, x: -30 }}
// // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // //               transition={{ duration: 0.8 }}
// // // // //               viewport={{ once: true }}
// // // // //             >
// // // // //               <div className="mb-12">
// // // // //                 <p className="text-[#C1B5C6] text-sm tracking-[0.3em] mb-8 font-light">
// // // // //                   THE AVYA WAY
// // // // //                 </p>
                
// // // // //                 <h2 className="text-[#E2DBDF] font-bold leading-[0.9] mb-12">
// // // // //                   <span className="block text-5xl md:text-7xl">EVERLASTING</span>
// // // // //                   <span className="block text-5xl md:text-7xl italic">NEW STATIC</span>
// // // // //                 </h2>
// // // // //               </div>

// // // // //               <div className="space-y-8 mb-12">
// // // // //                 <p className="text-[#B0C2B0] text-lg md:text-xl leading-relaxed font-light italic">
// // // // //                   "Delivering confidence, transformation, and total well-being. We lead the future 
// // // // //                   of beauty in Africa by offering an unmatched, exclusive experience that fuses 
// // // // //                   science-backed innovation, luxury, and personalized care."
// // // // //                 </p>
                
// // // // //                 <p className="text-[#C1B5C6] text-base leading-relaxed font-light">
// // // // //                   FROM RESTORATIVE THERAPIES TO VISIONARY STYLING, AVYA EMPOWERS YOU TO EMBRACE 
// // // // //                   THE EXTRAORDINARY. DISCOVER YOUR MOST CONFIDENT SELF—WHERE SCIENCE MEETS BEAUTY, 
// // // // //                   AND BEAUTY BECOMES ETERNAL.
// // // // //                 </p>
// // // // //               </div>

// // // // //               <div className="space-y-4">
// // // // //                 <button className="w-full md:w-auto bg-[#E2DBDF] text-[#262626] px-12 py-4 text-sm tracking-[0.2em] font-medium hover:bg-[#C1B5C6] transition-colors duration-300">
// // // // //                   SCHEDULE CONSULTATION
// // // // //                 </button>
// // // // //                 <button className="w-full md:w-auto border-2 border-[#595959] text-[#E2DBDF] px-12 py-4 text-sm tracking-[0.2em] font-medium hover:border-[#E2DBDF] hover:bg-[#E2DBDF] hover:text-[#262626] transition-all duration-300 md:ml-4">
// // // // //                   JOIN INNER CIRCLE
// // // // //                 </button>
// // // // //               </div>
// // // // //             </motion.div>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, x: 30 }}
// // // // //               whileInView={{ opacity: 1, x: 0 }}
// // // // //               transition={{ duration: 0.8 }}
// // // // //               viewport={{ once: true }}
// // // // //             >
// // // // //               <div className="space-y-6">
// // // // //                 <div className="aspect-[4/5] overflow-hidden">
// // // // //                   <img
// // // // //                     src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80"
// // // // //                     alt="Avya Treatment"
// // // // //                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div className="grid grid-cols-2 gap-6">
// // // // //                   <div className="aspect-square overflow-hidden">
// // // // //                     <img
// // // // //                       src="https://images.unsplash.com/photo-1528991435120-e73e05a58897?w=400&q=80"
// // // // //                       alt="Detail 1"
// // // // //                       className="w-full h-full object-cover grayscale"
// // // // //                     />
// // // // //                   </div>
// // // // //                   <div className="aspect-square bg-[#C1B5C6] flex items-center justify-center p-6">
// // // // //                     <p className="text-[#262626] text-xs tracking-[0.2em] text-center font-medium">
// // // // //                       ALL OUR TREATMENTS ARE CREATED EXCLUSIVELY FOR OUR COMMUNITY BY A TEAM OF EXPERTS AROUND THE WORLD
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import React, { useEffect, useState } from "react";
// // // // import { motion } from "framer-motion";

// // // // const features = [
// // // //   {
// // // //     title: "ADVANCED TRICOLOGY",
// // // //     description: "Evidence-based hair and scalp solutions powered by scientific innovation for healthier, resilient locks.",
// // // //     number: "01"
// // // //   },
// // // //   {
// // // //     title: "PREMIUM GLAM SERVICES",
// // // //     description: "Indulgent hair, skin, and aesthetic rituals that unlock radiant, transformative beauty.",
// // // //     number: "02"
// // // //   },
// // // //   {
// // // //     title: "LONGEVITY FOCUS",
// // // //     description: "Treatments designed for enduring wellness, nurturing body and spirit in equal measure.",
// // // //     number: "03"
// // // //   },
// // // //   {
// // // //     title: "EXCLUSIVE EXPERIENCES",
// // // //     description: "Curated aesthetics, seamless appointments, and serene ambiance for discerning visionaries.",
// // // //     number: "04"
// // // //   },
// // // //   {
// // // //     title: "EXPERT-LED CARE",
// // // //     description: "Tailored by global masters who intuitively understand your journey.",
// // // //     number: "05"
// // // //   },
// // // //   {
// // // //     title: "INNER CIRCLE EVENTS",
// // // //     description: "Join our community for privileged access to limited-edition offerings and insider insights.",
// // // //     number: "06"
// // // //   }
// // // // ];

// // // // export default function About() {
// // // //   const [scrollY, setScrollY] = useState(0);

// // // //   useEffect(() => {
// // // //     window.scrollTo(0, 0);
// // // //     const handleScroll = () => setScrollY(window.scrollY);
// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   return (
// // // //     <div className="min-h-screen">
// // // //       {/* HERO SECTION WITH BACKGROUND IMAGE */}
// // // //       <div className="relative min-h-screen overflow-hidden">
// // // //         {/* Background Image */}
// // // //         <div 
// // // //           className="absolute inset-0 bg-cover bg-center"
// // // //           style={{
// // // //             backgroundImage: "url('https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg')",
// // // //           }}
// // // //         >
// // // //           {/* <div className="absolute inset-0 bg-gradient-to-b from-[#E2DBDF]/95 via-[#E2DBDF]/85 to-[#E2DBDF]/90" /> */}
// // // //         </div>

// // // //         <div className="relative z-10 pt-42 md:pt-96 px-6 md:px-12 min-h-screen flex flex-col justify-center">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1 }}
// // // //             className="max-w-7xl mx-auto w-full"
// // // //           >
// // // //             <div className="mb-8">
// // // //               <p className="text-[#FFFFFF] text-sm md:text-base tracking-[0.3em] mb-4 font-light">
// // // //                 NAIROBI, KENYA — EST. 2025
// // // //               </p>
// // // //             </div>
            
// // // //             {/* <h1 className="text-[#262626] font-bold leading-[0.85] mb-12">
// // // //               <span className="block text-[12vw] md:text-[10vw]">WE ARE</span>
// // // //               <span className="block text-[12vw] md:text-[10vw] italic">AVYA</span>
// // // //             </h1> */}

// // // //             <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl">
// // // //               <motion.div
// // // //                 initial={{ opacity: 0, x: -30 }}
// // // //                 animate={{ opacity: 1, x: 0 }}
// // // //                 transition={{ duration: 1, delay: 0.3 }}
// // // //                 className="space-y-6"
// // // //               >
// // // //                 <h2 className="text-[#FFFFFF] text-3xl md:text-4xl font-bold leading-tight">
// // // //                   KENYA'S FIRST
// // // //                   <br />
// // // //                   <span className="italic">SCIENCE-MEETS-BEAUTY</span>
// // // //                   <br />
// // // //                   LUXURY SALON
// // // //                 </h2>

// // // //                 <p className="text-[#FFFFFF] text-base md:text-lg leading-relaxed font-light">
// // // //                   AVYA IS AN INDEPENDENT EXCLUSIVE LUXURY SALON WHICH PROMOTES ADVANCED TRICOLOGY, 
// // // //                   PRECISION TECHNIQUES, AND PERSONALIZED WELLNESS RITUALS WITH THE BEST INTERNATIONAL 
// // // //                   TRAINED SPECIALISTS.
// // // //                 </p>
// // // //               </motion.div>

// // // //               {/* <motion.div
// // // //                 initial={{ opacity: 0, x: 30 }}
// // // //                 animate={{ opacity: 1, x: 0 }}
// // // //                 transition={{ duration: 1, delay: 0.5 }}
// // // //                 className="space-y-6"
// // // //               >
// // // //                 <div className="bg-[#262626] px-4 py-2 inline-block">
// // // //                   <p className="text-[#E2DBDF] text-xs tracking-[0.2em] font-medium">
// // // //                     SCIENCE × BEAUTY
// // // //                   </p>
// // // //                 </div>

// // // //                 <p className="text-[#FFFFFF] text-base md:text-lg leading-relaxed font-light">
// // // //                   AT AVYA, WE REDEFINE BEAUTY THROUGH THE LENS OF SCIENCE AND LONGEVITY. 
// // // //                   MORE THAN A SALON—IT'S A PREMIER LONGEVITY BEAUTY SPA WHERE INNOVATION 
// // // //                   MEETS INDULGENCE.
// // // //                 </p>

// // // //                 <div className="pt-4">
// // // //                   <button className="bg-[#262626] text-[#E2DBDF] px-10 py-4 text-sm tracking-[0.2em] font-medium hover:bg-[#595959] transition-colors duration-300">
// // // //                     BOOK EXPERIENCE
// // // //                   </button>
// // // //                 </div>
// // // //               </motion.div> */}
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>

// // // //         {/* Bottom Image */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 30 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 1, delay: 0.7 }}
// // // //           className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20"
// // // //         >
// // // //           <div className="relative aspect-[21/9] overflow-hidden">
// // // //             <img
// // // //               src="https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg"
// // // //               alt="Avya Experience"
// // // //               className="w-full h-full object-cover grayscale"
// // // //             />
// // // //           </div>
// // // //         </motion.div>
// // // //       </div>

// // // //       {/* PHILOSOPHY SECTION */}
// // // //       <section className="bg-[#262626] py-24 px-6 md:px-12">
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <div className="grid lg:grid-cols-5 gap-12 items-center">
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.8 }}
// // // //               viewport={{ once: true }}
// // // //               className="lg:col-span-3"
// // // //             >
// // // //               <h2 className="text-[#E2DBDF] font-bold leading-[0.9] mb-12">
// // // //                 <span className="block text-6xl md:text-8xl">BEAUTY IS</span>
// // // //                 <span className="block text-6xl md:text-8xl italic">SCIENCE</span>
// // // //               </h2>

// // // //               <div className="space-y-8 max-w-2xl">
// // // //                 <p className="text-[#C1B5C6] text-lg md:text-xl leading-relaxed font-light">
// // // //                   WE BELIEVE TRUE BEAUTY EMERGES FROM A HARMONIOUS BLEND OF CUTTING-EDGE 
// // // //                   TECHNOLOGY, EVIDENCE-BASED RESEARCH, AND BESPOKE CARE.
// // // //                 </p>
                
// // // //                 <p className="text-[#B0C2B0] text-lg md:text-xl leading-relaxed font-light">
// // // //                   FOUNDED IN 2025, AVYA WAS BORN FROM A VISION TO ELEVATE AFRICAN BEAUTY 
// // // //                   STANDARDS BY INTEGRATING GLOBAL EXPERTISE WITH LOCAL EMPOWERMENT.
// // // //                 </p>

// // // //                 <div className="border-l-2 border-[#C1B5C6] pl-6 mt-12">
// // // //                   <p className="text-[#E2DBDF] text-base font-light italic">
// // // //                     "Our internationally trained specialists craft every treatment to your unique needs"
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: 30 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.8 }}
// // // //               viewport={{ once: true }}
// // // //               className="lg:col-span-2"
// // // //             >
// // // //               <div className="space-y-6">
// // // //                 <div className="aspect-[3/4] overflow-hidden">
// // // //                   <img
// // // //                     src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80"
// // // //                     alt="Philosophy"
// // // //                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="bg-[#E2DBDF] p-6">
// // // //                   <p className="text-[#262626] text-xs tracking-[0.2em] font-medium">
// // // //                     ELEVATED. EXCLUSIVE. TRANSFORMATIVE.
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* FEATURES SECTION */}
// // // //       <section className="bg-[#E2DBDF] py-24 px-6 md:px-12">
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //             viewport={{ once: true }}
// // // //             className="mb-20"
// // // //           >
// // // //             <h2 className="text-[#262626] font-bold leading-[0.9] mb-8">
// // // //               <span className="block text-5xl md:text-7xl">WHAT SETS</span>
// // // //               <span className="block text-5xl md:text-7xl italic">AVYA APART</span>
// // // //             </h2>
// // // //             <p className="text-[#595959] text-sm tracking-[0.2em] mt-6">
// // // //               SIX PILLARS OF EXCELLENCE
// // // //             </p>
// // // //           </motion.div>

// // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6 }}
// // // //               viewport={{ once: true }}
// // // //               className="lg:col-span-2 lg:row-span-2"
// // // //             >
// // // //               <div className="h-full bg-[#262626] p-8 md:p-12 flex flex-col justify-between">
// // // //                 <div>
// // // //                   <span className="text-[#C1B5C6] text-7xl md:text-9xl font-bold opacity-30">
// // // //                     {features[0].number}
// // // //                   </span>
// // // //                 </div>
// // // //                 <div>
// // // //                   <h3 className="text-[#E2DBDF] text-3xl md:text-4xl font-bold mb-6 leading-tight">
// // // //                     {features[0].title}
// // // //                   </h3>
// // // //                   <p className="text-[#B0C2B0] text-lg leading-relaxed font-light">
// // // //                     {features[0].description}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.1 }}
// // // //               viewport={{ once: true }}
// // // //               className="aspect-square"
// // // //             >
// // // //               <img
// // // //                 src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80"
// // // //                 alt="Treatment"
// // // //                 className="w-full h-full object-cover grayscale"
// // // //               />
// // // //             </motion.div>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.2 }}
// // // //               viewport={{ once: true }}
// // // //               className="bg-[#C1B5C6] p-8"
// // // //             >
// // // //               <span className="text-[#262626] text-5xl font-bold opacity-50">
// // // //                 {features[1].number}
// // // //               </span>
// // // //               <h3 className="text-[#262626] text-2xl font-bold mt-6 mb-4">
// // // //                 {features[1].title}
// // // //               </h3>
// // // //               <p className="text-[#262626] text-sm leading-relaxed font-light">
// // // //                 {features[1].description}
// // // //               </p>
// // // //             </motion.div>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.3 }}
// // // //               viewport={{ once: true }}
// // // //               className="bg-[#B0C2B0] p-8"
// // // //             >
// // // //               <span className="text-[#262626] text-5xl font-bold opacity-50">
// // // //                 {features[2].number}
// // // //               </span>
// // // //               <h3 className="text-[#262626] text-2xl font-bold mt-6 mb-4">
// // // //                 {features[2].title}
// // // //               </h3>
// // // //               <p className="text-[#262626] text-sm leading-relaxed font-light">
// // // //                 {features[2].description}
// // // //               </p>
// // // //             </motion.div>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.4 }}
// // // //               viewport={{ once: true }}
// // // //               className="aspect-square"
// // // //             >
// // // //               <img
// // // //                 src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80"
// // // //                 alt="Salon"
// // // //                 className="w-full h-full object-cover grayscale"
// // // //               />
// // // //             </motion.div>

// // // //             {features.slice(3).map((feature, index) => (
// // // //               <motion.div
// // // //                 key={feature.number}
// // // //                 initial={{ opacity: 0, y: 30 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
// // // //                 viewport={{ once: true }}
// // // //                 className="border-2 border-[#595959] p-8 hover:bg-[#262626] hover:border-[#262626] transition-colors duration-300 group"
// // // //               >
// // // //                 <span className="text-[#595959] group-hover:text-[#C1B5C6] text-5xl font-bold opacity-50 transition-colors">
// // // //                   {feature.number}
// // // //                 </span>
// // // //                 <h3 className="text-[#262626] group-hover:text-[#E2DBDF] text-2xl font-bold mt-6 mb-4 transition-colors">
// // // //                   {feature.title}
// // // //                 </h3>
// // // //                 <p className="text-[#595959] group-hover:text-[#B0C2B0] text-sm leading-relaxed font-light transition-colors">
// // // //                   {feature.description}
// // // //                 </p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* CALL TO ACTION SECTION */}
// // // //       <section className="bg-white py-24 px-6 md:px-12">
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <div className="grid lg:grid-cols-2 gap-16 items-center">
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: -30 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.8 }}
// // // //               viewport={{ once: true }}
// // // //             >
// // // //               <div className="mb-12">
// // // //                 <p className="text-[#595959] text-sm tracking-[0.3em] mb-8 font-light">
// // // //                   THE AVYA WAY
// // // //                 </p>
                
// // // //                 <h2 className="text-[#262626] font-bold leading-[0.9] mb-12">
// // // //                   <span className="block text-5xl md:text-7xl">EVERLASTING</span>
// // // //                   <span className="block text-5xl md:text-7xl italic">NEW STATIC</span>
// // // //                 </h2>
// // // //               </div>

// // // //               <div className="space-y-8 mb-12">
// // // //                 <p className="text-[#595959] text-lg md:text-xl leading-relaxed font-light italic">
// // // //                   "Delivering confidence, transformation, and total well-being. We lead the future 
// // // //                   of beauty in Africa by offering an unmatched, exclusive experience that fuses 
// // // //                   science-backed innovation, luxury, and personalized care."
// // // //                 </p>
                
// // // //                 <p className="text-[#595959] text-base leading-relaxed font-light">
// // // //                   FROM RESTORATIVE THERAPIES TO VISIONARY STYLING, AVYA EMPOWERS YOU TO EMBRACE 
// // // //                   THE EXTRAORDINARY. DISCOVER YOUR MOST CONFIDENT SELF—WHERE SCIENCE MEETS BEAUTY, 
// // // //                   AND BEAUTY BECOMES ETERNAL.
// // // //                 </p>
// // // //               </div>

// // // //               <div className="space-y-4">
// // // //                 <button className="w-full md:w-auto bg-[#262626] text-[#E2DBDF] px-12 py-4 text-sm tracking-[0.2em] font-medium hover:bg-[#595959] transition-colors duration-300">
// // // //                   SCHEDULE CONSULTATION
// // // //                 </button>
// // // //                 {/* <button className="w-full md:w-auto border-2 border-[#262626] text-[#262626] px-12 py-4 text-sm tracking-[0.2em] font-medium hover:bg-[#262626] hover:text-[#E2DBDF] transition-all duration-300 md:ml-4">
// // // //                   JOIN INNER CIRCLE
// // // //                 </button> */}
// // // //               </div>
// // // //             </motion.div>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: 30 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.8 }}
// // // //               viewport={{ once: true }}
// // // //             >
// // // //               <div className="space-y-6">
// // // //                 <div className="aspect-[4/5] overflow-hidden">
// // // //                   <img
// // // //                     src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80"
// // // //                     alt="Avya Treatment"
// // // //                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="grid grid-cols-2 gap-6">
// // // //                   <div className="aspect-square overflow-hidden">
// // // //                     <img
// // // //                       src="https://images.pexels.com/photos/3738345/pexels-photo-3738345.jpeg"
// // // //                       alt="Detail 1"
// // // //                       className="w-full h-full object-cover grayscale"
// // // //                     />
// // // //                   </div>
// // // //                   <div className="aspect-square bg-[#C1B5C6] flex items-center justify-center p-6">
// // // //                     <p className="text-[#262626] text-xs tracking-[0.2em] text-center font-medium">
// // // //                       ALL OUR TREATMENTS ARE CREATED EXCLUSIVELY FOR OUR COMMUNITY BY A TEAM OF EXPERTS AROUND THE WORLD
// // // //                     </p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }
// // // import React, { useEffect, useState } from "react";
// // // import { motion } from "framer-motion";
// // // import IMG from "@/assets/3997198-uhd_4096_2160_25fps (2).mp4";

// // // const features = [
// // //   {
// // //     title: "ADVANCED TRICOLOGY",
// // //     description: "Evidence-based hair and scalp solutions powered by scientific innovation for healthier, resilient locks.",
// // //     number: "01"
// // //   },
// // //   {
// // //     title: "PREMIUM GLAM SERVICES",
// // //     description: "Indulgent hair, skin, and aesthetic rituals that unlock radiant, transformative beauty.",
// // //     number: "02"
// // //   },
// // //   {
// // //     title: "LONGEVITY FOCUS",
// // //     description: "Treatments designed for enduring wellness, nurturing body and spirit in equal measure.",
// // //     number: "03"
// // //   },
// // //   {
// // //     title: "EXCLUSIVE EXPERIENCES",
// // //     description: "Curated aesthetics, seamless appointments, and serene ambiance for discerning visionaries.",
// // //     number: "04"
// // //   },
// // //   {
// // //     title: "EXPERT-LED CARE",
// // //     description: "Tailored by global masters who intuitively understand your journey.",
// // //     number: "05"
// // //   },
// // //   {
// // //     title: "INNER CIRCLE EVENTS",
// // //     description: "Join our community for privileged access to limited-edition offerings and insider insights.",
// // //     number: "06"
// // //   }
// // // ];

// // // export default function About() {
// // //   const [scrollY, setScrollY] = useState(0);

// // //   useEffect(() => {
// // //     window.scrollTo(0, 0);
// // //     const handleScroll = () => setScrollY(window.scrollY);
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen bg-[#E2DBDF]">
// // //       {/* HERO SECTION */}
// // //       <div className="relative min-h-screen overflow-hidden">
// // //         {/* Background Video using iframe */}
// // //         <div className="absolute inset-0" style={{ zIndex: 0 }}>
// // //   <video
// // //     src={IMG}
// // //     autoPlay
// // //     loop
// // //     muted
// // //     playsInline
// // //     className="absolute inset-0 w-full h-full object-cover"
// // //     style={{
// // //       width: '100vw',
// // //       height: '100vh',
// // //       border: 'none',
// // //     }}
// // //   />
// // // </div>


// // //         {/* Gradient Overlay */}
// // //         {/* <div className="absolute inset-0 bg-gradient-to-b from-[#E2DBDF]/95 via-[#E2DBDF]/85 to-[#E2DBDF]/90 z-[1]" /> */}

// // //         {/* Hero Content */}
// // //         <div className="relative z-10 pt-32 md:pt-40 px-6 md:px-12 min-h-screen flex flex-col justify-center">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 1 }}
// // //             className="max-w-7xl mx-auto w-full"
// // //           >
// // //             <div className="mb-8">
// // //               <p className="text-white text-sm md:text-base tracking-[0.3em] mb-4 font-light">
// // //                 NAIROBI, KENYA — EST. 2025
// // //               </p>
// // //             </div>
            
// // //             <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl">
// // //               <motion.div
// // //                 initial={{ opacity: 0, x: -30 }}
// // //                 animate={{ opacity: 1, x: 0 }}
// // //                 transition={{ duration: 1, delay: 0.3 }}
// // //                 className="space-y-6"
// // //               >
// // //                 <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
// // //                   KENYA'S FIRST
// // //                   <br />
// // //                   <span className="italic">SCIENCE-MEETS-BEAUTY</span>
// // //                   <br />
// // //                   LUXURY SALON
// // //                 </h1>

// // //                 <p className="text-white text-base md:text-lg leading-relaxed font-light max-w-xl">
// // //                   AVYA IS AN INDEPENDENT EXCLUSIVE LUXURY SALON WHICH PROMOTES ADVANCED TRICOLOGY, 
// // //                   PRECISION TECHNIQUES, AND PERSONALIZED WELLNESS RITUALS WITH THE BEST INTERNATIONAL 
// // //                   TRAINED SPECIALISTS.
// // //                 </p>
// // //               </motion.div>
// // //             </div>
// // //           </motion.div>
// // //         </div>

// // //         {/* Bottom Image */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 1, delay: 0.7 }}
// // //           className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20"
// // //         >
// // //           <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
// // //             <img
// // //               src="https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg"
// // //               alt="Avya Experience"
// // //               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// // //             />
// // //           </div>
// // //         </motion.div>
// // //       </div>

// // //       {/* PHILOSOPHY SECTION */}
// // //       <section className="bg-[#262626] py-20 md:py-32 px-6 md:px-12">
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.8 }}
// // //               viewport={{ once: true }}
// // //               className="lg:col-span-3"
// // //             >
// // //               <h2 className="text-[#E2DBDF] font-bold leading-[0.9] mb-12">
// // //                 <span className="block text-5xl md:text-7xl lg:text-8xl">BEAUTY IS</span>
// // //                 <span className="block text-5xl md:text-7xl lg:text-8xl italic">SCIENCE</span>
// // //               </h2>

// // //               <div className="space-y-8 max-w-2xl">
// // //                 <p className="text-[#C1B5C6] text-lg md:text-xl leading-relaxed font-light">
// // //                   WE BELIEVE TRUE BEAUTY EMERGES FROM A HARMONIOUS BLEND OF CUTTING-EDGE 
// // //                   TECHNOLOGY, EVIDENCE-BASED RESEARCH, AND BESPOKE CARE.
// // //                 </p>
                
// // //                 <p className="text-[#B0C2B0] text-lg md:text-xl leading-relaxed font-light">
// // //                   FOUNDED IN 2025, AVYA WAS BORN FROM A VISION TO ELEVATE AFRICAN BEAUTY 
// // //                   STANDARDS BY INTEGRATING GLOBAL EXPERTISE WITH LOCAL EMPOWERMENT.
// // //                 </p>

// // //                 <div className="border-l-2 border-[#C1B5C6] pl-6 mt-12">
// // //                   <p className="text-[#E2DBDF] text-base md:text-lg font-light italic">
// // //                     "Our internationally trained specialists craft every treatment to your unique needs"
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //             <motion.div
// // //               initial={{ opacity: 0, x: 30 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8 }}
// // //               viewport={{ once: true }}
// // //               className="lg:col-span-2"
// // //             >
// // //               <div className="space-y-6">
// // //                 <div className="aspect-[3/4] overflow-hidden rounded-sm">
// // //                   <img
// // //                     src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80"
// // //                     alt="Philosophy"
// // //                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// // //                   />
// // //                 </div>
// // //                 <div className="bg-[#E2DBDF] p-6 rounded-sm">
// // //                   <p className="text-[#262626] text-xs tracking-[0.2em] font-medium">
// // //                     ELEVATED. EXCLUSIVE. TRANSFORMATIVE.
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* FEATURES SECTION */}
// // //       <section className="bg-[#E2DBDF] py-20 md:py-32 px-6 md:px-12">
// // //         <div className="max-w-7xl mx-auto">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             viewport={{ once: true }}
// // //             className="mb-16 md:mb-20"
// // //           >
// // //             <h2 className="text-[#262626] font-bold leading-[0.9] mb-8">
// // //               <span className="block text-4xl md:text-6xl lg:text-7xl">WHAT SETS</span>
// // //               <span className="block text-4xl md:text-6xl lg:text-7xl italic">AVYA APART</span>
// // //             </h2>
// // //             <p className="text-[#595959] text-sm tracking-[0.2em] mt-6">
// // //               SIX PILLARS OF EXCELLENCE
// // //             </p>
// // //           </motion.div>

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // //             {/* Feature 1 - Large */}
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.6 }}
// // //               viewport={{ once: true }}
// // //               className="lg:col-span-2 lg:row-span-2"
// // //             >
// // //               <div className="h-full bg-[#262626] p-8 md:p-12 flex flex-col justify-between rounded-sm">
// // //                 <div>
// // //                   <span className="text-[#C1B5C6] text-7xl md:text-9xl font-bold opacity-30">
// // //                     {features[0].number}
// // //                   </span>
// // //                 </div>
// // //                 <div className="mt-8">
// // //                   <h3 className="text-[#E2DBDF] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
// // //                     {features[0].title}
// // //                   </h3>
// // //                   <p className="text-[#B0C2B0] text-base md:text-lg leading-relaxed font-light">
// // //                     {features[0].description}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //             {/* Image 1 */}
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.6, delay: 0.1 }}
// // //               viewport={{ once: true }}
// // //               className="aspect-square"
// // //             >
// // //               <div className="w-full h-full overflow-hidden rounded-sm">
// // //                 <img
// // //                   src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80"
// // //                   alt="Treatment"
// // //                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// // //                 />
// // //               </div>
// // //             </motion.div>

// // //             {/* Feature 2 */}
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.6, delay: 0.2 }}
// // //               viewport={{ once: true }}
// // //               className="bg-[#C1B5C6] p-8 rounded-sm"
// // //             >
// // //               <span className="text-[#262626] text-5xl font-bold opacity-50">
// // //                 {features[1].number}
// // //               </span>
// // //               <h3 className="text-[#262626] text-xl md:text-2xl font-bold mt-6 mb-4">
// // //                 {features[1].title}
// // //               </h3>
// // //               <p className="text-[#262626] text-sm leading-relaxed font-light">
// // //                 {features[1].description}
// // //               </p>
// // //             </motion.div>

// // //             {/* Feature 3 */}
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.6, delay: 0.3 }}
// // //               viewport={{ once: true }}
// // //               className="bg-[#B0C2B0] p-8 rounded-sm"
// // //             >
// // //               <span className="text-[#262626] text-5xl font-bold opacity-50">
// // //                 {features[2].number}
// // //               </span>
// // //               <h3 className="text-[#262626] text-xl md:text-2xl font-bold mt-6 mb-4">
// // //                 {features[2].title}
// // //               </h3>
// // //               <p className="text-[#262626] text-sm leading-relaxed font-light">
// // //                 {features[2].description}
// // //               </p>
// // //             </motion.div>

// // //             {/* Image 2 */}
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.6, delay: 0.4 }}
// // //               viewport={{ once: true }}
// // //               className="aspect-square"
// // //             >
// // //               <div className="w-full h-full overflow-hidden rounded-sm">
// // //                 <img
// // //                   src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80"
// // //                   alt="Salon"
// // //                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// // //                 />
// // //               </div>
// // //             </motion.div>

// // //             {/* Features 4-6 */}
// // //             {features.slice(3).map((feature, index) => (
// // //               <motion.div
// // //                 key={feature.number}
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
// // //                 viewport={{ once: true }}
// // //                 className="border-2 border-[#595959] p-8 hover:bg-[#262626] hover:border-[#262626] transition-all duration-300 group rounded-sm"
// // //               >
// // //                 <span className="text-[#595959] group-hover:text-[#C1B5C6] text-5xl font-bold opacity-50 transition-colors">
// // //                   {feature.number}
// // //                 </span>
// // //                 <h3 className="text-[#262626] group-hover:text-[#E2DBDF] text-xl md:text-2xl font-bold mt-6 mb-4 transition-colors">
// // //                   {feature.title}
// // //                 </h3>
// // //                 <p className="text-[#595959] group-hover:text-[#B0C2B0] text-sm leading-relaxed font-light transition-colors">
// // //                   {feature.description}
// // //                 </p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CALL TO ACTION SECTION */}
// // //       <section className="bg-white py-20 md:py-32 px-6 md:px-12">
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
// // //             <motion.div
// // //               initial={{ opacity: 0, x: -30 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8 }}
// // //               viewport={{ once: true }}
// // //             >
// // //               <div className="mb-12">
// // //                 <p className="text-[#595959] text-sm tracking-[0.3em] mb-8 font-light">
// // //                   THE AVYA WAY
// // //                 </p>
                
// // //                 <h2 className="text-[#262626] font-bold leading-[0.9] mb-12">
// // //                   <span className="block text-4xl md:text-6xl lg:text-7xl">EVERLASTING</span>
// // //                   <span className="block text-4xl md:text-6xl lg:text-7xl italic">NEW STATIC</span>
// // //                 </h2>
// // //               </div>

// // //               <div className="space-y-8 mb-12">
// // //                 <p className="text-[#595959] text-lg md:text-xl leading-relaxed font-light italic">
// // //                   "Delivering confidence, transformation, and total well-being. We lead the future 
// // //                   of beauty in Africa by offering an unmatched, exclusive experience that fuses 
// // //                   science-backed innovation, luxury, and personalized care."
// // //                 </p>
                
// // //                 <p className="text-[#595959] text-base leading-relaxed font-light">
// // //                   FROM RESTORATIVE THERAPIES TO VISIONARY STYLING, AVYA EMPOWERS YOU TO EMBRACE 
// // //                   THE EXTRAORDINARY. DISCOVER YOUR MOST CONFIDENT SELF—WHERE SCIENCE MEETS BEAUTY, 
// // //                   AND BEAUTY BECOMES ETERNAL.
// // //                 </p>
// // //               </div>

// // //               <div className="space-y-4">
// // //                 <button className="w-full md:w-auto bg-[#262626] text-[#E2DBDF] px-12 py-4 text-sm tracking-[0.2em] font-medium hover:bg-[#595959] transition-colors duration-300 rounded-sm">
// // //                   SCHEDULE CONSULTATION
// // //                 </button>
// // //               </div>
// // //             </motion.div>

// // //             <motion.div
// // //               initial={{ opacity: 0, x: 30 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8 }}
// // //               viewport={{ once: true }}
// // //             >
// // //               <div className="space-y-6">
// // //                 <div className="aspect-[4/5] overflow-hidden rounded-sm">
// // //                   <img
// // //                     src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80"
// // //                     alt="Avya Treatment"
// // //                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// // //                   />
// // //                 </div>
// // //                 <div className="grid grid-cols-2 gap-6">
// // //                   <div className="aspect-square overflow-hidden rounded-sm">
// // //                     <img
// // //                       src="https://images.pexels.com/photos/3738345/pexels-photo-3738345.jpeg"
// // //                       alt="Detail 1"
// // //                       className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// // //                     />
// // //                   </div>
// // //                   <div className="aspect-square bg-[#C1B5C6] flex items-center justify-center p-6 rounded-sm">
// // //                     <p className="text-[#262626] text-xs tracking-[0.2em] text-center font-medium leading-relaxed">
// // //                       ALL OUR TREATMENTS ARE CREATED EXCLUSIVELY FOR OUR COMMUNITY BY A TEAM OF EXPERTS AROUND THE WORLD
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }
// // import React, { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import IMG from "@/assets/3997198-uhd_4096_2160_25fps (2).mp4";

// // const features = [
// //   {
// //     title: "ADVANCED TRICOLOGY",
// //     description: "Evidence-based hair and scalp solutions powered by scientific innovation for healthier, resilient locks.",
// //     number: "01"
// //   },
// //   {
// //     title: "PREMIUM GLAM SERVICES",
// //     description: "Indulgent hair, skin, and aesthetic rituals that unlock radiant, transformative beauty.",
// //     number: "02"
// //   },
// //   {
// //     title: "LONGEVITY FOCUS",
// //     description: "Treatments designed for enduring wellness, nurturing body and spirit in equal measure.",
// //     number: "03"
// //   },
// //   {
// //     title: "EXCLUSIVE EXPERIENCES",
// //     description: "Curated aesthetics, seamless appointments, and serene ambiance for discerning visionaries.",
// //     number: "04"
// //   },
// //   {
// //     title: "EXPERT-LED CARE",
// //     description: "Tailored by global masters who intuitively understand your journey.",
// //     number: "05"
// //   },
// //   {
// //     title: "INNER CIRCLE EVENTS",
// //     description: "Join our community for privileged access to limited-edition offerings and insider insights.",
// //     number: "06"
// //   }
// // ];

// // export default function About() {
// //   const [scrollY, setScrollY] = useState(0);

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //     const handleScroll = () => setScrollY(window.scrollY);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <div className="min-h-screen">
// //       {/* HERO SECTION WITH BACKGROUND VIDEO */}
// //       <div className="relative min-h-screen overflow-hidden">
// //         {/* Background Video */}
// //         <div className="absolute inset-0" style={{ zIndex: 0 }}>
// //         <video
// //           src={IMG}
// //           autoPlay
// //           loop
// //           muted
// //           playsInline
// //           className="absolute inset-0 w-full h-full object-cover"
// //           style={{
// //             width: '100vw',
// //             height: '100vh',
// //             border: 'none',
// //           }}
// //         />
// //       </div>


// //         <div className="relative z-10 pt-42 md:pt-96 px-6 md:px-12 min-h-screen flex flex-col justify-center">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1 }}
// //             className="max-w-7xl mx-auto w-full"
// //           >
// //             <div className="mb-8">
// //               <p className="text-[#FFFFFF] text-sm md:text-base tracking-[0.3em] mb-4 font-light">
// //                 NAIROBI, KENYA — EST. 2025
// //               </p>
// //             </div>
            
// //             <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl">
// //               <motion.div
// //                 initial={{ opacity: 0, x: -30 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 1, delay: 0.3 }}
// //                 className="space-y-6"
// //               >
// //                 <h2 className="text-[#FFFFFF] text-3xl md:text-4xl font-bold leading-tight">
// //                   KENYA'S FIRST
// //                   <br />
// //                   <span className="bold">SCIENCE-MEETS-BEAUTY</span>
// //                   <br />
// //                   <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
// //                     LUXURY SALON
// //                   </span>
// //                 </h2>

// //                 <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light mb-10">
// //                   AVYA IS AN INDEPENDENT EXCLUSIVE LUXURY SALON WHICH PROMOTES ADVANCED TRICOLOGY, 
// //                   PRECISION TECHNIQUES, AND PERSONALIZED WELLNESS RITUALS WITH THE BEST INTERNATIONAL 
// //                   TRAINED SPECIALISTS.
// //                 </p>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         </div>

// //         {/* Bottom Image */}
// //         {/* <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1, delay: 0.7 }}
// //           className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20"
// //         >
// //           <div className="relative aspect-[21/9] overflow-hidden">
// //             <img
// //               src="https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg"
// //               alt="Avya Experience"
// //               className="w-full h-full object-cover grayscale"
// //             />
// //           </div>
// //         </motion.div> */}
// //       </div>

// //       {/* PHILOSOPHY SECTION */}
// //       <section className="bg-[#262626] py-24 px-6 md:px-12">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid lg:grid-cols-5 gap-12 items-center">
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               viewport={{ once: true }}
// //               className="lg:col-span-3"
// //             >
// //               <h2 className="text-[#E2DBDF] font-bold leading-[0.9] mb-12">
// //                 <span className="block text-6xl md:text-8xl">BEAUTY IS</span>
// //                 <span className="block text-6xl md:text-8xl italic">SCIENCE</span>
// //               </h2>

// //               <div className="space-y-8 max-w-2xl">
// //                 <p className="text-[#C1B5C6] text-lg md:text-xl leading-relaxed font-light">
// //                   WE BELIEVE TRUE BEAUTY EMERGES FROM A HARMONIOUS BLEND OF CUTTING-EDGE 
// //                   TECHNOLOGY, EVIDENCE-BASED RESEARCH, AND BESPOKE CARE.
// //                 </p>
                
// //                 <p className="text-[#B0C2B0] text-lg md:text-xl leading-relaxed font-light">
// //                   FOUNDED IN 2025, AVYA WAS BORN FROM A VISION TO ELEVATE AFRICAN BEAUTY 
// //                   STANDARDS BY INTEGRATING GLOBAL EXPERTISE WITH LOCAL EMPOWERMENT.
// //                 </p>

// //                 <div className="border-l-2 border-[#C1B5C6] pl-6 mt-12">
// //                   <p className="text-[#E2DBDF] text-base font-light italic">
// //                     "Our internationally trained specialists craft every treatment to your unique needs"
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, x: 30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8 }}
// //               viewport={{ once: true }}
// //               className="lg:col-span-2"
// //             >
// //               <div className="space-y-6">
// //                 <div className="aspect-[3/4] overflow-hidden">
// //                   <img
// //                     src="https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg"
// //                     alt="Philosophy"
// //                     className="w-full h-full object-cover transition-all duration-700"
// //                   />
// //                 </div>
// //                 <div className="bg-[#E2DBDF] p-6">
// //                   <p className="text-[#262626] text-xs tracking-[0.2em] font-medium">
// //                     ELEVATED. EXCLUSIVE. TRANSFORMATIVE.
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FEATURES SECTION */}
// //       <section className="bg-[#E2DBDF] py-24 px-6 md:px-12">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //             className="mb-20"
// //           >
// //             <h2 className="text-[#262626] font-bold leading-[0.9] mb-8">
// //               <span className="block text-5xl md:text-7xl">WHAT SETS</span>
// //               <span className="block text-5xl md:text-7xl italic">AVYA APART</span>
// //             </h2>
// //             <p className="text-[#595959] text-sm tracking-[0.2em] mt-6">
// //               OUR SIX PILLARS OF EXCELLENCE
// //             </p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6 }}
// //               viewport={{ once: true }}
// //               className="lg:col-span-2 lg:row-span-2"
// //             >
// //               <div className="h-full bg-[#262626] p-8 md:p-12 flex flex-col justify-between">
// //                 <div>
// //                   <span className="text-[#C1B5C6] text-7xl md:text-9xl font-bold opacity-30">
// //                     {features[0].number}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-[#E2DBDF] text-3xl md:text-4xl font-bold mb-6 leading-tight">
// //                     {features[0].title}
// //                   </h3>
// //                   <p className="text-[#B0C2B0] text-lg leading-relaxed font-light">
// //                     {features[0].description}
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.1 }}
// //               viewport={{ once: true }}
// //               className="aspect-square"
// //             >
// //               <img
// //                 src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80"
// //                 alt="Treatment"
// //                 className="w-full h-full object-cover grayscale"
// //               />
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               viewport={{ once: true }}
// //               className="bg-[#C1B5C6] p-8"
// //             >
// //               <span className="text-[#262626] text-5xl font-bold opacity-50">
// //                 {features[1].number}
// //               </span>
// //               <h3 className="text-[#262626] text-2xl font-bold mt-6 mb-4">
// //                 {features[1].title}
// //               </h3>
// //               <p className="text-[#262626] text-sm leading-relaxed font-light">
// //                 {features[1].description}
// //               </p>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.3 }}
// //               viewport={{ once: true }}
// //               className="bg-[#B0C2B0] p-8"
// //             >
// //               <span className="text-[#262626] text-5xl font-bold opacity-50">
// //                 {features[2].number}
// //               </span>
// //               <h3 className="text-[#262626] text-2xl font-bold mt-6 mb-4">
// //                 {features[2].title}
// //               </h3>
// //               <p className="text-[#262626] text-sm leading-relaxed font-light">
// //                 {features[2].description}
// //               </p>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.4 }}
// //               viewport={{ once: true }}
// //               className="aspect-square"
// //             >
// //               <img
// //                 src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80"
// //                 alt="Salon"
// //                 className="w-full h-full object-cover grayscale"
// //               />
// //             </motion.div>

// //             {features.slice(3).map((feature, index) => (
// //               <motion.div
// //                 key={feature.number}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
// //                 viewport={{ once: true }}
// //                 className="border-2 border-[#595959] p-8 hover:bg-[#262626] hover:border-[#262626] transition-colors duration-300 group"
// //               >
// //                 <span className="text-[#595959] group-hover:text-[#C1B5C6] text-5xl font-bold opacity-50 transition-colors">
// //                   {feature.number}
// //                 </span>
// //                 <h3 className="text-[#262626] group-hover:text-[#E2DBDF] text-2xl font-bold mt-6 mb-4 transition-colors">
// //                   {feature.title}
// //                 </h3>
// //                 <p className="text-[#595959] group-hover:text-[#B0C2B0] text-XL leading-relaxed font-light transition-colors">
// //                   {feature.description}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CALL TO ACTION SECTION */}
// //       <section className="bg-white py-24 px-6 md:px-12">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid lg:grid-cols-2 gap-16 items-center">
// //             <motion.div
// //               initial={{ opacity: 0, x: -30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8 }}
// //               viewport={{ once: true }}
// //             >
// //               <div className="mb-12">
// //                 <p className="text-[#595959] text-sm tracking-[0.3em] mb-8 font-light">
// //                   THE AVYA WAY
// //                 </p>
                
// //                 <h2 className="text-[#262626] font-bold leading-[0.9] mb-12">
// //                   <span className="block text-5xl md:text-7xl">EVERLASTING</span>
// //                   <span className="block text-5xl md:text-7xl italic">NEW STATIC</span>
// //                 </h2>
// //               </div>

// //               <div className="space-y-8 mb-12">
// //                 <p className="text-[#595959] text-lg md:text-xl leading-relaxed font-light italic">
// //                   "Delivering confidence, transformation, and total well-being. We lead the future 
// //                   of beauty in Africa by offering an unmatched, exclusive experience that fuses 
// //                   science-backed innovation, luxury, and personalized care."
// //                 </p>
                
// //                 <p className="text-[#595959] text-base leading-relaxed font-light">
// //                   FROM RESTORATIVE THERAPIES TO VISIONARY STYLING, AVYA EMPOWERS YOU TO EMBRACE 
// //                   THE EXTRAORDINARY. DISCOVER YOUR MOST CONFIDENT SELF—WHERE SCIENCE MEETS BEAUTY, 
// //                   AND BEAUTY BECOMES ETERNAL.
// //                 </p>
// //               </div>

// //               <div className="space-y-4">
// //                 <button className="w-full md:w-auto bg-[#262626] text-[#E2DBDF] px-12 py-4 text-sm tracking-[0.2em] font-medium hover:bg-[#595959] transition-colors duration-300">
// //                   SCHEDULE CONSULTATION
// //                 </button>
// //               </div>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, x: 30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8 }}
// //               viewport={{ once: true }}
// //             >
// //               <div className="space-y-6">
// //                 <div className="aspect-[4/5] overflow-hidden">
// //                   <img
// //                     src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80"
// //                     alt="Avya Treatment"
// //                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
// //                   />
// //                 </div>
// //                 <div className="grid grid-cols-2 gap-6">
// //                   <div className="aspect-square overflow-hidden">
// //                     <img
// //                       src="https://images.pexels.com/photos/3738345/pexels-photo-3738345.jpeg"
// //                       alt="Detail 1"
// //                       className="w-full h-full object-cover grayscale"
// //                     />
// //                   </div>
// //                   <div className="aspect-square bg-[#C1B5C6] flex items-center justify-center p-6">
// //                     <p className="text-[#262626] text-xs tracking-[0.2em] text-center font-medium">
// //                       ALL OUR TREATMENTS ARE CREATED EXCLUSIVELY FOR OUR COMMUNITY BY A TEAM OF EXPERTS AROUND THE WORLD
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import IMG from "@/assets/3997198-uhd_4096_2160_25fps (2).mp4";
// import IMG1 from "@/assets/DSC04387.jpg";
// import IMG2 from "@/assets/DSC04802.jpg";
// import IMG3 from "@/assets/DSC04802.jpg";
// import IMG4 from "@/assets/DSC04802.jpg";
// import IMG5 from "@/assets/DSC04802.jpg";

// const features = [
//   {
//     title: "ADVANCED TRICOLOGY",
//     description: "Evidence-based hair and scalp solutions powered by scientific innovation for healthier, resilient locks.",
//     number: "01"
//   },
//   {
//     title: "PREMIUM GLAM SERVICES",
//     description: "Indulgent hair, skin, and aesthetic rituals that unlock radiant, transformative beauty.",
//     number: "02"
//   },
//   {
//     title: "LONGEVITY FOCUS",
//     description: "Treatments designed for enduring wellness, nurturing body and spirit in equal measure.",
//     number: "03"
//   },
//   {
//     title: "EXCLUSIVE EXPERIENCES",
//     description: "Curated aesthetics, seamless appointments, and serene ambiance for discerning visionaries.",
//     number: "04"
//   },
//   {
//     title: "EXPERT-LED CARE",
//     description: "Tailored by global masters who intuitively understand your journey.",
//     number: "05"
//   },
//   {
//     title: "INNER CIRCLE EVENTS",
//     description: "Join our community for privileged access to limited-edition offerings and insider insights.",
//     number: "06"
//   }
// ];

// export default function About() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen">
//       {/* HERO SECTION WITH BACKGROUND VIDEO */}
//       <div className="relative min-h-screen overflow-hidden">
//         <div className="absolute inset-0" style={{ zIndex: 0 }}>
//           <video
//             src={IMG}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//             style={{
//               width: '100vw',
//               height: '100vh',
//               border: 'none',
//             }}
//           />
//         </div>
//         <div className="relative z-10 pt-64 md:pt-96 px-6 md:px-12 min-h-screen flex flex-col justify-start md:justify-center items-start md:items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="max-w-7xl mx-auto w-full mt-48 md:mt-0"
//           >
//             <div className="mb-8">
//               <p className="text-white text-sm md:text-base tracking-[0.3em] mb-4 font-light">
//                 NAIROBI, KENYA — EST. 2025
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1, delay: 0.3 }}
//                 className="space-y-6"
//               >
//                 <h2 className="text-white text-3xl md:text-5xl font-light leading-[0.9] mb-6">
//                   KENYA'S FIRST
//                   <br />
//                   <span className="font-bold">SCIENCE-MEETS-BEAUTY</span>
//                   <br />
//                   <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
//                     LUXURY SALON
//                   </span>
//                 </h2>
//                 <p className="text-white/90 text-lg md:text-xl max-w-xl leading-relaxed font-light mb-10">
//                   At AVYA, luxury and science come together to redefine beauty. Our expert hair stylists and beauty specialists deliver advanced treatments designed not only to enhance your look today but to support healthy, lasting beauty for tomorrow. In our serene, modern space, every detail is crafted to inspire confidence, well-being, and timeless elegance.
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* PHILOSOPHY SECTION */}
//       <section className="bg-[#3a3a3a] py-24 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-5 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="lg:col-span-3"
//             >
//               <h2 className="text-[#E2DBDF] font-hatton leading-[0.9] mb-12">
//                 <span className="block text-3xl md:text-7xl">BEAUTY IS</span>
//                 <span className="block text-3xl md:text-7xl">SCIENCE</span>
//               </h2>
//               <div className="space-y-8 max-w-2xl">
//                 <p className="text-[#C1B5C6] text-lg md:text-xl leading-relaxed font-montserrat">
//                   At Avya, we believe true beauty blends science, artistry, and personalized care. Founded in 2025, our mission is to elevate African beauty standards through innovation and empowerment.
//                 </p>

//                 <p className="text-[#B0C2B0] text-base md:text-[20px] leading-relaxed font-montserrat">
//                   As Kenya’s first science-meets-beauty luxury salon, we combine advanced haircare technology, expert techniques, and bespoke service to create transformative, lasting results. Avya is where innovation meets indulgence—for timeless beauty and confidence.
//                 </p>
//                 {/* <div className="border-l-2 border-[#C1B5C6] pl-6 mt-12">
//                   <p className="text-[#E2DBDF] text-base font-opensans">
//                     "Our internationally trained specialists craft every treatment to your unique needs"
//                   </p>
//                 </div> */}
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="lg:col-span-2"
//             >
//               <div className="space-y-6">
//                 <div className="aspect-[3/4] overflow-hidden">
//                   <img
//                     src={IMG1}
//                     alt="Philosophy"
//                     className="w-full h-full object-cover transition-all duration-700"
//                   />
//                 </div>
//                 <div className="bg-[#E2DBDF] p-6">
//                   <div className="flex justify-evenly text-[#262626] text-xs tracking-[0.2em] font-medium">
//                     <p>ELEVATED.</p>
//                     <p>EXCLUSIVE.</p>
//                     <p>TRANSFORMATIVE.</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FEATURES SECTION */}
//       <section className="bg-[#E2DBDF] py-24 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="mb-20"
//           >
//             <h2 className="text-[#262626] font-hatton leading-[0.9] mb-8">
//               <span className="block text-5xl md:text-7xl">WHAT SETS</span>
//               <span className="block text-5xl md:text-7xl">AVYA APART</span>
//             </h2>
//             <p className="text-[#262626] text-sm tracking-[0.2em] mt-6">
//               Our Six Pillars of Excellence.
//             </p>
//           </motion.div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="lg:col-span-2 lg:row-span-2"
//             >
//               <div className="h-full bg-[#262626] p-8 md:p-12 flex flex-col justify-between">
//                 <div>
//                   <span className="text-[#C1B5C6] text-7xl md:text-9xl font-bold opacity-30">
//                     {features[0].number}
//                   </span>
//                 </div>
//                 <div>
//                   <h3 className="text-[#E2DBDF] text-3xl md:text-4xl font-bold mb-6 leading-tight">
//                     {features[0].title}
//                   </h3>
//                   <p className="text-[#B0C2B0] text-lg leading-relaxed font-montserrat">
//                     {features[0].description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="aspect-square"
//             >
//               <img
//                 src={IMG2}
//                 alt="Treatment"
//                 className="w-full h-full object-cover grayscale"
//               />
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="bg-[#C1B5C6] p-8"
//             >
//               <span className="text-[#262626] text-5xl font-bold opacity-50">
//                 {features[1].number}
//               </span>
//               <h3 className="text-[#262626] text-2xl font-bold mt-6 mb-4">
//                 {features[1].title}
//               </h3>
//               <p className="text-[#262626] text-xl leading-relaxed font-montserrat">
//                 {features[1].description}
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="bg-[#B0C2B0] p-8"
//             >
//               <span className="text-[#262626] text-5xl font-bold opacity-50">
//                 {features[2].number}
//               </span>
//               <h3 className="text-[#262626] text-2xl font-bold mt-6 mb-4">
//                 {features[2].title}
//               </h3>
//               <p className="text-[#262626] text-xl leading-relaxed font-montserrat">
//                 {features[2].description}
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="aspect-square"
//             >
//               <img
//                 src={IMG3}
//                 alt="Salon"
//                 className="w-full h-full object-cover grayscale"
//               />
//             </motion.div>
//             {features.slice(3).map((feature, index) => (
//               <motion.div
//                 key={feature.number}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="border-2 border-[#595959] p-8 hover:bg-[#262626] hover:border-[#262626] transition-colors duration-300 group"
//               >
//                 <span className="text-[#595959] group-hover:text-[#C1B5C6] text-5xl font-bold opacity-50 transition-colors">
//                   {feature.number}
//                 </span>
//                 <h3 className="text-[#262626] group-hover:text-[#E2DBDF] text-2xl font-bold mt-6 mb-4 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-[#595959] group-hover:text-[#B0C2B0] text-xl leading-relaxed font-light transition-colors">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CALL TO ACTION SECTION */}
//       <section className="bg-white py-24 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="mb-12">
//                 <p className="text-[#595959] text-xl tracking-[0.3em] mb-8 font-light">
//                   THE AVYA WAY
//                 </p>

//                 <h2 className="text-[#262626] font-hatton leading-[0.9] mb-12">
//                   <span className="block text-5xl md:text-7xl">EVERLASTING</span>
//                   <span className="block text-5xl md:text-7xl">BEAUTY</span>
//                 </h2>
//               </div>
//               <div className="space-y-8 mb-12">
//                 <p className="text-[#595959] text-lg md:text-xl leading-relaxed font-montserrat">
//                   "Delivering confidence, transformation, and total well-being. We lead the future
//                   of beauty in Africa by offering an unmatched, exclusive experience that fuses
//                   science-backed innovation, luxury, and personalized care."
//                 </p>

//                 <p className="text-[#595959] text-base leading-relaxed font-opensans">
//                   From restorative therapies to visionary styling, avya empowers you to embrace the extraordinary. discover your most confident self—where science meets beauty, and beauty becomes eternal.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <a href='/contact'className="w-full md:w-auto bg-[#262626] text-[#E2DBDF] px-12 py-4 text-sm tracking-[0.2em] font-medium hover:bg-[#595959] transition-colors duration-300">
//                   SCHEDULE CONSULTATION
//                 </a>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="space-y-6">
//                 <div className="aspect-[4/5] overflow-hidden">
//                   <img
//                     src={IMG4}
//                     alt="Avya Treatment"
//                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="aspect-square overflow-hidden">
//                     <img
//                       src={IMG5}
//                       alt="Detail 1"
//                       className="w-full h-full object-cover grayscale"
//                     />
//                   </div>
//                   <div className="aspect-square bg-[#C1B5C6] flex items-center justify-center p-6">
//                     <p className="text-[#262626] text-xs tracking-[0.2em] text-center font-montserrat">
//                       ALL OUR TREATMENTS ARE CREATED EXCLUSIVELY FOR OUR COMMUNITY BY A TEAM OF EXPERTS AROUND THE WORLD.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IMG from "@/assets/DSC04387.jpg";
import IMG1 from "@/assets/DSC04387.jpg";
import IMG2 from "@/assets/DSC04802.jpg";
import IMG3 from "@/assets/DSC04409.jpg";
import IMG4 from "@/assets/DSC04477.jpg";
import IMG5 from "@/assets/DSC04381.jpg";
import IMG6 from "@/assets/DSC04474.jpg";

const features = [
  {
    title: "ADVANCED TRICOLOGY",
    description: "Evidence-based hair and scalp solutions powered by scientific innovation for healthier, resilient locks.",
    number: "01"
  },
  {
    title: "PREMIUM GLAM SERVICES",
    description: "Indulgent hair, skin, and aesthetic rituals that unlock radiant, transformative beauty.",
    number: "02"
  },
  {
    title: "LONGEVITY FOCUS",
    description: "Treatments designed for enduring wellness, nurturing body and spirit in equal measure.",
    number: "03"
  },
  {
    title: "EXCLUSIVE EXPERIENCES",
    description: "Curated aesthetics, seamless appointments, and serene ambiance for discerning visionaries.",
    number: "04"
  },
  {
    title: "EXPERT-LED CARE",
    description: "Tailored by global masters who intuitively understand your journey.",
    number: "05"
  },
  {
    title: "INNER CIRCLE EVENTS",
    description: "Join our community for privileged access to limited-edition offerings and insider insights.",
    number: "06"
  }
];

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION WITH BACKGROUND VIDEO */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          {/* <Image
            src={IMG}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              width: '100vw',
              height: '100vh',
              border: 'none',
            }}
          /> */}
          <img
            src={IMG6}
            alt="Philosophy"
            className="w-full h-full object-cover transition-all duration-700"
            // REMOVED: grayscale or any filter
          />
        </div>
        <div className="relative z-10 pt-64 md:pt-96 px-6 md:px-12 min-h-screen flex flex-col justify-start md:justify-center items-start md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto w-full mt-48 md:mt-0"
          >
            <div className="mb-8">
              <p className="text-white text-sm md:text-base tracking-[0.3em] mb-4 font-light">
                NAIROBI, KENYA — EST. 2025
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-white text-3xl md:text-5xl font-light leading-[0.9] mb-6">
                  KENYA'S FIRST
                  <br />
                  <span className="font-bold">SCIENCE-MEETS-BEAUTY</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
                    LUXURY SALON
                  </span>
                </h2>
                <p className="text-white/90 text-lg md:text-xl max-w-xl leading-relaxed font-light mb-10">
                  At AVYA, luxury and science come together to redefine beauty. Our expert hair stylists and beauty specialists deliver advanced treatments designed not only to enhance your look today but to support healthy, lasting beauty for tomorrow. In our serene, modern space, every detail is crafted to inspire confidence, well-being, and timeless elegance.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PHILOSOPHY SECTION */}
      <section className="bg-[#3a3a3a] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-[#E2DBDF] font-hatton leading-[0.9] mb-12">
                <span className="block text-3xl md:text-7xl">BEAUTY IS</span>
                <span className="block text-3xl md:text-7xl">SCIENCE</span>
              </h2>
              <div className="space-y-8 max-w-2xl">
                <p className="text-[#C1B5C6] text-lg md:text-xl leading-relaxed font-montserrat">
                  At Avya, we believe true beauty blends science, artistry, and personalized care. Founded in 2025, our mission is to elevate African beauty standards through innovation and empowerment.
                </p>

                <p className="text-[#B0C2B0] text-base md:text-[20px] leading-relaxed font-montserrat">
                  As Kenya’s first science-meets-beauty luxury salon, we combine advanced haircare technology, expert techniques, and bespoke service to create transformative, lasting results. Avya is where innovation meets indulgence—for timeless beauty and confidence.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={IMG1}
                    alt="Philosophy"
                    className="w-full h-full object-cover transition-all duration-700"
                    // REMOVED: grayscale or any filter
                  />
                </div>
                <div className="bg-[#E2DBDF] p-6">
                  <div className="flex justify-evenly text-[#262626] text-xs tracking-[0.2em] font-medium">
                    <p>ELEVATED.</p>
                    <p>EXCLUSIVE.</p>
                    <p>TRANSFORMATIVE.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-[#E2DBDF] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-[#262626] font-hatton leading-[0.9] mb-8">
              <span className="block text-5xl md:text-7xl">WHAT SETS</span>
              <span className="block text-5xl md:text-7xl">AVYA APART</span>
            </h2>
            <p className="text-[#262626] text-sm tracking-[0.2em] mt-6">
              Our Six Pillars of Excellence.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 lg:row-span-2"
            >
              <div className="h-full bg-[#262626] p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-[#C1B5C6] text-7xl md:text-9xl font-bold opacity-30">
                    {features[0].number}
                  </span>
                </div>
                <div>
                  <h3 className="text-[#E2DBDF] text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    {features[0].title}
                  </h3>
                  <p className="text-[#B0C2B0] text-lg leading-relaxed font-montserrat">
                    {features[0].description}
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="aspect-square"
            >
              <img
                src={IMG2}
                alt="Treatment"
                className="w-full h-full object-cover"
                // REMOVED: grayscale
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#C1B5C6] p-8"
            >
              <span className="text-[#262626] text-5xl font-bold opacity-50">
                {features[1].number}
              </span>
              <h3 className="text-[#262626] text-2xl font-bold mt-6 mb-4">
                {features[1].title}
              </h3>
              <p className="text-[#262626] text-xl leading-relaxed font-montserrat">
                {features[1].description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#B0C2B0] p-8"
            >
              <span className="text-[#262626] text-5xl font-bold opacity-50">
                {features[2].number}
              </span>
              <h3 className="text-[#262626] text-2xl font-bold mt-6 mb-4">
                {features[2].title}
              </h3>
              <p className="text-[#262626] text-xl leading-relaxed font-montserrat">
                {features[2].description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="aspect-square"
            >
              <img
                src={IMG3}
                alt="Salon"
                className="w-full h-full object-cover"
                // REMOVED: grayscale
              />
            </motion.div>
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="border-2 border-[#595959] p-8 hover:bg-[#262626] hover:border-[#262626] transition-colors duration-300 group"
              >
                <span className="text-[#595959] group-hover:text-[#C1B5C6] text-5xl font-bold opacity-50 transition-colors">
                  {feature.number}
                </span>
                <h3 className="text-[#262626] group-hover:text-[#E2DBDF] text-2xl font-bold mt-6 mb-4 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#595959] group-hover:text-[#B0C2B0] text-xl leading-relaxed font-light transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <p className="text-[#595959] text-xl tracking-[0.3em] mb-8 font-light">
                  THE AVYA WAY
                </p>

                <h2 className="text-[#262626] font-hatton leading-[0.9] mb-12">
                  <span className="block text-5xl md:text-7xl">EVERLASTING</span>
                  <span className="block text-5xl md:text-7xl">BEAUTY</span>
                </h2>
              </div>
              <div className="space-y-8 mb-12">
                <p className="text-[#595959] text-lg md:text-xl leading-relaxed font-montserrat">
                  "Delivering confidence, transformation, and total well-being. We lead the future
                  of beauty in Africa by offering an unmatched, exclusive experience that fuses
                  science-backed innovation, luxury, and personalized care."
                </p>

                <p className="text-[#595959] text-base leading-relaxed font-opensans">
                  From restorative therapies to visionary styling, avya empowers you to embrace the extraordinary. discover your most confident self—where science meets beauty, and beauty becomes eternal.
                </p>
              </div>
              <div className="space-y-4">
                <a href='/contact' className="w-full md:w-auto bg-[#262626] text-[#E2DBDF] px-12 py-4 text-sm tracking-[0.2em] font-medium hover:bg-[#595959] transition-colors duration-300 inline-block">
                  SCHEDULE CONSULTATION
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={IMG4}
                    alt="Avya Treatment"
                    className="w-full h-full object-cover transition-all duration-700"
                    // REMOVED: grayscale + hover:grayscale-0
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={IMG5}
                      alt="Detail 1"
                      className="w-full h-full object-cover"
                      // REMOVED: grayscale
                    />
                  </div>
                  <div className="aspect-square bg-[#C1B5C6] flex items-center justify-center p-6">
                    <p className="text-[#262626] text-xs tracking-[0.2em] text-center font-montserrat">
                      ALL OUR TREATMENTS ARE CREATED EXCLUSIVELY FOR OUR COMMUNITY BY A TEAM OF EXPERTS AROUND THE WORLD.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
