import { HeroSection } from "@/components/ui/ServiceHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { Microscope, Activity, Droplet, Wind, Zap, Scan } from "lucide-react";
import { useNavigate } from "react-router-dom";
import trichologyHero from "@/assets/trichology-hero.jpg";

const Trichology = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen">
      {/* <HeroSection
        subtitle="Trichology & Scalp Health"
        title="Real Solutions. Real Science."
        description="Diagnostic-led trichology for hair loss, scalp concerns, and long-term healing using medical-grade technology."
        imageSrc={trichologyHero}
        primaryCta={{
          text: "Book a Scalp Consultation",
          onClick: () => window.open("#booking", "_self")
        }}
        // secondaryCta={{
        //   text: "Learn More",
        //   onClick: () => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        // }}
      /> */}
      <HeroSection
        subtitle="Trichology & Scalp Health"
        title="Real Solutions. Real Science."
        description="Diagnostic-led trichology for hair loss, scalp concerns, and long-term healing using medical-grade technology."
        imageSrc={trichologyHero}
      >
        <div className="flex flex-nowrap gap-2 sm:gap-4">
          <Button
            className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors mx-auto"
            size="lg"
            onClick={() => window.open("/contact#contact-form", "_self")}
          >
            Book Consultation
          </Button>
        </div>
      </HeroSection>


      {/* Intro Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light font-hatton">
            Hair loss. Traction alopecia. Dandruff. Hormonal shedding. These issues are more common than you think and deserve more than guesswork.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground font-light mt-6 font-montserrat">
            At Avya, we bring diagnostic-led trichology to Nairobi for the first time.
          </p>
        </div>
      </section>

      {/* Common Conditions */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              Common Conditions We Treat
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
              Evidence-based treatments for the most common hair and scalp concerns
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {conditions.map((condition, index) => {
              const Icon = condition.icon;
              return (
                <div
                  key={condition.name}
                  className="flex flex-col items-center p-6 rounded-lg border border-accent bg-card shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-center text-sm font-medium text-foreground">
                    {condition.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies & Treatments */}
      <section className="py-24 px-6 gradient-primary">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
              Technologies & Treatments
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
              Advanced protocols that target root causes for lasting results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-montserrat">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-full bg-card rounded-lg p-8 shadow-elegant hover:-translate-y-1 transition-smooth">
                  <div className="mb-4 inline-flex p-3 rounded-lg gradient-secondary">
                    <treatment.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-foreground">
                    {treatment.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              A science-backed approach to healthier hair and scalp
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Diagnostic Consultation",
                description: "Comprehensive scalp analysis using medical-grade imaging to identify underlying issues."
              },
              {
                step: "02",
                title: "Custom Treatment Plan",
                description: "Personalized protocol designed specifically for your scalp condition and hair goals."
              },
              {
                step: "03",
                title: "Treatment Sessions",
                description: "Regular sessions using advanced technology and targeted therapies for optimal results."
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Continuous monitoring and adjustments to ensure long-term scalp health and hair growth."
              }
            ].map((item, index) => (
              <div
                key={item.step}
                className="flex gap-6 items-start p-8 rounded-lg border border-accent bg-card shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-light text-secondary">
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
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
            Start Your Hair Health Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-montserrat">
            Book a diagnostic consultation and discover the root cause of your hair concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <Button className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors" size="lg">
              Book Consultation
            </Button>
            {/* <Button variant="premium" size="lg" onClick={() => navigate("/services")}>
              View All Services
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trichology;
