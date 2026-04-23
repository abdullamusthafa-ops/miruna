import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroNewIn from "@/assets/hero-new-in.webp";
import heroSpring from "@/assets/hero-spring.webp";

const HeroSlideshow = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const copyClasses = `transition-all duration-700 ease-out ${
    loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
  }`;

  return (
    <section className="relative w-full overflow-hidden mb-px">
      {/* Desktop / Tablet landscape: side by side */}
      <div className="hidden md:grid md:grid-cols-2 h-[100dvh]" style={{ gap: "1px" }}>
        <div className="relative overflow-hidden bg-muted">
          <img
            src={heroNewIn}
            alt="New In Collection"
            className="h-full w-full object-cover object-[center_15%]"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
        <div className="relative overflow-hidden bg-muted">
          <img
            src={heroSpring}
            alt="Spring Collection"
            className="h-full w-full object-cover object-[center_15%]"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
        {/* Overlay + CTA centered over the gap */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 flex items-end justify-center pb-[10%] pointer-events-none">
          <div className={`text-center px-6 pointer-events-auto ${copyClasses}`}>
            <div className="mx-auto mb-4 h-px w-12 bg-white/60" />
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/90">
              Evening glamour · Everyday ease · Occasion moments
            </p>
            <h1 className="mb-7 text-4xl font-display tracking-tight text-white md:text-6xl lg:text-7xl">
              DRESSES FOR EVERY <span className="italic font-light">version</span> OF YOU
            </h1>
            <div className="flex items-center justify-center gap-3">
              <Link
                to="/collection/new-in"
                className="inline-block bg-white text-foreground px-12 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all hover:bg-white/90 active:scale-[0.98]"
              >
                Shop New In
              </Link>
              <Link
                to="/collection/spring-collection"
                className="inline-block border border-white/80 bg-transparent px-12 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-white transition-all hover:bg-white hover:text-foreground active:scale-[0.98]"
              >
                Shop Spring
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet portrait: stacked with text at the seam */}
      <div className="md:hidden relative flex flex-col h-[100dvh]" style={{ gap: "1px" }}>
        <div className="relative flex-1 overflow-hidden bg-muted min-h-0">
          <img
            src={heroNewIn}
            alt="New In Collection"
            className="h-full w-full object-cover object-[center_20%]"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
        <div className="relative flex-1 overflow-hidden bg-muted min-h-0">
          <img
            src={heroSpring}
            alt="Spring Collection"
            className="h-full w-full object-cover object-[center_15%]"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
        {/* Text at the seam between images */}
        <div className={`absolute left-0 right-0 bottom-[44%] z-10 text-center px-5 pointer-events-none ${copyClasses}`}>
          <div className="mx-auto mb-2 h-px w-10 bg-white/70" />
          <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.3em] text-white/90 drop-shadow-md">
            Evening · Everyday · Occasion
          </p>
          <h1 className="mb-4 text-3xl font-display tracking-tight text-white drop-shadow-lg sm:text-4xl">
            DRESSES FOR EVERY <span className="italic font-light">version</span> OF YOU
          </h1>
        </div>
        {/* CTAs anchored to bottom on mobile for confident commerce */}
        <div className={`absolute bottom-6 left-0 right-0 px-5 z-10 ${copyClasses}`} style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
          <div className="flex flex-col gap-2">
            <Link
              to="/collection/new-in"
              className="pointer-events-auto block bg-white text-foreground py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-center transition-all active:scale-[0.98]"
            >
              Shop New In
            </Link>
            <Link
              to="/collection/spring-collection"
              className="pointer-events-auto block border border-white/80 bg-transparent py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white text-center transition-all active:scale-[0.98]"
            >
              Shop Spring
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
