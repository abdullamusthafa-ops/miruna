import { Link } from "react-router-dom";
import editorialHero from "@/assets/editorial-hero.jpg";
import categoryImg1 from "@/assets/category-img-1.jpeg";
import categoryImg2 from "@/assets/category-img-2.jpg";
import categoryImg3 from "@/assets/category-img-3.jpeg";

const sheCategories = [
  {
    name: "FLUFF STUFF",
    tag: "Limited Edition",
    image: "https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=600",
    link: "/collection/fluff-stuff",
  },
  {
    name: "TOO GOOD TO LOSE",
    image: "https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=600",
    link: "/collection/too-good-to-lose",
  },
  {
    name: "I WOKE UP LIKE THIS",
    image: "https://miruna.io/cdn/shop/files/Facetune_26-10-2025-15-54-01_b734120f-4b7f-4886-bd7f-1d61d4a3e6ae.jpg?v=1761560458&width=800",
    link: "/collection/i-woke-up-like-this",
  },
  {
    name: "MY MOM SAID NO",
    image: "https://miruna.io/cdn/shop/files/D0006764.webp?v=1761729466&width=600",
    link: "/collection/my-mom-said-no",
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

      {/* Drop Names Strip — visually connected */}
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
                <span className="text-[7px] font-medium tracking-[0.1em] uppercase text-white sm:text-[9px] md:text-xs leading-tight block">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialDropsSection;
