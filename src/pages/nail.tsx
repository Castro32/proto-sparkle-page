import ServiceHero from "@/components/ui/ServiceHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Crown, Star, Palette, Shield } from "lucide-react";
import nailHero from "@/assets/nail.png";

const Nail = () => {
  const nailServices = [
    {
      title: "Gel Manicure",
      description: "Long-lasting, chip-resistant manicure with high-gloss finish that stays perfect for weeks.",
      icon: Sparkles
    },
    {
      title: "Classic Pedicure",
      description: "Traditional pedicure with nail shaping, cuticle care, and polish application for healthy feet.",
      icon: Heart
    },
    {
      title: "Nail Art & Design",
      description: "Custom nail art, French tips, ombre effects, and intricate designs to express your style.",
      icon: Palette
    },
    {
      title: "Luxury Spa Pedicure",
      description: "Premium pedicure with exfoliation, massage, and hydrating treatments for ultimate relaxation.",
      icon: Crown
    },
    {
      title: "Nail Extensions",
      description: "Acrylic or gel extensions for length and strength, shaped to perfection for your desired look.",
      icon: Star
    },
    {
      title: "Nail Repair & Treatment",
      description: "Specialized treatments for damaged nails, strengthening, and restoration for healthy growth.",
      icon: Shield
    }
  ];

  const nailArtStyles = [
    {
      title: "French Elegance",
      description: "Timeless white tips with natural base for sophisticated, clean beauty",
      features: ["Classic white tips", "Natural base", "Long-lasting finish"]
    },
    {
      title: "Ombre Dreams",
      description: "Gradient color transitions that create stunning visual depth and dimension",
      features: ["Seamless blending", "Custom color choices", "Eye-catching effect"]
    },
    {
      title: "Minimalist Chic",
      description: "Subtle designs and negative space art for modern, understated elegance",
      features: ["Clean lines", "Subtle details", "Versatile styling"]
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Nail Services"
        titleGradient="& Artistry"
        description="Professional nail care and stunning nail art designs that express your unique style and personality."
        image={nailHero}
        imageAlt="Nail Services at Avya Beauty"
      />

      {/* Intro Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
            Where Beauty Meets Precision
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground font-montserrat">
            Our nail services combine professional techniques with artistic creativity to deliver flawless results. From classic manicures to intricate nail art, we transform your nails into works of art that reflect your personal style and enhance your natural beauty.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 gradient-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              Our Nail Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
              Professional nail care and artistic designs for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nailServices.map((service, index) => (
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

      {/* Nail Art Styles */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
              Signature Nail Art Styles
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
              Popular designs our clients love, customized to match your personality
            </p>
          </div>

          <div className="space-y-12">
            {nailArtStyles.map((style, index) => (
              <div
                key={style.title}
                className="flex gap-8 items-start animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-2 bg-secondary rounded-full h-full min-h-[100px]" />
                <div>
                  <h3 className="text-2xl font-light mb-3 text-primary font-hatton">
                    {style.title}
                  </h3>
                  <p className="text-primary/80 mb-4 leading-relaxed font-montserrat">
                    {style.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {style.features.map((feature) => (
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
              The Avya Nail Experience
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              What to expect during your nail service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              {
                step: "Consultation & Design",
                description: "We discuss your preferences, assess your nail condition, and plan your perfect look."
              },
              {
                step: "Nail Preparation",
                description: "Professional shaping, cuticle care, and nail bed preparation for optimal results."
              },
              {
                step: "Artistic Application",
                description: "Precise application of polish, gel, or nail art with attention to every detail."
              },
              {
                step: "Finishing & Care",
                description: "Final touches, top coat application, and aftercare tips for long-lasting beauty."
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
            Ready to Perfect Your Nails?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-montserrat">
            Book your nail service and let our artists create beautiful, long-lasting nail designs that complement your style
          </p>
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 h-14 text-base font-medium tracking-wide rounded-lg transition-all hover:shadow-elegant"
            onClick={() => window.open("#book", "_self")}
          >
            Book Your Nail Service
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Nail;


