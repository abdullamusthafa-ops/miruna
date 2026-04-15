import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.webp";
import heroBannerMobile from "@/assets/hero-banner-mobile.webp";

const HeroSlideshow = () => {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden mb-px">
      <picture>
        <source media="(max-width: 768px)" srcSet={heroBannerMobile} />
        <img
          src={heroBanner}
          alt="Dresses for every version of you"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="sync"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent sm:bg-black/20" />
      <div className="absolute inset-0 flex items-end justify-center pb-[18%] sm:pb-[12%] md:pb-[10%]">
        <div className="text-center px-6">
          <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-xs sm:mb-3">
            Evening glamour • Everyday ease • Occasion moments
          </p>
          <h1 className="mb-4 text-2xl font-display font-bold tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl sm:mb-5">
            DRESSES FOR EVERY VERSION OF YOU
          </h1>
          <Link
            to="/collection/new-in"
            className="inline-block border border-white bg-white/10 backdrop-blur-sm px-6 py-2.5 text-[10px] font-medium tracking-[0.15em] uppercase text-white transition-all hover:bg-white hover:text-foreground sm:px-8 sm:py-3 sm:text-xs active:scale-95"
          >
            SHOP NEW IN
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
