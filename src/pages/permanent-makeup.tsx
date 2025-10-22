import ServiceHero from "@/components/ui/ServiceHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { Eye, Sparkles, Heart, Crown, Star, Shield, Clock, Zap } from "lucide-react";
import permanentMakeupHero from "@/assets/li.png";

const PermanentMakeup = () => {
  const permanentMakeupServices = [
    {
      title: "Microblading",
      description: "Semi-permanent eyebrow tattooing using fine needles to create natural-looking hair strokes.",
      icon: Eye
    },
    {
      title: "Powder Brows",
      description: "Soft, powdered effect for fuller, defined eyebrows with a more filled-in appearance.",
      icon: Sparkles
    },
    {
      title: "Lip Blushing",
      description: "Semi-permanent lip color enhancement for naturally tinted, fuller-looking lips.",
      icon: Heart
    },
    {
      title: "Eyeliner Tattoo",
      description: "Permanent eyeliner application for defined eyes that never smudges or fades.",
      icon: Crown
    },
    {
      title: "Lip Liner",
      description: "Permanent lip liner definition for enhanced lip shape and fullness.",
      icon: Star
    },
    {
      title: "Areola Restoration",
      description: "Sensitive procedure for breast cancer survivors to restore natural appearance.",
      icon: Shield
    }
  ];

  const treatmentTypes = [
    {
      title: "Eyebrow Enhancement",
      description: "Transform sparse or over-plucked brows into perfectly shaped, natural-looking eyebrows",
      features: ["Microblading", "Powder brows", "Combo technique", "Color matching"]
    },
    {
      title: "Lip Enhancement",
      description: "Add definition, color, and fullness to your lips with semi-permanent techniques",
      features: ["Lip blushing", "Lip liner", "Color correction", "Shape definition"]
    },
    {
      title: "Eye Definition",
      description: "Create permanent eye definition that enhances your natural beauty",
      features: ["Eyeliner tattoo", "Lash line enhancement", "Color options", "Precision application"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Design",
      description: "We discuss your goals, assess your features, and design the perfect look for you."
    },
    {
      step: "02",
      title: "Numbing & Preparation",
      description: "Topical numbing cream is applied for comfort, then the area is prepped and marked."
    },
    {
      step: "03",
      title: "Pigment Application",
      description: "Using sterile techniques, pigment is carefully implanted into the skin layers."
    },
    {
      step: "04",
      title: "Healing & Touch-up",
      description: "Follow-up appointment after 4-6 weeks to perfect and complete your look."
    }
  ];

  const aftercareInstructions = [
    "Keep the treated area clean and dry for 24-48 hours",
    "Apply recommended healing ointment as directed",
    "Avoid sun exposure and tanning beds during healing",
    "Don't pick, scratch, or rub the treated area",
    "Avoid swimming, saunas, and intense workouts for 7-10 days",
    "Use gentle, fragrance-free products during healing"
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Permanent Makeup"
        titleGradient="& Microblading"
        description="Semi-permanent cosmetic procedures that enhance your natural features and save you time on daily makeup routines."
        image={permanentMakeupHero}
        imageAlt="Permanent Makeup Services at Avya Beauty"
      />

      {/* Intro Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
            Wake Up Beautiful Every Day
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground font-montserrat">
            Our permanent makeup services use advanced techniques and premium pigments to enhance your natural beauty. From perfectly shaped eyebrows to defined lips, we create semi-permanent results that look natural and last for years with proper care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 gradient-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              Our Permanent Makeup Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
              Professional semi-permanent cosmetic procedures for lasting beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {permanentMakeupServices.map((service, index) => (
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

      {/* Treatment Types */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
              Treatment Categories
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
              Comprehensive permanent makeup solutions for every beauty need
            </p>
          </div>

          <div className="space-y-12">
            {treatmentTypes.map((treatment, index) => (
              <div
                key={treatment.title}
                className="flex gap-8 items-start animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-2 bg-secondary rounded-full h-full min-h-[100px]" />
                <div>
                  <h3 className="text-2xl font-light mb-3 text-primary font-hatton">
                    {treatment.title}
                  </h3>
                  <p className="text-primary/80 mb-4 leading-relaxed font-montserrat">
                    {treatment.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {treatment.features.map((feature) => (
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
              The Permanent Makeup Process
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              What to expect during your permanent makeup procedure
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((item, index) => (
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

      {/* Aftercare Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              Aftercare Instructions
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              Essential care tips for optimal healing and long-lasting results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-accent/10 shadow-soft animate-fade-up">
              <h3 className="text-2xl font-light mb-6 text-foreground font-hatton flex items-center gap-3">
                <Clock className="h-6 w-6 text-secondary" />
                Immediate Care (First 48 Hours)
              </h3>
              <ul className="space-y-3">
                {aftercareInstructions.slice(0, 3).map((instruction) => (
                  <li key={instruction} className="flex items-start text-muted-foreground">
                    <span className="mr-3 mt-1 text-secondary">•</span>
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-accent/10 shadow-soft animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-light mb-6 text-foreground font-hatton flex items-center gap-3">
                <Shield className="h-6 w-6 text-secondary" />
                Long-term Care
              </h3>
              <ul className="space-y-3">
                {aftercareInstructions.slice(3).map((instruction) => (
                  <li key={instruction} className="flex items-start text-muted-foreground">
                    <span className="mr-3 mt-1 text-secondary">•</span>
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 gradient-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              Why Choose Permanent Makeup?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
              The advantages of semi-permanent cosmetic procedures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Time-Saving",
                description: "Wake up with perfect brows and lips every day, saving precious morning time.",
                icon: Clock
              },
              {
                title: "Waterproof Beauty",
                description: "Your makeup stays perfect through swimming, sweating, and all activities.",
                icon: Shield
              },
              {
                title: "Natural Results",
                description: "Enhance your natural features with subtle, realistic-looking results.",
                icon: Heart
              },
              {
                title: "Long-Lasting",
                description: "Enjoy beautiful results for 1-3 years with proper care and touch-ups.",
                icon: Star
              },
              {
                title: "Confidence Boost",
                description: "Feel beautiful and confident every day, even without makeup.",
                icon: Crown
              },
              {
                title: "Professional Quality",
                description: "Expert techniques and premium pigments ensure superior results.",
                icon: Zap
              }
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex gap-6 p-8 hover:bg-accent/20 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-primary" />
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

      {/* CTA Section */}
      <section className="py-24 px-6 gradient-primary">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary font-hatton">
            Ready for Permanent Beauty?
          </h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto font-montserrat">
            Book your consultation and discover how permanent makeup can transform your daily routine
          </p>
          <Button 
            className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors"
            onClick={() => window.open("#book", "_self")}
          >
            Book Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PermanentMakeup;


