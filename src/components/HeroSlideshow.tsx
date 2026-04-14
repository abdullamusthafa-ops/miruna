import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://miruna.io/cdn/shop/files/Spring_Collection.webp?v=1774342505&width=3200",
    mobileImage: "https://miruna.io/cdn/shop/files/Spring_Collection.webp?v=1774342505&width=1200",
    subtitle: "Evening glamour • Everyday ease • Occasion moments",
    title: "DRESSES FOR EVERY VERSION OF YOU",
    cta: "SHOP NEW IN",
    link: "/collection/new-in",
  },
  {
    image: "https://miruna.io/cdn/shop/files/New_In.webp?v=1774342505&width=3200",
    mobileImage: "https://miruna.io/cdn/shop/files/New_In.webp?v=1774342505&width=1200",
    subtitle: "Limited pieces. Designed to stand out.",
    title: "NEW IN",
    cta: "SHOP NOW",
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

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
    setTouchStart(null);
  };

  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden mb-1"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: currentSlide === index ? 1 : 0, zIndex: currentSlide === index ? 1 : 0 }}
        >
          <picture>
            <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent sm:bg-black/20" />
          <div className="absolute inset-0 flex items-end justify-center pb-[18%] sm:pb-[12%] md:pb-[10%]">
            <div className="text-center px-6">
              {slide.subtitle && (
                <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-xs sm:mb-3">
                  {slide.subtitle}
                </p>
              )}
              <h1 className="mb-4 text-2xl font-display font-bold tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl sm:mb-5">
                {slide.title}
              </h1>
              <Link
                to={slide.link}
                className="inline-block border border-white bg-white/10 backdrop-blur-sm px-6 py-2.5 text-[10px] font-medium tracking-[0.15em] uppercase text-white transition-all hover:bg-white hover:text-foreground sm:px-8 sm:py-3 sm:text-xs active:scale-95"
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

      {/* Dots - centered on mobile */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2.5 sm:left-auto sm:right-6 sm:bottom-6 sm:translate-x-0">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              currentSlide === index 
                ? "bg-white h-2 w-6 rounded-full" 
                : "bg-white/40 h-2 w-2 rounded-full"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
