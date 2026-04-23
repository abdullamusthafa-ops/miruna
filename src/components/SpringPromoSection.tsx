import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const SpringPromoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { rootMargin: "200px", threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-[100dvh] flex items-center py-16 md:py-24">
      <div className="container mx-auto px-0 md:px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 lg:gap-16 items-center">
          {/* Video Side */}
          <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-muted">
            {isVisible && (
              <video
                ref={videoRef}
                src="https://miruna.io/cdn/shop/videos/c/vp/0a179ebae7f8446f80a61f738aa903ae/0a179ebae7f8446f80a61f738aa903ae.HD-1080p-7.2Mbps-77810477.mp4?v=0"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                preload="none"
              />
            )}
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center text-center px-6 py-10 md:text-left md:px-2 md:py-0 md:max-w-[480px]">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="h-px w-10 bg-luxury-taupe" />
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                Spring 2026 Exclusive
              </p>
            </div>
            <h2 className="text-2xl font-display tracking-tight md:text-4xl lg:text-5xl mb-5 leading-[1.1]">
              Sculpted silhouettes for <span className="italic font-light">standout</span> moments.
            </h2>
            <p className="text-xs text-muted-foreground mb-7 sm:text-sm sm:mb-8 leading-relaxed">
              Elegant abayas, refined evening styles, and modern occasion pieces — designed in limited quantities.
            </p>
            <div>
              <Link
                to="/collection/spring-collection"
                className="group relative inline-block overflow-hidden border border-foreground px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-foreground translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                  Explore Collection
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpringPromoSection;
