import { Link } from "react-router-dom";

const clothingCategories = [
  {
    name: "Co-ords",
    image: "https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=600",
    link: "/collection/co-ords",
  },
  {
    name: "Blazers",
    image: "https://miruna.io/cdn/shop/files/D0006764.webp?v=1761729466&width=600",
    link: "/collection/blazers",
  },
  {
    name: "Tops / Bodysuits",
    image: "https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=600",
    link: "/collection/tops-bodysuits",
  },
  {
    name: "Bottoms / Skirts",
    image: "https://miruna.io/cdn/shop/files/Facetune_26-10-2025-15-54-01_b734120f-4b7f-4886-bd7f-1d61d4a3e6ae.jpg?v=1761560458&width=800",
    link: "/collection/bottoms-skirts",
  },
  {
    name: "Jumpsuits",
    image: "https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=600",
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
        
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {clothingCategories.map((category) => (
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
