import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const mainCollections = [
  {
    name: "New In",
    description: "Fresh arrivals",
    image: "https://miruna.io/cdn/shop/files/Facetune_26-10-2025-15-54-01_b734120f-4b7f-4886-bd7f-1d61d4a3e6ae.jpg?v=1761560458&width=800",
    link: "/products?category=new-in",
  },
  {
    name: "Bestsellers",
    description: "Most loved pieces",
    image: "https://miruna.io/cdn/shop/files/D0006764.webp?v=1761729466&width=600",
    link: "/products?category=bestsellers",
  },
  {
    name: "Dresses",
    description: "For every occasion",
    image: "https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=600",
    link: "/products?category=dresses",
  },
  {
    name: "Clothing",
    description: "Co-ords & more",
    image: "https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=600",
    link: "/products?category=clothing",
  },
];

const CollectionNavigationSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Shop by Collection</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {mainCollections.map((collection) => (
            <Link
              key={collection.name}
              to={collection.link}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-base font-semibold text-white md:text-lg">{collection.name}</h3>
                <p className="text-xs text-white/80">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionNavigationSection;