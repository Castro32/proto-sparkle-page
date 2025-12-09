// // // // // // // import { useState } from 'react';
// // // // // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // // // // interface NewsletterPopupProps {
// // // // // // //   isOpen: boolean;
// // // // // // //   onClose: () => void;
// // // // // // // }
// // // // // // // const NewsletterPopup = ({ isOpen, onClose }: NewsletterPopupProps) => {
// // // // // // //   const [email, setEmail] = useState('');
// // // // // // //   const handleSubmit = () => {
// // // // // // //     if (email && email.includes('@')) {
// // // // // // //       console.log('Subscribed:', email);
// // // // // // //       onClose();
// // // // // // //     }
// // // // // // //   };
// // // // // // //   const handleKeyPress = (e: React.KeyboardEvent) => {
// // // // // // //     if (e.key === 'Enter') {
// // // // // // //       handleSubmit();
// // // // // // //     }
// // // // // // //   };
// // // // // // //   return (
// // // // // // //     <AnimatePresence>
// // // // // // //       {isOpen && (
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0, scale: 0.5 }}
// // // // // // //           animate={{ opacity: 1, scale: 1 }}
// // // // // // //           exit={{ opacity: 0, y: 50 }}
// // // // // // //           className="fixed bottom-4 left-4 bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4 z-[1000]"
// // // // // // //           style={{ borderTop: '4px solid #B0C2B0' }}
// // // // // // //         >
// // // // // // //           <button
// // // // // // //             onClick={onClose}
// // // // // // //             className="absolute top-2 right-2 text-[#595959] hover:text-[#262626] text-2xl font-light"
// // // // // // //           >
// // // // // // //             ×
// // // // // // //           </button>
// // // // // // //           <h2 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#262626' }}>
// // // // // // //             Subscribe to our Newsletter
// // // // // // //           </h2>
// // // // // // //           <p className="mb-4 text-xs sm:text-sm" style={{ color: '#595959' }}>
// // // // // // //             Get exclusive beauty tips and special offers delivered to your inbox
// // // // // // //           </p>
// // // // // // //           <div>
// // // // // // //             <input
// // // // // // //               type="email"
// // // // // // //               value={email}
// // // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // // //               onKeyPress={handleKeyPress}
// // // // // // //               placeholder="Enter your email address"
// // // // // // //               className="w-full p-2 sm:p-3 mb-3 border-2 rounded-lg text-xs sm:text-sm"
// // // // // // //               style={{ borderColor: '#E2DBDF', color: '#262626' }}
// // // // // // //               required
// // // // // // //             />
// // // // // // //             <button
// // // // // // //               onClick={handleSubmit}
// // // // // // //               className="w-full text-white p-2 sm:p-3 rounded-lg font-semibold transition-colors text-xs sm:text-sm"
// // // // // // //               style={{ backgroundColor: '#595959' }}
// // // // // // //               onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#262626'}
// // // // // // //               onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#595959'}
// // // // // // //             >
// // // // // // //               Subscribe
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </motion.div>
// // // // // // //       )}
// // // // // // //     </AnimatePresence>
// // // // // // //   );
// // // // // // // };
// // // // // // // export default NewsletterPopup;
// // // // // // import { useState } from 'react';
// // // // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // // // interface NewsletterPopupProps {
// // // // // //   isOpen: boolean;
// // // // // //   onClose: () => void;
// // // // // // }

// // // // // // const NewsletterPopup = ({ isOpen, onClose }: NewsletterPopupProps) => {
// // // // // //   const [email, setEmail] = useState('');
// // // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // // //   const [error, setError] = useState<string | null>(null);
// // // // // //   const [success, setSuccess] = useState(false);

// // // // // //   const handleSubmit = async () => {
// // // // // //     if (!email || !email.includes('@')) {
// // // // // //       setError('Please enter a valid email address.');
// // // // // //       return;
// // // // // //     }

// // // // // //     setIsSubmitting(true);
// // // // // //     setError(null);

// // // // // //     try {
// // // // // //       const mailchimpUrl = 'https://gmail.us3.list-manage.com/subscribe/post?u=54b361c731e48a9f02daf5f08&id=6d31763a68&f_id=0008c0e5f0';
// // // // // //       const formData = new FormData();
// // // // // //       formData.append('EMAIL', email);

// // // // // //       const response = await fetch(mailchimpUrl, {
// // // // // //         method: 'POST',
// // // // // //         body: formData,
// // // // // //         mode: 'no-cors',
// // // // // //       });

// // // // // //       setSuccess(true);
// // // // // //       setTimeout(() => {
// // // // // //         onClose();
// // // // // //         setSuccess(false);
// // // // // //       }, 2000);
// // // // // //     } catch (err) {
// // // // // //       setError('Failed to subscribe. Please try again.');
// // // // // //     } finally {
// // // // // //       setIsSubmitting(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleKeyPress = (e: React.KeyboardEvent) => {
// // // // // //     if (e.key === 'Enter') {
// // // // // //       handleSubmit();
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <AnimatePresence>
// // // // // //       {isOpen && (
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, scale: 0.5 }}
// // // // // //           animate={{ opacity: 1, scale: 1 }}
// // // // // //           exit={{ opacity: 0, y: 50 }}
// // // // // //           className="fixed bottom-4 left-4 bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4 z-[1000]"
// // // // // //           style={{ borderTop: '4px solid #B0C2B0' }}
// // // // // //         >
// // // // // //           <button
// // // // // //             onClick={onClose}
// // // // // //             className="absolute top-2 right-2 text-[#595959] hover:text-[#262626] text-2xl font-light"
// // // // // //           >
// // // // // //             ×
// // // // // //           </button>
// // // // // //           <h2 className="text-center text-lg sm:text-xl font-bold mb-2" style={{ color: '#262626' }}>
// // // // // //             Join the AVYA community
// // // // // //           </h2>
// // // // // //           <p className="mb-4 text-xs sm:text-sm" style={{ color: '#595959' }}>
// // // // // //             Get exclusive beauty tips and special offers delivered to your inbox
// // // // // //           </p>
// // // // // //           {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
// // // // // //           {success && <p className="text-green-500 text-xs mb-2">Thank you for subscribing!</p>}
// // // // // //           <div>
// // // // // //             <input
// // // // // //               type="email"
// // // // // //               value={email}
// // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // //               onKeyPress={handleKeyPress}
// // // // // //               placeholder="Enter your email address"
// // // // // //               className="w-full p-2 sm:p-3 mb-3 border-2 rounded-lg text-xs sm:text-sm"
// // // // // //               style={{ borderColor: '#E2DBDF', color: '#262626' }}
// // // // // //               required
// // // // // //             />
// // // // // //             <button
// // // // // //               onClick={handleSubmit}
// // // // // //               disabled={isSubmitting}
// // // // // //               className="w-full text-white p-2 sm:p-3 rounded-lg font-semibold transition-colors text-xs sm:text-sm"
// // // // // //               style={{ backgroundColor: isSubmitting ? '#7a7a7a' : '#595959' }}
// // // // // //               onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#262626')}
// // // // // //               onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#595959')}
// // // // // //             >
// // // // // //               {isSubmitting ? 'Subscribing...' : 'Subscribe'}
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </motion.div>
// // // // // //       )}
// // // // // //     </AnimatePresence>
// // // // // //   );
// // // // // // };

// // // // // // export default NewsletterPopup;
// // // // // import { useState, useEffect } from 'react';
// // // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // // import AD1 from "@/assets/ad1.jpeg";
// // // // // import AD2 from "@/assets/ad2.jpeg";
// // // // // import AD3 from "@/assets/ad3.jpeg";
// // // // // import AD4 from "@/assets/ad4.jpeg";
// // // // // import AD5 from "@/assets/ad5.jpeg";
// // // // // import AD6 from "@/assets/ad6.jpeg";

// // // // // interface NewsletterPopupProps {
// // // // //   isOpen: boolean;
// // // // //   onClose: () => void;
// // // // // }

// // // // // // REPLACE THESE WITH YOUR ACTUAL IMAGE PATHS
// // // // // const images = [
// // // // //   AD1,
// // // // //   AD2,
// // // // //   AD3,
// // // // //   AD4,
// // // // //   AD5,
// // // // //   AD6
// // // // // ];

// // // // // const NewsletterPopup = ({ isOpen, onClose }: NewsletterPopupProps) => {
// // // // //   const [email, setEmail] = useState('');
// // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // //   const [error, setError] = useState<string | null>(null);
// // // // //   const [success, setSuccess] = useState(false);
  
// // // // //   // State for image slider
// // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// // // // //   // Auto-cycle images every 3 seconds
// // // // //   useEffect(() => {
// // // // //     if (!isOpen) return;
// // // // //     const interval = setInterval(() => {
// // // // //       setCurrentImageIndex((prev) => (prev + 1) % images.length);
// // // // //     }, 3000);
// // // // //     return () => clearInterval(interval);
// // // // //   }, [isOpen]);

// // // // //   const handleSubmit = async () => {
// // // // //     if (!email || !email.includes('@')) {
// // // // //       setError('Please enter a valid email address.');
// // // // //       return;
// // // // //     }

// // // // //     setIsSubmitting(true);
// // // // //     setError(null);

// // // // //     try {
// // // // //       const mailchimpUrl = 'https://gmail.us3.list-manage.com/subscribe/post?u=54b361c731e48a9f02daf5f08&id=6d31763a68&f_id=0008c0e5f0';
// // // // //       const formData = new FormData();
// // // // //       formData.append('EMAIL', email);

// // // // //       const response = await fetch(mailchimpUrl, {
// // // // //         method: 'POST',
// // // // //         body: formData,
// // // // //         mode: 'no-cors',
// // // // //       });

// // // // //       setSuccess(true);
// // // // //       setTimeout(() => {
// // // // //         onClose();
// // // // //         setSuccess(false);
// // // // //       }, 3000);
// // // // //     } catch (err) {
// // // // //       setError('Failed to subscribe. Please try again.');
// // // // //     } finally {
// // // // //       setIsSubmitting(false);
// // // // //     }
// // // // //   };

// // // // //   const handleKeyPress = (e: React.KeyboardEvent) => {
// // // // //     if (e.key === 'Enter') {
// // // // //       handleSubmit();
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <AnimatePresence>
// // // // //       {isOpen && (
// // // // //         <>
// // // // //           {/* Backdrop Overlay */}
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             exit={{ opacity: 0 }}
// // // // //             onClick={onClose}
// // // // //             className="fixed inset-0 bg-black/50 z-[999] backdrop-blur-sm"
// // // // //           />

// // // // //           {/* Modal Container */}
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, scale: 0.9, y: 20 }}
// // // // //             animate={{ opacity: 1, scale: 1, y: 0 }}
// // // // //             exit={{ opacity: 0, scale: 0.9, y: 20 }}
// // // // //             className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none"
// // // // //           >
// // // // //             <div 
// // // // //               className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row pointer-events-auto relative"
// // // // //               style={{ borderTop: '4px solid #B0C2B0' }}
// // // // //             >
// // // // //               {/* Close Button */}
// // // // //               <button
// // // // //                 onClick={onClose}
// // // // //                 className="absolute top-3 right-3 z-20 text-[#595959] hover:text-[#262626] bg-white/80 rounded-full w-8 h-8 flex items-center justify-center transition-colors text-2xl font-light"
// // // // //               >
// // // // //                 ×
// // // // //               </button>

// // // // //               {/* LEFT SIDE: Image Slider */}
// // // // //               <div className="w-full md:w-1/2 h-48 md:h-auto relative overflow-hidden bg-gray-100">
// // // // //                 <AnimatePresence mode='wait'>
// // // // //                   <motion.img
// // // // //                     key={currentImageIndex}
// // // // //                     src={images[currentImageIndex]}
// // // // //                     alt="Spa Ambiance"
// // // // //                     initial={{ opacity: 0 }}
// // // // //                     animate={{ opacity: 1 }}
// // // // //                     exit={{ opacity: 0 }}
// // // // //                     transition={{ duration: 0.8 }}
// // // // //                     className="absolute inset-0 w-full h-full object-cover"
// // // // //                   />
// // // // //                 </AnimatePresence>
// // // // //                 {/* Image Overlay Gradient */}
// // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
// // // // //               </div>

// // // // //               {/* RIGHT SIDE: Content Form */}
// // // // //               <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
// // // // //                 <div className="text-center md:text-left">
// // // // //                   <h2 className="text-2xl font-bold mb-3" style={{ color: '#262626' }}>
// // // // //                     Join the AVYA community
// // // // //                   </h2>
// // // // //                   <p className="mb-6 text-sm leading-relaxed" style={{ color: '#595959' }}>
// // // // //                     Unlock exclusive beauty tips, wellness guides, and special offers delivered directly to your inbox.
// // // // //                   </p>

// // // // //                   {error && <p className="text-red-500 text-xs mb-3 bg-red-50 p-2 rounded">{error}</p>}
// // // // //                   {success && <p className="text-green-600 text-sm mb-3 bg-green-50 p-2 rounded border border-green-200">Thank you! You are now subscribed.</p>}

// // // // //                   <div className="flex flex-col gap-3">
// // // // //                     <input
// // // // //                       type="email"
// // // // //                       value={email}
// // // // //                       onChange={(e) => setEmail(e.target.value)}
// // // // //                       onKeyPress={handleKeyPress}
// // // // //                       placeholder="Enter your email address"
// // // // //                       className="w-full p-3 border rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#B0C2B0] transition-all"
// // // // //                       style={{ borderColor: '#E2DBDF', color: '#262626' }}
// // // // //                       required
// // // // //                     />
// // // // //                     <button
// // // // //                       onClick={handleSubmit}
// // // // //                       disabled={isSubmitting}
// // // // //                       className="w-full text-white p-3 rounded-lg font-semibold transition-colors text-sm uppercase tracking-wide"
// // // // //                       style={{ backgroundColor: isSubmitting ? '#9ca39c' : '#595959' }}
// // // // //                       onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#262626')}
// // // // //                       onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#595959')}
// // // // //                     >
// // // // //                       {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
// // // // //                     </button>
// // // // //                   </div>
                  
// // // // //                   <p className="mt-4 text-[10px] text-gray-400 text-center md:text-left">
// // // // //                     We respect your privacy. Unsubscribe at any time.
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </>
// // // // //       )}
// // // // //     </AnimatePresence>
// // // // //   );
// // // // // };

// // // // // export default NewsletterPopup;
// // // // import { useState, useEffect } from 'react';
// // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // import AD1 from "@/assets/ad1.jpeg";
// // // // import AD2 from "@/assets/ad2.jpeg";
// // // // import AD3 from "@/assets/ad3.jpeg";
// // // // import AD4 from "@/assets/ad4.jpeg";
// // // // import AD5 from "@/assets/ad5.jpeg";
// // // // import AD6 from "@/assets/ad6.jpeg";

// // // // interface NewsletterPopupProps {
// // // //   isOpen: boolean;
// // // //   onClose: () => void;
// // // // }

// // // // const images = [
// // // //   AD1,
// // // //   AD2,
// // // //   AD3,
// // // //   AD4,
// // // //   AD5,
// // // //   AD6
// // // // ];

// // // // const NewsletterPopup = ({ isOpen, onClose }: NewsletterPopupProps) => {
// // // //   // State for image slider
// // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// // // //   // Auto-cycle images every 3 seconds
// // // //   useEffect(() => {
// // // //     if (!isOpen) return;
// // // //     const interval = setInterval(() => {
// // // //       setCurrentImageIndex((prev) => (prev + 1) % images.length);
// // // //     }, 3000);
// // // //     return () => clearInterval(interval);
// // // //   }, [isOpen]);

// // // //   return (
// // // //     <AnimatePresence>
// // // //       {isOpen && (
// // // //         <>
// // // //           {/* Backdrop Overlay */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             onClick={onClose}
// // // //             className="fixed inset-0 bg-black/60 z-[999] backdrop-blur-sm"
// // // //           />

// // // //           {/* Modal Container */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, scale: 0.9, y: 20 }}
// // // //             animate={{ opacity: 1, scale: 1, y: 0 }}
// // // //             exit={{ opacity: 0, scale: 0.9, y: 20 }}
// // // //             className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none"
// // // //           >
// // // //             <div 
// // // //               className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-lg relative pointer-events-auto"
// // // //               style={{ borderTop: '4px solid #B0C2B0' }}
// // // //             >
// // // //               {/* Close Button */}
// // // //               <button
// // // //                 onClick={onClose}
// // // //                 className="absolute top-3 right-3 z-20 text-[#262626] hover:text-black bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center transition-colors text-2xl font-light shadow-sm"
// // // //               >
// // // //                 ×
// // // //               </button>

// // // //               {/* Image Slider Area */}
// // // //               {/* Added specific height/aspect ratio classes to ensure ads display nicely */}
// // // //               <div className="relative w-full aspect-[4/5] md:h-[500px] bg-gray-100">
// // // //                 <AnimatePresence mode='wait'>
// // // //                   <motion.img
// // // //                     key={currentImageIndex}
// // // //                     src={typeof images[currentImageIndex] === 'string' ? images[currentImageIndex] : (images[currentImageIndex] as any).src || images[currentImageIndex]}
// // // //                     alt="Special Offer"
// // // //                     initial={{ opacity: 0 }}
// // // //                     animate={{ opacity: 1 }}
// // // //                     exit={{ opacity: 0 }}
// // // //                     transition={{ duration: 0.5 }}
// // // //                     className="absolute inset-0 w-full h-full object-cover"
// // // //                   />
// // // //                 </AnimatePresence>
                
// // // //                 {/* Optional: Navigation Dots at bottom */}
// // // //                 <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
// // // //                   {images.map((_, index) => (
// // // //                     <div 
// // // //                       key={index}
// // // //                       className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
// // // //                     />
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //             </div>
// // // //           </motion.div>
// // // //         </>
// // // //       )}
// // // //     </AnimatePresence>
// // // //   );
// // // // };

// // // // export default NewsletterPopup;
// // // import { useState, useEffect } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import AD1 from "@/assets/ad1.jpeg";
// // // import AD2 from "@/assets/ad2.jpeg";
// // // import AD3 from "@/assets/ad3.jpeg";
// // // import AD4 from "@/assets/ad4.jpeg";
// // // import AD5 from "@/assets/ad5.jpeg";
// // // import AD6 from "@/assets/ad6.jpeg";
// // // import AD7 from "@/assets/a7.jpeg";
// // // import AD8 from "@/assets/a8.jpeg";

// // // interface NewsletterPopupProps {
// // //   isOpen: boolean;
// // //   onClose: () => void;
// // // }

// // // const images = [
// // //   AD7,
// // //   AD8,
// // // ];

// // // const NewsletterPopup = ({ isOpen, onClose }: NewsletterPopupProps) => {
// // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// // //   useEffect(() => {
// // //     if (!isOpen) return;
// // //     const interval = setInterval(() => {
// // //       setCurrentImageIndex((prev) => (prev + 1) % images.length);
// // //     }, 7000);
// // //     return () => clearInterval(interval);
// // //   }, [isOpen]);

// // //   return (
// // //     <AnimatePresence>
// // //       {isOpen && (
// // //         <>
// // //           {/* Backdrop Overlay */}
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={onClose}
// // //             className="fixed inset-0 bg-black/20 z-[999] backdrop-blur-sm"
// // //           />

// // //           {/* Modal Container */}
// // //           <motion.div
// // //             initial={{ opacity: 0, scale: 0.95 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             exit={{ opacity: 0, scale: 0.95 }}
// // //             className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none"
// // //           >
// // //             <div className="relative w-full max-w-2xl h-[85vh] flex flex-col items-center justify-center pointer-events-auto">
              
// // //               {/* Close Button - Moved outside/top-right for better visibility on images */}
// // //               <button
// // //                 onClick={onClose}
// // //                 className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gray-300 transition-colors z-50 flex items-center gap-2"
// // //               >
// // //                 <span className="text-sm font-medium uppercase tracking-wider">Close</span>
// // //                 <span className="bg-white/20 hover:bg-white/40 rounded-full w-8 h-8 flex items-center justify-center text-xl">
// // //                   ×
// // //                 </span>
// // //               </button>

// // //               {/* Image Container */}
// // //               <div className="relative w-full h-full flex items-center justify-center rounded-lg overflow-hidden">
// // //                 <AnimatePresence mode='wait'>
// // //                   <motion.img
// // //                     key={currentImageIndex}
// // //                     // Handle both string paths and imported StaticImageData objects
// // //                     src={typeof images[currentImageIndex] === 'string' ? images[currentImageIndex] : (images[currentImageIndex] as any).src}
// // //                     alt="Special Offer"
// // //                     initial={{ opacity: 0, x: 20 }}
// // //                     animate={{ opacity: 1, x: 0 }}
// // //                     exit={{ opacity: 0, x: -20 }}
// // //                     transition={{ duration: 0.5, ease: "easeOut" }}
// // //                     // object-contain ensures the FULL image shows (1080x1350 or 900x1600) without cropping
// // //                     className="max-h-full max-w-full object-contain shadow-2xl rounded-md"
// // //                   />
// // //                 </AnimatePresence>
// // //               </div>

// // //               {/* Navigation Dots */}
// // //               {/* <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
// // //                 {images.map((_, index) => (
// // //                   <button
// // //                     key={index}
// // //                     onClick={() => setCurrentImageIndex(index)}
// // //                     className={`h-2 rounded-full transition-all duration-300 ${
// // //                       index === currentImageIndex 
// // //                         ? 'bg-white w-6' 
// // //                         : 'bg-white/40 w-2 hover:bg-white/60'
// // //                     }`}
// // //                   />
// // //                 ))}
// // //               </div> */}
// // //             </div>
// // //           </motion.div>
// // //         </>
// // //       )}
// // //     </AnimatePresence>
// // //   );
// // // };

// // // export default NewsletterPopup;
// // import { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import AD7 from "@/assets/a7.jpeg";
// // import AD8 from "@/assets/a8.jpeg";
// // import AD3 from "@/assets/ad3.jpeg";
// // import AD5 from "@/assets/pamp.png";

// // interface NewsletterPopupProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// // }

// // const images = [
// //   AD3,
// //   AD5,
// // ];

// // const NewsletterPopup = ({ isOpen, onClose }: NewsletterPopupProps) => {
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// //   useEffect(() => {
// //     if (!isOpen) return;
// //     const interval = setInterval(() => {
// //       setCurrentImageIndex((prev) => (prev + 1) % images.length);
// //     }, 10000);
// //     return () => clearInterval(interval);
// //   }, [isOpen]);

// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <>
// //           {/* Backdrop Overlay */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={onClose}
// //             className="fixed inset-0 bg-black/20 z-[999] backdrop-blur-sm"
// //           />

// //           {/* Modal Container */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             exit={{ opacity: 0, scale: 0.95 }}
// //             className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none"
// //           >
// //             <div className="relative w-full max-w-2xl h-[85vh] flex flex-col items-center justify-center pointer-events-auto">
              
// //               {/* Close Button */}
// //               <button
// //                 onClick={onClose}
// //                 className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gray-300 transition-colors z-50 flex items-center gap-2"
// //               >
// //                 <span className="text-sm font-medium uppercase tracking-wider">Close</span>
// //                 <span className="bg-white/20 hover:bg-white/40 rounded-full w-8 h-8 flex items-center justify-center text-xl">
// //                   ×
// //                 </span>
// //               </button>

// //               {/* Image Container */}
// //               <div className="relative w-full h-full flex items-center justify-center rounded-lg overflow-hidden group">
// //                 <AnimatePresence mode='wait'>
// //                   <motion.img
// //                     key={currentImageIndex}
// //                     src={typeof images[currentImageIndex] === 'string' ? images[currentImageIndex] : (images[currentImageIndex] as any).src}
// //                     alt="Special Offer"
// //                     initial={{ opacity: 0, x: 20 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     exit={{ opacity: 0, x: -20 }}
// //                     transition={{ duration: 0.5, ease: "easeOut" }}
// //                     className="max-h-full max-w-full object-contain shadow-2xl rounded-md"
// //                   />
// //                 </AnimatePresence>

// //                 {/* BOOK APPOINTMENT BUTTON - OVERLAY */}
// //                 <div className="absolute bottom-4 w-full flex justify-center z-30">
// //                   <a
// //                     href="/holiday"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="inline-flex items-center justify-center 
// //                       w-[198px] h-14 bg-white hover:bg-[#595959] 
// //                       text-[#262626] hover:text-white 
// //                       text-sm tracking-wider rounded transition-all duration-300 shadow-xl font-medium"
// //                   >
// //                     VIEW PACKAGES
// //                   </a>
// //                 </div>
// //               </div>

// //             </div>
// //           </motion.div>
// //         </>
// //       )}
// //     </AnimatePresence>
// //   );
// // };

// // export default NewsletterPopup;
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import AD7 from "@/assets/a7.jpeg";
// import AD8 from "@/assets/a8.jpeg";
// import AD3 from "@/assets/ad3.jpeg";
// import AD5 from "@/assets/pamp.png";
// const phoneNumber = "254116444433";

// interface NewsletterPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const images = [
//   AD3,
//   AD8,
// ];

// // New array for button texts
// const buttonTexts = [
//   "VIEW PACKAGES", // Corresponds to AD3
//   "INQUIRE",         // Corresponds to AD5
// ];

// // New array for button links (if they are different)
// const buttonLinks = [
//   "/holiday", // Corresponds to AD3
//   "/inquire", // You might want to change this to your actual inquire page link
// ];


// const NewsletterPopup = ({ isOpen, onClose }: NewsletterPopupProps) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     if (!isOpen) return;
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % images.length);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop Overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/20 z-[999] backdrop-blur-sm"
//           />

//           {/* Modal Container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none"
//           >
//             <div className="relative w-full max-w-2xl h-[85vh] flex flex-col items-center justify-center pointer-events-auto">
              
//               {/* Close Button */}
//               <button
//                 onClick={onClose}
//                 className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gray-300 transition-colors z-50 flex items-center gap-2"
//               >
//                 <span className="text-sm font-medium uppercase tracking-wider">Close</span>
//                 <span className="bg-white/20 hover:bg-white/40 rounded-full w-8 h-8 flex items-center justify-center text-xl">
//                   ×
//                 </span>
//               </button>

//               {/* Image Container */}
//               <div className="relative w-full h-full flex items-center justify-center rounded-lg overflow-hidden group">
//                 <AnimatePresence mode='wait'>
//                   <motion.img
//                     key={currentImageIndex}
//                     src={typeof images[currentImageIndex] === 'string' ? images[currentImageIndex] : (images[currentImageIndex] as any).src}
//                     alt="Special Offer"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ duration: 0.5, ease: "easeOut" }}
//                     className="max-h-full max-w-full object-contain shadow-2xl rounded-md"
//                   />
//                 </AnimatePresence>

//                 {/* BOOK APPOINTMENT BUTTON - OVERLAY */}
//                 <div className="absolute bottom-4 w-full flex justify-center z-30">
//                   <a
//                     // Use the buttonLinks array for the href
//                     href={buttonLinks[currentImageIndex]}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center 
//                       w-[198px] h-14 bg-white hover:bg-[#595959] 
//                       text-[#262626] hover:text-white 
//                       text-sm tracking-wider rounded transition-all duration-300 shadow-xl font-medium"
//                   >
//                     {/* Use the buttonTexts array for the text */}
//                     {buttonTexts[currentImageIndex]}
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default NewsletterPopup;
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AD7 from "@/assets/a7.jpeg";
import AD8 from "@/assets/a8.jpeg";
import AD3 from "@/assets/ad3.jpeg";
import AD5 from "@/assets/pamp.png";

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const images = [
  AD8,
  AD3,
];

const buttonTexts = [
  "INQUIRE PRIVATE EVENTS",
  "VIEW HOLIDAY PACKAGES",
  // "INQUIRE PRIVATE EVENTS",
];

const phoneNumber = "254116444433";
const message = "Hello, I would like to inquire about your services."; 
const encodedMessage = encodeURIComponent(message); 

const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

const buttonLinks = [
  whatsappLink, 
  "/holiday", 
  
];


const NewsletterPopup = ({ isOpen, onClose }: NewsletterPopupProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-[999] backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-2xl h-[85vh] flex flex-col items-center justify-center pointer-events-auto">
              
              <button
                onClick={onClose}
                className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gray-300 transition-colors z-50 flex items-center gap-2"
              >
                <span className="text-sm font-medium uppercase tracking-wider">Close</span>
                <span className="bg-white/20 hover:bg-white/40 rounded-full w-8 h-8 flex items-center justify-center text-xl">
                  ×
                </span>
              </button>

              <div className="relative w-full h-full flex items-center justify-center rounded-lg overflow-hidden group">
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={currentImageIndex}
                    src={typeof images[currentImageIndex] === 'string' ? images[currentImageIndex] : (images[currentImageIndex] as any).src}
                    alt="Special Offer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-h-full max-w-full object-contain shadow-2xl rounded-md"
                  />
                </AnimatePresence>

                <div className="absolute bottom-4 w-full flex justify-center z-30">
                  <a
                    href={buttonLinks[currentImageIndex]}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center 
                      w-[198px] h-14 bg-white hover:bg-[#595959] 
                      text-[#262626] hover:text-white 
                      text-sm tracking-wider rounded transition-all duration-300 shadow-xl font-medium"
                  >
                    {buttonTexts[currentImageIndex]}
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;