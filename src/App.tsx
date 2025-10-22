import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AvyaHome from "./pages/about";
import Navigation from "./components/Navigation";
import ContactPage from "./pages/contact";
import Footer from "./components/ui/footer";
import WhatsAppButton from "./components/WhatsAppButton";
import TeamPage from "./pages/OurTeam";
import Glam from "./pages/glam";
import Trichology from "./pages/Trichology";
import Treatments from "./pages/Treatments";
import Nail from "./pages/nail";
import PermanentMakeup from "./pages/permanent-makeup";
import Pricing from "./pages/pricing";
import Eyelash from "./pages/eyelash";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ✅ Make Navigation global */}
        <Navigation />

        {/* ✅ Add padding so content isn’t hidden behind fixed navbar */}
        <main >
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
            <Route path="/glam" element={<Glam />} />
            <Route path="/eyelash-extensions" element={<Eyelash />} />
            <Route path="/permanent-makeup" element={<PermanentMakeup/>}/>
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
