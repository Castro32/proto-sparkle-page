// // // import React from 'react';

// // // const Footer = () => {
// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     // Handle newsletter subscription
// // //     console.log('Newsletter subscription submitted');
// // //   };

// // //   return (
// // //     <footer className="bg-[#262626] text-white py-12 px-4 md:px-12">
// // //       <div className="max-w-6xl mx-auto">
// // //         <div className="flex flex-col md:flex-row justify-between gap-8">
// // //           {/* Newsletter Section */}
// // //           <div className="space-y-6 flex-1 max-w-md">
// // //             <h2 className="text-5xl md:text-6xl font-light font-hatton text-white">
// // //               Join the AVYA community.
// // //             </h2>
// // //             <p className="text-white/70 text-base leading-relaxed">
// // //               We share occasional insights on personal growth, emotional well-being, and practical tools to navigate life with more clarity and balance.
// // //             </p>
// // //             <div className="flex flex-col sm:flex-row gap-2">
// // //               <input
// // //                 type="email"
// // //                 placeholder="Your Email"
// // //                 className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 font-sans"
// // //               />
// // //               <button
// // //                 onClick={handleSubmit}
// // //                 className="px-6 py-3 bg-white text-[#262626] rounded-lg hover:bg-white/90 transition-colors font-sans"
// // //               >
// // //                 SUBSCRIBE
// // //               </button>
// // //             </div>
// // //             <p className="text-sm text-white/70">
// // //               By signing up to receive emails from AVYA, you agree to our{' '}
// // //               <a href="#" className="underline hover:text-white transition-colors">
// // //                 Privacy Policy
// // //               </a>
// // //               .
// // //             </p>
// // //           </div>

// // //           {/* Follow Us Section */}
// // //           <div className="space-y-4 flex-shrink-0">
// // //             <h3 className="text-base uppercase tracking-wider text-white/70 font-sans">
// // //               Follow Us
// // //             </h3>
// // //             <div className="flex space-x-4">
// // //               <a
// // //                 href="https://www.facebook.com/people/Avya-Beauty-KE/61581716020463/?rdid=4k7KYyHS902QXDtT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A9N3KMVZ3%2F"
// // //                 target="_blank"
// // //                 rel="noopener noreferrer"
// // //                 className="text-white hover:text-white/70 transition-colors"
// // //                 aria-label="Facebook"
// // //               >
// // //                 <svg
// // //                   className="w-6 h-6"
// // //                   fill="currentColor"
// // //                   viewBox="0 0 24 24"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <path
// // //                     fillRule="evenodd"
// // //                     d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 3.789h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
// // //                     clipRule="evenodd"
// // //                   />
// // //                 </svg>
// // //               </a>
// // //               <a
// // //                 href="https://www.tiktok.com/@avya.beauty.ke"
// // //                 target="_blank"
// // //                 rel="noopener noreferrer"
// // //                 className="text-white hover:text-white/70 transition-colors"
// // //                 aria-label="TikTok"
// // //               >
// // //                 <svg
// // //                   className="w-6 h-6"
// // //                   fill="currentColor"
// // //                   viewBox="0 0 24 24"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
// // //                 </svg>
// // //               </a>
// // //               <a
// // //                 href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
// // //                 target="_blank"
// // //                 rel="noopener noreferrer"
// // //                 className="text-white hover:text-white/70 transition-colors"
// // //                 aria-label="Instagram"
// // //               >
// // //                 <svg
// // //                   className="w-6 h-6"
// // //                   fill="currentColor"
// // //                   viewBox="0 0 24 24"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <path
// // //                     fillRule="evenodd"
// // //                     d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.772-1.153 4.902 4.902 0 011.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123v-.08c0-2.43-.012-2.784-.06-3.808-.049-.976-.218-1.703-.465-2.427A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
// // //                     clipRule="evenodd"
// // //                   />
// // //                 </svg>
// // //               </a>
// // //             </div>
// // //           </div>

// // //           {/* Quick Links Section */}
// // //           <div className="space-y-4 flex-shrink-0">
// // //             <h3 className="text-base uppercase tracking-wider text-white/70 font-sans">
// // //               Quick Links
// // //             </h3>
// // //             <ul className="space-y-2">
// // //               <li>
// // //                 <a
// // //                   href="/"
// // //                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
// // //                 >
// // //                   Home
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                   href="/about"
// // //                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
// // //                 >
// // //                   About
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                   href="#"
// // //                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
// // //                 >
// // //                   Services
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                   href="/team"
// // //                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
// // //                 >
// // //                   Our Team
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                   href="/contact"
// // //                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
// // //                 >
// // //                   Contact
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a
// // //                  target='blank'
// // //                   href="https://www.google.com/maps/dir//Avya+Beauty+Salon+1st+Floor+Mwanzi+Market+Nairobi/@-1.2548601,36.8000133,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x182f17e571c48ebd:0xbe922a8bab6cdc78"
// // //                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
// // //                 >
// // //                   Locate Us
// // //                 </a>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // };

// // // export default Footer;
// // import React, { useState } from 'react';

// // const Footer = () => {
// //   const [email, setEmail] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [error, setError] = useState<string | null>(null);
// //   const [success, setSuccess] = useState(false);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!email || !email.includes('@')) {
// //       setError('Please enter a valid email address.');
// //       return;
// //     }
// //     setIsSubmitting(true);
// //     setError(null);

// //     try {
// //       //const mailchimpUrl = 'https://canvasmedialtd.us14.list-manage.com/subscribe/post?u=c832645c69f21fb70cbfedb31&amp;id=2e86d9bbe0&amp;f_id=000ab7e5f0';
// //       const mailchimpUrl = 'https://canvasmedialtd.us14.list-manage.com/subscribe/post?u=c832645c69f21fb70cbfedb31&amp;id=2e86d9bbe0&amp;f_id=000ab7e5f0';
// //       const formData = new FormData();
// //       formData.append('EMAIL', email);

// //       const response = await fetch(mailchimpUrl, {
// //         method: 'POST',
// //         body: formData,
// //         mode: 'no-cors',
// //       });

// //       setSuccess(true);
// //       setEmail('');
// //       setTimeout(() => setSuccess(false), 3000);
// //     } catch (err) {
// //       setError('Failed to subscribe. Please try again.');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <footer className="bg-[#262626] text-white py-12 px-4 md:px-12">
// //       <div className="max-w-6xl mx-auto">
// //         <div className="flex flex-col md:flex-row justify-between gap-8">
// //           {/* Newsletter Section */}
// //           <div className="space-y-6 flex-1 max-w-md">
// //             <h2 className="text-5xl md:text-6xl font-light font-hatton text-white">
// //               Join the AVYA community.
// //             </h2>
// //             <p className="text-white/70 text-base leading-relaxed">
// //               We share occasional insights on personal growth, emotional well-being, and practical tools to navigate life with more clarity and balance.
// //             </p>
// //             <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
// //               <input
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 placeholder="Your Email"
// //                 className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 font-sans"
// //               />
// //               <button
// //                 type="submit"
// //                 disabled={isSubmitting}
// //                 className="px-6 py-3 bg-white text-[#262626] rounded-lg hover:bg-white/90 transition-colors font-sans disabled:bg-gray-400"
// //               >
// //                 {isSubmitting ? 'Subscribing...' : 'SUBSCRIBE'}
// //               </button>
// //             </form>
// //             {error && <p className="text-red-400 text-sm">{error}</p>}
// //             {success && <p className="text-green-400 text-sm">Thank you for Joining Avya Community!</p>}
// //             <p className="text-sm text-white/70">
// //               By signing up to receive emails from AVYA, you agree to our{' '}
// //               <a href="#" className="underline hover:text-white transition-colors">
// //                 Privacy Policy
// //               </a>
// //               .
// //             </p>
// //           </div>
// //           {/* Follow Us Section */}
// //           <div className="space-y-4 flex-shrink-0">
// //             <h3 className="text-base uppercase tracking-wider text-white/70 font-sans">
// //               Follow Us
// //             </h3>
// //             <div className="flex space-x-4">
// //               <a
// //                 href="https://www.facebook.com/people/Avya-Beauty-KE/61581716020463/?rdid=4k7KYyHS902QXDtT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A9N3KMVZ3%2F"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-white hover:text-white/70 transition-colors"
// //                 aria-label="Facebook"
// //               >
// //                 <svg
// //                   className="w-6 h-6"
// //                   fill="currentColor"
// //                   viewBox="0 0 24 24"
// //                   aria-hidden="true"
// //                 >
// //                   <path
// //                     fillRule="evenodd"
// //                     d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 3.789h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
// //                     clipRule="evenodd"
// //                   />
// //                 </svg>
// //               </a>
// //               <a
// //                 href="https://www.tiktok.com/@avya.beauty.ke"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-white hover:text-white/70 transition-colors"
// //                 aria-label="TikTok"
// //               >
// //                 <svg
// //                   className="w-6 h-6"
// //                   fill="currentColor"
// //                   viewBox="0 0 24 24"
// //                   aria-hidden="true"
// //                 >
// //                   <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
// //                 </svg>
// //               </a>
// //               <a
// //                 href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-white hover:text-white/70 transition-colors"
// //                 aria-label="Instagram"
// //               >
// //                 <svg
// //                   className="w-6 h-6"
// //                   fill="currentColor"
// //                   viewBox="0 0 24 24"
// //                   aria-hidden="true"
// //                 >
// //                   <path
// //                     fillRule="evenodd"
// //                     d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.772-1.153 4.902 4.902 0 011.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123v-.08c0-2.43-.012-2.784-.06-3.808-.049-.976-.218-1.703-.465-2.427A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
// //                     clipRule="evenodd"
// //                   />
// //                 </svg>
// //               </a>
// //             </div>
// //           </div>
// //           {/* Quick Links Section */}
// //           <div className="space-y-4 flex-shrink-0">
// //             <h3 className="text-base uppercase tracking-wider text-white/70 font-sans">
// //               Quick Links
// //             </h3>
// //             <ul className="space-y-2">
// //               <li>
// //                 <a
// //                   href="/"
// //                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
// //                 >
// //                   Home
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="/about"
// //                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
// //                 >
// //                   About
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="#"
// //                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
// //                 >
// //                   Services
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="/team"
// //                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
// //                 >
// //                   Our Team
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="/contact"
// //                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
// //                 >
// //                   Contact
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                  target='blank'
// //                   href="https://www.google.com/maps/dir//Avya+Beauty+Salon+1st+Floor+Mwanzi+Market+Nairobi/@-1.2548601,36.8000133,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x182f17e571c48ebd:0xbe922a8bab6cdc78"
// //                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
// //                 >
// //                   Locate Us
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;
// import React, { useState } from 'react';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);
//   const [subscribedEmails, setSubscribedEmails] = useState<Set<string>>(new Set());

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const normalizedEmail = email.toLowerCase().trim();
    
//     if (!normalizedEmail || !normalizedEmail.includes('@')) {
//       setError('Please enter a valid email address.');
//       return;
//     }
    
//     if (subscribedEmails.has(normalizedEmail)) {
//       setError('This email address has already been subscribed.');
//       return;
//     }
    
//     setIsSubmitting(true);
//     setError(null);

//     try {
//       const mailchimpUrl = 'https://canvasmedialtd.us14.list-manage.com/subscribe/post?u=c832645c69f21fb70cbfedb31&amp;id=2e86d9bbe0&amp;f_id=000ab7e5f0';
//       const formData = new FormData();
//       formData.append('EMAIL', normalizedEmail);

//       const response = await fetch(mailchimpUrl, {
//         method: 'POST',
//         body: formData,
//         mode: 'no-cors',
//       });

//       setSuccess(true);
//       setEmail('');
//       setSubscribedEmails(prev => new Set(prev).add(normalizedEmail));
//       setTimeout(() => setSuccess(false), 3000);
//     } catch (err) {
//       setError('Failed to subscribe. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <footer className="bg-[#262626] text-white py-12 px-4 md:px-12">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between gap-8">
//           {/* Newsletter Section */}
//           <div className="space-y-6 flex-1 max-w-md">
//             <h2 className="text-5xl md:text-6xl font-light font-hatton text-white">
//               Join the AVYA community.
//             </h2>
//             <p className="text-white/70 text-base leading-relaxed">
//               We share occasional insights on personal growth, emotional well-being, and practical tools to navigate life with more clarity and balance.
//             </p>
//             <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your Email"
//                 className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 font-sans"
//               />
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="px-6 py-3 bg-white text-[#262626] rounded-lg hover:bg-white/90 transition-colors font-sans disabled:bg-gray-400"
//               >
//                 {isSubmitting ? 'Subscribing...' : 'SUBSCRIBE'}
//               </button>
//             </form>
//             {error && <p className="text-red-400 text-sm">{error}</p>}
//             {success && <p className="text-green-400 text-sm">Thank you for Joining Avya Community!</p>}
//             <p className="text-sm text-white/70">
//               By signing up to receive emails from AVYA, you agree to our{' '}
//               <a href="#" className="underline hover:text-white transition-colors">
//                 Privacy Policy
//               </a>
//               .
//             </p>
//           </div>
//           {/* Follow Us Section */}
//           <div className="space-y-4 flex-shrink-0">
//             <h3 className="text-base uppercase tracking-wider text-white/70 font-sans">
//               Follow Us
//             </h3>
//             <div className="flex space-x-4">
//               <a
//                 href="https://www.facebook.com/people/Avya-Beauty-KE/61581716020463/?rdid=4k7KYyHS902QXDtT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A9N3KMVZ3%2F"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-white/70 transition-colors"
//                 aria-label="Facebook"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 3.789h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//               <a
//                 href="https://www.tiktok.com/@avya.beauty.ke"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-white/70 transition-colors"
//                 aria-label="TikTok"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
//                 </svg>
//               </a>
//               <a
//                 href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-white/70 transition-colors"
//                 aria-label="Instagram"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.772-1.153 4.902 4.902 0 011.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123v-.08c0-2.43-.012-2.784-.06-3.808-.049-.976-.218-1.703-.465-2.427A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           {/* Quick Links Section */}
//           <div className="space-y-4 flex-shrink-0">
//             <h3 className="text-base uppercase tracking-wider text-white/70 font-sans">
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="/"
//                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/about"
//                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/team"
//                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
//                 >
//                   Our Team
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/contact"
//                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
//                 >
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a
//                  target='blank'
//                   href="https://www.google.com/maps/dir//Avya+Beauty+Salon+1st+Floor+Mwanzi+Market+Nairobi/@-1.2548601,36.8000133,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x182f17e571c48ebd:0xbe922a8bab6cdc78"
//                   className="text-white hover:text-white/70 transition-colors font-sans text-base"
//                 >
//                   Locate Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedEmail = email.toLowerCase().trim();
    
    if (!normalizedEmail || !normalizedEmail.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      // Call your backend API endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle different error types
        if (data.title === 'Member Exists') {
          setError('This email is already subscribed to our newsletter.');
        } else if (data.title === 'Invalid Resource') {
          setError('Please enter a valid email address.');
        } else {
          setError(data.detail || 'Failed to subscribe. Please try again.');
        }
        return;
      }

      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#262626] text-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Newsletter Section */}
          <div className="space-y-6 flex-1 max-w-md">
            <h2 className="text-5xl md:text-6xl font-light font-hatton text-white">
              Join the AVYA community.
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              We share occasional insights on personal growth, emotional well-being, and practical tools to navigate life with more clarity and balance.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 font-sans"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-white text-[#262626] rounded-lg hover:bg-white/90 transition-colors font-sans disabled:bg-gray-400"
              >
                {isSubmitting ? 'Subscribing...' : 'SUBSCRIBE'}
              </button>
            </form>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">Thank you for Joining Avya Community!</p>}
            <p className="text-sm text-white/70">
              By signing up to receive emails from AVYA, you agree to our{' '}
              <a href="#" className="underline hover:text-white transition-colors">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          {/* Follow Us Section */}
          <div className="space-y-4 flex-shrink-0">
            <h3 className="text-base uppercase tracking-wider text-white/70 font-sans">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Avya-Beauty-KE/61581716020463/?rdid=4k7KYyHS902QXDtT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A9N3KMVZ3%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 3.789h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@avya.beauty.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70 transition-colors"
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
              <a
                href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.772-1.153 4.902 4.902 0 011.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123v-.08c0-2.43-.012-2.784-.06-3.808-.049-.976-.218-1.703-.465-2.427A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* Quick Links Section */}
          <div className="space-y-4 flex-shrink-0">
            <h3 className="text-base uppercase tracking-wider text-white/70 font-sans">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-white hover:text-white/70 transition-colors font-sans text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white hover:text-white/70 transition-colors font-sans text-base"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white/70 transition-colors font-sans text-base"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="text-white hover:text-white/70 transition-colors font-sans text-base"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white hover:text-white/70 transition-colors font-sans text-base"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                 target='blank'
                  href="https://www.google.com/maps/dir//Avya+Beauty+Salon+1st+Floor+Mwanzi+Market+Nairobi/@-1.2548601,36.8000133,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x182f17e571c48ebd:0xbe922a8bab6cdc78"
                  className="text-white hover:text-white/70 transition-colors font-sans text-base"
                >
                  Locate Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;