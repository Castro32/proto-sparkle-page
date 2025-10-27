// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import AvyaHome from "./pages/about";
// import Navigation from "./components/Navigation";
// import ContactPage from "./pages/contact";
// import Footer from "./components/ui/footer";
// import WhatsAppButton from "./components/WhatsAppButton";
// import BookNowButton from "./components/BookNowButton";
// import TeamPage from "./pages/OurTeam";
// import Glam from "./pages/glam";
// import Trichology from "./pages/Trichology";
// import Treatments from "./pages/Treatments";
// import Nail from "./pages/nail";
// import PermanentMakeup from "./pages/permanent-makeup";
// import Pricing from "./pages/pricing";
// import Eyelash from "./pages/eyelash";
// import LoyaltyProgram from "./pages/loyalty";
// import NewsletterPopup from "./components/NewsletterPopup.tsx";
// import { useNewsletterPopup } from "./hooks/useNewsletterPopup";
// import NewsletterTestControls from "./components/NewsletterTestControls";
// import Logo from "@/assets/4.png"

// const queryClient = new QueryClient();

// const AppContent = () => {
//   const { isOpen, closePopup } = useNewsletterPopup();

//   return (
//     <>
//       <BrowserRouter>
//         <Navigation />

//         <main >
//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/about" element={<AvyaHome />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/team" element={<TeamPage />} />
//             <Route path="/glam" element={<Glam />} />
//             <Route path="/trichology" element={<Trichology />} />
//             <Route path="/hair-treatments" element={<Treatments />} />
//             <Route path="/nails" element={<Nail />} />
//             <Route path="/pricing" element={<Pricing />} />
//             <Route path="/glam" element={<Glam />} />
//             <Route path="/eyelash-extensions" element={<Eyelash />} />
//             <Route path="/permanent-makeup" element={<PermanentMakeup/>}/>
//             <Route path="/loyalty" element={<LoyaltyProgram />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main>
        
//         <Footer />
//         <WhatsAppButton />
//         <BookNowButton />
        
//         <NewsletterPopup isOpen={isOpen} onClose={closePopup} />
        
//       </BrowserRouter>
//     </>
//   );
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <AppContent />
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AvyaHome from "./pages/about";
import Navigation from "./components/Navigation";
import ContactPage from "./pages/contact";
import Footer from "./components/ui/footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BookNowButton from "./components/BookNowButton";
import TeamPage from "./pages/OurTeam";
import Glam from "./pages/glam";
import Trichology from "./pages/Trichology";
import Treatments from "./pages/Treatments";
import Nail from "./pages/nail";
import PermanentMakeup from "./pages/permanent-makeup";
import Pricing from "./pages/pricing";
import Eyelash from "./pages/eyelash";
import LoyaltyProgram from "./pages/loyalty";
import NewsletterPopup from "./components/NewsletterPopup.tsx";
import { useNewsletterPopup } from "./hooks/useNewsletterPopup";
import Logo from "@/assets/3.png"

const queryClient = new QueryClient();

// Loading overlay component
// const RouteLoadingOverlay = ({ isLoading }: { isLoading: boolean }) => {
//   if (!isLoading) return null;
  
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
//       <div className="flex flex-col items-center gap-4">
//         <img 
//           src={Logo} 
//           alt="Loading" 
//           className="w-32 h-32 object-contain animate-pulse"
//         />
//         <div className="flex gap-2">
//           <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
//           <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
//           <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

const AppContent = () => {
  const { isOpen, closePopup } = useNewsletterPopup();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Start loading
    setIsLoading(true);

    // Show loading for longer to ensure visibility (adjust as needed: 800-1500ms recommended)
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Scroll to top on route change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* <RouteLoadingOverlay isLoading={isLoading} /> */}
      
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AvyaHome />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/glam" element={<Glam />} />
          <Route path="/trichology" element={<Trichology />} />
          <Route path="/hair-treatments" element={<Treatments />} />
          <Route path="/nails" element={<Nail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/eyelash-extensions" element={<Eyelash />} />
          <Route path="/permanent-makeup" element={<PermanentMakeup/>}/>
          <Route path="/loyalty" element={<LoyaltyProgram />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer />
      <WhatsAppButton />
      <BookNowButton />
      
      {/* <NewsletterPopup isOpen={isOpen} onClose={closePopup} /> */}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;