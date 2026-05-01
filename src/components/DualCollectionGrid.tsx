import { Link } from "react-router-dom";
import dressesImg from "@/assets/dresses-collection-new.jpg";
import occasionImg from "@/assets/occasion-collection-new.jpg";

const tiles = [
  {
    to: "/collection/dresses",
    img: dressesImg,
    title: "Dresses",
    subtitle: "Find your perfect fit",
  },
  {
    to: "/collection/occasion",
    img: occasionImg,
    title: "Occasion",
    subtitle: "For every moment",
  },
];

const DualCollectionGrid = () => {
  return (
    <section>
      <div className="px-0">
        <div className="grid grid-cols-2 gap-px">
          {tiles.map((t) => (
            <Link key={t.to} to={t.to} className="relative overflow-hidden group">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="text-base font-medium tracking-[0.25em] uppercase text-white md:text-xl">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-[10px] tracking-wide text-white/75 md:text-xs hidden sm:block">
                  {t.subtitle}
                </p>
                <span className="mt-4 inline-block border border-white/80 bg-transparent px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors group-hover:bg-white group-hover:text-foreground md:mt-5 md:text-xs">
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
