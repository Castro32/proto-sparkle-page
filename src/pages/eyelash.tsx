import ServiceHero from "@/components/ui/ServiceHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { Eye, Sparkles, Heart, Crown, Star, Shield } from "lucide-react";
import eyelashHero from "@/assets/ey.png";

const Eyelash = () => {
  const eyelashServices = [
    {
      title: "Classic Extensions",
      description: "Natural-looking single lash extensions applied to each natural lash for subtle volume and length.",
      icon: Eye
    },
    {
      title: "Volume Extensions",
      description: "Multiple lightweight lashes per natural lash for dramatic fullness and stunning eye definition.",
      icon: Sparkles
    },
    {
      title: "Hybrid Extensions",
      description: "Perfect blend of classic and volume techniques for natural fullness with added drama.",
      icon: Heart
    },
    {
      title: "Mega Volume",
      description: "Ultra-dramatic look with 6-8 lashes per natural lash for maximum impact and glamour.",
      icon: Crown
    },
    {
      title: "Lash Lift & Tint",
      description: "Enhance your natural lashes with a perm-like lift and dark tint for a wide-eyed look.",
      icon: Star
    },
    {
      title: "Lash Maintenance",
      description: "Regular fills and touch-ups to maintain your lash extensions and keep them looking perfect.",
      icon: Shield
    }
  ];

  const lashStyles = [
    {
      title: "Natural & Subtle",
      description: "Enhance your natural beauty with soft, fluttery lashes that look effortlessly beautiful",
      features: ["Classic technique", "Natural curl", "Everyday wear"]
    },
    {
      title: "Dramatic & Bold",
      description: "Make a statement with full, voluminous lashes that command attention",
      features: ["Volume technique", "Dramatic curl", "Special occasions"]
    },
    {
      title: "Cat Eye Effect",
      description: "Create a sultry, elongated look with longer lashes at the outer corners",
      features: ["Custom mapping", "Elongated shape", "Feminine allure"]
    }
  ];

  const aftercareTips = [
    "Avoid water and steam for 24-48 hours after application",
    "Use oil-free makeup remover and gentle cleansers",
    "Sleep on your back or side to avoid crushing lashes",
    "Brush lashes daily with a clean spoolie brush",
    "Avoid rubbing or pulling at your lashes",
    "Schedule regular fills every 2-3 weeks"
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Eyelash Extensions"
        titleGradient="& Lash Care"
        description="Transform your eyes with professional eyelash extensions and lash treatments for stunning, long-lasting beauty."
        image={eyelashHero}
        imageAlt="Eyelash Extensions at Avya Beauty"
      />

      {/* Intro Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-hatton">
            Frame Your Eyes with Perfection
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground font-montserrat">
            Our eyelash extension services are designed to enhance your natural beauty and give you the long, full lashes you've always dreamed of. Using premium materials and expert techniques, we create customized looks that complement your eye shape and personal style.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 gradient-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              Our Lash Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
              Professional eyelash extensions and treatments for every look
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eyelashServices.map((service, index) => (
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

      {/* Lash Styles */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary font-hatton">
              Signature Lash Styles
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto font-montserrat">
              Popular lash looks our clients love, customized to enhance your unique features
            </p>
          </div>

          <div className="space-y-12">
            {lashStyles.map((style, index) => (
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

      {/* Aftercare Section */}
      <section className="py-24 px-6 gradient-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              Lash Aftercare Guide
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              Essential tips to maintain your beautiful lash extensions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-card shadow-soft animate-fade-up">
              <h3 className="text-2xl font-light mb-6 text-foreground font-hatton">
                Do's
              </h3>
              <ul className="space-y-3">
                {aftercareTips.slice(0, 3).map((tip) => (
                  <li key={tip} className="flex items-start text-muted-foreground">
                    <span className="mr-3 mt-1 text-secondary">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-card shadow-soft animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-light mb-6 text-foreground font-hatton">
                Don'ts
              </h3>
              <ul className="space-y-3">
                {aftercareTips.slice(3).map((tip) => (
                  <li key={tip} className="flex items-start text-muted-foreground">
                    <span className="mr-3 mt-1 text-destructive">✗</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground font-hatton">
              The Lash Extension Process
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              What to expect during your lash extension appointment
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your desired look, assess your natural lashes, and recommend the best technique."
              },
              {
                step: "02",
                title: "Preparation",
                description: "Your natural lashes are cleaned and prepped for optimal extension adhesion."
              },
              {
                step: "03",
                title: "Application",
                description: "Each extension is carefully applied to individual natural lashes with precision."
              },
              {
                step: "04",
                title: "Finishing",
                description: "Final styling, trimming, and aftercare instructions for long-lasting results."
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
            Ready for Stunning Lashes?
          </h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto font-montserrat">
            Book your eyelash extension appointment and wake up every day with beautiful, full lashes
          </p>
          <Button 
            className="bg-[#E2DBDF] hover:bg-[#595959] text-[#262626] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm font-open-sans tracking-wider mt-6 md:mt-0 rounded transition-colors"
            onClick={() => window.open("#book", "_self")}
          >
            Book Lash Service
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Eyelash;


