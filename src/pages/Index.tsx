import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import TreatmentsHero from "@/components/ui/Treatmenthero";
import ServicesSection from "@/components/ui/others";
import StayConnected from "@/components/ui/stayconnected";
import ScrollTeaser from "@/components/ui/scrollteasers";
import SpaAboutSection from "@/components/ui/homeabout";
import PartnersSection from "@/components/ui/parteners";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <TreatmentsHero/>
      {/* <ScrollTeaser /> */}
      <ServicesSection/>
      <SpaAboutSection />
      <PartnersSection/>
      <StayConnected/>
    </div>
  );
};

export default Index;
