// // // // // // // import { Menu, X, ChevronDown } from "lucide-react";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { useState } from "react";
// // // // // // // import Logo from "../assets/5.png";

// // // // // // // const Navigation = () => {
// // // // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // // // //   const [isServicesOpen, setIsServicesOpen] = useState(false);

// // // // // // //   return (
// // // // // // //     <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[2000px] px-4 sm:px-6">
// // // // // // //       {/* Main Navigation Bar */}
// // // // // // //       <div className="bg-transparent  rounded-3xl shadow-sm w-full h-[90px] sm:h-auto">
// // // // // // //         <div className="container mx-auto px-3 sm:px-4 py-4 h-full">
// // // // // // //           <div className="flex items-center justify-between h-full">
// // // // // // //             {/* Desktop Navigation Links */}
// // // // // // //             <div className="hidden md:flex items-center gap-[20px] px-[10px]">
// // // // // // //               <a
// // // // // // //                 href="/"
// // // // // // //                 className="text-base md:text-lg lg:text-xl font-hatton font-light text-white hover:text-primary transition-colors"
// // // // // // //               >
// // // // // // //                 Home
// // // // // // //               </a>
// // // // // // //               <a
// // // // // // //                 href="/about"
// // // // // // //                 className="text-base md:text-lg lg:text-xl font-hatton font-light text-white hover:text-primary transition-colors"
// // // // // // //               >
// // // // // // //                 About us
// // // // // // //               </a>
// // // // // // //               <div className="relative group">
// // // // // // //                 <button
// // // // // // //                   className="text-base md:text-lg lg:text-xl font-hatton font-light text-white hover:text-primary transition-colors flex items-center gap-[10px]"
// // // // // // //                 >
// // // // // // //                   Services
// // // // // // //                   <ChevronDown className="h-3 w-3" />
// // // // // // //                 </button>
// // // // // // //                 <div className="absolute top-full left-0 mt-2 w-48 bg-transparent border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
// // // // // // //                   <a
// // // // // // //                     href="/trichology"
// // // // // // //                     className="block px-4 py-2 text-base font-hatton font-light text-white hover:bg-accent hover:text-primary transition-colors"
// // // // // // //                   >
// // // // // // //                     Trichology & Scalp Health
// // // // // // //                   </a>
// // // // // // //                   <a
// // // // // // //                     href="/hair-treatments"
// // // // // // //                     className="block px-4 py-2 text-base font-hatton font-light text-white hover:bg-accent hover:text-primary transition-colors"
// // // // // // //                   >
// // // // // // //                     Hair Treatments
// // // // // // //                   </a>
// // // // // // //                   <a
// // // // // // //                     href="/glam"
// // // // // // //                     className="block px-4 py-2 text-base font-hatton font-light text-white hover:bg-accent hover:text-primary transition-colors"
// // // // // // //                   >
// // // // // // //                     Six Hands Rituals
// // // // // // //                   </a>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //               <a
// // // // // // //                 href="/contact"
// // // // // // //                 className="text-base md:text-lg lg:text-xl font-hatton font-light text-white hover:text-primary transition-colors"
// // // // // // //               >
// // // // // // //                 Contact
// // // // // // //               </a>
// // // // // // //               <a
// // // // // // //                 href="/team"
// // // // // // //                 className="text-base md:text-lg lg:text-xl font-hatton font-light text-white hover:text-primary transition-colors"
// // // // // // //               >
// // // // // // //                 Our Team
// // // // // // //               </a>
// // // // // // //             </div>

// // // // // // //             {/* Logo */}
// // // // // // //             <div className="flex-1 flex justify-center">
// // // // // // //               <a href="/" className="flex items-center">
// // // // // // //                 <img
// // // // // // //                   src={Logo}
// // // // // // //                   alt="AVYA Logo"
// // // // // // //                   className="h-[70px] w-auto object-contain"
// // // // // // //                 />
// // // // // // //               </a>
// // // // // // //             </div>

// // // // // // //             {/* Location (hidden on mobile) */}
// // // // // // //             <div className="hidden md:flex flex-1 justify-end min-w-[150px]">
// // // // // // //               <p className="text-base font-hatton font-light text-white hover:text-primary transition-colors">
// // // // // // //                 <span className="md:text-lg">1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
// // // // // // //               </p>
// // // // // // //             </div>

// // // // // // //             {/* Mobile Menu Button */}
// // // // // // //             <div className="flex md:hidden">
// // // // // // //               <Button
// // // // // // //                 variant="ghost"
// // // // // // //                 size="icon"
// // // // // // //                 className="h-12 w-12 hover:bg-white/5"
// // // // // // //                 onClick={() => setIsOpen(!isOpen)}
// // // // // // //               >
// // // // // // //                 {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // // // // // //               </Button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Mobile Menu Dropdown */}
// // // // // // //       {isOpen && (
// // // // // // //         <div className="md:hidden mt-1 bg-transparent  rounded-3xl shadow-lg overflow-hidden animate-in slide-in-from-top-5 duration-200">
// // // // // // //           <div className="px-6 py-4">
// // // // // // //             <div className="flex flex-col gap-[15px]">
// // // // // // //               <a
// // // // // // //                 href="/"
// // // // // // //                 className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-2 border-b border-gray-100"
// // // // // // //                 onClick={() => setIsOpen(false)}
// // // // // // //               >
// // // // // // //                 Home
// // // // // // //               </a>
// // // // // // //               <a
// // // // // // //                 href="/about"
// // // // // // //                 className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-2 border-b border-gray-100"
// // // // // // //                 onClick={() => setIsOpen(false)}
// // // // // // //               >
// // // // // // //                 About us
// // // // // // //               </a>
// // // // // // //               <div className="border-b border-gray-100">
// // // // // // //                 <button
// // // // // // //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors flex items-center justify-between w-full text-left py-2"
// // // // // // //                   onClick={() => setIsServicesOpen(!isServicesOpen)}
// // // // // // //                 >
// // // // // // //                   Services
// // // // // // //                   <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
// // // // // // //                 </button>
// // // // // // //                 {isServicesOpen && (
// // // // // // //                   <div className="pb-2 pl-4 flex flex-col gap-[10px] animate-in slide-in-from-top-2 duration-200">
// // // // // // //                     <a
// // // // // // //                       href="/trichology"
// // // // // // //                       className="text-lg font-hatton font-light text-muted-foreground hover:text-primary transition-colors py-2"
// // // // // // //                       onClick={() => setIsOpen(false)}
// // // // // // //                     >
// // // // // // //                       Trichology & Scalp Health
// // // // // // //                     </a>
// // // // // // //                     <a
// // // // // // //                       href="/hair-treatments"
// // // // // // //                       className="text-lg font-hatton font-light text-muted-foreground hover:text-primary transition-colors py-2"
// // // // // // //                       onClick={() => setIsOpen(false)}
// // // // // // //                     >
// // // // // // //                       Hair Treatments
// // // // // // //                     </a>
// // // // // // //                     <a
// // // // // // //                       href="/glam"
// // // // // // //                       className="text-lg font-hatton font-light text-muted-foreground hover:text-primary transition-colors py-2"
// // // // // // //                       onClick={() => setIsOpen(false)}
// // // // // // //                     >
// // // // // // //                       Six Hands Rituals
// // // // // // //                     </a>
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //               <a
// // // // // // //                 href="/contact"
// // // // // // //                 className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-2"
// // // // // // //                 onClick={() => setIsOpen(false)}
// // // // // // //               >
// // // // // // //                 Contact
// // // // // // //               </a>
// // // // // // //               <a
// // // // // // //                 href="/team"
// // // // // // //                 className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-2"
// // // // // // //                 onClick={() => setIsOpen(false)}
// // // // // // //               >
// // // // // // //                 Our Team
// // // // // // //               </a>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Navigation;
// // // // // // import { Menu, X, ChevronDown } from "lucide-react";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { useState } from "react";
// // // // // // import Logo from "../assets/4.png";

// // // // // // const Navigation = () => {
// // // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // // //   const [isServicesOpen, setIsServicesOpen] = useState(false);

// // // // // //   return (
// // // // // //     <nav className="fixed top-4 left-4 right-4 z-50 w-auto">
// // // // // //       {/* Main Navigation Bar */}
// // // // // //        <div className="  rounded-3xl shadow-sm w-full">
// // // // // //          <div className="px-3 sm:px-4 -my-4">
// // // // // //           <div className="flex items-center justify-between gap-4">
// // // // // //             {/* Left Side - Desktop Navigation Links */}
// // // // // //             <div className="hidden lg:flex items-center gap-6 flex-1">
// // // // // //               <a
// // // // // //                 href="/"
// // // // // //                  className="text-base lg:text-lg font-hatton font-light text-white hover:text-primary transition-colors whitespace-nowrap"
// // // // // //               >
// // // // // //                 Home
// // // // // //               </a>
// // // // // //               <a
// // // // // //                 href="/about"
// // // // // //                  className="text-base lg:text-lg font-hatton font-light text-white hover:text-primary transition-colors whitespace-nowrap"
// // // // // //               >
// // // // // //                 About us
// // // // // //               </a>
// // // // // //               <div className="relative group">
// // // // // //                  <button className="text-base lg:text-lg font-hatton font-light text-white hover:text-primary transition-colors flex items-center gap-2 whitespace-nowrap">
// // // // // //                   Services
// // // // // //                   <ChevronDown className="h-4 w-4" />
// // // // // //                 </button>
// // // // // //                 <div className="absolute top-full left-0 mt-2 w-56  border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
// // // // // //                   <a
// // // // // //                     href="/trichology"
// // // // // //                      className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors first:rounded-t-lg"
// // // // // //                   >
// // // // // //                     Trichology & Scalp Health
// // // // // //                   </a>
// // // // // //                   <a
// // // // // //                     href="/hair-treatments"
// // // // // //                     className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // // // // //                   >
// // // // // //                     Hair Treatments
// // // // // //                   </a>
// // // // // //                   <a
// // // // // //                     href="/glam"
// // // // // //                     className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // // // // //                   >
// // // // // //                     Six Hands Rituals
// // // // // //                   </a>
// // // // // //                   <a
// // // // // //                     href="/nails"
// // // // // //                     className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // // // // //                   >
// // // // // //                     Nails
// // // // // //                   </a>
// // // // // //                   <a
// // // // // //                     href="/eyelash-extensions"
// // // // // //                     className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // // // // //                   >
// // // // // //                     Eyelash Extensions
// // // // // //                   </a>
// // // // // //                   <a
// // // // // //                     href="/permanent-makeup"
// // // // // //                     className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors last:rounded-b-lg"
// // // // // //                   >
// // // // // //                     Permanent Makeup
// // // // // //                   </a>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <a
// // // // // //                 href="/contact"
// // // // // //                  className="text-base lg:text-lg font-hatton font-light text-white hover:text-primary transition-colors whitespace-nowrap"
// // // // // //               >
// // // // // //                 Contact
// // // // // //               </a>
// // // // // //               <a
// // // // // //                 href="/team"
// // // // // //                  className="text-base lg:text-lg font-hatton font-light text-white hover:text-primary transition-colors whitespace-nowrap"
// // // // // //               >
// // // // // //                 Our Team
// // // // // //               </a>
// // // // // //             </div>

// // // // // //              {/* Center - Logo */}
// // // // // //              <div className="flex justify-center lg:mx-8 -mt-2 -mb-6">
// // // // // //                <a href="/" className="cursor-pointer">
// // // // // //                  <img
// // // // // //                     src={Logo}
// // // // // //                     alt="AVYA Logo"
// // // // // //                     className="h-[250px] w-auto object-contain transform scale-110"
// // // // // //                   />
// // // // // //                </a>
// // // // // //             </div>

// // // // // //             {/* Right Side - Location (Desktop only) */}
// // // // // //             <div className="hidden lg:flex items-center justify-end flex-1">
// // // // // //               <p className="text-sm lg:text-base font-hatton font-light text-white hover:text-primary transition-colors text-right">
// // // // // //                 <span className="text-base">1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             {/* Mobile Menu Button */}
// // // // // //             <div className="flex lg:hidden ml-auto">
// // // // // //               <Button
// // // // // //                 variant="ghost"
// // // // // //                 size="icon"
// // // // // //                 className="h-16 w-16 hover:bg-white/5 -my-2"
// // // // // //                 onClick={() => setIsOpen(!isOpen)}
// // // // // //               >
// // // // // //                 {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
// // // // // //               </Button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Mobile Menu Dropdown */}
// // // // // //       {isOpen && (
// // // // // //         <div className="lg:hidden mt-2 bg-transparent  rounded-3xl shadow-lg overflow-hidden animate-in slide-in-from-top-5 duration-200 w-full">
// // // // // //           <div className="px-6 py-4">
// // // // // //             <div className="flex flex-col gap-1">
// // // // // //               <a
// // // // // //                 href="/"
// // // // // //                  className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// // // // // //                 onClick={() => setIsOpen(false)}
// // // // // //               >
// // // // // //                 Home
// // // // // //               </a>
// // // // // //               <a
// // // // // //                 href="/about"
// // // // // //                  className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// // // // // //                 onClick={() => setIsOpen(false)}
// // // // // //               >
// // // // // //                 About us
// // // // // //               </a>
// // // // // //               <div className="border-b border-gray-100">
// // // // // //                 <button
// // // // // //                    className="text-lg font-hatton font-light text-white hover:text-primary transition-colors flex items-center justify-between w-full text-left py-4"
// // // // // //                   onClick={() => setIsServicesOpen(!isServicesOpen)}
// // // // // //                 >
// // // // // //                   Services
// // // // // //                   <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
// // // // // //                 </button>
// // // // // //                 {isServicesOpen && (
// // // // // //                   <div className="pb-3 pl-4 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200">
// // // // // //                     <a
// // // // // //                       href="/trichology"
// // // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // // //                       onClick={() => setIsOpen(false)}
// // // // // //                     >
// // // // // //                       Trichology & Scalp Health
// // // // // //                     </a>
// // // // // //                     <a
// // // // // //                       href="/hairtreatments"
// // // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // // //                       onClick={() => setIsOpen(false)}
// // // // // //                     >
// // // // // //                       Hair Treatments & Restorative Rituals
// // // // // //                     </a>
// // // // // //                     <a
// // // // // //                       href="/glam"
// // // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // // //                       onClick={() => setIsOpen(false)}
// // // // // //                     >
// // // // // //                       Six Hands Rituals
// // // // // //                     </a>
// // // // // //                     <a
// // // // // //                       href="/nails"
// // // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // // //                       onClick={() => setIsOpen(false)}
// // // // // //                     >
// // // // // //                       Nails
// // // // // //                     </a>
// // // // // //                     <a
// // // // // //                       href="/eyelash-extensions"
// // // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // // //                       onClick={() => setIsOpen(false)}
// // // // // //                     >
// // // // // //                       Eyelash Extensions
// // // // // //                     </a>
// // // // // //                     <a
// // // // // //                       href="/permanent-makeup"
// // // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // // //                       onClick={() => setIsOpen(false)}
// // // // // //                     >
// // // // // //                       Permanent Makeup
// // // // // //                     </a>
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //               <a
// // // // // //                 href="/contact"
// // // // // //                  className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// // // // // //                 onClick={() => setIsOpen(false)}
// // // // // //               >
// // // // // //                 Contact
// // // // // //               </a>
// // // // // //               <a
// // // // // //                 href="/team"
// // // // // //                 className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4"
// // // // // //                 onClick={() => setIsOpen(false)}
// // // // // //               >
// // // // // //                 Our Team
// // // // // //               </a>
              
// // // // // //               {/* Mobile Location */}
// // // // // //               <div className="pt-3 mt-2 border-t border-gray-200">
// // // // // //                  <p className="text-sm font-hatton font-light text-white/70 text-center py-2">
// // // // // //                   <span>1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </nav>
// // // // // //   );
// // // // // // };

// // // // // // export default Navigation;

// // // // // import { Menu, X, ChevronDown, Facebook, Instagram, Mail, Phone, Clock } from "lucide-react";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { useState } from "react";
// // // // // import Logo from "../assets/4.png";

// // // // // const Navigation = () => {
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const [isServicesOpen, setIsServicesOpen] = useState(false);

// // // // //   return (
// // // // //     <>
// // // // //     <div className="fixed left-4 right-4 z-50 bg-[#E2DBDF]">
// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //           <div className="flex items-center justify-between py-2">
// // // // //             {/* Social Icons */}
// // // // //             <div className="flex items-center gap-4">
// // // // //               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#595959] hover:text-primary transition-colors">
// // // // //                 <Facebook className="h-6 w-6" />
// // // // //               </a>
// // // // //               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#595959] hover:text-primary transition-colors">
// // // // //                 <Instagram className="h-6 w-6" />
// // // // //               </a>
// // // // //               <a href="mailto:info@avya.com" className="text-[#595959] hover:text-primary transition-colors">
// // // // //                 <Mail className="h-6 w-6" />
// // // // //               </a>
// // // // //               <a href="tel:+254123456789" className="text-[#595959] hover:text-primary transition-colors">
// // // // //                 <Phone className="h-6 w-6" />
// // // // //               </a>
// // // // //             </div>
            
// // // // //             {/* Business Hours */}
// // // // //             <div className="hidden md:flex items-center gap-2 text-[#595959] text-sm font-hatton font-light">
// // // // //               <Clock className="h-6 w-6" />
// // // // //               <span>Mon-Sat: 9am to 8pm | Sun: 10am to 8pm</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //     <nav className="fixed top-4 left-4 right-4 z-50 w-auto ">
// // // // //       {/* Main Navigation Bar */}
// // // // //        <div className="rounded-3xl shadow-sm w-full">
// // // // //          <div className="px-3 sm:px-4 -my-4">
// // // // //           <div className="flex items-center justify-between gap-4">
// // // // //             {/* Left Side - Desktop Navigation Links */}
// // // // //             <div className="hidden lg:flex items-center gap-6 flex-1">
// // // // //               <a
// // // // //                 href="/"
// // // // //                  className="text-base lg:text-lg font-hatton font-light text-white hover:text-primary transition-colors whitespace-nowrap"
// // // // //               >
// // // // //                 Home
// // // // //               </a>
// // // // //               <a
// // // // //                 href="/about"
// // // // //                  className="text-base lg:text-lg font-hatton font-light text-white hover:text-primary transition-colors whitespace-nowrap"
// // // // //               >
// // // // //                 About us
// // // // //               </a>
// // // // //               <div className="relative group">
// // // // //                  <button className="text-base lg:text-lg font-hatton font-light text-white hover:text-primary transition-colors flex items-center gap-2 whitespace-nowrap">
// // // // //                   Services
// // // // //                   <ChevronDown className="h-4 w-4" />
// // // // //                 </button>
// // // // //                 <div className="absolute top-full left-0 mt-2 w-56  border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  
// // // // //                   <a
// // // // //                     href="/pricing"
// // // // //                     className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors last:rounded-b-lg"
// // // // //                   >
// // // // //                     Pricing
// // // // //                   </a>
// // // // //                   <a
// // // // //                     href="/hair-treatments"
// // // // //                     className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // // // //                   >
// // // // //                     Hair Treatments
                    
// // // // //                   </a>
// // // // //                   <a
// // // // //                     href="/glam"
// // // // //                     className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // // // //                   >
// // // // //                     Six Hands Rituals
// // // // //                   </a>
// // // // //                   <a
// // // // //                     href="/nails"
// // // // //                     className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // // // //                   >
// // // // //                     Nails
// // // // //                   </a>
// // // // //                   <a
// // // // //                     href="/eyelash-extensions"
// // // // //                     className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // // // //                   >
// // // // //                     Eyelash Extensions
// // // // //                   </a>
// // // // //                   <a
// // // // //                     href="/permanent-makeup"
// // // // //                     className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors last:rounded-b-lg"
// // // // //                   >
// // // // //                     Permanent Makeup
// // // // //                   </a>
// // // // //                   <a
// // // // //                     href="/trichology"
// // // // //                      className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors first:rounded-t-lg"
// // // // //                   >
// // // // //                     Trichology & Scalp Health
// // // // //                   </a>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <a
// // // // //                 href="/team"
// // // // //                  className="text-base lg:text-lg font-hatton font-light text-white hover:text-primary transition-colors whitespace-nowrap"
// // // // //               >
// // // // //                 Our Team
// // // // //               </a>
// // // // //               <a
// // // // //                 href="/contact"
// // // // //                  className="text-base lg:text-lg font-hatton font-light text-white hover:text-primary transition-colors whitespace-nowrap"
// // // // //               >
// // // // //                 Contact
// // // // //               </a>
// // // // //             </div>

// // // // //              {/* Center - Logo */}
// // // // //              <div className="flex justify-start lg:justify-center lg:mx-8 -mt-2 -mb-6 order-1 lg:order-none">
// // // // //                <a href="/" className="cursor-pointer">
// // // // //                  <img
// // // // //                     src={Logo}
// // // // //                     alt="AVYA Logo"
// // // // //                     className="h-24 lg:h-[250px] w-auto object-contain transform scale-110"
// // // // //                   />
// // // // //                </a>
// // // // //             </div>

// // // // //             {/* Right Side - Location (Desktop only) */}
// // // // //             <div className="hidden lg:flex items-center justify-end flex-1">
// // // // //               <p className="text-sm lg:text-base font-hatton font-light text-white hover:text-primary transition-colors text-right">
// // // // //                 <span className="text-base">1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
// // // // //               </p>
// // // // //             </div>

// // // // //             {/* Mobile Menu Button */}
// // // // //             <div className="flex lg:hidden ml-auto order-last">
// // // // //               <Button
// // // // //                 variant="ghost"
// // // // //                 size="icon"
// // // // //                 className="h-26 w-26 hover:bg-white/5 -my-2"
// // // // //                 onClick={() => setIsOpen(!isOpen)}
// // // // //               >
// // // // //                 {isOpen ? <X className="h-18 w-18 text-white" /> : <Menu className="h-18 w-18 text-white" />}
// // // // //               </Button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile Menu Dropdown */}
// // // // //       {isOpen && (
// // // // //         <div className="lg:hidden mt-2 rounded-3xl shadow-lg overflow-hidden animate-in slide-in-from-top-5 duration-200 w-full">
// // // // //           <div className="px-6 py-4">
// // // // //             <div className="flex flex-col gap-1">
// // // // //               <a
// // // // //                 href="/"
// // // // //                  className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// // // // //                 onClick={() => setIsOpen(false)}
// // // // //               >
// // // // //                 Home
// // // // //               </a>
// // // // //               <a
// // // // //                 href="/about"
// // // // //                  className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// // // // //                 onClick={() => setIsOpen(false)}
// // // // //               >
// // // // //                 About us
// // // // //               </a>
// // // // //               <div className="border-b border-gray-100">
// // // // //                 <button
// // // // //                    className="text-lg font-hatton font-light text-white hover:text-primary transition-colors flex items-center justify-between w-full text-left py-4"
// // // // //                   onClick={() => setIsServicesOpen(!isServicesOpen)}
// // // // //                 >
// // // // //                   Services
// // // // //                   <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
// // // // //                 </button>
// // // // //                 {isServicesOpen && (
// // // // //                   <div className="pb-3 pl-4 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200">
// // // // //                     <a
// // // // //                       href="/pricing"
// // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // //                       onClick={() => setIsOpen(false)}
// // // // //                     >
// // // // //                       See All
// // // // //                     </a>
// // // // //                     <a
// // // // //                       href="/hairtreatments"
// // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // //                       onClick={() => setIsOpen(false)}
// // // // //                     >
// // // // //                       Hair Treatments & Restorative Rituals
// // // // //                     </a>
// // // // //                     <a
// // // // //                       href="/glam"
// // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // //                       onClick={() => setIsOpen(false)}
// // // // //                     >
// // // // //                       Six Hands Rituals
// // // // //                     </a>
// // // // //                     <a
// // // // //                       href="/nails"
// // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // //                       onClick={() => setIsOpen(false)}
// // // // //                     >
// // // // //                       Nails
// // // // //                     </a>
// // // // //                     <a
// // // // //                       href="/eyelash-extensions"
// // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // //                       onClick={() => setIsOpen(false)}
// // // // //                     >
// // // // //                       Eyelash Extensions
// // // // //                     </a>
// // // // //                     <a
// // // // //                       href="/permanent-makeup"
// // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // //                       onClick={() => setIsOpen(false)}
// // // // //                     >
// // // // //                       Permanent Makeup
// // // // //                     </a>
// // // // //                     <a
// // // // //                       href="/tricology"
// // // // //                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // // //                       onClick={() => setIsOpen(false)}
// // // // //                     >
// // // // //                     Trichology & Scalp Health
// // // // //                     </a>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>
// // // // //               <a
// // // // //                 href="/contact"
// // // // //                  className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// // // // //                 onClick={() => setIsOpen(false)}
// // // // //               >
// // // // //                 Our Team
// // // // //               </a>
// // // // //               <a
// // // // //                 href="/contact"
// // // // //                 className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4"
// // // // //                 onClick={() => setIsOpen(false)}
// // // // //               >
// // // // //                 Contact
// // // // //               </a>
              
// // // // //               {/* Mobile Location */}
// // // // //               <div className="pt-3 mt-2 border-t border-gray-200">
// // // // //                  <p className="text-sm font-hatton font-light text-white/70 text-center py-2">
// // // // //                   <span>1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </nav>
// // // // //     </>
    
// // // // //   );
// // // // // };

// // // // // export default Navigation;
// // // // import { Menu, X, ChevronDown, Facebook, Instagram, Mail, Phone, Clock } from "lucide-react";
// // // // import { Button } from "@/components/ui/button";
// // // // import { useState, useEffect } from "react";
// // // // import Logo from "../assets/4.png";
// // // // import Logo1 from "../assets/3.png";

// // // // const Navigation = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [isServicesOpen, setIsServicesOpen] = useState(false);
// // // //   const [isScrolled, setIsScrolled] = useState(false);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const scrollTop = window.scrollY;
// // // //       if (scrollTop > 10) { // Adjust the scroll threshold as needed
// // // //         setIsScrolled(true);
// // // //       } else {
// // // //         setIsScrolled(false);
// // // //       }
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       <div className="fixed left-4 right-4 z-50 bg-[#E2DBDF]">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //           <div className="flex items-center justify-between py-2">
// // // //             {/* Social Icons */}
// // // //             <div className="flex items-center gap-4">
// // // //               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#595959] hover:text-primary transition-colors">
// // // //                 <Facebook className="h-6 w-6" />
// // // //               </a>
// // // //               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#595959] hover:text-primary transition-colors">
// // // //                 <Instagram className="h-6 w-6" />
// // // //               </a>
// // // //               <a href="mailto:info@avya.com" className="text-[#595959] hover:text-primary transition-colors">
// // // //                 <Mail className="h-6 w-6" />
// // // //               </a>
// // // //               <a href="tel:+254123456789" className="text-[#595959] hover:text-primary transition-colors">
// // // //                 <Phone className="h-6 w-6" />
// // // //               </a>
// // // //             </div>

// // // //             {/* Business Hours */}
// // // //             <div className="hidden md:flex items-center gap-2 text-[#595959] text-sm font-hatton font-light">
// // // //               <Clock className="h-6 w-6" />
// // // //               <span>Mon-Sat: 9am to 8pm | Sun: 10am to 8pm</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <nav className={`fixed top-4 left-4 right-4 z-50 w-auto transition-colors duration-300 ${isScrolled ? 'text-[#E2DBDF]' : 'text-white'}`}>
// // // //         {/* Main Navigation Bar */}
// // // //         <div className="rounded-3xl shadow-sm w-full">
// // // //           <div className="px-3 sm:px-4 -my-4">
// // // //             <div className="flex items-center justify-between gap-4">
// // // //               {/* Left Side - Desktop Navigation Links */}
// // // //               <div className="hidden lg:flex items-center gap-6 flex-1">
// // // //                 <a
// // // //                   href="/"
// // // //                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#E2DBDF]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
// // // //                 >
// // // //                   Home
// // // //                 </a>
// // // //                 <a
// // // //                   href="/about"
// // // //                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#E2DBDF]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
// // // //                 >
// // // //                   About us
// // // //                 </a>
// // // //                 <div className="relative group">
// // // //                   <button className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#E2DBDF]' : 'text-white'} hover:text-primary transition-colors flex items-center gap-2 whitespace-nowrap`}>
// // // //                     Services
// // // //                     <ChevronDown className="h-4 w-4" />
// // // //                   </button>
// // // //                   <div className="absolute top-full left-0 mt-2 w-56 border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
// // // //                     <a
// // // //                       href="/pricing"
// // // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors last:rounded-b-lg"
// // // //                     >
// // // //                       Pricing
// // // //                     </a>
// // // //                     <a
// // // //                       href="/hair-treatments"
// // // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // // //                     >
// // // //                       Hair Treatments
// // // //                     </a>
// // // //                     <a
// // // //                       href="/glam"
// // // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // // //                     >
// // // //                       Six Hands Rituals
// // // //                     </a>
// // // //                     <a
// // // //                       href="/nails"
// // // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // // //                     >
// // // //                       Nails
// // // //                     </a>
// // // //                     <a
// // // //                       href="/eyelash-extensions"
// // // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // // //                     >
// // // //                       Eyelash Extensions
// // // //                     </a>
// // // //                     <a
// // // //                       href="/permanent-makeup"
// // // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors last:rounded-b-lg"
// // // //                     >
// // // //                       Permanent Makeup
// // // //                     </a>
// // // //                     <a
// // // //                       href="/trichology"
// // // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors first:rounded-t-lg"
// // // //                     >
// // // //                       Trichology & Scalp Health
// // // //                     </a>
// // // //                   </div>
// // // //                 </div>
// // // //                 <a
// // // //                   href="/team"
// // // //                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#E2DBDF]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
// // // //                 >
// // // //                   Our Team
// // // //                 </a>
// // // //                 <a
// // // //                   href="/contact"
// // // //                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#E2DBDF]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
// // // //                 >
// // // //                   Contact
// // // //                 </a>
// // // //               </div>

// // // //               {/* Center - Logo */}
// // // //               <div className="flex justify-start lg:justify-center lg:mx-8 -mt-2 -mb-6 order-1 lg:order-none">
// // // //                 <a href="/" className="cursor-pointer">
// // // //                   <img
// // // //                     src={Logo}
// // // //                     alt="AVYA Logo"
// // // //                     className={`h-24 lg:h-[250px] w-auto object-contain transform scale-110 ${isScrolled ? 'brightness-0 invert' : ''}`}
// // // //                   />
// // // //                 </a>
// // // //               </div>

// // // //               {/* Right Side - Location (Desktop only) */}
// // // //               <div className="hidden lg:flex items-center justify-end flex-1">
// // // //                 <p className={`text-sm lg:text-base font-hatton font-light ${isScrolled ? 'text-[#E2DBDF]' : 'text-white'} hover:text-primary transition-colors text-right`}>
// // // //                   <span className="text-base">1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
// // // //                 </p>
// // // //               </div>

// // // //               {/* Mobile Menu Button */}
// // // //               <div className="flex lg:hidden ml-auto order-last">
// // // //                 <Button
// // // //                   variant="ghost"
// // // //                   size="icon"
// // // //                   className="h-26 w-26 hover:bg-white/5 -my-2"
// // // //                   onClick={() => setIsOpen(!isOpen)}
// // // //                 >
// // // //                   {isOpen ? <X className="h-18 w-18 text-white" /> : <Menu className="h-18 w-18 text-white" />}
// // // //                 </Button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Mobile Menu Dropdown */}
// // // //         {isOpen && (
// // // //           <div className="lg:hidden mt-2 rounded-3xl shadow-lg overflow-hidden animate-in slide-in-from-top-5 duration-200 w-full">
// // // //             <div className="px-6 py-4">
// // // //               <div className="flex flex-col gap-1">
// // // //                 <a
// // // //                   href="/"
// // // //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// // // //                   onClick={() => setIsOpen(false)}
// // // //                 >
// // // //                   Home
// // // //                 </a>
// // // //                 <a
// // // //                   href="/about"
// // // //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// // // //                   onClick={() => setIsOpen(false)}
// // // //                 >
// // // //                   About us
// // // //                 </a>
// // // //                 <div className="border-b border-gray-100">
// // // //                   <button
// // // //                     className="text-lg font-hatton font-light text-white hover:text-primary transition-colors flex items-center justify-between w-full text-left py-4"
// // // //                     onClick={() => setIsServicesOpen(!isServicesOpen)}
// // // //                   >
// // // //                     Services
// // // //                     <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
// // // //                   </button>
// // // //                   {isServicesOpen && (
// // // //                     <div className="pb-3 pl-4 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200">
// // // //                       <a
// // // //                         href="/pricing"
// // // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // //                         onClick={() => setIsOpen(false)}
// // // //                       >
// // // //                         See All
// // // //                       </a>
// // // //                       <a
// // // //                         href="/hairtreatments"
// // // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // //                         onClick={() => setIsOpen(false)}
// // // //                       >
// // // //                         Hair Treatments & Restorative Rituals
// // // //                       </a>
// // // //                       <a
// // // //                         href="/glam"
// // // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // //                         onClick={() => setIsOpen(false)}
// // // //                       >
// // // //                         Six Hands Rituals
// // // //                       </a>
// // // //                       <a
// // // //                         href="/nails"
// // // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // //                         onClick={() => setIsOpen(false)}
// // // //                       >
// // // //                         Nails
// // // //                       </a>
// // // //                       <a
// // // //                         href="/eyelash-extensions"
// // // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // //                         onClick={() => setIsOpen(false)}
// // // //                       >
// // // //                         Eyelash Extensions
// // // //                       </a>
// // // //                       <a
// // // //                         href="/permanent-makeup"
// // // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // //                         onClick={() => setIsOpen(false)}
// // // //                       >
// // // //                         Permanent Makeup
// // // //                       </a>
// // // //                       <a
// // // //                         href="/tricology"
// // // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // // //                         onClick={() => setIsOpen(false)}
// // // //                       >
// // // //                         Trichology & Scalp Health
// // // //                       </a>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //                 <a
// // // //                   href="/contact"
// // // //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// // // //                   onClick={() => setIsOpen(false)}
// // // //                 >
// // // //                   Our Team
// // // //                 </a>
// // // //                 <a
// // // //                   href="/contact"
// // // //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4"
// // // //                   onClick={() => setIsOpen(false)}
// // // //                 >
// // // //                   Contact
// // // //                 </a>

// // // //                 {/* Mobile Location */}
// // // //                 <div className="pt-3 mt-2 border-t border-gray-200">
// // // //                   <p className="text-sm font-hatton font-light text-white/70 text-center py-2">
// // // //                     <span>1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </nav>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Navigation;
// // // import { Menu, X, ChevronDown, Facebook, Instagram, Mail, Phone, Clock } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { useState, useEffect } from "react";
// // // import Logo from "../assets/4.png";
// // // import Logo1 from "../assets/3.png";

// // // const Navigation = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [isServicesOpen, setIsServicesOpen] = useState(false);
// // //   const [isScrolled, setIsScrolled] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const scrollTop = window.scrollY;
// // //       if (scrollTop > 10) {
// // //         setIsScrolled(true);
// // //       } else {
// // //         setIsScrolled(false);
// // //       }
// // //     };
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   return (
// // //     <>
// // //       <div className="fixed left-0 right-0 z-50 bg-[#E2DBDF]">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="flex items-center justify-between py-2">
// // //             {/* Social Icons */}
// // //             <div className="flex items-center gap-4">
// // //               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#595959] hover:text-primary transition-colors">
// // //                 <Facebook className="h-6 w-6" />
// // //               </a>
// // //               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#595959] hover:text-primary transition-colors">
// // //                 <Instagram className="h-6 w-6" />
// // //               </a>
// // //               <a href="mailto:info@avya.com" className="text-[#595959] hover:text-primary transition-colors">
// // //                 <Mail className="h-6 w-6" />
// // //               </a>
// // //               <a href="tel:+254123456789" className="text-[#595959] hover:text-primary transition-colors">
// // //                 <Phone className="h-6 w-6" />
// // //               </a>
// // //             </div>
// // //             {/* Business Hours */}
// // //             <div className="hidden md:flex items-center gap-2 text-[#595959] text-sm font-hatton font-light">
// // //               <Clock className="h-6 w-6" />
// // //               <span>Mon-Sat: 9am to 8pm | Sun: 10am to 8pm</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <nav className={`fixed top-4 left-4 right-4 z-50 w-auto transition-colors duration-300`}>
// // //         {/* Main Navigation Bar */}
// // //         <div className="rounded-3xl shadow-sm w-full">
// // //           <div className="px-3 sm:px-4 -my-4">
// // //             <div className="flex items-center justify-between gap-4">
// // //               {/* Left Side - Desktop Navigation Links */}
// // //               <div className="hidden lg:flex items-center gap-6 flex-1">
// // //                 <a
// // //                   href="/"
// // //                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
// // //                 >
// // //                   Home
// // //                 </a>
// // //                 <a
// // //                   href="/about"
// // //                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
// // //                 >
// // //                   About us
// // //                 </a>
// // //                 <div className="relative group">
// // //                   <button className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors flex items-center gap-2 whitespace-nowrap`}>
// // //                     Services
// // //                     <ChevronDown className="h-4 w-4" />
// // //                   </button>
// // //                   <div className="absolute top-full left-0 mt-2 w-56 border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
// // //                     <a
// // //                       href="/pricing"
// // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors last:rounded-b-lg"
// // //                     >
// // //                       Pricing
// // //                     </a>
// // //                     <a
// // //                       href="/hair-treatments"
// // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // //                     >
// // //                       Hair Treatments
// // //                     </a>
// // //                     <a
// // //                       href="/glam"
// // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // //                     >
// // //                       Six Hands Rituals
// // //                     </a>
// // //                     <a
// // //                       href="/nails"
// // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // //                     >
// // //                       Nails
// // //                     </a>
// // //                     <a
// // //                       href="/eyelash-extensions"
// // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors"
// // //                     >
// // //                       Eyelash Extensions
// // //                     </a>
// // //                     <a
// // //                       href="/permanent-makeup"
// // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors last:rounded-b-lg"
// // //                     >
// // //                       Permanent Makeup
// // //                     </a>
// // //                     <a
// // //                       href="/trichology"
// // //                       className="block px-4 py-3 text-sm font-hatton font-light text-white hover:bg-transparent/10 hover:text-primary transition-colors first:rounded-t-lg"
// // //                     >
// // //                       Trichology & Scalp Health
// // //                     </a>
// // //                   </div>
// // //                 </div>
// // //                 <a
// // //                   href="/team"
// // //                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
// // //                 >
// // //                   Our Team
// // //                 </a>
// // //                 <a
// // //                   href="/contact"
// // //                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
// // //                 >
// // //                   Contact
// // //                 </a>
// // //               </div>

// // //               {/* Center - Logo */}
// // //               <div className="flex justify-start lg:justify-center lg:mx-8 -mt-2 -mb-6 order-1 lg:order-none">
// // //                 <a href="/" className="cursor-pointer">
// // //                   <img
// // //                     src={isScrolled ? Logo1 : Logo}
// // //                     alt="AVYA Logo"
// // //                     className="h-24 lg:h-[250px] w-auto object-contain transform scale-110"
// // //                   />
// // //                 </a>
// // //               </div>

// // //               {/* Right Side - Location (Desktop only) */}
// // //               <div className="hidden lg:flex items-center justify-end flex-1">
// // //                 <p className={`text-sm lg:text-base font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors text-right`}>
// // //                   <span className="text-base">1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
// // //                 </p>
// // //               </div>

// // //               {/* Mobile Menu Button */}
// // //               <div className="flex lg:hidden ml-auto order-last">
// // //                 <Button
// // //                   variant="ghost"
// // //                   size="icon"
// // //                   className="h-26 w-26 hover:bg-white/5 -my-2"
// // //                   onClick={() => setIsOpen(!isOpen)}
// // //                 >
// // //                   {isOpen ? <X className="h-18 w-18 text-white" /> : <Menu className="h-18 w-18 text-white" />}
// // //                 </Button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Mobile Menu Dropdown */}
// // //         {isOpen && (
// // //           <div className="lg:hidden mt-2 rounded-3xl shadow-lg overflow-hidden animate-in slide-in-from-top-5 duration-200 w-full">
// // //             <div className="px-6 py-4">
// // //               <div className="flex flex-col gap-1">
// // //                 <a
// // //                   href="/"
// // //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// // //                   onClick={() => setIsOpen(false)}
// // //                 >
// // //                   Home
// // //                 </a>
// // //                 <a
// // //                   href="/about"
// // //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// // //                   onClick={() => setIsOpen(false)}
// // //                 >
// // //                   About us
// // //                 </a>
// // //                 <div className="border-b border-gray-100">
// // //                   <button
// // //                     className="text-lg font-hatton font-light text-white hover:text-primary transition-colors flex items-center justify-between w-full text-left py-4"
// // //                     onClick={() => setIsServicesOpen(!isServicesOpen)}
// // //                   >
// // //                     Services
// // //                     <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
// // //                   </button>
// // //                   {isServicesOpen && (
// // //                     <div className="pb-3 pl-4 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200">
// // //                       <a
// // //                         href="/pricing"
// // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // //                         onClick={() => setIsOpen(false)}
// // //                       >
// // //                         See All
// // //                       </a>
// // //                       <a
// // //                         href="/hairtreatments"
// // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // //                         onClick={() => setIsOpen(false)}
// // //                       >
// // //                         Hair Treatments & Restorative Rituals
// // //                       </a>
// // //                       <a
// // //                         href="/glam"
// // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // //                         onClick={() => setIsOpen(false)}
// // //                       >
// // //                         Six Hands Rituals
// // //                       </a>
// // //                       <a
// // //                         href="/nails"
// // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // //                         onClick={() => setIsOpen(false)}
// // //                       >
// // //                         Nails
// // //                       </a>
// // //                       <a
// // //                         href="/eyelash-extensions"
// // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // //                         onClick={() => setIsOpen(false)}
// // //                       >
// // //                         Eyelash Extensions
// // //                       </a>
// // //                       <a
// // //                         href="/permanent-makeup"
// // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // //                         onClick={() => setIsOpen(false)}
// // //                       >
// // //                         Permanent Makeup
// // //                       </a>
// // //                       <a
// // //                         href="/tricology"
// // //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// // //                         onClick={() => setIsOpen(false)}
// // //                       >
// // //                         Trichology & Scalp Health
// // //                       </a>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //                 <a
// // //                   href="/contact"
// // //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// // //                   onClick={() => setIsOpen(false)}
// // //                 >
// // //                   Our Team
// // //                 </a>
// // //                 <a
// // //                   href="/contact"
// // //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4"
// // //                   onClick={() => setIsOpen(false)}
// // //                 >
// // //                   Contact
// // //                 </a>
// // //                 {/* Mobile Location */}
// // //                 <div className="pt-3 mt-2 border-t border-gray-200">
// // //                   <p className="text-sm font-hatton font-light text-white/70 text-center py-2">
// // //                     <span>1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </nav>
// // //     </>
// // //   );
// // // };

// // // export default Navigation;
// // import { Menu, X, ChevronDown, Facebook, Instagram, Mail, Phone, Clock } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { useState, useEffect } from "react";
// // import Logo from "../assets/4.png";
// // import Logo1 from "../assets/3.png";

// // const Navigation = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isServicesOpen, setIsServicesOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollTop = window.scrollY;
// //       if (scrollTop > 10) {
// //         setIsScrolled(true);
// //       } else {
// //         setIsScrolled(false);
// //       }
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       <div className="fixed left-0 right-0 z-[60] bg-[#E2DBDF]">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex items-center justify-between py-2">
// //             {/* Social Icons */}
// //             <div className="flex items-center gap-4 pointer-events-auto">
// //               <a href="https://www.facebook.com/people/Avya-Beauty-KE/61581716020463/" target="_blank" rel="noopener noreferrer" className="text-[#595959] hover:text-primary transition-colors">
// //                 <Facebook className="h-6 w-6" />
// //               </a>
// //               <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#595959] hover:text-primary transition-colors">
// //                 <Instagram className="h-6 w-6" />
// //               </a>
// //               <a href="https://www.tiktok.com/@avya.beauty.ke" target="_blank" rel="noopener noreferrer" className="text-[#595959] hover:text-primary transition-colors">
// //                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                   <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
// //                 </svg>
// //               </a>
// //               <a href="mailto:info@avya.com" className="text-[#595959] hover:text-primary transition-colors">
// //                 <Mail className="h-6 w-6" />
// //               </a>
// //               <a href="tel:+254123456789" className="text-[#595959] hover:text-primary transition-colors">
// //                 <Phone className="h-6 w-6" />
// //               </a>
// //             </div>
// //             <div className="hidden md:flex items-center gap-2 text-[#595959] text-sm font-hatton font-light">
// //               <Clock className="h-6 w-6" />
// //                <span>Open Mon-Sun: 9am to 8pm</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>


// //       <nav className={`fixed top-4 left-4 right-4 z-50 w-auto transition-colors duration-300`}>
// //         {/* Main Navigation Bar */}
// //         <div className="rounded-3xl shadow-sm w-full">
// //           <div className="px-3 sm:px-4 -my-4">
// //             <div className="flex items-center justify-between gap-4">
// //               {/* Left Side - Desktop Navigation Links */}
// //               <div className="hidden lg:flex items-center gap-6 flex-1">
// //                 <a
// //                   href="/"
// //                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
// //                 >
// //                   Home
// //                 </a>
// //                 <a
// //                   href="/about"
// //                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
// //                 >
// //                   About us
// //                 </a>
// //                 <div className="relative group">
// //                   <button className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors flex items-center gap-2 whitespace-nowrap`}>
// //                     Services
// //                     <ChevronDown className="h-4 w-4" />
// //                   </button>
// //                   <div className="absolute top-full left-0 mt-2 w-56 border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 bg-white/10 hover:bg-white/90">
// //                     <a
// //                       href="/pricing"
// //                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors last:rounded-b-lg`}
// //                     >
// //                       Pricing
// //                     </a>
// //                     <a
// //                       href="/hair-treatments"
// //                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}
// //                     >
// //                       Hair Treatments
// //                     </a>
// //                     <a
// //                       href="/glam"
// //                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}
// //                     >
// //                       Six Hands Rituals
// //                     </a>
// //                     <a
// //                       href="/nails"
// //                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}
// //                     >
// //                       Nails
// //                     </a>
// //                     <a
// //                       href="/eyelash-extensions"
// //                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}
// //                     >
// //                       Eyelash Extensions
// //                     </a>
// //                     <a
// //                       href="/permanent-makeup"
// //                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors last:rounded-b-lg`}
// //                     >
// //                       Permanent Makeup
// //                     </a>
// //                     <a
// //                       href="/trichology"
// //                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors first:rounded-t-lg`}
// //                     >
// //                       Trichology & Scalp Health
// //                     </a>
// //                   </div>
// //                 </div>
// //                 <a
// //                   href="/team"
// //                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
// //                 >
// //                   Our Team
// //                 </a>
// //                 <a
// //                   href="/contact"
// //                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
// //                 >
// //                   Contact
// //                 </a>
// //               </div>

// //               {/* Center - Logo */}
// //               <div className="flex justify-start lg:justify-center lg:mx-8 -mt-2 -mb-6 order-1 lg:order-none">
// //                 <a href="/" className="cursor-pointer">
// //                   <img
// //                     src={isScrolled ? Logo1 : Logo}
// //                     alt="AVYA Logo"
// //                     className="h-24 lg:h-[250px] w-auto object-contain transform scale-110"
// //                   />
// //                 </a>
// //               </div>

// //               {/* Right Side - Location (Desktop only) */}
// //               <div className="hidden lg:flex items-center justify-end flex-1">
// //                 <p className={`text-sm lg:text-base font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors text-right`}>
// //                   <span className="text-base">1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
// //                 </p>
// //               </div>

// //               {/* Mobile Menu Button */}
// //               <div className="flex lg:hidden ml-auto order-last">
// //                 <Button
// //                   variant="ghost"
// //                   size="icon"
// //                   className="h-26 w-26 hover:bg-white/5 -my-2"
// //                   onClick={() => setIsOpen(!isOpen)}
// //                 >
// //                   {isOpen ? <X className="h-18 w-18 text-white" /> : <Menu className="h-18 w-18 text-white" />}
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Mobile Menu Dropdown */}
// //         {isOpen && (
// //           <div className="lg:hidden mt-2 rounded-3xl shadow-lg overflow-hidden animate-in slide-in-from-top-5 duration-200 w-full">
// //             <div className="px-6 py-4">
// //               <div className="flex flex-col gap-1">
// //                 <a
// //                   href="/"
// //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// //                   onClick={() => setIsOpen(false)}
// //                 >
// //                   Home
// //                 </a>
// //                 <a
// //                   href="/about"
// //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// //                   onClick={() => setIsOpen(false)}
// //                 >
// //                   About us
// //                 </a>
// //                 <div className="border-b border-gray-100">
// //                   <button
// //                     className="text-lg font-hatton font-light text-white hover:text-primary transition-colors flex items-center justify-between w-full text-left py-4"
// //                     onClick={() => setIsServicesOpen(!isServicesOpen)}
// //                   >
// //                     Services
// //                     <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
// //                   </button>
// //                   {isServicesOpen && (
// //                     <div className="pb-3 pl-4 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200">
// //                       <a
// //                         href="/pricing"
// //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// //                         onClick={() => setIsOpen(false)}
// //                       >
// //                         See All
// //                       </a>
// //                       <a
// //                         href="/hairtreatments"
// //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// //                         onClick={() => setIsOpen(false)}
// //                       >
// //                         Hair Treatments & Restorative Rituals
// //                       </a>
// //                       <a
// //                         href="/glam"
// //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// //                         onClick={() => setIsOpen(false)}
// //                       >
// //                         Six Hands Rituals
// //                       </a>
// //                       <a
// //                         href="/nails"
// //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// //                         onClick={() => setIsOpen(false)}
// //                       >
// //                         Nails
// //                       </a>
// //                       <a
// //                         href="/eyelash-extensions"
// //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// //                         onClick={() => setIsOpen(false)}
// //                       >
// //                         Eyelash Extensions
// //                       </a>
// //                       <a
// //                         href="/permanent-makeup"
// //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// //                         onClick={() => setIsOpen(false)}
// //                       >
// //                         Permanent Makeup
// //                       </a>
// //                       <a
// //                         href="/tricology"
// //                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
// //                         onClick={() => setIsOpen(false)}
// //                       >
// //                         Trichology & Scalp Health
// //                       </a>
// //                     </div>
// //                   )}
// //                 </div>
// //                 <a
// //                   href="/contact"
// //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
// //                   onClick={() => setIsOpen(false)}
// //                 >
// //                   Our Team
// //                 </a>
// //                 <a
// //                   href="/contact"
// //                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4"
// //                   onClick={() => setIsOpen(false)}
// //                 >
// //                   Contact
// //                 </a>
// //                 {/* Mobile Location */}
// //                 <div className="pt-3 mt-2 border-t border-gray-200">
// //                   <p className="text-sm font-hatton font-light text-white/70 text-center py-2">
// //                     <span>1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </nav>
// //     </>
// //   );
// // };

// // export default Navigation;
// import { Menu, X, ChevronDown, Facebook, Instagram, Mail, Phone, Clock } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
// import Logo from "../assets/4.png";
// import Logo1 from "../assets/3.png";

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div className="fixed left-0 right-0 z-[60] bg-[#E2DBDF]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between py-2">
//             {/* Social Icons - Hidden on small screens */}
//             <div className="hidden md:flex items-center gap-4 pointer-events-auto">
//               <a
//                 href="https://www.facebook.com/people/Avya-Beauty-KE/61581716020463/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#595959] hover:text-primary transition-colors"
//               >
//                 <Facebook className="h-6 w-6" />
//               </a>
//               <a
//                 href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#595959] hover:text-primary transition-colors"
//               >
//                 <Instagram className="h-6 w-6" />
//               </a>
//               <a
//                 href="https://www.tiktok.com/@avya.beauty.ke"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#595959] hover:text-primary transition-colors"
//               >
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
//                 </svg>
//               </a>
//               <a href="mailto:info@avya.com" className="text-[#595959] hover:text-primary transition-colors">
//                 <Mail className="h-6 w-6" />
//               </a>
//               <a href="tel:+254123456789" className="text-[#595959] hover:text-primary transition-colors">
//                 <Phone className="h-6 w-6" />
//               </a>
//             </div>
//             <div className="hidden md:flex items-center gap-2 text-[#595959] text-sm font-hatton font-light">
//               <Clock className="h-6 w-6" />
//               <span>Open Mon-Sun: 9am to 8pm</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <nav className={`fixed top-4 left-4 right-4 z-50 w-auto transition-colors duration-300`}>
//         {/* Main Navigation Bar */}
//         <div className="rounded-3xl shadow-sm w-full">
//           <div className="px-3 sm:px-4 -my-4">
//             <div className="flex items-center justify-between gap-4">
//               {/* Left Side - Desktop Navigation Links */}
//               <div className="hidden lg:flex items-center gap-6 flex-1">
//                 <a
//                   href="/"
//                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/about"
//                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
//                 >
//                   About us
//                 </a>
//                 <div className="relative group">
//                   <button
//                     className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors flex items-center gap-2 whitespace-nowrap`}
//                   >
//                     Services
//                     <ChevronDown className="h-4 w-4" />
//                   </button>
//                   <div className="absolute top-full left-0 mt-2 w-56 border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 bg-white/10 hover:bg-white/90">
//                     <a
//                       href="/pricing"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors last:rounded-b-lg`}
//                     >
//                       See All
//                     </a>
//                     <a
//                       href="/hair-treatments"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}
//                     >
//                       Hair Treatments
//                     </a>
//                     <a
//                       href="/glam"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}
//                     >
//                       Six Hands Rituals
//                     </a>
//                     <a
//                       href="/nails"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}
//                     >
//                       Nails
//                     </a>
//                     <a
//                       href="/eyelash-extensions"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}
//                     >
//                       Eyelash Extensions
//                     </a>
//                     <a
//                       href="/permanent-makeup"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors last:rounded-b-lg`}
//                     >
//                       Permanent Makeup
//                     </a>
//                     <a
//                       href="/trichology"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors first:rounded-t-lg`}
//                     >
//                       Trichology & Scalp Health
//                     </a>
//                   </div>
//                 </div>
//                 <a
//                   href="/team"
//                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
//                 >
//                   Our Team
//                 </a>
//                 <a
//                   href="/contact"
//                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
//                 >
//                   Contact
//                 </a>
//               </div>

//               {/* Center - Logo */}
//               <div className="flex justify-start lg:justify-center lg:mx-8 -mt-2 -mb-6 order-1 lg:order-none">
//                 <a href="/" className="cursor-pointer">
//                   <img
//                     src={isScrolled ? Logo1 : Logo}
//                     alt="AVYA Logo"
//                     className="h-24 lg:h-[250px] w-auto object-contain transform scale-110"
//                   />
//                 </a>
//               </div>

//               {/* Right Side - Location (Desktop only) */}
//               <div className="hidden lg:flex items-center justify-end flex-1">
//                 <p className={`text-sm lg:text-base font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors text-right`}>
//                   <span className="text-base">1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
//                 </p>
//               </div>

//               {/* Mobile Menu Button */}
//               <div className="flex lg:hidden ml-auto order-last">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="h-26 w-26 hover:bg-white/5 -my-2"
//                   onClick={() => setIsOpen(!isOpen)}
//                 >
//                   {isOpen ? <X className="h-18 w-18 text-white" /> : <Menu className="h-18 w-18 text-white" />}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="lg:hidden mt-2 rounded-3xl shadow-lg overflow-hidden animate-in slide-in-from-top-5 duration-200 w-full">
//             <div className="px-6 py-4">
//               <div className="flex flex-col gap-1">
//                 <a
//                   href="/"
//                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/about"
//                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   About us
//                 </a>
//                 <div className="border-b border-gray-100">
//                   <button
//                     className="text-lg font-hatton font-light text-white hover:text-primary transition-colors flex items-center justify-between w-full text-left py-4"
//                     onClick={() => setIsServicesOpen(!isServicesOpen)}
//                   >
//                     Services
//                     <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
//                   </button>
//                   {isServicesOpen && (
//                     <div className="pb-3 pl-4 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200">
//                       <a
//                         href="/pricing"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         See All
//                       </a>
//                       <a
//                         href="/hairtreatments"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Hair Treatments & Restorative Rituals
//                       </a>
//                       <a
//                         href="/glam"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Six Hands Rituals
//                       </a>
//                       <a
//                         href="/nails"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Nails
//                       </a>
//                       <a
//                         href="/eyelash-extensions"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Eyelash Extensions
//                       </a>
//                       <a
//                         href="/permanent-makeup"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Permanent Makeup
//                       </a>
//                       <a
//                         href="/tricology"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Trichology & Scalp Health
//                       </a>
//                     </div>
//                   )}
//                 </div>
//                 <a
//                   href="/team"
//                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Our Team
//                 </a>
//                 <a
//                   href="/contact"
//                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Contact
//                 </a>
//                 {/* Mobile Location */}
//                 <div className="pt-3 mt-2 border-t border-gray-200">
//                   <p className="text-sm font-hatton font-light text-white/70 text-center py-2">
//                     <span>1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navigation;
// import { Menu, X, ChevronDown, Facebook, Instagram, Mail, Phone, Clock } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
// import Logo from "../assets/4.png";
// import Logo1 from "../assets/3.png";

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Top Bar with Social Icons and Hours */}
//       <div className={`fixed left-0 right-0 z-[60] bg-[#E2DBDF] transition-all duration-300 ${isScrolled ? 'top-0' : 'top-0'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between py-2">
//             {/* Social Icons - Hidden on small screens */}
//             <div className="hidden md:flex items-center gap-4 pointer-events-auto">
//               <a
//                 href="https://www.facebook.com/people/Avya-Beauty-KE/61581716020463/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#595959] hover:text-primary transition-colors"
//               >
//                 <Facebook className="h-6 w-6" />
//               </a>
//               <a
//                 href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#595959] hover:text-primary transition-colors"
//               >
//                 <Instagram className="h-6 w-6" />
//               </a>
//               <a
//                 href="https://www.tiktok.com/@avya.beauty.ke"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#595959] hover:text-primary transition-colors"
//               >
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
//                 </svg>
//               </a>
//               <a href="mailto:info@avya.com" className="text-[#595959] hover:text-primary transition-colors">
//                 <Mail className="h-6 w-6" />
//               </a>
//               <a href="tel:+254123456789" className="text-[#595959] hover:text-primary transition-colors">
//                 <Phone className="h-6 w-6" />
//               </a>
//             </div>
//             <div className="hidden md:flex items-center gap-2 text-[#595959] text-sm font-hatton font-light">
//               <Clock className="h-6 w-6" />
//               <span>Open Mon-Sun: 9am to 8pm</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav className={`fixed left-0 right-0 z-50 w-auto transition-all duration-300 ${isScrolled ? 'top-9 bg-[#E2DBDF]' : 'top-4'}`}>
//         <div className="rounded-3xl shadow-sm w-full">
//           <div className="px-3 sm:px-4 -my-4">
//             <div className="flex items-center justify-between gap-4">
//               {/* Left Side - Desktop Navigation Links */}
//               <div className="hidden lg:flex items-center gap-6 flex-1">
//                 <a
//                   href="/"
//                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/about"
//                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
//                 >
//                   About us
//                 </a>
//                 <div className="relative group">
//                   <button
//                     className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors flex items-center gap-2 whitespace-nowrap`}
//                   >
//                     Services
//                     <ChevronDown className="h-4 w-4" />
//                   </button>
//                   <div className="absolute top-full left-0 mt-2 w-56 border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 bg-white/10 hover:bg-white/90">
//                     <a
//                       href="/pricing"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors last:rounded-b-lg`}
//                     >
//                       See All
//                     </a>
//                     <a
//                       href="/hair-treatments"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}
//                     >
//                       Hair Treatments
//                     </a>
//                     <a
//                       href="/glam"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}
//                     >
//                       Six Hands Rituals
//                     </a>
//                     <a
//                       href="/nails"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}
//                     >
//                       Nails
//                     </a>
//                     <a
//                       href="/eyelash-extensions"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}
//                     >
//                       Eyelash Extensions
//                     </a>
//                     <a
//                       href="/permanent-makeup"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors last:rounded-b-lg`}
//                     >
//                       Permanent Makeup
//                     </a>
//                     <a
//                       href="/trichology"
//                       className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors first:rounded-t-lg`}
//                     >
//                       Trichology & Scalp Health
//                     </a>
//                   </div>
//                 </div>
//                 <a
//                   href="/team"
//                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
//                 >
//                   Our Team
//                 </a>
//                 <a
//                   href="/contact"
//                   className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}
//                 >
//                   Contact
//                 </a>
//               </div>

//               {/* Center - Logo */}
//               <div className="flex justify-start lg:justify-center lg:mx-8 -mt-2 -mb-4 order-1 lg:order-none">
//                 <a href="/" className="cursor-pointer">
//                   <img
//                     src={isScrolled ? Logo1 : Logo}
//                     alt="AVYA Logo"
//                     className={`w-auto object-contain transform scale-110 transition-all duration-300 ${
//                       isScrolled ? 'h-20 lg:h-32' : 'h-24 lg:h-[250px]'
//                     }`}
//                   />
//                 </a>
//               </div>

//               {/* Right Side - Location (Desktop only) */}
//               <div className="hidden lg:flex items-center justify-end flex-1">
//                 <p className={`text-sm lg:text-base font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors text-right`}>
//                   <span className="text-base">1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
//                 </p>
//               </div>

//               {/* Mobile Menu Button */}
//               <div className="flex lg:hidden ml-auto order-last">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="h-26 w-26 hover:bg-white/5 -my-2"
//                   onClick={() => setIsOpen(!isOpen)}
//                 >
//                   {isOpen ? <X className="h-18 w-18 text-white" /> : <Menu className="h-18 w-18 text-white" />}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="lg:hidden mt-2 rounded-3xl shadow-lg overflow-hidden animate-in slide-in-from-top-5 duration-200 w-full">
//             <div className="px-6 py-4">
//               <div className="flex flex-col gap-1">
//                 <a
//                   href="/"
//                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/about"
//                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   About us
//                 </a>
//                 <div className="border-b border-gray-100">
//                   <button
//                     className="text-lg font-hatton font-light text-white hover:text-primary transition-colors flex items-center justify-between w-full text-left py-4"
//                     onClick={() => setIsServicesOpen(!isServicesOpen)}
//                   >
//                     Services
//                     <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
//                   </button>
//                   {isServicesOpen && (
//                     <div className="pb-3 pl-4 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200">
//                       <a
//                         href="/pricing"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         See All
//                       </a>
//                       <a
//                         href="/hairtreatments"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Hair Treatments & Restorative Rituals
//                       </a>
//                       <a
//                         href="/glam"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Six Hands Rituals
//                       </a>
//                       <a
//                         href="/nails"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Nails
//                       </a>
//                       <a
//                         href="/eyelash-extensions"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Eyelash Extensions
//                       </a>
//                       <a
//                         href="/permanent-makeup"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Permanent Makeup
//                       </a>
//                       <a
//                         href="/tricology"
//                         className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Trichology & Scalp Health
//                       </a>
//                     </div>
//                   )}
//                 </div>
//                 <a
//                   href="/team"
//                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Our Team
//                 </a>
//                 <a
//                   href="/contact"
//                   className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Contact
//                 </a>
//                 {/* Mobile Location */}
//                 <div className="pt-3 mt-2 border-t border-gray-200">
//                   <p className="text-sm font-hatton font-light text-white/70 text-center py-2">
//                     <span>1<sup>st</sup></span> Floor, Mwanzi Market, Westlands
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navigation;

//logo disappears
import { Menu, X, ChevronDown, Facebook, Instagram, Mail, Phone, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";

import Logo from "../assets/4.png";

import Logo1 from "../assets/3.png";

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      if (scrollTop > 10) {

        setIsScrolled(true);

      } else {

        setIsScrolled(false);

      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <>

      {/* <div className="fixed left-0 right-0 z-[60] bg-[#E2DBDF]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between py-2">

            

            <div className="hidden md:flex items-center gap-4 pointer-events-auto">

              <a

                href="https://www.facebook.com/people/Avya-Beauty-KE/61581716020463/"

                target="_blank"

                rel="noopener noreferrer"

                className="text-[#595959] hover:text-primary transition-colors"

              >

                <Facebook className="h-6 w-6" />

              </a>

              <a

                href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"

                target="_blank"

                rel="noopener noreferrer"

                className="text-[#595959] hover:text-primary transition-colors"

              >

                <Instagram className="h-6 w-6" />

              </a>

              <a

                href="https://www.tiktok.com/@avya.beauty.ke"

                target="_blank"

                rel="noopener noreferrer"

                className="text-[#595959] hover:text-primary transition-colors"

              >

                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">

                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />

                </svg>

              </a>

              <a href="mailto:info@avya.com" className="text-[#595959] hover:text-primary transition-colors">

                <Mail className="h-6 w-6" />

              </a>

              <a href="tel:+254123456789" className="text-[#595959] hover:text-primary transition-colors">

                <Phone className="h-6 w-6" />

              </a>

            </div>

            <div className="hidden md:flex items-center gap-2 text-[#595959] text-sm font-hatton font-light">

              <Clock className="h-6 w-6" />

              <span>Open Mon-Sun: 9am to 8pm</span>

            </div>

          </div>

        </div>

      </div> */}
      <div className="fixed left-0 right-0 z-[60] bg-[#E2DBDF] hidden md:block">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between py-2">
      
      <div className="flex items-center gap-4 pointer-events-auto">
        <a
          href="https://www.facebook.com/people/Avya-Beauty-KE/61581716020463/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#595959] hover:text-primary transition-colors"
        >
          <Facebook className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com/avyabeautyke?igsh=ZDJocGkwbjM1MWZi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#595959] hover:text-primary transition-colors"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a
          href="https://www.tiktok.com/@avya.beauty.ke"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#595959] hover:text-primary transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </a>
        <a href="mailto:info@avya.com" className="text-[#595959] hover:text-primary transition-colors">
          <Mail className="h-6 w-6" />
        </a>
        <a href="tel:+254123456789" className="text-[#595959] hover:text-primary transition-colors">
          <Phone className="h-6 w-6" />
        </a>
      </div>
      <div className="flex items-center gap-2 text-[#595959] text-sm font-hatton font-light">
        <Clock className="h-6 w-6" />
        <span>Open Mon-Sun: 9am to 8pm</span>
      </div>
    </div>
  </div>
</div>


      <nav className={`fixed top-4 left-4 right-4 z-50 w-auto transition-colors duration-300`}>

        {/* Main Navigation Bar */}

        <div className="rounded-3xl shadow-sm w-full">

          <div className="px-3 sm:px-4 -my-4">

            <div className="flex items-center justify-between gap-4">

              {/* Left Side - Desktop Navigation Links */}

              <div className="hidden lg:flex items-center gap-6 flex-1">

                <a

                  href="/"

                  className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}

                >

                  Home

                </a>

                <a

                  href="/about"

                  className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}

                >

                  About us

                </a>

                <div className="relative group">

                  <button

                    className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors flex items-center gap-2 whitespace-nowrap`}

                  >

                    Services

                    <ChevronDown className="h-4 w-4" />

                  </button>

                  <div className="absolute top-full left-0 mt-2 w-56 border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 bg-white/10 hover:bg-white/90">

                    <a

                      href="/pricing"

                      className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors last:rounded-b-lg`}

                    >

                      See All

                    </a>

                    <a

                      href="/hair-treatments"

                      className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}

                    >

                      Hair Treatments

                    </a>

                    <a

                      href="/glam"

                      className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}

                    >

                      Six Hands Rituals

                    </a>

                    <a

                      href="/nails"

                      className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}

                    >

                      Nails

                    </a>

                    <a

                      href="/eyelash-extensions"

                      className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors`}

                    >

                      Eyelash Extensions

                    </a>

                    <a

                      href="/permanent-makeup"

                      className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors last:rounded-b-lg`}

                    >

                      Permanent Makeup

                    </a>

                    <a

                      href="/trichology"

                      className={`block px-4 py-3 text-sm font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors first:rounded-t-lg`}

                    >

                      Trichology & Scalp Health

                    </a>

                  </div>

                </div>

                <a

                  href="/team"

                  className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}

                >

                  Our Team

                </a>

                <a

                  href="/contact"

                  className={`text-base lg:text-lg font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors whitespace-nowrap`}

                >

                  Contact

                </a>

              </div>

              {/* Center - Logo */}

              <div className="flex justify-start lg:justify-center lg:mx-8 -mt-2 -mb-6 order-1 lg:order-none">

                <a href="/" className="cursor-pointer">

                  <img

                    src={isScrolled ? Logo1 : Logo}

                    alt="AVYA Logo"

                    className={`h-${isScrolled ? '16' : '24'} lg:h-[${isScrolled ? '100px' : '250px'}] w-auto object-contain transform scale-110 transition-all duration-300 ease-in-out`}

                  />

                </a>

              </div>

              {/* Right Side - Location (Desktop only) */}

              <div className="hidden lg:flex items-center justify-end flex-1">

                <p className={`text-sm lg:text-base font-hatton font-light ${isScrolled ? 'text-[#595959]' : 'text-white'} hover:text-primary transition-colors text-right`}>

                  <span className="text-base">1<sup>st</sup></span> Floor, Mwanzi Market, Westlands

                </p>

              </div>

              {/* Mobile Menu Button */}

              <div className="flex lg:hidden ml-auto order-last">

                <Button

                  variant="ghost"

                  size="icon"

                  className="h-26 w-26 hover:bg-white/5 -my-2"

                  onClick={() => setIsOpen(!isOpen)}

                >

                  {isOpen ? <X className="h-18 w-18 text-white" /> : <Menu className="h-18 w-18 text-white" />}

                </Button>

              </div>

            </div>

          </div>

        </div>

        {/* Mobile Menu Dropdown */}

        {isOpen && (

          <div className="lg:hidden mt-2 rounded-3xl shadow-lg overflow-hidden animate-in slide-in-from-top-5 duration-200 w-full">

            <div className="px-6 py-4">

              <div className="flex flex-col gap-1">

                <a

                  href="/"

                  className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"

                  onClick={() => setIsOpen(false)}

                >

                  Home

                </a>

                <a

                  href="/about"

                  className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"

                  onClick={() => setIsOpen(false)}

                >

                  About us

                </a>

                <div className="border-b border-gray-100">

                  <button

                    className="text-lg font-hatton font-light text-white hover:text-primary transition-colors flex items-center justify-between w-full text-left py-4"

                    onClick={() => setIsServicesOpen(!isServicesOpen)}

                  >

                    Services

                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />

                  </button>

                  {isServicesOpen && (

                    <div className="pb-3 pl-4 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200">

                      <a

                        href="/pricing"

                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"

                        onClick={() => setIsOpen(false)}

                      >

                        See All

                      </a>

                      <a

                        href="/hairtreatments"

                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"

                        onClick={() => setIsOpen(false)}

                      >

                        Hair Treatments & Restorative Rituals

                      </a>

                      <a

                        href="/glam"

                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"

                        onClick={() => setIsOpen(false)}

                      >

                        Six Hands Rituals

                      </a>

                      <a

                        href="/nails"

                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"

                        onClick={() => setIsOpen(false)}

                      >

                        Nails

                      </a>

                      <a

                        href="/eyelash-extensions"

                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"

                        onClick={() => setIsOpen(false)}

                      >

                        Eyelash Extensions

                      </a>

                      <a

                        href="/permanent-makeup"

                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"

                        onClick={() => setIsOpen(false)}

                      >

                        Permanent Makeup

                      </a>

                      <a

                        href="/tricology"

                        className="text-base font-hatton font-light text-white/70 hover:text-primary transition-colors py-3"

                        onClick={() => setIsOpen(false)}

                      >

                        Trichology & Scalp Health

                      </a>

                    </div>

                  )}

                </div>

                <a

                  href="/team"

                  className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4 border-b border-gray-100"

                  onClick={() => setIsOpen(false)}

                >

                  Our Team

                </a>

                <a

                  href="/contact"

                  className="text-lg font-hatton font-light text-white hover:text-primary transition-colors py-4"

                  onClick={() => setIsOpen(false)}

                >

                  Contact

                </a>

                {/* Mobile Location */}

                <div className="pt-3 mt-2 border-t border-gray-200">

                  <p className="text-sm font-hatton font-light text-white/70 text-center py-2">

                    <span>1<sup>st</sup></span> Floor, Mwanzi Market, Westlands

                  </p>

                </div>

              </div>

            </div>

          </div>

        )}

      </nav>

    </>

  );

};

export default Navigation;