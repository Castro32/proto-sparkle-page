// export default function SpaAboutSection() {
//   return (
//     <div className="min-h-screen bg-[#f5f1ed] py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-start mb-12">
//           <div className="text-[#8b7355] tracking-[0.2em] text-sm font-light">
//             ABOUT US
//             <div className="w-24 h-[1px] bg-[#8b7355] mt-2"></div>
//           </div>
//           <h1 className="text-right text-[#8b7355] text-3xl md:text-4xl lg:text-5xl font-light tracking-wide max-w-3xl leading-tight">
//             CUSTOMIZED TREATMENTS FOR YOUR<br />RELAXATION AND RADIANCE.
//           </h1>
//         </div>

//         {/* Image Grid */}
//         <div className="grid grid-cols-12 gap-6 mb-16">
//           {/* Left Image - Spa Products (smaller, top left) */}
//           <div className="col-span-12 md:col-span-5 lg:col-span-3 relative overflow-hidden rounded-3xl shadow-lg">
//             <img
//               src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
//               alt="Spa products and towels"
//               className="w-full h-[400px] md:h-[500px] object-cover"
//             />
//           </div>

//           {/* Center Image - Bathroom Sink (larger, center) */}
//           <div className="col-span-12 md:col-span-7 lg:col-span-5 relative overflow-hidden rounded-3xl shadow-lg">
//             <img
//               src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&q=80"
//               alt="Modern spa bathroom"
//               className="w-full h-[400px] md:h-[500px] object-cover"
//             />
//           </div>

//           {/* Right Image - Sauna (tall, right side) */}
//           <div className="col-span-12 lg:col-span-4 relative overflow-hidden rounded-3xl shadow-lg">
//             <img
//               src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
//               alt="Wooden sauna interior"
//               className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
//             />
//           </div>
//         </div>

//         {/* Bottom Section with Avatars */}
//         <div className="flex items-center gap-8">
//           {/* Avatar Group */}
//           <div className="flex -space-x-3">
//             <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 border-4 border-white shadow-lg flex items-center justify-center">
//               <span className="text-2xl">👧🏻</span>
//             </div>
//             <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 border-4 border-white shadow-lg flex items-center justify-center">
//               <span className="text-2xl">👩🏻</span>
//             </div>
//             <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-200 to-amber-300 border-4 border-white shadow-lg flex items-center justify-center">
//               <span className="text-2xl">👱🏻‍♀️</span>
//             </div>
//             <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-4 border-white shadow-lg flex items-center justify-center">
//               <span className="text-2xl">👨🏽</span>
//             </div>
//           </div>

//           {/* Text */}
//           <div className="text-[#8b7355] text-lg md:text-xl font-light tracking-wide">
//             TRUSTED BY HUNDREDS FOR PERSONALIZED, AND<br />
//             PROFESSIONAL CARE.
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
//           <div className="flex flex-col items-center gap-2">
//             <div className="w-[1px] h-16 bg-[#8b7355]"></div>
//             <svg
//               className="w-6 h-6 text-[#8b7355]"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function SpaAboutSection() {
  return (
    <section className="min-h-screen bg-[#E2DBDF] flex items-center justify-center py-16 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');
      `}</style>
      
      <div className="w-full max-w-[1408px] h-auto lg:h-[917px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-16 gap-8">
          <div className="text-[#595959] tracking-[0.2em] text-sm font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            ABOUT US
            <div className="w-24 h-[1px] bg-[#595959] mt-2"></div>
          </div>
          <h1 className="text-left lg:text-right text-[#262626] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wide lg:max-w-4xl leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Nairobi’s Premier Longevity Beauty Spa
          </h1>
        </div>

        {/* Mobile Image Grid */}
        <div className="lg:hidden space-y-6 mb-12">
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
              alt="Spa essentials"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&q=80"
              alt="Spa bathroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg ">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
              alt="Spa sauna"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Image Grid - Overlapping Layout */}
        <div className="hidden lg:block relative mb-12 lg:mb-16 h-[500px] xl:h-[580px]">
          {/* Left Image - Spa Products (top left) */}
          <div className="absolute left-0 top-[-40px] xl:top-[-150px] w-[280px] xl:w-[320px] h-[380px] xl:h-[430px] rounded-3xl overflow-hidden shadow-xl z-10">
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
              alt="Spa products and towels"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Image - Bathroom Sink (overlapping, starts at center of first) */}
          <div className="absolute left-[24%] xl:left-[26%] top-[150px] xl:top-[75px] w-[480px] xl:w-[608px] h-[320px] xl:h-[380px] rounded-3xl overflow-hidden shadow-2xl z-20">
            <img
              src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&q=80"
              alt="Modern spa bathroom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image - Sauna (starts at center of middle image) */}
          <div className="absolute right-8 top-[240px] xl:top-[145px] w-[280px] xl:w-[320px] h-[380px] xl:h-[430px] rounded-3xl overflow-hidden shadow-xl z-10">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
              alt="Wooden sauna interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Scroll Indicator - positioned to the right of third image */}
          <div className="absolute right-[-60px] top-[310px] xl:top-[50px] hidden xl:block">
            <div className="flex flex-col items-center gap-2">
              <div className="w-[1px] h-3 bg-[#595959]"></div>
              <svg
                className="w-6 h-6 text-[#595959]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Section with Avatars */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:mt-[-80px] xl:mt-[-60px]">
          {/* Avatar Group */}
          <div className="flex -space-x-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#C1B5C6] to-[#B0C2B0] border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-xl sm:text-2xl">👧🏻</span>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#B0C2B0] to-[#C1B5C6] border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-xl sm:text-2xl">👩🏻</span>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#C1B5C6] to-[#B0C2B0] border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-xl sm:text-2xl">👱🏻‍♀️</span>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#B0C2B0] to-[#C1B5C6] border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-xl sm:text-2xl">👨🏽</span>
            </div>
          </div>

          {/* Text */}
          <div className="text-[#262626] text-base sm:text-lg md:text-xl font-light tracking-wide leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            TRUSTED BY HUNDREDS FOR PERSONALIZED, AND<br className="hidden sm:block" />
            PROFESSIONAL CARE.
          </div>
        </div>
      </div>
    </section>
  );
}