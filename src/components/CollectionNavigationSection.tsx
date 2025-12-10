import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const mainCollections = [
  {
    name: "New In",
    description: "Fresh arrivals just for you",
    image: "https://miruna.io/cdn/shop/files/Facetune_26-10-2025-15-54-01_b734120f-4b7f-4886-bd7f-1d61d4a3e6ae.jpg?v=1761560458&width=800",
    link: "/products?category=new-in",
    badge: "New Arrivals",
  },
  {
    name: "Bestsellers",
    description: "Our most loved pieces",
    image: "https://miruna.io/cdn/shop/files/D0006764.webp?v=1761729466&width=600",
    link: "/products?category=bestsellers",
    badge: "Trending",
  },
];

const categoryCollections = [
  {
    name: "Dresses",
    description: "Party, Evening, Bridal & More",
    image: "https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=600",
    link: "/products?category=dresses",
  },
  {
    name: "Clothing",
    description: "Co-ords, Blazers, Tops & More",
    image: "https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=600",
    link: "/products?category=clothing",
  },
  {
    name: "Drops",
    description: "Limited edition collections",
    image: "https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=800",
    link: "/products?category=drops",
  },
  {
    name: "Lookbook",
    description: "Get inspired by our latest looks",
    image: "https://miruna.io/cdn/shop/files/D0006764.webp?v=1761729466&width=600",
    link: "/lookbook",
  },
];

const CollectionNavigationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Shop by Collection</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our carefully curated collections designed to make you stand out
          </p>
        </div>
        
        {/* Featured Collections - New In & Bestsellers */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {mainCollections.map((collection) => (
            <Link
              key={collection.name}
              to={collection.link}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              {collection.badge && (
                <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  {collection.badge}
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="mb-2 text-2xl font-bold">{collection.name}</h3>
                <p className="mb-4 text-sm opacity-90">{collection.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span>Shop Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Category Collections - Dresses, Clothing, Drops, Lookbook */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categoryCollections.map((collection) => (
            <Link
              key={collection.name}
              to={collection.link}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:p-6">
                <h3 className="mb-1 text-lg font-bold md:text-xl">{collection.name}</h3>
                <p className="mb-2 hidden text-xs opacity-90 sm:block md:text-sm">{collection.description}</p>
                <div className="flex items-center gap-2 text-xs font-semibold md:text-sm">
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 md:h-4 md:w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionNavigationSection;
