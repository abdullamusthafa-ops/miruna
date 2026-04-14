import { Link } from "react-router-dom";
import editorialHero from "@/assets/editorial-hero.jpg";
import categoryImg1 from "@/assets/category-img-1.jpeg";
import categoryImg2 from "@/assets/category-img-2.jpg";
import categoryImg3 from "@/assets/category-img-3.jpeg";

const drops = [
  {
    name: "Fluff Stuff",
    tag: "Limited Edition",
    image: "https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=600",
    link: "/collection/fluff-stuff",
  },
  {
    name: "Too Good To Lose",
    tag: "Signature Drop",
    image: "https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=600",
    link: "/collection/too-good-to-lose",
  },
  {
    name: "I Woke Up Like This",
    tag: "Everyday Edit",
    image: "https://miruna.io/cdn/shop/files/Facetune_26-10-2025-15-54-01_b734120f-4b7f-4886-bd7f-1d61d4a3e6ae.jpg?v=1761560458&width=800",
    link: "/collection/i-woke-up-like-this",
  },
  {
    name: "My Mom Said No",
    tag: "Bold Picks",
    image: "https://miruna.io/cdn/shop/files/D0006764.webp?v=1761729466&width=600",
    link: "/collection/my-mom-said-no",
  },
];

const sheCategories = [
  {
    name: "AFTER DARK",
    image: categoryImg3,
    link: "/collection/evening-dresses",
  },
  {
    name: "EVERYDAY EASE",
    image: categoryImg1,
    link: "/collection/elevated-essentials",
  },
  {
    name: "OCCASION READY",
    image: categoryImg2,
    link: "/collection/wedding-guest-edit",
  },
  {
    name: "BESTSELLERS",
    image: "https://miruna.io/cdn/shop/files/DSCF4817_2.jpg?v=1774348358&width=2344",
    link: "/collection/bestsellers",
  },
];

const EditorialDropsSection = () => {
  return (
    <section className="py-6 md:py-14">
      {/* Editorial Split: Left Image + Right Video */}
      <div className="container mx-auto px-0 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-1">
          {/* Left: Image */}
          <Link to="/collection/she" className="group relative block overflow-hidden">
            <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={editorialHero}
                alt="SHE Collection"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-[10px]">
                The Collection
              </p>
              <h3 className="mt-1 text-xl font-display tracking-wide text-white sm:text-2xl md:text-3xl">
                SHE
              </h3>
              <span className="mt-3 inline-block border border-white/80 px-4 py-1.5 text-[9px] font-medium uppercase tracking-[0.15em] text-white transition-colors group-hover:bg-white group-hover:text-foreground sm:mt-4 sm:px-5 sm:py-2 sm:text-[10px]">
                Explore
              </span>
            </div>
          </Link>

          {/* Right: Video */}
          <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-muted">
            <video
              src="/videos/editorial-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              preload="metadata"
            />
          </div>
        </div>
      </div>

      {/* SHE Category Strip — visually connected */}
      <div className="container mx-auto px-0 md:px-4 mt-1">
        <div className="grid grid-cols-4 gap-1">
          {sheCategories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.link}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-5">
                <span className="text-[8px] font-medium tracking-[0.12em] uppercase text-white sm:text-[10px] md:text-xs">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Drops Grid */}
      <div className="container mx-auto px-4 mt-8 md:mt-12">
        <div className="mb-5 md:mb-7 text-center">
          <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-[10px]">
            Curated for you
          </p>
          <h2 className="mt-1 text-lg font-light tracking-tight text-foreground sm:text-xl md:text-2xl">
            Explore The Drops
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {drops.map((drop) => (
            <Link
              key={drop.name}
              to={drop.link}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={drop.image}
                  alt={drop.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-[7px] font-medium uppercase tracking-[0.15em] text-white/60 sm:text-[8px]">
                  {drop.tag}
                </p>
                <h3 className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-xs md:text-sm">
                  {drop.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialDropsSection;
