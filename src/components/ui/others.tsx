import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="bg-[#E2DBDF]">
      {/* Section 1: Treatment Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-playfair font-light text-[#262626] mb-2">
                Our Specialties
              </h2>
              <p className="text-sm text-[#595959] max-w-md">
                Discover our range of premium services tailored to your beauty and wellness needs.
              </p>
            </div>
            <Button className="bg-[#262626] hover:bg-[#B0C2B0] text-white px-8 py-6 text-sm font-playfair tracking-wider mt-4 md:mt-0">
              Book Your Appointment
            </Button>
          </div>
          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Trichology & Scalp Health */}
            <div className="group cursor-pointer text-center">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                <img
                  src="https://plus.unsplash.com/premium_photo-1674841252227-02aff6975847?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
                  alt="Hair Treatment & Styling"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-playfair text-[#262626] mb-2">
                Trichology & Scalp Health
              </h3>
              <p className="text-sm text-[#595959] mb-4 px-2">
                Diagnostic-led care for hair loss, thinning, dandruff, and more.
              </p>
              <Button className="bg-[#262626] hover:bg-[#B0C2B0] text-white px-6 py-4 text-xs font-playfair tracking-wider">
                Book a Scalp Consultation
              </Button>
            </div>
            {/* Hair Treatments & Restorative Rituals */}
            <div className="group cursor-pointer text-center">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop"
                  alt="Hair Treatments"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-playfair text-[#262626] mb-2">
                Hair Treatments & Restorative Rituals
              </h3>
              <p className="text-sm text-[#595959] mb-4 px-2">
                Nanoplastia, Hair Botox, Cold Recovery, Olaplex and other rare international therapies.
              </p>
              <Button className="bg-[#262626] hover:bg-[#B0C2B0] text-white px-6 py-4 text-xs font-playfair tracking-wider">
                Explore Treatments
              </Button>
            </div>
            {/* Premium Glam Services */}
            <div className="group cursor-pointer text-center">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=600&fit=crop"
                  alt="Glam Services"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-playfair text-[#262626] mb-2">
                Premium Glam Services
              </h3>
              <p className="text-sm text-[#595959] mb-4 px-2">
                Styling, blowouts, lace installs, colour, and luxury extension care.
              </p>
              <Button className="bg-[#262626] hover:bg-[#B0C2B0] text-white px-6 py-4 text-xs font-playfair tracking-wider">
                See Glam Menu
              </Button>
            </div>
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            <div className="w-16 h-1 bg-[#262626] rounded-full"></div>
            <div className="w-16 h-1 bg-[#C1B5C6] rounded-full"></div>
            <div className="w-16 h-1 bg-[#C1B5C6] rounded-full"></div>
          </div>
        </div>
      </section>
      {/* Section 2: About Us / Customized Treatments */}
      <section className="bg-[#E2DBDF] py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Side */}
            <div className="relative">
              {/* ABOUT US Label */}
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <span className="text-xs sm:text-[15px] font-playfair text-[#262626] tracking-widest">
                  ABOUT US
                </span>
                <div className="h-[1px] w-16 sm:w-24 bg-[#262626]"></div>
              </div>
              {/* Heading for Small Screens */}
              <div className="lg:hidden mb-8 md:mb-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#262626] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-light tracking-wide leading-tight">
                    CUSTOMIZED TREATMENTS FOR YOUR <br className="hidden sm:block" />
                    RELAXATION AND RADIANCE.
                  </h2>
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#262626] animate-bounce" />
                </div>
              </div>
              {/* Mobile Images - Stacked */}
              <div className="lg:hidden space-y-4 mb-6">
                {/* First Image */}
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=400&fit=crop"
                    alt="Spa essentials"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Second Image */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=375&fit=crop"
                    alt="Spa bathroom"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Third Image */}
                <div className="w-full aspect-[1/1] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop"
                    alt="Spa sauna"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Desktop Images - Overlapping */}
              <div className="hidden lg:block relative w-full max-w-[850px] mx-auto mb-6" style={{ aspectRatio: '850/600' }}>
                {/* First Image - Top Left */}
                <div
                  className="absolute top-0 left-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg z-10"
                  style={{ width: '30.6%', height: '66.7%' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=400&fit=crop"
                    alt="Spa essentials"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Second Image - Center Right (slightly overlapping) */}
                <div
                  className="absolute rounded-2xl md:rounded-3xl overflow-hidden shadow-lg z-20"
                  style={{
                    top: '20%',
                    left: '37.6%',
                    width: '66.2%',
                    height: '66.7%'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=375&fit=crop"
                    alt="Spa bathroom"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Third Image - Bottom Right */}
                <div
                  className="absolute bottom-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg z-30"
                  style={{
                    right: '-42.4%',
                    width: '32.9%',
                    height: '63.3%'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop"
                    alt="Spa sauna"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Trust Badge */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex -space-x-2">
                  {[1, 5, 9, 16].map((img) => (
                    <div
                      key={img}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?img=${img}`}
                        alt="Customer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs md:text-sm font-playfair text-[#262626] leading-snug">
                  TRUSTED BY HUNDREDS FOR PERSONALIZED, AND <br className="hidden sm:block" />
                  PROFESSIONAL CARE.
                </p>
              </div>
            </div>
            {/* Right Side */}
            <div className="flex flex-col justify-center text-left lg:text-right mt-8 lg:mt-0">
              {/* Heading for Large Screens */}
              <div className="hidden lg:block">
                <h2 className="text-[#262626] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-light tracking-wide leading-tight mb-8 md:mb-10">
                  CUSTOMIZED TREATMENTS FOR YOUR <br className="hidden sm:block" />
                  RELAXATION AND RADIANCE.
                </h2>
              </div>
              {/* Scroll Arrow for Large Screens */}
              <div className="hidden lg:flex justify-end">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[1px] h-20 md:h-32 bg-[#262626]"></div>
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#262626] animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
