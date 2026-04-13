import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://miruna.io/cdn/shop/files/Spring_Collection.webp?v=1774342505&width=3200",
    subtitle: "CURATED DAY TO NIGHT",
    title: "SPRING COLLECTION",
    cta: "SHOP NOW",
    link: "/collection/spring-collection",
  },
  {
    image: "https://miruna.io/cdn/shop/files/New_In.webp?v=1774342505&width=3200",
    subtitle: "",
    title: "NEW IN",
    cta: "Shop Now",
    link: "/collection/new-in",
  },
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const goNext = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <section className="relative h-[85vh] sm:h-[90vh] md:h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: currentSlide === index ? 1 : 0, zIndex: currentSlide === index ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-end justify-center pb-[12%] sm:pb-[10%]">
            <div className="text-center">
              {slide.subtitle && (
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-xs sm:mb-3">
                  {slide.subtitle}
                </p>
              )}
              <h1 className="mb-4 text-2xl font-display font-bold tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {slide.title}
              </h1>
              <Link
                to={slide.link}
                className="inline-block border-b border-white bg-transparent px-1 pb-1 text-[10px] font-medium tracking-[0.15em] uppercase text-white transition-colors hover:text-white/70 sm:text-xs"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - hidden on mobile */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 hidden sm:flex items-center justify-center text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 hidden sm:flex items-center justify-center text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
