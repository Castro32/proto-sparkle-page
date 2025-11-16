// // // // import { HeroSection } from "@/components/ui/ServiceHero";
// // // // import { ServiceCard } from "@/components/ui/ServiceCard";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Droplets, Shield, Leaf, Zap, Heart, Sparkles } from "lucide-react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import treatmentsHero from "@/assets/treatments-hero.jpg";

// // // // const Treatments = () => {
// // // //   const navigate = useNavigate();

// // // //   const treatments = [
// // // //     {
// // // //       title: "Nanoplastia",
// // // //       description: "Advanced smoothing treatment that transforms frizzy, damaged hair into silky, manageable perfection.",
// // // //       icon: Sparkles
// // // //     },
// // // //     {
// // // //       title: "Hair Botox",
// // // //       description: "Deep conditioning treatment that fills hair fibers, eliminates frizz, and restores youthful shine.",
// // // //       icon: Zap
// // // //     },
// // // //     {
// // // //       title: "Cold Hair Recovery",
// // // //       description: "Innovative cold therapy technique that repairs extreme damage without heat, preserving hair integrity.",
// // // //       icon: Shield
// // // //     },
// // // //     {
// // // //       title: "Olaplex & K18",
// // // //       description: "Professional bond-building treatments that repair broken hair bonds at the molecular level.",
// // // //       icon: Droplets
// // // //     },
// // // //     {
// // // //       title: "Protein Treatments",
// // // //       description: "Targeted protein therapy to strengthen weak, brittle hair and restore structural integrity.",
// // // //       icon: Leaf
// // // //     },
// // // //     {
// // // //       title: "Moisture Therapy",
// // // //       description: "Deep hydration treatments that restore moisture balance and improve elasticity for healthier hair.",
// // // //       icon: Heart
// // // //     }
// // // //   ];

// // // //   const benefits = [
// // // //     { title: "Long-Lasting Results", description: "Treatments designed to deliver transformation that lasts months, not days" },
// // // //     { title: "Customized Formulas", description: "Every treatment is tailored to your hair's unique needs and condition" },
// // // //     { title: "Gentle on Hair", description: "Advanced formulations that restore without compromising hair health" },
// // // //     { title: "Global Standards", description: "Premium products and techniques from leading hair care innovators worldwide" }
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen">
// // // //       {/* <HeroSection
// // // //         subtitle="Hair Treatments & Restoration"
// // // //         title="Restore. Revive. Transform."
// // // //         description="Advanced hair restoration treatments using global techniques and premium formulations for lasting results."
// // // //         imageSrc={treatmentsHero}
// // // //         primaryCta={{
// // // //           text: "Book Treatment",
// // // //           onClick: () => window.open("#booking", "_self")
// // // //         }}
// // // //       /> */}
// // // //       <HeroSection
// // // //         subtitle="Hair Treatments & Restoration"
// // // //         title="Restore. Revive. Transform."
// // // //         description="Advanced hair restoration treatments using global techniques and premium formulations for lasting results."
// // // //         imageSrc={treatmentsHero}
// // // //       >
// // // //         <div className="flex flex-nowrap gap-2 sm:gap-4">
// // // //           <Button
// // // //             className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors mx-auto"
// // // //             size="lg"
// // // //             onClick={() => window.open("/contact#contact-form", "_self")}
// // // //           >
// // // //             Book Treatment
// // // //           </Button>
// // // //         </div>
// // // //       </HeroSection>


// // // //       {/* Intro Section */}
// // // //       <section className="py-24 px-6">
// // // //         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
// // // //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
// // // //             Science Meets Luxury
// // // //           </h2>
// // // //           <p className="text-xl leading-relaxed text-muted-foreground font-montserrat">
// // // //             Our restorative treatments go beyond surface-level care. We use advanced formulations and proven techniques to repair damage, restore health, and reveal your hair's natural beauty—from the inside out.
// // // //           </p>
// // // //         </div>
// // // //       </section>

// // // //       {/* Treatments Grid */}
// // // //       <section className="py-24 px-6 bg-card">
// // // //         <div className="container mx-auto max-w-7xl">
// // // //           <div className="text-center mb-16 animate-fade-in">
// // // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// // // //               Our Treatment Menu
// // // //             </h2>
// // // //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
// // // //               Professional treatments that deliver transformative, long-lasting results
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //             {treatments.map((treatment, index) => (
// // // //               <div
// // // //                 key={treatment.title}
// // // //                 className="animate-fade-up"
// // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // //               >
// // // //                 <ServiceCard
// // // //                   title={treatment.title}
// // // //                   description={treatment.description}
// // // //                   icon={treatment.icon}
// // // //                   className="h-full"
// // // //                 />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Before & After Expectations */}
// // // //       <section className="py-24 px-6 gradient-secondary">
// // // //         <div className="container mx-auto max-w-7xl">
// // // //           <div className="text-center mb-16 animate-fade-in">
// // // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
// // // //               What to Expect
// // // //             </h2>
// // // //             <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
// // // //               Visible transformation from your very first treatment
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// // // //             <div className="bg-card rounded-lg p-10 shadow-elegant animate-fade-up">
// // // //               <h3 className="text-2xl font-light mb-6 text-foreground font-hatton">
// // // //                 Before Treatment
// // // //               </h3>
// // // //               <ul className="space-y-4">
// // // //                 {[
// // // //                   "Dry, brittle, or damaged hair texture",
// // // //                   "Frizz and lack of manageability",
// // // //                   "Dull appearance without shine",
// // // //                   "Breakage and split ends",
// // // //                   "Chemical or heat damage"
// // // //                 ].map((item) => (
// // // //                   <li key={item} className="flex items-start text-muted-foreground">
// // // //                     <span className="mr-3 mt-1 text-destructive">•</span>
// // // //                     {item}
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //             </div>

// // // //             <div className="bg-card rounded-lg p-10 shadow-elegant animate-fade-up" style={{ animationDelay: '0.1s' }}>
// // // //               <h3 className="text-2xl font-light mb-6 text-foreground font-hatton">
// // // //                 After Treatment
// // // //               </h3>
// // // //               <ul className="space-y-4">
// // // //                 {[
// // // //                   "Soft, smooth, and restored texture",
// // // //                   "Sleek, frizz-free manageability",
// // // //                   "Radiant shine and healthy appearance",
// // // //                   "Strengthened strands with reduced breakage",
// // // //                   "Revitalized hair from root to tip"
// // // //                 ].map((item) => (
// // // //                   <li key={item} className="flex items-start text-muted-foreground">
// // // //                     <span className="mr-3 mt-1 text-secondary">✓</span>
// // // //                     {item}
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Benefits Section */}
// // // //       <section className="py-24 px-6">
// // // //         <div className="container mx-auto max-w-7xl">
// // // //           <div className="text-center mb-16 animate-fade-in">
// // // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// // // //               Why Choose Avya Treatments?
// // // //             </h2>
// // // //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
// // // //               The difference is in the details
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // // //             {benefits.map((benefit, index) => (
// // // //               <div
// // // //                 key={benefit.title}
// // // //                 className="flex gap-6 p-8 rounded-lg border border-accent bg-card shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
// // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // //               >
// // // //                 <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
// // // //                   <Heart className="h-8 w-8 text-primary" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h3 className="text-xl font-medium mb-2 text-foreground">
// // // //                     {benefit.title}
// // // //                   </h3>
// // // //                   <p className="text-muted-foreground leading-relaxed">
// // // //                     {benefit.description}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Treatment Process */}
// // // //       <section className="py-24 px-6 bg-card">
// // // //         <div className="container mx-auto max-w-4xl">
// // // //           <div className="text-center mb-16 animate-fade-in">
// // // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// // // //               Your Treatment Journey
// // // //             </h2>
// // // //             <p className="text-lg text-muted-foreground font-montserrat">
// // // //               A personalized approach to hair restoration
// // // //             </p>
// // // //           </div>

// // // //           <div className="space-y-8">
// // // //             {[
// // // //               {
// // // //                 step: "01",
// // // //                 title: "Hair Analysis",
// // // //                 description: "Comprehensive assessment of your hair's condition, porosity, and specific needs."
// // // //               },
// // // //               {
// // // //                 step: "02",
// // // //                 title: "Treatment Selection",
// // // //                 description: "Customized treatment plan based on your hair goals and lifestyle."
// // // //               },
// // // //               {
// // // //                 step: "03",
// // // //                 title: "Professional Application",
// // // //                 description: "Expert application using precise techniques for optimal product penetration."
// // // //               },
// // // //               {
// // // //                 step: "04",
// // // //                 title: "Aftercare Guidance",
// // // //                 description: "Personalized maintenance tips and product recommendations to extend results."
// // // //               }
// // // //             ].map((item, index) => (
// // // //               <div
// // // //                 key={item.step}
// // // //                 className="flex gap-6 items-start p-8 rounded-lg border border-accent shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
// // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // //               >
// // // //                 <div className="text-5xl font-light text-secondary">
// // // //                   {item.step}
// // // //                 </div>
// // // //                 <div className="flex-1">
// // // //                   <h3 className="text-2xl font-light mb-2 text-foreground">
// // // //                     {item.title}
// // // //                   </h3>
// // // //                   <p className="text-muted-foreground leading-relaxed">
// // // //                     {item.description}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* CTA Section */}
// // // //       <section className="py-24 px-6 gradient-primary">
// // // //         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
// // // //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary font-hatton">
// // // //             Ready to Restore Your Hair?
// // // //           </h2>
// // // //           <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto font-montserrat">
// // // //             Experience the transformative power of professional hair treatments
// // // //           </p>
// // // //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // // //             <Button className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors" size="lg">
// // // //               Book Your Treatment
// // // //             </Button>
// // // //             {/* <Button variant="premium" size="lg" onClick={() => navigate("/contact#contact-form")}>
// // // //               View All Services
// // // //             </Button> */}
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Treatments;
// // // import ServiceHero from "@/components/ui/ServiceHero";
// // // import { Button } from "@/components/ui/button";
// // // import { Droplets, Shield, Leaf, Zap, Heart, Sparkles, ChevronDown } from "lucide-react";
// // // import treatmentsHero from "@/assets/op5.png";

// // // const Treatments = () => {
// // //   const treatments = [
// // //     {
// // //       title: "Nanoplastia",
// // //       description: "Advanced smoothing treatment that transforms frizzy, damaged hair into silky, manageable perfection.",
// // //       icon: Sparkles
// // //     },
// // //     {
// // //       title: "Hair Botox",
// // //       description: "Deep conditioning treatment that fills hair fibers, eliminates frizz, and restores youthful shine.",
// // //       icon: Zap
// // //     },
// // //     {
// // //       title: "Cold Hair Recovery",
// // //       description: "Innovative cold therapy technique that repairs extreme damage without heat, preserving hair integrity.",
// // //       icon: Shield
// // //     },
// // //     {
// // //       title: "Olaplex & K18",
// // //       description: "Professional bond-building treatments that repair broken hair bonds at the molecular level.",
// // //       icon: Droplets
// // //     },
// // //     {
// // //       title: "Protein Treatments",
// // //       description: "Targeted protein therapy to strengthen weak, brittle hair and restore structural integrity.",
// // //       icon: Leaf
// // //     },
// // //     {
// // //       title: "Moisture Therapy",
// // //       description: "Deep hydration treatments that restore moisture balance and improve elasticity for healthier hair.",
// // //       icon: Heart
// // //     }
// // //   ];

// // //   const benefits = [
// // //     { title: "Long-Lasting Results", description: "Treatments designed to deliver transformation that lasts months, not days" },
// // //     { title: "Customized Formulas", description: "Every treatment is tailored to your hair's unique needs and condition" },
// // //     { title: "Gentle on Hair", description: "Advanced formulations that restore without compromising hair health" },
// // //     { title: "Global Standards", description: "Premium products and techniques from leading hair care innovators worldwide" }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen">
// // //       <ServiceHero
// // //         title="Hair Treatments"
// // //         titleGradient="& Restoration"
// // //         description="Advanced hair restoration treatments using global techniques and premium formulations for lasting results."
// // //         image={treatmentsHero}
// // //         imageAlt="Hair Treatments at Avya Beauty"
// // //       />

// // //       {/* Intro Section */}
// // //       <section className="py-24 px-6">
// // //         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
// // //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
// // //             Science Meets Luxury
// // //           </h2>
// // //           <p className="text-xl leading-relaxed text-muted-foreground font-montserrat">
// // //             Our restorative treatments go beyond surface-level care. We use advanced formulations and proven techniques to repair damage, restore health, and reveal your hair's natural beauty—from the inside out.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* Treatments Accordion */}
// // //       <section className="py-24 px-6 bg-card">
// // //         <div className="container mx-auto max-w-4xl">
// // //           <div className="text-center mb-16 animate-fade-in">
// // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// // //               Our Treatment Menu
// // //             </h2>
// // //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
// // //               Professional treatments that deliver transformative, long-lasting results
// // //             </p>
// // //           </div>

// // //           <div className="space-y-2">
// // //             {treatments.map((treatment, index) => (
// // //               <details key={treatment.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
// // //                 <summary className="list-none cursor-pointer flex items-center gap-4 p-6 hover:bg-accent/20 transition-colors border-b border-accent/50">
// // //                   <treatment.icon className="h-6 w-6 text-secondary flex-shrink-0" />
// // //                   <h3 className="text-xl font-medium text-foreground flex-1">{treatment.title}</h3>
// // //                   <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 rotate-0 marker:hidden [&[open]]:rotate-180" />
// // //                 </summary>
// // //                 <div className="p-6 pt-0 border-b border-accent/50">
// // //                   <p className="text-muted-foreground leading-relaxed">{treatment.description}</p>
// // //                 </div>
// // //               </details>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Before & After Expectations */}
// // //       <section className="py-24 px-6 gradient-secondary">
// // //         <div className="container mx-auto max-w-7xl">
// // //           <div className="text-center mb-16 animate-fade-in">
// // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
// // //               What to Expect
// // //             </h2>
// // //             <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
// // //               Visible transformation from your very first treatment
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// // //             <div className="p-10 animate-fade-up space-y-4">
// // //               <h3 className="text-2xl font-light mb-6 text-foreground font-hatton">
// // //                 Before Treatment
// // //               </h3>
// // //               {[
// // //                 "Dry, brittle, or damaged hair texture",
// // //                 "Frizz and lack of manageability",
// // //                 "Dull appearance without shine",
// // //                 "Breakage and split ends",
// // //                 "Chemical or heat damage"
// // //               ].map((item) => (
// // //                 <div key={item} className="flex items-start text-muted-foreground">
// // //                   <span className="mr-3 mt-1 text-destructive">•</span>
// // //                   {item}
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             <div className="p-10 animate-fade-up space-y-4" style={{ animationDelay: '0.1s' }}>
// // //               <h3 className="text-2xl font-light mb-6 text-foreground font-hatton">
// // //                 After Treatment
// // //               </h3>
// // //               {[
// // //                 "Soft, smooth, and restored texture",
// // //                 "Sleek, frizz-free manageability",
// // //                 "Radiant shine and healthy appearance",
// // //                 "Strengthened strands with reduced breakage",
// // //                 "Revitalized hair from root to tip"
// // //               ].map((item) => (
// // //                 <div key={item} className="flex items-start text-muted-foreground">
// // //                   <span className="mr-3 mt-1 text-secondary">✓</span>
// // //                   {item}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Benefits Section */}
// // //       <section className="py-24 px-6">
// // //         <div className="container mx-auto max-w-7xl">
// // //           <div className="text-center mb-16 animate-fade-in">
// // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// // //               Why Choose Avya Treatments?
// // //             </h2>
// // //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
// // //               The difference is in the details
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //             {benefits.map((benefit, index) => (
// // //               <div
// // //                 key={benefit.title}
// // //                 className="flex gap-6 p-8 hover:bg-accent/20 transition-colors animate-fade-up"
// // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // //               >
// // //                 <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
// // //                   <Heart className="h-8 w-8 text-primary" />
// // //                 </div>
// // //                 <div>
// // //                   <h3 className="text-xl font-medium mb-2 text-foreground">
// // //                     {benefit.title}
// // //                   </h3>
// // //                   <p className="text-muted-foreground leading-relaxed">
// // //                     {benefit.description}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Treatment Process */}
// // //       <section className="py-24 px-6 bg-card">
// // //         <div className="container mx-auto max-w-4xl">
// // //           <div className="text-center mb-16 animate-fade-in">
// // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// // //               Your Treatment Journey
// // //             </h2>
// // //             <p className="text-lg text-muted-foreground font-montserrat">
// // //               A personalized approach to hair restoration
// // //             </p>
// // //           </div>

// // //           <div className="space-y-8">
// // //             {[
// // //               {
// // //                 step: "01",
// // //                 title: "Hair Analysis",
// // //                 description: "Comprehensive assessment of your hair's condition, porosity, and specific needs."
// // //               },
// // //               {
// // //                 step: "02",
// // //                 title: "Treatment Selection",
// // //                 description: "Customized treatment plan based on your hair goals and lifestyle."
// // //               },
// // //               {
// // //                 step: "03",
// // //                 title: "Professional Application",
// // //                 description: "Expert application using precise techniques for optimal product penetration."
// // //               },
// // //               {
// // //                 step: "04",
// // //                 title: "Aftercare Guidance",
// // //                 description: "Personalized maintenance tips and product recommendations to extend results."
// // //               }
// // //             ].map((item, index) => (
// // //               <div
// // //                 key={item.step}
// // //                 className="flex gap-6 items-start p-8 hover:bg-accent/20 transition-colors animate-fade-up"
// // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // //               >
// // //                 <div className="text-5xl font-light text-secondary flex-shrink-0">
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
// // //       <section className="py-24 px-6 gradient-primary">
// // //         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
// // //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary font-hatton">
// // //             Ready to Restore Your Hair?
// // //           </h2>
// // //           <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto font-montserrat">
// // //             Experience the transformative power of professional hair treatments
// // //           </p>
// // //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // //             <Button className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors" size="lg">
// // //               Book Your Treatment
// // //             </Button>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Treatments;
// // import React from 'react';
// // import { Button } from "@/components/ui/button";
// // import ServiceHero from "@/components/ui/ServiceHero";
// // import treatmentsHero from "@/assets/op5.png";
// // import haircutImage from "@/assets/op.png"; 
// // import colourImage from "@/assets/op1.png"; 
// // import treatmentImage from "@/assets/op2.png"; 
// // import defaultImage from "@/assets/op3.png";

// // const Treatments = () => {
// //   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

// //   const allServices = [
// //     {
// //       name: "Haircut",
// //       location: "",
// //       price: "KES 6,000",
// //       department: "Cutting & Styling",
// //       description: "Precision haircut tailored to your face shape and personal style for a fresh, modern look.",
// //       image: haircutImage,
// //     },
// //     {
// //       name: "Men’s Haircut",
// //       location: "",
// //       price: "KES 4,500",
// //       department: "Cutting & Styling",
// //       description: "Professional men's cut focusing on clean lines and versatile styling options.",
// //       image: haircutImage,
// //     },
// //     {
// //       name: "Fringe Cut",
// //       location: "",
// //       price: "KES 2,000",
// //       department: "Cutting & Styling",
// //       description: "Quick and precise fringe trim to frame your face perfectly.",
// //       image: haircutImage,
// //     },
// //     {
// //       name: "Kid’s Haircut (under 12)",
// //       location: "",
// //       price: "KES 3,000",
// //       department: "Cutting & Styling",
// //       description: "Fun and gentle haircut for children, ensuring comfort and style.",
// //       image: haircutImage,
// //     },
// //     {
// //       name: "Wash & Blow-Dry",
// //       location: "",
// //       price: "KES 4,000",
// //       department: "Cutting & Styling",
// //       description: "Refreshing wash followed by a smooth blow-dry for salon-fresh volume and shine.",
// //       image: haircutImage,
// //     },
// //     {
// //       name: "Hair Up (Event Styling)",
// //       location: "",
// //       price: "from KES 8,000",
// //       department: "Cutting & Styling",
// //       description: "Elegant updo styling for special events, customized to your gown and occasion.",
// //       image: haircutImage,
// //     },
// //     {
// //       name: "Full Colour – Short",
// //       location: "Short Hair",
// //       price: "from KES 10,000",
// //       department: "Colour",
// //       description: "Vibrant full color application for short hair, achieving even coverage and tone.",
// //       image: colourImage,
// //     },
// //     {
// //       name: "Full Colour – Medium",
// //       location: "Medium Hair",
// //       price: "from KES 15,000",
// //       department: "Colour",
// //       description: "Rich full color for medium-length hair, enhancing depth and dimension.",
// //       image: colourImage,
// //     },
// //     {
// //       name: "Full Colour – Long",
// //       location: "Long Hair",
// //       price: "from KES 18,000",
// //       department: "Colour",
// //       description: "Seamless full color for long hair, ensuring consistent results from root to tip.",
// //       image: colourImage,
// //     },
// //     {
// //       name: "Highlights – T-Section",
// //       location: "T-Section",
// //       price: "KES 10,000",
// //       department: "Colour",
// //       description: "Subtle T-section highlights for a natural sun-kissed effect (toner not included).",
// //       image: colourImage,
// //     },
// //     {
// //       name: "Highlights – Half Head",
// //       location: "Half Head",
// //       price: "KES 16,000",
// //       department: "Colour",
// //       description: "Balanced half-head highlights for added brightness and movement (toner not included).",
// //       image: colourImage,
// //     },
// //     {
// //       name: "Highlights – Full Head",
// //       location: "Full Head",
// //       price: "KES 30,000",
// //       department: "Colour",
// //       description: "Dramatic full-head highlights for bold, multidimensional color (toner not included).",
// //       image: colourImage,
// //     },
// //     {
// //       name: "Freehand Highlights",
// //       location: "",
// //       price: "from KES 20,000",
// //       department: "Colour",
// //       description: "Artistic freehand painting for customized, painterly highlight effects.",
// //       image: colourImage,
// //     },
// //     {
// //       name: "Creative Colour",
// //       location: "",
// //       price: "from KES 20,000",
// //       department: "Colour",
// //       description: "Innovative color techniques for unique, trend-forward looks and expressions.",
// //       image: colourImage,
// //     },
// //     {
// //       name: "Bleaching",
// //       location: "",
// //       price: "from KES 20,000",
// //       department: "Colour",
// //       description: "Safe bleaching process to prepare hair for vibrant or pastel shades.",
// //       image: colourImage,
// //     },
// //     {
// //       name: "Toner – Short",
// //       location: "Short Hair",
// //       price: "KES 8,000",
// //       department: "Colour",
// //       description: "Neutralizing toner for short hair to perfect your post-bleach shade.",
// //       image: colourImage,
// //     },
// //     {
// //       name: "Toner – Medium",
// //       location: "Medium Hair",
// //       price: "KES 12,000",
// //       department: "Colour",
// //       description: "Precision toner application for medium hair to achieve desired tones.",
// //       image: colourImage,
// //     },
// //     {
// //       name: "Toner – Long",
// //       location: "Long Hair",
// //       price: "KES 15,000",
// //       department: "Colour",
// //       description: "Comprehensive toning for long hair, ensuring uniform color correction.",
// //       image: colourImage,
// //     },
// //     {
// //       name: "Customized Hair Treatments",
// //       location: "",
// //       price: "TBC",
// //       department: "Add-on Hair Treatments",
// //       description: "Personalized treatment to address specific hair concerns like damage or dryness.",
// //       image: treatmentImage,
// //     },
// //   ];

// //   const departments = [
// //     { id: "All", label: "All Treatments" },
// //     { id: "Cutting & Styling", label: "Cutting & Styling" },
// //     { id: "Colour", label: "Colour" },
// //     { id: "Add-on Hair Treatments", label: "Add-on Treatments" },
// //   ];

// //   const filteredServices =
// //     selectedDepartment === "All"
// //       ? allServices
// //       : allServices.filter((service) => service.department === selectedDepartment);

// //   return (
// //     <div className="min-h-screen">
// //       <ServiceHero
// //         title="Hair Treatments"
// //         titleGradient="& Restoration"
// //         description="Advanced hair restoration treatments using global techniques and premium formulations for lasting results."
// //         image={treatmentsHero}
// //         imageAlt="Hair Treatments and restoration services"
// //       />

// //       {/* Introduction */}
// //       <section className="py-16 px-6 bg-white">
// //         <div className="container mx-auto max-w-4xl text-center">
// //           <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
// //             At Avya, we bring comprehensive hair treatment services to Nairobi.
// //             Whether you're seeking a fresh cut, vibrant color, or restorative care, our expert team
// //             uses advanced techniques and premium products to deliver exceptional results tailored to your unique hair needs.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Department Filter */}
// //       <section className="py-8 px-6 bg-[#595959]">
// //         <div className="container mx-auto max-w-6xl">
// //           <div className="flex flex-wrap justify-center gap-4">
// //             {departments.map((dept) => (
// //               <button
// //                 key={dept.id}
// //                 onClick={() => setSelectedDepartment(dept.id)}
// //                 className={`px-6 py-3 text-base font-medium tracking-wide transition-all ${
// //                   selectedDepartment === dept.id
// //                     ? "bg-white text-[#262626] border border-[#262626]"
// //                     : "bg-transparent text-white border border-white hover:bg-white hover:text-[#262626]"
// //                 }`}
// //               >
// //                 {dept.label}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services Grid */}
// //       <section className="py-20 px-6 bg-[#E2DBDF]/20">
// //         <div className="container mx-auto max-w-6xl">
// //           <div className="space-y-24">
// //             {filteredServices.map((service, index) => (
// //               <div
// //                 key={`${service.name}-${service.location}-${index}`}
// //                 className={`grid md:grid-cols-2 gap-12 items-center ${
// //                   index % 2 === 0 ? "" : "md:flex-row-reverse"
// //                 }`}
// //               >
// //                 {/* Image Side */}
// //                 <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
// //                   <div className="aspect-[4/3] bg-[#595959]/20 overflow-hidden">
// //                     <img
// //                       src={service.image || defaultImage}
// //                       alt={service.name}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Content Side */}
// //                 <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
// //                   <div className="space-y-4">
// //                     <div>
// //                       <p className="text-sm text-[#595959] uppercase tracking-widest mb-3">
// //                         {service.department}
// //                       </p>
// //                       <h3 className="text-3xl md:text-4xl font-medium text-[#262626] mb-2">
// //                         {service.name}
// //                       </h3>
// //                       {service.location && (
// //                         <p className="text-base text-[#262626] font-medium">{service.location}</p>
// //                       )}
// //                     </div>
// //                     <p className="text-lg text-[#262626] leading-relaxed">
// //                       {service.description}
// //                     </p>

// //                     {/* Price Table */}
// //                     <div className="pt-4 space-y-2">
// //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// //                         <span className="text-base font-medium text-[#262626]">Treatment</span>
// //                         <span className="text-base font-medium text-[#262626]">{service.name}</span>
// //                       </div>
// //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// //                         <span className="text-base font-medium text-[#262626]">Area</span>
// //                         <span className="text-base font-medium text-[#262626]">
// //                           {service.location || "Various"}
// //                         </span>
// //                       </div>
// //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// //                         <span className="text-base font-medium text-[#262626]">Price</span>
// //                         <span className="text-base font-medium text-[#262626]">{service.price}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Process Section */}
// //       <section className="py-20 px-6 bg-white">
// //         <div className="container mx-auto max-w-5xl">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl md:text-5xl font-medium text-[#262626] mb-4">How It Works</h2>
// //             <div className="w-24 h-[1px] bg-[#595959] mx-auto"></div>
// //           </div>
// //           <div className="grid md:grid-cols-4 gap-12">
// //             {[
// //               {
// //                 step: "01",
// //                 title: "Consultation",
// //                 description: "Comprehensive assessment to understand your concerns and goals",
// //               },
// //               {
// //                 step: "02",
// //                 title: "Custom Plan",
// //                 description: "Personalized treatment protocol designed for your needs",
// //               },
// //               {
// //                 step: "03",
// //                 title: "Treatment",
// //                 description: "Expert application of advanced therapies and technologies",
// //               },
// //               {
// //                 step: "04",
// //                 title: "Follow-Up",
// //                 description: "Ongoing support and adjustments for optimal results",
// //               },
// //             ].map((item) => (
// //               <div key={item.step} className="text-center">
// //                 <div className="text-5xl font-medium text-[#C1B5C6] mb-4">{item.step}</div>
// //                 <h3 className="text-2xl font-medium text-[#262626] mb-3">{item.title}</h3>
// //                 <p className="text-base text-[#262626] leading-relaxed">{item.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer Note */}
// //       <section className="py-16 px-6 bg-[#E2DBDF]/30">
// //         <div className="container mx-auto max-w-4xl text-center">
// //           <p className="text-base text-[#262626] leading-relaxed">
// //             <span className="font-medium">Please Note:</span> All treatments are consultation-based.
// //             Pricing and treatment plans will be customized during your initial consultation based on
// //             your specific needs, desired outcomes, and our expert assessment. Contact us to book your
// //             consultation and begin your transformation journey.
// //           </p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Treatments;
// import React from 'react';
// import { Button } from "@/components/ui/button";
// import ServiceHero from "@/components/ui/ServiceHero";
// import treatmentsHero from "@/assets/op5.png";
// import haircutImage from "@/assets/op.png"; 
// import colourImage from "@/assets/op1.png"; 
// import treatmentImage from "@/assets/op2.png"; 
// import defaultImage from "@/assets/op3.png";
// import haircut from "@/assets/Hair Treatment/haircut.jpg"
// import mencut from "@/assets/Hair Treatment/mencut.jpg"
// import fr from "@/assets/Hair Treatment/fr.jpg"
// import kd from "@/assets/Hair Treatment/kd.jpg"
// import wbd from "@/assets/Hair Treatment/wbd.jpg"
// import hs from "@/assets/Hair Treatment/hs.jpg"
// import sh from "@/assets/Hair Treatment/sh.jpg"
// import mh from "@/assets/Hair Treatment/mh.jpg"
// import lh from "@/assets/Hair Treatment/lh.jpg"
// import tsec from "@/assets/Hair Treatment/t-sec.jpg"
// import half from "@/assets/Hair Treatment/hlaf.jpg"
// import fh from "@/assets/Hair Treatment/fh.jpg"
// import fhh from "@/assets/Hair Treatment/fhh.jpg"
// import cc from "@/assets/Hair Treatment/cc.jpg"
// import ts from "@/assets/Hair Treatment/ts.jpg"

// const Treatments = () => {
//   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

//   const allServices = [
//     {
//       name: "Haircut",
//       location: "",
//       price: "KES 6,000",
//       department: "Cutting & Styling",
//       description: "Precision haircut tailored to your face shape and personal style for a fresh, modern look.",
//       image: haircut,
//     },
//     {
//       name: "Men's Haircut",
//       location: "",
//       price: "KES 4,500",
//       department: "Cutting & Styling",
//       description: "Professional men's cut focusing on clean lines and versatile styling options.",
//       image: mencut,
//     },
//     {
//       name: "Fringe Cut",
//       location: "",
//       price: "KES 2,000",
//       department: "Cutting & Styling",
//       description: "Quick and precise fringe trim to frame your face perfectly.",
//       image: fr,
//     },
//     {
//       name: "Kid's Haircut (under 12)",
//       location: "",
//       price: "KES 3,000",
//       department: "Cutting & Styling",
//       description: "Fun and gentle haircut for children, ensuring comfort and style.",
//       image: kd,
//     },
//     {
//       name: "Wash & Blow-Dry",
//       location: "",
//       price: "KES 4,000",
//       department: "Cutting & Styling",
//       description: "Refreshing wash followed by a smooth blow-dry for salon-fresh volume and shine.",
//       image: wbd,
//     },
//     {
//       name: "Hair Up (Event Styling)",
//       location: "",
//       price: "from KES 8,000",
//       department: "Cutting & Styling",
//       description: "Elegant updo styling for special events, customized to your gown and occasion.",
//       image: hs,
//     },
//     {
//       name: "Full Colour – Short",
//       location: "Short Hair",
//       price: "from KES 10,000",
//       department: "Colour",
//       description: "Vibrant full color application for short hair, achieving even coverage and tone.",
//       image: sh,
//     },
//     {
//       name: "Full Colour – Medium",
//       location: "Medium Hair",
//       price: "from KES 15,000",
//       department: "Colour",
//       description: "Rich full color for medium-length hair, enhancing depth and dimension.",
//       image: mh,
//     },
//     {
//       name: "Full Colour – Long",
//       location: "Long Hair",
//       price: "from KES 18,000",
//       department: "Colour",
//       description: "Seamless full color for long hair, ensuring consistent results from root to tip.",
//       image: lh,
//     },
//     {
//       name: "Highlights – T-Section",
//       location: "T-Section",
//       price: "KES 10,000",
//       department: "Colour",
//       description: "Subtle T-section highlights for a natural sun-kissed effect (toner not included).",
//       image: tsec,
//     },
//     {
//       name: "Highlights – Half Head",
//       location: "Half Head",
//       price: "KES 16,000",
//       department: "Colour",
//       description: "Balanced half-head highlights for added brightness and movement (toner not included).",
//       image: half,
//     },
//     {
//       name: "Highlights – Full Head",
//       location: "Full Head",
//       price: "KES 30,000",
//       department: "Colour",
//       description: "Dramatic full-head highlights for bold, multidimensional color (toner not included).",
//       image: fh,
//     },
//     {
//       name: "Freehand Highlights",
//       location: "",
//       price: "from KES 20,000",
//       department: "Colour",
//       description: "Artistic freehand painting for customized, painterly highlight effects.",
//       image: fhh,
//     },
//     {
//       name: "Creative Colour",
//       location: "",
//       price: "from KES 20,000",
//       department: "Colour",
//       description: "Innovative color techniques for unique, trend-forward looks and expressions.",
//       image: cc,
//     },
//     {
//       name: "Bleaching",
//       location: "",
//       price: "from KES 20,000",
//       department: "Colour",
//       description: "Safe bleaching process to prepare hair for vibrant or pastel shades.",
//       image: colourImage,
//     },
//     {
//       name: "Toner – Short",
//       location: "Short Hair",
//       price: "KES 8,000",
//       department: "Colour",
//       description: "Neutralizing toner for short hair to perfect your post-bleach shade.",
//       image: ts,
//     },
//     {
//       name: "Toner – Medium",
//       location: "Medium Hair",
//       price: "KES 12,000",
//       department: "Colour",
//       description: "Precision toner application for medium hair to achieve desired tones.",
//       image: colourImage,
//     },
//     {
//       name: "Toner – Long",
//       location: "Long Hair",
//       price: "KES 15,000",
//       department: "Colour",
//       description: "Comprehensive toning for long hair, ensuring uniform color correction.",
//       image: colourImage,
//     },
//     {
//       name: "Customized Hair Treatments",
//       location: "",
//       price: "TBC",
//       department: "Add-on Hair Treatments",
//       description: "Personalized treatment to address specific hair concerns like damage or dryness.",
//       image: treatmentImage,
//     },
//   ];

//   const departments = [
//     { id: "All", label: "All Treatments" },
//     { id: "Cutting & Styling", label: "Cutting & Styling" },
//     { id: "Colour", label: "Colour" },
//     { id: "Add-on Hair Treatments", label: "Add-on Treatments" },
//   ];

//   const filteredServices =
//     selectedDepartment === "All"
//       ? allServices
//       : allServices.filter((service) => service.department === selectedDepartment);

//   return (
//     <div className="min-h-screen">
//       <ServiceHero
//         title="Hair Treatments"
//         titleGradient="& Restoration"
//         description="Advanced hair restoration treatments using global techniques and premium formulations for lasting results."
//         image={treatmentsHero}
//         imageAlt="Hair Treatments and restoration services"
//       />

//       {/* Introduction */}
//       <section className="py-16 px-6 bg-white">
//         <div className="container mx-auto max-w-4xl text-center">
//           <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
//             At Avya, we bring comprehensive hair treatment services to Nairobi.
//             Whether you're seeking a fresh cut, vibrant color, or restorative care, our expert team
//             uses advanced techniques and premium products to deliver exceptional results tailored to your unique hair needs.
//           </p>
//         </div>
//       </section>

//       {/* Department Filter */}
//       <section className="py-8 px-6 bg-[#595959]">
//         <div className="container mx-auto max-w-6xl">
//           <div className="flex flex-wrap justify-center gap-4">
//             {departments.map((dept) => (
//               <button
//                 key={dept.id}
//                 onClick={() => setSelectedDepartment(dept.id)}
//                 className={`px-6 py-3 text-base font-medium tracking-wide transition-all duration-300 ${
//                   selectedDepartment === dept.id
//                     ? "bg-white text-[#262626] border border-[#262626] shadow-lg"
//                     : "bg-transparent text-white border border-white hover:bg-white hover:text-[#262626] hover:shadow-md"
//                 }`}
//               >
//                 {dept.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-20 px-6 bg-[#E2DBDF]/20">
//         <div className="container mx-auto max-w-6xl">
//           <div className="space-y-24">
//             {filteredServices.map((service, index) => (
//               <div
//                 key={`${service.name}-${service.location}-${index}`}
//                 className={`grid md:grid-cols-2 gap-12 items-center ${
//                   index % 2 === 0 ? "" : "md:flex-row-reverse"
//                 }`}
//               >
//                 {/* Image Side */}
//                 <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"} group`}>
//                   <div className="aspect-[4/3] bg-[#595959]/20 overflow-hidden relative shadow-lg">
//                     <img
//                       src={service.image || defaultImage}
//                       alt={service.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#262626]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   </div>
//                 </div>

//                 {/* Content Side */}
//                 <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
//                   <div className="space-y-4">
//                     <div>
//                       <p className="text-sm text-[#595959] uppercase tracking-widest mb-3 flex items-center gap-2">
//                         <span className="w-8 h-[1px] bg-[#595959]"></span>
//                         {service.department}
//                       </p>
//                       <h3 className="text-3xl md:text-4xl font-medium text-[#262626] mb-2 hover:text-[#595959] transition-colors duration-300">
//                         {service.name}
//                       </h3>
//                       {service.location && (
//                         <p className="text-base text-[#262626] font-medium">{service.location}</p>
//                       )}
//                     </div>
//                     <p className="text-lg text-[#262626] leading-relaxed">
//                       {service.description}
//                     </p>

//                     {/* Price Table */}
//                     <div className="pt-4 space-y-2 bg-white/50 p-6 rounded-sm shadow-sm">
//                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20 hover:border-[#595959]/40 transition-colors">
//                         <span className="text-base font-medium text-[#262626]">Treatment</span>
//                         <span className="text-base font-medium text-[#262626]">{service.name}</span>
//                       </div>
//                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20 hover:border-[#595959]/40 transition-colors">
//                         <span className="text-base font-medium text-[#262626]">Area</span>
//                         <span className="text-base font-medium text-[#262626]">
//                           {service.location || "Various"}
//                         </span>
//                       </div>
//                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20 hover:border-[#595959]/40 transition-colors">
//                         <span className="text-base font-medium text-[#262626]">Price</span>
//                         <span className="text-base font-medium text-[#262626]">{service.price}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Treatments;
import React from 'react';
import ServiceHero from "@/components/ui/ServiceHero";
import treatmentsHero from "@/assets/op5.png";

const Treatments = () => {
  const [selectedDepartment, setSelectedDepartment] = React.useState("All");

  const allServices = [
    {
      name: "Haircut",
      area: "Full",
      price: "from KES 6,000",
      department: "Cutting & Styling",
    },
    {
      name: "Men's Haircut",
      area: "Full",
      price: "from KES 4,500",
      department: "Cutting & Styling",
    },
    {
      name: "Fringe Cut",
      area: "Fringe Only",
      price: "from KES 2,000",
      department: "Cutting & Styling",
    },
    {
      name: "Kid's Haircut (under 12)",
      area: "Full",
      price: "from KES 3,000",
      department: "Cutting & Styling",
    },
    {
      name: "Wash & Blow-Dry",
      area: "Full",
      price: "from KES 4,000",
      department: "Cutting & Styling",
    },
    {
      name: "Hair Up (Event Styling)",
      area: "Full",
      price: "from KES 8,000",
      department: "Cutting & Styling",
    },
    {
      name: "Full Colour",
      area: "Short Hair",
      price: "from KES 10,000",
      department: "Colour",
    },
    {
      name: "Full Colour",
      area: "Medium Hair",
      price: "from KES 15,000",
      department: "Colour",
    },
    {
      name: "Full Colour",
      area: "Long Hair",
      price: "from KES 18,000",
      department: "Colour",
    },
    {
      name: "Highlights",
      area: "T-Section",
      price: "KES 10,000",
      department: "Colour",
    },
    {
      name: "Highlights",
      area: "Half Head",
      price: "KES 16,000",
      department: "Colour",
    },
    {
      name: "Highlights",
      area: "Full Head",
      price: "KES 30,000",
      department: "Colour",
    },
    {
      name: "Freehand Highlights",
      area: "Full",
      price: "from KES 20,000",
      department: "Colour",
    },
    {
      name: "Creative Colour",
      area: "Full",
      price: "from KES 20,000",
      department: "Colour",
    },
    {
      name: "Bleaching",
      area: "Full",
      price: "from KES 20,000",
      department: "Colour",
    },
    {
      name: "Toner",
      area: "Short Hair",
      price: "KES 8,000",
      department: "Colour",
    },
    {
      name: "Toner",
      area: "Medium Hair",
      price: "KES 12,000",
      department: "Colour",
    },
    {
      name: "Toner",
      area: "Long Hair",
      price: "KES 15,000",
      department: "Colour",
    },
    {
      name: "Customized Hair Treatments",
      area: "Various",
      price: "from KES 2,500",
      department: "Add-on Hair Treatments",
    },
  ];

  const departments = [
    { id: "All", label: "All Treatments" },
    { id: "Cutting & Styling", label: "Cutting & Styling" },
    { id: "Colour", label: "Colour" },
    { id: "Add-on Hair Treatments", label: "Add-on Treatments" },
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Hair Treatments"
        titleGradient="& Restoration"
        description="Advanced hair restoration treatments using global techniques and premium formulations for lasting results."
        image={treatmentsHero}
        imageAlt="Hair Treatments and restoration services"
      />

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
            At Avya, we bring hair treatment services to Nairobi.
            Whether you're seeking a fresh cut, vibrant color, or restorative care, our expert team
            uses advanced techniques and premium products to deliver exceptional results tailored to your unique hair needs.
          </p>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 px-6 bg-[#595959]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 text-base font-medium tracking-wide transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? "bg-white text-[#262626] border border-[#262626] shadow-lg"
                    : "bg-transparent text-white border border-white hover:bg-white hover:text-[#262626] hover:shadow-md"
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
                          <th className="text-right py-4 px-4 text-base font-medium text-[#262626]">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {deptServices.map((service, idx) => (
                          <tr 
                            key={`${service.name}-${service.area}-${idx}`}
                            className="border-b border-[#595959]/20 hover:bg-[#E2DBDF]/10 transition-colors"
                          >
                            <td className="py-4 px-4 text-base text-[#262626]">
                              {service.name}
                            </td>
                            <td className="py-4 px-4 text-base text-[#262626]">
                              {service.area}
                            </td>
                            <td className="py-4 px-4 text-base text-[#262626] text-right">
                              {service.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {dept.id === "Colour" && (
                    <p className="mt-6 text-sm text-[#595959] italic text-center">
                      Colour services such as T-section, half-head and full head highlights are inclusive of one single all-over toner application.
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

export default Treatments;