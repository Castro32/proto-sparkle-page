import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import TreatmentsHero from "@/components/ui/Treatmenthero";
import ServicesSection from "@/components/ui/others";
import StayConnected from "@/components/ui/stayconnected";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <TreatmentsHero/>
      <ServicesSection/>
      <StayConnected/>
    </div>
  );
};

export default Index;
