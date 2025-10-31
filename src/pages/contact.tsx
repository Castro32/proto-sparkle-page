// // // import React, { useState, useEffect } from 'react';
// // // import { Send, MapPin, Clock, Mail, Phone, Instagram, Facebook, HelpCircle, ChevronDown } from 'lucide-react';

// // // const TikTokIcon = ({ className = "w-6 h-6" }) => (
// // //   <svg
// // //     className={className}
// // //     fill="currentColor"
// // //     viewBox="0 0 24 24"
// // //     aria-hidden="true"
// // //   >
// // //     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
// // //   </svg>
// // // );

// // // export default function Contact() {
// // //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const [openFaq, setOpenFaq] = useState(null);

// // //   useEffect(() => {
// // //     setIsVisible(true);
// // //   }, []);

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     alert('Thank you for reaching out! We will get back to you soon.');
// // //     setFormData({ name: '', email: '', message: '' });
// // //   };

// // //   const toggleFaq = (index) => {
// // //     setOpenFaq(openFaq === index ? null : index);
// // //   };

// // //   const faqs = [
// // //     {
// // //       question: "What services do you offer at Avya Beauty?",
// // //       answer: "We specialize in premium hair care treatments including cuts, coloring, styling, deep conditioning, and personalized scalp therapies using natural, high-quality products tailored to your hair type."
// // //     },
// // //     {
// // //       question: "Do you treat all hair types?",
// // //       answer: "Absolutely! Every service includes personalized aftercare guidance. We'll recommend products and routines specific to your hair type and treatment to help maintain your results between visits."
// // //     },
// // //     {
// // //       question: "What's the difference between nanoplastia and keratin?",
// // //       answer: "Nanoplastia is formaldehyde-free, repairs damage while smoothing, and lasts longer on textured hair. Unlike traditional keratin treatments, nanoplastia uses nano-sized particles that penetrate deeper into the hair shaft, providing superior results without harsh chemicals."
// // //     },
// // //     {
// // //       question: "What if I'm experiencing hair loss?",
// // //       answer: "Our certified trichologists will assess your scalp and customize a treatment plan using our advanced diagnostic tools. We identify the root cause of your hair loss and create a personalized protocol using medical-grade treatments and technologies."
// // //     },
// // //     {
// // //       question: "Do I need a consultation?",
// // //       answer: "For trichology services and major hair transformations, yes — a consultation ensures we understand your goals and create the right treatment plan. For styling and glam services, walk-ins are welcome based on availability, though we recommend booking ahead for guaranteed service."
// // //     },
// // //     {
// // //       question: "How long do treatments typically take?",
// // //       answer: "Treatment times vary depending on the service. Quick styling sessions may take 1-2 hours, while comprehensive treatments like nanoplastia or trichology sessions can take 3-4 hours. We'll provide accurate timing during your consultation or booking."
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-[#E2DBDF] font-sans">
// // //       {/* Hero Section */}
// // //       <section
// // //         className="relative h-screen flex items-end px-4 pb-20"
// // //         style={{
// // //           backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&h=1080&fit=crop')",
// // //           backgroundSize: 'cover',
// // //           backgroundPosition: 'center',
// // //         }}
// // //       >
// // //         <div className="absolute inset-0 bg-black/40" />
// // //         <div className="relative z-10 max-w-7xl mx-auto w-full">
// // //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 mb-8">
// // //               <span className="w-2 h-2 rounded-full bg-[#B0C2B0] animate-pulse" />
// // //               <span className="text-sm tracking-wider text-white font-medium">CONNECT WITH US</span>
// // //             </div> */}
// // //             <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
// // //               Let's Create Something
// // //               <br />
// // //               <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">Beautiful Together</span>
// // //             </h1>
// // //             <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
// // //               Your journey to exceptional hair care starts here. Reach out for personalized consultations,
// // //               bookings, or any questions about our services.
// // //             </p>
// // //             <div className="flex flex-wrap gap-6">
// // //               <a
// // //                   href="#contact-form"
// // //                   className="bg-white hover:bg-[#595959] text-[#262626] hover:text-white w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
// // //                 >
// // //                   Send Message
// // //               </a>

// // //               <a
// // //                   href="tel:+254116444433"
// // //                   className="bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#262626] border border-white/40 w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
// // //                 >
// // //                   Call Now
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Contact Form Section */}
// // //       <section id="contact-form" className="relative py-24 px-4 bg-[#E2DBDF]">
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="text-center mb-16">
// // //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C1B5C6]/30 mb-6 shadow-sm">
// // //               <span className="w-2 h-2 rounded-full bg-[#595959]" />
// // //               <span className="text-sm tracking-wider text-[#262626] font-medium">GET IN TOUCH</span>
// // //             </div>
// // //             <h2 className="text-4xl md:text-5xl font-extralight mb-4">
// // //               <span className="text-[#262626]">Start the </span>
// // //               <span className="bg-gradient-to-r from-[#595959] to-[#262626] bg-clip-text text-transparent">Conversation</span>
// // //             </h2>
// // //             <p className="text-[#595959] font-light max-w-2xl mx-auto">
// // //               We're here to answer your questions and help you book your next appointment
// // //             </p>
// // //           </div>

// // //           {/* Bento Grid Layout */}
// // //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
// // //             {/* Contact Form - Takes 7 columns */}
// // //             <div className="lg:col-span-7">
// // //               <div className="h-full p-8 md:p-10 rounded-3xl bg-white border border-gray-200 shadow-lg">
// // //                 <h3 className="text-4xl font-extralight bg-gradient-to-r from-[#595959] to-[#262626] bg-clip-text text-transparent mb-8">
// // //                   Send Us a Message
// // //                 </h3>
                
// // //                 <form onSubmit={handleSubmit} className="space-y-6">
// // //                   <div className="relative">
// // //                     <input
// // //                       type="text"
// // //                       name="name"
// // //                       placeholder="Your Name"
// // //                       value={formData.name}
// // //                       onChange={handleChange}
// // //                       required
// // //                       className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-[#262626] placeholder-[#595959]/50 focus:outline-none focus:border-[#595959] focus:bg-white transition-all duration-300"
// // //                     />
// // //                   </div>

// // //                   <div className="relative">
// // //                     <input
// // //                       type="email"
// // //                       name="email"
// // //                       placeholder="Your Email"
// // //                       value={formData.email}
// // //                       onChange={handleChange}
// // //                       required
// // //                       className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-[#262626] placeholder-[#595959]/50 focus:outline-none focus:border-[#595959] focus:bg-white transition-all duration-300"
// // //                     />
// // //                   </div>

// // //                   <div className="relative">
// // //                     <textarea
// // //                       name="message"
// // //                       placeholder="Your Message"
// // //                       value={formData.message}
// // //                       onChange={handleChange}
// // //                       required
// // //                       rows={6}
// // //                       className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-[#262626] placeholder-[#595959]/50 focus:outline-none focus:border-[#595959] focus:bg-white resize-none transition-all duration-300"
// // //                     />
// // //                   </div>

// // //                   <button
// // //                     type="submit"
// // //                     className="w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-[#595959] to-[#262626] text-white font-medium text-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3"
// // //                   >
// // //                     <Send className="w-5 h-5" />
// // //                     Send Message
// // //                   </button>
// // //                 </form>
// // //               </div>
// // //             </div>

// // //             {/* Contact Info - Takes 5 columns */}
// // //             <div className="lg:col-span-5 space-y-6">
// // //               {/* Location */}
// // //               <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
// // //                 <div className="flex items-start gap-4">
// // //                   <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/10 to-[#B0C2B0]/10">
// // //                     <MapPin className="w-6 h-6 text-[#595959]" />
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <h3 className="text-lg font-medium text-[#262626] mb-2">Visit Us</h3>
// // //                     <p className="text-sm text-[#595959]">1st Floor, Mwanzi Market</p>
// // //                     <p className="text-sm text-[#595959]">Westlands, Nairobi, Kenya</p>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Hours */}
// // //               <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
// // //                 <div className="flex items-start gap-4">
// // //                   <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/10 to-[#B0C2B0]/10">
// // //                     <Clock className="w-6 h-6 text-[#595959]" />
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <h3 className="text-lg font-medium text-[#262626] mb-2">Working Hours</h3>
// // //                     <p className="text-sm text-[#595959]">Mon - Sat: 9am - 7pm</p>
// // //                     <p className="text-sm text-[#595959]">Sun: 10am - 6pm</p>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Contact Methods - Grid */}
// // //               <div className="grid grid-cols-2 gap-4">
// // //                 <a
// // //                   href="mailto:hello@avyabeauty.co.ke"
// // //                   className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
// // //                 >
// // //                   <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/10 to-[#B0C2B0]/10 mb-4 inline-block">
// // //                     <Mail className="w-6 h-6 text-[#595959]" />
// // //                   </div>
// // //                   <h3 className="text-sm font-medium text-[#262626] mb-1">Email</h3>
// // //                   <p className="text-xs text-[#595959]">Send message</p>
// // //                 </a>

// // //                 <a
// // //                   href="tel:+254116444433"
// // //                   className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
// // //                 >
// // //                   <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/10 to-[#B0C2B0]/10 mb-4 inline-block">
// // //                     <Phone className="w-6 h-6 text-[#595959]" />
// // //                   </div>
// // //                   <h3 className="text-sm font-medium text-[#262626] mb-1">Phone</h3>
// // //                   <p className="text-xs text-[#595959]">Call directly</p>
// // //                 </a>
// // //               </div>

// // //               {/* Social Media */}
// // //               <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
// // //                 <h3 className="text-lg font-medium text-[#262626] mb-4">Follow Us</h3>
// // //                 <div className="flex gap-3">
// // //                   {[
// // //                     { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/avya" },
// // //                     { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/avya" },
// // //                     { icon: <TikTokIcon className="w-5 h-5" />, href: "https://tiktok.com/@avya" },
// // //                   ].map((social, idx) => (
// // //                     <a
// // //                       key={idx}
// // //                       href={social.href}
// // //                       className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center transition-all duration-300 hover:bg-[#595959] hover:border-[#595959] hover:scale-110 group"
// // //                     >
// // //                       <span className="text-[#595959] group-hover:text-white transition-colors">
// // //                         {social.icon}
// // //                       </span>
// // //                     </a>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Map Section */}
// // //       <section className="relative py-24 px-4 bg-[#E2DBDF]">
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="text-center mb-16">
// // //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C1B5C6]/30 mb-6 shadow-sm">
// // //               <span className="w-2 h-2 rounded-full bg-[#595959]" />
// // //               <span className="text-sm tracking-wider text-[#262626] font-medium">LOCATION</span>
// // //             </div>
// // //             <h2 className="text-4xl md:text-5xl font-extralight mb-4">
// // //               <span className="text-[#262626]">Find Us </span>
// // //               <span className="bg-gradient-to-r from-[#595959] to-[#262626] bg-clip-text text-transparent">Here</span>
// // //             </h2>
// // //             <p className="text-[#595959] font-light">
// // //               Located in the heart of Westlands, Nairobi
// // //             </p>
// // //           </div>

// // //           <div className="relative">
// // //             <div className="h-[600px] rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl">
// // //               <iframe
// // //                 className="w-full h-full"
// // //                 src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=mwanzi market westlands&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
// // //                 allowFullScreen
// // //                 loading="lazy"
// // //                 referrerPolicy="no-referrer-when-downgrade"
// // //                 title="Location Map"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* FAQ Section */}
// // //       <section className="relative py-24 px-4 bg-[#E2DBDF]">
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="text-center mb-16">
// // //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C1B5C6]/30 mb-6 shadow-sm">
// // //               <HelpCircle className="w-4 h-4 text-[#595959]" />
// // //               <span className="text-sm tracking-wider text-[#262626] font-medium">FAQ</span>
// // //             </div>

// // //             <h2 className="text-4xl md:text-6xl font-extralight text-[#262626] mb-6">
// // //               Frequently Asked
// // //               <br />
// // //               <span className="bg-gradient-to-r from-[#595959] to-[#262626] bg-clip-text text-transparent">Questions</span>
// // //             </h2>
// // //             <p className="text-[#595959] font-light max-w-2xl mx-auto">
// // //               Find answers to common questions about our services
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             {faqs.map((faq, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="cursor-pointer"
// // //                 onClick={() => toggleFaq(index)}
// // //               >
// // //                 <div className={`p-8 rounded-2xl bg-white border transition-all duration-300 ${
// // //                   openFaq === index 
// // //                     ? 'border-[#595959] shadow-lg' 
// // //                     : 'border-gray-200 shadow-sm hover:shadow-md'
// // //                 }`}>
// // //                   <div className="flex items-start gap-4 mb-4">
// // //                     <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-1 transition-all duration-300 ${
// // //                       openFaq === index 
// // //                         ? 'bg-[#595959]' 
// // //                         : 'bg-[#C1B5C6]/40'
// // //                     }`} />
// // //                     <div className="flex-1">
// // //                       <h3 className="text-xl font-light text-[#262626] mb-2 hover:text-[#595959] transition-colors">
// // //                         {faq.question}
// // //                       </h3>
// // //                     </div>
// // //                     <ChevronDown
// // //                       className={`w-6 h-6 text-[#595959] transition-transform duration-300 flex-shrink-0 ${
// // //                         openFaq === index ? 'rotate-180' : ''
// // //                       }`}
// // //                     />
// // //                   </div>

// // //                   <div className={`overflow-hidden transition-all duration-500 ease-out ${
// // //                     openFaq === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
// // //                   }`}>
// // //                     <div className="pl-7 border-l-2 border-[#C1B5C6]/30">
// // //                       <p className="text-[#595959] font-light leading-relaxed">
// // //                         {faq.answer}
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="mt-20 text-center">
// // //             <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl bg-white border border-gray-200 shadow-lg">
// // //               <p className="text-[#595959] font-light text-lg">
// // //                 Still have questions? We're here to help
// // //               </p>
// // //               <a
// // //                 href="#contact-form"
// // //                 className="px-10 py-5 rounded-full bg-gradient-to-r from-[#595959] to-[#262626] text-white font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2"
// // //               >
// // //                 Contact Our Team
// // //                 <Send className="w-5 h-5" />
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }
// // import React, { useState, useEffect } from 'react';
// // import { Send, MapPin, Clock, Mail, Phone, Instagram, Facebook, HelpCircle, ChevronDown } from 'lucide-react';

// // const TikTokIcon = ({ className = "w-6 h-6" }) => (
// //   <svg
// //     className={className}
// //     fill="currentColor"
// //     viewBox="0 0 24 24"
// //     aria-hidden="true"
// //   >
// //     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
// //   </svg>
// // );

// // export default function Contact() {
// //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [openFaq, setOpenFaq] = useState(null);
// //   const [particles, setParticles] = useState([]);

// //   useEffect(() => {
// //     setIsVisible(true);
// //     const particleArray = Array.from({ length: 20 }, (_, i) => ({
// //       id: i,
// //       x: Math.random() * 100,
// //       y: Math.random() * 100,
// //       delay: Math.random() * 4,
// //     }));
// //     setParticles(particleArray);
// //   }, []);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert('Thank you for reaching out! We will get back to you soon.');
// //     setFormData({ name: '', email: '', message: '' });
// //   };

// //   const toggleFaq = (index) => {
// //     setOpenFaq(openFaq === index ? null : index);
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#E2DBDF] font-sans relative overflow-hidden">
// //       {/* Futuristic Grid Background */}
// //       <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />

// //       {/* Floating Particles */}
// //       {particles.map((particle) => (
// //         <div
// //           key={particle.id}
// //           className="fixed w-1 h-1 bg-[#B0C2B0] rounded-full particle pointer-events-none"
// //           style={{
// //             left: `${particle.x}%`,
// //             top: `${particle.y}%`,
// //             animationDelay: `${particle.delay}s`,
// //             opacity: 0.6,
// //           }}
// //         />
// //       ))}

// //       {/* Hero Section */}
// //       <section
// //         className="relative h-screen flex items-end px-4 pb-20"
// //         style={{
// //           backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&h=1080&fit=crop')",
// //           backgroundSize: 'cover',
// //           backgroundPosition: 'center',
// //         }}
// //       >
// //         <div className="absolute inset-0 bg-black/50" />
// //         <div className="relative z-10 max-w-7xl mx-auto w-full">
// //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //             <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
// //               Let's Create Something
// //               <br />
// //               <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
// //                 Beautiful Together
// //               </span>
// //             </h1>
// //             <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
// //               Your journey to exceptional hair care starts here. Reach out for personalized consultations,
// //               bookings, or any questions about our services.
// //             </p>
// //             <div className="flex flex-wrap gap-6">
// //               <a
// //                 href="#contact-form"
// //                 className="bg-white hover:bg-[#595959] text-[#262626] hover:text-white w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
// //               >
// //                 Send Message
// //               </a>
// //               <a
// //                 href="tel:+254116444433"
// //                 className="bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#262626] border border-white/40 w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
// //               >
// //                 Call Now
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Form Section */}
// //       <section id="contact-form" className="relative py-24 px-4 md:px-12 lg:px-20 bg-[#262626]">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="text-center mb-16">
// //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6">
// //               <span className="w-2 h-2 rounded-full bg-[#B0C2B0]" />
// //               <span className="text-sm tracking-wider text-white font-medium">GET IN TOUCH</span>
// //             </div>
// //             <h2 className="text-4xl md:text-5xl font-extralight mb-4">
// //               <span className="text-white">Start the </span>
// //               <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent">Conversation</span>
// //             </h2>
// //             <p className="text-[#C1B5C6] font-light max-w-2xl mx-auto">
// //               We're here to answer your questions and help you book your next appointment
// //             </p>
// //           </div>

// //           {/* Bento Grid Layout */}
// //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
// //             {/* Contact Form - Takes 7 columns */}
// //             <div className="lg:col-span-7">
// //               <div className="h-full p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 shadow-lg">
// //                 <h3 className="text-4xl font-extralight bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent mb-8">
// //                   Send Us a Message
// //                 </h3>
// //                 <form onSubmit={handleSubmit} className="space-y-6">
// //                   <div className="relative">
// //                     <input
// //                       type="text"
// //                       name="name"
// //                       placeholder="Your Name"
// //                       value={formData.name}
// //                       onChange={handleChange}
// //                       required
// //                       className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-[#C1B5C6]/50 focus:outline-none focus:border-[#B0C2B0] focus:bg-white/10 transition-all duration-300"
// //                     />
// //                   </div>
// //                   <div className="relative">
// //                     <input
// //                       type="email"
// //                       name="email"
// //                       placeholder="Your Email"
// //                       value={formData.email}
// //                       onChange={handleChange}
// //                       required
// //                       className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-[#C1B5C6]/50 focus:outline-none focus:border-[#B0C2B0] focus:bg-white/10 transition-all duration-300"
// //                     />
// //                   </div>
// //                   <div className="relative">
// //                     <textarea
// //                       name="message"
// //                       placeholder="Your Message"
// //                       value={formData.message}
// //                       onChange={handleChange}
// //                       required
// //                       rows={6}
// //                       className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-[#C1B5C6]/50 focus:outline-none focus:border-[#B0C2B0] focus:bg-white/10 resize-none transition-all duration-300"
// //                     />
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     className="w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-[#B0C2B0] to-[#C1B5C6] text-[#262626] font-medium text-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3"
// //                   >
// //                     <Send className="w-5 h-5" />
// //                     Send Message
// //                   </button>
// //                 </form>
// //               </div>
// //             </div>

// //             {/* Contact Info - Takes 5 columns */}
// //             <div className="lg:col-span-5 space-y-6">
// //               {/* Location */}
// //               <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-sm hover:shadow-md transition-all duration-300">
// //                 <div className="flex items-start gap-4">
// //                   <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20">
// //                     <MapPin className="w-6 h-6 text-[#B0C2B0]" />
// //                   </div>
// //                   <div className="flex-1">
// //                     <h3 className="text-lg font-medium text-white mb-2">Visit Us</h3>
// //                     <p className="text-sm text-[#C1B5C6]">1st Floor, Mwanzi Market</p>
// //                     <p className="text-sm text-[#C1B5C6]">Westlands, Nairobi, Kenya</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Hours */}
// //               <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-sm hover:shadow-md transition-all duration-300">
// //                 <div className="flex items-start gap-4">
// //                   <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20">
// //                     <Clock className="w-6 h-6 text-[#B0C2B0]" />
// //                   </div>
// //                   <div className="flex-1">
// //                     <h3 className="text-lg font-medium text-white mb-2">Working Hours</h3>
// //                     <p className="text-sm text-[#C1B5C6]">Mon - Sun: 9:00am - 8:00pm</p>
// //                     {/* <p className="text-sm text-[#C1B5C6]">Sun: 10am - 6pm</p> */}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Contact Methods - Grid */}
// //               <div className="grid grid-cols-2 gap-4">
// //                 <a
// //                   href="mailto:hello@avyabeauty.co.ke"
// //                   className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
// //                 >
// //                   <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 mb-4 inline-block">
// //                     <Mail className="w-6 h-6 text-[#B0C2B0]" />
// //                   </div>
// //                   <h3 className="text-sm font-medium text-white mb-1">Email</h3>
// //                   <p className="text-xs text-[#C1B5C6]">info@avyabeauty.com</p>
// //                 </a>
// //                 <a
// //                   href="tel:+254116444433"
// //                   className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
// //                 >
// //                   <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 mb-4 inline-block">
// //                     <Phone className="w-6 h-6 text-[#B0C2B0]" />
// //                   </div>
// //                   <h3 className="text-sm font-medium text-white mb-1">Phone</h3>
// //                   <p className="text-xs text-[#C1B5C6]">+254116444433</p>
// //                 </a>
// //               </div>

// //               {/* Social Media */}
// //               <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-sm">
// //                 <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
                
// //                 <div className="flex flex-wrap gap-6">
// //                 {[
// //                   { icon: <Instagram className="w-6 h-6" />, href: "https://instagram.com/avya" },
// //                   { icon: <Facebook className="w-6 h-6" />, href: "https://facebook.com/avya" },
// //                   { icon: <TikTokIcon className="w-6 h-6" />, href: "https://tiktok.com/@avya" },
// //                 ].map((social, idx) => (
// //                   <a
// //                     key={idx}
// //                     href={social.href}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="flex items-center gap-4 p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
// //                   >
// //                     <span className="text-[#B0C2B0] group-hover:text-white transition-colors">
// //                       {social.icon}
// //                     </span>
// //                     {/* <span className="text-white group-hover:text-[#B0C2B0] transition-colors">
// //                       @avya
// //                     </span> */}
// //                   </a>
// //                 ))}
// //               </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Map Section */}
// //       <section className="relative py-24 px-4 md:px-12 lg:px-20 bg-[#262626]">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="text-center mb-16">
// //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6">
// //               <span className="w-2 h-2 rounded-full bg-[#B0C2B0]" />
// //               <span className="text-sm tracking-wider text-white font-medium">LOCATION</span>
// //             </div>
// //             <h2 className="text-4xl md:text-5xl font-extralight mb-4">
// //               <span className="text-white">Find Us </span>
// //               <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent">Here</span>
// //             </h2>
// //             <p className="text-[#C1B5C6] font-light">
// //               Located in the heart of Westlands, Nairobi
// //             </p>
// //           </div>
// //           <div className="relative">
// //             <div className="h-[600px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-xl">
// //               <iframe
// //                 className="w-full h-full"
// //                 src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=mwanzi market westlands&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
// //                 allowFullScreen
// //                 loading="lazy"
// //                 referrerPolicy="no-referrer-when-downgrade"
// //                 title="Location Map"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQ Section */}
// //       <section className="relative py-24 px-4 md:px-12 lg:px-20 bg-[#262626]">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="text-center mb-16">
// //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6">
// //               <HelpCircle className="w-4 h-4 text-[#B0C2B0]" />
// //               <span className="text-sm tracking-wider text-white font-medium">FAQ</span>
// //             </div>
// //             <h2 className="text-4xl md:text-6xl font-extralight text-white mb-6">
// //               Frequently Asked
// //               <br />
// //               <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent">Questions</span>
// //             </h2>
// //             <p className="text-[#C1B5C6] font-light max-w-2xl mx-auto">
// //               Everything you need to know about Avya
// //             </p>
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {[
// //               {
// //                 question: "What makes Avya different from other salons in Nairobi?",
// //                 answer: "Avya is Kenya's first luxury salon where beauty meets science. We blend advanced treatments, expert techniques, and personalized care — all within a refined, design-led space created for indulgence and transformation."
// //               },
// //               {
// //                 question: "Do I need a consultation before booking a treatment?",
// //                 answer: "We recommend a short consultation for new clients or anyone trying a specialty service. This helps us personalize your experience and recommend the best treatments for your hair, scalp, or skin."
// //               },
// //               {
// //                 question: "What is a longevity beauty spa?",
// //                 answer: "At Avya, we focus on long-term beauty through scalp and hair health. Our treatments are designed not just for instant results, but to improve and sustain your beauty over time — through science-backed care and expert techniques."
// //               },
// //               {
// //                 question: "Do you treat specific hair or scalp concerns?",
// //                 answer: "Yes. Whether you're experiencing hair thinning, breakage, dry scalp, or damage, our experts use targeted solutions and professional products to restore and revitalize."
// //               },
// //               {
// //                 question: "Can I combine multiple services in one visit?",
// //                 answer: "Absolutely. You can book treatments like hair, facials, and nails all in one session. Let us know your preferences, and we'll create a custom schedule just for you."
// //               },
// //               {
// //                 question: "What are Avya Tokens and how do they work?",
// //                 answer: "Avya Tokens are our way of rewarding loyalty. You earn a token for every treatment — and once you collect 10, you receive an exclusive reward such as a luxury gift or complimentary upgrade."
// //               },
// //               {
// //                 question: "What's included in your membership packages?",
// //                 answer: "Our memberships are fully personalized. You'll enjoy tailored treatment bundles, exclusive discounts, first access to new services, and thoughtful gifts from our partner brands."
// //               },
// //               {
// //                 question: "Do you host private events or bridal parties?",
// //                 answer: "Yes. Avya is available for private bookings, bridal prep, and luxury events. We curate every detail — from drinks and music to group treatments, to create unforgettable experiences."
// //               },
// //               {
// //                 question: "What are 'Late Night Avya' events?",
// //                 answer: "On select evenings, we extend our hours with live DJs, signature cocktails, and special vibes. These nights are perfect for unwinding while getting your beauty treatments. Follow us on Instagram for upcoming dates."
// //               },
// //               {
// //                 question: "What should I expect on my first visit?",
// //                 answer: "Expect a calm, curated experience from start to finish. You'll be welcomed with a warm consultation, treated with expert care, and offered signature refreshments while you relax and recharge."
// //               }
// //             ].map((faq, index) => (
// //               <div
// //                 key={index}
// //                 className="cursor-pointer"
// //                 onClick={() => toggleFaq(index)}
// //               >
// //                 <div className={`p-8 rounded-2xl bg-white/5 backdrop-blur-md border transition-all duration-300 ${
// //                   openFaq === index
// //                     ? 'border-[#B0C2B0] shadow-lg'
// //                     : 'border-white/20 shadow-sm hover:shadow-md'
// //                 }`}>
// //                   <div className="flex items-start gap-4 mb-4">
// //                     <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-1 transition-all duration-300 ${
// //                       openFaq === index
// //                         ? 'bg-[#B0C2B0]'
// //                         : 'bg-[#C1B5C6]/40'
// //                     }`} />
// //                     <div className="flex-1">
// //                       <h3 className="text-xl font-light text-white mb-2 hover:text-[#C1B5C6] transition-colors">
// //                         {faq.question}
// //                       </h3>
// //                     </div>
// //                     <ChevronDown
// //                       className={`w-6 h-6 text-[#B0C2B0] transition-transform duration-300 flex-shrink-0 ${
// //                         openFaq === index ? 'rotate-180' : ''
// //                       }`}
// //                     />
// //                   </div>
// //                   <div className={`overflow-hidden transition-all duration-500 ease-out ${
// //                     openFaq === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
// //                   }`}>
// //                     <div className="pl-7 border-l-2 border-[#C1B5C6]/30">
// //                       <p className="text-[#C1B5C6] font-light leading-relaxed">
// //                         {faq.answer}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

          
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from 'react';
// import { Send, MapPin, Clock, Mail, Phone, Instagram, Facebook, HelpCircle, ChevronDown } from 'lucide-react';
// import Img from "@/assets/li.png";

// const TikTokIcon = ({ className = "w-6 h-6" }) => (
//   <svg
//     className={className}
//     fill="currentColor"
//     viewBox="0 0 24 24"
//     aria-hidden="true"
//   >
//     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
//   </svg>
// );

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isVisible, setIsVisible] = useState(false);
//   const [openFaq, setOpenFaq] = useState(null);
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     setIsVisible(true);
//     const particleArray = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       delay: Math.random() * 4,
//     }));
//     setParticles(particleArray);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for reaching out! We will get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-[#E2DBDF] font-sans relative overflow-hidden">
//       {/* Floating Particles */}
//       {particles.map((particle) => (
//         <div
//           key={particle.id}
//           className="fixed w-1 h-1 bg-[#B0C2B0] rounded-full particle pointer-events-none"
//           style={{
//             left: `${particle.x}%`,
//             top: `${particle.y}%`,
//             animationDelay: `${particle.delay}s`,
//             opacity: 0.6,
//           }}
//         />
//       ))}

//       {/* Hero Section */}
//       <section
//         className="relative h-screen flex items-end px-4 pb-20 bg-[#E2DBDF]"
//         style={{
//           backgroundImage: `url(${Img})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40" />
//         <div className="relative z-10 max-w-7xl mx-auto w-full">
//           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
//               Elevate Your Beauty with
//               <br />
//               <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
//                 Science-Backed Care
//               </span>
//             </h1>
//             <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
//               Your journey to exceptional hair care starts here. Reach out for personalized consultations, bookings, or any questions about our services.
//             </p>
//             <div className="flex flex-wrap gap-6">
//               <a
//                 href="#contact-form"
//                 className="bg-white hover:bg-[#595959] text-[#262626] hover:text-white w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
//               >
//                 Book Now
//               </a>
//               <a
//                 href="tel:+254116444433"
//                 className="bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#262626] border border-white/40 w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
//               >
//                 Call for Advice
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section id="contact-form" className="py-24 px-4 md:px-12 lg:px-20 bg-[#E2DBDF]">
//         <div className="max-w-7xl mx-auto">
//           <div className="space-y-3 md:space-y-8 max-w-[574px]">
//             {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/30 mb-6">
//               <span className="w-2 h-2 rounded-full bg-[#B0C2B0]" />
//               <span className="text-sm tracking-wider text-[#262626] font-medium">GET IN TOUCH</span>
//             </div> */}
//             <h2 className="text-3xl md:text-[40px] font-hatton font-light text-[#262626] leading-tight">
//               Start Your Beauty Journey
//             </h2>
//             <p className="text-base md:text-[20px] text-[#595959] leading-relaxed font-montserrat gap-3">
//               We’re here to answer your questions and help you book your next appointment.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//             {/* Contact Form */}
//             <div className="lg:col-span-7">
//               <div className="h-full p-8 md:p-10 rounded-3xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg">
//                 {/* <h3 className="text-4xl font-extralight bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent mb-8">
//                   Send Us a Message
//                 </h3> */}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-6 py-4 bg-white/50 border border-white/30 rounded-2xl text-[#262626] placeholder-[#595959]/50 focus:outline-none focus:border-[#B0C2B0] focus:bg-white/60 transition-all"
//                     />
//                   </div>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-6 py-4 bg-white/50 border border-white/30 rounded-2xl text-[#262626] placeholder-[#595959]/50 focus:outline-none focus:border-[#B0C2B0] focus:bg-white/60 transition-all"
//                     />
//                   </div>
//                   <div className="relative">
//                     <textarea
//                       name="message"
//                       placeholder="Your Message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={6}
//                       className="w-full px-6 py-4 bg-white/50 border border-white/30 rounded-2xl text-[#262626] placeholder-[#595959]/50 focus:outline-none focus:border-[#B0C2B0] focus:bg-white/60 resize-none transition-all"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-[#B0C2B0] to-[#C1B5C6] text-[#262626] font-medium text-lg transition-all hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3"
//                   >
//                     <Send className="w-5 h-5" />
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//             {/* Contact Info */}
//             <div className="lg:col-span-5 space-y-6">
//               <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-sm hover:shadow-md transition-all">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20">
//                     <MapPin className="w-6 h-6 text-[#B0C2B0]" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-medium text-[#262626] mb-2">Visit Us</h3>
//                     <p className="text-sm text-[#595959]">1st Floor, Mwanzi Market</p>
//                     <p className="text-sm text-[#595959]">Westlands, Nairobi, Kenya</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-sm hover:shadow-md transition-all">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20">
//                     <Clock className="w-6 h-6 text-[#B0C2B0]" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-medium text-[#262626] mb-2">Working Hours</h3>
//                     <p className="text-sm text-[#595959]">Mon - Sun: 9:00am - 8:00pm</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <a
//                   href="mailto:info@avyabeauty.com"
//                   className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-sm hover:shadow-md transition-all hover:scale-105"
//                 >
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 mb-4 inline-block">
//                     <Mail className="w-6 h-6 text-[#B0C2B0]" />
//                   </div>
//                   <h3 className="text-sm font-medium text-[#262626] mb-1">Email</h3>
//                   <p className="text-xs text-[#595959]">info@avyabeauty.com</p>
//                 </a>
//                 <a
//                   href="tel:+254116444433"
//                   className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-sm hover:shadow-md transition-all hover:scale-105"
//                 >
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 mb-4 inline-block">
//                     <Phone className="w-6 h-6 text-[#B0C2B0]" />
//                   </div>
//                   <h3 className="text-sm font-medium text-[#262626] mb-1">Phone</h3>
//                   <p className="text-xs text-[#595959]">+254116444433</p>
//                 </a>
//               </div>
//               <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-sm">
//                 <h3 className="text-lg font-medium text-[#262626] mb-4">Follow Us</h3>
//                 <div className="flex flex-wrap gap-6">
//                   {[
//                     { icon: <Instagram className="w-6 h-6" />, href: "https://instagram.com/avya" },
//                     { icon: <Facebook className="w-6 h-6" />, href: "https://facebook.com/avya" },
//                     { icon: <TikTokIcon className="w-6 h-6" />, href: "https://tiktok.com/@avya" },
//                   ].map((social, idx) => (
//                     <a
//                       key={idx}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-4 p-3 rounded-xl bg-white/30 border border-white/30 hover:bg-white/40 transition-all hover:scale-105 group"
//                     >
//                       <span className="text-[#B0C2B0] group-hover:text-[#262626] transition-colors">
//                         {social.icon}
//                       </span>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-24 px-4 md:px-12 lg:px-20 bg-[#E2DBDF]">
//         <div className="max-w-7xl mx-auto">
//           <div className="space-y-6 md:space-y-8 max-w-[574px]">
            
//             <h2 className="text-3xl md:text-[40px] font-hatton font-light text-[#262626] leading-tight">
//               Find Us Here
//             </h2>
//             <p className="text-base md:text-[20px] text-[#595959] leading-relaxed font-montserrat">
//               Located in the heart of Westlands, Nairobi
//             </p>
//           </div>
//           <div className="relative">
//             <div className="h-[600px] rounded-3xl overflow-hidden border-2 border-white/30 shadow-xl">
//               <iframe
//                 className="w-full h-full"
//                 src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Avya Beauty Salon&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Location Map"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-24 px-4 md:px-12 lg:px-20 bg-[#E2DBDF]">
//         <div className="max-w-7xl mx-auto">
//           <div className="space-y-6 md:space-y-8 max-w-[574px]">
            
//             <h2 className="text-3xl md:text-[40px] font-hatton font-light text-[#262626] leading-tight">
//               Frequently Asked
//               <br />Questions
//             </h2>
//             <p className="text-base md:text-[20px] text-[#595959] leading-relaxed font-montserrat">
//               Everything you need to know about Avya
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 question: "What makes Avya different from other salons in Nairobi?",
//                 answer: "Avya is Kenya’s first luxury salon where beauty meets science. We blend advanced treatments, expert techniques, and personalized care — all within a refined, design-led space created for indulgence and transformation."
//               },
//               {
//                 question: "Do I need a consultation before booking a treatment?",
//                 answer: "We recommend a short consultation for new clients or anyone trying a specialty service. This helps us personalize your experience and recommend the best treatments for your hair, scalp, or skin."
//               },
//               {
//                 question: "What is a longevity beauty spa?",
//                 answer: "At Avya, we focus on long-term beauty through scalp and hair health. Our treatments are designed not just for instant results, but to improve and sustain your beauty over time — through science-backed care and expert techniques."
//               },
//               {
//                 question: "Do you treat specific hair or scalp concerns?",
//                 answer: "Yes. Whether you're experiencing hair thinning, breakage, dry scalp, or damage, our experts use targeted solutions and professional products to restore and revitalize."
//               },
//               {
//                 question: "Can I combine multiple services in one visit?",
//                 answer: "Absolutely. You can book treatments like hair, facials, and nails all in one session. Let us know your preferences, and we'll create a custom schedule just for you."
//               },
//               {
//                 question: "What are Avya Tokens and how do they work?",
//                 answer: "Avya Tokens are our way of rewarding loyalty. You earn a token for every treatment — and once you collect 10, you receive an exclusive reward such as a luxury gift or complimentary upgrade."
//               },
//               {
//                 question: "What's included in your membership packages?",
//                 answer: "Our memberships are fully personalized. You'll enjoy tailored treatment bundles, exclusive discounts, first access to new services, and thoughtful gifts from our partner brands."
//               },
//               {
//                 question: "Do you host private events or bridal parties?",
//                 answer: "Yes. Avya is available for private bookings, bridal prep, and luxury events. We curate every detail — from drinks and music to group treatments, to create unforgettable experiences."
//               },
//               {
//                 question: "What should I expect on my first visit?",
//                 answer: "Expect a calm, curated experience from start to finish. You'll be welcomed with a warm consultation, treated with expert care, and offered signature refreshments while you relax and recharge."
//               }
//             ].map((faq, index) => (
//               <div
//                 key={index}
//                 className="cursor-pointer"
//                 onClick={() => toggleFaq(index)}
//               >
//                 <div className={`p-8 rounded-2xl bg-white/80 backdrop-blur-md border transition-all ${
//                   openFaq === index
//                     ? 'border-[#B0C2B0] shadow-lg'
//                     : 'border-white/20 shadow-sm hover:shadow-md'
//                 }`}>
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-1 transition-all ${
//                       openFaq === index
//                         ? 'bg-[#B0C2B0]'
//                         : 'bg-[#C1B5C6]/40'
//                     }`} />
//                     <div className="flex-1">
//                       <h3 className="text-xl font-light text-[#262626] mb-2 hover:text-[#C1B5C6] transition-colors">
//                         {faq.question}
//                       </h3>
//                     </div>
//                     <ChevronDown
//                       className={`w-6 h-6 text-[#B0C2B0] transition-transform ${
//                         openFaq === index ? 'rotate-180' : ''
//                       }`}
//                     />
//                   </div>
//                   <div className={`overflow-hidden transition-all ${
//                     openFaq === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
//                   }`}>
//                     <div className="pl-7 border-l-2 border-[#C1B5C6]/30">
//                       <p className="text-[#595959] font-light leading-relaxed">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Send, MapPin, Clock, Mail, Phone, Instagram, Facebook, ChevronDown } from 'lucide-react';
import IMG from "@/assets/contact.jpg";

const TikTokIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }));
    setParticles(particleArray);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes Avya different from other salons in Nairobi?",
      answer: "Avya is Kenya's first luxury salon where beauty meets science. We blend advanced treatments, expert techniques, and personalized care — all within a refined, design-led space created for indulgence and transformation."
    },
    {
      question: "Do I need a consultation before booking a treatment?",
      answer: "We recommend a short consultation for new clients or anyone trying a specialty service. This helps us personalize your experience and recommend the best treatments for your hair, scalp, or skin."
    },
    {
      question: "What is a longevity beauty spa?",
      answer: "At Avya, we focus on long-term beauty through scalp and hair health. Our treatments are designed not just for instant results, but to improve and sustain your beauty over time — through science-backed care and expert techniques."
    },
    {
      question: "Do you treat specific hair or scalp concerns?",
      answer: "Yes. Whether you're experiencing hair thinning, breakage, dry scalp, or damage, our experts use targeted solutions and professional products to restore and revitalize."
    },
    {
      question: "Can I combine multiple services in one visit?",
      answer: "Absolutely. You can book treatments like hair, facials, and nails all in one session. Let us know your preferences, and we'll create a custom schedule just for you."
    },
    {
      question: "What are Avya Tokens and how do they work?",
      answer: "Avya Tokens are our way of rewarding loyalty. You earn a token for every treatment — and once you collect 10, you receive an exclusive reward such as a luxury gift or complimentary upgrade."
    },
    {
      question: "What's included in your membership packages?",
      answer: "Our memberships are fully personalized. You'll enjoy tailored treatment bundles, exclusive discounts, first access to new services, and thoughtful gifts from our partner brands."
    },
    {
      question: "Do you host private events or bridal parties?",
      answer: "Yes. Avya is available for private bookings, bridal prep, and luxury events. We curate every detail — from drinks and music to group treatments, to create unforgettable experiences."
    },
    {
      question: "What should I expect on my first visit?",
      answer: "Expect a calm, curated experience from start to finish. You'll be welcomed with a warm consultation, treated with expert care, and offered signature refreshments while you relax and recharge."
    }
  ];

  return (
    <div className="min-h-screen bg-[#E2DBDF] relative overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-1 h-1 bg-[#B0C2B0] rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            opacity: 0.6,
            animation: 'float 8s ease-in-out infinite'
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      <section
        className="relative h-screen flex items-end px-4 md:px-12 lg:px-20 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMG})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight">
              Where Beauty
              <br />
              <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
                Meets Science
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light mb-10">
              Book your appointment or reach out with any questions.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <a
                href="#contact-form"
                className="bg-white hover:bg-[#595959] text-[#262626] hover:text-white w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
              >
                Book Now
              </a> */}
              <a
                href="tel:+254116444433"
                className="bg-white hover:bg-[#595959] text-[#262626] hover:text-white w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
              >
                Call 
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 md:py-24 px-4 md:px-12 lg:px-20 bg-[#E2DBDF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-4 leading-tight">
              Start Your Beauty Journey
            </h2>
            <p className="text-lg text-[#595959] leading-relaxed max-w-2xl">
              We're here to answer your questions and help you book your next appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="h-full p-8 md:p-12 rounded-3xl bg-white/90 backdrop-blur-md border border-white/30 shadow-xl">
                <div className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-[#262626] placeholder-[#595959] focus:outline-none focus:border-[#B0C2B0] focus:ring-2 focus:ring-[#B0C2B0]/20 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-[#262626] placeholder-[#595959] focus:outline-none focus:border-[#B0C2B0] focus:ring-2 focus:ring-[#B0C2B0]/20 transition-all"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-[#262626] placeholder-[#595959] focus:border-[#B0C2B0]  focus:outline-none focus:ring-2 focus:ring-[#B0C2B0]/20 resize-none transition-all"
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full px-8 py-5 rounded-xl bg-[#595959] hover:bg-white text-[#262626] hover:text-[#595959] font-medium text-base transition-all hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-[#262626] mb-2">Visit Us</h3>
                    <p className="text-sm text-[#595959]">1st Floor, Mwanzi Market</p>
                    <p className="text-sm text-[#595959]">Westlands, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-[#262626] mb-2">Working Hours</h3>
                    <p className="text-sm text-[#595959]">Mon - Sun: 9:00am - 8:00pm</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="mailto:info@avyabeauty.com"
                  className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 mb-3 inline-block">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-sm font-medium text-[#262626] mb-1">Email</h3>
                  <p className="text-xs text-[#595959] break-all">info@avyabeauty.com</p>
                </a>

                <a
                  href="tel:+254116444433"
                  className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 mb-3 inline-block">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-sm font-medium text-[#262626] mb-1">Phone</h3>
                  <p className="text-xs text-black">+254 116 444 433</p>
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/30 shadow-lg">
                <h3 className="text-lg font-medium text-[#262626] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/50 border border-white/40 hover:bg-[#B0C2B0]/20 hover:border-[#B0C2B0] transition-all hover:scale-110 group"
                  >
                    <Instagram className="w-6 h-6 text-black group-hover:text-[#262626]" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Avya-Beauty-KE/61581716020463/?rdid=4k7KYyHS902QXDtT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A9N3KMVZ3%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/50 border border-white/40 hover:bg-[#B0C2B0]/20 hover:border-[#B0C2B0] transition-all hover:scale-110 group"
                  >
                    <Facebook className="w-6 h-6 text-black group-hover:text-[#262626]" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@avya.beauty.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/50 border border-white/40 hover:bg-[#B0C2B0]/20 hover:border-[#B0C2B0] transition-all hover:scale-110 group"
                  >
                    <TikTokIcon className="w-6 h-6 text-black group-hover:text-[#262626]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-4 md:px-12 lg:px-20 bg-[#E2DBDF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-4 leading-tight">
              Find Us Here
            </h2>
            <p className="text-lg text-[#595959] leading-relaxed max-w-2xl">
              Located in the heart of Westlands, Nairobi
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border-4 border-white/40 shadow-2xl">
            <iframe
              className="w-full h-[500px] md:h-[600px]"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Avya Beauty Salon&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Avya Beauty Salon Location"
            />
          </div>
        </div>
      </section>

      {/* <section className="py-20 md:py-24 px-4 md:px-12 lg:px-20 bg-[#E2DBDF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-4 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#595959] leading-relaxed max-w-2xl">
              Everything you need to know about Avya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className={`p-8 rounded-2xl bg-white/90 backdrop-blur-md border transition-all ${
                  openFaq === index
                    ? 'border-[#B0C2B0] shadow-xl'
                    : 'border-white/30 shadow-lg hover:shadow-xl'
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 transition-all ${
                        openFaq === index ? 'bg-[#B0C2B0]' : 'bg-[#C1B5C6]/50'
                      }`} />
                      <h3 className="text-lg font-medium text-[#262626] leading-relaxed">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B0C2B0] flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-5 border-l-2 border-[#B0C2B0]/30">
                      <p className="text-[#595959] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}