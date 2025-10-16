// // // import React, { useState } from 'react';

// // // const ContactPage = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     message: ''
// // //   });

// // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value
// // //     });
// // //   };

// // //   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
// // //     e.preventDefault();
// // //     console.log('Form submitted:', formData);
// // //     alert('Thank you for reaching out! We will get back to you soon.');
// // //     setFormData({ name: '', email: '', message: '' });
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-[#E2DBDF] font-sans">
// // //       {/* Hero Section */}
// // //       <section
// // //         className="relative h-screen overflow-hidden bg-cover bg-center"
// // //         style={{
// // //           backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=400&fit=crop')",
// // //         }}
// // //       >
// // //         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
// // //         <div className="relative h-full flex items-end pb-20 px-4">
// // //           <div className="text-left text-white max-w-2xl">
// // //             <p className="text-sm tracking-widest mb-3 uppercase font-hattons">We're Here to Help</p>
// // //             <h1 className="text-4xl md:text-5xl font-light mb-4 leading-tight font-montserrat">
// // //               Reach out with questions about treatments, appointments, or your care journey
// // //             </h1>
// // //             <p className="text-sm leading-relaxed opacity-90 font-open-sans">
// // //               Whether you're ready to book your first visit, have questions about hair services, or need guidance on the right treatment for you, our team is here to support. We look forward to being part of your beauty and wellness journey.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Contact Form and Info Section */}
// // //       <section className="py-16 px-4 bg-[#C1B5C6 ]">
// // //         <div className="max-w-6xl mx-auto">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// // //             {/* Left Side - Form */}
// // //             <div>
// // //               <h2 className="text-3xl font-light mb-8 text-[#262626] font-montserrat">
// // //                 Let Us Help You Achieve Your<br />Best Hair Yet
// // //               </h2>
// // //               <div className="space-y-4">
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                   <input
// // //                     type="text"
// // //                     name="name"
// // //                     placeholder="Name"
// // //                     value={formData.name}
// // //                     onChange={handleChange}
// // //                     className="w-full px-4 py-3 bg-[#FFFFFF] border-0 rounded-lg text-[#262626] placeholder-[#595959] focus:outline-none focus:ring-2 focus:ring-[#C1B5C6] font-open-sans"
// // //                   />
// // //                   <input
// // //                     type="email"
// // //                     name="email"
// // //                     placeholder="Email"
// // //                     value={formData.email}
// // //                     onChange={handleChange}
// // //                     className="w-full px-4 py-3 bg-[#FFFFFF] border-0 rounded-lg text-[#262626] placeholder-[#595959] focus:outline-none focus:ring-2 focus:ring-[#C1B5C6] font-open-sans"
// // //                   />
// // //                 </div>
// // //                 <textarea
// // //                   name="message"
// // //                   placeholder="Message"
// // //                   value={formData.message}
// // //                   onChange={handleChange}
// // //                   rows={6}
// // //                   className="w-full px-4 py-3 bg-[#FFFFFF] border-0 rounded-lg text-[#262626] placeholder-[#595959] focus:outline-none focus:ring-2 focus:ring-[#C1B5C6] resize-none font-open-sans"
// // //                 />
// // //                 <button
// // //                   onClick={handleSubmit}
// // //                   className="w-full bg-[#262626] hover:bg-[#B0C2B0] text-[#FFFFFF] font-light py-4 rounded-lg transition-colors duration-300 font-montserrat"
// // //                 >
// // //                   Send Message
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* Right Side - Contact Info */}
// // //             <div className="space-y-8">
// // //               <div>
// // //                 <h3 className="text-xl font-light mb-4 text-[#262626] font-montserrat">Get in touch</h3>
// // //                 <p className="text-sm text-[#595959] leading-relaxed font-open-sans">
// // //                   We're here to support you. Reach out if you have questions about treatments, bookings, or your personalized care plan.
// // //                 </p>
// // //               </div>
// // //               <div>
// // //                 <h3 className="text-xl font-light mb-4 text-[#262626] font-montserrat">Address</h3>
// // //                 <p className="text-sm text-[#595959] leading-relaxed font-open-sans">
// // //                   Nairobi, Kenya<br />
// // //                   Mwanzi Market, Westlands
// // //                 </p>
// // //               </div>
// // //               <div>
// // //                 <h3 className="text-xl font-light mb-4 text-[#262626] font-montserrat">Working Hours</h3>
// // //                 <div className="text-sm text-[#595959] space-y-1 font-open-sans">
// // //                   <p>Mon - Sat: 9am - 7pm</p>
// // //                   <p>Sun: 10am - 6pm</p>
// // //                 </div>
// // //               </div>
// // //               <div className="space-y-3">
// // //                 <a
// // //                   href="mailto:hello@avyabeauty.co.ke"
// // //                   className="flex items-center text-sm text-[#595959] hover:text-[#C1B5C6] transition-colors font-open-sans"
// // //                 >
// // //                   <span className="mr-2">✉</span>
// // //                   hello@avyabeauty.co.ke
// // //                 </a>
// // //                 <a
// // //                   href="tel:+254755444433"
// // //                   className="flex items-center text-sm text-[#595959] hover:text-[#C1B5C6] transition-colors font-open-sans"
// // //                 >
// // //                   <span className="mr-2">📞</span>
// // //                   +254116444433
// // //                 </a>
// // //               </div>
// // //               <div className="flex gap-4">
// // //                 <a
// // //                   href="#"
// // //                   className="w-10 h-10 rounded-full bg-[#B0C2B0] hover:bg-[#C1B5C6] flex items-center justify-center transition-colors"
// // //                   aria-label="Instagram"
// // //                 >
// // //                   <svg className="w-5 h-5 text-[#262626]" fill="currentColor" viewBox="0 0 24 24">
// // //                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
// // //                   </svg>
// // //                 </a>
// // //                 <a
// // //                   href="#"
// // //                   className="w-10 h-10 rounded-full bg-[#B0C2B0] hover:bg-[#C1B5C6] flex items-center justify-center transition-colors"
// // //                   aria-label="Facebook"
// // //                 >
// // //                   <svg className="w-5 h-5 text-[#262626]" fill="currentColor" viewBox="0 0 24 24">
// // //                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
// // //                   </svg>
// // //                 </a>
// // //                 <a
// // //                   href="#"
// // //                   className="w-10 h-10 rounded-full bg-[#B0C2B0] hover:bg-[#C1B5C6] flex items-center justify-center transition-colors"
// // //                   aria-label="Twitter"
// // //                 >
// // //                   <svg className="w-5 h-5 text-[#262626]" fill="currentColor" viewBox="0 0 24 24">
// // //                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
// // //                   </svg>
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Map Section */}
// // //       <section className="h-[500px] w-full bg-[#C1B5C6 ]  ">
// // //         <div className="max-w-6xl mx-auto h-full px-4">
// // //           <iframe
// // //             className="w-full h-full border-0"
// // //             src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=mwanzi market&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
// // //             allowFullScreen=""
// // //             loading="lazy"
// // //             referrerPolicy="no-referrer-when-downgrade"
// // //             title="Location Map"
// // //           />
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default ContactPage;
// // import React, { useState, useEffect } from 'react';

// // const ContactPage = () => {
// //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// //   useEffect(() => {
// //     setIsVisible(true);
    
// //     const handleMouseMove = (e) => {
// //       setMousePosition({ x: e.clientX, y: e.clientY });
// //     };
    
// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form submitted:', formData);
// //     alert('Thank you for reaching out! We will get back to you soon.');
// //     setFormData({ name: '', email: '', message: '' });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-[#E2DBDF] via-[#C1B5C6] to-[#B0C2B0] font-sans relative overflow-hidden">
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <div 
// //           className="absolute w-96 h-96 bg-purple-300/20 rounded-full blur-3xl transition-all duration-1000"
// //           style={{
// //             left: `${mousePosition.x / 20}px`,
// //             top: `${mousePosition.y / 20}px`,
// //           }}
// //         />
// //         <div className="absolute w-64 h-64 bg-green-300/20 rounded-full blur-3xl top-1/4 right-1/4 animate-pulse" />
// //         <div className="absolute w-80 h-80 bg-pink-300/20 rounded-full blur-3xl bottom-1/4 left-1/3 animate-pulse" style={{ animationDelay: '1s' }} />
// //       </div>

// //       {/* Hero Section */}
// //       <section className="relative h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=400&fit=crop')" }}>
// //         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
// //         {/* Animated Grid Overlay */}
// //         <div className="absolute inset-0 opacity-10">
// //           <div className="absolute inset-0" style={{
// //             backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
// //             backgroundSize: '50px 50px',
// //             animation: 'gridMove 20s linear infinite'
// //           }} />
// //         </div>

// //         <div className={`relative h-full flex items-end pb-20 px-4 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //           <div className="text-left text-white max-w-2xl">
// //             <p className="text-sm tracking-widest mb-3 uppercase font-sans animate-fadeIn">
// //               <span className="inline-block animate-pulse">●</span> We're Here to Help
// //             </p>
// //             <h1 className="text-4xl md:text-5xl font-light mb-4 leading-tight animate-slideUp">
// //               Reach out with questions about treatments, appointments, or your care journey
// //             </h1>
// //             <p className="text-sm leading-relaxed opacity-90 animate-slideUp" style={{ animationDelay: '0.2s' }}>
// //               Whether you're ready to book your first visit, have questions about hair services, or need guidance on the right treatment for you, our team is here to support. We look forward to being part of your beauty and wellness journey.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Form and Info Section */}
// //       <section className="py-16 px-4 relative z-10">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// //             {/* Left Side - Form */}
// //             <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
// //               <h2 className="text-3xl font-light mb-8 text-[#262626] relative inline-block">
// //                 Let Us Help You Achieve Your<br />Best Hair Yet
// //                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] animate-expandWidth" />
// //               </h2>
              
// //               <div className="space-y-4">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   <div className="relative group">
// //                     <input
// //                       type="text"
// //                       name="name"
// //                       placeholder="Name"
// //                       value={formData.name}
// //                       onChange={handleChange}
// //                       className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-0 rounded-lg text-[#262626] placeholder-[#595959] focus:outline-none focus:ring-2 focus:ring-[#C1B5C6] transition-all duration-300 hover:bg-white hover:shadow-lg"
// //                     />
// //                     <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
// //                   </div>
                  
// //                   <div className="relative group">
// //                     <input
// //                       type="email"
// //                       name="email"
// //                       placeholder="Email"
// //                       value={formData.email}
// //                       onChange={handleChange}
// //                       className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-0 rounded-lg text-[#262626] placeholder-[#595959] focus:outline-none focus:ring-2 focus:ring-[#C1B5C6] transition-all duration-300 hover:bg-white hover:shadow-lg"
// //                     />
// //                     <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
// //                   </div>
// //                 </div>
                
// //                 <div className="relative group">
// //                   <textarea
// //                     name="message"
// //                     placeholder="Message"
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     rows={6}
// //                     className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-0 rounded-lg text-[#262626] placeholder-[#595959] focus:outline-none focus:ring-2 focus:ring-[#C1B5C6] resize-none transition-all duration-300 hover:bg-white hover:shadow-lg"
// //                   />
// //                   <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
// //                 </div>
                
// //                 <button
// //                   onClick={handleSubmit}
// //                   className="w-full bg-[#262626] hover:bg-gradient-to-r hover:from-[#C1B5C6] hover:to-[#B0C2B0] text-white font-light py-4 rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
// //                 >
// //                   <span className="relative z-10">Send Message</span>
// //                   <div className="absolute inset-0 bg-gradient-to-r from-[#B0C2B0] to-[#C1B5C6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Right Side - Contact Info */}
// //             <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.2s' }}>
// //               <div className="backdrop-blur-sm bg-white/40 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
// //                 <h3 className="text-xl font-light mb-4 text-[#262626]">Get in touch</h3>
// //                 <p className="text-sm text-[#595959] leading-relaxed">
// //                   We're here to support you. Reach out if you have questions about treatments, bookings, or your personalized care plan.
// //                 </p>
// //               </div>
              
// //               <div className="backdrop-blur-sm bg-white/40 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
// //                 <h3 className="text-xl font-light mb-4 text-[#262626]">Address</h3>
// //                 <p className="text-sm text-[#595959] leading-relaxed">
// //                   Nairobi, Kenya<br />
// //                   Mwanzi Market, Westlands
// //                 </p>
// //               </div>
              
// //               <div className="backdrop-blur-sm bg-white/40 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
// //                 <h3 className="text-xl font-light mb-4 text-[#262626]">Working Hours</h3>
// //                 <div className="text-sm text-[#595959] space-y-1">
// //                   <p className="hover:text-[#C1B5C6] transition-colors">Mon - Sat: 9am - 7pm</p>
// //                   <p className="hover:text-[#C1B5C6] transition-colors">Sun: 10am - 6pm</p>
// //                 </div>
// //               </div>
              
// //               <div className="space-y-3 backdrop-blur-sm bg-white/40 p-6 rounded-2xl">
// //                 <a
// //                   href="mailto:hello@avyabeauty.co.ke"
// //                   className="flex items-center text-sm text-[#595959] hover:text-[#C1B5C6] transition-all duration-300 hover:translate-x-2 group"
// //                 >
// //                   <span className="mr-2 text-lg group-hover:animate-bounce">✉</span>
// //                   hello@avyabeauty.co.ke
// //                 </a>
// //                 <a
// //                   href="tel:+254116444433"
// //                   className="flex items-center text-sm text-[#595959] hover:text-[#C1B5C6] transition-all duration-300 hover:translate-x-2 group"
// //                 >
// //                   <span className="mr-2 text-lg group-hover:animate-bounce">📞</span>
// //                   +254116444433
// //                 </a>
// //               </div>
              
// //               <div className="flex gap-4">
// //                 {[
// //                   { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
// //                   { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
// //                   { label: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' }
// //                 ].map((social, idx) => (
// //                   <a
// //                     key={idx}
// //                     href="#"
// //                     className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm hover:bg-gradient-to-br hover:from-[#C1B5C6] hover:to-[#B0C2B0] flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-xl group"
// //                     aria-label={social.label}
// //                   >
// //                     <svg className="w-5 h-5 text-[#262626] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
// //                       <path d={social.path} />
// //                     </svg>
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Map Section */}
// //       <section className="h-[500px] w-full relative overflow-hidden">
// //         <div className="absolute inset-0 bg-gradient-to-t from-[#E2DBDF] to-transparent pointer-events-none z-10" />
// //         <div className="max-w-6xl mx-auto h-full px-4 relative">
// //           <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
// //             <iframe
// //               className="w-full h-full border-0"
// //               src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=mwanzi market&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
// //               allowFullScreen=""
// //               loading="lazy"
// //               referrerPolicy="no-referrer-when-downgrade"
// //               title="Location Map"
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       <style>{`
// //         @keyframes fadeIn {
// //           from { opacity: 0; }
// //           to { opacity: 1; }
// //         }
        
// //         @keyframes slideUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
        
// //         @keyframes expandWidth {
// //           from { width: 0; }
// //           to { width: 100%; }
// //         }
        
// //         @keyframes gridMove {
// //           from { transform: translateY(0); }
// //           to { transform: translateY(50px); }
// //         }
        
// //         .animate-fadeIn {
// //           animation: fadeIn 1s ease-out;
// //         }
        
// //         .animate-slideUp {
// //           animation: slideUp 1s ease-out forwards;
// //           opacity: 0;
// //         }
        
// //         .animate-expandWidth {
// //           animation: expandWidth 2s ease-out forwards;
// //           animation-delay: 0.5s;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default ContactPage;
// import React, { useState, useEffect } from 'react';
// import { Send, MapPin, Clock, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

// function App() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     setIsVisible(true);

//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for reaching out! We will get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="min-h-screen bg-[#E2DBDF] font-sans relative overflow-hidden">
//       <div className="absolute inset-0 opacity-30">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&h=1080&fit=crop')",
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
            
//           }}
//         />
//       </div>

//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute w-96 h-96 rounded-full blur-3xl transition-all duration-700 ease-out"
//           style={{
//             background: 'radial-gradient(circle, rgba(193, 181, 198, 0.4) 0%, transparent 70%)',
//             left: `${mousePosition.x / 30 - 192}px`,
//             top: `${mousePosition.y / 30 - 192}px`,
//           }}
//         />
//         <div
//           className="absolute w-64 h-64 rounded-full blur-3xl animate-pulse"
//           style={{
//             background: 'radial-gradient(circle, rgba(176, 194, 176, 0.3) 0%, transparent 70%)',
//             right: '10%',
//             top: '20%',
//             animationDuration: '4s'
//           }}
//         />
//         <div
//           className="absolute w-80 h-80 rounded-full blur-3xl animate-pulse"
//           style={{
//             background: 'radial-gradient(circle, rgba(226, 219, 223, 0.4) 0%, transparent 70%)',
//             left: '15%',
//             bottom: '10%',
//             animationDuration: '6s'
//           }}
//         />
//       </div>

//       <section className="relative h-screen flex items-end px-4 pb-20">
//         <div className="max-w-7xl mx-auto w-full">
//           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8">
//               <span className="w-2 h-2 rounded-full bg-[#B0C2B0] animate-pulse" />
//               <span className="text-sm tracking-wider text-[#262626] font-light">CONNECT WITH US</span>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-extralight text-[#262626] mb-6 leading-tight max-w-4xl">
//               Let's Create Something
//               <br />
//               <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">Beautiful Together</span>
//             </h1>

//             <p className="text-lg text-[#595959] max-w-2xl leading-relaxed font-light mb-12">
//               Your journey to exceptional hair care starts here. Reach out for personalized consultations,
//               bookings, or any questions about our services.
//             </p>

//             <div className="flex flex-wrap gap-6">
//               <a href="#contact-form" className="group relative px-8 py-4 rounded-full overflow-hidden bg-[#262626] text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
//                 <span className="relative z-10 flex items-center gap-2">
//                   <Send className="w-4 h-4" />
//                   Send Message
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//               </a>

//               <a href="tel:+254116444433" className="px-8 py-4 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[#262626] hover:bg-white/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
//                 <Phone className="w-4 h-4" />
//                 Call Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="contact-form" className="relative py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//             <div className="lg:col-span-2 space-y-6">
//               {[
//                 {
//                   icon: <MapPin className="w-6 h-6" />,
//                   title: "Visit Us",
//                   content: ["Mwanzi Market, Westlands", "Nairobi, Kenya"],
//                   delay: "0s"
//                 },
//                 {
//                   icon: <Clock className="w-6 h-6" />,
//                   title: "Working Hours",
//                   content: ["Mon - Sat: 9am - 7pm", "Sun: 10am - 6pm"],
//                   delay: "0.1s"
//                 },
//                 {
//                   icon: <Mail className="w-6 h-6" />,
//                   title: "Email",
//                   content: ["hello@avyabeauty.co.ke"],
//                   link: "mailto:hello@avyabeauty.co.ke",
//                   delay: "0.2s"
//                 },
//                 {
//                   icon: <Phone className="w-6 h-6" />,
//                   title: "Phone",
//                   content: ["+254 116 444 433"],
//                   link: "tel:+254116444433",
//                   delay: "0.3s"
//                 }
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="group relative p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 hover:border-[#C1B5C6] transition-all duration-500 hover:scale-105 hover:shadow-2xl"
//                   style={{ animationDelay: item.delay }}
//                 >
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   <div className="relative">
//                     <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6] to-[#B0C2B0] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
//                       {item.icon}
//                     </div>

//                     <h3 className="text-lg font-light text-[#262626] mb-2">{item.title}</h3>

//                     <div className="space-y-1">
//                       {item.content.map((line, i) => (
//                         item.link ? (
//                           <a
//                             key={i}
//                             href={item.link}
//                             className="block text-sm text-[#595959] hover:text-[#C1B5C6] transition-colors"
//                           >
//                             {line}
//                           </a>
//                         ) : (
//                           <p key={i} className="text-sm text-[#595959]">{line}</p>
//                         )
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50">
//                 <h3 className="text-lg font-light text-[#262626] mb-4">Follow Us</h3>
//                 <div className="flex gap-3">
//                   {[
//                     { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
//                     { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
//                     { icon: <Twitter className="w-5 h-5" />, label: "Twitter" }
//                   ].map((social, idx) => (
//                     <a
//                       key={idx}
//                       href="#"
//                       className="group relative w-12 h-12 rounded-xl bg-white/60 backdrop-blur-md flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110"
//                       aria-label={social.label}
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-br from-[#C1B5C6] to-[#B0C2B0] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//                       <span className="relative z-10 text-[#262626] group-hover:text-white transition-colors">
//                         {social.icon}
//                       </span>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-3">
//               <div className="p-8 md:p-12 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/60 shadow-2xl">
//                 <h2 className="text-3xl md:text-4xl font-extralight text-[#262626] mb-3">
//                   Get in Touch
//                 </h2>
//                 <p className="text-[#595959] mb-8 font-light">
//                   Fill out the form below and we'll get back to you as soon as possible.
//                 </p>

//                 <div className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="relative group">
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-transparent rounded-xl text-[#262626] placeholder-[#595959]/60 focus:outline-none focus:border-[#C1B5C6] focus:bg-white transition-all duration-300"
//                       />
//                       <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
//                     </div>

//                     <div className="relative group">
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Your Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-transparent rounded-xl text-[#262626] placeholder-[#595959]/60 focus:outline-none focus:border-[#C1B5C6] focus:bg-white transition-all duration-300"
//                       />
//                       <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
//                     </div>
//                   </div>

//                   <div className="relative group">
//                     <textarea
//                       name="message"
//                       placeholder="Your Message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={6}
//                       className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-transparent rounded-xl text-[#262626] placeholder-[#595959]/60 focus:outline-none focus:border-[#C1B5C6] focus:bg-white resize-none transition-all duration-300"
//                     />
//                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
//                   </div>

//                   <button
//                     onClick={handleSubmit}
//                     className="group relative w-full px-8 py-5 rounded-xl overflow-hidden bg-[#262626] text-white font-light text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//                   >
//                     <span className="relative z-10 flex items-center justify-center gap-2">
//                       <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                       Send Message
//                     </span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="relative py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extralight text-[#262626] mb-4">
//               Find Us Here
//             </h2>
//             <p className="text-[#595959] font-light">
//               Located in the heart of Westlands, Nairobi
//             </p>
//           </div>

//           <div className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
//             <div className="relative h-96 rounded-3xl overflow-hidden border-4 border-white/50 shadow-2xl">
//               <iframe
//                 className="w-full h-full"
//                 src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=mwanzi market westlands&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Location Map"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="relative py-8 px-4 border-t border-white/30">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-sm text-[#595959] font-light">
//             2024 Avya Beauty. Crafted with care in Nairobi, Kenya.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { Send, MapPin, Clock, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <a
    href="https://tiktok.com/@avya"
    className="text-[#262626] hover:text-[#B0C2B0] transition-colors"
    aria-label="TikTok"
  >
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  </a>

);

export { TikTokIcon };

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#E2DBDF] font-sans relative overflow-hidden">
      {/* Mouse effects and decorative elements remain global */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(193, 181, 198, 0.4) 0%, transparent 70%)',
            left: `${mousePosition.x / 30 - 192}px`,
            top: `${mousePosition.y / 30 - 192}px`,
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(176, 194, 176, 0.3) 0%, transparent 70%)',
            right: '10%',
            top: '20%',
            animationDuration: '4s'
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(226, 219, 223, 0.4) 0%, transparent 70%)',
            left: '15%',
            bottom: '10%',
            animationDuration: '6s'
          }}
        />
      </div>

      {/* Hero Section with Background Image */}
      <section
        className="relative h-screen flex items-end px-4 pb-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&h=1080&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Rest of your hero section content */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#B0C2B0] animate-pulse" />
              <span className="text-sm tracking-wider text-[#262626] font-light">CONNECT WITH US</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
              Let's Create Something
              <br />
              <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">Beautiful Together</span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed font-light mb-12">
              Your journey to exceptional hair care starts here. Reach out for personalized consultations,
              bookings, or any questions about our services.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#contact-form" className="group relative px-8 py-4 rounded-full overflow-hidden bg-[#262626] text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a href="tel:+254116444433" className="px-8 py-4 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[#262626] hover:bg-white/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="contact-form" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Visit Us",
                  content: ["Mwanzi Market, Westlands", "Nairobi, Kenya"],
                  delay: "0s"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Working Hours",
                  content: ["Mon - Sat: 9am - 7pm", "Sun: 10am - 6pm"],
                  delay: "0.1s"
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email",
                  content: ["hello@avyabeauty.co.ke"],
                  link: "mailto:hello@avyabeauty.co.ke",
                  delay: "0.2s"
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Phone",
                  content: ["+254 116 444 433"],
                  link: "tel:+254116444433",
                  delay: "0.3s"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 hover:border-[#C1B5C6] transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#C1B5C6] to-[#B0C2B0] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>

                    <h3 className="text-lg font-light text-[#262626] mb-2">{item.title}</h3>

                    <div className="space-y-1">
                      {item.content.map((line, i) => (
                        item.link ? (
                          <a
                            key={i}
                            href={item.link}
                            className="block text-sm text-[#595959] hover:text-[#C1B5C6] transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-sm text-[#595959]">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50">
                <h3 className="text-lg font-light text-[#262626] mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
                    { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
                    { icon: <Twitter className="w-5 h-5" />, label: "Twitter" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="group relative w-12 h-12 rounded-xl bg-white/60 backdrop-blur-md flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C1B5C6] to-[#B0C2B0] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <span className="relative z-10 text-[#262626] group-hover:text-white transition-colors">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="p-8 md:p-12 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/60 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-extralight text-[#262626] mb-3">
                  Get in Touch
                </h2>
                <p className="text-[#595959] mb-8 font-light">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-transparent rounded-xl text-[#262626] placeholder-[#595959]/60 focus:outline-none focus:border-[#C1B5C6] focus:bg-white transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-transparent rounded-xl text-[#262626] placeholder-[#595959]/60 focus:outline-none focus:border-[#C1B5C6] focus:bg-white transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>

                  <div className="relative group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-transparent rounded-xl text-[#262626] placeholder-[#595959]/60 focus:outline-none focus:border-[#C1B5C6] focus:bg-white resize-none transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="group relative w-full px-8 py-5 rounded-xl overflow-hidden bg-[#262626] text-white font-light text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="contact-form" className="relative py-24 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
      {/* Right column: Contact form */}
      <div className="lg:col-span-3 h-full">
        <div className="flex flex-col justify-between h-full p-8 md:p-12 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/60 shadow-2xl">
          <div>
            <h2 className="text-5xl md:text-4xl font-hatton text-[#262626] mt-3">
              Get in Touch
            </h2>
            <p className="text-[#595959] mb-8 font-montserrat mt-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
              <div className="relative group gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-transparent rounded-xl text-[#262626] placeholder-[#595959]/60 focus:outline-none focus:border-[#C1B5C6] focus:bg-white transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="relative group gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-transparent rounded-xl text-[#262626] placeholder-[#595959]/60 focus:outline-none focus:border-[#C1B5C6] focus:bg-white transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
            <div className="relative group gap-20">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-6 py-8 bg-white/70 backdrop-blur-sm border-2 border-transparent rounded-xl text-[#262626] placeholder-[#595959]/60 focus:outline-none focus:border-[#C1B5C6] focus:bg-white resize-none transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </div>
            <button
              onClick={handleSubmit}
              className="group relative w-full px-8 py-5 rounded-xl overflow-hidden bg-[#262626] text-white font-light text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
      {/* Left column: Contact information cards (compact) */}
      <div className="lg:col-span-2 h-full">
        <div className="flex flex-col justify-between h-full p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg space-y-4">
          {/* Map/Address Card */}
          <div className="group relative p-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/50 hover:border-[#C1B5C6] transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-[#C1B5C6] to-[#B0C2B0] text-white mb-3 group-hover:scale-105 transition-transform duration-200">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-medium text-[#262626] mb-1">Visit Us</h3>
              <div className="space-y-0.5">
                <p className="text-xs text-[#595959]">Mwanzi Market, Westlands</p>
                <p className="text-xs text-[#595959]">Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="group relative p-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/50 hover:border-[#C1B5C6] transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-[#C1B5C6] to-[#B0C2B0] text-white mb-3 group-hover:scale-105 transition-transform duration-200">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-medium text-[#262626] mb-1">Working Hours</h3>
              <div className="space-y-0.5">
                <p className="text-xs text-[#595959]">Mon - Sat: 9am - 7pm</p>
                <p className="text-xs text-[#595959]">Sun: 10am - 6pm</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative p-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/50 hover:border-[#C1B5C6] transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-[#C1B5C6] to-[#B0C2B0] text-white mb-3 group-hover:scale-105 transition-transform duration-200">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-medium text-[#262626] mb-1">Email</h3>
              <div className="space-y-0.5">
                <a
                  href="mailto:hello@avyabeauty.co.ke"
                  className="block text-xs text-[#595959] hover:text-[#C1B5C6] transition-colors"
                >
                  hello@avyabeauty.co.ke
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group relative p-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/50 hover:border-[#C1B5C6] transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-[#C1B5C6] to-[#B0C2B0] text-white mb-3 group-hover:scale-105 transition-transform duration-200">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-medium text-[#262626] mb-1">Phone</h3>
              <div className="space-y-0.5">
                <a
                  href="tel:+254116444433"
                  className="block text-xs text-[#595959] hover:text-[#C1B5C6] transition-colors"
                >
                  +254 116 444 433
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="p-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/50">
            <h3 className="text-base font-medium text-[#262626] mb-3">Follow Us</h3>
            <div className="flex gap-2">
              {[
                { icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                { icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
                { icon: <TikTokIcon className="w-4 h-4" />, label: "TikTok" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group relative w-10 h-10 rounded-lg bg-white/70 backdrop-blur-md flex items-center justify-center overflow-hidden transition-all duration-200 hover:scale-105"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C1B5C6] to-[#B0C2B0] translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
                  <span className="relative z-10 text-[#262626] group-hover:text-white transition-colors text-xs">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</section>


      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight text-[#262626] mb-4">
              Find Us Here
            </h2>
            <p className="text-[#595959] font-light">
              Located in the heart of Westlands, Nairobi
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative h-96 rounded-3xl overflow-hidden border-4 border-white/50 shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=mwanzi market westlands&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
