// import React from 'react';
// import { Button } from "@/components/ui/button";
// import ServiceHero from "@/components/ui/ServiceHero";
// import nailHero from "@/assets/nail.png";
// // Import service images (reuse or placeholder; add more as needed)
// import overlayImage from "@/assets/op.png"; // Placeholder for overlays
// import shellacImage from "@/assets/op1.png"; // Placeholder for shellac
// import manicureImage from "@/assets/op2.png"; // Placeholder for manicure
// import pedicureImage from "@/assets/op3.png"; // Placeholder for pedicure
// import acrylicImage from "@/assets/op5.png"; // Placeholder for acrylic
// import nailArtImage from "@/assets/op.png"; // Placeholder for nail art
// import defaultImage from "@/assets/op3.png";

// const Nail = () => {
//   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

//   const allServices = [
//     {
//       name: "Manicure",
//       location: "30m",
//       price: "KES 2,000",
//       department: "Manicure",
//       description: "Classic manicure with shaping, cuticle care, and polish for healthy, beautiful nails.",
//       image: manicureImage,
//     },
//     {
//       name: "Shellac manicure",
//       location: "45m",
//       price: "KES 3,500",
//       department: "Shellac",
//       description: "Chip-resistant Shellac polish for a flawless manicure that lasts up to two weeks.",
//       image: shellacImage,
//     },
//     {
//       name: "Shellac application",
//       location: "30m",
//       price: "KES 2,000",
//       department: "Shellac",
//       description: "Professional application of Shellac for vibrant color and superior shine.",
//       image: shellacImage,
//     },
//     {
//       name: "Shellac soakoff",
//       location: "15m",
//       price: "KES 1,000",
//       department: "Shellac",
//       description: "Quick and safe soak-off removal of Shellac to restore natural nails.",
//       image: shellacImage,
//     },
//     {
//       name: "Nail art",
//       location: "30m",
//       price: "from KES 2,000",
//       department: "Manicure",
//       description: "Creative nail art designs tailored to your style, from simple accents to intricate patterns.",
//       image: nailArtImage,
//     },
//     {
//       name: "Pedicure",
//       location: "45m",
//       price: "KES 3,700",
//       department: "Pedicure",
//       description: "Relaxing pedicure with exfoliation, massage, and polish for soft, smooth feet.",
//       image: pedicureImage,
//     },
//     {
//       name: "Shellac pedicure",
//       location: "1h–1h15m",
//       price: "KES 4,000",
//       department: "Shellac",
//       description: "Long-wear Shellac pedicure for durable color and foot pampering.",
//       image: shellacImage,
//     },
//     {
//       name: "Overlays on natural nails",
//       location: "1h 30m",
//       price: "KES 4,500",
//       department: "Extensions",
//       description: "Enhance your natural nails with durable overlays for a polished, long-lasting finish.",
//       image: overlayImage,
//     },
//     {
//       name: "Overlays soakoff",
//       location: "20–45m",
//       price: "KES 1,000",
//       department: "Extensions",
//       description: "Gentle removal of overlays to prepare nails for new applications without damage.",
//       image: overlayImage,
//     },
//     {
//       name: "Acrylic extension",
//       location: "2h",
//       price: "KES 8,000",
//       department: "Extensions",
//       description: "Custom acrylic extensions for added length and strength with natural-looking results.",
//       image: acrylicImage,
//     },
//   ];

//   const departments = [
//     { id: "All", label: "All Services" },
//     { id: "Manicure", label: "Manicure" },
//     { id: "Pedicure", label: "Pedicure" },
//     { id: "Shellac", label: "Shellac" },
//     { id: "Extensions", label: "Extensions" },
//   ];

//   const filteredServices =
//     selectedDepartment === "All"
//       ? allServices
//       : allServices.filter((service) => service.department === selectedDepartment);

//   return (
//     <div className="min-h-screen">
//       <ServiceHero
//         title="Nail Services"
//         titleGradient="& Artistry"
//         description="Professional nail care and stunning designs tailored to express your unique style."
//         image={nailHero}
//         imageAlt="Nail services at Avya Beauty"
//       />

//       {/* Introduction */}
//       <section className="py-16 px-6 bg-white">
//         <div className="container mx-auto max-w-4xl text-center">
//           <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
//             At Avya, we offer comprehensive nail services in Nairobi.
//             From flawless manicures and pedicures to transformative designs, our skilled beauty therapists
//             use premium products and techniques to deliver personalized results that enhance your natural beauty.
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
//                         <span className="text-base font-medium text-[#262626]">Duration</span>
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

//       {/* Process Section */}
//       <section className="py-20 px-6 bg-white">
//         <div className="container mx-auto max-w-5xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-medium text-[#262626] mb-4">How It Works</h2>
//             <div className="w-24 h-[1px] bg-[#595959] mx-auto"></div>
//           </div>
//           <div className="grid md:grid-cols-4 gap-12">
//             {[
//               {
//                 step: "01",
//                 title: "Consultation",
//                 description: "Comprehensive assessment to understand your concerns and goals",
//               },
//               {
//                 step: "02",
//                 title: "Custom Plan",
//                 description: "Personalized treatment protocol designed for your needs",
//               },
//               {
//                 step: "03",
//                 title: "Treatment",
//                 description: "Expert application of advanced therapies and technologies",
//               },
//               {
//                 step: "04",
//                 title: "Follow-Up",
//                 description: "Ongoing support and adjustments for optimal results",
//               },
//             ].map((item) => (
//               <div key={item.step} className="text-center">
//                 <div className="text-5xl font-medium text-[#C1B5C6] mb-4">{item.step}</div>
//                 <h3 className="text-2xl font-medium text-[#262626] mb-3">{item.title}</h3>
//                 <p className="text-base text-[#262626] leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer Note */}
//       <section className="py-16 px-6 bg-[#E2DBDF]/30">
//         <div className="container mx-auto max-w-4xl text-center">
//           <p className="text-base text-[#262626] leading-relaxed">
//             <span className="font-medium">Please Note:</span> All treatments are consultation-based.
//             Pricing and treatment plans will be customized during your initial consultation based on
//             your specific needs, desired outcomes, and our expert assessment. Contact us to book your
//             consultation and begin your transformation journey.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Nail;
import React from "react";
import ServiceHero from "@/components/ui/ServiceHero";
import nailHero from "@/assets/nail.png";

const Nail = () => {
  const [selectedDepartment, setSelectedDepartment] = React.useState("All");

  const allServices = [
    {
      name: "Manicure",
      location: "30m",
      price: "KES 2,000",
      department: "Manicure",
      description: "Classic manicure with shaping, cuticle care, and polish for healthy, beautiful nails.",
    },
    {
      name: "Shellac manicure",
      location: "45m",
      price: "KES 3,500",
      department: "Shellac",
      description: "Chip-resistant Shellac polish for a flawless manicure that lasts up to two weeks.",
    },
    {
      name: "Shellac application",
      location: "30m",
      price: "KES 2,000",
      department: "Shellac",
      description: "Professional application of Shellac for vibrant color and superior shine.",
    },
    {
      name: "Shellac soakoff",
      location: "15m",
      price: "KES 1,000",
      department: "Shellac",
      description: "Quick and safe soak-off removal of Shellac to restore natural nails.",
    },
    {
      name: "Nail art",
      location: "30m",
      price: "from KES 2,000",
      department: "Manicure",
      description: "Creative nail art designs tailored to your style, from simple accents to intricate patterns.",
    },
    {
      name: "Pedicure",
      location: "45m",
      price: "KES 3,700",
      department: "Pedicure",
      description: "Relaxing pedicure with exfoliation, massage, and polish for soft, smooth feet.",
    },
    {
      name: "Shellac pedicure",
      location: "1h–1h15m",
      price: "KES 4,000",
      department: "Shellac",
      description: "Long-wear Shellac pedicure for durable color and foot pampering.",
    },
    {
      name: "Overlays on natural nails",
      location: "1h 30m",
      price: "KES 4,500",
      department: "Extensions",
      description: "Enhance your natural nails with durable overlays for a polished, long-lasting finish.",
    },
    {
      name: "Overlays soakoff",
      location: "20–45m",
      price: "KES 1,000",
      department: "Extensions",
      description: "Gentle removal of overlays to prepare nails for new applications without damage.",
    },
    {
      name: "Acrylic extension",
      location: "2h",
      price: "KES 8,000",
      department: "Extensions",
      description: "Custom acrylic extensions for added length and strength with natural-looking results.",
    },
  ];

  const departments = [
    { id: "All", label: "All Services" },
    { id: "Manicure", label: "Manicure" },
    { id: "Pedicure", label: "Pedicure" },
    { id: "Shellac", label: "Shellac" },
    { id: "Extensions", label: "Extensions" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="Nail Services"
        titleGradient="& Artistry"
        description="Professional nail care and stunning designs tailored to express your unique style."
        image={nailHero}
        imageAlt="Nail services at Avya Beauty"
      />

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
            At Avya, we offer nail services in Nairobi.
            From flawless manicures and pedicures to transformative designs, our skilled beauty therapists
            use premium products and techniques to deliver personalized results that enhance your natural beauty.
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
                            Duration
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
                  {dept.id === "Shellac" && (
                    <p className="mt-6 text-sm text-[#595959] italic text-center">
                      Shellac services include a consultation and aftercare advice for long-lasting results.
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

export default Nail;
