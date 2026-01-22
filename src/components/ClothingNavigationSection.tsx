import { Link } from "react-router-dom";

const clothingCategories = [
  {
    name: "Blazers",
    image: "https://miruna.io/cdn/shop/files/D0006832.webp?v=1761729490&width=800",
    link: "/collection/blazers",
  },
  {
    name: "Co-ord Sets",
    image: "https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=800",
    link: "/collection/co-ords",
  },
  {
    name: "Tops & Bodysuits",
    image: "https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=800",
    link: "/collection/tops-bodysuits",
  },
  {
    name: "Bottoms & Skirts",
    image: "https://miruna.io/cdn/shop/files/Facetune_26-10-2025-15-54-01_b734120f-4b7f-4886-bd7f-1d61d4a3e6ae.jpg?v=1761560458&width=800",
    link: "/collection/bottoms-skirts",
  },
  {
    name: "Jumpsuits",
    image: "https://miruna.io/cdn/shop/files/D0007156.webp?v=1761737545&width=800",
    link: "/collection/jumpsuits",
  },
];

const ClothingNavigationSection = () => {
  const CategoryCard = ({ category, className = "" }: { category: typeof clothingCategories[0], className?: string }) => (
    <Link
      to={category.link}
      className={`group relative overflow-hidden ${className}`}
    >
      <div className="aspect-[3/4] overflow-hidden bg-muted flex flex-col">
        <div className="flex-1 overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="bg-background py-2 px-2 text-center border border-foreground relative overflow-hidden">
          <span className="absolute inset-0 bg-foreground translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
          <span className="relative z-10 text-[10px] font-medium tracking-[0.15em] uppercase text-foreground group-hover:text-background transition-colors duration-300 md:text-[11px] truncate block">
            {category.name}
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Shop Clothing</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-2 md:space-y-3">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {clothingCategories.slice(0, 3).map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
          
          {/* Bottom row - 2 centered cards */}
          <div className="grid grid-cols-4 gap-2 md:gap-3">
            <div className="col-start-2 col-span-2 grid grid-cols-2 gap-2 md:gap-3">
              {clothingCategories.slice(3, 5).map((category) => (
                <CategoryCard key={category.name} category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothingNavigationSection;
