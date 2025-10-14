import { useState, useEffect } from "react";

const teasers = [
  {
    id: 1,
    title: "Luxury Meets Longevity",
    description:
      "A luxury, experience-led space designed for modern beauty enthusiasts.",
  },
  {
    id: 2,
    title: "Where Beauty Gets Smart",
    description:
      "Advanced diagnostics, science-backed treatments, and results you can feel.",
  },
  {
    id: 3,
    title: "Good Hair Days A-Head",
    description:
      "Restorative techniques like nanoplastia and hair botox, tailored to African hair.",
  },
  {
    id: 4,
    title: "We’re Mixing Something New",
    description:
      "Trichology. Glam. Innovation. All in one seamless experience.",
  },
];

const ScrollTeaser = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teasers.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  return (
    <section className="relative min-h-[50vh] md:min-h-[40vh] bg-[#C1B5C6] flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {teasers.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-playfair text-[#262626] mb-6 leading-tight max-w-4xl">
            {slide.title}
          </h2>
          <p className="text-xl md:text-2xl text-[#595959] font-light max-w-3xl mx-auto">
            {slide.description}
          </p>
        </div>
      ))}

      {/* Navigation Dots */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
        {teasers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-12 h-3 bg-[#595959] rounded-full"
                : "w-3 h-3 bg-[#C1B5C6] rounded-full hover:bg-[#595959]/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default ScrollTeaser;