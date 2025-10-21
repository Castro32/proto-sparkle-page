import React from 'react';
import { Button } from "@/components/ui/button";
import { Microscope, Activity, Droplet, Wind, Zap, Scan } from "lucide-react";
import trichologyHero from "@/assets/hero-hair-treatments.jpg";
import ServiceHero from "@/components/ui/ServiceHero";

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
    <div className="min-h-screen">
      <ServiceHero
        title="Advanced Trichology"
        titleGradient="& Scalp Health"
        description="Experience expert diagnosis and personalized treatments for optimal scalp and hair health. Our advanced trichology services combine science and luxury for transformative results."
        image={trichologyHero}
        imageAlt="Trichology and scalp health treatment"
      />

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

      {/* Common Conditions */}
      <section className="py-24 px-6 bg-[#E2DBDF]">
        <div className="container mx-auto max-w-7xl">
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
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                  ></div>
                  <div className="absolute inset-0 border border-[#595959]/10 rounded-2xl group-hover:border-[#595959]/30 transition-colors duration-500"></div>
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

      {/* Technologies & Treatments */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#262626] to-[#595959]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#E2DBDF] relative">
                Technologies & Treatments
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2DBDF] to-transparent"></div>
              </h2>
            </div>
            <p className="text-lg text-[#E2DBDF]/80 max-w-2xl mx-auto mt-6">
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

                <div className="relative z-10 p-8 md:p-10 flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E2DBDF]/30 to-transparent rounded-lg rotate-45"></div>
                      <div className="absolute inset-2 bg-[#595959] rounded-lg flex items-center justify-center group-hover:bg-[#E2DBDF] transition-colors duration-500">
                        <treatment.icon className="h-6 w-6 text-[#E2DBDF] group-hover:text-[#262626] transition-colors duration-500" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-light mb-2 text-[#E2DBDF] group-hover:text-white transition-colors duration-500">
                      {treatment.title}
                    </h3>
                    <p className="text-[#E2DBDF]/70 leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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

      {/* Process Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#B0C2B0]/10 via-white to-[#C1B5C6]/10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-light mb-4 text-[#262626] relative">
                How It Works
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#595959] to-transparent"></div>
              </h2>
            </div>
            <p className="text-lg text-[#595959] mt-6">
              A science-backed approach to healthier hair and scalp
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C1B5C6] via-[#595959] to-[#B0C2B0]"></div>

            <div className="space-y-16">
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
                  className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="inline-block relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} blur-2xl opacity-50`}></div>
                      <span className={`text-7xl md:text-8xl font-light ${item.color} relative`}>
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light mb-3 text-[#262626] mt-2">
                      {item.title}
                    </h3>
                    <p className="text-[#595959] leading-relaxed text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>

                  <div className={`absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full ${item.dotColor} border-4 border-white shadow-lg`}></div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#595959] via-[#262626] to-[#B0C2B0]/50">
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

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#E2DBDF]">
            Start Your Hair Health Journey
          </h2>
          <p className="text-xl text-[#C1B5C6] mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a diagnostic consultation and discover the root cause of your hair concerns
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-white hover:bg-[#595959] text-[#262626] hover:text-white w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
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