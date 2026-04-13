import { Link } from "react-router-dom";

const categories = [
  {
    name: "EVENING GLAM",
    image: "https://miruna.io/cdn/shop/files/Evening_Glam_Category.jpg?v=1774348380&width=2910",
    link: "/collection/evening-dresses",
  },
  {
    name: "CASUAL ESSENTIALS",
    image: "https://miruna.io/cdn/shop/files/Elevated_Essentials_Category.jpg?v=1774348407&width=3112",
    link: "/collection/elevated-essentials",
  },
  {
    name: "WEDDING GUEST EDIT",
    image: "https://miruna.io/cdn/shop/files/Wedding_Guest_Category_-_3.4.jpg?v=1774348428&width=1069",
    link: "/collection/wedding-guest-edit",
  },
  {
    name: "TAILORED EDIT",
    image: "https://miruna.io/cdn/shop/files/DSCF4817_2.jpg?v=1774348358&width=2344",
    link: "/collection/tailored-edit",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-1">
      <div className="container mx-auto px-1">
        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-1 md:hidden">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.link} className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-white">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: 4 columns */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-1">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.link} className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-white">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
