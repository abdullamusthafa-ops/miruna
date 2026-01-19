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
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <div className="mx-3 mb-3 bg-white/80 backdrop-blur-sm py-2 px-2 text-center">
                  <span className="text-xs font-medium text-foreground md:text-sm">{category.name}</span>
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
