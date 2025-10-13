import { Button } from "@/components/ui/button";

const TreatmentsHero = () => {
  return (
    <section className="bg-[#f5ebe0] py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-[#8b6f47] leading-tight">
              TAILORED TREATMENTS FOR THE BEST VERSION OF YOU.
            </h2>
            
            <p className="text-base md:text-lg text-[#8b7355] leading-relaxed font-playfair">
              In a world filled with endless possibilities, the phrase 'Lorem ipsum dolor sit amet' serves as a reminder of the beauty of language and the intricacies of communication. It highlights the importance of understanding and connecting with one another. As we delve deeper into the realms of creativity, we discover that the art of expression is not just about words, but about the emotions and ideas they convey. This journey through the landscape of thought encourages us to
            </p>

            <Button 
              className="bg-[#8b6f47] hover:bg-[#6d5638] text-white px-8 py-6 text-base font-playfair tracking-wider"
            >
              EXPLORE NOW
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