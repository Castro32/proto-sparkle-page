// // // // import { HeroSection } from "@/components/ui/ServiceHero";
// // // // import { ServiceCard } from "@/components/ui/ServiceCard";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Sparkles, Wind, Scissors, Palette, Crown, Star } from "lucide-react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import glamHero from "@/assets/glam-hero.jpg";

// // // // const Glam = () => {
// // // //   const navigate = useNavigate();

// // // //   const glamServices = [
// // // //     {
// // // //       title: "Blowouts & Silk Press",
// // // //       description: "Smooth, sleek, and shiny hair using professional heat styling techniques for a flawless finish.",
// // // //       icon: Wind
// // // //     },
// // // //     {
// // // //       title: "Event Styling & Updos",
// // // //       description: "Elegant styles for weddings, galas, and special occasions. Make every moment unforgettable.",
// // // //       icon: Crown
// // // //     },
// // // //     {
// // // //       title: "Extension Installations",
// // // //       description: "Tape-in, sew-in, and keratin extensions for volume, length, and natural-looking beauty.",
// // // //       icon: Scissors
// // // //     },
// // // //     {
// // // //       title: "Lace Front Wig Installation",
// // // //       description: "Professional wig installation with seamless blending for a natural, undetectable look.",
// // // //       icon: Star
// // // //     },
// // // //     {
// // // //       title: "Hair Color & Glossing",
// // // //       description: "From vibrant color transformations to subtle gloss treatments for enhanced shine and depth.",
// // // //       icon: Palette
// // // //     },
// // // //     {
// // // //       title: "Deep Conditioning",
// // // //       description: "Intensive moisture treatments and styling finishers to keep your hair healthy and vibrant.",
// // // //       icon: Sparkles
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen">
// // // //       {/* <HeroSection
// // // //         subtitle="Premium Glam Services"
// // // //         title="Confidence Starts With Great Hair"
// // // //         description="Luxurious styling services for every occasion, from everyday elegance to show-stopping glamour."
// // // //         imageSrc={glamHero}
// // // //         primaryCta={{
// // // //           text: "Book Your Glam Session",
// // // //           onClick: () => window.open("#booking", "_self")
// // // //         }}
// // // //         // secondaryCta={{
// // // //         //   text: "View Services",
// // // //         //   onClick: () => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
// // // //         // }}
// // // //       /> */}
// // // //       <HeroSection
// // // //         subtitle="Premium Glam Services"
// // // //         title="Confidence Starts With Great Hair"
// // // //         description="Luxurious styling services for every occasion, from everyday elegance to show-stopping glamour."
// // // //         imageSrc={glamHero}
// // // //       >
// // // //         <div className="flex flex-nowrap gap-2 sm:gap-4">
// // // //           <Button
// // // //             className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors mx-auto"
// // // //             size="lg"
// // // //             onClick={() => window.open("#booking", "_self")}
// // // //           >
// // // //             Book Your Glam Session
// // // //           </Button>
// // // //         </div>
// // // //       </HeroSection>

// // // //       {/* Intro Section */}
// // // //       <section className="py-24 px-6">
// // // //         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
// // // //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
// // // //             Where Artistry Meets Excellence
// // // //           </h2>
// // // //           <p className="text-xl leading-relaxed text-muted-foreground font-montserrat">
// // // //             Our glam services blend creativity with precision, ensuring every style is perfectly executed. Whether you're preparing for a special event or want to elevate your everyday look, our expert stylists bring your vision to life.
// // // //           </p>
// // // //         </div>
// // // //       </section>

// // // //       {/* Services Grid */}
// // // //       <section className="py-24 px-6 bg-card">
// // // //         <div className="container mx-auto max-w-7xl">
// // // //           <div className="text-center mb-16 animate-fade-in">
// // // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// // // //               Our Glam Services
// // // //             </h2>
// // // //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
// // // //               Professional styling and finishing services for flawless results
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //             {glamServices.map((service, index) => (
// // // //               <div
// // // //                 key={service.title}
// // // //                 className="animate-fade-up"
// // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // //               >
// // // //                 <ServiceCard
// // // //                   title={service.title}
// // // //                   description={service.description}
// // // //                   icon={service.icon}
// // // //                   className="h-full"
// // // //                 />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Signature Looks */}
// // // //       <section className="py-24 px-6 gradient-secondary">
// // // //         <div className="container mx-auto max-w-7xl">
// // // //           <div className="text-center mb-16 animate-fade-in">
// // // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
// // // //               Signature Looks
// // // //             </h2>
// // // //             <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
// // // //               Popular styles our clients love, customized to suit your unique features
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //             {[
// // // //               {
// // // //                 title: "The Red Carpet",
// // // //                 description: "Hollywood-worthy waves and volume for show-stopping glamour",
// // // //                 features: ["Volumized roots", "Soft curls", "High shine finish"]
// // // //               },
// // // //               {
// // // //                 title: "Sleek Sophistication",
// // // //                 description: "Ultra-smooth silk press with mirror-like shine",
// // // //                 features: ["Bone straight finish", "Heat protection", "Frizz-free results"]
// // // //               },
// // // //               {
// // // //                 title: "Bridal Elegance",
// // // //                 description: "Timeless updos and romantic styles for your special day",
// // // //                 features: ["Custom design", "Long-lasting hold", "Trial session included"]
// // // //               }
// // // //             ].map((look, index) => (
// // // //               <div
// // // //                 key={look.title}
// // // //                 className="bg-card rounded-lg p-8 shadow-elegant animate-fade-up"
// // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // //               >
// // // //                 <h3 className="text-2xl font-light mb-3 text-foreground">
// // // //                   {look.title}
// // // //                 </h3>
// // // //                 <p className="text-muted-foreground mb-6 leading-relaxed">
// // // //                   {look.description}
// // // //                 </p>
// // // //                 <ul className="space-y-2">
// // // //                   {look.features.map((feature) => (
// // // //                     <li key={feature} className="flex items-center text-sm text-muted-foreground">
// // // //                       <Star className="h-4 w-4 mr-2 text-secondary" />
// // // //                       {feature}
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Process Section */}
// // // //       <section className="py-24 px-6">
// // // //         <div className="container mx-auto max-w-6xl">
// // // //           <div className="text-center mb-16 animate-fade-in">
// // // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// // // //               The Avya Glam Experience
// // // //             </h2>
// // // //             <p className="text-lg text-muted-foreground font-montserrat">
// // // //               What to expect during your styling session
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // // //             {[
// // // //               {
// // // //                 step: "Consultation",
// // // //                 description: "We discuss your vision, assess your hair, and recommend the best approach for your desired look."
// // // //               },
// // // //               {
// // // //                 step: "Preparation",
// // // //                 description: "Hair is cleansed, conditioned, and prepped with professional products for optimal styling."
// // // //               },
// // // //               {
// // // //                 step: "Styling",
// // // //                 description: "Expert techniques and premium tools are used to create your perfect style with precision."
// // // //               },
// // // //               {
// // // //                 step: "Finishing Touches",
// // // //                 description: "Final details, products, and maintenance tips to help you maintain your gorgeous look."
// // // //               }
// // // //             ].map((item, index) => (
// // // //               <div
// // // //                 key={item.step}
// // // //                 className="flex gap-6 p-8 rounded-lg border border-accent bg-card shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
// // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // //               >
// // // //                 <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
// // // //                   <Sparkles className="h-8 w-8 text-primary" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h3 className="text-xl font-medium mb-2 text-foreground">
// // // //                     {item.step}
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
// // // //       <section className="py-24 px-6 bg-card">
// // // //         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
// // // //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
// // // //             Ready for Your Transformation?
// // // //           </h2>
// // // //           <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-montserrat">
// // // //             Book your glam session and experience the confidence that comes with great hair
// // // //           </p>
// // // //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // // //             <Button className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors" size="lg">
// // // //               Book Now
// // // //             </Button>
// // // //             {/* <Button variant="premium" size="lg" onClick={() => navigate("/services")}>
// // // //               Explore All Services
// // // //             </Button> */}
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Glam;
// // // import { HeroSection } from "@/components/ui/ServiceHero";
// // // import { ServiceCard } from "@/components/ui/ServiceCard";
// // // import { Button } from "@/components/ui/button";
// // // import { Sparkles, Wind, Scissors, Palette, Crown, Star } from "lucide-react";
// // // import glamHero from "@/assets/glam-hero.jpg";

// // // const Glam = () => {
// // //   const glamServices = [
// // //     {
// // //       title: "Blowouts & Silk Press",
// // //       description: "Smooth, sleek, and shiny hair using professional heat styling techniques for a flawless finish.",
// // //       icon: Wind
// // //     },
// // //     {
// // //       title: "Event Styling & Updos",
// // //       description: "Elegant styles for weddings, galas, and special occasions. Make every moment unforgettable.",
// // //       icon: Crown
// // //     },
// // //     {
// // //       title: "Extension Installations",
// // //       description: "Tape-in, sew-in, and keratin extensions for volume, length, and natural-looking beauty.",
// // //       icon: Scissors
// // //     },
// // //     {
// // //       title: "Lace Front Wig Installation",
// // //       description: "Professional wig installation with seamless blending for a natural, undetectable look.",
// // //       icon: Star
// // //     },
// // //     {
// // //       title: "Hair Color & Glossing",
// // //       description: "From vibrant color transformations to subtle gloss treatments for enhanced shine and depth.",
// // //       icon: Palette
// // //     },
// // //     {
// // //       title: "Deep Conditioning",
// // //       description: "Intensive moisture treatments and styling finishers to keep your hair healthy and vibrant.",
// // //       icon: Sparkles
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen">
// // //       <HeroSection
// // //         subtitle="Premium Glam Services"
// // //         title="Confidence Starts With Great Hair"
// // //         description="Luxurious styling services for every occasion, from everyday elegance to show-stopping glamour."
// // //         imageSrc={glamHero}
// // //       >
// // //         <Button
// // //           className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 h-14 text-base font-medium tracking-wide rounded-lg transition-all hover:shadow-elegant"
// // //           onClick={() => window.open("#booking", "_self")}
// // //         >
// // //           Book Your Glam Session
// // //         </Button>
// // //       </HeroSection>

// // //       {/* Intro Section */}
// // //       <section className="py-24 px-6">
// // //         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
// // //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
// // //             Where Artistry Meets Excellence
// // //           </h2>
// // //           <p className="text-xl leading-relaxed text-muted-foreground font-montserrat">
// // //             Our glam services blend creativity with precision, ensuring every style is perfectly executed. Whether you're preparing for a special event or want to elevate your everyday look, our expert stylists bring your vision to life.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* Services Grid */}
// // //       <section className="py-24 px-6 gradient-secondary">
// // //         <div className="container mx-auto max-w-7xl">
// // //           <div className="text-center mb-16 animate-fade-in">
// // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// // //               Our Glam Services
// // //             </h2>
// // //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
// // //               Professional styling and finishing services for flawless results
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {glamServices.map((service, index) => (
// // //               <div
// // //                 key={service.title}
// // //                 className="animate-fade-up"
// // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // //               >
// // //                 <ServiceCard
// // //                   title={service.title}
// // //                   description={service.description}
// // //                   icon={service.icon}
// // //                   className="h-full"
// // //                 />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Signature Looks */}
// // //       <section className="py-24 px-6 bg-card">
// // //         <div className="container mx-auto max-w-5xl">
// // //           <div className="text-center mb-16 animate-fade-in">
// // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
// // //               Signature Looks
// // //             </h2>
// // //             <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
// // //               Popular styles our clients love, customized to suit your unique features
// // //             </p>
// // //           </div>

// // //           <div className="space-y-12">
// // //             {[
// // //               {
// // //                 title: "The Red Carpet",
// // //                 description: "Hollywood-worthy waves and volume for show-stopping glamour",
// // //                 features: ["Volumized roots", "Soft curls", "High shine finish"]
// // //               },
// // //               {
// // //                 title: "Sleek Sophistication",
// // //                 description: "Ultra-smooth silk press with mirror-like shine",
// // //                 features: ["Bone straight finish", "Heat protection", "Frizz-free results"]
// // //               },
// // //               {
// // //                 title: "Bridal Elegance",
// // //                 description: "Timeless updos and romantic styles for your special day",
// // //                 features: ["Custom design", "Long-lasting hold", "Trial session included"]
// // //               }
// // //             ].map((look, index) => (
// // //               <div
// // //                 key={look.title}
// // //                 className="flex gap-8 items-start animate-fade-up"
// // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // //               >
// // //                 <div className="flex-shrink-0 w-2 bg-secondary rounded-full h-full min-h-[100px]" />
// // //                 <div>
// // //                   <h3 className="text-2xl font-light mb-3 text-primary font-hatton">
// // //                     {look.title}
// // //                   </h3>
// // //                   <p className="text-primary/80 mb-4 leading-relaxed font-montserrat">
// // //                     {look.description}
// // //                   </p>
// // //                   <div className="flex flex-wrap gap-3">
// // //                     {look.features.map((feature) => (
// // //                       <span key={feature} className="text-sm text-primary/70 font-montserrat">
// // //                         {feature}
// // //                       </span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Process Section */}
// // //       <section className="py-24 px-6 gradient-secondary">
// // //         <div className="container mx-auto max-w-4xl">
// // //           <div className="text-center mb-16 animate-fade-in">
// // //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// // //               The Avya Glam Experience
// // //             </h2>
// // //             <p className="text-lg text-muted-foreground font-montserrat">
// // //               What to expect during your styling session
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
// // //             {[
// // //               {
// // //                 step: "Consultation",
// // //                 description: "We discuss your vision, assess your hair, and recommend the best approach for your desired look."
// // //               },
// // //               {
// // //                 step: "Preparation",
// // //                 description: "Hair is cleansed, conditioned, and prepped with professional products for optimal styling."
// // //               },
// // //               {
// // //                 step: "Styling",
// // //                 description: "Expert techniques and premium tools are used to create your perfect style with precision."
// // //               },
// // //               {
// // //                 step: "Finishing Touches",
// // //                 description: "Final details, products, and maintenance tips to help you maintain your gorgeous look."
// // //               }
// // //             ].map((item, index) => (
// // //               <div
// // //                 key={item.step}
// // //                 className="flex gap-4 animate-fade-up"
// // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // //               >
// // //                 <Sparkles className="flex-shrink-0 h-6 w-6 text-secondary text-white mt-1" />
// // //                 <div>
// // //                   <h3 className="text-xl font-medium mb-2 text-foreground font-hatton">
// // //                     {item.step}
// // //                   </h3>
// // //                   <p className="text-muted-foreground leading-relaxed font-montserrat">
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
// // //             Ready for Your Transformation?
// // //           </h2>
// // //           <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-montserrat">
// // //             Book your glam session and experience the confidence that comes with great hair
// // //           </p>
// // //           <Button 
// // //             className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 h-14 text-base font-medium tracking-wide rounded-lg transition-all hover:shadow-elegant"
// // //             onClick={() => window.open("#booking", "_self")}
// // //           >
// // //             Book Now
// // //           </Button>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Glam;
// // import ServiceHero from "@/components/ui/ServiceHero";
// // import { ServiceCard } from "@/components/ui/ServiceCard";
// // import { Button } from "@/components/ui/button";
// // import { Users, Heart, Clock, Zap, Leaf, Star } from "lucide-react";
// // import sixHandsHero from "@/assets/op3.png";

// // const Glam = () => {
// //   const sixHandsServices = [
// //     {
// //       title: "Synchronized Manicure & Pedicure",
// //       description: "Three technicians deliver flawless nails with precision and care, saving you precious time.",
// //       icon: Heart
// //     },
// //     {
// //       title: "Eyelash Extension Harmony",
// //       description: "Lush, voluminous lashes applied seamlessly while your hands and feet are pampered.",
// //       icon: Star
// //     },
// //     {
// //       title: "Triple Therapist Massage",
// //       description: "A rejuvenating experience where three experts target tension for ultimate relaxation.",
// //       icon: Leaf
// //     },
// //     {
// //       title: "Customized Beauty Sync",
// //       description: "Tailor your session with add-ons like facials or brow shaping for a full glow-up.",
// //       icon: Zap
// //     },
// //     {
// //       title: "Efficiency & Luxury Blend",
// //       description: "High-end products and techniques ensure spa-quality results in half the time.",
// //       icon: Clock
// //     },
// //     {
// //       title: "Holistic Rejuvenation",
// //       description: "From circulation boost to stress relief, feel transformed from head to toe.",
// //       icon: Users
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen">
// //       <ServiceHero
// //         title="Signature Six Hands"
// //         titleGradient="Service"
// //         description="Experience luxury and efficiency with three expert technicians delivering manicures, pedicures, and more in perfect harmony."
// //         image={sixHandsHero}
// //         imageAlt="Six Hands Service at Avya Beauty"
// //       />

// //       {/* Intro Section */}
// //       <section className="py-24 px-6">
// //         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
// //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
// //             Ultimate Luxury Meets Unmatched Efficiency
// //           </h2>
// //           <p className="text-xl leading-relaxed text-muted-foreground font-montserrat">
// //             Experience the ultimate in luxury and efficiency with our Six Hands Service - a signature offering at Avya Beauty Salon. This unique treatment brings together three expert technicians working in perfect harmony to deliver a manicure, pedicure, and eyelash extension all at the same time. Whether you're short on time or simply want to indulge in a synchronized beauty experience, this service is designed to pamper you from head to toe - without compromising on quality.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Services Grid */}
// //       <section className="py-24 px-6 gradient-secondary">
// //         <div className="container mx-auto max-w-7xl">
// //           <div className="text-center mb-16 animate-fade-in">
// //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// //               Our Six Hands Offerings
// //             </h2>
// //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
// //               Tailored treatments for beauty and relaxation, executed with synchronized precision
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {sixHandsServices.map((service, index) => (
// //               <div
// //                 key={service.title}
// //                 className="animate-fade-up"
// //                 style={{ animationDelay: `${index * 0.1}s` }}
// //               >
// //                 <ServiceCard
// //                   title={service.title}
// //                   description={service.description}
// //                   icon={service.icon}
// //                   className="h-full"
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Signature Experiences */}
// //       <section className="py-24 px-6 bg-card">
// //         <div className="container mx-auto max-w-5xl">
// //           <div className="text-center mb-16 animate-fade-in">
// //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
// //               Signature Experiences
// //             </h2>
// //             <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
// //               Beloved treatments customized for your ultimate pampering session
// //             </p>
// //           </div>

// //           <div className="space-y-12">
// //             {[
// //               {
// //                 title: "Beauty Trifecta",
// //                 description: "Manicure, pedicure, and lashes in one luxurious flow",
// //                 features: ["Flawless gel polish", "Volume lash sets", "Cuticle care"]
// //               },
// //               {
// //                 title: "Relaxation Symphony",
// //                 description: "Three therapists easing every knot for deep renewal",
// //                 features: ["Full-body focus", "Aromatherapy oils", "Scalp massage"]
// //               },
// //               {
// //                 title: "Time-Saver Glow",
// //                 description: "Quick yet indulgent session for the on-the-go beauty lover",
// //                 features: ["Express duration", "Premium products", "Post-care kit"]
// //               }
// //             ].map((experience, index) => (
// //               <div
// //                 key={experience.title}
// //                 className="flex gap-8 items-start animate-fade-up"
// //                 style={{ animationDelay: `${index * 0.1}s` }}
// //               >
// //                 <div className="flex-shrink-0 w-2 bg-secondary rounded-full h-full min-h-[100px]" />
// //                 <div>
// //                   <h3 className="text-2xl font-light mb-3 text-primary font-hatton">
// //                     {experience.title}
// //                   </h3>
// //                   <p className="text-primary/80 mb-4 leading-relaxed font-montserrat">
// //                     {experience.description}
// //                   </p>
// //                   <div className="flex flex-wrap gap-3">
// //                     {experience.features.map((feature) => (
// //                       <span key={feature} className="text-sm text-primary/70 font-montserrat">
// //                         {feature}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Process Section */}
// //       <section className="py-24 px-6 gradient-secondary">
// //         <div className="container mx-auto max-w-4xl">
// //           <div className="text-center mb-16 animate-fade-in">
// //             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
// //               The Avya Six Hands Journey
// //             </h2>
// //             <p className="text-lg text-muted-foreground font-montserrat">
// //               What to expect in your synchronized session
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
// //             {[
// //               {
// //                 step: "Personalized Consultation",
// //                 description: "Discuss your goals and preferences to customize your triple-treatment experience."
// //               },
// //               {
// //                 step: "Synchronized Prep",
// //                 description: "Technicians prepare your skin, nails, and lashes with gentle, nourishing products."
// //               },
// //               {
// //                 step: "Harmonized Treatment",
// //                 description: "Three experts work in unison, applying techniques for flawless, efficient results."
// //               },
// //               {
// //                 step: "Luxurious Finish",
// //                 description: "Relax with final touches, aftercare advice, and a touch of indulgence."
// //               }
// //             ].map((item, index) => (
// //               <div
// //                 key={item.step}
// //                 className="flex gap-4 animate-fade-up"
// //                 style={{ animationDelay: `${index * 0.1}s` }}
// //               >
// //                 <Users className="flex-shrink-0 h-6 w-6 text-secondary text-white mt-1" />
// //                 <div>
// //                   <h3 className="text-xl font-medium mb-2 text-foreground font-hatton">
// //                     {item.step}
// //                   </h3>
// //                   <p className="text-muted-foreground leading-relaxed font-montserrat">
// //                     {item.description}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-24 px-6 bg-card">
// //         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
// //           <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
// //             Ready to Embrace the Power of Three?
// //           </h2>
// //           <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-montserrat">
// //             Looking for relaxation instead? Our Six Hands Service can also be customized as a synchronous massage, where three therapists work together to ease tension, improve circulation, and leave you feeling deeply rejuvenated. Indulge in the power of three - because at Avya, your time and beauty deserve more than ordinary. Book now and transform your routine.
// //           </p>
// //           <Button 
// //             className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 h-14 text-base font-medium tracking-wide rounded-lg transition-all hover:shadow-elegant"
// //             onClick={() => window.open("#booking", "_self")}
// //           >
// //             Book Now
// //           </Button>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Glam;
// import React from 'react';
// import { Button } from "@/components/ui/button";
// import ServiceHero from "@/components/ui/ServiceHero";
// import sixHandsHero from "@/assets/op3.png";
// // Import service images (reuse or placeholder; add more as needed)
// import faceCardioImage from "@/assets/op.png"; // Placeholder for Face Cardio
// import faceHIITImage from "@/assets/op1.png"; // Placeholder for Face HIIT
// import resetRecoverImage from "@/assets/op2.png"; // Placeholder for Reset Recover
// import faceReformerImage from "@/assets/op3.png"; // Placeholder for Face Reformer
// import eyeTreatmentImage from "@/assets/op4.png"; // Placeholder for Eye Treatment
// import radioFrequencyImage from "@/assets/op5.png"; // Placeholder for Radio Frequency
// import photoTherapyImage from "@/assets/op.png"; // Placeholder for Photo Therapy
// import ultrasoundImage from "@/assets/op1.png"; // Placeholder for Ultrasound
// import deepCleansingImage from "@/assets/op2.png"; // Placeholder for Deep Cleansing
// import buccalMassageImage from "@/assets/op3.png"; // Placeholder for Buccal Massage
// import headMassageImage from "@/assets/op4.png"; // Placeholder for Head Massage
// import neckShoulderImage from "@/assets/op5.png"; // Placeholder for Neck & Shoulder
// import oxygenTherapyImage from "@/assets/op.png"; // Placeholder for Oxygen Therapy
// import defaultImage from "@/assets/op3.png";

// const Glam = () => {
//   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

//   const allServices = [
//     {
//       name: "Face Cardio",
//       location: "",
//       price: "KES 20,000",
//       department: "Face Fitness",
//       description: "Energizing facial workout using specialized tools to boost circulation and sculpt facial contours.",
//       image: faceCardioImage,
//     },
//     {
//       name: "Face HIIT",
//       location: "",
//       price: "KES 20,000",
//       department: "Face Fitness",
//       description: "High-intensity interval training for the face, targeting muscle toning and skin firmness.",
//       image: faceHIITImage,
//     },
//     {
//       name: "Reset Recover",
//       location: "",
//       price: "KES 33,000",
//       department: "Face Fitness",
//       description: "Restorative session to recover and rejuvenate facial muscles post-workout or stress.",
//       image: resetRecoverImage,
//     },
//     {
//       name: "Face Reformer",
//       location: "",
//       price: "KES 45,000",
//       department: "Face Fitness",
//       description: "Advanced reformer-based exercises for comprehensive facial alignment and strengthening.",
//       image: faceReformerImage,
//     },
//     {
//       name: "Eye Treatment",
//       location: "",
//       price: "KES 7,000",
//       department: "Face Fitness Add-ons",
//       description: "Targeted therapy to reduce puffiness, dark circles, and fine lines around the eyes.",
//       image: eyeTreatmentImage,
//     },
//     {
//       name: "Radio Frequency (Partial Face)",
//       location: "",
//       price: "KES 14,000 (TBC)",
//       department: "Face Fitness Add-ons",
//       description: "Non-invasive RF energy to tighten skin in specific facial zones for a lifted appearance.",
//       image: radioFrequencyImage,
//     },
//     {
//       name: "Radio Frequency (Full Face)",
//       location: "",
//       price: "KES 24,000 (TBC)",
//       department: "Face Fitness Add-ons",
//       description: "Full-face RF treatment to stimulate collagen and improve overall skin elasticity.",
//       image: radioFrequencyImage,
//     },
//     {
//       name: "Photo Therapy Lights",
//       location: "",
//       price: "KES 8,000",
//       department: "Face Fitness Add-ons",
//       description: "LED light therapy to address acne, aging, and pigmentation for radiant skin.",
//       image: photoTherapyImage,
//     },
//     {
//       name: "Ultrasound Treatment",
//       location: "",
//       price: "KES 10,000",
//       department: "Face Fitness Add-ons",
//       description: "Deep-penetrating ultrasound waves to enhance product absorption and skin renewal.",
//       image: ultrasoundImage,
//     },
//     {
//       name: "Deep Cleansing Facial",
//       location: "",
//       price: "KES 9,000",
//       department: "Face Fitness Add-ons",
//       description: "Thorough cleansing to remove impurities and prepare skin for optimal fitness results.",
//       image: deepCleansingImage,
//     },
//     {
//       name: "Buccal Massage",
//       location: "",
//       price: "KES 8,000",
//       department: "Face Fitness Add-ons",
//       description: "Intra-oral massage to release tension in jaw muscles and define facial contours.",
//       image: buccalMassageImage,
//     },
//     {
//       name: "Head Massage",
//       location: "",
//       price: "KES 3,000",
//       department: "Face Fitness Add-ons",
//       description: "Soothing scalp and head massage to promote relaxation and improve blood flow.",
//       image: headMassageImage,
//     },
//     {
//       name: "Neck & Shoulder Massage",
//       location: "",
//       price: "KES 3,000",
//       department: "Face Fitness Add-ons",
//       description: "Targeted massage to alleviate tension and enhance posture for a sculpted neckline.",
//       image: neckShoulderImage,
//     },
//     {
//       name: "Oxygen Therapy",
//       location: "",
//       price: "KES 12,000",
//       department: "Face Fitness Add-ons",
//       description: "Infusion of oxygen with vitamins to hydrate, detoxify, and brighten the complexion.",
//       image: oxygenTherapyImage,
//     },
//   ];

//   const departments = [
//     { id: "All", label: "All Services" },
//     { id: "Face Fitness", label: "Face Fitness" },
//     { id: "Face Fitness Add-ons", label: "Add-ons" },
//   ];

//   const filteredServices =
//     selectedDepartment === "All"
//       ? allServices
//       : allServices.filter((service) => service.department === selectedDepartment);

//   return (
//     <div className="min-h-screen">
//       <ServiceHero
//         title="Six Hands Rituals"
//         titleGradient="& Face Fitness"
//         description="Experience synchronized luxury with our Face Fitness rituals, combining targeted exercises and add-ons for sculpted, rejuvenated skin."
//         image={sixHandsHero}
//         imageAlt="Six Hands Rituals and Face Fitness services"
//       />

//       {/* Introduction */}
//       <section className="py-16 px-6 bg-white">
//         <div className="container mx-auto max-w-4xl text-center">
//           <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
//             At Avya, we elevate face fitness with our Six Hands Rituals in Nairobi.
//             Our expert therapists deliver dynamic facial workouts and therapeutic add-ons
//             using advanced techniques to tone muscles, boost circulation, and achieve a naturally lifted glow.
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
//                 className={`px-6 py-3 text-base font-medium tracking-wide transition-all ${
//                   selectedDepartment === dept.id
//                     ? "bg-white text-[#262626] border border-[#262626]"
//                     : "bg-transparent text-white border border-white hover:bg-white hover:text-[#262626]"
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
//                 <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
//                   <div className="aspect-[4/3] bg-[#595959]/20 rounded-sm overflow-hidden">
//                     <img
//                       src={service.image || defaultImage}
//                       alt={service.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Content Side */}
//                 <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
//                   <div className="space-y-4">
//                     <div>
//                       <p className="text-sm text-[#595959] uppercase tracking-widest mb-3">
//                         {service.department}
//                       </p>
//                       <h3 className="text-3xl md:text-4xl font-medium text-[#262626] mb-2">
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
//                     <div className="pt-4 space-y-2">
//                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
//                         <span className="text-base font-medium text-[#262626]">Treatment</span>
//                         <span className="text-base font-medium text-[#262626]">{service.name}</span>
//                       </div>
//                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
//                         <span className="text-base font-medium text-[#262626]">Area</span>
//                         <span className="text-base font-medium text-[#262626]">
//                           {service.location || "Various"}
//                         </span>
//                       </div>
//                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
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

// export default Glam;
import React from "react";
import ServiceHero from "@/components/ui/ServiceHero";
import sixHandsHero from "@/assets/op3.png";

const Glam = () => {
  const [selectedDepartment, setSelectedDepartment] = React.useState("All");

  const allServices = [
    {
      name: "Face Cardio",
      location: "",
      price: "KES 20,000",
      department: "Face Fitness",
      description: "Energizing facial workout using specialized tools to boost circulation and sculpt facial contours.",
    },
    {
      name: "Face HIIT",
      location: "",
      price: "KES 20,000",
      department: "Face Fitness",
      description: "High-intensity interval training for the face, targeting muscle toning and skin firmness.",
    },
    {
      name: "Reset Recover",
      location: "",
      price: "KES 33,000",
      department: "Face Fitness",
      description: "Restorative session to recover and rejuvenate facial muscles post-workout or stress.",
    },
    {
      name: "Face Reformer",
      location: "",
      price: "KES 45,000",
      department: "Face Fitness",
      description: "Advanced reformer-based exercises for comprehensive facial alignment and strengthening.",
    },
    {
      name: "Eye Treatment",
      location: "",
      price: "KES 7,000",
      department: "Face Fitness Add-ons",
      description: "Targeted therapy to reduce puffiness, dark circles, and fine lines around the eyes.",
    },
    {
      name: "Radio Frequency (Partial Face)",
      location: "",
      price: "KES 14,000 (TBC)",
      department: "Face Fitness Add-ons",
      description: "Non-invasive RF energy to tighten skin in specific facial zones for a lifted appearance.",
    },
    {
      name: "Radio Frequency (Full Face)",
      location: "",
      price: "KES 24,000 (TBC)",
      department: "Face Fitness Add-ons",
      description: "Full-face RF treatment to stimulate collagen and improve overall skin elasticity.",
    },
    {
      name: "Photo Therapy Lights",
      location: "",
      price: "KES 8,000",
      department: "Face Fitness Add-ons",
      description: "LED light therapy to address acne, aging, and pigmentation for radiant skin.",
    },
    {
      name: "Ultrasound Treatment",
      location: "",
      price: "KES 10,000",
      department: "Face Fitness Add-ons",
      description: "Deep-penetrating ultrasound waves to enhance product absorption and skin renewal.",
    },
    {
      name: "Deep Cleansing Facial",
      location: "",
      price: "KES 9,000",
      department: "Face Fitness Add-ons",
      description: "Thorough cleansing to remove impurities and prepare skin for optimal fitness results.",
    },
    {
      name: "Buccal Massage",
      location: "",
      price: "KES 8,000",
      department: "Face Fitness Add-ons",
      description: "Intra-oral massage to release tension in jaw muscles and define facial contours.",
    },
    {
      name: "Head Massage",
      location: "",
      price: "KES 3,000",
      department: "Face Fitness Add-ons",
      description: "Soothing scalp and head massage to promote relaxation and improve blood flow.",
    },
    {
      name: "Neck & Shoulder Massage",
      location: "",
      price: "KES 3,000",
      department: "Face Fitness Add-ons",
      description: "Targeted massage to alleviate tension and enhance posture for a sculpted neckline.",
    },
    {
      name: "Oxygen Therapy",
      location: "",
      price: "KES 12,000",
      department: "Face Fitness Add-ons",
      description: "Infusion of oxygen with vitamins to hydrate, detoxify, and brighten the complexion.",
    },
  ];

  const departments = [
    { id: "All", label: "All Services" },
    { id: "Face Fitness", label: "Face Fitness" },
    { id: "Face Fitness Add-ons", label: "Add-ons" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="Six Hands Rituals"
        titleGradient="& Face Fitness"
        description="Experience synchronized luxury with our Face Fitness rituals, combining targeted exercises and add-ons for sculpted, rejuvenated skin."
        image={sixHandsHero}
        imageAlt="Six Hands Rituals and Face Fitness services"
      />

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
            At Avya, we elevate face fitness with our Six Hands Rituals in Nairobi.
            Our expert therapists deliver dynamic facial workouts and therapeutic add-ons
            using advanced techniques to tone muscles, boost circulation, and achieve a naturally lifted glow.
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
                className={`px-6 py-3 text-base font-medium tracking-wide transition-all ${
                  selectedDepartment === dept.id
                    ? "bg-white text-[#262626] border border-[#262626]"
                    : "bg-transparent text-white border border-white hover:bg-white hover:text-[#262626]"
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
                            key={`${service.name}-${service.location}-${idx}`}
                            className="border-b border-[#595959]/20 hover:bg-[#E2DBDF]/10 transition-colors"
                          >
                            <td className="py-4 px-4 text-base text-[#262626]">
                              {service.name}
                            </td>
                            <td className="py-4 px-4 text-base text-[#262626]">
                              {service.location || "N/A"}
                            </td>
                            <td className="py-4 px-4 text-base text-[#262626] text-right">
                              {service.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Optional: Add department-specific notes */}
                  {dept.id === "Face Fitness" && (
                    <p className="mt-6 text-sm text-[#595959] italic text-center">
                      All Face Fitness sessions are tailored to your skin type and goals.
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

export default Glam;
