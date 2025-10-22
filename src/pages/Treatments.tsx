// import { HeroSection } from "@/components/ui/ServiceHero";
// import { ServiceCard } from "@/components/ui/ServiceCard";
// import { Button } from "@/components/ui/button";
// import { Droplets, Shield, Leaf, Zap, Heart, Sparkles } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import treatmentsHero from "@/assets/treatments-hero.jpg";

// const Treatments = () => {
//   const navigate = useNavigate();

//   const treatments = [
//     {
//       title: "Nanoplastia",
//       description: "Advanced smoothing treatment that transforms frizzy, damaged hair into silky, manageable perfection.",
//       icon: Sparkles
//     },
//     {
//       title: "Hair Botox",
//       description: "Deep conditioning treatment that fills hair fibers, eliminates frizz, and restores youthful shine.",
//       icon: Zap
//     },
//     {
//       title: "Cold Hair Recovery",
//       description: "Innovative cold therapy technique that repairs extreme damage without heat, preserving hair integrity.",
//       icon: Shield
//     },
//     {
//       title: "Olaplex & K18",
//       description: "Professional bond-building treatments that repair broken hair bonds at the molecular level.",
//       icon: Droplets
//     },
//     {
//       title: "Protein Treatments",
//       description: "Targeted protein therapy to strengthen weak, brittle hair and restore structural integrity.",
//       icon: Leaf
//     },
//     {
//       title: "Moisture Therapy",
//       description: "Deep hydration treatments that restore moisture balance and improve elasticity for healthier hair.",
//       icon: Heart
//     }
//   ];

//   const benefits = [
//     { title: "Long-Lasting Results", description: "Treatments designed to deliver transformation that lasts months, not days" },
//     { title: "Customized Formulas", description: "Every treatment is tailored to your hair's unique needs and condition" },
//     { title: "Gentle on Hair", description: "Advanced formulations that restore without compromising hair health" },
//     { title: "Global Standards", description: "Premium products and techniques from leading hair care innovators worldwide" }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* <HeroSection
//         subtitle="Hair Treatments & Restoration"
//         title="Restore. Revive. Transform."
//         description="Advanced hair restoration treatments using global techniques and premium formulations for lasting results."
//         imageSrc={treatmentsHero}
//         primaryCta={{
//           text: "Book Treatment",
//           onClick: () => window.open("#booking", "_self")
//         }}
//       /> */}
//       <HeroSection
//         subtitle="Hair Treatments & Restoration"
//         title="Restore. Revive. Transform."
//         description="Advanced hair restoration treatments using global techniques and premium formulations for lasting results."
//         imageSrc={treatmentsHero}
//       >
//         <div className="flex flex-nowrap gap-2 sm:gap-4">
//           <Button
//             className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors mx-auto"
//             size="lg"
//             onClick={() => window.open("/contact#contact-form", "_self")}
//           >
//             Book Treatment
//           </Button>
//         </div>
//       </HeroSection>


//       {/* Intro Section */}
//       <section className="py-24 px-6">
//         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
//             Science Meets Luxury
//           </h2>
//           <p className="text-xl leading-relaxed text-muted-foreground font-montserrat">
//             Our restorative treatments go beyond surface-level care. We use advanced formulations and proven techniques to repair damage, restore health, and reveal your hair's natural beauty—from the inside out.
//           </p>
//         </div>
//       </section>

//       {/* Treatments Grid */}
//       <section className="py-24 px-6 bg-card">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
//               Our Treatment Menu
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
//               Professional treatments that deliver transformative, long-lasting results
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {treatments.map((treatment, index) => (
//               <div
//                 key={treatment.title}
//                 className="animate-fade-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <ServiceCard
//                   title={treatment.title}
//                   description={treatment.description}
//                   icon={treatment.icon}
//                   className="h-full"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Before & After Expectations */}
//       <section className="py-24 px-6 gradient-secondary">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
//               What to Expect
//             </h2>
//             <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
//               Visible transformation from your very first treatment
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div className="bg-card rounded-lg p-10 shadow-elegant animate-fade-up">
//               <h3 className="text-2xl font-light mb-6 text-foreground font-hatton">
//                 Before Treatment
//               </h3>
//               <ul className="space-y-4">
//                 {[
//                   "Dry, brittle, or damaged hair texture",
//                   "Frizz and lack of manageability",
//                   "Dull appearance without shine",
//                   "Breakage and split ends",
//                   "Chemical or heat damage"
//                 ].map((item) => (
//                   <li key={item} className="flex items-start text-muted-foreground">
//                     <span className="mr-3 mt-1 text-destructive">•</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-card rounded-lg p-10 shadow-elegant animate-fade-up" style={{ animationDelay: '0.1s' }}>
//               <h3 className="text-2xl font-light mb-6 text-foreground font-hatton">
//                 After Treatment
//               </h3>
//               <ul className="space-y-4">
//                 {[
//                   "Soft, smooth, and restored texture",
//                   "Sleek, frizz-free manageability",
//                   "Radiant shine and healthy appearance",
//                   "Strengthened strands with reduced breakage",
//                   "Revitalized hair from root to tip"
//                 ].map((item) => (
//                   <li key={item} className="flex items-start text-muted-foreground">
//                     <span className="mr-3 mt-1 text-secondary">✓</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-24 px-6">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
//               Why Choose Avya Treatments?
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
//               The difference is in the details
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {benefits.map((benefit, index) => (
//               <div
//                 key={benefit.title}
//                 className="flex gap-6 p-8 rounded-lg border border-accent bg-card shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
//                   <Heart className="h-8 w-8 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-medium mb-2 text-foreground">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-muted-foreground leading-relaxed">
//                     {benefit.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Treatment Process */}
//       <section className="py-24 px-6 bg-card">
//         <div className="container mx-auto max-w-4xl">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
//               Your Treatment Journey
//             </h2>
//             <p className="text-lg text-muted-foreground font-montserrat">
//               A personalized approach to hair restoration
//             </p>
//           </div>

//           <div className="space-y-8">
//             {[
//               {
//                 step: "01",
//                 title: "Hair Analysis",
//                 description: "Comprehensive assessment of your hair's condition, porosity, and specific needs."
//               },
//               {
//                 step: "02",
//                 title: "Treatment Selection",
//                 description: "Customized treatment plan based on your hair goals and lifestyle."
//               },
//               {
//                 step: "03",
//                 title: "Professional Application",
//                 description: "Expert application using precise techniques for optimal product penetration."
//               },
//               {
//                 step: "04",
//                 title: "Aftercare Guidance",
//                 description: "Personalized maintenance tips and product recommendations to extend results."
//               }
//             ].map((item, index) => (
//               <div
//                 key={item.step}
//                 className="flex gap-6 items-start p-8 rounded-lg border border-accent shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="text-5xl font-light text-secondary">
//                   {item.step}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-light mb-2 text-foreground">
//                     {item.title}
//                   </h3>
//                   <p className="text-muted-foreground leading-relaxed">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 px-6 gradient-primary">
//         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary font-hatton">
//             Ready to Restore Your Hair?
//           </h2>
//           <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto font-montserrat">
//             Experience the transformative power of professional hair treatments
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors" size="lg">
//               Book Your Treatment
//             </Button>
//             {/* <Button variant="premium" size="lg" onClick={() => navigate("/contact#contact-form")}>
//               View All Services
//             </Button> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Treatments;
import ServiceHero from "@/components/ui/ServiceHero";
import { Button } from "@/components/ui/button";
import { Droplets, Shield, Leaf, Zap, Heart, Sparkles, ChevronDown } from "lucide-react";
import treatmentsHero from "@/assets/op5.png";

const Treatments = () => {
  const treatments = [
    {
      title: "Nanoplastia",
      description: "Advanced smoothing treatment that transforms frizzy, damaged hair into silky, manageable perfection.",
      icon: Sparkles
    },
    {
      title: "Hair Botox",
      description: "Deep conditioning treatment that fills hair fibers, eliminates frizz, and restores youthful shine.",
      icon: Zap
    },
    {
      title: "Cold Hair Recovery",
      description: "Innovative cold therapy technique that repairs extreme damage without heat, preserving hair integrity.",
      icon: Shield
    },
    {
      title: "Olaplex & K18",
      description: "Professional bond-building treatments that repair broken hair bonds at the molecular level.",
      icon: Droplets
    },
    {
      title: "Protein Treatments",
      description: "Targeted protein therapy to strengthen weak, brittle hair and restore structural integrity.",
      icon: Leaf
    },
    {
      title: "Moisture Therapy",
      description: "Deep hydration treatments that restore moisture balance and improve elasticity for healthier hair.",
      icon: Heart
    }
  ];

  const benefits = [
    { title: "Long-Lasting Results", description: "Treatments designed to deliver transformation that lasts months, not days" },
    { title: "Customized Formulas", description: "Every treatment is tailored to your hair's unique needs and condition" },
    { title: "Gentle on Hair", description: "Advanced formulations that restore without compromising hair health" },
    { title: "Global Standards", description: "Premium products and techniques from leading hair care innovators worldwide" }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Hair Treatments"
        titleGradient="& Restoration"
        description="Advanced hair restoration treatments using global techniques and premium formulations for lasting results."
        image={treatmentsHero}
        imageAlt="Hair Treatments at Avya Beauty"
      />

      {/* Intro Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
            Science Meets Luxury
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground font-montserrat">
            Our restorative treatments go beyond surface-level care. We use advanced formulations and proven techniques to repair damage, restore health, and reveal your hair's natural beauty—from the inside out.
          </p>
        </div>
      </section>

      {/* Treatments Accordion */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              Our Treatment Menu
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
              Professional treatments that deliver transformative, long-lasting results
            </p>
          </div>

          <div className="space-y-2">
            {treatments.map((treatment, index) => (
              <details key={treatment.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <summary className="list-none cursor-pointer flex items-center gap-4 p-6 hover:bg-accent/20 transition-colors border-b border-accent/50">
                  <treatment.icon className="h-6 w-6 text-secondary flex-shrink-0" />
                  <h3 className="text-xl font-medium text-foreground flex-1">{treatment.title}</h3>
                  <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 rotate-0 marker:hidden [&[open]]:rotate-180" />
                </summary>
                <div className="p-6 pt-0 border-b border-accent/50">
                  <p className="text-muted-foreground leading-relaxed">{treatment.description}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Expectations */}
      <section className="py-24 px-6 gradient-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
              What to Expect
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
              Visible transformation from your very first treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 animate-fade-up space-y-4">
              <h3 className="text-2xl font-light mb-6 text-foreground font-hatton">
                Before Treatment
              </h3>
              {[
                "Dry, brittle, or damaged hair texture",
                "Frizz and lack of manageability",
                "Dull appearance without shine",
                "Breakage and split ends",
                "Chemical or heat damage"
              ].map((item) => (
                <div key={item} className="flex items-start text-muted-foreground">
                  <span className="mr-3 mt-1 text-destructive">•</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="p-10 animate-fade-up space-y-4" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-light mb-6 text-foreground font-hatton">
                After Treatment
              </h3>
              {[
                "Soft, smooth, and restored texture",
                "Sleek, frizz-free manageability",
                "Radiant shine and healthy appearance",
                "Strengthened strands with reduced breakage",
                "Revitalized hair from root to tip"
              ].map((item) => (
                <div key={item} className="flex items-start text-muted-foreground">
                  <span className="mr-3 mt-1 text-secondary">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              Why Choose Avya Treatments?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
              The difference is in the details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex gap-6 p-8 hover:bg-accent/20 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              Your Treatment Journey
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              A personalized approach to hair restoration
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Hair Analysis",
                description: "Comprehensive assessment of your hair's condition, porosity, and specific needs."
              },
              {
                step: "02",
                title: "Treatment Selection",
                description: "Customized treatment plan based on your hair goals and lifestyle."
              },
              {
                step: "03",
                title: "Professional Application",
                description: "Expert application using precise techniques for optimal product penetration."
              },
              {
                step: "04",
                title: "Aftercare Guidance",
                description: "Personalized maintenance tips and product recommendations to extend results."
              }
            ].map((item, index) => (
              <div
                key={item.step}
                className="flex gap-6 items-start p-8 hover:bg-accent/20 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-light text-secondary flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 gradient-primary">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary font-hatton">
            Ready to Restore Your Hair?
          </h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto font-montserrat">
            Experience the transformative power of professional hair treatments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors" size="lg">
              Book Your Treatment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatments;