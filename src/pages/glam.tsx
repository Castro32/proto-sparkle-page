// import { HeroSection } from "@/components/ui/ServiceHero";
// import { ServiceCard } from "@/components/ui/ServiceCard";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Wind, Scissors, Palette, Crown, Star } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import glamHero from "@/assets/glam-hero.jpg";

// const Glam = () => {
//   const navigate = useNavigate();

//   const glamServices = [
//     {
//       title: "Blowouts & Silk Press",
//       description: "Smooth, sleek, and shiny hair using professional heat styling techniques for a flawless finish.",
//       icon: Wind
//     },
//     {
//       title: "Event Styling & Updos",
//       description: "Elegant styles for weddings, galas, and special occasions. Make every moment unforgettable.",
//       icon: Crown
//     },
//     {
//       title: "Extension Installations",
//       description: "Tape-in, sew-in, and keratin extensions for volume, length, and natural-looking beauty.",
//       icon: Scissors
//     },
//     {
//       title: "Lace Front Wig Installation",
//       description: "Professional wig installation with seamless blending for a natural, undetectable look.",
//       icon: Star
//     },
//     {
//       title: "Hair Color & Glossing",
//       description: "From vibrant color transformations to subtle gloss treatments for enhanced shine and depth.",
//       icon: Palette
//     },
//     {
//       title: "Deep Conditioning",
//       description: "Intensive moisture treatments and styling finishers to keep your hair healthy and vibrant.",
//       icon: Sparkles
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* <HeroSection
//         subtitle="Premium Glam Services"
//         title="Confidence Starts With Great Hair"
//         description="Luxurious styling services for every occasion, from everyday elegance to show-stopping glamour."
//         imageSrc={glamHero}
//         primaryCta={{
//           text: "Book Your Glam Session",
//           onClick: () => window.open("#booking", "_self")
//         }}
//         // secondaryCta={{
//         //   text: "View Services",
//         //   onClick: () => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
//         // }}
//       /> */}
//       <HeroSection
//         subtitle="Premium Glam Services"
//         title="Confidence Starts With Great Hair"
//         description="Luxurious styling services for every occasion, from everyday elegance to show-stopping glamour."
//         imageSrc={glamHero}
//       >
//         <div className="flex flex-nowrap gap-2 sm:gap-4">
//           <Button
//             className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors mx-auto"
//             size="lg"
//             onClick={() => window.open("#booking", "_self")}
//           >
//             Book Your Glam Session
//           </Button>
//         </div>
//       </HeroSection>

//       {/* Intro Section */}
//       <section className="py-24 px-6">
//         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
//             Where Artistry Meets Excellence
//           </h2>
//           <p className="text-xl leading-relaxed text-muted-foreground font-montserrat">
//             Our glam services blend creativity with precision, ensuring every style is perfectly executed. Whether you're preparing for a special event or want to elevate your everyday look, our expert stylists bring your vision to life.
//           </p>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-24 px-6 bg-card">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
//               Our Glam Services
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
//               Professional styling and finishing services for flawless results
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {glamServices.map((service, index) => (
//               <div
//                 key={service.title}
//                 className="animate-fade-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <ServiceCard
//                   title={service.title}
//                   description={service.description}
//                   icon={service.icon}
//                   className="h-full"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Signature Looks */}
//       <section className="py-24 px-6 gradient-secondary">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
//               Signature Looks
//             </h2>
//             <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
//               Popular styles our clients love, customized to suit your unique features
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "The Red Carpet",
//                 description: "Hollywood-worthy waves and volume for show-stopping glamour",
//                 features: ["Volumized roots", "Soft curls", "High shine finish"]
//               },
//               {
//                 title: "Sleek Sophistication",
//                 description: "Ultra-smooth silk press with mirror-like shine",
//                 features: ["Bone straight finish", "Heat protection", "Frizz-free results"]
//               },
//               {
//                 title: "Bridal Elegance",
//                 description: "Timeless updos and romantic styles for your special day",
//                 features: ["Custom design", "Long-lasting hold", "Trial session included"]
//               }
//             ].map((look, index) => (
//               <div
//                 key={look.title}
//                 className="bg-card rounded-lg p-8 shadow-elegant animate-fade-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <h3 className="text-2xl font-light mb-3 text-foreground">
//                   {look.title}
//                 </h3>
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   {look.description}
//                 </p>
//                 <ul className="space-y-2">
//                   {look.features.map((feature) => (
//                     <li key={feature} className="flex items-center text-sm text-muted-foreground">
//                       <Star className="h-4 w-4 mr-2 text-secondary" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-24 px-6">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
//               The Avya Glam Experience
//             </h2>
//             <p className="text-lg text-muted-foreground font-montserrat">
//               What to expect during your styling session
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               {
//                 step: "Consultation",
//                 description: "We discuss your vision, assess your hair, and recommend the best approach for your desired look."
//               },
//               {
//                 step: "Preparation",
//                 description: "Hair is cleansed, conditioned, and prepped with professional products for optimal styling."
//               },
//               {
//                 step: "Styling",
//                 description: "Expert techniques and premium tools are used to create your perfect style with precision."
//               },
//               {
//                 step: "Finishing Touches",
//                 description: "Final details, products, and maintenance tips to help you maintain your gorgeous look."
//               }
//             ].map((item, index) => (
//               <div
//                 key={item.step}
//                 className="flex gap-6 p-8 rounded-lg border border-accent bg-card shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
//                   <Sparkles className="h-8 w-8 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-medium mb-2 text-foreground">
//                     {item.step}
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
//       <section className="py-24 px-6 bg-card">
//         <div className="container mx-auto max-w-4xl text-center animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
//             Ready for Your Transformation?
//           </h2>
//           <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-montserrat">
//             Book your glam session and experience the confidence that comes with great hair
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors" size="lg">
//               Book Now
//             </Button>
//             {/* <Button variant="premium" size="lg" onClick={() => navigate("/services")}>
//               Explore All Services
//             </Button> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Glam;
import { HeroSection } from "@/components/ui/ServiceHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Wind, Scissors, Palette, Crown, Star } from "lucide-react";
import glamHero from "@/assets/glam-hero.jpg";

const Glam = () => {
  const glamServices = [
    {
      title: "Blowouts & Silk Press",
      description: "Smooth, sleek, and shiny hair using professional heat styling techniques for a flawless finish.",
      icon: Wind
    },
    {
      title: "Event Styling & Updos",
      description: "Elegant styles for weddings, galas, and special occasions. Make every moment unforgettable.",
      icon: Crown
    },
    {
      title: "Extension Installations",
      description: "Tape-in, sew-in, and keratin extensions for volume, length, and natural-looking beauty.",
      icon: Scissors
    },
    {
      title: "Lace Front Wig Installation",
      description: "Professional wig installation with seamless blending for a natural, undetectable look.",
      icon: Star
    },
    {
      title: "Hair Color & Glossing",
      description: "From vibrant color transformations to subtle gloss treatments for enhanced shine and depth.",
      icon: Palette
    },
    {
      title: "Deep Conditioning",
      description: "Intensive moisture treatments and styling finishers to keep your hair healthy and vibrant.",
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        subtitle="Premium Glam Services"
        title="Confidence Starts With Great Hair"
        description="Luxurious styling services for every occasion, from everyday elegance to show-stopping glamour."
        imageSrc={glamHero}
      >
        <Button
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 h-14 text-base font-medium tracking-wide rounded-lg transition-all hover:shadow-elegant"
          onClick={() => window.open("#booking", "_self")}
        >
          Book Your Glam Session
        </Button>
      </HeroSection>

      {/* Intro Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
            Where Artistry Meets Excellence
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground font-montserrat">
            Our glam services blend creativity with precision, ensuring every style is perfectly executed. Whether you're preparing for a special event or want to elevate your everyday look, our expert stylists bring your vision to life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 gradient-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              Our Glam Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
              Professional styling and finishing services for flawless results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {glamServices.map((service, index) => (
              <div
                key={service.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Looks */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
              Signature Looks
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
              Popular styles our clients love, customized to suit your unique features
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "The Red Carpet",
                description: "Hollywood-worthy waves and volume for show-stopping glamour",
                features: ["Volumized roots", "Soft curls", "High shine finish"]
              },
              {
                title: "Sleek Sophistication",
                description: "Ultra-smooth silk press with mirror-like shine",
                features: ["Bone straight finish", "Heat protection", "Frizz-free results"]
              },
              {
                title: "Bridal Elegance",
                description: "Timeless updos and romantic styles for your special day",
                features: ["Custom design", "Long-lasting hold", "Trial session included"]
              }
            ].map((look, index) => (
              <div
                key={look.title}
                className="flex gap-8 items-start animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-2 bg-secondary rounded-full h-full min-h-[100px]" />
                <div>
                  <h3 className="text-2xl font-light mb-3 text-primary font-hatton">
                    {look.title}
                  </h3>
                  <p className="text-primary/80 mb-4 leading-relaxed font-montserrat">
                    {look.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {look.features.map((feature) => (
                      <span key={feature} className="text-sm text-primary/70 font-montserrat">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 gradient-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              The Avya Glam Experience
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              What to expect during your styling session
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              {
                step: "Consultation",
                description: "We discuss your vision, assess your hair, and recommend the best approach for your desired look."
              },
              {
                step: "Preparation",
                description: "Hair is cleansed, conditioned, and prepped with professional products for optimal styling."
              },
              {
                step: "Styling",
                description: "Expert techniques and premium tools are used to create your perfect style with precision."
              },
              {
                step: "Finishing Touches",
                description: "Final details, products, and maintenance tips to help you maintain your gorgeous look."
              }
            ].map((item, index) => (
              <div
                key={item.step}
                className="flex gap-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Sparkles className="flex-shrink-0 h-6 w-6 text-secondary text-white mt-1" />
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground font-hatton">
                    {item.step}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-montserrat">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-montserrat">
            Book your glam session and experience the confidence that comes with great hair
          </p>
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 h-14 text-base font-medium tracking-wide rounded-lg transition-all hover:shadow-elegant"
            onClick={() => window.open("#booking", "_self")}
          >
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Glam;