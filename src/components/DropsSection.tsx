import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const drops = [
  {
    name: "Too Good To Lose",
    description: "Pieces that are too iconic to let go",
    image: "https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=600",
    link: "/products?drop=too-good-to-lose",
  },
  {
    name: "My Mom Said No",
    description: "Bold choices she might not approve",
    image: "https://miruna.io/cdn/shop/files/D0006764.webp?v=1761729466&width=600",
    link: "/products?drop=my-mom-said-no",
  },
  {
    name: "I Woke Up Like This",
    description: "Effortlessly chic pieces",
    image: "https://miruna.io/cdn/shop/files/Facetune_26-10-2025-15-54-01_b734120f-4b7f-4886-bd7f-1d61d4a3e6ae.jpg?v=1761560458&width=800",
    link: "/products?drop=i-woke-up-like-this",
  },
  {
    name: "Fluff Stuff",
    description: "Soft textures, bold statements",
    image: "https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=600",
    link: "/products?drop=fluff-stuff",
  },
];

const DropsSection = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Limited Edition Drops
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Exclusive Drops</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Unique collections with personality - each drop tells a story
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {drops.map((drop) => (
            <Link
              key={drop.name}
              to={drop.link}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={drop.image}
                  alt={drop.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:p-6">
                <h3 className="mb-1 text-sm font-bold leading-tight md:text-lg">{drop.name}</h3>
                <p className="mb-2 hidden text-xs opacity-80 sm:block">{drop.description}</p>
                <div className="flex items-center gap-1 text-xs font-semibold">
                  <span>Shop Drop</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DropsSection;
