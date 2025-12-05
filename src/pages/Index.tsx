// import Navigation from "@/components/Navigation";
// import HeroSlider from "@/components/HeroSlider";
// import TreatmentsHero from "@/components/ui/Treatmenthero";
// import ServicesSection from "@/components/ui/others";
// import StayConnected from "@/components/ui/stayconnected";
// import ScrollTeaser from "@/components/ui/scrollteasers";
// import SpaAboutSection from "@/components/ui/homeabout";
// import PartnersSection from "@/components/ui/parteners";
// import Team from "./OurTeam";

// const Index = () => {
//   return (
//     <div className="min-h-screen">
//       <Navigation />
//       <HeroSlider />
//       <TreatmentsHero/>
//       {/* <ScrollTeaser /> */}
//       <ServicesSection/>
//       <Team />
//       {/* <SpaAboutSection /> */}
//       <PartnersSection/>
//       <StayConnected/>
//     </div>
//   );
// };

// export default Index;
import { useState, useEffect } from 'react'; // Import hooks
import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import TreatmentsHero from "@/components/ui/Treatmenthero";
import ServicesSection from "@/components/ui/others";
import StayConnected from "@/components/ui/stayconnected";
import ScrollTeaser from "@/components/ui/scrollteasers";
import SpaAboutSection from "@/components/ui/homeabout";
import PartnersSection from "@/components/ui/parteners";
import Team from "./OurTeam";
import NewsletterPopup from "@/components/NewsletterPopup"; // Import the popup

const Index = () => {
  // State for popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Trigger popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <HeroSlider />
      <TreatmentsHero/>
      {/* <ScrollTeaser /> */}
      <ServicesSection/>
      <Team />
      {/* <SpaAboutSection /> */}
      <PartnersSection/>
      <StayConnected/>

      {/* Render the Popup */}
      <NewsletterPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </div>
  );
};

export default Index;