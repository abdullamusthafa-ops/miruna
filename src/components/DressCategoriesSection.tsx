import { Link } from "react-router-dom";

const dressCategories = [
  {
    name: "Mini Dresses",
    image: "https://miruna.io/cdn/shop/files/my_mom_said_no_bg_grey.png?v=1768375036&width=1535",
    link: "/collection/mini",
  },
  {
    name: "Midi Dresses",
    image: "https://miruna.io/cdn/shop/files/midi.png?v=1768375057&width=1535",
    link: "/collection/midi",
  },
  {
    name: "Maxi Dresses",
    image: "https://miruna.io/cdn/shop/files/greybgmodel_32da9e31-224a-47b4-afd1-1d9b73ad60d7.png?v=1768375093&width=1535",
    link: "/collection/maxi",
  },
  {
    name: "Exclusive",
    image: "https://miruna.io/cdn/shop/files/greybgmodel2_1.png?v=1769143361&width=1535",
    link: "/collection/fluff-stuff",
  },
];

const DressCategoriesSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
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
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-center pb-4">
                <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-foreground">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: 4 equal columns */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-3">
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
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-center pb-6">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-foreground">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressCategoriesSection;
