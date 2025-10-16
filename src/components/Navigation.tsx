// // import { Menu, X, ChevronDown } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { useState } from "react";
// // import Logo from "../assets/3.png";

// // const Navigation = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isServicesOpen, setIsServicesOpen] = useState(false);

// //   return (
// //     <nav className="fixed top-8 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm rounded-full mx-4 shadow-sm">
// //       <div className="container mx-auto px-6 py-2">
// //         <div className="flex items-center justify-between">

// //           <div className="flex-1 hidden md:block">
// //             <p className="text-sm text-muted-foreground font-playfair">
// //               1st Floor, Mwanzi Market, Westlands
// //             </p>
// //           </div>


// //           <div className="flex-1 flex justify-center">
// //             <a href="/">
// //               <img
// //                 src={Logo}
// //                 alt="AVYA Logo"
// //                 className="h-16 object-contain"
// //               />
// //             </a>
// //           </div>

// //           <div className="flex-1 flex justify-end items-center gap-8">
// //             <div className="hidden md:flex items-center gap-8">
// //               <a
// //                 href="/"
// //                 className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
// //               >
// //                 Home
// //               </a>
// //               <a
// //                 href="/about"
// //                 className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
// //               >
// //                 About us
// //               </a>
// //               <div className="relative group">
// //                 <button
// //                   className="text-sm font-playfair text-foreground hover:text-primary transition-colors flex items-center gap-1"
// //                 >
// //                   Services
// //                   <ChevronDown className="h-3 w-3" />
// //                 </button>
// //                 <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
// //                   <a
// //                     href="#trichology"
// //                     className="block px-4 py-3 text-sm font-playfair text-foreground hover:bg-accent hover:text-primary transition-colors"
// //                   >
// //                     Trichology & Scalp Health
// //                   </a>
// //                   <a
// //                     href="#treatments"
// //                     className="block px-4 py-3 text-sm font-playfair text-foreground hover:bg-accent hover:text-primary transition-colors"
// //                   >
// //                     Hair Treatments & Restorative Rituals
// //                   </a>
// //                   <a
// //                     href="#glam"
// //                     className="block px-4 py-3 text-sm font-playfair text-foreground hover:bg-accent hover:text-primary transition-colors"
// //                   >
// //                     Premium Glam Services
// //                   </a>
// //                 </div>
// //               </div>
// //               <a
// //                 href="/contact"
// //                 className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
// //               >
// //                 Contact
// //               </a>
// //             </div>

// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               className="md:hidden"
// //               onClick={() => setIsOpen(!isOpen)}
// //             >
// //               {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
// //             </Button>
// //           </div>
// //         </div>


// //         {isOpen && (
// //           <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 bg-white/90 rounded-b-lg shadow-lg">
// //             <div className="flex flex-col gap-4">
// //               <a
// //                 href="/"
// //                 className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
// //                 onClick={() => setIsOpen(false)}
// //               >
// //                 Home
// //               </a>
// //               <a
// //                 href="/about"
// //                 className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
// //                 onClick={() => setIsOpen(false)}
// //               >
// //                 About us
// //               </a>
// //               <div>
// //                 <button
// //                   className="text-sm font-playfair text-foreground hover:text-primary transition-colors flex items-center gap-1 w-full text-left"
// //                   onClick={() => setIsServicesOpen(!isServicesOpen)}
// //                 >
// //                   Services
// //                   <ChevronDown className={`h-3 w-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
// //                 </button>
// //                 {isServicesOpen && (
// //                   <div className="ml-4 mt-2 flex flex-col gap-2">
// //                     <a
// //                       href="#trichology"
// //                       className="text-sm font-playfair text-muted-foreground hover:text-primary transition-colors"
// //                       onClick={() => setIsOpen(false)}
// //                     >
// //                       Trichology & Scalp Health
// //                     </a>
// //                     <a
// //                       href="#treatments"
// //                       className="text-sm font-playfair text-muted-foreground hover:text-primary transition-colors"
// //                       onClick={() => setIsOpen(false)}
// //                     >
// //                       Hair Treatments & Restorative Rituals
// //                     </a>
// //                     <a
// //                       href="#glam"
// //                       className="text-sm font-playfair text-muted-foreground hover:text-primary transition-colors"
// //                       onClick={() => setIsOpen(false)}
// //                     >
// //                       Premium Glam Services
// //                     </a>
// //                   </div>
// //                 )}
// //               </div>
// //               <a
// //                 href="/contact"
// //                 className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
// //                 onClick={() => setIsOpen(false)}
// //               >
// //                 Contact
// //               </a>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navigation;
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import Logo from "../assets/3.png";

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   return (
//     <>
//       <nav className="fixed top-4 left-0 right-0 z-50 mx-2 sm:mx-4">
//         <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
//           <div className="container mx-auto px-3 sm:px-4 py-2">
//             <div className="flex items-center justify-between">
//               {/* Location (hidden on mobile) */}
//               <div className="hidden md:flex flex-1">
//                 <p className="text-xl sm:text-sm text-muted-foreground font-hatton font-light truncate">
//                   <span className="text-xl">1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
//                 </p>
//               </div>

//               {/* Logo */}
//               <div className="flex-shrink-0 md:flex-1 flex justify-start md:justify-center">
//                 <a href="/" className="flex items-center">
//                   <img
//                     src={Logo}
//                     alt="AVYA Logo"
//                     className="h-16 sm:h-20 md:h-24 object-contain"
//                   />
//                 </a>
//               </div>


//               {/* Navigation Links (desktop) */}
//               <div className="hidden md:flex flex-1 justify-end items-center gap-4 lg:gap-8">
//                 <a
//                   href="/"
//                   className="text-xl sm:text-sm font-hatton font-light text-foreground hover:text-primary transition-colors"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/about"
//                   className="text-xl sm:text-sm font-hatton font-light text-foreground hover:text-primary transition-colors"
//                 >
//                   About us
//                 </a>
//                 <div className="relative group">
//                   <button
//                     className="text-xl sm:text-sm font-hatton font-light text-foreground hover:text-primary transition-colors flex items-center gap-1"
//                   >
//                     Services
//                     <ChevronDown className="h-3 w-3" />
//                   </button>
//                   <div className="absolute top-full left-0 mt-2 w-48 sm:w-64 bg-white border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                     <a
//                       href="#trichology"
//                       className="block px-4 py-2 text-xs sm:text-sm font-hatton font-light text-foreground hover:bg-accent hover:text-primary transition-colors"
//                     >
//                       Trichology & Scalp Health
//                     </a>
//                     <a
//                       href="#treatments"
//                       className="block px-4 py-2 text-xs sm:text-sm font-hatton font-light text-foreground hover:bg-accent hover:text-primary transition-colors"
//                     >
//                       Hair Treatments & Restorative Rituals
//                     </a>
//                     <a
//                       href="#glam"
//                       className="block px-4 py-2 text-xs sm:text-sm font-hatton font-light text-foreground hover:bg-accent hover:text-primary transition-colors"
//                     >
//                       Premium Glam Services
//                     </a>
//                   </div>
//                 </div>
//                 <a
//                   href="/contact"
//                   className="text-xs sm:text-sm font-hatton font-light text-foreground hover:text-primary transition-colors"
//                 >
//                   Contact
//                 </a>
//                 <a
//                   href="/team"
//                   className="text-xs sm:text-sm font-hatton font-light text-foreground hover:text-primary transition-colors"
//                 >
//                   Our Team
//                 </a>
//               </div>

//               {/* Mobile Menu Button */}
//               <div className="flex md:hidden ml-auto">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="h-9 w-9"
//                   onClick={() => setIsOpen(!isOpen)}
//                 >
//                   {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="md:hidden mt-2 bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden animate-in slide-in-from-top-5 duration-200">
//             <div className="px-6 py-4">
//               <div className="flex flex-col gap-1">
//                 <a
//                   href="/"
//                   className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors py-3 border-b border-gray-100"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/about"
//                   className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors py-3 border-b border-gray-100"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   About us
//                 </a>
//                 <div className="border-b border-gray-100">
//                   <button
//                     className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors flex items-center justify-between w-full text-left py-3"
//                     onClick={() => setIsServicesOpen(!isServicesOpen)}
//                   >
//                     Services
//                     <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
//                   </button>
//                   {isServicesOpen && (
//                     <div className="pb-3 pl-4 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
//                       <a
//                         href="#trichology"
//                         className="text-sm font-hatton font-light text-muted-foreground hover:text-primary transition-colors py-2"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Trichology & Scalp Health
//                       </a>
//                       <a
//                         href="#treatments"
//                         className="text-sm font-hatton font-light text-muted-foreground hover:text-primary transition-colors py-2"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Hair Treatments & Restorative Rituals
//                       </a>
//                       <a
//                         href="#glam"
//                         className="text-sm font-hatton font-light text-muted-foreground hover:text-primary transition-colors py-2"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Premium Glam Services
//                       </a>
//                     </div>
//                   )}
//                 </div>
//                 <a
//                   href="/contact"
//                   className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors py-3"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Contact
//                 </a>

//                 <a
//                   href="/team"
//                   className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors py-3"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Our Team
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navigation;
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Logo from "../assets/3.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 mx-2 sm:mx-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-sm w-full">
          <div className="container mx-auto px-3 sm:px-4 py-2">
            <div className="flex items-center justify-between">
              {/* Location (hidden on mobile) */}
              <div className="hidden md:flex flex-1 min-w-[150px]">
                <p className="text-lg text-muted-foreground font-hatton font-light truncate">
                  <span className="text-xl">1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
                </p>
              </div>
              {/* Logo */}
              <div className="flex-shrink-0 flex justify-center">
                <a href="/" className="flex items-center">
                  <img
                    src={Logo}
                    alt="AVYA Logo"
                    className="h-12 sm:h-16 md:h-16 object-contain"
                  />
                </a>
              </div>
              {/* Navigation Links (desktop) */}
              <div className="hidden md:flex flex-1 justify-end items-center gap-1 lg:gap-2">
                <a
                  href="/"
                  className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors px-1"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors px-1"
                >
                  About us
                </a>
                <div className="relative group px-1">
                  <button
                    className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Services
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <a
                      href="#trichology"
                      className="block px-4 py-2 text-sm font-hatton font-light text-foreground hover:bg-accent hover:text-primary transition-colors"
                    >
                      Trichology & Scalp Health
                    </a>
                    <a
                      href="#treatments"
                      className="block px-4 py-2 text-sm font-hatton font-light text-foreground hover:bg-accent hover:text-primary transition-colors"
                    >
                      Hair Treatments
                    </a>
                    <a
                      href="#glam"
                      className="block px-4 py-2 text-sm font-hatton font-light text-foreground hover:bg-accent hover:text-primary transition-colors"
                    >
                      Premium Glam Services
                    </a>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors px-1"
                >
                  Contact
                </a>
                <a
                  href="/team"
                  className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors px-1"
                >
                  Our Team
                </a>
              </div>
              {/* Mobile Menu Button */}
              <div className="flex md:hidden ml-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden animate-in slide-in-from-top-5 duration-200">
            <div className="px-6 py-4">
              <div className="flex flex-col gap-1">
                <a
                  href="/"
                  className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors py-3 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors py-3 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  About us
                </a>
                <div className="border-b border-gray-100">
                  <button
                    className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors flex items-center justify-between w-full text-left py-3"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="pb-3 pl-4 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
                      <a
                        href="#trichology"
                        className="text-sm font-hatton font-light text-muted-foreground hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Trichology & Scalp Health
                      </a>
                      <a
                        href="#treatments"
                        className="text-sm font-hatton font-light text-muted-foreground hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Hair Treatments & Restorative Rituals
                      </a>
                      <a
                        href="#glam"
                        className="text-sm font-hatton font-light text-muted-foreground hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Premium Glam Services
                      </a>
                    </div>
                  )}
                </div>
                <a
                  href="/contact"
                  className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="/team"
                  className="text-base font-hatton font-light text-foreground hover:text-primary transition-colors py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Our Team
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
