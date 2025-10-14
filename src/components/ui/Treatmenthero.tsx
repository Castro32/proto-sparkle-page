import { Button } from "@/components/ui/button";

const TreatmentsHero = () => {
  return (
    <section className="bg-[#E2DBDF] py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-[#595959] leading-tight">
              TAILORED TREATMENTS FOR THE BEST VERSION OF YOU.
            </h2>
            
            <p className="text-base md:text-lg text-[#262626] leading-relaxed font-playfair">
               Welcome to Avya, Kenya’s first science-meets-beauty luxury salon. Combining advanced trichology, rare international techniques, and premium glam services, we deliver confidence, transformation, and wellness all under one exquisite roof.
            </p>

            <Button 
              className="bg-[#262626] hover:bg-[#B0C2B0] text-white px-8 py-6 text-base font-playfair tracking-wider"
            >
              EXPLORE SERVICES
            </Button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            {/* First Image - Face treatment diagram */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=600&fit=crop"
                alt="Face treatment diagram"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second Image - Three diverse women */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=600&fit=crop"
                alt="Diverse beauty"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsHero;