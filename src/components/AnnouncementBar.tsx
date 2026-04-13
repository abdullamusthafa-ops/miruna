import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const announcements = [
  "15% OFF ON FIRST PURCHASE",
  "FREE DELIVERY ON ORDERS ABOVE AED 1000",
  "MADE IN UAE",
  "4-HOUR DELIVERY IN DUBAI",
];

const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  return (
    <div className="bg-foreground text-background">
      <div className="container mx-auto flex items-center justify-center px-4 py-2 relative">
        <button
          onClick={goToPrev}
          className="absolute left-4 p-1 opacity-60 hover:opacity-100 transition-opacity hidden sm:block"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        <span 
          key={currentIndex}
          className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-medium animate-fade-in"
        >
          {announcements[currentIndex]}
        </span>
        
        <button
          onClick={goToNext}
          className="absolute right-4 p-1 opacity-60 hover:opacity-100 transition-opacity hidden sm:block"
          aria-label="Next announcement"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
