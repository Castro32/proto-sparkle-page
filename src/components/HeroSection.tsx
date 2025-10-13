import heroImage from "@/assets/hero-beauty.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful skin close-up showing natural radiance and healthy texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="mb-6">
            <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
              WHERE SCIENCE
            </span>
            <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
              MEETS{" "}
              <span className="font-script font-normal">Beauty</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-playfair leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>

      {/* Pagination Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-white text-sm font-playfair">1/1</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
