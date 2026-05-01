import { Link } from "react-router-dom";
import dressesImg from "@/assets/dresses-collection-new.jpg";
import occasionImg from "@/assets/occasion-collection-new.jpg";

const tiles = [
  {
    to: "/collection/dresses",
    img: dressesImg,
    eyebrow: "The Edit",
    title: "Dresses",
    subtitle: "Find your perfect fit",
    // pink image is wider — center it so face stays in frame
    position: "object-center",
  },
  {
    to: "/collection/occasion",
    img: occasionImg,
    eyebrow: "Made For",
    title: "Occasion",
    subtitle: "For every moment",
    // white image is tall — anchor near top so face shows
    position: "object-[center_20%]",
  },
];

const DualCollectionGrid = () => {
  return (
    <section className="bg-background">
      <div className="px-0">
        <div className="grid grid-cols-2 gap-px bg-border">
          {tiles.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="relative overflow-hidden group bg-muted"
            >
              {/* Image — taller editorial ratio, original colors preserved */}
              <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.title}
                  className={`h-full w-full object-cover ${t.position} transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Bottom gradient for caption legibility only */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-5 pb-6 text-center md:pb-10 transition-transform duration-700 ease-out group-hover:-translate-y-1">
                <span className="text-[9px] font-light tracking-[0.4em] uppercase text-white/70 md:text-[10px]">
                  {t.eyebrow}
                </span>
                <h3 className="mt-2 font-display text-2xl font-light tracking-wide text-white md:text-4xl lg:text-5xl">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-[10px] tracking-[0.15em] uppercase text-white/75 md:text-xs hidden sm:block">
                  {t.subtitle}
                </p>
                <span className="mt-4 inline-block border border-white/90 bg-transparent px-7 py-2.5 text-[10px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-500 group-hover:bg-white group-hover:text-foreground md:mt-6 md:text-xs">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DualCollectionGrid;
