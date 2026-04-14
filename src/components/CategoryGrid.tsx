import { Link } from "react-router-dom";

const categories = [
  {
    name: "AFTER DARK",
    subtext: "For nights that ask for presence.",
    image: "https://miruna.io/cdn/shop/files/Evening_Glam_Category.jpg?v=1774348380&width=2910",
    link: "/collection/evening-dresses",
  },
  {
    name: "IN WHITE",
    subtext: "Clean lines. Quiet confidence.",
    image: "https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=800",
    link: "/collection/white",
  },
  {
    name: "THE PARTY EDIT",
    subtext: "Made for movement, energy, and attention.",
    image: "https://miruna.io/cdn/shop/files/Wedding_Guest_Category_-_3.4.jpg?v=1774348428&width=1069",
    link: "/collection/party",
  },
  {
    name: "STATEMENT MOMENTS",
    subtext: "For the nights you'll be remembered.",
    image: "https://miruna.io/cdn/shop/files/DSCF4817_2.jpg?v=1774348358&width=2344",
    link: "/collection/prom",
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-white block">
                  {cat.name}
                </span>
                <span className="text-[8px] text-white/70 font-light tracking-wide block mt-0.5">
                  {cat.subtext}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-white block">
                  {cat.name}
                </span>
                <span className="text-[10px] text-white/70 font-light tracking-wide block mt-1">
                  {cat.subtext}
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
