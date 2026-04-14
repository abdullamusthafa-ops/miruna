import { Link } from "react-router-dom";
import inWhiteImage from "@/assets/in-white-category.jpg";

const styleEdits = [
  {
    name: "AFTER DARK",
    subtext: "For nights that ask for presence.",
    image: "https://miruna.io/cdn/shop/files/Evening_Glam_Category.jpg?v=1774348380&width=800",
    link: "/collection/evening-dresses",
  },
  {
    name: "IN WHITE",
    subtext: "Clean lines. Quiet confidence.",
    image: inWhiteImage,
    link: "/collection/white",
  },
  {
    name: "THE PARTY EDIT",
    subtext: "Made for movement, energy, and attention.",
    image: "https://miruna.io/cdn/shop/files/Wedding_Guest_Category_-_3.4.jpg?v=1774348428&width=800",
    link: "/collection/party",
  },
  {
    name: "STATEMENT MOMENTS",
    subtext: "For the nights you'll be remembered.",
    image: "https://miruna.io/cdn/shop/files/DSCF4817_2.jpg?v=1774348358&width=800",
    link: "/collection/prom",
  },
];

const StyleEditsGrid = () => {
  return (
    <div>
      <section>
        <div className="px-0">
          <div className="grid grid-cols-2 gap-px md:grid-cols-4">
            {styleEdits.map((edit) => (
              <Link
                key={edit.name}
                to={edit.link}
                className="relative overflow-hidden group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={edit.image}
                    alt={edit.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                  <span className="text-[9px] font-medium tracking-[0.12em] uppercase text-white sm:text-[10px] md:text-xs leading-tight block">
                    {edit.name}
                  </span>
                  <span className="text-[8px] text-white/70 sm:text-[9px] md:text-[10px] leading-tight block mt-0.5 font-light tracking-wide">
                    {edit.subtext}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-2 sm:py-2.5 md:py-3">
        <div className="h-px w-8 bg-border sm:w-10 md:w-12" />
        <span className="mx-2 text-[6px] text-muted-foreground/50 sm:text-[7px]">✦</span>
        <div className="h-px w-8 bg-border sm:w-10 md:w-12" />
      </div>
    </div>
  );
};

export default StyleEditsGrid;
