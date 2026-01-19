import { Link } from "react-router-dom";

const clothingCategories = [
  { name: "Co-ords", link: "/collection/co-ords" },
  { name: "Blazers", link: "/collection/blazers" },
  { name: "Tops / Bodysuits", link: "/collection/tops-bodysuits" },
  { name: "Bottoms / Skirts", link: "/collection/bottoms-skirts" },
  { name: "Jumpsuits", link: "/collection/jumpsuits" },
];

const ClothingNavigationSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-semibold tracking-tight mb-6 md:text-xl uppercase">
          Clothing
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-3 md:gap-x-10">
          {clothingCategories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothingNavigationSection;
