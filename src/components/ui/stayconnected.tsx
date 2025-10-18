// // // // // import React from "react";

// // // // // const StayConnected: React.FC = () => {
// // // // //   return (
// // // // //     <section className="py-16 md:py-24 bg-[#FFFFFF]">
// // // // //       <div className="container mx-auto px-6">
// // // // //         {/* Header */}
// // // // //         <div className="flex justify-between items-center mb-12">
// // // // //           <h2 className="text-3xl md:text-4xl font-playfair font-light text-[#2a2a2a]">
// // // // //             STAY CONNECTED
// // // // //           </h2>
// // // // //           <p className="text-lg font-playfair text-[#2a2a2a]">
// // // // //             Follow Us On Our Socials
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Instagram Grid */}
// // // // //         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
// // // // //           <img
// // // // //             src="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
// // // // //             alt="Spa interior"
// // // // //             className="w-full h-64 object-cover"
// // // // //           />
// // // // //           <img
// // // // //             src="https://plus.unsplash.com/premium_photo-1674841252227-02aff6975847?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
// // // // //             alt="Spa reception"
// // // // //             className="w-full h-64 object-cover"
// // // // //           />
// // // // //           <img
// // // // //             src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=600&fit=crop"
// // // // //             className="w-full h-64 object-cover"
// // // // //             alt="Spa treatment room"
// // // // //           />
// // // // //           <img
// // // // //             src="https://plus.unsplash.com/premium_photo-1674841253522-893a6a0077c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
// // // // //             alt="Spa products"
// // // // //             className="w-full h-64 object-cover"
// // // // //           />
// // // // //           <img
// // // // //             src="https://plus.unsplash.com/premium_photo-1674841252680-652b820914ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
// // // // //             alt="Spa couple"
// // // // //             className="w-full h-64 object-cover"
// // // // //           />
// // // // //           <img
// // // // //             src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=600&fit=crop"
// // // // //             alt="Spa oils"
// // // // //             className="w-full h-64 object-cover"
// // // // //           />
// // // // //         </div>

// // // // //         {/* Visit Instagram Button */}
// // // // //         <div className="flex justify-center">
// // // // //           <a
// // // // //             href="https://instagram.com"
// // // // //             target="_blank"
// // // // //             rel="noopener noreferrer"
// // // // //             className="bg-[#262626] hover:bg-[#B0C2B0] text-white px-10 py-4 text-lg font-playfair tracking-wider"
// // // // //           >
// // // // //             Visit our Instagram
// // // // //           </a>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default StayConnected;
// // // // import React from "react";
// // // // import img1 from "@/assets/ig.jpg";
// // // // import img2 from "@/assets/fc.jpg";
// // // // import img3 from "@/assets/tk.jpg";

// // // // const StayConnected: React.FC = () => {
// // // //   return (
// // // //     <section className="py-16 md:py-24 bg-[#FFFFFF]">
// // // //       <div className="container mx-auto px-6">
// // // //         {/* Header */}
// // // //         <div className="flex justify-between items-center mb-12">
// // // //           <h2 className="text-3xl md:text-4xl font-playfair font-light text-[#2a2a2a]">
// // // //             STAY CONNECTED
// // // //           </h2>
// // // //           <p className="text-lg font-playfair text-[#2a2a2a]">
// // // //             Follow Us On Our Socials
// // // //           </p>
// // // //         </div>

// // // //         {/* Social Media Profiles Grid */}
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
// // // //           {/* Instagram */}
// // // //           <a
// // // //             href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="group relative w-full h-[550px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
// // // //             style={{
// // // //               backgroundImage: `url(${img1})`,
// // // //               backgroundSize: "cover",
// // // //               backgroundPosition: "center",
// // // //             }}
// // // //           >
// // // //             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0 px-4">
// // // //               <h3 className="text-2xl font-bold text-pink-500 mb-3">
// // // //                 Instagram
// // // //               </h3>
// // // //               <p className="text-base text-white leading-relaxed">
// // // //                 Hair & Beauty redefined ✨ <br />
// // // //                 Luxury | Beauty | Science | Longevity <br />
// // // //                 Coming Soon to Nairobi.
// // // //               </p>
// // // //             </div>
// // // //           </a>

// // // //           {/* TikTok */}
// // // //           <a
// // // //             href="https://www.tiktok.com/@avya.beauty.ke"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="group relative w-full h-[550px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
// // // //             style={{
// // // //               backgroundImage: `url(${img3})`,
// // // //               backgroundSize: "cover",
// // // //               backgroundPosition: "center",
// // // //             }}
// // // //           >
// // // //             <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0 px-4">
// // // //               <h3 className="text-2xl font-bold text-white mb-3">TikTok</h3>
// // // //               <p className="text-base text-white leading-relaxed">
// // // //                 Hair & Beauty redefined ✨ <br />
// // // //                 Luxury | Beauty | Science | Longevity <br />
// // // //                 Coming Soon to Nairobi.
// // // //               </p>
// // // //             </div>
// // // //           </a>

// // // //           {/* Facebook */}
// // // //           <a
// // // //             href="https://www.facebook.com/share/1A9N3KMVZ3/"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="group relative w-full h-[550px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
// // // //             style={{
// // // //               backgroundImage: `url(${img2})`,
// // // //               backgroundSize: "cover",
// // // //               backgroundPosition: "center",
// // // //             }}
// // // //           >
// // // //             <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0 px-4">
// // // //               <h3 className="text-2xl font-bold text-white mb-3">Facebook</h3>
// // // //               <p className="text-base text-white leading-relaxed">
// // // //                 Bringing out your best beauty! ✨ <br />
// // // //                 Expert in bridal makeup, facials, hair & spa. <br />
// // // //                 Book now for a glow-up! 💇‍♀️
// // // //               </p>
// // // //             </div>
// // // //           </a>
// // // //         </div>

// // // //         {/* Follow Us Button */}
// // // //         {/* <div className="flex justify-center">
// // // //           <a
// // // //             href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="bg-[#262626] hover:bg-[#B0C2B0] text-white px-10 py-4 text-lg font-playfair tracking-wider rounded"
// // // //           >
// // // //             Follow Us
// // // //           </a>
// // // //         </div> */}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default StayConnected;
// // // import React from "react";
// // // import img1 from "@/assets/ig.jpg";
// // // import img2 from "@/assets/fc.jpg";
// // // import img3 from "@/assets/tk.jpg";

// // // const StayConnected: React.FC = () => {
// // //   return (
// // //     <section className="py-16 md:py-24 bg-[#FFFFFF]">
// // //       <div className="container mx-auto px-6">
// // //         {/* Header */}
// // //         <div className="mb-12">
// // //           <h2 className="text-[40px] font-hatton font-light text-[#262626] mb-2">
// // //             STAY CONNECTED
// // //           </h2>
// // //           <p className="text-[20px] text-[#595959] max-w-md font-hatton">
// // //             Follow Us On Our Socials
// // //           </p>
// // //         </div>

// // //         {/* Social Media Profiles Grid */}
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
// // //           {/* Instagram */}
// // //           <a
// // //             href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="group relative w-full h-[550px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
// // //             style={{
// // //               backgroundImage: `url(${img1})`,
// // //               backgroundSize: "cover",
// // //               backgroundPosition: "center",
// // //             }}
// // //           >
// // //             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0 px-4">
// // //               <h3 className="text-2xl font-bold text-white mb-3">
// // //                 Instagram
// // //               </h3>
// // //               <p className="text-base text-white leading-relaxed">
// // //                 Hair & Beauty redefined ✨ <br />
// // //                 Luxury | Beauty | Science | Longevity <br />
// // //                 Coming Soon to Nairobi.
// // //               </p>
// // //             </div>
// // //           </a>

// // //           {/* TikTok */}
// // //           <a
// // //             href="https://www.tiktok.com/@avya.beauty.ke"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="group relative w-full h-[550px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
// // //             style={{
// // //               backgroundImage: `url(${img3})`,
// // //               backgroundSize: "cover",
// // //               backgroundPosition: "center",
// // //             }}
// // //           >
// // //             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0 px-4">
// // //               <h3 className="text-2xl font-bold text-white mb-3">TikTok</h3>
// // //               <p className="text-base text-white leading-relaxed">
// // //                 Hair & Beauty redefined ✨ <br />
// // //                 Luxury | Beauty | Science | Longevity <br />
// // //                 Coming Soon to Nairobi.
// // //               </p>
// // //             </div>
// // //           </a>

// // //           {/* Facebook */}
// // //           <a
// // //             href="https://www.facebook.com/share/1A9N3KMVZ3/"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="group relative w-full h-[550px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
// // //             style={{
// // //               backgroundImage: `url(${img2})`,
// // //               backgroundSize: "cover",
// // //               backgroundPosition: "center",
// // //             }}
// // //           >
// // //             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0 px-4">
// // //               <h3 className="text-2xl font-bold text-white mb-3">Facebook</h3>
// // //               <p className="text-base text-white leading-relaxed">
// // //                 Bringing out your best beauty! ✨ <br />
// // //                 Expert in bridal makeup, facials, hair & spa. <br />
// // //                 Book now for a glow-up! 💇‍♀️
// // //               </p>
// // //             </div>
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default StayConnected;
// // import React from "react";
// // import img1 from "@/assets/3.png";
// // import img2 from "@/assets/4.png";
// // import img3 from "@/assets/ig.jpg";
// // import img4 from "@/assets/tk.jpg";
// // import img5 from "@/assets/h7.png";
// // import img6 from "@/assets/h3.png";

// // const StayConnected: React.FC = () => {
// //   return (
// //     <section className="py-16 md:py-24 bg-[#FFFFFF]">
// //       <div className="container mx-auto px-6">
// //         {/* Header */}
// //         <div className="mb-12 flex items-center">
// //           <h2 className="text-[40px] font-hatton font-light text-[#262626] mr-4">
// //             *STAY CONNECTED
// //           </h2>
// //           <p className="text-[20px] text-[#595959] font-hatton">
// //             Follow Us On Instagram
// //           </p>
// //         </div>

// //         {/* Image Grid */}
// //         <div className="grid grid-cols-3 gap-4 w-[1320px] h-[650px] mx-auto">
// //           {/* Row 1 */}
// //           <div className="w-[319px] h-[318px]">
// //             <img
// //               src={img1}
// //               alt="Image 1"
// //               className="w-full h-full object-cover rounded-none"
// //             />
// //           </div>
// //           <div className="w-[319px] h-[318px]">
// //             <img
// //               src={img2}
// //               alt="Image 2"
// //               className="w-full h-full object-cover rounded-none"
// //             />
// //           </div>
// //           <div className="w-[319px] h-[318px]">
// //             <img
// //               src={img3}
// //               alt="Image 3"
// //               className="w-full h-full object-cover rounded-none"
// //             />
// //           </div>

// //           {/* Row 2 */}
// //           <div className="w-[319px] h-[318px]">
// //             <img
// //               src={img4}
// //               alt="Image 4"
// //               className="w-full h-full object-cover rounded-none"
// //             />
// //           </div>
// //           <div className="w-[319px] h-[318px]">
// //             <img
// //               src={img5}
// //               alt="Image 5"
// //               className="w-full h-full object-cover rounded-none"
// //             />
// //           </div>
// //           <div className="w-[319px] h-[318px]">
// //             <img
// //               src={img6}
// //               alt="Image 6"
// //               className="w-full h-full object-cover rounded-none"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default StayConnected;
// import React from "react";
// import img1 from "@/assets/h5.png";
// import img2 from "@/assets/hero-glam.jpg";
// import img3 from "@/assets/ig.jpg";
// import img4 from "@/assets/tk.jpg";
// import img5 from "@/assets/h7.png";
// import img6 from "@/assets/h3.png";
// import img7 from "@/assets/hero-beauty.jpg"; 
// import img8 from "@/assets/hero-hair-treatments.jpg"; 

// const StayConnected: React.FC = () => {
//   return (
//     <section className="py-16 md:py-24 bg-[#FFFFFF]">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="mb-12 flex flex-col items-start">
//           <h2 className="text-[40px] font-hatton font-light text-[#262626]">
//             STAY CONNECTED
//           </h2>
//           <div className="flex space-x-4 mt-2 ml-10"> 
//               <a
//                 href="https://facebook.com/avya"
//                 className="text-[#262626] hover:text-[#B0C2B0] transition-colors"
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
//                 href="https://tiktok.com/@avya"
//                 className="text-[#262626] hover:text-[#B0C2B0] transition-colors"
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
//                 href="https://instagram.com/avya"
//                 className="text-[#262626] hover:text-[#B0C2B0] transition-colors"
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
//         </div>

//         {/* Image Grid */}
//         <div className="grid grid-cols-4 gap-[5px] w-[1301px] h-[650px] mx-auto">
//           {/* Row 1 */}
//           <div className="w-[319px] h-[317px]">
//             <img
//               src={img1}
//               alt="Image 1"
//               className="w-full h-full object-cover rounded-none"
//             />
//           </div>
//           <div className="w-[319px] h-[317px]">
//             <img
//               src={img2}
//               alt="Image 2"
//               className="w-full h-full object-cover rounded-none"
//             />
//           </div>
//           <div className="w-[319px] h-[317px]">
//             <img
//               src={img3}
//               alt="Image 3"
//               className="w-full h-full object-cover rounded-none"
//             />
//           </div>
//           <div className="w-[319px] h-[317px]">
//             <img
//               src={img4}
//               alt="Image 4"
//               className="w-full h-full object-cover rounded-none"
//             />
//           </div>

//           {/* Row 2 */}
//           <div className="w-[319px] h-[317px]">
//             <img
//               src={img5}
//               alt="Image 5"
//               className="w-full h-full object-cover rounded-none"
//             />
//           </div>
//           <div className="w-[319px] h-[317px]">
//             <img
//               src={img6}
//               alt="Image 6"
//               className="w-full h-full object-cover rounded-none"
//             />
//           </div>
//           <div className="w-[319px] h-[317px]">
//             <img
//               src={img7}
//               alt="Image 7"
//               className="w-full h-full object-cover rounded-none"
//             />
//           </div>
//           <div className="w-[319px] h-[317px]">
//             <img
//               src={img8}
//               alt="Image 8"
//               className="w-full h-full object-cover rounded-none"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StayConnected;
import React from "react";
import img1 from "@/assets/h5.png";
import img2 from "@/assets/hero-glam.jpg";
import img3 from "@/assets/ig.jpg";
import img4 from "@/assets/tk.jpg";
import img5 from "@/assets/h7.png";
import img6 from "@/assets/h3.png";
import img7 from "@/assets/hero-beauty.jpg";
import img8 from "@/assets/hero-hair-treatments.jpg";

const StayConnected: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-12 flex flex-col items-start">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-hatton font-light text-[#262626]">
            STAY CONNECTED
          </h2>
          <div className="flex space-x-4 mt-2 sm:ml-6 md:ml-10">
            <a
              href="https://facebook.com/avya"
              className="text-[#262626] hover:text-[#B0C2B0] transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
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
              href="https://tiktok.com/@avya"
              className="text-[#262626] hover:text-[#B0C2B0] transition-colors"
              aria-label="TikTok"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/avya"
              className="text-[#262626] hover:text-[#B0C2B0] transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
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

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-[5px] max-w-[1301px] mx-auto">
          <div className="aspect-square">
            <img
              src={img1}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src={img2}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src={img3}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src={img4}
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="aspect-square">
            <img
              src={img5}
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src={img6}
              alt="Image 6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src={img7}
              alt="Image 7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src={img8}
              alt="Image 8"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;