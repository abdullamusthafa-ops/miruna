import { Link } from "react-router-dom";

const clothingCategories = [
  {
    name: "Blazers",
    image: "https://miruna.io/cdn/shop/files/Clothing-Blazer.webp?v=1768910078&width=800",
    link: "/collection/blazers",
  },
  {
    name: "Co-ords",
    image: "https://miruna.io/cdn/shop/files/Clothing-Coord.webp?v=1768910078&width=800",
    link: "/collection/co-ords",
  },
  {
    name: "Jumpsuits",
    image: "https://miruna.io/cdn/shop/files/Clothing-Jumpsuit.webp?v=1768910078&width=800",
    link: "/collection/jumpsuits",
  },
  {
    name: "Tops & Bodysuits",
    image: "https://miruna.io/cdn/shop/files/Clothing-Bsuit.webp?v=1768910078&width=800",
    link: "/collection/tops-bodysuits",
  },
  {
    name: "Bottoms & Skirts",
    image: "https://miruna.io/cdn/shop/files/Clothing-Skirt.webp?v=1768910078&width=800",
    link: "/collection/bottoms-skirts",
  },
];

const ClothingNavigationSection = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center md:mb-8">
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">
            Explore the Wardrobe
          </h2>
        </div>
        
        {/* Mobile: Horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide md:hidden" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {clothingCategories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group flex-shrink-0"
              style={{ width: "140px" }}
            >
              <div className="aspect-square overflow-hidden bg-muted rounded-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-center text-[10px] font-medium uppercase tracking-wide text-foreground">
                {category.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Desktop: 5 columns */}
        <div className="hidden md:grid md:grid-cols-5 md:gap-4">
          {clothingCategories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group text-center"
            >
              <div className="aspect-square overflow-hidden bg-muted rounded-full mx-auto max-w-[200px]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-foreground">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothingNavigationSection;
