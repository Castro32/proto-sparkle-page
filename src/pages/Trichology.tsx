// // // // // // // // // // // import React from 'react';
// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { Microscope, Activity, Droplet, Wind, Zap, Scan } from "lucide-react";
// // // // // // // // // // // import trichologyHero from "@/assets/op.png";
// // // // // // // // // // // import ServiceHero from "@/components/ui/ServiceHero";

// // // // // // // // // // // const Trichology = () => {
// // // // // // // // // // //   const conditions = [
// // // // // // // // // // //     { name: "Hair Thinning & Shedding", icon: Activity },
// // // // // // // // // // //     { name: "Traction Alopecia", icon: Wind },
// // // // // // // // // // //     { name: "Scalp Inflammation", icon: Droplet },
// // // // // // // // // // //     { name: "Hormonal Changes", icon: Zap },
// // // // // // // // // // //     { name: "Product Damage", icon: Scan },
// // // // // // // // // // //     { name: "Dandruff & Imbalance", icon: Microscope }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const treatments = [
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Digital Scalp Analysis",
// // // // // // // // // // //       description: "Medical-grade imaging to identify root causes of hair and scalp concerns with precision diagnostics.",
// // // // // // // // // // //       icon: Scan
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Microneedling + Stem Cell",
// // // // // // // // // // //       description: "Advanced therapy combining microneedling with stem cell serums to stimulate follicle regeneration.",
// // // // // // // // // // //       icon: Activity
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "High-Frequency Oxygen",
// // // // // // // // // // //       description: "Oxygen infusion and high-frequency treatment to boost circulation and scalp health.",
// // // // // // // // // // //       icon: Wind
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Follicle Stimulation",
// // // // // // // // // // //       description: "Targeted serums and protocols designed to awaken dormant follicles and promote hair growth.",
// // // // // // // // // // //       icon: Zap
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Scalp Detox",
// // // // // // // // // // //       description: "Deep cleansing treatments to remove buildup, balance pH, and optimize scalp environment.",
// // // // // // // // // // //       icon: Droplet
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Custom Treatment Plans",
// // // // // // // // // // //       description: "Personalized protocols based on your unique scalp analysis and hair goals.",
// // // // // // // // // // //       icon: Microscope
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="min-h-screen">
// // // // // // // // // // //       <ServiceHero
// // // // // // // // // // //         title="Advanced Trichology"
// // // // // // // // // // //         titleGradient="& Scalp Health"
// // // // // // // // // // //         description="Experience expert diagnosis and personalized treatments for optimal scalp and hair health. Our advanced trichology services combine science and luxury for transformative results."
// // // // // // // // // // //         image={trichologyHero}
// // // // // // // // // // //         imageAlt="Trichology and scalp health treatment"
// // // // // // // // // // //       />

// // // // // // // // // // //       {/* Intro Section */}
// // // // // // // // // // //       <section className="py-20 px-6 relative overflow-hidden">
// // // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-[#E2DBDF]/10 to-transparent"></div>
// // // // // // // // // // //         <div className="container mx-auto max-w-4xl text-center relative z-10">
// // // // // // // // // // //           <p className="text-2xl md:text-3xl leading-relaxed text-[#262626] font-light mb-6">
// // // // // // // // // // //             At Avya, we bring diagnostic-led trichology to Nairobi for the first time.
// // // // // // // // // // //           </p>
// // // // // // // // // // //           <p className="text-xl md:text-2xl leading-relaxed text-[#595959] font-light">
// // // // // // // // // // //             Hair loss. Traction alopecia. Dandruff. Hormonal shedding. These issues are more common than you think and deserve more than guesswork.
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* Common Conditions */}
// // // // // // // // // // //       <section className="py-24 px-6 bg-[#E2DBDF]">
// // // // // // // // // // //         <div className="container mx-auto max-w-7xl">
// // // // // // // // // // //           <div className="text-center mb-20">
// // // // // // // // // // //             <div className="inline-block">
// // // // // // // // // // //               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#262626] relative">
// // // // // // // // // // //                 Common Conditions We Treat
// // // // // // // // // // //                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
// // // // // // // // // // //               </h2>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <p className="text-lg text-[#595959] max-w-2xl mx-auto mt-6">
// // // // // // // // // // //               Evidence-based treatments for the most common hair and scalp concerns
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
// // // // // // // // // // //             {conditions.map((condition, index) => {
// // // // // // // // // // //               const Icon = condition.icon;
// // // // // // // // // // //               const gradients = [
// // // // // // // // // // //                 'from-[#C1B5C6]/25 to-[#E2DBDF]/10',
// // // // // // // // // // //                 'from-[#B0C2B0]/25 to-[#E2DBDF]/10',
// // // // // // // // // // //                 'from-[#C1B5C6]/20 to-[#B0C2B0]/10',
// // // // // // // // // // //                 'from-[#B0C2B0]/20 to-[#E2DBDF]/10',
// // // // // // // // // // //                 'from-[#C1B5C6]/20 to-[#B0C2B0]/15',
// // // // // // // // // // //                 'from-[#B0C2B0]/25 to-[#C1B5C6]/15',
// // // // // // // // // // //               ];
// // // // // // // // // // //               const bg = gradients[index % gradients.length];

// // // // // // // // // // //               return (
// // // // // // // // // // //                 <div
// // // // // // // // // // //                   key={condition.name}
// // // // // // // // // // //                   className="group relative overflow-hidden bg-white p-10 rounded-2xl shadow-md transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
// // // // // // // // // // //                   style={{ animationDelay: `${index * 0.05}s` }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <div
// // // // // // // // // // //                     className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
// // // // // // // // // // //                   ></div>
// // // // // // // // // // //                   <div className="absolute inset-0 border border-[#595959]/10 rounded-2xl group-hover:border-[#595959]/30 transition-colors duration-500"></div>
// // // // // // // // // // //                   <div className="relative z-10 flex flex-col items-center">
// // // // // // // // // // //                     <div className="w-16 h-16 mb-4 relative">
// // // // // // // // // // //                       <div
// // // // // // // // // // //                         className={`absolute inset-0 bg-gradient-to-br ${bg} rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
// // // // // // // // // // //                       ></div>
// // // // // // // // // // //                       <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-sm">
// // // // // // // // // // //                         <Icon
// // // // // // // // // // //                           className="h-7 w-7 text-[#595959] group-hover:text-[#262626] transition-colors duration-500"
// // // // // // // // // // //                         />
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     <p className="text-center text-sm md:text-base font-medium text-[#262626]">
// // // // // // // // // // //                       {condition.name}
// // // // // // // // // // //                     </p>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               );
// // // // // // // // // // //             })}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* Technologies & Treatments */}
// // // // // // // // // // //       <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#262626] to-[#595959]">
// // // // // // // // // // //         <div className="absolute inset-0 opacity-5">
// // // // // // // // // // //           <div className="absolute inset-0" style={{
// // // // // // // // // // //             backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
// // // // // // // // // // //             backgroundSize: '40px 40px'
// // // // // // // // // // //           }}></div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <div className="container mx-auto max-w-6xl relative z-10">
// // // // // // // // // // //           <div className="text-center mb-20">
// // // // // // // // // // //             <div className="inline-block">
// // // // // // // // // // //               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#E2DBDF] relative">
// // // // // // // // // // //                 Technologies & Treatments
// // // // // // // // // // //                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2DBDF] to-transparent"></div>
// // // // // // // // // // //               </h2>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <p className="text-lg text-[#E2DBDF]/80 max-w-2xl mx-auto mt-6">
// // // // // // // // // // //               Advanced protocols that target root causes for lasting results
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div className="space-y-1">
// // // // // // // // // // //             {treatments.map((treatment, index) => (
// // // // // // // // // // //               <div
// // // // // // // // // // //                 key={treatment.title}
// // // // // // // // // // //                 className="group relative overflow-hidden transition-all duration-500"
// // // // // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-r from-[#E2DBDF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// // // // // // // // // // //                 <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#E2DBDF] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

// // // // // // // // // // //                 <div className="relative z-10 p-8 md:p-10 flex items-start gap-6">
// // // // // // // // // // //                   <div className="flex-shrink-0">
// // // // // // // // // // //                     <div className="w-14 h-14 relative">
// // // // // // // // // // //                       <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/30 to-transparent rounded-lg rotate-45"></div>
// // // // // // // // // // //                       <div className="absolute inset-2 bg-[#595959] rounded-lg flex items-center justify-center group-hover:bg-[#E2DBDF] transition-colors duration-500">
// // // // // // // // // // //                         <treatment.icon className="h-6 w-6 text-[#E2DBDF] group-hover:text-[#262626] transition-colors duration-500" />
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>

// // // // // // // // // // //                   <div className="flex-1 min-w-0">
// // // // // // // // // // //                     <h3 className="text-xl md:text-2xl font-light mb-2 text-[#E2DBDF] group-hover:text-white transition-colors duration-500">
// // // // // // // // // // //                       {treatment.title}
// // // // // // // // // // //                     </h3>
// // // // // // // // // // //                     <p className="text-[#E2DBDF]/70 leading-relaxed">
// // // // // // // // // // //                       {treatment.description}
// // // // // // // // // // //                     </p>
// // // // // // // // // // //                   </div>

// // // // // // // // // // //                   <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
// // // // // // // // // // //                     <div className="w-8 h-8 border border-[#E2DBDF]/50 rounded-full flex items-center justify-center">
// // // // // // // // // // //                       <span className="text-[#E2DBDF] text-xl">→</span>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* Process Section */}
// // // // // // // // // // //       <section className="py-24 px-6 bg-gradient-to-br from-[#B0C2B0]/10 via-white to-[#C1B5C6]/10">
// // // // // // // // // // //         <div className="container mx-auto max-w-5xl">
// // // // // // // // // // //           <div className="text-center mb-20">
// // // // // // // // // // //             <div className="inline-block">
// // // // // // // // // // //               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#262626] relative">
// // // // // // // // // // //                 How It Works
// // // // // // // // // // //                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
// // // // // // // // // // //               </h2>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <p className="text-lg text-[#595959] mt-6">
// // // // // // // // // // //               A science-backed approach to healthier hair and scalp
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div className="relative">
// // // // // // // // // // //             <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C1B5C6] via-[#595959] to-[#B0C2B0]"></div>

// // // // // // // // // // //             <div className="space-y-16">
// // // // // // // // // // //               {[
// // // // // // // // // // //                 {
// // // // // // // // // // //                   step: "01",
// // // // // // // // // // //                   title: "Diagnostic Consultation",
// // // // // // // // // // //                   description: "Comprehensive scalp analysis using medical-grade imaging to identify underlying issues.",
// // // // // // // // // // //                   color: "text-[#C1B5C6]",
// // // // // // // // // // //                   bgGradient: "from-[#C1B5C6]/20 to-[#E2DBDF]/20",
// // // // // // // // // // //                   dotColor: "bg-[#C1B5C6]"
// // // // // // // // // // //                 },
// // // // // // // // // // //                 {
// // // // // // // // // // //                   step: "02",
// // // // // // // // // // //                   title: "Custom Treatment Plan",
// // // // // // // // // // //                   description: "Personalized protocol designed specifically for your scalp condition and hair goals.",
// // // // // // // // // // //                   color: "text-[#595959]",
// // // // // // // // // // //                   bgGradient: "from-[#595959]/20 to-[#E2DBDF]/20",
// // // // // // // // // // //                   dotColor: "bg-[#595959]"
// // // // // // // // // // //                 },
// // // // // // // // // // //                 {
// // // // // // // // // // //                   step: "03",
// // // // // // // // // // //                   title: "Treatment Sessions",
// // // // // // // // // // //                   description: "Regular sessions using advanced technology and targeted therapies for optimal results.",
// // // // // // // // // // //                   color: "text-[#B0C2B0]",
// // // // // // // // // // //                   bgGradient: "from-[#B0C2B0]/20 to-[#C1B5C6]/20",
// // // // // // // // // // //                   dotColor: "bg-[#B0C2B0]"
// // // // // // // // // // //                 },
// // // // // // // // // // //                 {
// // // // // // // // // // //                   step: "04",
// // // // // // // // // // //                   title: "Ongoing Support",
// // // // // // // // // // //                   description: "Continuous monitoring and adjustments to ensure long-term scalp health and hair growth.",
// // // // // // // // // // //                   color: "text-[#262626]",
// // // // // // // // // // //                   bgGradient: "from-[#E2DBDF]/30 to-[#B0C2B0]/20",
// // // // // // // // // // //                   dotColor: "bg-[#262626]"
// // // // // // // // // // //                 }
// // // // // // // // // // //               ].map((item, index) => (
// // // // // // // // // // //                 <div
// // // // // // // // // // //                   key={item.step}
// // // // // // // // // // //                   className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
// // // // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
// // // // // // // // // // //                     <div className="inline-block relative">
// // // // // // // // // // //                       <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} blur-2xl opacity-50`}></div>
// // // // // // // // // // //                       <span className={`text-7xl md:text-8xl font-light ${item.color} relative`}>
// // // // // // // // // // //                         {item.step}
// // // // // // // // // // //                       </span>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     <h3 className="text-2xl md:text-3xl font-light mb-3 text-[#262626] mt-2">
// // // // // // // // // // //                       {item.title}
// // // // // // // // // // //                     </h3>
// // // // // // // // // // //                     <p className="text-[#595959] leading-relaxed text-base md:text-lg">
// // // // // // // // // // //                       {item.description}
// // // // // // // // // // //                     </p>
// // // // // // // // // // //                   </div>

// // // // // // // // // // //                   <div className={`absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full ${item.dotColor} border-4 border-white shadow-lg`}></div>

// // // // // // // // // // //                   <div className="flex-1 hidden md:block"></div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* CTA Section */}
// // // // // // // // // // //       <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#595959] via-[#262626] to-[#B0C2B0]/50">
// // // // // // // // // // //         <div className="absolute inset-0 opacity-15">
// // // // // // // // // // //           <div
// // // // // // // // // // //             className="absolute inset-0"
// // // // // // // // // // //             style={{
// // // // // // // // // // //               backgroundImage:
// // // // // // // // // // //                 'linear-gradient(45deg, #E2DBDF 25%, transparent 25%, transparent 75%, #E2DBDF 75%, #E2DBDF), linear-gradient(45deg, #E2DBDF 25%, transparent 25%, transparent 75%, #E2DBDF 75%, #E2DBDF)',
// // // // // // // // // // //               backgroundSize: '60px 60px',
// // // // // // // // // // //               backgroundPosition: '0 0, 30px 30px',
// // // // // // // // // // //             }}
// // // // // // // // // // //           ></div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <div className="container mx-auto max-w-4xl text-center relative z-10">
// // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#E2DBDF]">
// // // // // // // // // // //             Start Your Hair Health Journey
// // // // // // // // // // //           </h2>
// // // // // // // // // // //           <p className="text-xl text-[#C1B5C6] mb-10 max-w-2xl mx-auto leading-relaxed">
// // // // // // // // // // //             Book a diagnostic consultation and discover the root cause of your hair concerns
// // // // // // // // // // //           </p>
// // // // // // // // // // //           <div className="flex justify-center">
// // // // // // // // // // //             <Button
// // // // // // // // // // //               className="bg-white hover:bg-[#595959] text-[#262626] hover:text-white w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
// // // // // // // // // // //               size="lg"
// // // // // // // // // // //               onClick={() => window.open('/contact#contact-form', '_self')}
// // // // // // // // // // //             >
// // // // // // // // // // //               Book Consultation
// // // // // // // // // // //             </Button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Trichology;
// // // // // // // // // // import React from 'react';
// // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // import { Microscope, Activity, Droplet, Wind, Zap, Scan, Clock, ShieldCheck } from "lucide-react";
// // // // // // // // // // import trichologyHero from "@/assets/op.png";
// // // // // // // // // // import ServiceHero from "@/components/ui/ServiceHero";

// // // // // // // // // // const Trichology = () => {
// // // // // // // // // //   const conditions = [
// // // // // // // // // //     { name: "Hair Thinning & Shedding", icon: Activity },
// // // // // // // // // //     { name: "Traction Alopecia", icon: Wind },
// // // // // // // // // //     { name: "Scalp Inflammation", icon: Droplet },
// // // // // // // // // //     { name: "Hormonal Changes", icon: Zap },
// // // // // // // // // //     { name: "Product Damage", icon: Scan },
// // // // // // // // // //     { name: "Dandruff & Imbalance", icon: Microscope }
// // // // // // // // // //   ];

// // // // // // // // // //   const treatments = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Digital Scalp Analysis",
// // // // // // // // // //       description: "Medical-grade imaging to identify root causes of hair and scalp concerns with precision diagnostics.",
// // // // // // // // // //       icon: Scan
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Microneedling + Stem Cell",
// // // // // // // // // //       description: "Advanced therapy combining microneedling with stem cell serums to stimulate follicle regeneration.",
// // // // // // // // // //       icon: Activity
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "High-Frequency Oxygen",
// // // // // // // // // //       description: "Oxygen infusion and high-frequency treatment to boost circulation and scalp health.",
// // // // // // // // // //       icon: Wind
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Follicle Stimulation",
// // // // // // // // // //       description: "Targeted serums and protocols designed to awaken dormant follicles and promote hair growth.",
// // // // // // // // // //       icon: Zap
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Scalp Detox",
// // // // // // // // // //       description: "Deep cleansing treatments to remove buildup, balance pH, and optimize scalp environment.",
// // // // // // // // // //       icon: Droplet
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Custom Treatment Plans",
// // // // // // // // // //       description: "Personalized protocols based on your unique scalp analysis and hair goals.",
// // // // // // // // // //       icon: Microscope
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   const trichologyServices = [
// // // // // // // // // //     {
// // // // // // // // // //       name: "Meso Therapy",
// // // // // // // // // //       duration: "1h",
// // // // // // // // // //       note: "Available from Jan 26",
// // // // // // // // // //       description: "Advanced scalp treatment using microinjections of vitamins and nutrients to stimulate hair follicles"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       name: "Platelet Rich Plasma",
// // // // // // // // // //       duration: "1h",
// // // // // // // // // //       note: "Available from Jan 26",
// // // // // // // // // //       description: "Natural growth factor therapy using your own blood plasma to accelerate healing and hair growth"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       name: "Biogenix Kit",
// // // // // // // // // //       duration: "1h",
// // // // // // // // // //       note: "Available from Jan 26",
// // // // // // // // // //       description: "Complete bioactive treatment system combining multiple technologies for comprehensive hair restoration"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       name: "PRP + MESO + DERMA PEN",
// // // // // // // // // //       duration: "2h",
// // // // // // // // // //       note: "Available from Jan 26",
// // // // // // // // // //       description: "Our most comprehensive combination therapy delivering maximum results through multi-modal treatment"
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen">
// // // // // // // // // //       <ServiceHero
// // // // // // // // // //         title="Advanced Trichology"
// // // // // // // // // //         titleGradient="& Scalp Health"
// // // // // // // // // //         description="Experience expert diagnosis and personalized treatments for optimal scalp and hair health. Our advanced trichology services combine science and luxury for transformative results."
// // // // // // // // // //         image={trichologyHero}
// // // // // // // // // //         imageAlt="Trichology and scalp health treatment"
// // // // // // // // // //       />

// // // // // // // // // //       {/* Intro Section */}
// // // // // // // // // //       {/* <section className="py-20 px-6 relative overflow-hidden">
// // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-[#E2DBDF]/10 to-transparent"></div>
// // // // // // // // // //         <div className="container mx-auto max-w-4xl text-center relative z-10">
// // // // // // // // // //           <p className="text-2xl md:text-3xl leading-relaxed text-[#262626] font-light mb-6">
// // // // // // // // // //             At Avya, we bring diagnostic-led trichology to Nairobi for the first time.
// // // // // // // // // //           </p>
// // // // // // // // // //           <p className="text-xl md:text-2xl leading-relaxed text-[#595959] font-light">
// // // // // // // // // //             Hair loss. Traction alopecia. Dandruff. Hormonal shedding. These issues are more common than you think and deserve more than guesswork.
// // // // // // // // // //           </p>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section> */}

// // // // // // // // // //       {/* Common Conditions */}
// // // // // // // // // //       <section className="py-24 px-6 bg-[#E2DBDF]">
// // // // // // // // // //         <div className="container mx-auto max-w-7xl">
// // // // // // // // // //           <div className="text-center mb-20">
// // // // // // // // // //             <div className="inline-block">
// // // // // // // // // //               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#262626] relative">
// // // // // // // // // //                 Common Conditions We Treat
// // // // // // // // // //                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
// // // // // // // // // //               </h2>
// // // // // // // // // //             </div>
// // // // // // // // // //             <p className="text-lg text-[#595959] max-w-2xl mx-auto mt-6">
// // // // // // // // // //               Evidence-based treatments for the most common hair and scalp concerns
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
// // // // // // // // // //             {conditions.map((condition, index) => {
// // // // // // // // // //               const Icon = condition.icon;
// // // // // // // // // //               const gradients = [
// // // // // // // // // //                 'from-[#C1B5C6]/25 to-[#E2DBDF]/10',
// // // // // // // // // //                 'from-[#B0C2B0]/25 to-[#E2DBDF]/10',
// // // // // // // // // //                 'from-[#C1B5C6]/20 to-[#B0C2B0]/10',
// // // // // // // // // //                 'from-[#B0C2B0]/20 to-[#E2DBDF]/10',
// // // // // // // // // //                 'from-[#C1B5C6]/20 to-[#B0C2B0]/15',
// // // // // // // // // //                 'from-[#B0C2B0]/25 to-[#C1B5C6]/15',
// // // // // // // // // //               ];
// // // // // // // // // //               const bg = gradients[index % gradients.length];

// // // // // // // // // //               return (
// // // // // // // // // //                 <div
// // // // // // // // // //                   key={condition.name}
// // // // // // // // // //                   className="group relative overflow-hidden bg-white p-10 rounded-2xl shadow-md transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
// // // // // // // // // //                   style={{ animationDelay: `${index * 0.05}s` }}
// // // // // // // // // //                 >
// // // // // // // // // //                   <div
// // // // // // // // // //                     className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
// // // // // // // // // //                   ></div>
// // // // // // // // // //                   <div className="absolute inset-0 border border-[#595959]/10 rounded-2xl group-hover:border-[#595959]/30 transition-colors duration-500"></div>
// // // // // // // // // //                   <div className="relative z-10 flex flex-col items-center">
// // // // // // // // // //                     <div className="w-16 h-16 mb-4 relative">
// // // // // // // // // //                       <div
// // // // // // // // // //                         className={`absolute inset-0 bg-gradient-to-br ${bg} rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
// // // // // // // // // //                       ></div>
// // // // // // // // // //                       <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-sm">
// // // // // // // // // //                         <Icon
// // // // // // // // // //                           className="h-7 w-7 text-[#595959] group-hover:text-[#262626] transition-colors duration-500"
// // // // // // // // // //                         />
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <p className="text-center text-sm md:text-base font-medium text-[#262626]">
// // // // // // // // // //                       {condition.name}
// // // // // // // // // //                     </p>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               );
// // // // // // // // // //             })}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* Technologies & Treatments */}
// // // // // // // // // //       <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#262626] to-[#595959]">
// // // // // // // // // //         <div className="absolute inset-0 opacity-5">
// // // // // // // // // //           <div className="absolute inset-0" style={{
// // // // // // // // // //             backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
// // // // // // // // // //             backgroundSize: '40px 40px'
// // // // // // // // // //           }}></div>
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="container mx-auto max-w-6xl relative z-10">
// // // // // // // // // //           <div className="text-center mb-20">
// // // // // // // // // //             <div className="inline-block">
// // // // // // // // // //               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#E2DBDF] relative">
// // // // // // // // // //                 Technologies & Treatments
// // // // // // // // // //                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2DBDF] to-transparent"></div>
// // // // // // // // // //               </h2>
// // // // // // // // // //             </div>
// // // // // // // // // //             <p className="text-lg text-[#E2DBDF]/80 max-w-2xl mx-auto mt-6">
// // // // // // // // // //               Advanced protocols that target root causes for lasting results
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="space-y-1">
// // // // // // // // // //             {treatments.map((treatment, index) => (
// // // // // // // // // //               <div
// // // // // // // // // //                 key={treatment.title}
// // // // // // // // // //                 className="group relative overflow-hidden transition-all duration-500"
// // // // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // //               >
// // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-r from-[#E2DBDF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// // // // // // // // // //                 <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#E2DBDF] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

// // // // // // // // // //                 <div className="relative z-10 p-8 md:p-10 flex items-start gap-6">
// // // // // // // // // //                   <div className="flex-shrink-0">
// // // // // // // // // //                     <div className="w-14 h-14 relative">
// // // // // // // // // //                       <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/30 to-transparent rounded-lg rotate-45"></div>
// // // // // // // // // //                       <div className="absolute inset-2 bg-[#595959] rounded-lg flex items-center justify-center group-hover:bg-[#E2DBDF] transition-colors duration-500">
// // // // // // // // // //                         <treatment.icon className="h-6 w-6 text-[#E2DBDF] group-hover:text-[#262626] transition-colors duration-500" />
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>

// // // // // // // // // //                   <div className="flex-1 min-w-0">
// // // // // // // // // //                     <h3 className="text-xl md:text-2xl font-light mb-2 text-[#E2DBDF] group-hover:text-white transition-colors duration-500">
// // // // // // // // // //                       {treatment.title}
// // // // // // // // // //                     </h3>
// // // // // // // // // //                     <p className="text-[#E2DBDF]/70 leading-relaxed">
// // // // // // // // // //                       {treatment.description}
// // // // // // // // // //                     </p>
// // // // // // // // // //                   </div>

// // // // // // // // // //                   <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
// // // // // // // // // //                     <div className="w-8 h-8 border border-[#E2DBDF]/50 rounded-full flex items-center justify-center">
// // // // // // // // // //                       <span className="text-[#E2DBDF] text-xl">→</span>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* Treatment Pricing Section */}
// // // // // // // // // //       <section className="py-24 px-6 bg-gradient-to-br from-white via-[#E2DBDF]/30 to-white">
// // // // // // // // // //         <div className="container mx-auto max-w-6xl">
// // // // // // // // // //           <div className="text-center mb-20">
// // // // // // // // // //             <div className="inline-block">
// // // // // // // // // //               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#262626] relative">
// // // // // // // // // //                 Treatment Services
// // // // // // // // // //                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
// // // // // // // // // //               </h2>
// // // // // // // // // //             </div>
// // // // // // // // // //             <p className="text-lg text-[#595959] max-w-2xl mx-auto mt-6">
// // // // // // // // // //               Professional trichology services with expert care and attention
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="grid md:grid-cols-2 gap-8 mb-16">
// // // // // // // // // //             {trichologyServices.map((service, index) => (
// // // // // // // // // //               <div
// // // // // // // // // //                 key={index}
// // // // // // // // // //                 className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#595959]/10"
// // // // // // // // // //               >
// // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-br from-[#C1B5C6]/5 to-[#B0C2B0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
// // // // // // // // // //                 <div className="relative z-10">
// // // // // // // // // //                   <div className="flex justify-between items-start mb-4">
// // // // // // // // // //                     <h3 className="text-2xl font-light text-[#262626] group-hover:text-[#595959] transition-colors flex-1 pr-4">
// // // // // // // // // //                       {service.name}
// // // // // // // // // //                     </h3>
// // // // // // // // // //                     <div className="flex flex-col items-end gap-2">
// // // // // // // // // //                       <div className="flex items-center gap-2 text-sm text-[#595959] bg-[#E2DBDF]/50 px-3 py-1 rounded-full">
// // // // // // // // // //                         <Clock className="w-4 h-4" />
// // // // // // // // // //                         <span>{service.duration}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
                  
// // // // // // // // // //                   <p className="text-[#595959] mb-4 leading-relaxed">
// // // // // // // // // //                     {service.description}
// // // // // // // // // //                   </p>
                  
// // // // // // // // // //                   <div className="flex items-center justify-between">
// // // // // // // // // //                     {service.note && (
// // // // // // // // // //                       <div className="inline-flex items-center gap-2">
// // // // // // // // // //                         <ShieldCheck className="w-4 h-4 text-[#B0C2B0]" />
// // // // // // // // // //                         <span className="text-xs font-medium text-[#B0C2B0]">
// // // // // // // // // //                           {service.note}
// // // // // // // // // //                         </span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     )}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#C1B5C6]/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// // // // // // // // // //               </div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="text-center bg-gradient-to-r from-[#C1B5C6]/10 via-[#E2DBDF]/20 to-[#B0C2B0]/10 p-10 rounded-2xl border border-[#595959]/10">
// // // // // // // // // //             <div className="max-w-3xl mx-auto">
// // // // // // // // // //               <h3 className="text-2xl font-light text-[#262626] mb-4">Consultation-Based Pricing</h3>
// // // // // // // // // //               <p className="text-lg text-[#595959] mb-4">
// // // // // // // // // //                 Each treatment plan is customized to your specific needs. Pricing will be determined during your initial consultation based on your personalized treatment protocol.
// // // // // // // // // //               </p>
// // // // // // // // // //               <p className="text-base text-[#595959]">
// // // // // // // // // //                 Contact us for detailed pricing information and package options tailored to your hair health goals.
// // // // // // // // // //               </p>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* Process Section */}
// // // // // // // // // //       <section className="py-24 px-6 bg-gradient-to-br from-[#B0C2B0]/10 via-white to-[#C1B5C6]/10">
// // // // // // // // // //         <div className="container mx-auto max-w-5xl">
// // // // // // // // // //           <div className="text-center mb-20">
// // // // // // // // // //             <div className="inline-block">
// // // // // // // // // //               <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#262626] relative">
// // // // // // // // // //                 How It Works
// // // // // // // // // //                 <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
// // // // // // // // // //               </h2>
// // // // // // // // // //             </div>
// // // // // // // // // //             <p className="text-lg text-[#595959] mt-6">
// // // // // // // // // //               A science-backed approach to healthier hair and scalp
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="relative">
// // // // // // // // // //             <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C1B5C6] via-[#595959] to-[#B0C2B0]"></div>

// // // // // // // // // //             <div className="space-y-16">
// // // // // // // // // //               {[
// // // // // // // // // //                 {
// // // // // // // // // //                   step: "01",
// // // // // // // // // //                   title: "Diagnostic Consultation",
// // // // // // // // // //                   description: "Comprehensive scalp analysis using medical-grade imaging to identify underlying issues.",
// // // // // // // // // //                   color: "text-[#C1B5C6]",
// // // // // // // // // //                   bgGradient: "from-[#C1B5C6]/20 to-[#E2DBDF]/20",
// // // // // // // // // //                   dotColor: "bg-[#C1B5C6]"
// // // // // // // // // //                 },
// // // // // // // // // //                 {
// // // // // // // // // //                   step: "02",
// // // // // // // // // //                   title: "Custom Treatment Plan",
// // // // // // // // // //                   description: "Personalized protocol designed specifically for your scalp condition and hair goals.",
// // // // // // // // // //                   color: "text-[#595959]",
// // // // // // // // // //                   bgGradient: "from-[#595959]/20 to-[#E2DBDF]/20",
// // // // // // // // // //                   dotColor: "bg-[#595959]"
// // // // // // // // // //                 },
// // // // // // // // // //                 {
// // // // // // // // // //                   step: "03",
// // // // // // // // // //                   title: "Treatment Sessions",
// // // // // // // // // //                   description: "Regular sessions using advanced technology and targeted therapies for optimal results.",
// // // // // // // // // //                   color: "text-[#B0C2B0]",
// // // // // // // // // //                   bgGradient: "from-[#B0C2B0]/20 to-[#C1B5C6]/20",
// // // // // // // // // //                   dotColor: "bg-[#B0C2B0]"
// // // // // // // // // //                 },
// // // // // // // // // //                 {
// // // // // // // // // //                   step: "04",
// // // // // // // // // //                   title: "Ongoing Support",
// // // // // // // // // //                   description: "Continuous monitoring and adjustments to ensure long-term scalp health and hair growth.",
// // // // // // // // // //                   color: "text-[#262626]",
// // // // // // // // // //                   bgGradient: "from-[#E2DBDF]/30 to-[#B0C2B0]/20",
// // // // // // // // // //                   dotColor: "bg-[#262626]"
// // // // // // // // // //                 }
// // // // // // // // // //               ].map((item, index) => (
// // // // // // // // // //                 <div
// // // // // // // // // //                   key={item.step}
// // // // // // // // // //                   className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
// // // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // //                 >
// // // // // // // // // //                   <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
// // // // // // // // // //                     <div className="inline-block relative">
// // // // // // // // // //                       <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} blur-2xl opacity-50`}></div>
// // // // // // // // // //                       <span className={`text-7xl md:text-8xl font-light ${item.color} relative`}>
// // // // // // // // // //                         {item.step}
// // // // // // // // // //                       </span>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <h3 className="text-2xl md:text-3xl font-light mb-3 text-[#262626] mt-2">
// // // // // // // // // //                       {item.title}
// // // // // // // // // //                     </h3>
// // // // // // // // // //                     <p className="text-[#595959] leading-relaxed text-base md:text-lg">
// // // // // // // // // //                       {item.description}
// // // // // // // // // //                     </p>
// // // // // // // // // //                   </div>

// // // // // // // // // //                   <div className={`absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full ${item.dotColor} border-4 border-white shadow-lg`}></div>

// // // // // // // // // //                   <div className="flex-1 hidden md:block"></div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* CTA Section */}
// // // // // // // // // //       {/* <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#595959] via-[#262626] to-[#B0C2B0]/50">
// // // // // // // // // //         <div className="absolute inset-0 opacity-15">
// // // // // // // // // //           <div
// // // // // // // // // //             className="absolute inset-0"
// // // // // // // // // //             style={{
// // // // // // // // // //               backgroundImage:
// // // // // // // // // //                 'linear-gradient(45deg, #E2DBDF 25%, transparent 25%, transparent 75%, #E2DBDF 75%, #E2DBDF), linear-gradient(45deg, #E2DBDF 25%, transparent 25%, transparent 75%, #E2DBDF 75%, #E2DBDF)',
// // // // // // // // // //               backgroundSize: '60px 60px',
// // // // // // // // // //               backgroundPosition: '0 0, 30px 30px',
// // // // // // // // // //             }}
// // // // // // // // // //           ></div>
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="container mx-auto max-w-4xl text-center relative z-10">
// // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#E2DBDF]">
// // // // // // // // // //             Start Your Hair Health Journey
// // // // // // // // // //           </h2>
// // // // // // // // // //           <p className="text-xl text-[#C1B5C6] mb-10 max-w-2xl mx-auto leading-relaxed">
// // // // // // // // // //             Book a diagnostic consultation and discover the root cause of your hair concerns
// // // // // // // // // //           </p>
// // // // // // // // // //           <div className="flex justify-center">
// // // // // // // // // //             <Button
// // // // // // // // // //               className="bg-white hover:bg-[#595959] text-[#262626] hover:text-white w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
// // // // // // // // // //               size="lg"
// // // // // // // // // //               onClick={() => window.open('/contact#contact-form', '_self')}
// // // // // // // // // //             >
// // // // // // // // // //               Book Consultation
// // // // // // // // // //             </Button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section> */}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Trichology;
// // // // // // // // // import React from 'react';
// // // // // // // // // import { Mail, Phone, MapPin } from 'lucide-react';

// // // // // // // // // // Placeholder images - replace with actual assets
// // // // // // // // // import heroImage from '@/assets/hero-beauty.jpg'; // Tools on table
// // // // // // // // // import blowDryImage from  '@/assets/hero-beauty.jpg'; // Tools on table
// // // // // // // // // import highlightsImage from  '@/assets/hero-beauty.jpg'; // Tools on table
// // // // // // // // // import chemicalTreatmentsImage from  '@/assets/hero-beauty.jpg'; // Tools on table
// // // // // // // // // import hairRebondingImage from  '@/assets/hero-beauty.jpg'; // Tools on table
// // // // // // // // // import conditioningImage from  '@/assets/hero-beauty.jpg'; // Tools on table
// // // // // // // // // import ladiesCutImage from  '@/assets/hero-beauty.jpg'; // Tools on table
// // // // // // // // // import stylingImage from  '@/assets/hero-beauty.jpg'; // Tools on table
// // // // // // // // // import locksImage from  '@/assets/hero-beauty.jpg'; // Tools on table
// // // // // // // // // import silkPressImage from  '@/assets/hero-beauty.jpg'; // Tools on table
// // // // // // // // // import steamPodImage from  '@/assets/hero-beauty.jpg'; // Tools on table
// // // // // // // // // import trichologyHero from "@/assets/op.png";
// // // // // // // // // import ServiceHero from "@/components/ui/ServiceHero";

// // // // // // // // // const SerenityHair = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-scree">
// // // // // // // // //       {/* Hero Section */}
// // // // // // // // //       <div className="min-h-screen">
// // // // // // // // //         <ServiceHero
// // // // // // // // //           title="Advanced Trichology"
// // // // // // // // //           titleGradient="& Scalp Health"
// // // // // // // // //           description="Experience expert diagnosis and personalized treatments for optimal scalp and hair health. Our advanced trichology services combine science and luxury for transformative results."
// // // // // // // // //           image={trichologyHero}
// // // // // // // // //           imageAlt="Trichology and scalp health treatment"
// // // // // // // // //         />
// // // // // // // // //       </div>

      

// // // // // // // // //       <div className="container mx-auto px-6 py-16">
// // // // // // // // //         {/* Blow Dry Section */}
// // // // // // // // //         <div className="grid md:grid-cols-2 gap-8 mb-16">
// // // // // // // // //           <div className="bg-white p-8 rounded-2xl shadow-md">
// // // // // // // // //             <h2 className="text-3xl font-light mb-6">Blow Dry</h2>
// // // // // // // // //             <p className="text-[#595959] mb-6">designed to enhance your natural look with a new cut. Our products are used to create looks that suit your lifestyle.</p>
// // // // // // // // //             <div className="space-y-4">
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Short</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">2,500</div>
// // // // // // // // //                   <div className="font-medium">1,800</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Medium</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">3,000</div>
// // // // // // // // //                   <div className="font-medium">2,200</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Long</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">3,500</div>
// // // // // // // // //                   <div className="font-medium">2,500</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //           <img src={blowDryImage} alt="Woman with blow-dried hair" className="rounded-2xl shadow-md" />
// // // // // // // // //         </div>

// // // // // // // // //         {/* Highlights & Lowlights Section */}
// // // // // // // // //         <div className="grid md:grid-cols-2 gap-8 mb-16">
// // // // // // // // //           <img src={highlightsImage} alt="Highlights and lowlights" className="rounded-2xl shadow-md order-2 md:order-1" />
// // // // // // // // //           <div className="bg-white p-8 rounded-2xl shadow-md order-1 md:order-2">
// // // // // // // // //             <h2 className="text-3xl font-light mb-6">Highlights & Lowlights</h2>
// // // // // // // // //             <p className="text-[#595959] mb-6">Add dimension and depth to your hair with highlights. Our stylists work with you to create looks that suit your style.</p>
// // // // // // // // //             <div className="space-y-4">
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Full</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">8,000</div>
// // // // // // // // //                   <div className="font-medium">6,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Half</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">5,000</div>
// // // // // // // // //                   <div className="font-medium">4,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Partial</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">3,500</div>
// // // // // // // // //                   <div className="font-medium">2,500</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Chemical Treatments Section */}
// // // // // // // // //         <div className="grid md:grid-cols-2 gap-8 mb-16">
// // // // // // // // //           <div className="bg-white p-8 rounded-2xl shadow-md">
// // // // // // // // //             <h2 className="text-3xl font-light mb-6">Chemical Treatments</h2>
// // // // // // // // //             <p className="text-[#595959] mb-6">Transform your hair with our chemical treatments. Achieve smoother, straighter hair with lasting results.</p>
// // // // // // // // //             <div className="space-y-4">
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Keratin (Short)</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">4,000</div>
// // // // // // // // //                   <div className="font-medium">3,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Keratin (Medium)</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">5,000</div>
// // // // // // // // //                   <div className="font-medium">4,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Keratin (Long)</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">6,000</div>
// // // // // // // // //                   <div className="font-medium">5,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //           <img src={chemicalTreatmentsImage} alt="Chemical treatments" className="rounded-2xl shadow-md" />
// // // // // // // // //         </div>

// // // // // // // // //         {/* Hair Rebonding Section */}
// // // // // // // // //         <div className="grid md:grid-cols-2 gap-8 mb-16">
// // // // // // // // //           <img src={hairRebondingImage} alt="Hair rebonding" className="rounded-2xl shadow-md order-2 md:order-1" />
// // // // // // // // //           <div className="bg-white p-8 rounded-2xl shadow-md order-1 md:order-2">
// // // // // // // // //             <h2 className="text-3xl font-light mb-6">Hair Rebonding</h2>
// // // // // // // // //             <p className="text-[#595959] mb-6">Reshape and smooth your hair with rebonding. Perfect for frizzy or curly hair seeking a sleek look.</p>
// // // // // // // // //             <div className="space-y-4">
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Short</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">5,000</div>
// // // // // // // // //                   <div className="font-medium">4,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Medium</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">6,000</div>
// // // // // // // // //                   <div className="font-medium">5,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Long</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">7,000</div>
// // // // // // // // //                   <div className="font-medium">6,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Conditioning Treatments Section */}
// // // // // // // // //         <div className="grid md:grid-cols-2 gap-8 mb-16">
// // // // // // // // //           <div className="bg-white p-8 rounded-2xl shadow-md">
// // // // // // // // //             <h2 className="text-3xl font-light mb-6">Conditioning Treatments</h2>
// // // // // // // // //             <p className="text-[#595959] mb-6">Revitalize your hair with deep conditioning. Our premium formulas repair and nourish from within.</p>
// // // // // // // // //             <div className="space-y-4">
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Olaplex (Short)</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">2,500</div>
// // // // // // // // //                   <div className="font-medium">2,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Olaplex (Medium)</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">3,000</div>
// // // // // // // // //                   <div className="font-medium">2,500</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Olaplex (Long)</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">3,500</div>
// // // // // // // // //                   <div className="font-medium">3,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //           <img src={conditioningImage} alt="Conditioning treatments" className="rounded-2xl shadow-md" />
// // // // // // // // //         </div>

// // // // // // // // //         {/* Ladies Hair Cut Section */}
// // // // // // // // //         <div className="grid md:grid-cols-2 gap-8 mb-16">
// // // // // // // // //           <img src={ladiesCutImage} alt="Ladies hair cut" className="rounded-2xl shadow-md order-2 md:order-1" />
// // // // // // // // //           <div className="bg-white p-8 rounded-2xl shadow-md order-1 md:order-2">
// // // // // // // // //             <h2 className="text-3xl font-light mb-6">Ladies Hair Cut</h2>
// // // // // // // // //             <p className="text-[#595959] mb-6">Refresh your look with a precision cut. Tailored to complement your face shape and lifestyle.</p>
// // // // // // // // //             <div className="space-y-4">
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Short</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">1,500</div>
// // // // // // // // //                   <div className="font-medium">1,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Medium</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">2,000</div>
// // // // // // // // //                   <div className="font-medium">1,500</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Long</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">2,500</div>
// // // // // // // // //                   <div className="font-medium">2,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Styling Section */}
// // // // // // // // //         <div className="grid md:grid-cols-2 gap-8 mb-16">
// // // // // // // // //           <div className="bg-white p-8 rounded-2xl shadow-md">
// // // // // // // // //             <h2 className="text-3xl font-light mb-6">Styling</h2>
// // // // // // // // //             <p className="text-[#595959] mb-6">Achieve your desired look with professional styling using premium products.</p>
// // // // // // // // //             <div className="space-y-4">
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Blow Dry & Iron</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">2,000</div>
// // // // // // // // //                   <div className="font-medium">1,500</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Wet Set</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">1,500</div>
// // // // // // // // //                   <div className="font-medium">1,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Wash & Dry</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">1,000</div>
// // // // // // // // //                   <div className="font-medium">800</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //           <img src={stylingImage} alt="Hair styling" className="rounded-2xl shadow-md" />
// // // // // // // // //         </div>

// // // // // // // // //         {/* Locks Section */}
// // // // // // // // //         <div className="grid md:grid-cols-2 gap-8 mb-16">
// // // // // // // // //           <img src={locksImage} alt="Locks maintenance" className="rounded-2xl shadow-md order-2 md:order-1" />
// // // // // // // // //           <div className="bg-white p-8 rounded-2xl shadow-md order-1 md:order-2">
// // // // // // // // //             <h2 className="text-3xl font-light mb-6">Locks</h2>
// // // // // // // // //             <p className="text-[#595959] mb-6">Maintain your locks with gentle, specialized care to keep them healthy and vibrant.</p>
// // // // // // // // //             <div className="space-y-4">
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Maintenance</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">3,000</div>
// // // // // // // // //                   <div className="font-medium">2,500</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Silk Press Section */}
// // // // // // // // //         <div className="grid md:grid-cols-2 gap-8 mb-16">
// // // // // // // // //           <div className="bg-white p-8 rounded-2xl shadow-md">
// // // // // // // // //             <h2 className="text-3xl font-light mb-6">Silk Press</h2>
// // // // // // // // //             <p className="text-[#595959] mb-6">Smooth and straighten your hair with silk press using advanced heat protection.</p>
// // // // // // // // //             <div className="space-y-4">
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Short</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">2,000</div>
// // // // // // // // //                   <div className="font-medium">1,500</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Medium</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">2,500</div>
// // // // // // // // //                   <div className="font-medium">2,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Long</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">3,000</div>
// // // // // // // // //                   <div className="font-medium">2,500</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //           <img src={silkPressImage} alt="Silk press" className="rounded-2xl shadow-md" />
// // // // // // // // //         </div>

// // // // // // // // //         {/* Steam Pod Section */}
// // // // // // // // //         <div className="grid md:grid-cols-2 gap-8 mb-16">
// // // // // // // // //           <img src={steamPodImage} alt="Steam pod treatment" className="rounded-2xl shadow-md order-2 md:order-1" />
// // // // // // // // //           <div className="bg-white p-8 rounded-2xl shadow-md order-1 md:order-2">
// // // // // // // // //             <h2 className="text-3xl font-light mb-6">Steam Pod</h2>
// // // // // // // // //             <p className="text-[#595959] mb-6">Styling with steam technology for healthier, longer-lasting results with less damage.</p>
// // // // // // // // //             <div className="space-y-4">
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Short</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">1,500</div>
// // // // // // // // //                   <div className="font-medium">1,200</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Medium</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">2,000</div>
// // // // // // // // //                   <div className="font-medium">1,600</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="flex justify-between">
// // // // // // // // //                 <span>Long</span>
// // // // // // // // //                 <div className="text-right">
// // // // // // // // //                   <div className="line-through text-[#595959]">2,500</div>
// // // // // // // // //                   <div className="font-medium">2,000</div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

      
      
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default SerenityHair;
// // // // // // // // import React from 'react';
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import { Microscope, Activity, Droplet, Wind, Zap, Scan, Clock, ShieldCheck } from "lucide-react";
// // // // // // // // import trichologyHero from "@/assets/op.png";
// // // // // // // // import ServiceHero from "@/components/ui/ServiceHero";

// // // // // // // // const Trichology = () => {
// // // // // // // //   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

// // // // // // // //   const allServices = [
// // // // // // // //     {
// // // // // // // //       name: "Meso Therapy",
// // // // // // // //       location: "Face or Scalp",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Cosmetology/Trichology",
// // // // // // // //       description:""
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Platelet Rich Plasma (PRP)",
// // // // // // // //       location: "Face or Scalp",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Cosmetology/Trichology"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Biogenix Kit",
// // // // // // // //       location: "Face or Scalp",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Cosmetology/Trichology"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "PRP + Meso + Derma Pen",
// // // // // // // //       location: "Face or Scalp",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Cosmetology/Trichology"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Meso Lipo",
// // // // // // // //       location: "1ML – Double Chin",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Slimming Treatment"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Meso Lipo",
// // // // // // // //       location: "3ML – Arm",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Slimming Treatment"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Meso Lipo",
// // // // // // // //       location: "5–10ML – Tummy",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Slimming Treatment"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Cavitation",
// // // // // // // //       location: "Chin Area",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Slimming Treatment"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Cavitation",
// // // // // // // //       location: "Arms Area",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Slimming Treatment"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Cavitation",
// // // // // // // //       location: "Tummy Area",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Slimming Treatment"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Light Peeling",
// // // // // // // //       location: "Face",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Peeling"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Chemical Peeling",
// // // // // // // //       location: "Face",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Peeling"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Alopecia Injection",
// // // // // // // //       location: "Scalp, Beard, Mustache",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Injection into Skin Lesion"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Keloids Injection",
// // // // // // // //       location: "",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Injection into Skin Lesion"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Electric Cautery",
// // // // // // // //       location: "",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Warts & Skin Tag Removal"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Warts & Skin Tag Removal",
// // // // // // // //       location: "Per Piece",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Warts & Skin Tag Removal"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Warts & Skin Tag Removal",
// // // // // // // //       location: "Full Face",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Warts & Skin Tag Removal"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Warts & Skin Tag Removal",
// // // // // // // //       location: "Full Neck",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Warts & Skin Tag Removal"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Warts & Skin Tag Removal",
// // // // // // // //       location: "Full Face & Neck",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Warts & Skin Tag Removal"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Warts & Skin Tag Removal",
// // // // // // // //       location: "Chest & Back",
// // // // // // // //       price: "TBC",
// // // // // // // //       department: "Warts & Skin Tag Removal"
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   const departments = [
// // // // // // // //     { id: "All", label: "All Treatments" },
// // // // // // // //     { id: "Cosmetology/Trichology", label: "Cosmetology" },
// // // // // // // //     { id: "Slimming Treatment", label: "Slimming" },
// // // // // // // //     { id: "Peeling", label: "Peeling" },
// // // // // // // //     { id: "Injection into Skin Lesion", label: "Injections" },
// // // // // // // //     { id: "Warts & Skin Tag Removal", label: "Removal" }
// // // // // // // //   ];

// // // // // // // //   const filteredServices = selectedDepartment === "All" 
// // // // // // // //     ? allServices 
// // // // // // // //     : allServices.filter(service => service.department === selectedDepartment);

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen">
// // // // // // // //       <ServiceHero
// // // // // // // //         title="Advanced Trichology"
// // // // // // // //         titleGradient="& Scalp Health"
// // // // // // // //         description="Experience expert diagnosis and personalized treatments for optimal scalp and hair health. Our advanced trichology services combine science and luxury for transformative results."
// // // // // // // //         image={trichologyHero}
// // // // // // // //         imageAlt="Trichology and scalp health treatment"
// // // // // // // //       />

// // // // // // // //       {/* Introduction */}
// // // // // // // //       <section className="py-16 px-6 bg-white">
// // // // // // // //         <div className="container mx-auto max-w-4xl text-center">
// // // // // // // //           <p className="text-base md:text-lg text-[#595959] leading-relaxed">
// // // // // // // //             At Avya, we bring comprehensive aesthetic and trichology services to Nairobi. 
// // // // // // // //             Whether you're addressing hair loss, skin concerns, or body contouring, our expert team 
// // // // // // // //             uses advanced technologies and proven techniques to deliver exceptional results tailored to your unique needs.
// // // // // // // //           </p>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Department Filter */}
// // // // // // // //       <section className="py-8 px-6 bg-[#595959]">
// // // // // // // //         <div className="container mx-auto max-w-6xl">
// // // // // // // //           <div className="flex flex-wrap justify-center gap-4">
// // // // // // // //             {departments.map((dept) => (
// // // // // // // //               <button
// // // // // // // //                 key={dept.id}
// // // // // // // //                 onClick={() => setSelectedDepartment(dept.id)}
// // // // // // // //                 className={`px-6 py-2.5 text-sm font-light tracking-wide transition-all ${
// // // // // // // //                   selectedDepartment === dept.id
// // // // // // // //                     ? 'bg-white text-[#262626]'
// // // // // // // //                     : 'bg-transparent text-white border border-white/30 hover:border-white'
// // // // // // // //                 }`}
// // // // // // // //               >
// // // // // // // //                 {dept.label}
// // // // // // // //               </button>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Services Grid */}
// // // // // // // //       <section className="py-20 px-6 bg-[#E2DBDF]/20">
// // // // // // // //         <div className="container mx-auto max-w-6xl">
// // // // // // // //           <div className="space-y-24">
// // // // // // // //             {filteredServices.map((service, index) => (
// // // // // // // //               <div 
// // // // // // // //                 key={`${service.name}-${service.location}-${index}`} 
// // // // // // // //                 className={`grid md:grid-cols-2 gap-12 items-center ${
// // // // // // // //                   index % 2 === 0 ? '' : 'md:flex-row-reverse'
// // // // // // // //                 }`}
// // // // // // // //               >
// // // // // // // //                 {/* Image Side */}
// // // // // // // //                 <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
// // // // // // // //                   <div className="aspect-[4/3] bg-[#595959]/20 rounded-sm overflow-hidden">
// // // // // // // //                     {/* Placeholder for actual images */}
// // // // // // // //                     <div className="w-full h-full flex items-center justify-center text-[#595959]/40">
// // // // // // // //                       Image
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>

// // // // // // // //                 {/* Content Side */}
// // // // // // // //                 <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
// // // // // // // //                   <div className="space-y-4">
// // // // // // // //                     <div>
// // // // // // // //                       <p className="text-xs text-[#C1B5C6] uppercase tracking-widest mb-3">
// // // // // // // //                         {service.department}
// // // // // // // //                       </p>
// // // // // // // //                       <h3 className="text-3xl md:text-4xl font-light text-[#262626] mb-2">
// // // // // // // //                         {service.name}
// // // // // // // //                       </h3>
// // // // // // // //                       {service.location && (
// // // // // // // //                         <p className="text-sm text-[#595959] font-light">
// // // // // // // //                           {service.location}
// // // // // // // //                         </p>
// // // // // // // //                       )}
// // // // // // // //                     </div>
                    
// // // // // // // //                     <p className="text-base text-[#595959] leading-relaxed">
// // // // // // // //                       {service.description}
// // // // // // // //                     </p>

// // // // // // // //                     {/* Price Table */}
// // // // // // // //                     <div className="pt-4 space-y-2">
// // // // // // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // // // // // //                         <span className="text-sm font-light text-[#595959]">Treatment</span>
// // // // // // // //                         <span className="text-sm font-light text-[#262626]">{service.name}</span>
// // // // // // // //                       </div>
// // // // // // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // // // // // //                         <span className="text-sm font-light text-[#595959]">Area</span>
// // // // // // // //                         <span className="text-sm font-light text-[#262626]">{service.location || "Various"}</span>
// // // // // // // //                       </div>
// // // // // // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // // // // // //                         <span className="text-sm font-light text-[#595959]">Price</span>
// // // // // // // //                         <span className="text-sm font-light text-[#262626]">{service.price}</span>
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Process Section */}
// // // // // // // //       <section className="py-20 px-6 bg-white">
// // // // // // // //         <div className="container mx-auto max-w-5xl">
// // // // // // // //           <div className="text-center mb-16">
// // // // // // // //             <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-4">
// // // // // // // //               How It Works
// // // // // // // //             </h2>
// // // // // // // //             <div className="w-24 h-[1px] bg-[#595959] mx-auto"></div>
// // // // // // // //           </div>

// // // // // // // //           <div className="grid md:grid-cols-4 gap-12">
// // // // // // // //             {[
// // // // // // // //               {
// // // // // // // //                 step: "01",
// // // // // // // //                 title: "Consultation",
// // // // // // // //                 description: "Comprehensive assessment to understand your concerns and goals"
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 step: "02",
// // // // // // // //                 title: "Custom Plan",
// // // // // // // //                 description: "Personalized treatment protocol designed for your needs"
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 step: "03",
// // // // // // // //                 title: "Treatment",
// // // // // // // //                 description: "Expert application of advanced therapies and technologies"
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 step: "04",
// // // // // // // //                 title: "Follow-Up",
// // // // // // // //                 description: "Ongoing support and adjustments for optimal results"
// // // // // // // //               }
// // // // // // // //             ].map((item) => (
// // // // // // // //               <div key={item.step} className="text-center">
// // // // // // // //                 <div className="text-5xl font-light text-[#C1B5C6] mb-4">{item.step}</div>
// // // // // // // //                 <h3 className="text-xl font-light text-[#262626] mb-3">{item.title}</h3>
// // // // // // // //                 <p className="text-sm text-[#595959] leading-relaxed">{item.description}</p>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Footer Note */}
// // // // // // // //       <section className="py-16 px-6 bg-[#E2DBDF]/30">
// // // // // // // //         <div className="container mx-auto max-w-4xl text-center">
// // // // // // // //           <p className="text-sm text-[#595959] leading-relaxed">
// // // // // // // //             <span className="font-medium">Please Note:</span> All treatments are consultation-based. 
// // // // // // // //             Pricing and treatment plans will be customized during your initial consultation based on 
// // // // // // // //             your specific needs, desired outcomes, and our expert assessment. Contact us to book your 
// // // // // // // //             consultation and begin your transformation journey.
// // // // // // // //           </p>
// // // // // // // //         </div>
// // // // // // // //       </section>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Trichology;
// // // // // // // import React from 'react';
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import ServiceHero from "@/components/ui/ServiceHero";
// // // // // // // import trichologyHero from "@/assets/op.png";

// // // // // // // // Import all service images
// // // // // // // import mesoTherapyImage from  "@/assets/op.png";
// // // // // // // import prpImage from  "@/assets/op.png";
// // // // // // // import biogenixKitImage from  "@/assets/op.png";
// // // // // // // import prpMesoDermaPenImage from "@/assets/op.png";
// // // // // // // import mesoLipoImage from  "@/assets/op.png";
// // // // // // // import cavitationImage from  "@/assets/op.png";
// // // // // // // import lightPeelingImage from  "@/assets/op1.png";
// // // // // // // import chemicalPeelingImage from  "@/assets/op4.png";
// // // // // // // import alopeciaInjectionImage from "@/assets/op2.png";
// // // // // // // import keloidsInjectionImage from "@/assets/op3.png";
// // // // // // // import electricCauteryImage from  "@/assets/op5.png";
// // // // // // // import wartsSkinTagRemovalImage from  "@/assets/op.png";
// // // // // // // import defaultImage from "@/assets/op3.png";

// // // // // // // const Trichology = () => {
// // // // // // //   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

// // // // // // //   const allServices = [
// // // // // // //     {
// // // // // // //       name: "Meso Therapy",
// // // // // // //       location: "Face or Scalp",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Cosmetology/Trichology",
// // // // // // //       description: "",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Platelet Rich Plasma (PRP)",
// // // // // // //       location: "Face or Scalp",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Cosmetology/Trichology",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Biogenix Kit",
// // // // // // //       location: "Face or Scalp",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Cosmetology/Trichology",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "PRP + Meso + Derma Pen",
// // // // // // //       location: "Face or Scalp",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Cosmetology/Trichology",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Meso Lipo",
// // // // // // //       location: "1ML – Double Chin",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Slimming Treatment",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Meso Lipo",
// // // // // // //       location: "3ML – Arm",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Slimming Treatment",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Meso Lipo",
// // // // // // //       location: "5–10ML – Tummy",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Slimming Treatment",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Cavitation",
// // // // // // //       location: "Chin Area",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Slimming Treatment",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Cavitation",
// // // // // // //       location: "Arms Area",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Slimming Treatment",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Cavitation",
// // // // // // //       location: "Tummy Area",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Slimming Treatment",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Light Peeling",
// // // // // // //       location: "Face",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Peeling",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Chemical Peeling",
// // // // // // //       location: "Face",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Peeling",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Alopecia Injection",
// // // // // // //       location: "Scalp, Beard, Mustache",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Injection into Skin Lesion",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Keloids Injection",
// // // // // // //       location: "",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Injection into Skin Lesion",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Electric Cautery",
// // // // // // //       location: "",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Warts & Skin Tag Removal",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Warts & Skin Tag Removal",
// // // // // // //       location: "Per Piece",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Warts & Skin Tag Removal",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Warts & Skin Tag Removal",
// // // // // // //       location: "Full Face",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Warts & Skin Tag Removal",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Warts & Skin Tag Removal",
// // // // // // //       location: "Full Neck",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Warts & Skin Tag Removal",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Warts & Skin Tag Removal",
// // // // // // //       location: "Full Face & Neck",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Warts & Skin Tag Removal",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Warts & Skin Tag Removal",
// // // // // // //       location: "Chest & Back",
// // // // // // //       price: "TBC",
// // // // // // //       department: "Warts & Skin Tag Removal",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   const departments = [
// // // // // // //     { id: "All", label: "All Treatments" },
// // // // // // //     { id: "Cosmetology/Trichology", label: "Cosmetology" },
// // // // // // //     { id: "Slimming Treatment", label: "Slimming" },
// // // // // // //     { id: "Peeling", label: "Peeling" },
// // // // // // //     { id: "Injection into Skin Lesion", label: "Injections" },
// // // // // // //     { id: "Warts & Skin Tag Removal", label: "Removal" },
// // // // // // //   ];

// // // // // // //   // Map each service name to its image
// // // // // // //   const serviceImages = {
// // // // // // //     "Meso Therapy": mesoTherapyImage,
// // // // // // //     "Platelet Rich Plasma (PRP)": prpImage,
// // // // // // //     "Biogenix Kit": biogenixKitImage,
// // // // // // //     "PRP + Meso + Derma Pen": prpMesoDermaPenImage,
// // // // // // //     "Meso Lipo": mesoLipoImage,
// // // // // // //     "Cavitation": cavitationImage,
// // // // // // //     "Light Peeling": lightPeelingImage,
// // // // // // //     "Chemical Peeling": chemicalPeelingImage,
// // // // // // //     "Alopecia Injection": alopeciaInjectionImage,
// // // // // // //     "Keloids Injection": keloidsInjectionImage,
// // // // // // //     "Electric Cautery": electricCauteryImage,
// // // // // // //     "Warts & Skin Tag Removal": wartsSkinTagRemovalImage,
// // // // // // //   };

// // // // // // //   const filteredServices =
// // // // // // //     selectedDepartment === "All"
// // // // // // //       ? allServices
// // // // // // //       : allServices.filter((service) => service.department === selectedDepartment);

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen">
// // // // // // //       <ServiceHero
// // // // // // //         title="Advanced Trichology"
// // // // // // //         titleGradient="& Scalp Health"
// // // // // // //         description="Experience expert diagnosis and personalized treatments for optimal scalp and hair health. Our advanced trichology services combine science and luxury for transformative results."
// // // // // // //         image={trichologyHero}
// // // // // // //         imageAlt="Trichology and scalp health treatment"
// // // // // // //       />

// // // // // // //       {/* Introduction */}
// // // // // // //       <section className="py-16 px-6 bg-white">
// // // // // // //         <div className="container mx-auto max-w-4xl text-center">
// // // // // // //           <p className="text-base md:text-lg text-[#595959] leading-relaxed">
// // // // // // //             At Avya, we bring comprehensive aesthetic and trichology services to Nairobi.
// // // // // // //             Whether you're addressing hair loss, skin concerns, or body contouring, our expert team
// // // // // // //             uses advanced technologies and proven techniques to deliver exceptional results tailored to your unique needs.
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* Department Filter */}
// // // // // // //       <section className="py-8 px-6 bg-[#595959]">
// // // // // // //         <div className="container mx-auto max-w-6xl">
// // // // // // //           <div className="flex flex-wrap justify-center gap-4">
// // // // // // //             {departments.map((dept) => (
// // // // // // //               <button
// // // // // // //                 key={dept.id}
// // // // // // //                 onClick={() => setSelectedDepartment(dept.id)}
// // // // // // //                 className={`px-6 py-2.5 text-sm font-light tracking-wide transition-all ${
// // // // // // //                   selectedDepartment === dept.id
// // // // // // //                     ? "bg-white text-[#262626]"
// // // // // // //                     : "bg-transparent text-white border border-white/30 hover:border-white"
// // // // // // //                 }`}
// // // // // // //               >
// // // // // // //                 {dept.label}
// // // // // // //               </button>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* Services Grid */}
// // // // // // //       <section className="py-20 px-6 bg-[#E2DBDF]/20">
// // // // // // //         <div className="container mx-auto max-w-6xl">
// // // // // // //           <div className="space-y-24">
// // // // // // //             {filteredServices.map((service, index) => (
// // // // // // //               <div
// // // // // // //                 key={`${service.name}-${service.location}-${index}`}
// // // // // // //                 className={`grid md:grid-cols-2 gap-12 items-center ${
// // // // // // //                   index % 2 === 0 ? "" : "md:flex-row-reverse"
// // // // // // //                 }`}
// // // // // // //               >
// // // // // // //                 {/* Image Side */}
// // // // // // //                 <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
// // // // // // //                   <div className="aspect-[4/3] bg-[#595959]/20 rounded-sm overflow-hidden">
// // // // // // //                     <img
// // // // // // //                       src={serviceImages[service.name] || defaultImage}
// // // // // // //                       alt={service.name}
// // // // // // //                       className="w-full h-full object-cover"
// // // // // // //                     />
// // // // // // //                   </div>
// // // // // // //                 </div>

// // // // // // //                 {/* Content Side */}
// // // // // // //                 <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
// // // // // // //                   <div className="space-y-4">
// // // // // // //                     <div>
// // // // // // //                       <p className="text-xs text-[#C1B5C6] uppercase tracking-widest mb-3">
// // // // // // //                         {service.department}
// // // // // // //                       </p>
// // // // // // //                       <h3 className="text-3xl md:text-4xl font-light text-[#262626] mb-2">
// // // // // // //                         {service.name}
// // // // // // //                       </h3>
// // // // // // //                       {service.location && (
// // // // // // //                         <p className="text-sm text-[#595959] font-light">{service.location}</p>
// // // // // // //                       )}
// // // // // // //                     </div>
// // // // // // //                     <p className="text-base text-[#595959] leading-relaxed">
// // // // // // //                       {service.description}
// // // // // // //                     </p>
// // // // // // //                     {/* Price Table */}
// // // // // // //                     <div className="pt-4 space-y-2">
// // // // // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // // // // //                         <span className="text-sm font-light text-[#595959]">Treatment</span>
// // // // // // //                         <span className="text-sm font-light text-[#262626]">{service.name}</span>
// // // // // // //                       </div>
// // // // // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // // // // //                         <span className="text-sm font-light text-[#595959]">Area</span>
// // // // // // //                         <span className="text-sm font-light text-[#262626]">
// // // // // // //                           {service.location || "Various"}
// // // // // // //                         </span>
// // // // // // //                       </div>
// // // // // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // // // // //                         <span className="text-sm font-light text-[#595959]">Price</span>
// // // // // // //                         <span className="text-sm font-light text-[#262626]">{service.price}</span>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* Process Section */}
// // // // // // //       <section className="py-20 px-6 bg-white">
// // // // // // //         <div className="container mx-auto max-w-5xl">
// // // // // // //           <div className="text-center mb-16">
// // // // // // //             <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-4">How It Works</h2>
// // // // // // //             <div className="w-24 h-[1px] bg-[#595959] mx-auto"></div>
// // // // // // //           </div>
// // // // // // //           <div className="grid md:grid-cols-4 gap-12">
// // // // // // //             {[
// // // // // // //               {
// // // // // // //                 step: "01",
// // // // // // //                 title: "Consultation",
// // // // // // //                 description: "Comprehensive assessment to understand your concerns and goals",
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 step: "02",
// // // // // // //                 title: "Custom Plan",
// // // // // // //                 description: "Personalized treatment protocol designed for your needs",
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 step: "03",
// // // // // // //                 title: "Treatment",
// // // // // // //                 description: "Expert application of advanced therapies and technologies",
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 step: "04",
// // // // // // //                 title: "Follow-Up",
// // // // // // //                 description: "Ongoing support and adjustments for optimal results",
// // // // // // //               },
// // // // // // //             ].map((item) => (
// // // // // // //               <div key={item.step} className="text-center">
// // // // // // //                 <div className="text-5xl font-light text-[#C1B5C6] mb-4">{item.step}</div>
// // // // // // //                 <h3 className="text-xl font-light text-[#262626] mb-3">{item.title}</h3>
// // // // // // //                 <p className="text-sm text-[#595959] leading-relaxed">{item.description}</p>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* Footer Note */}
// // // // // // //       <section className="py-16 px-6 bg-[#E2DBDF]/30">
// // // // // // //         <div className="container mx-auto max-w-4xl text-center">
// // // // // // //           <p className="text-sm text-[#595959] leading-relaxed">
// // // // // // //             <span className="font-medium">Please Note:</span> All treatments are consultation-based.
// // // // // // //             Pricing and treatment plans will be customized during your initial consultation based on
// // // // // // //             your specific needs, desired outcomes, and our expert assessment. Contact us to book your
// // // // // // //             consultation and begin your transformation journey.
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       </section>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Trichology;
// // // // // // import React from 'react';
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import ServiceHero from "@/components/ui/ServiceHero";
// // // // // // import trichologyHero from "@/assets/op.png";

// // // // // // // Import all service images
// // // // // // import mesoTherapyImage from "@/assets/op.png";
// // // // // // import prpImage from "@/assets/op.png";
// // // // // // import biogenixKitImage from "@/assets/op.png";
// // // // // // import prpMesoDermaPenImage from "@/assets/op.png";
// // // // // // import mesoLipoImage from "@/assets/op.png";
// // // // // // import cavitationImage from "@/assets/op.png";
// // // // // // import lightPeelingImage from "@/assets/op1.png";
// // // // // // import chemicalPeelingImage from "@/assets/op4.png";
// // // // // // import alopeciaInjectionImage from "@/assets/op2.png";
// // // // // // import keloidsInjectionImage from "@/assets/op3.png";
// // // // // // import electricCauteryImage from "@/assets/op5.png";
// // // // // // import wartsSkinTagRemovalImage from "@/assets/op.png";
// // // // // // import defaultImage from "@/assets/op3.png";

// // // // // // const Trichology = () => {
// // // // // //   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

// // // // // //   const allServices = [
// // // // // //     {
// // // // // //       name: "Meso Therapy",
// // // // // //       location: "Face or Scalp",
// // // // // //       price: "TBC",
// // // // // //       department: "Cosmetology/Trichology",
// // // // // //       description: "",
// // // // // //       image: mesoTherapyImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Platelet Rich Plasma (PRP)",
// // // // // //       location: "Face or Scalp",
// // // // // //       price: "TBC",
// // // // // //       department: "Cosmetology/Trichology",
// // // // // //       image: prpImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Biogenix Kit",
// // // // // //       location: "Face or Scalp",
// // // // // //       price: "TBC",
// // // // // //       department: "Cosmetology/Trichology",
// // // // // //       image: biogenixKitImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "PRP + Meso + Derma Pen",
// // // // // //       location: "Face or Scalp",
// // // // // //       price: "TBC",
// // // // // //       department: "Cosmetology/Trichology",
// // // // // //       image: prpMesoDermaPenImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Meso Lipo",
// // // // // //       location: "1ML – Double Chin",
// // // // // //       price: "TBC",
// // // // // //       department: "Slimming Treatment",
// // // // // //       image: mesoLipoImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Meso Lipo",
// // // // // //       location: "3ML – Arm",
// // // // // //       price: "TBC",
// // // // // //       department: "Slimming Treatment",
// // // // // //       image: mesoLipoImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Meso Lipo",
// // // // // //       location: "5–10ML – Tummy",
// // // // // //       price: "TBC",
// // // // // //       department: "Slimming Treatment",
// // // // // //       image: mesoLipoImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Cavitation",
// // // // // //       location: "Chin Area",
// // // // // //       price: "TBC",
// // // // // //       department: "Slimming Treatment",
// // // // // //       image: cavitationImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Cavitation",
// // // // // //       location: "Arms Area",
// // // // // //       price: "TBC",
// // // // // //       department: "Slimming Treatment",
// // // // // //       image: cavitationImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Cavitation",
// // // // // //       location: "Tummy Area",
// // // // // //       price: "TBC",
// // // // // //       department: "Slimming Treatment",
// // // // // //       image: cavitationImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Light Peeling",
// // // // // //       location: "Face",
// // // // // //       price: "TBC",
// // // // // //       department: "Peeling",
// // // // // //       image: lightPeelingImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Chemical Peeling",
// // // // // //       location: "Face",
// // // // // //       price: "TBC",
// // // // // //       department: "Peeling",
// // // // // //       image: chemicalPeelingImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Alopecia Injection",
// // // // // //       location: "Scalp, Beard, Mustache",
// // // // // //       price: "TBC",
// // // // // //       department: "Injection into Skin Lesion",
// // // // // //       image: alopeciaInjectionImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Keloids Injection",
// // // // // //       location: "",
// // // // // //       price: "TBC",
// // // // // //       department: "Injection into Skin Lesion",
// // // // // //       image: keloidsInjectionImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Electric Cautery",
// // // // // //       location: "",
// // // // // //       price: "TBC",
// // // // // //       department: "Warts & Skin Tag Removal",
// // // // // //       image: electricCauteryImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Warts & Skin Tag Removal",
// // // // // //       location: "Per Piece",
// // // // // //       price: "TBC",
// // // // // //       department: "Warts & Skin Tag Removal",
// // // // // //       image: wartsSkinTagRemovalImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Warts & Skin Tag Removal",
// // // // // //       location: "Full Face",
// // // // // //       price: "TBC",
// // // // // //       department: "Warts & Skin Tag Removal",
// // // // // //       image: wartsSkinTagRemovalImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Warts & Skin Tag Removal",
// // // // // //       location: "Full Neck",
// // // // // //       price: "TBC",
// // // // // //       department: "Warts & Skin Tag Removal",
// // // // // //       image: wartsSkinTagRemovalImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Warts & Skin Tag Removal",
// // // // // //       location: "Full Face & Neck",
// // // // // //       price: "TBC",
// // // // // //       department: "Warts & Skin Tag Removal",
// // // // // //       image: wartsSkinTagRemovalImage,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Warts & Skin Tag Removal",
// // // // // //       location: "Chest & Back",
// // // // // //       price: "TBC",
// // // // // //       department: "Warts & Skin Tag Removal",
// // // // // //       image: wartsSkinTagRemovalImage,
// // // // // //     },
// // // // // //   ];

// // // // // //   const departments = [
// // // // // //     { id: "All", label: "All" },
// // // // // //     { id: "Cosmetology/Trichology", label: "Cosmetology" },
// // // // // //     { id: "Slimming Treatment", label: "Slimming" },
// // // // // //     { id: "Peeling", label: "Peeling" },
// // // // // //     { id: "Injection into Skin Lesion", label: "Injections" },
// // // // // //     { id: "Warts & Skin Tag Removal", label: "Removal" },
// // // // // //   ];

// // // // // //   const filteredServices =
// // // // // //     selectedDepartment === "All"
// // // // // //       ? allServices
// // // // // //       : allServices.filter((service) => service.department === selectedDepartment);

// // // // // //   return (
// // // // // //     <div className="min-h-screen">
// // // // // //       <ServiceHero
// // // // // //         title="Advanced Trichology"
// // // // // //         titleGradient="& Scalp Health"
// // // // // //         description="Experience expert diagnosis and personalized treatments for optimal scalp and hair health. Our advanced trichology services combine science and luxury for transformative results."
// // // // // //         image={trichologyHero}
// // // // // //         imageAlt="Trichology and scalp health treatment"
// // // // // //       />

// // // // // //       {/* Introduction */}
// // // // // //       <section className="py-16 px-6 bg-white">
// // // // // //         <div className="container mx-auto max-w-4xl text-center">
// // // // // //           <p className="text-base md:text-lg text-[#595959] leading-relaxed">
// // // // // //             At Avya, we bring comprehensive aesthetic and trichology services to Nairobi.
// // // // // //             Whether you're addressing hair loss, skin concerns, or body contouring, our expert team
// // // // // //             uses advanced technologies and proven techniques to deliver exceptional results tailored to your unique needs.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Department Filter */}
// // // // // //       <section className="py-8 px-6 bg-[#595959]">
// // // // // //         <div className="container mx-auto max-w-6xl">
// // // // // //           <div className="flex flex-wrap justify-center gap-4">
// // // // // //             {departments.map((dept) => (
// // // // // //               <button
// // // // // //                 key={dept.id}
// // // // // //                 onClick={() => setSelectedDepartment(dept.id)}
// // // // // //                 className={`px-6 py-2.5 text-sm font-light tracking-wide transition-all ${
// // // // // //                   selectedDepartment === dept.id
// // // // // //                     ? "bg-white text-[#262626]"
// // // // // //                     : "bg-transparent text-white border border-white/30 hover:border-white"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 {dept.label}
// // // // // //               </button>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Services Grid */}
// // // // // //       <section className="py-20 px-6 bg-[#E2DBDF]/20">
// // // // // //         <div className="container mx-auto max-w-6xl">
// // // // // //           <div className="space-y-24">
// // // // // //             {filteredServices.map((service, index) => (
// // // // // //               <div
// // // // // //                 key={`${service.name}-${service.location}-${index}`}
// // // // // //                 className={`grid md:grid-cols-2 gap-12 items-center ${
// // // // // //                   index % 2 === 0 ? "" : "md:flex-row-reverse"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 {/* Image Side */}
// // // // // //                 <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
// // // // // //                   <div className="aspect-[4/3] bg-[#595959]/20 rounded-sm overflow-hidden">
// // // // // //                     <img
// // // // // //                       src={service.image || defaultImage}
// // // // // //                       alt={service.name}
// // // // // //                       className="w-full h-full object-cover"
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 {/* Content Side */}
// // // // // //                 <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
// // // // // //                   <div className="space-y-4">
// // // // // //                     <div>
// // // // // //                       <p className="text-xs text-[#C1B5C6] uppercase tracking-widest mb-3">
// // // // // //                         {service.department}
// // // // // //                       </p>
// // // // // //                       <h3 className="text-3xl md:text-4xl font-light text-[#262626] mb-2">
// // // // // //                         {service.name}
// // // // // //                       </h3>
// // // // // //                       {service.location && (
// // // // // //                         <p className="text-sm text-[#595959] font-light">{service.location}</p>
// // // // // //                       )}
// // // // // //                     </div>
// // // // // //                     <p className="text-base text-[#595959] leading-relaxed">
// // // // // //                       {service.description}
// // // // // //                     </p>
// // // // // //                     {/* Price Table */}
// // // // // //                     <div className="pt-4 space-y-2">
// // // // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // // // //                         <span className="text-sm font-light text-[#595959]">Treatment</span>
// // // // // //                         <span className="text-sm font-light text-[#262626]">{service.name}</span>
// // // // // //                       </div>
// // // // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // // // //                         <span className="text-sm font-light text-[#595959]">Area</span>
// // // // // //                         <span className="text-sm font-light text-[#262626]">
// // // // // //                           {service.location || "Various"}
// // // // // //                         </span>
// // // // // //                       </div>
// // // // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // // // //                         <span className="text-sm font-light text-[#595959]">Price</span>
// // // // // //                         <span className="text-sm font-light text-[#262626]">{service.price}</span>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Process Section */}
// // // // // //       <section className="py-20 px-6 bg-white">
// // // // // //         <div className="container mx-auto max-w-5xl">
// // // // // //           <div className="text-center mb-16">
// // // // // //             <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-4">How It Works</h2>
// // // // // //             <div className="w-24 h-[1px] bg-[#595959] mx-auto"></div>
// // // // // //           </div>
// // // // // //           <div className="grid md:grid-cols-4 gap-12">
// // // // // //             {[
// // // // // //               {
// // // // // //                 step: "01",
// // // // // //                 title: "Consultation",
// // // // // //                 description: "Comprehensive assessment to understand your concerns and goals",
// // // // // //               },
// // // // // //               {
// // // // // //                 step: "02",
// // // // // //                 title: "Custom Plan",
// // // // // //                 description: "Personalized treatment protocol designed for your needs",
// // // // // //               },
// // // // // //               {
// // // // // //                 step: "03",
// // // // // //                 title: "Treatment",
// // // // // //                 description: "Expert application of advanced therapies and technologies",
// // // // // //               },
// // // // // //               {
// // // // // //                 step: "04",
// // // // // //                 title: "Follow-Up",
// // // // // //                 description: "Ongoing support and adjustments for optimal results",
// // // // // //               },
// // // // // //             ].map((item) => (
// // // // // //               <div key={item.step} className="text-center">
// // // // // //                 <div className="text-5xl font-light text-[#C1B5C6] mb-4">{item.step}</div>
// // // // // //                 <h3 className="text-xl font-light text-[#262626] mb-3">{item.title}</h3>
// // // // // //                 <p className="text-sm text-[#595959] leading-relaxed">{item.description}</p>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Footer Note */}
// // // // // //       <section className="py-16 px-6 bg-[#E2DBDF]/30">
// // // // // //         <div className="container mx-auto max-w-4xl text-center">
// // // // // //           <p className="text-sm text-[#595959] leading-relaxed">
// // // // // //             <span className="font-medium">Please Note:</span> All treatments are consultation-based.
// // // // // //             Pricing and treatment plans will be customized during your initial consultation based on
// // // // // //             your specific needs, desired outcomes, and our expert assessment. Contact us to book your
// // // // // //             consultation and begin your transformation journey.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </section>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Trichology;
// // // // // import React from 'react';
// // // // // import { Button } from "@/components/ui/button";
// // // // // import ServiceHero from "@/components/ui/ServiceHero";
// // // // // import trichologyHero from "@/assets/op.png";
// // // // // // Import all service images
// // // // // import mesoTherapyImage from "@/assets/li.png";
// // // // // import prpImage from "@/assets/r.png";
// // // // // import biogenixKitImage from "@/assets/rr.png";
// // // // // import prpMesoDermaPenImage from "@/assets/tk.jpg";
// // // // // import mesoLipoImage from "@/assets/spl.png";
// // // // // import cavitationImage from "@/assets/ig.jpg";
// // // // // import lightPeelingImage from "@/assets/op1.png";
// // // // // import chemicalPeelingImage from "@/assets/op4.png";
// // // // // import alopeciaInjectionImage from "@/assets/op2.png";
// // // // // import keloidsInjectionImage from "@/assets/op3.png";
// // // // // import electricCauteryImage from "@/assets/op5.png";
// // // // // import wartsSkinTagRemovalImage from "@/assets/op.png";
// // // // // import defaultImage from "@/assets/op3.png";

// // // // // const Trichology = () => {
// // // // //   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

// // // // //   const allServices = [
// // // // //     {
// // // // //       name: "Meso Therapy",
// // // // //       location: "Face or Scalp",
// // // // //       price: "TBC",
// // // // //       department: "Cosmetology/Trichology",
// // // // //       description: "",
// // // // //       image: mesoTherapyImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Platelet Rich Plasma (PRP)",
// // // // //       location: "Face or Scalp",
// // // // //       price: "TBC",
// // // // //       department: "Cosmetology/Trichology",
// // // // //       image: prpImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Biogenix Kit",
// // // // //       location: "Face or Scalp",
// // // // //       price: "TBC",
// // // // //       department: "Cosmetology/Trichology",
// // // // //       image: biogenixKitImage,
// // // // //     },
// // // // //     {
// // // // //       name: "PRP + Meso + Derma Pen",
// // // // //       location: "Face or Scalp",
// // // // //       price: "TBC",
// // // // //       department: "Cosmetology/Trichology",
// // // // //       image: prpMesoDermaPenImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Meso Lipo",
// // // // //       location: "1ML – Double Chin",
// // // // //       price: "TBC",
// // // // //       department: "Slimming Treatment",
// // // // //       image: mesoLipoImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Meso Lipo",
// // // // //       location: "3ML – Arm",
// // // // //       price: "TBC",
// // // // //       department: "Slimming Treatment",
// // // // //       image: mesoLipoImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Meso Lipo",
// // // // //       location: "5–10ML – Tummy",
// // // // //       price: "TBC",
// // // // //       department: "Slimming Treatment",
// // // // //       image: mesoLipoImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Cavitation",
// // // // //       location: "Chin Area",
// // // // //       price: "TBC",
// // // // //       department: "Slimming Treatment",
// // // // //       image: cavitationImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Cavitation",
// // // // //       location: "Arms Area",
// // // // //       price: "TBC",
// // // // //       department: "Slimming Treatment",
// // // // //       image: cavitationImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Cavitation",
// // // // //       location: "Tummy Area",
// // // // //       price: "TBC",
// // // // //       department: "Slimming Treatment",
// // // // //       image: cavitationImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Light Peeling",
// // // // //       location: "Face",
// // // // //       price: "TBC",
// // // // //       department: "Peeling",
// // // // //       image: lightPeelingImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Chemical Peeling",
// // // // //       location: "Face",
// // // // //       price: "TBC",
// // // // //       department: "Peeling",
// // // // //       image: chemicalPeelingImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Alopecia Injection",
// // // // //       location: "Scalp, Beard, Mustache",
// // // // //       price: "TBC",
// // // // //       department: "Injection into Skin Lesion",
// // // // //       image: alopeciaInjectionImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Keloids Injection",
// // // // //       location: "",
// // // // //       price: "TBC",
// // // // //       department: "Injection into Skin Lesion",
// // // // //       image: keloidsInjectionImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Electric Cautery",
// // // // //       location: "",
// // // // //       price: "TBC",
// // // // //       department: "Warts & Skin Tag Removal",
// // // // //       image: electricCauteryImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Warts & Skin Tag Removal",
// // // // //       location: "Per Piece",
// // // // //       price: "TBC",
// // // // //       department: "Warts & Skin Tag Removal",
// // // // //       image: wartsSkinTagRemovalImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Warts & Skin Tag Removal",
// // // // //       location: "Full Face",
// // // // //       price: "TBC",
// // // // //       department: "Warts & Skin Tag Removal",
// // // // //       image: wartsSkinTagRemovalImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Warts & Skin Tag Removal",
// // // // //       location: "Full Neck",
// // // // //       price: "TBC",
// // // // //       department: "Warts & Skin Tag Removal",
// // // // //       image: wartsSkinTagRemovalImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Warts & Skin Tag Removal",
// // // // //       location: "Full Face & Neck",
// // // // //       price: "TBC",
// // // // //       department: "Warts & Skin Tag Removal",
// // // // //       image: wartsSkinTagRemovalImage,
// // // // //     },
// // // // //     {
// // // // //       name: "Warts & Skin Tag Removal",
// // // // //       location: "Chest & Back",
// // // // //       price: "TBC",
// // // // //       department: "Warts & Skin Tag Removal",
// // // // //       image: wartsSkinTagRemovalImage,
// // // // //     },
// // // // //   ];

// // // // //   const departments = [
// // // // //     { id: "All", label: "All Treatments" },
// // // // //     { id: "Cosmetology/Trichology", label: "Cosmetology" },
// // // // //     { id: "Slimming Treatment", label: "Slimming" },
// // // // //     { id: "Peeling", label: "Peeling" },
// // // // //     { id: "Injection into Skin Lesion", label: "Injections" },
// // // // //     { id: "Warts & Skin Tag Removal", label: "Removal" },
// // // // //   ];

// // // // //   const filteredServices =
// // // // //     selectedDepartment === "All"
// // // // //       ? allServices
// // // // //       : allServices.filter((service) => service.department === selectedDepartment);

// // // // //   return (
// // // // //     <div className="min-h-screen">
// // // // //       <ServiceHero
// // // // //         title="Advanced Trichology"
// // // // //         titleGradient="& Scalp Health"
// // // // //         description="Experience expert diagnosis and personalized treatments for optimal scalp and hair health. Our advanced trichology services combine science and luxury for transformative results."
// // // // //         image={trichologyHero}
// // // // //         imageAlt="Trichology and scalp health treatment"
// // // // //       />

// // // // //       {/* Introduction */}
// // // // //       <section className="py-16 px-6 bg-white">
// // // // //         <div className="container mx-auto max-w-4xl text-center">
// // // // //           <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
// // // // //             At Avya, we bring comprehensive aesthetic and trichology services to Nairobi.
// // // // //             Whether you're addressing hair loss, skin concerns, or body contouring, our expert team
// // // // //             uses advanced technologies and proven techniques to deliver exceptional results tailored to your unique needs.
// // // // //           </p>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Department Filter */}
// // // // //       <section className="py-8 px-6 bg-[#595959]">
// // // // //         <div className="container mx-auto max-w-6xl">
// // // // //           <div className="flex flex-wrap justify-center gap-4">
// // // // //             {departments.map((dept) => (
// // // // //               <button
// // // // //                 key={dept.id}
// // // // //                 onClick={() => setSelectedDepartment(dept.id)}
// // // // //                 className={`px-6 py-3 text-base font-medium tracking-wide transition-all ${
// // // // //                   selectedDepartment === dept.id
// // // // //                     ? "bg-white text-[#262626] border border-[#262626]"
// // // // //                     : "bg-transparent text-white border border-white hover:bg-white hover:text-[#262626]"
// // // // //                 }`}
// // // // //               >
// // // // //                 {dept.label}
// // // // //               </button>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Services Grid */}
// // // // //       <section className="py-20 px-6 bg-[#E2DBDF]/20">
// // // // //         <div className="container mx-auto max-w-6xl">
// // // // //           <div className="space-y-24">
// // // // //             {filteredServices.map((service, index) => (
// // // // //               <div
// // // // //                 key={`${service.name}-${service.location}-${index}`}
// // // // //                 className={`grid md:grid-cols-2 gap-12 items-center ${
// // // // //                   index % 2 === 0 ? "" : "md:flex-row-reverse"
// // // // //                 }`}
// // // // //               >
// // // // //                 {/* Image Side */}
// // // // //                 <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
// // // // //                   <div className="aspect-[4/3] bg-[#595959]/20 rounded-sm overflow-hidden">
// // // // //                     <img
// // // // //                       src={service.image || defaultImage}
// // // // //                       alt={service.name}
// // // // //                       className="w-full h-full object-cover"
// // // // //                     />
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Content Side */}
// // // // //                 <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
// // // // //                   <div className="space-y-4">
// // // // //                     <div>
// // // // //                       <p className="text-sm text-[#595959] uppercase tracking-widest mb-3">
// // // // //                         {service.department}
// // // // //                       </p>
// // // // //                       <h3 className="text-3xl md:text-4xl font-medium text-[#262626] mb-2">
// // // // //                         {service.name}
// // // // //                       </h3>
// // // // //                       {service.location && (
// // // // //                         <p className="text-base text-[#262626] font-medium">{service.location}</p>
// // // // //                       )}
// // // // //                     </div>
// // // // //                     <p className="text-lg text-[#262626] leading-relaxed">
// // // // //                       {service.description}
// // // // //                     </p>

// // // // //                     {/* Price Table */}
// // // // //                     <div className="pt-4 space-y-2">
// // // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // // //                         <span className="text-base font-medium text-[#262626]">Treatment</span>
// // // // //                         <span className="text-base font-medium text-[#262626]">{service.name}</span>
// // // // //                       </div>
// // // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // // //                         <span className="text-base font-medium text-[#262626]">Area</span>
// // // // //                         <span className="text-base font-medium text-[#262626]">
// // // // //                           {service.location || "Various"}
// // // // //                         </span>
// // // // //                       </div>
// // // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // // //                         <span className="text-base font-medium text-[#262626]">Price</span>
// // // // //                         <span className="text-base font-medium text-[#262626]">{service.price}</span>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Process Section */}
// // // // //       <section className="py-20 px-6 bg-white">
// // // // //         <div className="container mx-auto max-w-5xl">
// // // // //           <div className="text-center mb-16">
// // // // //             <h2 className="text-4xl md:text-5xl font-medium text-[#262626] mb-4">How It Works</h2>
// // // // //             <div className="w-24 h-[1px] bg-[#595959] mx-auto"></div>
// // // // //           </div>
// // // // //           <div className="grid md:grid-cols-4 gap-12">
// // // // //             {[
// // // // //               {
// // // // //                 step: "01",
// // // // //                 title: "Consultation",
// // // // //                 description: "Comprehensive assessment to understand your concerns and goals",
// // // // //               },
// // // // //               {
// // // // //                 step: "02",
// // // // //                 title: "Custom Plan",
// // // // //                 description: "Personalized treatment protocol designed for your needs",
// // // // //               },
// // // // //               {
// // // // //                 step: "03",
// // // // //                 title: "Treatment",
// // // // //                 description: "Expert application of advanced therapies and technologies",
// // // // //               },
// // // // //               {
// // // // //                 step: "04",
// // // // //                 title: "Follow-Up",
// // // // //                 description: "Ongoing support and adjustments for optimal results",
// // // // //               },
// // // // //             ].map((item) => (
// // // // //               <div key={item.step} className="text-center">
// // // // //                 <div className="text-5xl font-medium text-[#C1B5C6] mb-4">{item.step}</div>
// // // // //                 <h3 className="text-2xl font-medium text-[#262626] mb-3">{item.title}</h3>
// // // // //                 <p className="text-base text-[#262626] leading-relaxed">{item.description}</p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Footer Note */}
// // // // //       <section className="py-16 px-6 bg-[#E2DBDF]/30">
// // // // //         <div className="container mx-auto max-w-4xl text-center">
// // // // //           <p className="text-base text-[#262626] leading-relaxed">
// // // // //             <span className="font-medium">Please Note:</span> All treatments are consultation-based.
// // // // //             Pricing and treatment plans will be customized during your initial consultation based on
// // // // //             your specific needs, desired outcomes, and our expert assessment. Contact us to book your
// // // // //             consultation and begin your transformation journey.
// // // // //           </p>
// // // // //         </div>
// // // // //       </section>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Trichology;
// // // // import React from 'react';
// // // // import { Button } from "@/components/ui/button";
// // // // import ServiceHero from "@/components/ui/ServiceHero";
// // // // import trichologyHero from "@/assets/op.png";
// // // // import mesoTherapyImage from "@/assets/li.png";
// // // // import prpImage from "@/assets/r.png";
// // // // import biogenixKitImage from "@/assets/rr.png";
// // // // import prpMesoDermaPenImage from "@/assets/tk.jpg";
// // // // import mesoLipoImage from "@/assets/spl.png";
// // // // import cavitationImage from "@/assets/ig.jpg";
// // // // import lightPeelingImage from "@/assets/op1.png";
// // // // import chemicalPeelingImage from "@/assets/op4.png";
// // // // import alopeciaInjectionImage from "@/assets/op2.png";
// // // // import keloidsInjectionImage from "@/assets/op3.png";
// // // // import electricCauteryImage from "@/assets/op5.png";
// // // // import wartsSkinTagRemovalImage from "@/assets/op.png";
// // // // import defaultImage from "@/assets/op3.png";

// // // // const Trichology = () => {
// // // //   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

// // // //   const allServices = [
// // // //     {
// // // //       name: "Meso Therapy",
// // // //       location: "Face or Scalp",
// // // //       price: "TBC",
// // // //       department: "Cosmetology/Trichology",
// // // //       description: "Targeted injections of vitamins and nutrients to rejuvenate skin and promote hair growth.",
// // // //       image: mesoTherapyImage,
// // // //     },
// // // //     {
// // // //       name: "Platelet Rich Plasma (PRP)",
// // // //       location: "Face or Scalp",
// // // //       price: "TBC",
// // // //       department: "Cosmetology/Trichology",
// // // //       description: "Uses your own blood plasma to stimulate collagen production and hair follicle regeneration.",
// // // //       image: prpImage,
// // // //     },
// // // //     {
// // // //       name: "Biogenix Kit",
// // // //       location: "Face or Scalp",
// // // //       price: "TBC",
// // // //       department: "Cosmetology/Trichology",
// // // //       description: "Advanced biotech kit delivering bio-active compounds for skin repair and scalp revitalization.",
// // // //       image: biogenixKitImage,
// // // //     },
// // // //     {
// // // //       name: "PRP + Meso + Derma Pen",
// // // //       location: "Face or Scalp",
// // // //       price: "TBC",
// // // //       department: "Cosmetology/Trichology",
// // // //       description: "Combined therapy using PRP, mesotherapy, and microneedling for enhanced skin and hair restoration.",
// // // //       image: prpMesoDermaPenImage,
// // // //     },
// // // //     {
// // // //       name: "Meso Lipo",
// // // //       location: "1ML – Double Chin",
// // // //       price: "TBC",
// // // //       department: "Slimming Treatment",
// // // //       description: "Fat-dissolving injections to contour and reduce stubborn fat in targeted areas.",
// // // //       image: mesoLipoImage,
// // // //     },
// // // //     {
// // // //       name: "Meso Lipo",
// // // //       location: "3ML – Arm",
// // // //       price: "TBC",
// // // //       department: "Slimming Treatment",
// // // //       description: "Fat-dissolving injections to contour and reduce stubborn fat in targeted areas.",
// // // //       image: mesoLipoImage,
// // // //     },
// // // //     {
// // // //       name: "Meso Lipo",
// // // //       location: "5–10ML – Tummy",
// // // //       price: "TBC",
// // // //       department: "Slimming Treatment",
// // // //       description: "Fat-dissolving injections to contour and reduce stubborn fat in targeted areas.",
// // // //       image: mesoLipoImage,
// // // //     },
// // // //     {
// // // //       name: "Cavitation",
// // // //       location: "Chin Area",
// // // //       price: "TBC",
// // // //       department: "Slimming Treatment",
// // // //       description: "Non-invasive ultrasound waves to break down fat cells for natural elimination.",
// // // //       image: cavitationImage,
// // // //     },
// // // //     {
// // // //       name: "Cavitation",
// // // //       location: "Arms Area",
// // // //       price: "TBC",
// // // //       department: "Slimming Treatment",
// // // //       description: "Non-invasive ultrasound waves to break down fat cells for natural elimination.",
// // // //       image: cavitationImage,
// // // //     },
// // // //     {
// // // //       name: "Cavitation",
// // // //       location: "Tummy Area",
// // // //       price: "TBC",
// // // //       department: "Slimming Treatment",
// // // //       description: "Non-invasive ultrasound waves to break down fat cells for natural elimination.",
// // // //       image: cavitationImage,
// // // //     },
// // // //     {
// // // //       name: "Light Peeling",
// // // //       location: "Face",
// // // //       price: "TBC",
// // // //       department: "Peeling",
// // // //       description: "Gentle exfoliation to remove dead skin cells and reveal a brighter complexion.",
// // // //       image: lightPeelingImage,
// // // //     },
// // // //     {
// // // //       name: "Chemical Peeling",
// // // //       location: "Face",
// // // //       price: "TBC",
// // // //       department: "Peeling",
// // // //       description: "Deeper chemical exfoliation to treat acne, pigmentation, and fine lines.",
// // // //       image: chemicalPeelingImage,
// // // //     },
// // // //     {
// // // //       name: "Alopecia Injection",
// // // //       location: "Scalp, Beard, Mustache",
// // // //       price: "TBC",
// // // //       department: "Injection into Skin Lesion",
// // // //       description: "Steroid injections to reduce inflammation and promote hair regrowth in affected areas.",
// // // //       image: alopeciaInjectionImage,
// // // //     },
// // // //     {
// // // //       name: "Keloids Injection",
// // // //       location: "",
// // // //       price: "TBC",
// // // //       department: "Injection into Skin Lesion",
// // // //       description: "Corticosteroid injections to flatten and soften raised keloid scars.",
// // // //       image: keloidsInjectionImage,
// // // //     },
// // // //     {
// // // //       name: "Electric Cautery",
// // // //       location: "",
// // // //       price: "TBC",
// // // //       department: "Warts & Skin Tag Removal",
// // // //       description: "Precise heat-based removal of warts and skin tags with minimal scarring.",
// // // //       image: electricCauteryImage,
// // // //     },
// // // //     {
// // // //       name: "Warts & Skin Tag Removal",
// // // //       location: "Per Piece",
// // // //       price: "TBC",
// // // //       department: "Warts & Skin Tag Removal",
// // // //       description: "Safe and effective removal of warts and skin tags for smoother skin.",
// // // //       image: wartsSkinTagRemovalImage,
// // // //     },
// // // //     {
// // // //       name: "Warts & Skin Tag Removal",
// // // //       location: "Full Face",
// // // //       price: "TBC",
// // // //       department: "Warts & Skin Tag Removal",
// // // //       description: "Safe and effective removal of warts and skin tags for smoother skin.",
// // // //       image: wartsSkinTagRemovalImage,
// // // //     },
// // // //     {
// // // //       name: "Warts & Skin Tag Removal",
// // // //       location: "Full Neck",
// // // //       price: "TBC",
// // // //       department: "Warts & Skin Tag Removal",
// // // //       description: "Safe and effective removal of warts and skin tags for smoother skin.",
// // // //       image: wartsSkinTagRemovalImage,
// // // //     },
// // // //     {
// // // //       name: "Warts & Skin Tag Removal",
// // // //       location: "Full Face & Neck",
// // // //       price: "TBC",
// // // //       department: "Warts & Skin Tag Removal",
// // // //       description: "Safe and effective removal of warts and skin tags for smoother skin.",
// // // //       image: wartsSkinTagRemovalImage,
// // // //     },
// // // //     {
// // // //       name: "Warts & Skin Tag Removal",
// // // //       location: "Chest & Back",
// // // //       price: "TBC",
// // // //       department: "Warts & Skin Tag Removal",
// // // //       description: "Safe and effective removal of warts and skin tags for smoother skin.",
// // // //       image: wartsSkinTagRemovalImage,
// // // //     },
// // // //   ];

// // // //   const departments = [
// // // //     { id: "All", label: "All Treatments" },
// // // //     { id: "Cosmetology/Trichology", label: "Cosmetology" },
// // // //     { id: "Slimming Treatment", label: "Slimming" },
// // // //     { id: "Peeling", label: "Peeling" },
// // // //     { id: "Injection into Skin Lesion", label: "Injections" },
// // // //     { id: "Warts & Skin Tag Removal", label: "Removal" },
// // // //   ];

// // // //   const filteredServices =
// // // //     selectedDepartment === "All"
// // // //       ? allServices
// // // //       : allServices.filter((service) => service.department === selectedDepartment);

// // // //   return (
// // // //     <div className="min-h-screen">
// // // //       <ServiceHero
// // // //         title="Advanced Trichology"
// // // //         titleGradient="& Scalp Health"
// // // //         description="Experience expert diagnosis and personalized treatments for optimal scalp and hair health. Our advanced trichology services combine science and luxury for transformative results."
// // // //         image={trichologyHero}
// // // //         imageAlt="Trichology and scalp health treatment"
// // // //       />

// // // //       {/* Introduction */}
// // // //       <section className="py-16 px-6 bg-white">
// // // //         <div className="container mx-auto max-w-4xl text-center">
// // // //           <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
// // // //             At Avya, we bring comprehensive aesthetic and trichology services to Nairobi.
// // // //             Whether you're addressing hair loss, skin concerns, or body contouring, our expert team
// // // //             uses advanced technologies and proven techniques to deliver exceptional results tailored to your unique needs.
// // // //           </p>
// // // //         </div>
// // // //       </section>

// // // //       {/* Department Filter */}
// // // //       <section className="py-8 px-6 bg-[#595959]">
// // // //         <div className="container mx-auto max-w-6xl">
// // // //           <div className="flex flex-wrap justify-center gap-4">
// // // //             {departments.map((dept) => (
// // // //               <button
// // // //                 key={dept.id}
// // // //                 onClick={() => setSelectedDepartment(dept.id)}
// // // //                 className={`px-6 py-3 text-base font-medium tracking-wide transition-all ${
// // // //                   selectedDepartment === dept.id
// // // //                     ? "bg-white text-[#262626] border border-[#262626]"
// // // //                     : "bg-transparent text-white border border-white hover:bg-white hover:text-[#262626]"
// // // //                 }`}
// // // //               >
// // // //                 {dept.label}
// // // //               </button>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Services Grid */}
// // // //       <section className="py-20 px-6 bg-[#E2DBDF]/20">
// // // //         <div className="container mx-auto max-w-6xl">
// // // //           <div className="space-y-24">
// // // //             {filteredServices.map((service, index) => (
// // // //               <div
// // // //                 key={`${service.name}-${service.location}-${index}`}
// // // //                 className={`grid md:grid-cols-2 gap-12 items-center ${
// // // //                   index % 2 === 0 ? "" : "md:flex-row-reverse"
// // // //                 }`}
// // // //               >
// // // //                 {/* Image Side */}
// // // //                 <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
// // // //                   <div className="aspect-[4/3] bg-[#595959]/20 rounded-sm overflow-hidden">
// // // //                     <img
// // // //                       src={service.image || defaultImage}
// // // //                       alt={service.name}
// // // //                       className="w-full h-full object-cover"
// // // //                     />
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Content Side */}
// // // //                 <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
// // // //                   <div className="space-y-4">
// // // //                     <div>
// // // //                       <p className="text-sm text-[#595959] uppercase tracking-widest mb-3">
// // // //                         {service.department}
// // // //                       </p>
// // // //                       <h3 className="text-3xl md:text-4xl font-medium text-[#262626] mb-2">
// // // //                         {service.name}
// // // //                       </h3>
// // // //                       {service.location && (
// // // //                         <p className="text-base text-[#262626] font-medium">{service.location}</p>
// // // //                       )}
// // // //                     </div>
// // // //                     <p className="text-lg text-[#262626] leading-relaxed">
// // // //                       {service.description}
// // // //                     </p>

// // // //                     {/* Price Table */}
// // // //                     <div className="pt-4 space-y-2">
// // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // //                         <span className="text-base font-medium text-[#262626]">Treatment</span>
// // // //                         <span className="text-base font-medium text-[#262626]">{service.name}</span>
// // // //                       </div>
// // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // //                         <span className="text-base font-medium text-[#262626]">Area</span>
// // // //                         <span className="text-base font-medium text-[#262626]">
// // // //                           {service.location || "Various"}
// // // //                         </span>
// // // //                       </div>
// // // //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// // // //                         <span className="text-base font-medium text-[#262626]">Price</span>
// // // //                         <span className="text-base font-medium text-[#262626]">{service.price}</span>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Trichology;
// // // import React from "react";
// // // import { Button } from "@/components/ui/button";
// // // import ServiceHero from "@/components/ui/ServiceHero";
// // // import trichologyHero from "@/assets/op.png";
// // // import mesoTherapyImage from "@/assets/li.png";
// // // import prpImage from "@/assets/r.png";
// // // import biogenixKitImage from "@/assets/rr.png";
// // // import prpMesoDermaPenImage from "@/assets/tk.jpg";
// // // import mesoLipoImage from "@/assets/spl.png";
// // // import cavitationImage from "@/assets/ig.jpg";
// // // import lightPeelingImage from "@/assets/op1.png";
// // // import chemicalPeelingImage from "@/assets/op4.png";
// // // import alopeciaInjectionImage from "@/assets/op2.png";
// // // import keloidsInjectionImage from "@/assets/op3.png";
// // // import electricCauteryImage from "@/assets/op5.png";
// // // import wartsSkinTagRemovalImage from "@/assets/op.png";
// // // import defaultImage from "@/assets/op3.png";

// // // const Trichology = () => {
// // //   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

// // //   const allServices = [
// // //     {
// // //       name: "Meso Therapy",
// // //       location: "Face or Scalp",
// // //       price: "TBC",
// // //       department: "Cosmetology/Trichology",
// // //       description: "Targeted injections of vitamins and nutrients to rejuvenate skin and promote hair growth.",
// // //       image: mesoTherapyImage,
// // //     },
// // //     {
// // //       name: "Platelet Rich Plasma (PRP)",
// // //       location: "Face or Scalp",
// // //       price: "TBC",
// // //       department: "Cosmetology/Trichology",
// // //       description: "Uses your own blood plasma to stimulate collagen production and hair follicle regeneration.",
// // //       image: prpImage,
// // //     },
// // //     {
// // //       name: "Biogenix Kit",
// // //       location: "Face or Scalp",
// // //       price: "TBC",
// // //       department: "Cosmetology/Trichology",
// // //       description: "Advanced biotech kit delivering bio-active compounds for skin repair and scalp revitalization.",
// // //       image: biogenixKitImage,
// // //     },
// // //     {
// // //       name: "PRP + Meso + Derma Pen",
// // //       location: "Face or Scalp",
// // //       price: "TBC",
// // //       department: "Cosmetology/Trichology",
// // //       description: "Combined therapy using PRP, mesotherapy, and microneedling for enhanced skin and hair restoration.",
// // //       image: prpMesoDermaPenImage,
// // //     },
// // //     {
// // //       name: "Meso Lipo",
// // //       location: "1ML – Double Chin",
// // //       price: "TBC",
// // //       department: "Slimming Treatment",
// // //       description: "Fat-dissolving injections to contour and reduce stubborn fat in targeted areas.",
// // //       image: mesoLipoImage,
// // //     },
// // //     {
// // //       name: "Meso Lipo",
// // //       location: "3ML – Arm",
// // //       price: "TBC",
// // //       department: "Slimming Treatment",
// // //       description: "Fat-dissolving injections to contour and reduce stubborn fat in targeted areas.",
// // //       image: mesoLipoImage,
// // //     },
// // //     {
// // //       name: "Meso Lipo",
// // //       location: "5–10ML – Tummy",
// // //       price: "TBC",
// // //       department: "Slimming Treatment",
// // //       description: "Fat-dissolving injections to contour and reduce stubborn fat in targeted areas.",
// // //       image: mesoLipoImage,
// // //     },
// // //     {
// // //       name: "Cavitation",
// // //       location: "Chin Area",
// // //       price: "TBC",
// // //       department: "Slimming Treatment",
// // //       description: "Non-invasive ultrasound waves to break down fat cells for natural elimination.",
// // //       image: cavitationImage,
// // //     },
// // //     {
// // //       name: "Cavitation",
// // //       location: "Arms Area",
// // //       price: "TBC",
// // //       department: "Slimming Treatment",
// // //       description: "Non-invasive ultrasound waves to break down fat cells for natural elimination.",
// // //       image: cavitationImage,
// // //     },
// // //     {
// // //       name: "Cavitation",
// // //       location: "Tummy Area",
// // //       price: "TBC",
// // //       department: "Slimming Treatment",
// // //       description: "Non-invasive ultrasound waves to break down fat cells for natural elimination.",
// // //       image: cavitationImage,
// // //     },
// // //     {
// // //       name: "Light Peeling",
// // //       location: "Face",
// // //       price: "TBC",
// // //       department: "Peeling",
// // //       description: "Gentle exfoliation to remove dead skin cells and reveal a brighter complexion.",
// // //       image: lightPeelingImage,
// // //     },
// // //     {
// // //       name: "Chemical Peeling",
// // //       location: "Face",
// // //       price: "TBC",
// // //       department: "Peeling",
// // //       description: "Deeper chemical exfoliation to treat acne, pigmentation, and fine lines.",
// // //       image: chemicalPeelingImage,
// // //     },
// // //     {
// // //       name: "Alopecia Injection",
// // //       location: "Scalp, Beard, Mustache",
// // //       price: "TBC",
// // //       department: "Injection into Skin Lesion",
// // //       description: "Steroid injections to reduce inflammation and promote hair regrowth in affected areas.",
// // //       image: alopeciaInjectionImage,
// // //     },
// // //     {
// // //       name: "Keloids Injection",
// // //       location: "",
// // //       price: "TBC",
// // //       department: "Injection into Skin Lesion",
// // //       description: "Corticosteroid injections to flatten and soften raised keloid scars.",
// // //       image: keloidsInjectionImage,
// // //     },
// // //     {
// // //       name: "Electric Cautery",
// // //       location: "",
// // //       price: "TBC",
// // //       department: "Warts & Skin Tag Removal",
// // //       description: "Precise heat-based removal of warts and skin tags with minimal scarring.",
// // //       image: electricCauteryImage,
// // //     },
// // //     {
// // //       name: "Warts & Skin Tag Removal",
// // //       location: "Per Piece",
// // //       price: "TBC",
// // //       department: "Warts & Skin Tag Removal",
// // //       description: "Safe and effective removal of warts and skin tags for smoother skin.",
// // //       image: wartsSkinTagRemovalImage,
// // //     },
// // //     {
// // //       name: "Warts & Skin Tag Removal",
// // //       location: "Full Face",
// // //       price: "TBC",
// // //       department: "Warts & Skin Tag Removal",
// // //       description: "Safe and effective removal of warts and skin tags for smoother skin.",
// // //       image: wartsSkinTagRemovalImage,
// // //     },
// // //     {
// // //       name: "Warts & Skin Tag Removal",
// // //       location: "Full Neck",
// // //       price: "TBC",
// // //       department: "Warts & Skin Tag Removal",
// // //       description: "Safe and effective removal of warts and skin tags for smoother skin.",
// // //       image: wartsSkinTagRemovalImage,
// // //     },
// // //     {
// // //       name: "Warts & Skin Tag Removal",
// // //       location: "Full Face & Neck",
// // //       price: "TBC",
// // //       department: "Warts & Skin Tag Removal",
// // //       description: "Safe and effective removal of warts and skin tags for smoother skin.",
// // //       image: wartsSkinTagRemovalImage,
// // //     },
// // //     {
// // //       name: "Warts & Skin Tag Removal",
// // //       location: "Chest & Back",
// // //       price: "TBC",
// // //       department: "Warts & Skin Tag Removal",
// // //       description: "Safe and effective removal of warts and skin tags for smoother skin.",
// // //       image: wartsSkinTagRemovalImage,
// // //     },
// // //   ];

// // //   const departments = [
// // //     { id: "All", label: "All Treatments" },
// // //     { id: "Cosmetology/Trichology", label: "Cosmetology" },
// // //     { id: "Slimming Treatment", label: "Slimming" },
// // //     { id: "Peeling", label: "Peeling" },
// // //     { id: "Injection into Skin Lesion", label: "Injections" },
// // //     { id: "Warts & Skin Tag Removal", label: "Removal" },
// // //   ];

// // //   const filteredServices =
// // //     selectedDepartment === "All"
// // //       ? allServices
// // //       : allServices.filter((service) => service.department === selectedDepartment);

// // //   return (
// // //     <div className="min-h-screen bg-white">
// // //       {/* Hero Section */}
// // //       <ServiceHero
// // //         title="Advanced Trichology"
// // //         titleGradient="& Scalp Health"
// // //         description="Experience expert diagnosis and personalized treatments for optimal scalp and hair health. Our advanced trichology services combine science and luxury for transformative results."
// // //         image={trichologyHero}
// // //         imageAlt="Trichology and scalp health treatment"
// // //       />

// // //       {/* Introduction */}
// // //       <section className="py-12 px-6 max-w-4xl mx-auto text-center">
// // //         <p className="text-lg text-gray-600 leading-relaxed">
// // //           At Avya, we bring comprehensive aesthetic and trichology services to Nairobi.
// // //           Whether you're addressing hair loss, skin concerns, or body contouring, our expert team
// // //           uses advanced technologies and proven techniques to deliver exceptional results tailored to your unique needs.
// // //         </p>
// // //       </section>

// // //       {/* Department Filter */}
// // //       <section className="py-8 px-6 bg-gray-100">
// // //         <div className="container mx-auto max-w-6xl">
// // //           <div className="flex flex-wrap justify-center gap-4">
// // //             {departments.map((dept) => (
// // //               <button
// // //                 key={dept.id}
// // //                 onClick={() => setSelectedDepartment(dept.id)}
// // //                 className={`px-6 py-3 text-base font-medium rounded-lg transition-all ${
// // //                   selectedDepartment === dept.id
// // //                     ? "bg-white text-gray-800 shadow-md"
// // //                     : "bg-transparent text-gray-600 border border-gray-300 hover:bg-white hover:text-gray-800"
// // //                 }`}
// // //               >
// // //                 {dept.label}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Services Grid */}
// // //       <section className="py-16 px-6">
// // //         <div className="container mx-auto max-w-6xl space-y-16">
// // //           {filteredServices.map((service, index) => (
// // //             <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
// // //               {/* Image */}
// // //               <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
// // //                 <img
// // //                   src={service.image || defaultImage}
// // //                   alt={service.name}
// // //                   className="w-full h-full object-cover"
// // //                 />
// // //               </div>
// // //               {/* Content */}
// // //               <div className="space-y-4">
// // //                 <div>
// // //                   <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
// // //                     {service.department}
// // //                   </p>
// // //                   <h3 className="text-3xl font-bold text-gray-800 mb-2">
// // //                     {service.name}
// // //                   </h3>
// // //                   {service.location && (
// // //                     <p className="text-base text-gray-600 font-medium">{service.location}</p>
// // //                   )}
// // //                 </div>
// // //                 <p className="text-lg text-gray-600 leading-relaxed">
// // //                   {service.description}
// // //                 </p>
// // //                 {/* Price Table */}
// // //                 <div className="pt-4 space-y-2">
// // //                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
// // //                     <span className="text-base font-medium text-gray-600">Treatment</span>
// // //                     <span className="text-base font-medium text-gray-800">{service.name}</span>
// // //                   </div>
// // //                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
// // //                     <span className="text-base font-medium text-gray-600">Area</span>
// // //                     <span className="text-base font-medium text-gray-800">
// // //                       {service.location || "Various"}
// // //                     </span>
// // //                   </div>
// // //                   <div className="flex justify-between items-center py-2">
// // //                     <span className="text-base font-medium text-gray-600">Price</span>
// // //                     <span className="text-base font-medium text-gray-800">{service.price}</span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Trichology;
// import React from "react";
// import ServiceHero from "@/components/ui/ServiceHero";
// import trichologyHero from "@/assets/op.png";

// const Trichology = () => {
//   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

//   const allServices = [
//     {
//       name: "Meso Therapy",
//       location: "Face or Scalp",
//       price: "TBC",
//       department: "Cosmetology/Trichology",
//       description: "Targeted injections of vitamins and nutrients to rejuvenate skin and promote hair growth.",
//     },
//     {
//       name: "Platelet Rich Plasma (PRP)",
//       location: "Face or Scalp",
//       price: "TBC",
//       department: "Cosmetology/Trichology",
//       description: "Uses your own blood plasma to stimulate collagen production and hair follicle regeneration.",
//     },
//     {
//       name: "Biogenix Kit",
//       location: "Face or Scalp",
//       price: "TBC",
//       department: "Cosmetology/Trichology",
//       description: "Advanced biotech kit delivering bio-active compounds for skin repair and scalp revitalization.",
//     },
//     {
//       name: "PRP + Meso + Derma Pen",
//       location: "Face or Scalp",
//       price: "TBC",
//       department: "Cosmetology/Trichology",
//       description: "Combined therapy using PRP, mesotherapy, and microneedling for enhanced skin and hair restoration.",
//     },
//     {
//       name: "Meso Lipo",
//       location: "1ML – Double Chin",
//       price: "TBC",
//       department: "Slimming Treatment",
//       description: "Fat-dissolving injections to contour and reduce stubborn fat in targeted areas.",
//     },
//     {
//       name: "Meso Lipo",
//       location: "3ML – Arm",
//       price: "TBC",
//       department: "Slimming Treatment",
//       description: "Fat-dissolving injections to contour and reduce stubborn fat in targeted areas.",
//     },
//     {
//       name: "Meso Lipo",
//       location: "5–10ML – Tummy",
//       price: "TBC",
//       department: "Slimming Treatment",
//       description: "Fat-dissolving injections to contour and reduce stubborn fat in targeted areas.",
//     },
//     {
//       name: "Cavitation",
//       location: "Chin Area",
//       price: "TBC",
//       department: "Slimming Treatment",
//       description: "Non-invasive ultrasound waves to break down fat cells for natural elimination.",
//     },
//     {
//       name: "Cavitation",
//       location: "Arms Area",
//       price: "TBC",
//       department: "Slimming Treatment",
//       description: "Non-invasive ultrasound waves to break down fat cells for natural elimination.",
//     },
//     {
//       name: "Cavitation",
//       location: "Tummy Area",
//       price: "TBC",
//       department: "Slimming Treatment",
//       description: "Non-invasive ultrasound waves to break down fat cells for natural elimination.",
//     },
//     // {
//     //   name: "Light Peeling",
//     //   location: "Face",
//     //   price: "TBC",
//     //   department: "Peeling",
//     //   description: "Gentle exfoliation to remove dead skin cells and reveal a brighter complexion.",
//     // },
//     // {
//     //   name: "Chemical Peeling",
//     //   location: "Face",
//     //   price: "TBC",
//     //   department: "Peeling",
//     //   description: "Deeper chemical exfoliation to treat acne, pigmentation, and fine lines.",
//     // },
//     {
//       name: "Alopecia Injection",
//       location: "Scalp, Beard, Mustache",
//       price: "KES 15,000 Every 4 Weeks Interval",
//       department: "Injection into Skin Lesion",
//       description: "Steroid injections to reduce inflammation and promote hair regrowth in affected areas.",
//     },
//     // {
//     //   name: "Keloids Injection",
//     //   location: "",
//     //   price: "TBC",
//     //   department: "Injection into Skin Lesion",
//     //   description: "Corticosteroid injections to flatten and soften raised keloid scars.",
//     // },
//     // {
//     //   name: "Electric Cautery",
//     //   location: "",
//     //   price: "TBC",
//     //   department: "Warts & Skin Tag Removal",
//     //   description: "Precise heat-based removal of warts and skin tags with minimal scarring.",
//     // },
//     {
//       name: "Warts & Skin Tag Removal",
//       location: "Face, Neck, Under Arm ",
//       price: "KES 3,000 Per Piece",
//       department: "Warts & Skin Tag Removal",
//       description: "Safe and effective removal of warts and skin tags for smoother skin.",
//     },
//     {
//       name: "Warts & Skin Tag Removal",
//       location: "Full Face",
//       price: "KES 12,000",
//       department: "Warts & Skin Tag Removal",
//       description: "Safe and effective removal of warts and skin tags for smoother skin.",
//     },
//     {
//       name: "Warts & Skin Tag Removal",
//       location: "Full Neck",
//       price: "KES 12,000",
//       department: "Warts & Skin Tag Removal",
//       description: "Safe and effective removal of warts and skin tags for smoother skin.",
//     },
//     {
//       name: "Warts & Skin Tag Removal",
//       location: "Full Face & Neck",
//       price: "KES 22,000",
//       department: "Warts & Skin Tag Removal",
//       description: "Safe and effective removal of warts and skin tags for smoother skin.",
//     },
//     {
//       name: "Warts & Skin Tag Removal",
//       location: "Chest & Back",
//       price: "KES 22,000",
//       department: "Warts & Skin Tag Removal",
//       description: "Safe and effective removal of warts and skin tags for smoother skin.",
//     },
//   ];

//   const departments = [
//     { id: "All", label: "All Treatments" },
//     { id: "Cosmetology/Trichology", label: "Cosmetology" },
//     { id: "Slimming Treatment", label: "Slimming" },
//     { id: "Peeling", label: "Peeling" },
//     { id: "Injection into Skin Lesion", label: "Injections" },
//     { id: "Warts & Skin Tag Removal", label: "Removal" },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <ServiceHero
//         title="Cosmetology & "
//         titleGradient="& Trichology"
//         description="Experience expert diagnosis and personalized treatments for optimal scalp and hair health. Our advanced trichology services combine science and luxury for transformative results."
//         image={trichologyHero}
//         imageAlt="Trichology and scalp health treatment"
//       />

//       {/* Introduction */}
//       <section className="py-12 px-6 max-w-4xl mx-auto text-center">
//         <p className="text-lg text-gray-600 leading-relaxed">
//           At Avya, we bring comprehensive hair cut and balayage services to Nairobi.
//           Whether you're looking for a fresh new style or a sun-kissed color transformation, our expert team
//           uses advanced techniques and proven methods to deliver exceptional results tailored to your unique needs.
//         </p>
//       </section>

//       {/* Department Filter */}
//       <section className="py-8 px-6 bg-gray-100">
//         <div className="container mx-auto max-w-6xl">
//           <div className="flex flex-wrap justify-center gap-4">
//             {departments.map((dept) => (
//               <button
//                 key={dept.id}
//                 onClick={() => setSelectedDepartment(dept.id)}
//                 className={`px-6 py-3 text-base font-medium rounded-lg transition-all ${
//                   selectedDepartment === dept.id
//                     ? "bg-white text-gray-800 shadow-md"
//                     : "bg-transparent text-gray-600 border border-gray-300 hover:bg-white hover:text-gray-800"
//                 }`}
//               >
//                 {dept.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Tables by Department */}
//       <section className="py-20 px-6 bg-[#E2DBDF]/20">
//         <div className="container mx-auto max-w-7xl space-y-16">
//           {departments
//             .filter(dept => dept.id !== "All")
//             .map(dept => {
//               const deptServices = allServices.filter(s => s.department === dept.id);
//               if (selectedDepartment !== "All" && selectedDepartment !== dept.id) return null;

//               return (
//                 <div key={dept.id} className="bg-white p-8 md:p-12 shadow-sm">
//                   <h2 className="text-3xl md:text-4xl font-light text-[#262626] mb-8 text-center">
//                     {dept.label}
//                   </h2>

//                   <div className="overflow-x-auto">
//                     <table className="w-full border-collapse">
//                       <thead>
//                         <tr className="border-b-2 border-[#595959]">
//                           <th className="text-left py-4 px-4 text-base font-medium text-[#262626]">
//                             Treatment
//                           </th>
//                           <th className="text-left py-4 px-4 text-base font-medium text-[#262626]">
//                             Area
//                           </th>
//                           <th className="text-right py-4 px-4 text-base font-medium text-[#262626]">
//                             Price
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {deptServices.map((service, idx) => (
//                           <tr
//                             key={`${service.name}-${service.location}-${idx}`}
//                             className="border-b border-[#595959]/20 hover:bg-[#E2DBDF]/10 transition-colors"
//                           >
//                             <td className="py-4 px-4 text-base text-[#262626]">
//                               {service.name}
//                             </td>
//                             <td className="py-4 px-4 text-base text-[#262626]">
//                               {service.location || "Various"}
//                             </td>
//                             <td className="py-4 px-4 text-base text-[#262626] text-right">
//                               {service.price}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>

//                   {/* Optional: Add department-specific notes */}
//                   {dept.id === "Cosmetology/Trichology" && (
//                     <p className="mt-6 text-sm text-[#595959] italic text-center">
//                       Personalized consultations are recommended for all trichology services.
//                     </p>
//                   )}
//                 </div>
//               );
//             })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Trichology;
// // import React from "react";
// // import ServiceHero from "@/components/ui/ServiceHero";
// // import trichologyHero from "@/assets/op.png";

// // const Trichology = () => {
// //   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

// //   const allServices = [
// //     // Cutting & Styling
// //     {
// //       name: "Haircut",
// //       price: "Ksh 6,000",
// //       department: "Cutting & Styling",
// //     },
// //     {
// //       name: "Men's Haircut",
// //       price: "Ksh 4,500",
// //       department: "Cutting & Styling",
// //     },
// //     {
// //       name: "Fringe Cut",
// //       price: "Ksh 2,000",
// //       department: "Cutting & Styling",
// //     },
// //     {
// //       name: "Kid's Haircut (under 12)",
// //       price: "Ksh 3,000",
// //       department: "Cutting & Styling",
// //     },
// //     {
// //       name: "Wash & Blow-Dry",
// //       price: "Ksh 4,000",
// //       department: "Cutting & Styling",
// //     },
// //     {
// //       name: "Hair Up (Event Styling)",
// //       price: "from Ksh 8,000",
// //       department: "Cutting & Styling",
// //     },
// //     // Colour Services
// //     {
// //       name: "Full Colour - Short",
// //       price: "from Ksh 10,000",
// //       department: "Colour Services",
// //     },
// //     {
// //       name: "Full Colour - Medium",
// //       price: "from Ksh 15,000",
// //       department: "Colour Services",
// //     },
// //     {
// //       name: "Full Colour - Long",
// //       price: "from Ksh 18,000",
// //       department: "Colour Services",
// //     },
// //     {
// //       name: "Highlights T-Section",
// //       price: "Ksh 10,000",
// //       department: "Colour Services",
// //       notes: "Toner not included",
// //     },
// //     {
// //       name: "Highlights Halfhead",
// //       price: "Ksh 16,000",
// //       department: "Colour Services",
// //       notes: "Toner not included",
// //     },
// //     {
// //       name: "Highlights Fullhead",
// //       price: "Ksh 30,000",
// //       department: "Colour Services",
// //       notes: "Toner not included",
// //     },
// //     {
// //       name: "Freehand Highlights",
// //       price: "from Ksh 20,000",
// //       department: "Colour Services",
// //     },
// //     {
// //       name: "Creative Colour",
// //       price: "from Ksh 20,000",
// //       department: "Colour Services",
// //     },
// //     {
// //       name: "Bleaching",
// //       price: "from Ksh 20,000",
// //       department: "Colour Services",
// //     },
// //     {
// //       name: "Toner - Short",
// //       price: "Ksh 8,000",
// //       department: "Colour Services",
// //     },
// //     {
// //       name: "Toner - Medium",
// //       price: "Ksh 12,000",
// //       department: "Colour Services",
// //     },
// //     {
// //       name: "Toner - Long",
// //       price: "Ksh 15,000",
// //       department: "Colour Services",
// //     },
// //   ];

// //   const departments = [
// //     { id: "All", label: "All Services" },
// //     { id: "Cutting & Styling", label: "Cutting & Styling" },
// //     { id: "Colour Services", label: "Colour Services" },
// //   ];

// //   return (
// //     <div className="min-h-screen">
// //       {/* Hero Section */}
// //       <ServiceHero
// //         title="Hair Cut & "
// //         titleGradient="& Balayage"
// //         description="Experience expert haircuts and stunning balayage techniques that enhance your natural beauty. Our skilled stylists use precision and creativity to deliver personalized looks that turn heads."
// //         image={trichologyHero}
// //         imageAlt="Trichology and scalp health treatment"
// //       />
// //       {/* Introduction */}
// //       <section className="py-12 px-6 max-w-4xl mx-auto text-center">
// //         <p className="text-lg text-gray-600 leading-relaxed">
// //           At Avya, we bring hair cut and balayage services to Nairobi.
// //           Whether you're looking for a fresh new style or a sun-kissed color transformation, our expert team
// //           uses advanced techniques and proven methods to deliver exceptional results tailored to your unique needs.
// //         </p>
// //       </section>
// //       {/* Department Filter */}
// //       <section className="py-8 px-6 bg-gray-100">
// //         <div className="container mx-auto max-w-6xl">
// //           <div className="flex flex-wrap justify-center gap-4">
// //             {departments.map((dept) => (
// //               <button
// //                 key={dept.id}
// //                 onClick={() => setSelectedDepartment(dept.id)}
// //                 className={`px-6 py-3 text-base font-medium rounded-lg transition-all ${
// //                   selectedDepartment === dept.id
// //                     ? "bg-white text-gray-800 shadow-md"
// //                     : "bg-transparent text-gray-600 border border-gray-300 hover:bg-white hover:text-gray-800"
// //                 }`}
// //               >
// //                 {dept.label}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //       {/* Services Tables by Department */}
// //       <section className="py-20 px-6 bg-[#E2DBDF]/20">
// //         <div className="container mx-auto max-w-7xl space-y-16">
// //           {departments
// //             .filter(dept => dept.id !== "All")
// //             .map(dept => {
// //               const deptServices = allServices.filter(s => s.department === dept.id);
// //               if (selectedDepartment !== "All" && selectedDepartment !== dept.id) return null;
// //               return (
// //                 <div key={dept.id} className="bg-white p-8 md:p-12 shadow-sm">
// //                   <h2 className="text-3xl md:text-4xl font-light text-[#262626] mb-8 text-center">
// //                     {dept.label}
// //                   </h2>
// //                   <div className="overflow-x-auto">
// //                     <table className="w-full border-collapse">
// //                       <thead>
// //                         <tr className="border-b-2 border-[#595959]">
// //                           <th className="text-left py-4 px-4 text-base font-medium text-[#262626]">
// //                             Service
// //                           </th>
// //                           <th className="text-right py-4 px-4 text-base font-medium text-[#262626]">
// //                             Price
// //                           </th>
// //                           {dept.id === "Colour Services" && (
// //                             <th className="text-right py-4 px-4 text-base font-medium text-[#262626]">
// //                               Notes
// //                             </th>
// //                           )}
// //                         </tr>
// //                       </thead>
// //                       <tbody>
// //                         {deptServices.map((service, idx) => (
// //                           <tr
// //                             key={`${service.name}-${idx}`}
// //                             className="border-b border-[#595959]/20 hover:bg-[#E2DBDF]/10 transition-colors"
// //                           >
// //                             <td className="py-4 px-4 text-base text-[#262626]">
// //                               {service.name}
// //                             </td>
// //                             <td className="py-4 px-4 text-base text-[#262626] text-right">
// //                               {service.price}
// //                             </td>
// //                             {dept.id === "Colour Services" && (
// //                               <td className="py-4 px-4 text-base text-[#262626] text-right">
// //                                 {service.notes || "-"}
// //                               </td>
// //                             )}
// //                           </tr>
// //                         ))}
// //                       </tbody>
// //                     </table>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Trichology;
import React from "react";
import ServiceHero from "@/components/ui/ServiceHero";
import trichologyHero from "@/assets/op.png";

const Trichology = () => {
  const [selectedDepartment, setSelectedDepartment] = React.useState("All");

  const allServices = [
  {
    name: "Meso Glow (Reverse Aging Cocktail)",
    location: "Face",
    price: "KES 20,000",
    duration: "Minimum 3 sessions",
    recommendation: "Every 3 or 4 weeks",
    department: "Cosmetology/Trichology",
    description: "A revitalizing facial treatment designed to deeply nourish, hydrate, and rejuvenate the skin.",
  },
  {
    name: "DQ Hair (Hair Growth System)",
    location: "Scalp",
    price: "KES 20,000",
    duration: "Minimum 3 sessions",
    recommendation: "Every 1 or 2 weeks",
    department: "Cosmetology/Trichology",
    description: "A non-surgical scalp treatment designed to strengthen the hair, reduce hair fall, and stimulate growth.",
  },
  {
    name: "EGF Genesis (Epidermal Growth Factor)",
    location: "Face, Neck, Back Hand",
    price: "KES 20,000",
    recommendation: "Every 1 or 2 weeks",
    duration: "Minimum 4 sessions",
    department: "Cosmetology/Trichology",
    description: "A treatment that uses growth factors to boost skin regeneration and repair.",
  },
  {
    name: "Supreall PPC+Deoxycholate (Double Chin)",
    location: "Double Chin (1ML)",
    price: "KES 10,000",
    duration: "Minimum 3 sessions",
    recommendation: "Every 2 weeks",
    department: "Slimming Treatment",
    description: "Fat-dissolving injections to contour and reduce stubborn fat in the double chin area.",
  },
  {
    name: "Supreall PPC+Deoxycholate (Arm)",
    location: "Arm (3ML)",
    price: "KES 15,000",
    duration: "Minimum 3 sessions",
    recommendation: "Every 2 weeks",
    department: "Slimming Treatment",
    description: "Fat-dissolving injections to contour and reduce stubborn fat in the arm area.",
  },
  {
    name: "Supreall PPC+Deoxycholate (Tummy)",
    location: "Tummy (5-10ML)",
    price: "KES 20,000",
    duration: "Minimum 3 sessions",
    recommendation: "Every 2 weeks",
    department: "Slimming Treatment",
    description: "Fat-dissolving injections to contour and reduce stubborn fat in the tummy area.",
  },
  {
    name: "Cavitation (Chin Area)",
    location: "Chin Area",
    price: "KES 20,000",
    duration: "3 sessions (10 mins each)",
    recommendation: "Every 2 weeks",
    department: "Slimming Treatment",
    description: "Non-invasive ultrasound waves to break down fat cells in the chin area for natural elimination.",
  },
  {
    name: "Cavitation (Arms Area)",
    location: "Arms Area",
    price: "KES 25,000",
    duration: "3 sessions (10 mins each)",
    recommendation: "Every 2 weeks",
    department: "Slimming Treatment",
    description: "Non-invasive ultrasound waves to break down fat cells in the arms area for natural elimination.",
  },
  {
    name: "Cavitation (Tummy Area)",
    location: "Tummy Area",
    price: "KES 30,000)",
    duration: "3 sessions (30 to 40 mins each)",
    department: "Slimming Treatment",
    recommendation: "Every 2 weeks",
    description: "Non-invasive ultrasound waves to break down fat cells in the tummy area for natural elimination.",
  },
  {
    name: "Platelet Rich Plasma (BIOGENIX ACCESSORY KIT)",
    location: "Face & Scalp",
    price: "KES 15,000",
    duration: "Minimum 3 sessions",
    recommendation: "Every 3 to 4 weeks",
    department: "Cosmetology/Trichology",
    description: "Advanced biotech kit delivering bio-active compounds for skin repair and scalp revitalization.",
  },
  {
    name: "Alopecia Injection",
    location: "Scalp, Beard, Mustache",
    price: "KES 15,000",
    duration: "Interval",
    recommendation: "Every 4 weeks",
    department: "Injection into Skin Lesion",
    description: "Steroid injections to reduce inflammation and promote hair regrowth in affected areas.",
  },
  {
    name: "Warts & Skin Tag Removal",
    location: "Face, Neck, Under Arm",
    price: "KES 3,000 per piece",
    duration: "N/A",
    recommendation: "N/A",
    department: "Warts & Skin Tag Removal",
    description: "Safe and effective removal of warts and skin tags for smoother skin.",
  },
  {
    name: "Warts & Skin Tag Removal",
    location: "Full Face",
    price: "KES 12,000",
    duration: "N/A",
    recommendation: "N/A",
    department: "Warts & Skin Tag Removal",
    description: "Safe and effective removal of warts and skin tags for smoother skin.",
  },
  {
    name: "Warts & Skin Tag Removal",
    location: "Full Neck",
    price: "KES 12,000",
    duration: "N/A",
    recommendation: "N/A",
    department: "Warts & Skin Tag Removal",
    description: "Safe and effective removal of warts and skin tags for smoother skin.",
  },
  {
    name: "Warts & Skin Tag Removal",
    location: "Full Face and Neck",
    price: "KES 22,000",
    duration: "N/A",
    recommendation: "N/A",
    department: "Warts & Skin Tag Removal",
    description: "Safe and effective removal of warts and skin tags for smoother skin.",
  },
  {
    name: "Warts & Skin Tag Removal",
    location: "Chest and Back",
    price: "KES 22,000",
    duration: "N/A",
    recommendation: "N/A",
    department: "Warts & Skin Tag Removal",
    description: "Safe and effective removal of warts and skin tags for smoother skin.",
  },
];


  const departments = [
    { id: "All", label: "All Treatments" },
    { id: "Cosmetology/Trichology", label: "Cosmetology" },
    { id: "Slimming Treatment", label: "Slimming" },
    { id: "Injection into Skin Lesion", label: "Injections" },
    { id: "Warts & Skin Tag Removal", label: "Removal" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="Cosmetology & "
        titleGradient="& Trichology"
        description="Experience expert diagnosis and personalized treatments for optimal scalp and hair health. Our advanced trichology services combine science and luxury for transformative results."
        image={trichologyHero}
        imageAlt="Trichology and scalp health treatment"
      />
      {/* Introduction */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-600 leading-relaxed">
          At Avya, we bring comprehensive hair cut and balayage services to Nairobi.
          Whether you're looking for a fresh new style or a sun-kissed color transformation, our expert team
          uses advanced techniques and proven methods to deliver exceptional results tailored to your unique needs.
        </p>
      </section>
      {/* Department Filter */}
      <section className="py-8 px-6 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 text-base font-medium rounded-lg transition-all ${
                  selectedDepartment === dept.id
                    ? "bg-white text-gray-800 shadow-md"
                    : "bg-transparent text-gray-600 border border-gray-300 hover:bg-white hover:text-gray-800"
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Services Tables by Department */}
      <section className="py-20 px-6 bg-[#E2DBDF]/20">
        <div className="container mx-auto max-w-7xl space-y-16">
          {departments
            .filter(dept => dept.id !== "All")
            .map(dept => {
              const deptServices = allServices.filter(s => s.department === dept.id);
              if (selectedDepartment !== "All" && selectedDepartment !== dept.id) return null;
              return (
                <div key={dept.id} className="bg-white p-8 md:p-12 shadow-sm">
                  <h2 className="text-3xl md:text-4xl font-light text-[#262626] mb-8 text-center">
                    {dept.label}
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                      <tr className="border-b-2 border-[#595959]">
                        <th className="text-left py-4 px-4 text-base font-medium text-[#262626]">
                          Treatment
                        </th>
                        <th className="text-left py-4 px-4 text-base font-medium text-[#262626]">
                          Area
                        </th>
                        <th className="text-left py-4 px-4 text-base font-medium text-[#262626]">
                          Duration
                        </th>
                        <th className="text-left py-4 px-4 text-base font-medium text-[#262626]">
                          Recommendation
                        </th>
                        <th className="text-right py-4 px-4 text-base font-medium text-[#262626]">
                          Price
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {deptServices.map((service, idx) => (
                        <tr
                          key={`${service.name}-${service.location}-${idx}`}
                          className="border-b border-[#595959]/20 hover:bg-[#E2DBDF]/10 transition-colors"
                        >
                          <td className="py-4 px-4 text-base text-[#262626]">
                            {service.name}
                          </td>
                          <td className="py-4 px-4 text-base text-[#262626]">
                            {service.location || "Various"}
                          </td>
                          <td className="py-4 px-4 text-base text-[#262626]">
                            {service.duration}
                          </td>
                          <td className="py-4 px-4 text-base text-[#262626]">
                            {service.recommendation}
                          </td>
                          <td className="py-4 px-4 text-base text-[#262626] text-right">
                            {service.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    </table>
                  </div>
                  {dept.id === "Cosmetology/Trichology" && (
                    <p className="mt-6 text-sm text-[#595959] italic text-center">
                      Personalized consultations are recommended for all trichology services.
                    </p>
                  )}
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Trichology;
