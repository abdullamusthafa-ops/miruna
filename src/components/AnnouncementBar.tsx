import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const announcements = [
  "15% OFF ON FIRST PURCHASE — CODE: WELCOME15",
  "FREE DELIVERY ON ORDERS ABOVE AED 1000",
  "MADE IN UAE",
  "4-HOUR DELIVERY IN DUBAI",
];

const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
        setIsFading(false);
      }, 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
      setIsFading(false);
    }, 200);
  };

  const goToNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
      setIsFading(false);
    }, 200);
  };

  return (
    <div className="bg-foreground text-background">
      <div className="container mx-auto flex items-center justify-center px-4 py-2.5 relative">
        {/* Mobile / tablet: rotating single message with arrows */}
        <div className="lg:hidden flex items-center justify-center w-full">
          <button
            onClick={goToPrev}
            className="absolute left-4 p-1 opacity-60 hover:opacity-100 transition-opacity hidden sm:block"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>

          <span
            className={`text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-medium transition-opacity duration-200 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            {announcements[currentIndex]}
          </span>

          <button
            onClick={goToNext}
            className="absolute right-4 p-1 opacity-60 hover:opacity-100 transition-opacity hidden sm:block"
            aria-label="Next announcement"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Desktop: all 4 messages inline with separators */}
        <div className="hidden lg:flex items-center justify-center gap-6">
          {announcements.map((msg, i) => (
            <div key={msg} className="flex items-center gap-6">
              <span className="text-[11px] tracking-[0.25em] uppercase font-medium opacity-90">
                {msg}
              </span>
              {i < announcements.length - 1 && (
                <span className="text-background/40 text-[10px]">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
