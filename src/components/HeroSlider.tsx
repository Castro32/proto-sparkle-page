import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTrichology from "@/assets/hero-trichology.jpg";
import heroHairTreatments from "@/assets/hero-hair-treatments.jpg";
import heroGlam from "@/assets/hero-glam.jpg";

const slides = [
  {
    id: 1,
    image: heroTrichology,
    title: "Trichology",
    subtitle: " & Scalp",
    scriptText: "Health",
    description:
      "Expert diagnosis and treatment for optimal scalp and hair health",
    alt: "Trichology and scalp health treatment showing healthy hair roots",
  },
  {
    id: 2,
    image: heroHairTreatments,
    title: "Hair Treatments",
    subtitle: "Restorative",
    scriptText: "Rituals",
    description:
      " Luxurious treatments to restore and rejuvenate your hair",
    alt: "Luxurious hair treatment ritual in spa setting",
  },
  {
    id: 3,
    image: heroGlam,
    title: "Premium",
    subtitle: " Glam",
    scriptText: "Services",
    description:
      "Professional styling and makeup for your special moments",
    alt: "Premium glamorous beauty styling and makeup services",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="mb-6">
                <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
                  {slide.title}
                </span>
                <span className="block text-5xl md:text-7xl font-playfair font-light text-white leading-tight tracking-wide">
                  {slide.subtitle}{" "}
                  <span className="font-script font-normal">{slide.scriptText}</span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-playfair leading-relaxed max-w-xl">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button> */}

      {/* Pagination Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-12 h-3 bg-white rounded-full"
                : "w-3 h-3 bg-white/50 rounded-full hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default HeroSlider;
