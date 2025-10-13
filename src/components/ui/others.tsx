import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="bg-[#f5ebe0]">
      {/* Section 1: Treatment Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl md:text-5xl font-playfair font-light text-[#8b6f47] mb-4 md:mb-0">
              TAILORED TREATMENTS FOR THE<br />BEST VERSION OF YOU.
            </h2>
            <Button className="bg-[#8b6f47] hover:bg-[#6d5638] text-white px-8 py-6 text-sm font-playfair tracking-wider">
              EXPLORE NOW
            </Button>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Hair Treatment Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop"
                  alt="Hair Treatment & Styling"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-playfair text-[#8b6f47] text-center">
                HAIR TREATMENT & STYLING
              </h3>
            </div>

            {/* Brows and Lashes Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop"
                  alt="Brows and Lashes"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-playfair text-[#8b6f47] text-center">
                BROWS AND LASHES
              </h3>
            </div>

            {/* Lips Treatments Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop"
                  alt="Lips Treatments"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-playfair text-[#8b6f47] text-center">
                LIPS TREATMENTS
              </h3>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            <div className="w-16 h-1 bg-[#8b6f47] rounded-full"></div>
            <div className="w-16 h-1 bg-[#c9b5a0] rounded-full"></div>
            <div className="w-16 h-1 bg-[#c9b5a0] rounded-full"></div>
          </div>
        </div>
      </section>


      {/* <section className="bg-[#f8efe9] py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[15px] font-playfair text-[#7b4c2e] tracking-widest">
                ABOUT US
              </span>
              <div className="h-[1px] w-24 bg-[#7b4c2e]"></div>
            </div>

            <div className="relative w-[850px] h-[600px] mt-20 overflow-visible">
                <div className="absolute top-0 left-0 rounded-3xl overflow-hidden w-[260px] h-[340px] shadow-lg z-10">
                    <img
                    src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=400&fit=crop"
                    alt="Spa essentials"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute top-[120px] left-80 rounded-3xl overflow-hidden w-[520px] h-[280px] shadow-lg z-20">
                    <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=375&fit=crop"
                    alt="Spa bathroom"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute bottom-0 -right-80 rounded-3xl overflow-hidden w-[280px] h-[320px] shadow-lg z-30">
                    <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop"
                    alt="Spa sauna"
                    className="w-full h-full object-cover"
                    />
                </div>
                </div>

            <div className="flex items-center gap-3 mb-16">
              <div className="flex -space-x-2">
                {[1, 5, 9, 16].map((img) => (
                  <div
                    key={img}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?img=${img}`}
                      alt="Customer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-playfair text-[#7b4c2e] leading-snug">
                TRUSTED BY HUNDREDS FOR PERSONALIZED, AND <br />
                PROFESSIONAL CARE.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center text-right">
            <h2 className="text-[#7b4c2e] text-3xl md:text-5xl font-playfair font-light tracking-wide leading-tight mb-10">
              CUSTOMIZED TREATMENTS FOR YOUR <br />
              RELAXATION AND RADIANCE.
            </h2>
            <div className="flex justify-end">
              <div className="flex flex-col items-center gap-2">
                <div className="w-[1px] h-32 bg-[#7b4c2e]"></div>
                <ChevronDown className="w-6 h-6 text-[#7b4c2e] animate-bounce" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section> */}
    {/* Section 2: About Us / Customized Treatments */}
<section className="bg-[#f8efe9] py-12 sm:py-16 md:py-24 relative overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 md:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
      {/* Left Side */}
      <div className="relative">
        {/* ABOUT US Label */}
        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
          <span className="text-xs sm:text-[15px] font-playfair text-[#7b4c2e] tracking-widest">
            ABOUT US
          </span>
          <div className="h-[1px] w-16 sm:w-24 bg-[#7b4c2e]"></div>
        </div>

        {/* Image Arrangement - Responsive Scaling */}
        <div className="relative w-full max-w-[850px] mx-auto" style={{ aspectRatio: '850/600' }}>
          {/* First Image - Top Left */}
          <div className="absolute top-0 left-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg z-10"
               style={{ width: '30.6%', height: '56.7%' }}>
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=400&fit=crop"
              alt="Spa essentials"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Image - Center Right (slightly overlapping) */}
          <div className="absolute rounded-2xl md:rounded-3xl overflow-hidden shadow-lg z-20"
               style={{ 
                 top: '20%', 
                 left: '37.6%', 
                 width: '61.2%', 
                 height: '46.7%' 
               }}>
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=375&fit=crop"
              alt="Spa bathroom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third Image - Bottom Right */}
          <div className="absolute bottom-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg z-30"
               style={{ 
                 right: '-9.4%', 
                 width: '32.9%', 
                 height: '53.3%' 
               }}>
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop"
              alt="Spa sauna"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Trust Badge */}
        <div className="flex items-center gap-2 md:gap-3 mt-6 md:mt-0 md:mb-16">
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
          <p className="text-xs md:text-sm font-playfair text-[#7b4c2e] leading-snug">
            TRUSTED BY HUNDREDS FOR PERSONALIZED, AND <br className="hidden sm:block" />
            PROFESSIONAL CARE.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center text-left lg:text-right mt-8 lg:mt-0">
        <h2 className="text-[#7b4c2e] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-light tracking-wide leading-tight mb-8 md:mb-10">
          CUSTOMIZED TREATMENTS FOR YOUR <br className="hidden sm:block" />
          RELAXATION AND RADIANCE.
        </h2>

        {/* Scroll Arrow */}
        <div className="flex justify-start lg:justify-end">
          <div className="flex flex-col items-center gap-2">
            <div className="w-[1px] h-20 md:h-32 bg-[#7b4c2e]"></div>
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#7b4c2e] animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
       {/* <section className="py-16 md:py-24 bg-[#f5f1ed]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-light text-[#2a2a2a] leading-tight mb-4">
              *VISIT US TODAY AND DISCOVER YOUR<br />
              VERY BEST SKIN
            </h2>
            <div className="flex items-center gap-4 mt-6">
              <div className="h-[1px] w-24 bg-[#8b6f47]"></div>
              <span className="text-sm font-playfair text-[#8b6f47] tracking-wider">
                AVYA
              </span>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md h-[400px]">
              <div className="relative z-10 w-80 h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=600&fit=crop"
                  alt="Skincare routine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-16 -left-8 w-64 h-80 rounded-2xl overflow-hidden transform -rotate-6 opacity-70">
                <img
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=500&fit=crop"
                  alt="Spa background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-16 -right-8 w-64 h-80 rounded-2xl overflow-hidden transform rotate-6 opacity-70">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=500&fit=crop"
                  alt="Spa background"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex lg:justify-end">
            <button className="bg-[#8b6f47] hover:bg-[#6d5638] text-white px-10 py-6 text-base font-playfair tracking-wider">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </section> */}
    </div>
  );
};

export default ServicesSection;