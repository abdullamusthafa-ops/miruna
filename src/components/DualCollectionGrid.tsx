import { Link } from "react-router-dom";
import dressesImg from "@/assets/dresses-collection.jpg";
import occasionImg from "@/assets/occasion-collection.jpeg";

const collections = [
  {
    name: "Dresses",
    subtitle: "Find your perfect fit",
    image: dressesImg,
    link: "/collection/dresses",
  },
  {
    name: "Occasion",
    subtitle: "For every moment",
    image: occasionImg,
    link: "/collection/occasion",
  },
];

const DualCollectionGrid = () => {
  return (
    <section className="py-1">
      <div className="container mx-auto px-1">
        <div className="grid grid-cols-2 gap-1">
          {collections.map((col) => (
            <Link
              key={col.name}
              to={col.link}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={col.image}
                  alt={col.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-white md:text-base">
                  {col.name}
                </h3>
                <p className="mt-0.5 text-[10px] tracking-wide text-white/80 md:text-xs">
                  {col.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DualCollectionGrid;
