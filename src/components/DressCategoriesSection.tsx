import { Link } from "react-router-dom";

const dressCategories = [
  {
    name: "Mini Dresses",
    image: "/images/mini-dress.webp",
    link: "/collection/mini",
  },
  {
    name: "Midi Dresses",
    image: "/images/midi-dress.webp",
    link: "/collection/midi",
  },
  {
    name: "Maxi Dresses",
    image: "/images/maxi-dress.webp",
    link: "/collection/maxi",
  },
];

const DressCategoriesSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-3 xs:grid-cols-3 md:gap-4">
          {dressCategories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[2/3] overflow-hidden bg-muted flex flex-col">
                <div className="flex-1 overflow-hidden min-h-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="shrink-0 bg-background py-2.5 px-2 text-center border border-foreground relative overflow-hidden md:py-3">
                  <span className="absolute inset-0 bg-foreground translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
                  <span className="relative z-10 text-[10px] font-medium tracking-[0.15em] uppercase text-foreground group-hover:text-background transition-colors duration-300 md:text-[11px]">
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

export default DressCategoriesSection;
