// // // import { HeroSection } from "@/components/ui/ServiceHero";
// // // import { ServiceCard } from "@/components/ui/ServiceCard";
// // // import { Button } from "@/components/ui/button";
// // // import { Microscope, Activity, Droplet, Wind, Zap, Scan } from "lucide-react";
// // // import { useNavigate } from "react-router-dom";
// // // import trichologyHero from "@/assets/trichology-hero.jpg";

// // // const Trichology = () => {
// // //   const navigate = useNavigate();

// // //   const conditions = [
// // //     { name: "Hair Thinning & Shedding", icon: Activity },
// // //     { name: "Traction Alopecia", icon: Wind },
// // //     { name: "Scalp Inflammation", icon: Droplet },
// // //     { name: "Hormonal Changes", icon: Zap },
// // //     { name: "Product Damage", icon: Scan },
// // //     { name: "Dandruff & Imbalance", icon: Microscope }
// // //   ];

// // //   const treatments = [
// // //     {
// // //       title: "Digital Scalp Analysis",
// // //       description: "Medical-grade imaging to identify root causes of hair and scalp concerns with precision diagnostics.",
// // //       icon: Scan
// // //     },
// // //     {
// // //       title: "Microneedling + Stem Cell",
// // //       description: "Advanced therapy combining microneedling with stem cell serums to stimulate follicle regeneration.",
// // //       icon: Activity
// // //     },
// // //     {
// // //       title: "High-Frequency Oxygen",
// // //       description: "Oxygen infusion and high-frequency treatment to boost circulation and scalp health.",
// // //       icon: Wind
// // //     },
// // //     {
// // //       title: "Follicle Stimulation",
// // //       description: "Targeted serums and protocols designed to awaken dormant follicles and promote hair growth.",
// // //       icon: Zap
// // //     },
// // //     {
// // //       title: "Scalp Detox",
// // //       description: "Deep cleansing treatments to remove buildup, balance pH, and optimize scalp environment.",
// // //       icon: Droplet
// // //     },
// // //     {
// // //       title: "Custom Treatment Plans",
// // //       description: "Personalized protocols based on your unique scalp analysis and hair goals.",
// // //       icon: Microscope
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen">
// // //       {/* <HeroSection
// // //         subtitle="Trichology & Scalp Health"
// // //         title="Real Solutions. Real Science."
// // //         description="Diagnostic-led trichology for hair loss, scalp concerns, and long-term healing using medical-grade technology."
// // //         imageSrc={trichologyHero}
// // //         primaryCta={{
// // //           text: "Book a Scalp Consultation",
// // //           onClick: () => window.open("#booking", "_self")
// // //         }}
// // //         // secondaryCta={{
// // //         //   text: "Learn More",
// // //         //   onClick: () => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
// // //         // }}
// // //       /> */}
// // //       <HeroSection
// // //         subtitle="Trichology & Scalp Health"
// // //         title="Real Solutions. Real Science."
// // //         description="Diagnostic-led trichology for hair loss, scalp concerns, and long-term healing using medical-grade technology."
// // //         imageSrc={trichologyHero}
// // //       >
// // //         <div className="flex flex-nowrap gap-2 sm:gap-4">
// // //           <Button
// // //             className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors mx-auto"
// // //             size="lg"
// // //             onClick={() => window.open("/contact#contact-form", "_self")}
// // //           >
// // //             Book Consultation
// // //           </Button>
// // //         </div>
// // //       </HeroSection>


// // //       {/* Intro Section */}
// // //       <section className="py-24 px-6 bg-card">
// // //         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
// // //           <p className="text-xl md:text-2xl leading-relaxed text-[#262626] font-light font-hatton">
// // //             At Avya, we bring diagnostic-led trichology to Nairobi for the first time.
// // //           </p>
// // //           <p className="text-xl md:text-2xl leading-relaxed text-[#595959] font-light font-hatton mt-6">
// // //             Hair loss. Traction alopecia. Dandruff. Hormonal shedding. These issues are more common than you think and deserve more than guesswork.
// // //           </p>
          
// // //         </div>
// // //       </section>

// // //       {/* Common Conditions */}
// // //       <section className="py-24 px-6">
// // //         <div className="container mx-auto max-w-7xl">
// // //           <div className="text-center mb-16 animate-fade-in">
// // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// // //               Common Conditions We Treat
// // //             </h2>
// // //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
// // //               Evidence-based treatments for the most common hair and scalp concerns
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
// // //             {conditions.map((condition, index) => {
// // //               const Icon = condition.icon;
// // //               return (
// // //                 <div
// // //                   key={condition.name}
// // //                   className="flex flex-col text-2xl text-blue-800 items-center p-6 rounded-lg font-hatton border border-accent bg-card shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
// // //                   style={{ animationDelay: `${index * 0.05}s` }}
// // //                 >
// // //                   <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center mb-3">
// // //                     <Icon className="h-6 w-6 text-primary" />
// // //                   </div>
// // //                   <p className="text-center text-sm font-medium text-foreground">
// // //                     {condition.name}
// // //                   </p>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Technologies & Treatments */}
// // //       <section className="py-24 px-6 gradient-primary">
// // //         <div className="container mx-auto max-w-7xl">
// // //           <div className="text-center mb-16 animate-fade-in">
// // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
// // //               Technologies & Treatments
// // //             </h2>
// // //             <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
// // //               Advanced protocols that target root causes for lasting results
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-montserrat">
// // //             {treatments.map((treatment, index) => (
// // //               <div
// // //                 key={treatment.title}
// // //                 className="animate-fade-up"
// // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // //               >
// // //                 <div className="h-full bg-card rounded-lg p-8 shadow-elegant hover:-translate-y-1 transition-smooth">
// // //                   <div className="mb-4 inline-flex p-3 rounded-lg gradient-secondary">
// // //                     <treatment.icon className="h-6 w-6 text-primary" />
// // //                   </div>
// // //                   <h3 className="text-xl font-medium mb-3 text-foreground">
// // //                     {treatment.title}
// // //                   </h3>
// // //                   <p className="text-muted-foreground leading-relaxed">
// // //                     {treatment.description}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Process Section */}
// // //       <section className="py-24 px-6">
// // //         <div className="container mx-auto max-w-4xl">
// // //           <div className="text-center mb-16 animate-fade-in">
// // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// // //               How It Works
// // //             </h2>
// // //             <p className="text-lg text-muted-foreground font-montserrat">
// // //               A science-backed approach to healthier hair and scalp
// // //             </p>
// // //           </div>

// // //           <div className="space-y-8">
// // //             {[
// // //               {
// // //                 step: "01",
// // //                 title: "Diagnostic Consultation",
// // //                 description: "Comprehensive scalp analysis using medical-grade imaging to identify underlying issues."
// // //               },
// // //               {
// // //                 step: "02",
// // //                 title: "Custom Treatment Plan",
// // //                 description: "Personalized protocol designed specifically for your scalp condition and hair goals."
// // //               },
// // //               {
// // //                 step: "03",
// // //                 title: "Treatment Sessions",
// // //                 description: "Regular sessions using advanced technology and targeted therapies for optimal results."
// // //               },
// // //               {
// // //                 step: "04",
// // //                 title: "Ongoing Support",
// // //                 description: "Continuous monitoring and adjustments to ensure long-term scalp health and hair growth."
// // //               }
// // //             ].map((item, index) => (
// // //               <div
// // //                 key={item.step}
// // //                 className="flex gap-6 items-start p-8 rounded-lg border border-accent bg-card shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
// // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // //               >
// // //                 <div className="text-5xl font-light text-secondary">
// // //                   {item.step}
// // //                 </div>
// // //                 <div className="flex-1">
// // //                   <h3 className="text-2xl font-light mb-2 text-foreground">
// // //                     {item.title}
// // //                   </h3>
// // //                   <p className="text-muted-foreground leading-relaxed">
// // //                     {item.description}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CTA Section */}
// // //       <section className="py-24 px-6 bg-card">
// // //         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
// // //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
// // //             Start Your Hair Health Journey
// // //           </h2>
// // //           <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-montserrat">
// // //             Book a diagnostic consultation and discover the root cause of your hair concerns
// // //           </p>
// // //           <div className="flex flex-col sm:flex-row gap-4 justify-center ">
// // //             <Button className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors" size="lg">
// // //               Book Consultation
// // //             </Button>
// // //             {/* <Button variant="premium" size="lg" onClick={() => navigate("/services")}>
// // //               View All Services
// // //             </Button> */}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Trichology;
// // import { HeroSection } from "../components/ui/ServiceHero";
// // import { Button } from "../components/ui/button";
// // import { Microscope, Activity, Droplet, Wind, Zap, Scan } from "lucide-react";
// // import trichologyHero from "../assets/trichology-hero.jpg";

// // const Trichology = () => {
// //   const conditions = [
// //     { name: "Hair Thinning & Shedding", icon: Activity },
// //     { name: "Traction Alopecia", icon: Wind },
// //     { name: "Scalp Inflammation", icon: Droplet },
// //     { name: "Hormonal Changes", icon: Zap },
// //     { name: "Product Damage", icon: Scan },
// //     { name: "Dandruff & Imbalance", icon: Microscope }
// //   ];

// //   const treatments = [
// //     {
// //       title: "Digital Scalp Analysis",
// //       description: "Medical-grade imaging to identify root causes of hair and scalp concerns with precision diagnostics.",
// //       icon: Scan
// //     },
// //     {
// //       title: "Microneedling + Stem Cell",
// //       description: "Advanced therapy combining microneedling with stem cell serums to stimulate follicle regeneration.",
// //       icon: Activity
// //     },
// //     {
// //       title: "High-Frequency Oxygen",
// //       description: "Oxygen infusion and high-frequency treatment to boost circulation and scalp health.",
// //       icon: Wind
// //     },
// //     {
// //       title: "Follicle Stimulation",
// //       description: "Targeted serums and protocols designed to awaken dormant follicles and promote hair growth.",
// //       icon: Zap
// //     },
// //     {
// //       title: "Scalp Detox",
// //       description: "Deep cleansing treatments to remove buildup, balance pH, and optimize scalp environment.",
// //       icon: Droplet
// //     },
// //     {
// //       title: "Custom Treatment Plans",
// //       description: "Personalized protocols based on your unique scalp analysis and hair goals.",
// //       icon: Microscope
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-white">
// //       <HeroSection
// //         subtitle="Trichology & Scalp Health"
// //         title="Real Solutions. Real Science."
// //         description="Diagnostic-led trichology for hair loss, scalp concerns, and long-term healing using medical-grade technology."
// //         imageSrc={trichologyHero}
// //       >
// //         <div className="flex flex-nowrap gap-2 sm:gap-4">
// //           <Button
// //             className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-sans tracking-wider mt-6 md:mt-0 rounded transition-colors mx-auto"
// //             size="lg"
// //             onClick={() => window.open("/contact#contact-form", "_self")}
// //           >
// //             Book Consultation
// //           </Button>
// //         </div>
// //       </HeroSection>

// //       {/* Intro Section */}
// //       <section className="py-20 px-6 relative overflow-hidden">
// //         <div className="absolute inset-0 bg-gradient-to-b from-[#E2DBDF]/10 to-transparent"></div>
// //         <div className="container mx-auto max-w-4xl text-center relative z-10">
// //           <p className="text-2xl md:text-3xl leading-relaxed text-[#262626] font-light mb-6">
// //             At Avya, we bring diagnostic-led trichology to Nairobi for the first time.
// //           </p>
// //           <p className="text-xl md:text-2xl leading-relaxed text-[#595959] font-light">
// //             Hair loss. Traction alopecia. Dandruff. Hormonal shedding. These issues are more common than you think and deserve more than guesswork.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Common Conditions - Grid with Gradient Backgrounds */}
// //       <section className="py-24 px-6 bg-gradient-to-b from-white to-[#E2DBDF]">
// //         <div className="container mx-auto max-w-7xl">
// //           <div className="text-center mb-20">
// //             <div className="inline-block">
// //               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#262626] relative">
// //                 Common Conditions We Treat
// //                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
// //               </h2>
// //             </div>
// //             <p className="text-lg text-[#595959] max-w-2xl mx-auto mt-6">
// //               Evidence-based treatments for the most common hair and scalp concerns
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
// //             {conditions.map((condition, index) => {
// //               const Icon = condition.icon;
// //               return (
// //                 <div
// //                   key={condition.name}
// //                   className="group relative overflow-hidden p-8 md:p-10 transition-all duration-500 hover:scale-[1.02]"
// //                   style={{ animationDelay: `${index * 0.05}s` }}
// //                 >
// //                   <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// //                   <div className="absolute inset-0 border border-[#595959]/10 group-hover:border-[#595959]/30 transition-colors duration-500"></div>
// //                   <div className="relative z-10 flex flex-col items-center">
// //                     <div className="w-16 h-16 mb-4 relative">
// //                       <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF] to-[#595959]/20 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
// //                       <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
// //                         <Icon className="h-7 w-7 text-[#595959] group-hover:text-[#262626] transition-colors duration-500" />
// //                       </div>
// //                     </div>
// //                     <p className="text-center text-sm md:text-base font-medium text-[#262626]">
// //                       {condition.name}
// //                     </p>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Technologies & Treatments - Sleek List Design */}
// //       <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#262626] to-[#595959]">
// //         <div className="absolute inset-0 opacity-5">
// //           <div className="absolute inset-0" style={{
// //             backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
// //             backgroundSize: '40px 40px'
// //           }}></div>
// //         </div>

// //         <div className="container mx-auto max-w-6xl relative z-10">
// //           <div className="text-center mb-20">
// //             <div className="inline-block">
// //               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#E2DBDF] relative">
// //                 Technologies & Treatments
// //                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2DBDF] to-transparent"></div>
// //               </h2>
// //             </div>
// //             <p className="text-lg text-[#E2DBDF]/80 max-w-2xl mx-auto mt-6">
// //               Advanced protocols that target root causes for lasting results
// //             </p>
// //           </div>

// //           <div className="space-y-1">
// //             {treatments.map((treatment, index) => (
// //               <div
// //                 key={treatment.title}
// //                 className="group relative overflow-hidden transition-all duration-500"
// //                 style={{ animationDelay: `${index * 0.1}s` }}
// //               >
// //                 <div className="absolute inset-0 bg-gradient-to-r from-[#E2DBDF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// //                 <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#E2DBDF] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

// //                 <div className="relative z-10 p-8 md:p-10 flex items-start gap-6">
// //                   <div className="flex-shrink-0">
// //                     <div className="w-14 h-14 relative">
// //                       <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/30 to-transparent rounded-lg rotate-45"></div>
// //                       <div className="absolute inset-2 bg-[#595959] rounded-lg flex items-center justify-center group-hover:bg-[#E2DBDF] transition-colors duration-500">
// //                         <treatment.icon className="h-6 w-6 text-[#E2DBDF] group-hover:text-[#262626] transition-colors duration-500" />
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="flex-1 min-w-0">
// //                     <h3 className="text-xl md:text-2xl font-light mb-2 text-[#E2DBDF] group-hover:text-white transition-colors duration-500">
// //                       {treatment.title}
// //                     </h3>
// //                     <p className="text-[#E2DBDF]/70 leading-relaxed">
// //                       {treatment.description}
// //                     </p>
// //                   </div>

// //                   <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
// //                     <div className="w-8 h-8 border border-[#E2DBDF]/50 rounded-full flex items-center justify-center">
// //                       <span className="text-[#E2DBDF] text-xl">→</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Process Section - Timeline Design */}
// //       <section className="py-24 px-6 bg-white">
// //         <div className="container mx-auto max-w-5xl">
// //           <div className="text-center mb-20">
// //             <div className="inline-block">
// //               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#262626] relative">
// //                 How It Works
// //                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
// //               </h2>
// //             </div>
// //             <p className="text-lg text-[#595959] mt-6">
// //               A science-backed approach to healthier hair and scalp
// //             </p>
// //           </div>

// //           <div className="relative">
// //             <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E2DBDF] via-[#595959] to-[#E2DBDF]"></div>

// //             <div className="space-y-16">
// //               {[
// //                 {
// //                   step: "01",
// //                   title: "Diagnostic Consultation",
// //                   description: "Comprehensive scalp analysis using medical-grade imaging to identify underlying issues."
// //                 },
// //                 {
// //                   step: "02",
// //                   title: "Custom Treatment Plan",
// //                   description: "Personalized protocol designed specifically for your scalp condition and hair goals."
// //                 },
// //                 {
// //                   step: "03",
// //                   title: "Treatment Sessions",
// //                   description: "Regular sessions using advanced technology and targeted therapies for optimal results."
// //                 },
// //                 {
// //                   step: "04",
// //                   title: "Ongoing Support",
// //                   description: "Continuous monitoring and adjustments to ensure long-term scalp health and hair growth."
// //                 }
// //               ].map((item, index) => (
// //                 <div
// //                   key={item.step}
// //                   className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
// //                   style={{ animationDelay: `${index * 0.1}s` }}
// //                 >
// //                   <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
// //                     <div className="inline-block">
// //                       <span className="text-7xl md:text-8xl font-light text-[#E2DBDF] opacity-50">
// //                         {item.step}
// //                       </span>
// //                     </div>
// //                     <h3 className="text-2xl md:text-3xl font-light mb-3 text-[#262626] mt-2">
// //                       {item.title}
// //                     </h3>
// //                     <p className="text-[#595959] leading-relaxed text-base md:text-lg">
// //                       {item.description}
// //                     </p>
// //                   </div>

// //                   <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#595959] border-4 border-white shadow-lg"></div>

// //                   <div className="flex-1 hidden md:block"></div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-24 px-6 bg-gradient-to-b from-[#E2DBDF]/10 to-white relative overflow-hidden">
// //         <div className="absolute inset-0 opacity-5">
// //           <div className="absolute inset-0" style={{
// //             backgroundImage: 'linear-gradient(45deg, #595959 25%, transparent 25%, transparent 75%, #595959 75%, #595959), linear-gradient(45deg, #595959 25%, transparent 25%, transparent 75%, #595959 75%, #595959)',
// //             backgroundSize: '60px 60px',
// //             backgroundPosition: '0 0, 30px 30px'
// //           }}></div>
// //         </div>

// //         <div className="container mx-auto max-w-4xl text-center relative z-10">
// //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#262626]">
// //             Start Your Hair Health Journey
// //           </h2>
// //           <p className="text-xl text-[#595959] mb-10 max-w-2xl mx-auto leading-relaxed">
// //             Book a diagnostic consultation and discover the root cause of your hair concerns
// //           </p>
// //           <div className="flex justify-center">
// //             <Button
// //               className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] hover:text-white w-[220px] h-[60px] flex items-center justify-center text-base font-medium tracking-wider rounded transition-all duration-500 shadow-lg hover:shadow-2xl"
// //               size="lg"
// //               onClick={() => window.open("/contact#contact-form", "_self")}
// //             >
// //               Book Consultation
// //             </Button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Trichology;
// import { HeroSection } from "../components/ui/ServiceHero";
// import { Button } from "../components/ui/button";
// import { Microscope, Activity, Droplet, Wind, Zap, Scan } from "lucide-react";
// import trichologyHero from "../assets/trichology-hero.jpg";

// const Trichology = () => {
//   const conditions = [
//     { name: "Hair Thinning & Shedding", icon: Activity },
//     { name: "Traction Alopecia", icon: Wind },
//     { name: "Scalp Inflammation", icon: Droplet },
//     { name: "Hormonal Changes", icon: Zap },
//     { name: "Product Damage", icon: Scan },
//     { name: "Dandruff & Imbalance", icon: Microscope }
//   ];

//   const treatments = [
//     {
//       title: "Digital Scalp Analysis",
//       description: "Medical-grade imaging to identify root causes of hair and scalp concerns with precision diagnostics.",
//       icon: Scan
//     },
//     {
//       title: "Microneedling + Stem Cell",
//       description: "Advanced therapy combining microneedling with stem cell serums to stimulate follicle regeneration.",
//       icon: Activity
//     },
//     {
//       title: "High-Frequency Oxygen",
//       description: "Oxygen infusion and high-frequency treatment to boost circulation and scalp health.",
//       icon: Wind
//     },
//     {
//       title: "Follicle Stimulation",
//       description: "Targeted serums and protocols designed to awaken dormant follicles and promote hair growth.",
//       icon: Zap
//     },
//     {
//       title: "Scalp Detox",
//       description: "Deep cleansing treatments to remove buildup, balance pH, and optimize scalp environment.",
//       icon: Droplet
//     },
//     {
//       title: "Custom Treatment Plans",
//       description: "Personalized protocols based on your unique scalp analysis and hair goals.",
//       icon: Microscope
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <HeroSection
//         subtitle="Trichology & Scalp Health"
//         title="Real Solutions. Real Science."
//         description="Diagnostic-led trichology for hair loss, scalp concerns, and long-term healing using medical-grade technology."
//         imageSrc={trichologyHero}
//       >
//         <div className="flex flex-nowrap gap-2 sm:gap-4">
//           <Button
//             className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-sans tracking-wider mt-6 md:mt-0 rounded transition-colors mx-auto"
//             size="lg"
//             onClick={() => window.open("/contact#contact-form", "_self")}
//           >
//             Book Consultation
//           </Button>
//         </div>
//       </HeroSection>

//       {/* Intro Section */}
//       <section className="py-20 px-6 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#E2DBDF]/10 to-transparent"></div>
//         <div className="container mx-auto max-w-4xl text-center relative z-10">
//           <p className="text-2xl md:text-3xl leading-relaxed text-[#262626] font-light mb-6">
//             At Avya, we bring diagnostic-led trichology to Nairobi for the first time.
//           </p>
//           <p className="text-xl md:text-2xl leading-relaxed text-[#595959] font-light">
//             Hair loss. Traction alopecia. Dandruff. Hormonal shedding. These issues are more common than you think and deserve more than guesswork.
//           </p>
//         </div>
//       </section>

//       {/* Common Conditions - Grid with Gradient Backgrounds */}
//       {/* <section className="py-24 px-6 bg-[#E2DBDF] ">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-20">
//             <div className="inline-block">
//               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#262626] relative">
//                 Common Conditions We Treat
//                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
//               </h2>
//             </div>
//             <p className="text-lg text-[#595959] max-w-2xl mx-auto mt-6">
//               Evidence-based treatments for the most common hair and scalp concerns
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//             {conditions.map((condition, index) => {
//               const Icon = condition.icon;
//               const colors = [
//                 { bg: 'from-[#C1B5C6]/30 to-[#E2DBDF]/30', icon: 'text-[#595959]', hover: 'group-hover:border-[#C1B5C6]/60', iconHover: 'group-hover:text-[#262626]' },
//                 { bg: 'from-[#B0C2B0]/30 to-[#E2DBDF]/30', icon: 'text-[#595959]', hover: 'group-hover:border-[#B0C2B0]/60', iconHover: 'group-hover:text-[#262626]' },
//                 { bg: 'from-[#C1B5C6]/40 to-[#B0C2B0]/20', icon: 'text-[#595959]', hover: 'group-hover:border-[#C1B5C6]/60', iconHover: 'group-hover:text-[#262626]' },
//                 { bg: 'from-[#E2DBDF]/40 to-[#B0C2B0]/30', icon: 'text-[#595959]', hover: 'group-hover:border-[#B0C2B0]/60', iconHover: 'group-hover:text-[#262626]' },
//                 { bg: 'from-[#B0C2B0]/35 to-[#C1B5C6]/25', icon: 'text-[#595959]', hover: 'group-hover:border-[#B0C2B0]/60', iconHover: 'group-hover:text-[#262626]' },
//                 { bg: 'from-[#C1B5C6]/35 to-[#E2DBDF]/35', icon: 'text-[#595959]', hover: 'group-hover:border-[#C1B5C6]/60', iconHover: 'group-hover:text-[#262626]' }
//               ];
//               const colorScheme = colors[index % colors.length];
//               return (
//                 <div
//                   key={condition.name}
//                   className="group relative overflow-hidden p-8 md:p-10 transition-all duration-500 hover:scale-[1.02]"
//                   style={{ animationDelay: `${index * 0.05}s` }}
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
//                   <div className={`absolute inset-0 border border-[#595959]/10 ${colorScheme.hover} transition-colors duration-500`}></div>
//                   <div className="relative z-10 flex flex-col items-center">
//                     <div className="w-16 h-16 mb-4 relative">
//                       <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bg} rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
//                       <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
//                         <Icon className={`h-7 w-7 ${colorScheme.icon} ${colorScheme.iconHover} transition-colors duration-500`} />
//                       </div>
//                     </div>
//                     <p className="text-center text-sm md:text-base font-medium text-[#262626]">
//                       {condition.name}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section> */}
//       <section className="py-24 px-6 bg-[#E2DBDF]">
//   <div className="container mx-auto max-w-7xl">
//     {/* Heading */}
//     <div className="text-center mb-20">
//       <div className="inline-block">
//         <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#262626] relative">
//           Common Conditions We Treat
//           <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
//         </h2>
//       </div>
//       <p className="text-lg text-[#595959] max-w-2xl mx-auto mt-6">
//         Evidence-based treatments for the most common hair and scalp concerns
//       </p>
//     </div>

//     {/* Cards */}
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//       {conditions.map((condition, index) => {
//         const Icon = condition.icon;
//         const gradients = [
//           'from-[#C1B5C6]/25 to-[#E2DBDF]/10',
//           'from-[#B0C2B0]/25 to-[#E2DBDF]/10',
//           'from-[#C1B5C6]/20 to-[#B0C2B0]/10',
//           'from-[#B0C2B0]/20 to-[#E2DBDF]/10',
//           'from-[#C1B5C6]/20 to-[#B0C2B0]/15',
//           'from-[#B0C2B0]/25 to-[#C1B5C6]/15',
//         ];
//         const bg = gradients[index % gradients.length];

//         return (
//           <div
//             key={condition.name}
//             className="group relative overflow-hidden bg-white p-10 rounded-2xl shadow-md transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
//             style={{ animationDelay: `${index * 0.05}s` }}
//           >
//             {/* Gradient overlay */}
//             <div
//               className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
//             ></div>

//             {/* Border accent */}
//             <div className="absolute inset-0 border border-[#595959]/10 rounded-2xl group-hover:border-[#595959]/30 transition-colors duration-500"></div>

//             {/* Content */}
//             <div className="relative z-10 flex flex-col items-center">
//               <div className="w-16 h-16 mb-4 relative">
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${bg} rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
//                 ></div>
//                 <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-sm">
//                   <Icon
//                     className="h-7 w-7 text-[#595959] group-hover:text-[#262626] transition-colors duration-500"
//                   />
//                 </div>
//               </div>
//               <p className="text-center text-sm md:text-base font-medium text-[#262626]">
//                 {condition.name}
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </section>


//       {/* Technologies & Treatments - Sleek List Design */}
//       <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#262626] to-[#595959]">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
//             backgroundSize: '40px 40px'
//           }}></div>
//         </div>

//         <div className="container mx-auto max-w-6xl relative z-10">
//           <div className="text-center mb-20">
//             <div className="inline-block">
//               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#E2DBDF] relative">
//                 Technologies & Treatments
//                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2DBDF] to-transparent"></div>
//               </h2>
//             </div>
//             <p className="text-lg text-[#E2DBDF]/80 max-w-2xl mx-auto mt-6">
//               Advanced protocols that target root causes for lasting results
//             </p>
//           </div>

//           <div className="space-y-1">
//             {treatments.map((treatment, index) => (
//               <div
//                 key={treatment.title}
//                 className="group relative overflow-hidden transition-all duration-500"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#E2DBDF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#E2DBDF] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

//                 <div className="relative z-10 p-8 md:p-10 flex items-start gap-6">
//                   <div className="flex-shrink-0">
//                     <div className="w-14 h-14 relative">
//                       <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/30 to-transparent rounded-lg rotate-45"></div>
//                       <div className="absolute inset-2 bg-[#595959] rounded-lg flex items-center justify-center group-hover:bg-[#E2DBDF] transition-colors duration-500">
//                         <treatment.icon className="h-6 w-6 text-[#E2DBDF] group-hover:text-[#262626] transition-colors duration-500" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-xl md:text-2xl font-light mb-2 text-[#E2DBDF] group-hover:text-white transition-colors duration-500">
//                       {treatment.title}
//                     </h3>
//                     <p className="text-[#E2DBDF]/70 leading-relaxed">
//                       {treatment.description}
//                     </p>
//                   </div>

//                   <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     <div className="w-8 h-8 border border-[#E2DBDF]/50 rounded-full flex items-center justify-center">
//                       <span className="text-[#E2DBDF] text-xl">→</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section - Timeline Design */}
//       <section className="py-24 px-6 bg-gradient-to-br from-[#B0C2B0]/10 via-white to-[#C1B5C6]/10">
//         <div className="container mx-auto max-w-5xl">
//           <div className="text-center mb-20">
//             <div className="inline-block">
//               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#262626] relative">
//                 How It Works
//                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
//               </h2>
//             </div>
//             <p className="text-lg text-[#595959] mt-6">
//               A science-backed approach to healthier hair and scalp
//             </p>
//           </div>

//           <div className="relative">
//             <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C1B5C6] via-[#595959] to-[#B0C2B0]"></div>

//             <div className="space-y-16">
//               {[
//                 {
//                   step: "01",
//                   title: "Diagnostic Consultation",
//                   description: "Comprehensive scalp analysis using medical-grade imaging to identify underlying issues.",
//                   color: "text-[#C1B5C6]",
//                   bgGradient: "from-[#C1B5C6]/20 to-[#E2DBDF]/20",
//                   dotColor: "bg-[#C1B5C6]"
//                 },
//                 {
//                   step: "02",
//                   title: "Custom Treatment Plan",
//                   description: "Personalized protocol designed specifically for your scalp condition and hair goals.",
//                   color: "text-[#595959]",
//                   bgGradient: "from-[#595959]/20 to-[#E2DBDF]/20",
//                   dotColor: "bg-[#595959]"
//                 },
//                 {
//                   step: "03",
//                   title: "Treatment Sessions",
//                   description: "Regular sessions using advanced technology and targeted therapies for optimal results.",
//                   color: "text-[#B0C2B0]",
//                   bgGradient: "from-[#B0C2B0]/20 to-[#C1B5C6]/20",
//                   dotColor: "bg-[#B0C2B0]"
//                 },
//                 {
//                   step: "04",
//                   title: "Ongoing Support",
//                   description: "Continuous monitoring and adjustments to ensure long-term scalp health and hair growth.",
//                   color: "text-[#262626]",
//                   bgGradient: "from-[#E2DBDF]/30 to-[#B0C2B0]/20",
//                   dotColor: "bg-[#262626]"
//                 }
//               ].map((item, index) => (
//                 <div
//                   key={item.step}
//                   className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
//                     <div className="inline-block relative">
//                       <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} blur-2xl opacity-50`}></div>
//                       <span className={`text-7xl md:text-8xl font-light ${item.color} relative`}>
//                         {item.step}
//                       </span>
//                     </div>
//                     <h3 className="text-2xl md:text-3xl font-light mb-3 text-[#262626] mt-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-[#595959] leading-relaxed text-base md:text-lg">
//                       {item.description}
//                     </p>
//                   </div>

//                   <div className={`absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full ${item.dotColor} border-4 border-white shadow-lg`}></div>

//                   <div className="flex-1 hidden md:block"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       {/* <section className="py-24 px-6 bg-gradient-to-b from-[#E2DBDF]/10 to-blue relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: 'linear-gradient(45deg, #595959 25%, transparent 25%, transparent 75%, #595959 75%, #595959), linear-gradient(45deg, #595959 25%, transparent 25%, transparent 75%, #595959 75%, #595959)',
//             backgroundSize: '60px 60px',
//             backgroundPosition: '0 0, 30px 30px'
//           }}></div>
//         </div>

//         <div className="container mx-auto max-w-4xl text-center relative z-10">
//           <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#262626]">
//             Start Your Hair Health Journey
//           </h2>
//           <p className="text-xl text-[#595959] mb-10 max-w-2xl mx-auto leading-relaxed">
//             Book a diagnostic consultation and discover the root cause of your hair concerns
//           </p>
//           <div className="flex justify-center">
//             <Button
//               className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] hover:text-white w-[220px] h-[60px] flex items-center justify-center text-base font-medium tracking-wider rounded transition-all duration-500 shadow-lg hover:shadow-2xl"
//               size="lg"
//               onClick={() => window.open("/contact#contact-form", "_self")}
//             >
//               Book Consultation
//             </Button>
//           </div>
//         </div>
//       </section> */}
//       <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#595959] via-[#262626] to-[#B0C2B0]/50">
//   {/* Pattern Overlay */}
//   <div className="absolute inset-0 opacity-15">
//     <div
//       className="absolute inset-0"
//       style={{
//         backgroundImage:
//           'linear-gradient(45deg, #E2DBDF 25%, transparent 25%, transparent 75%, #E2DBDF 75%, #E2DBDF), linear-gradient(45deg, #E2DBDF 25%, transparent 25%, transparent 75%, #E2DBDF 75%, #E2DBDF)',
//         backgroundSize: '60px 60px',
//         backgroundPosition: '0 0, 30px 30px',
//       }}
//     ></div>
//   </div>

//   {/* Content */}
//   <div className="container mx-auto max-w-4xl text-center relative z-10">
//     <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#E2DBDF]">
//       Start Your Hair Health Journey
//     </h2>
//     <p className="text-xl text-[#C1B5C6] mb-10 max-w-2xl mx-auto leading-relaxed">
//       Book a diagnostic consultation and discover the root cause of your hair concerns
//     </p>
//     <div className="flex justify-center">
//       <Button
//         className="bg-gradient-to-r from-[#C1B5C6] to-[#E2DBDF] hover:from-[#E2DBDF] hover:to-[#C1B5C6] text-[#262626] hover:text-[#262626]/80 w-[220px] h-[60px] flex items-center justify-center text-base font-medium tracking-wider rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl"
//         size="lg"
//         onClick={() => window.open('/contact#contact-form', '_self')}
//       >
//         Book Consultation
//       </Button>
//     </div>
//   </div>
// </section>

//     </div>
//   );
// };

// export default Trichology;
import { HeroSection } from "../components/ui/ServiceHero";
import { Button } from "../components/ui/button";
import { Microscope, Activity, Droplet, Wind, Zap, Scan } from "lucide-react";
import trichologyHero from "../assets/trichology-hero.jpg";

const Trichology = () => {
  const conditions = [
    { name: "Hair Thinning & Shedding", icon: Activity },
    { name: "Traction Alopecia", icon: Wind },
    { name: "Scalp Inflammation", icon: Droplet },
    { name: "Hormonal Changes", icon: Zap },
    { name: "Product Damage", icon: Scan },
    { name: "Dandruff & Imbalance", icon: Microscope }
  ];

  const treatments = [
    {
      title: "Digital Scalp Analysis",
      description: "Medical-grade imaging to identify root causes of hair and scalp concerns with precision diagnostics.",
      icon: Scan
    },
    {
      title: "Microneedling + Stem Cell",
      description: "Advanced therapy combining microneedling with stem cell serums to stimulate follicle regeneration.",
      icon: Activity
    },
    {
      title: "High-Frequency Oxygen",
      description: "Oxygen infusion and high-frequency treatment to boost circulation and scalp health.",
      icon: Wind
    },
    {
      title: "Follicle Stimulation",
      description: "Targeted serums and protocols designed to awaken dormant follicles and promote hair growth.",
      icon: Zap
    },
    {
      title: "Scalp Detox",
      description: "Deep cleansing treatments to remove buildup, balance pH, and optimize scalp environment.",
      icon: Droplet
    },
    {
      title: "Custom Treatment Plans",
      description: "Personalized protocols based on your unique scalp analysis and hair goals.",
      icon: Microscope
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        subtitle="Trichology & Scalp Health"
        title="Real Solutions. Real Science."
        description="Diagnostic-led trichology for hair loss, scalp concerns, and long-term healing using medical-grade technology."
        imageSrc={trichologyHero}
      >
        <div className="flex flex-nowrap gap-2 sm:gap-4">
          <Button
            className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-sans tracking-wider mt-6 md:mt-0 rounded transition-colors mx-auto"
            size="lg"
            onClick={() => window.open("/contact#contact-form", "_self")}
          >
            Book Consultation
          </Button>
        </div>
      </HeroSection>

      {/* Intro Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E2DBDF]/10 to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <p className="text-2xl md:text-3xl leading-relaxed text-[#262626] font-light mb-6">
            At Avya, we bring diagnostic-led trichology to Nairobi for the first time.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-[#595959] font-light">
            Hair loss. Traction alopecia. Dandruff. Hormonal shedding. These issues are more common than you think and deserve more than guesswork.
          </p>
        </div>
      </section>

      {/* Common Conditions - Grid with Gradient Backgrounds */}
      <section className="py-24 px-6 bg-[#E2DBDF]">
        <div className="container mx-auto max-w-7xl">
          {/* Heading */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#262626] relative">
                Common Conditions We Treat
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
              </h2>
            </div>
            <p className="text-lg text-[#595959] max-w-2xl mx-auto mt-6">
              Evidence-based treatments for the most common hair and scalp concerns
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {conditions.map((condition, index) => {
              const Icon = condition.icon;
              const gradients = [
                'from-[#C1B5C6]/25 to-[#E2DBDF]/10',
                'from-[#B0C2B0]/25 to-[#E2DBDF]/10',
                'from-[#C1B5C6]/20 to-[#B0C2B0]/10',
                'from-[#B0C2B0]/20 to-[#E2DBDF]/10',
                'from-[#C1B5C6]/20 to-[#B0C2B0]/15',
                'from-[#B0C2B0]/25 to-[#C1B5C6]/15',
              ];
              const bg = gradients[index % gradients.length];

              return (
                <div
                  key={condition.name}
                  className="group relative overflow-hidden bg-white p-10 rounded-2xl shadow-md transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                  ></div>

                  {/* Border accent */}
                  <div className="absolute inset-0 border border-[#595959]/10 rounded-2xl group-hover:border-[#595959]/30 transition-colors duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${bg} rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                      ></div>
                      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Icon
                          className="h-7 w-7 text-[#595959] group-hover:text-[#262626] transition-colors duration-500"
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm md:text-base font-medium text-[#262626]">
                      {condition.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies & Treatments - Sleek List Design */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden bg-gradient-to-b from-[#262626] to-[#595959]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 text-[#E2DBDF] relative px-4">
                Technologies & Treatments
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2DBDF] to-transparent"></div>
              </h2>
            </div>
            <p className="text-base md:text-lg text-[#E2DBDF]/80 max-w-2xl mx-auto mt-6 px-4">
              Advanced protocols that target root causes for lasting results
            </p>
          </div>

          <div className="space-y-1">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.title}
                className="group relative overflow-hidden transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E2DBDF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#E2DBDF] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                <div className="relative z-10 p-5 md:p-8 lg:p-10 flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/30 to-transparent rounded-lg rotate-45"></div>
                      <div className="absolute inset-2 bg-[#595959] rounded-lg flex items-center justify-center group-hover:bg-[#E2DBDF] transition-colors duration-500">
                        <treatment.icon className="h-5 w-5 md:h-6 md:w-6 text-[#E2DBDF] group-hover:text-[#262626] transition-colors duration-500" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-light mb-1 md:mb-2 text-[#E2DBDF] group-hover:text-white transition-colors duration-500">
                      {treatment.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#E2DBDF]/70 leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>

                  <div className="hidden md:flex flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-8 border border-[#E2DBDF]/50 rounded-full flex items-center justify-center">
                      <span className="text-[#E2DBDF] text-xl">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline Design */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[#B0C2B0]/10 via-white to-[#C1B5C6]/10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 text-[#262626] relative px-4">
                How It Works
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
              </h2>
            </div>
            <p className="text-base md:text-lg text-[#595959] mt-6 px-4">
              A science-backed approach to healthier hair and scalp
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C1B5C6] via-[#595959] to-[#B0C2B0]"></div>

            <div className="space-y-12 md:space-y-16">
              {[
                {
                  step: "01",
                  title: "Diagnostic Consultation",
                  description: "Comprehensive scalp analysis using medical-grade imaging to identify underlying issues.",
                  color: "text-[#C1B5C6]",
                  bgGradient: "from-[#C1B5C6]/20 to-[#E2DBDF]/20",
                  dotColor: "bg-[#C1B5C6]"
                },
                {
                  step: "02",
                  title: "Custom Treatment Plan",
                  description: "Personalized protocol designed specifically for your scalp condition and hair goals.",
                  color: "text-[#595959]",
                  bgGradient: "from-[#595959]/20 to-[#E2DBDF]/20",
                  dotColor: "bg-[#595959]"
                },
                {
                  step: "03",
                  title: "Treatment Sessions",
                  description: "Regular sessions using advanced technology and targeted therapies for optimal results.",
                  color: "text-[#B0C2B0]",
                  bgGradient: "from-[#B0C2B0]/20 to-[#C1B5C6]/20",
                  dotColor: "bg-[#B0C2B0]"
                },
                {
                  step: "04",
                  title: "Ongoing Support",
                  description: "Continuous monitoring and adjustments to ensure long-term scalp health and hair growth.",
                  color: "text-[#262626]",
                  bgGradient: "from-[#E2DBDF]/30 to-[#B0C2B0]/20",
                  dotColor: "bg-[#262626]"
                }
              ].map((item, index) => (
                <div
                  key={item.step}
                  className={`relative flex items-start gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="inline-block relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} blur-2xl opacity-50`}></div>
                      <span className={`text-5xl md:text-7xl lg:text-8xl font-light ${item.color} relative`}>
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-2 md:mb-3 text-[#262626] mt-2">
                      {item.title}
                    </h3>
                    <p className="text-[#595959] leading-relaxed text-sm md:text-base lg:text-lg">
                      {item.description}
                    </p>
                  </div>

                  <div className={`absolute left-6 md:left-1/2 top-6 md:top-8 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full ${item.dotColor} border-2 md:border-4 border-white shadow-lg`}></div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#595959] via-[#262626] to-[#B0C2B0]/50">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(45deg, #E2DBDF 25%, transparent 25%, transparent 75%, #E2DBDF 75%, #E2DBDF), linear-gradient(45deg, #E2DBDF 25%, transparent 25%, transparent 75%, #E2DBDF 75%, #E2DBDF)',
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 30px 30px',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#E2DBDF]">
            Start Your Hair Health Journey
          </h2>
          <p className="text-xl text-[#C1B5C6] mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a diagnostic consultation and discover the root cause of your hair concerns
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-gradient-to-r from-[#C1B5C6] to-[#E2DBDF] hover:from-[#E2DBDF] hover:to-[#C1B5C6] text-[#262626] hover:text-[#262626]/80 w-[220px] h-[60px] flex items-center justify-center text-base font-medium tracking-wider rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl"
              size="lg"
              onClick={() => window.open('/contact#contact-form', '_self')}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trichology;