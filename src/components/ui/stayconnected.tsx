// // import React from "react";

// // const StayConnected: React.FC = () => {
// //   return (
// //     <section className="py-16 md:py-24 bg-[#FFFFFF]">
// //       <div className="container mx-auto px-6">
// //         {/* Header */}
// //         <div className="flex justify-between items-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-playfair font-light text-[#2a2a2a]">
// //             STAY CONNECTED
// //           </h2>
// //           <p className="text-lg font-playfair text-[#2a2a2a]">
// //             Follow Us On Our Socials
// //           </p>
// //         </div>

// //         {/* Instagram Grid */}
// //         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
// //           <img
// //             src="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
// //             alt="Spa interior"
// //             className="w-full h-64 object-cover"
// //           />
// //           <img
// //             src="https://plus.unsplash.com/premium_photo-1674841252227-02aff6975847?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
// //             alt="Spa reception"
// //             className="w-full h-64 object-cover"
// //           />
// //           <img
// //             src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=600&fit=crop"
// //             className="w-full h-64 object-cover"
// //             alt="Spa treatment room"
// //           />
// //           <img
// //             src="https://plus.unsplash.com/premium_photo-1674841253522-893a6a0077c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
// //             alt="Spa products"
// //             className="w-full h-64 object-cover"
// //           />
// //           <img
// //             src="https://plus.unsplash.com/premium_photo-1674841252680-652b820914ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
// //             alt="Spa couple"
// //             className="w-full h-64 object-cover"
// //           />
// //           <img
// //             src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=600&fit=crop"
// //             alt="Spa oils"
// //             className="w-full h-64 object-cover"
// //           />
// //         </div>

// //         {/* Visit Instagram Button */}
// //         <div className="flex justify-center">
// //           <a
// //             href="https://instagram.com"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="bg-[#262626] hover:bg-[#B0C2B0] text-white px-10 py-4 text-lg font-playfair tracking-wider"
// //           >
// //             Visit our Instagram
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default StayConnected;
// import React from "react";
// import img1 from "@/assets/ig.jpg";
// import img2 from "@/assets/fc.jpg";
// import img3 from "@/assets/tk.jpg";

// const StayConnected: React.FC = () => {
//   return (
//     <section className="py-16 md:py-24 bg-[#FFFFFF]">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-playfair font-light text-[#2a2a2a]">
//             STAY CONNECTED
//           </h2>
//           <p className="text-lg font-playfair text-[#2a2a2a]">
//             Follow Us On Our Socials
//           </p>
//         </div>

//         {/* Social Media Profiles Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
//           {/* Instagram */}
//           <a
//             href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group relative w-full h-[550px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
//             style={{
//               backgroundImage: `url(${img1})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0 px-4">
//               <h3 className="text-2xl font-bold text-pink-500 mb-3">
//                 Instagram
//               </h3>
//               <p className="text-base text-white leading-relaxed">
//                 Hair & Beauty redefined ✨ <br />
//                 Luxury | Beauty | Science | Longevity <br />
//                 Coming Soon to Nairobi.
//               </p>
//             </div>
//           </a>

//           {/* TikTok */}
//           <a
//             href="https://www.tiktok.com/@avya.beauty.ke"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group relative w-full h-[550px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
//             style={{
//               backgroundImage: `url(${img3})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0 px-4">
//               <h3 className="text-2xl font-bold text-white mb-3">TikTok</h3>
//               <p className="text-base text-white leading-relaxed">
//                 Hair & Beauty redefined ✨ <br />
//                 Luxury | Beauty | Science | Longevity <br />
//                 Coming Soon to Nairobi.
//               </p>
//             </div>
//           </a>

//           {/* Facebook */}
//           <a
//             href="https://www.facebook.com/share/1A9N3KMVZ3/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group relative w-full h-[550px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
//             style={{
//               backgroundImage: `url(${img2})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0 px-4">
//               <h3 className="text-2xl font-bold text-white mb-3">Facebook</h3>
//               <p className="text-base text-white leading-relaxed">
//                 Bringing out your best beauty! ✨ <br />
//                 Expert in bridal makeup, facials, hair & spa. <br />
//                 Book now for a glow-up! 💇‍♀️
//               </p>
//             </div>
//           </a>
//         </div>

//         {/* Follow Us Button */}
//         {/* <div className="flex justify-center">
//           <a
//             href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#262626] hover:bg-[#B0C2B0] text-white px-10 py-4 text-lg font-playfair tracking-wider rounded"
//           >
//             Follow Us
//           </a>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default StayConnected;
import React from "react";
import img1 from "@/assets/ig.jpg";
import img2 from "@/assets/fc.jpg";
import img3 from "@/assets/tk.jpg";

const StayConnected: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[40px] font-hatton font-light text-[#262626] mb-2">
            STAY CONNECTED
          </h2>
          <p className="text-[20px] text-[#595959] max-w-md font-montserrat">
            Follow Us On Our Socials
          </p>
        </div>

        {/* Social Media Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full h-[550px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0 px-4">
              <h3 className="text-2xl font-bold text-pink-500 mb-3">
                Instagram
              </h3>
              <p className="text-base text-white leading-relaxed">
                Hair & Beauty redefined ✨ <br />
                Luxury | Beauty | Science | Longevity <br />
                Coming Soon to Nairobi.
              </p>
            </div>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@avya.beauty.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full h-[550px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0 px-4">
              <h3 className="text-2xl font-bold text-white mb-3">TikTok</h3>
              <p className="text-base text-white leading-relaxed">
                Hair & Beauty redefined ✨ <br />
                Luxury | Beauty | Science | Longevity <br />
                Coming Soon to Nairobi.
              </p>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1A9N3KMVZ3/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full h-[550px] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0 px-4">
              <h3 className="text-2xl font-bold text-white mb-3">Facebook</h3>
              <p className="text-base text-white leading-relaxed">
                Bringing out your best beauty! ✨ <br />
                Expert in bridal makeup, facials, hair & spa. <br />
                Book now for a glow-up! 💇‍♀️
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
