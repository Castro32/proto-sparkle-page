// // import React from 'react';
// // import { Button } from "@/components/ui/button";
// // import ServiceHero from "@/components/ui/ServiceHero";
// // import eyelashHero from "@/assets/ey.png";
// // // Import service images (reuse or placeholder; add more as needed)
// // import classicImage from "@/assets/op.png"; // Placeholder for classic
// // import volumeImage from "@/assets/op1.png"; // Placeholder for volume
// // import laminationImage from "@/assets/op2.png"; // Placeholder for lamination
// // import tintingImage from "@/assets/op3.png"; // Placeholder for tinting
// // import defaultImage from "@/assets/op3.png";

// // const Eyelash = () => {
// //   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

// //   const allServices = [
// //     {
// //       name: "Classic",
// //       location: "",
// //       price: "KES 8,800",
// //       department: "Eyelash Extensions",
// //       description: "Natural-looking single lash extensions applied to each natural lash for subtle volume and length.",
// //       image: classicImage,
// //     },
// //     {
// //       name: "2D",
// //       location: "",
// //       price: "KES 10,000",
// //       department: "Eyelash Extensions",
// //       description: "Light volume with two lashes per natural lash for added fullness and definition.",
// //       image: volumeImage,
// //     },
// //     {
// //       name: "3D",
// //       location: "",
// //       price: "KES 11,000",
// //       department: "Eyelash Extensions",
// //       description: "Medium volume fans for balanced drama and enhanced eye definition.",
// //       image: volumeImage,
// //     },
// //     {
// //       name: "4D",
// //       location: "",
// //       price: "KES 12,000",
// //       department: "Eyelash Extensions",
// //       description: "Full volume application for striking, glamorous lash effects.",
// //       image: volumeImage,
// //     },
// //     {
// //       name: "5D",
// //       location: "",
// //       price: "KES 13,000",
// //       department: "Eyelash Extensions",
// //       description: "High-density volume for ultra-dramatic, bold eye looks.",
// //       image: volumeImage,
// //     },
// //     {
// //       name: "Eyebrow Lamination (Lifting)",
// //       location: "",
// //       price: "KES 8,800",
// //       department: "Lamination",
// //       description: "Reshape and lift eyebrows for a groomed, long-lasting natural arch.",
// //       image: laminationImage,
// //     },
// //     {
// //       name: "Eyelash Lamination (Lifting)",
// //       location: "",
// //       price: "KES 7,700",
// //       department: "Lamination",
// //       description: "Curl and lift natural lashes for a wide-eyed, mascara-free appearance.",
// //       image: laminationImage,
// //     },
// //     {
// //       name: "Eyebrow Tinting & Shaping",
// //       location: "",
// //       price: "KES 5,500",
// //       department: "Other",
// //       description: "Color and precise shaping to define and enhance your brows.",
// //       image: tintingImage,
// //     },
// //   ];

// //   const departments = [
// //     { id: "All", label: "All Services" },
// //     { id: "Eyelash Extensions", label: "Extensions" },
// //     { id: "Lamination", label: "Lamination" },
// //     { id: "Other", label: "Other" },
// //   ];

// //   const filteredServices =
// //     selectedDepartment === "All"
// //       ? allServices
// //       : allServices.filter((service) => service.department === selectedDepartment);

// //   return (
// //     <div className="min-h-screen">
// //       <ServiceHero
// //         title="Eyelash Extensions"
// //         titleGradient="& Lamination"
// //         description="Transform your eyes with professional eyelash extensions and lamination for stunning, long-lasting beauty."
// //         image={eyelashHero}
// //         imageAlt="Eyelash extensions and lamination services"
// //       />

// //       {/* Introduction */}
// //       <section className="py-16 px-6 bg-white">
// //         <div className="container mx-auto max-w-4xl text-center">
// //           <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
// //             At Avya, we bring comprehensive eyelash and brow services to Nairobi.
// //             Whether you're seeking dramatic extensions, natural lifts, or defined shaping, our expert team
// //             uses premium products and techniques to deliver exceptional results tailored to your unique features.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Department Filter */}
// //       <section className="py-8 px-6 bg-[#595959]">
// //         <div className="container mx-auto max-w-6xl">
// //           <div className="flex flex-wrap justify-center gap-4">
// //             {departments.map((dept) => (
// //               <button
// //                 key={dept.id}
// //                 onClick={() => setSelectedDepartment(dept.id)}
// //                 className={`px-6 py-3 text-base font-medium tracking-wide transition-all ${
// //                   selectedDepartment === dept.id
// //                     ? "bg-white text-[#262626] border border-[#262626]"
// //                     : "bg-transparent text-white border border-white hover:bg-white hover:text-[#262626]"
// //                 }`}
// //               >
// //                 {dept.label}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services Grid */}
// //       <section className="py-20 px-6 bg-[#E2DBDF]/20">
// //         <div className="container mx-auto max-w-6xl">
// //           <div className="space-y-24">
// //             {filteredServices.map((service, index) => (
// //               <div
// //                 key={`${service.name}-${service.location}-${index}`}
// //                 className={`grid md:grid-cols-2 gap-12 items-center ${
// //                   index % 2 === 0 ? "" : "md:flex-row-reverse"
// //                 }`}
// //               >
// //                 {/* Image Side */}
// //                 <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
// //                   <div className="aspect-[4/3] bg-[#595959]/20 rounded-sm overflow-hidden">
// //                     <img
// //                       src={service.image || defaultImage}
// //                       alt={service.name}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Content Side */}
// //                 <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
// //                   <div className="space-y-4">
// //                     <div>
// //                       <p className="text-sm text-[#595959] uppercase tracking-widest mb-3">
// //                         {service.department}
// //                       </p>
// //                       <h3 className="text-3xl md:text-4xl font-medium text-[#262626] mb-2">
// //                         {service.name}
// //                       </h3>
// //                       {service.location && (
// //                         <p className="text-base text-[#262626] font-medium">{service.location}</p>
// //                       )}
// //                     </div>
// //                     <p className="text-lg text-[#262626] leading-relaxed">
// //                       {service.description}
// //                     </p>

// //                     {/* Price Table */}
// //                     <div className="pt-4 space-y-2">
// //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// //                         <span className="text-base font-medium text-[#262626]">Treatment</span>
// //                         <span className="text-base font-medium text-[#262626]">{service.name}</span>
// //                       </div>
// //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// //                         <span className="text-base font-medium text-[#262626]">Area</span>
// //                         <span className="text-base font-medium text-[#262626]">
// //                           {service.location || "Various"}
// //                         </span>
// //                       </div>
// //                       <div className="flex justify-between items-center py-3 border-b border-[#595959]/20">
// //                         <span className="text-base font-medium text-[#262626]">Price</span>
// //                         <span className="text-base font-medium text-[#262626]">{service.price}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Process Section */}
// //       <section className="py-20 px-6 bg-white">
// //         <div className="container mx-auto max-w-5xl">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl md:text-5xl font-medium text-[#262626] mb-4">How It Works</h2>
// //             <div className="w-24 h-[1px] bg-[#595959] mx-auto"></div>
// //           </div>
// //           <div className="grid md:grid-cols-4 gap-12">
// //             {[
// //               {
// //                 step: "01",
// //                 title: "Consultation",
// //                 description: "Comprehensive assessment to understand your concerns and goals",
// //               },
// //               {
// //                 step: "02",
// //                 title: "Custom Plan",
// //                 description: "Personalized treatment protocol designed for your needs",
// //               },
// //               {
// //                 step: "03",
// //                 title: "Treatment",
// //                 description: "Expert application of advanced therapies and technologies",
// //               },
// //               {
// //                 step: "04",
// //                 title: "Follow-Up",
// //                 description: "Ongoing support and adjustments for optimal results",
// //               },
// //             ].map((item) => (
// //               <div key={item.step} className="text-center">
// //                 <div className="text-5xl font-medium text-[#C1B5C6] mb-4">{item.step}</div>
// //                 <h3 className="text-2xl font-medium text-[#262626] mb-3">{item.title}</h3>
// //                 <p className="text-base text-[#262626] leading-relaxed">{item.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer Note */}
// //       <section className="py-16 px-6 bg-[#E2DBDF]/30">
// //         <div className="container mx-auto max-w-4xl text-center">
// //           <p className="text-base text-[#262626] leading-relaxed">
// //             <span className="font-medium">Please Note:</span> All treatments are consultation-based.
// //             Pricing and treatment plans will be customized during your initial consultation based on
// //             your specific needs, desired outcomes, and our expert assessment. Contact us to book your
// //             consultation and begin your transformation journey.
// //           </p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Eyelash;
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import ServiceHero from "@/components/ui/ServiceHero";
// import eyelashHero from "@/assets/lash.png";
// // Import service images
// import classicImage from "@/assets/op.png";
// import volumeImage from "@/assets/op1.png";
// import laminationImage from "@/assets/op2.png";
// import tintingImage from "@/assets/op3.png";
// import defaultImage from "@/assets/op3.png";

// const Eyelash = () => {
//   const navigate = useNavigate();
//   const [selectedDepartment, setSelectedDepartment] = React.useState("All");

//   const allServices = [
//     {
//       name: "Classic",
//       location: "",
//       price: "KES 8,800",
//       department: "Eyelash Extensions",
//       description: "Natural-looking single lash extensions applied to each natural lash for subtle volume and length.",
//       image: classicImage,
//     },
//     {
//       name: "2D",
//       location: "",
//       price: "KES 10,000",
//       department: "Eyelash Extensions",
//       description: "Light volume with two lashes per natural lash for added fullness and definition.",
//       image: volumeImage,
//     },
//     {
//       name: "3D",
//       location: "",
//       price: "KES 11,000",
//       department: "Eyelash Extensions",
//       description: "Medium volume fans for balanced drama and enhanced eye definition.",
//       image: volumeImage,
//     },
//     {
//       name: "4D",
//       location: "",
//       price: "KES 12,000",
//       department: "Eyelash Extensions",
//       description: "Full volume application for striking, glamorous lash effects.",
//       image: volumeImage,
//     },
//     {
//       name: "5D",
//       location: "",
//       price: "KES 13,000",
//       department: "Eyelash Extensions",
//       description: "High-density volume for ultra-dramatic, bold eye looks.",
//       image: volumeImage,
//     },
//     {
//       name: "Eyebrow Lamination (Lifting)",
//       location: "",
//       price: "KES 8,800",
//       department: "Lamination",
//       description: "Reshape and lift eyebrows for a groomed, long-lasting natural arch.",
//       image: laminationImage,
//     },
//     {
//       name: "Eyelash Lamination (Lifting)",
//       location: "",
//       price: "KES 7,700",
//       department: "Lamination",
//       description: "Curl and lift natural lashes for a wide-eyed, mascara-free appearance.",
//       image: laminationImage,
//     },
//     {
//       name: "Eyebrow Tinting & Shaping",
//       location: "",
//       price: "KES 5,500",
//       department: "Other",
//       description: "Color and precise shaping to define and enhance your brows.",
//       image: tintingImage,
//     },
//   ];

//   const departments = [
//     { id: "All", label: "All Services" },
//     { id: "Eyelash Extensions", label: "Extensions" },
//     { id: "Lamination", label: "Lamination" },
//     { id: "Other", label: "Other" },
//   ];

//   const filteredServices =
//     selectedDepartment === "All"
//       ? allServices
//       : allServices.filter((service) => service.department === selectedDepartment);

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <ServiceHero
//         title="Eyelash Extensions"
//         titleGradient="& Lamination"
//         description="Transform your eyes with professional eyelash extensions and lamination for stunning, long-lasting beauty."
//         image={eyelashHero}
//         imageAlt="Eyelash extensions and lamination services"
//       />

//       {/* Introduction */}
//       <section className="py-16 px-6 bg-white">
//         <div className="container mx-auto max-w-4xl text-center">
//           <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
//             At Avya, we bring comprehensive eyelash and brow services to Nairobi.
//             Whether you're seeking dramatic extensions, natural lifts, or defined shaping, our expert team
//             uses premium products and techniques to deliver exceptional results tailored to your unique features.
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
//                   <a
//                     href="#"
//                     className="relative overflow-hidden aspect-[4/3] group block"
//                   >
//                     <img
//                       src={service.image || defaultImage}
//                       alt={service.name}
//                       className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
//                   </a>
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
//                     {/* Button */}
//                     <Button
//                       onClick={() => navigate("/contact#contact-form")}
//                       className="bg-[#262626] hover:bg-[#595959] text-[#E2DBDF] w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 rounded transition-colors"
//                     >
//                       BOOK NOW
//                     </Button>
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

// export default Eyelash;
import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceHero from "@/components/ui/ServiceHero";
import eyelashHero from "@/assets/lash.png";
import { Button } from "@/components/ui/button";

const Eyelash = () => {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = React.useState("All");

  const allServices = [
    {
      name: "Classic",
      location: "",
      price: "KES 9,000",
      department: "Eyelash Extensions",
      description: "Natural-looking single lash extensions applied to each natural lash for subtle volume and length.",
    },
    {
      name: "2D",
      location: "",
      price: "KES 10,000",
      department: "Eyelash Extensions",
      description: "Light volume with two lashes per natural lash for added fullness and definition.",
    },
    {
      name: "3D",
      location: "",
      price: "KES 11,000",
      department: "Eyelash Extensions",
      description: "Medium volume fans for balanced drama and enhanced eye definition.",
    },
    {
      name: "4D",
      location: "",
      price: "KES 12,000",
      department: "Eyelash Extensions",
      description: "Full volume application for striking, glamorous lash effects.",
    },
    {
      name: "5D",
      location: "",
      price: "KES 13,000",
      department: "Eyelash Extensions",
      description: "High-density volume for ultra-dramatic, bold eye looks.",
    },
    {
      name: "Eyebrow Lamination (Lifting)",
      location: "",
      price: "KES 9,000",
      department: "Lamination",
      description: "Perfectly sculpted brows that frame your face with precision and style.",
    },
    {
      name: "Eyelash Lamination (Lifting)",
      location: "",
      price: "KES 8,000",
      department: "Lamination",
      description: "Fuller, flutter-ready lashes for a natural yet striking look.",
    },
    {
      name: "Eyebrow Shaping & Tinting",
      location: "",
      price: "KES 6,000",
      department: "Other",
      description: "Perfectly sculpted brows that frame your face with precision and style.",
    },
  ];

  const departments = [
    { id: "All", label: "All Services" },
    { id: "Eyelash Extensions", label: "Extensions" },
    { id: "Lamination", label: "Lamination" },
    { id: "Other", label: "Other" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="Eyelash Extensions"
        titleGradient="& Lamination"
        description="Transform your eyes with professional eyelash extensions and lamination for stunning, long-lasting beauty."
        image={eyelashHero}
        imageAlt="Eyelash extensions and lamination services"
      />

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg md:text-xl text-[#262626] leading-relaxed">
            At Avya, we bring eyelash and brow services to Nairobi.
            Whether you're seeking dramatic extensions, natural lifts, or defined shaping, our expert team
            uses premium products and techniques to deliver exceptional results tailored to your unique features.
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
                            
                            <td className="py-4 px-4 text-base text-[#262626] text-right">
                              {service.price}
                            </td>
                            
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Optional: Add department-specific notes */}
                  {dept.id === "Eyelash Extensions" && (
                    <p className="mt-6 text-sm text-[#595959] italic text-center">
                      All eyelash extensions are customized to your eye shape and desired look.
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

export default Eyelash;
