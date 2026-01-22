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
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Shop Clothing</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {/* Featured large card */}
          <Link
            to={clothingCategories[0].link}
            className="group relative overflow-hidden col-span-2 md:col-span-1 md:row-span-2"
          >
            <div className="aspect-[3/4] md:aspect-auto md:h-full overflow-hidden bg-muted flex flex-col">
              <div className="flex-1 overflow-hidden">
                <img
                  src={clothingCategories[0].image}
                  alt={clothingCategories[0].name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="bg-background py-3 px-2 text-center border border-foreground relative overflow-hidden">
                <span className="absolute inset-0 bg-foreground translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 text-[10px] font-medium tracking-[0.15em] uppercase text-foreground group-hover:text-background transition-colors duration-300 md:text-[11px] truncate block">
                  {clothingCategories[0].name}
                </span>
              </div>
            </div>
          </Link>

          {/* 4 smaller cards in 2x2 grid */}
          {clothingCategories.slice(1).map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="bg-background py-3 px-2 text-center border border-foreground relative overflow-hidden">
                  <span className="absolute inset-0 bg-foreground translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
                  <span className="relative z-10 text-[10px] font-medium tracking-[0.15em] uppercase text-foreground group-hover:text-background transition-colors duration-300 md:text-[11px] truncate block">
                    {category.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothingNavigationSection;
