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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {dressCategories.map((category) => (
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
                <div className="mx-4 mb-4 bg-white/80 backdrop-blur-sm py-2 px-3 text-center">
                  <span className="text-sm font-medium text-foreground md:text-base">{category.name}</span>
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
