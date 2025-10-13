// import { Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Navigation = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Left side - Location */}
//           <div className="flex-1">
//             <p className="text-sm text-muted-foreground font-playfair">
//               Based in: Kenya, Africa
//             </p>
//           </div>

//           {/* Center - Logo */}
//           <div className="flex-1 flex justify-center">
//             <h1 className="text-2xl font-playfair font-semibold tracking-wider text-foreground">
//               AVYA
//             </h1>
//           </div>

//           {/* Right side - Menu */}
//           <div className="flex-1 flex justify-end items-center gap-8">
//             <div className="hidden md:flex items-center gap-8">
//               <a
//                 href="#home"
//                 className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
//               >
//                 Home
//               </a>
//               <a
//                 href="#about"
//                 className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
//               >
//                 About us
//               </a>
//               <a
//                 href="#services"
//                 className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
//               >
//                 Services
//               </a>
//               <a
//                 href="#contact"
//                 className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
//               >
//                 Contact
//               </a>
//             </div>
//             <Button variant="ghost" size="icon" className="md:hidden">
//               <Menu className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Logo from "../assets/4.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Location */}
          <div className="flex-1">
            <p className="text-sm text-muted-foreground font-playfair">
              Based in: Kenya, Africa
            </p>
          </div>

          {/* Center - Logo and Text */}
          <div className="flex-1 flex justify-center items-center gap-2">
            <img 
              src={Logo}
              alt="AVYA Logo" 
              className="h-10 object-contain" 
            />
            {/* <h1 className="text-2xl font-playfair font-semibold tracking-wider text-foreground">
              AVYA
            </h1> */}
          </div>


          {/* Right side - Menu */}
          <div className="flex-1 flex justify-end items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
              >
                About us
              </a>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="text-sm font-playfair text-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Services
                  <ChevronDown className="h-3 w-3" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="#trichology"
                    className="block px-4 py-3 text-sm font-playfair text-foreground hover:bg-accent hover:text-primary transition-colors"
                  >
                    Trichology & Scalp Health
                  </a>
                  <a
                    href="#treatments"
                    className="block px-4 py-3 text-sm font-playfair text-foreground hover:bg-accent hover:text-primary transition-colors"
                  >
                    Hair Treatments & Restorative Rituals
                  </a>
                  <a
                    href="#glam"
                    className="block px-4 py-3 text-sm font-playfair text-foreground hover:bg-accent hover:text-primary transition-colors"
                  >
                    Premium Glam Services
                  </a>
                </div>
              </div>

              <a
                href="#contact"
                className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About us
              </a>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="text-sm font-playfair text-foreground hover:text-primary transition-colors flex items-center gap-1 w-full text-left"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className={`h-3 w-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <a
                      href="#trichology"
                      className="text-sm font-playfair text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Trichology & Scalp Health
                    </a>
                    <a
                      href="#treatments"
                      className="text-sm font-playfair text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Hair Treatments & Restorative Rituals
                    </a>
                    <a
                      href="#glam"
                      className="text-sm font-playfair text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Premium Glam Services
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className="text-sm font-playfair text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;