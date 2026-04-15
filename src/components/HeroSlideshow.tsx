import { Link } from "react-router-dom";
import heroNewIn from "@/assets/hero-new-in.webp";
import heroSpring from "@/assets/hero-spring.webp";

const HeroSlideshow = () => {
  return (
    <section className="relative w-full overflow-hidden mb-px">
      {/* Desktop / Tablet landscape: side by side */}
      <div className="hidden md:grid md:grid-cols-2 h-[100dvh]" style={{ gap: "1px" }}>
        <div className="relative overflow-hidden bg-muted">
          <img
            src={heroNewIn}
            alt="New In Collection"
            className="h-full w-full object-cover object-top"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
        <div className="relative overflow-hidden bg-muted">
          <img
            src={heroSpring}
            alt="Spring Collection"
            className="h-full w-full object-cover object-top"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
        {/* Overlay + CTA centered over the gap */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
        <div className="absolute inset-0 flex items-end justify-center pb-[10%] pointer-events-none">
          <div className="text-center px-6 pointer-events-auto">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/90">
              Evening glamour • Everyday ease • Occasion moments
            </p>
            <h1 className="mb-5 text-3xl font-display font-bold tracking-wide text-white md:text-4xl lg:text-5xl">
              DRESSES FOR EVERY VERSION OF YOU
            </h1>
            <Link
              to="/collection/new-in"
              className="inline-block border border-white bg-white/10 backdrop-blur-sm px-8 py-3 text-xs font-medium tracking-[0.15em] uppercase text-white transition-all hover:bg-white hover:text-foreground active:scale-95"
            >
              SHOP NEW IN
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet portrait: stacked vertically */}
      <div className="md:hidden flex flex-col h-[100dvh]" style={{ gap: "1px" }}>
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
        {/* Overlay + CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
        <div className="absolute inset-0 flex items-end justify-center pb-[18%] pointer-events-none">
          <div className="text-center px-6 pointer-events-auto">
            <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-xs">
              Evening glamour • Everyday ease • Occasion moments
            </p>
            <h1 className="mb-4 text-2xl font-display font-bold tracking-wide text-white sm:text-3xl">
              DRESSES FOR EVERY VERSION OF YOU
            </h1>
            <Link
              to="/collection/new-in"
              className="inline-block border border-white bg-white/10 backdrop-blur-sm px-6 py-2.5 text-[10px] font-medium tracking-[0.15em] uppercase text-white transition-all hover:bg-white hover:text-foreground active:scale-95 sm:px-8 sm:py-3 sm:text-xs"
            >
              SHOP NEW IN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
