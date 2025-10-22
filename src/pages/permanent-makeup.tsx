import React from 'react';
import { Button } from "@/components/ui/button";
import ServiceHero from "@/components/ui/ServiceHero";
import permanentMakeupHero from "@/assets/li.png";
// Import service images (reuse or placeholder; add more as needed)
import eyebrowsImage from "@/assets/op.png"; // Placeholder for eyebrows
import lipsImage from "@/assets/op1.png"; // Placeholder for lips
import eyelinerImage from "@/assets/op2.png"; // Placeholder for eyeliner
import touchupImage from "@/assets/op3.png"; // Placeholder for touch-up
import bridalGlamImage from "@/assets/op4.png"; // Placeholder for bridal glam
import fullGlamImage from "@/assets/op5.png"; // Placeholder for full glam
import dayGlamImage from "@/assets/op.png"; // Placeholder for day glam
import defaultImage from "@/assets/op3.png";

const PermanentMakeup = () => {
  const [selectedDepartment, setSelectedDepartment] = React.useState("All");

  const allServices = [
    {
      name: "Eyebrows",
      location: "",
      price: "KES 33,000",
      department: "Permanent Make-up",
      description: "Semi-permanent eyebrow enhancement using microblading or powder techniques for natural, defined brows that last years.",
      image: eyebrowsImage,
    },
    {
      name: "Lips",
      location: "",
      price: "KES 38,000",
      department: "Permanent Make-up",
      description: "Lip blushing procedure to add color, definition, and fullness for naturally tinted, symmetrical lips.",
      image: lipsImage,
    },
    {
      name: "Eyeliner",
      location: "",
      price: "KES 27,000",
      department: "Permanent Make-up",
      description: "Permanent eyeliner tattoo for smudge-proof definition, enhancing your eyes with subtle or bold lines.",
      image: eyelinerImage,
    },
    {
      name: "Touch-up (within 1 month)",
      location: "",
      price: "KES 11,000",
      department: "Permanent Make-up",
      description: "Essential follow-up session to refine and perfect your permanent makeup results shortly after initial procedure.",
      image: touchupImage,
    },
    {
      name: "Bridal glam",
      location: "1h",
      price: "from KES 10,000",
      department: "Bridal glam",
      description: "Custom bridal makeup for your special day, ensuring timeless, radiant beauty that photographs flawlessly.",
      image: bridalGlamImage,
    },
    {
      name: "Full glam",
      location: "45m",
      price: "KES 5,000",
      department: "Full glam",
      description: "Bold, full-coverage makeup look for dramatic evenings or events with long-lasting wear.",
      image: fullGlamImage,
    },
    {
      name: "Day glam",
      location: "30m",
      price: "KES 4,000",
      department: "Day glam",
      description: "Light, natural daytime makeup to enhance your features for a fresh, effortless glow.",
      image: dayGlamImage,
    },
  ];

  const departments = [
    { id: "All", label: "All Services" },
    { id: "Permanent Make-up", label: "Permanent Make-up" },
    { id: "Bridal glam", label: "Bridal glam" },
    { id: "Full glam", label: "Full glam" },
    { id: "Day glam", label: "Day glam" },
  ];

  const filteredServices =
    selectedDepartment === "All"
      ? allServices
      : allServices.filter((service) => service.department === selectedDepartment);

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Permanent Makeup"
        titleGradient="& Services"
        description="Enhance your natural beauty with semi-permanent procedures and professional makeup artistry for effortless, lasting results."
        image={permanentMakeupHero}
        imageAlt="Permanent makeup and services"
      />

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
            At Avya, we offer comprehensive permanent makeup and makeup services in Nairobi.
            From long-lasting enhancements to event-ready looks, our expert artists
            use premium techniques and products to deliver personalized, transformative results.
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

      {/* Services Grid */}
      <section className="py-20 px-6 bg-[#E2DBDF]/20">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-24">
            {filteredServices.map((service, index) => (
              <div
                key={`${service.name}-${service.location}-${index}`}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image Side */}
                <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <div className="aspect-[4/3] bg-[#595959]/20 rounded-sm overflow-hidden">
                    <img
                      src={service.image || defaultImage}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-[#595959] uppercase tracking-widest mb-3">
                        {service.department}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-medium text-[#262626] mb-2">
                        {service.name}
                      </h3>
                      {service.location && (
                        <p className="text-base text-[#262626] font-medium">{service.location}</p>
                      )}
                    </div>
                    <p className="text-lg text-[#262626] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Price Table */}
                    <div className="pt-4 space-y-2">
                      <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
                        <span className="text-base font-medium text-[#262626]">Treatment</span>
                        <span className="text-base font-medium text-[#262626]">{service.name}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
                        <span className="text-base font-medium text-[#262626]">Duration/Area</span>
                        <span className="text-base font-medium text-[#262626]">
                          {service.location || "Various"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
                        <span className="text-base font-medium text-[#262626]">Price</span>
                        <span className="text-base font-medium text-[#262626]">{service.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-[#262626] mb-4">How It Works</h2>
            <div className="w-24 h-[1px] bg-[#595959] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Comprehensive assessment to understand your concerns and goals",
              },
              {
                step: "02",
                title: "Custom Plan",
                description: "Personalized treatment protocol designed for your needs",
              },
              {
                step: "03",
                title: "Treatment",
                description: "Expert application of advanced therapies and technologies",
              },
              {
                step: "04",
                title: "Follow-Up",
                description: "Ongoing support and adjustments for optimal results",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-medium text-[#C1B5C6] mb-4">{item.step}</div>
                <h3 className="text-2xl font-medium text-[#262626] mb-3">{item.title}</h3>
                <p className="text-base text-[#262626] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-16 px-6 bg-[#E2DBDF]/30">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-base text-[#262626] leading-relaxed">
            <span className="font-medium">Please Note:</span> All treatments are consultation-based.
            Pricing and treatment plans will be customized during your initial consultation based on
            your specific needs, desired outcomes, and our expert assessment. Contact us to book your
            consultation and begin your transformation journey.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PermanentMakeup;