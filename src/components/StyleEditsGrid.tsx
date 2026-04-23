import { Link } from "react-router-dom";
import inWhiteImage from "@/assets/in-white-category.webp";

const styleEdits = [
  {
    name: "AFTER DARK",
    subtext: "For nights that ask for presence.",
    image: "https://miruna.io/cdn/shop/files/Evening_Glam_Category.jpg?v=1774348380&width=800",
    hoverImage: "https://miruna.io/cdn/shop/files/DSCF4817_2.jpg?v=1774348358&width=800",
    link: "/collection/evening-dresses",
  },
  {
    name: "IN WHITE",
    subtext: "Clean lines. Quiet confidence.",
    image: inWhiteImage,
    hoverImage: "https://miruna.io/cdn/shop/files/Wedding_Guest_Category_-_3.4.jpg?v=1774348428&width=800",
    link: "/collection/white",
  },
  {
    name: "THE PARTY EDIT",
    subtext: "Made for movement, energy, and attention.",
    image: "https://miruna.io/cdn/shop/files/Wedding_Guest_Category_-_3.4.jpg?v=1774348428&width=800",
    hoverImage: "https://miruna.io/cdn/shop/files/Evening_Glam_Category.jpg?v=1774348380&width=800",
    link: "/collection/party",
  },
  {
    name: "STATEMENT MOMENTS",
    subtext: "For the nights you'll be remembered.",
    image: "https://miruna.io/cdn/shop/files/DSCF4817_2.jpg?v=1774348358&width=800",
    hoverImage: inWhiteImage,
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
                <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                  <img
                    src={edit.image}
                    alt={edit.name}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={edit.hoverImage}
                    alt={edit.name}
                    className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 transition-transform duration-500 group-hover:-translate-y-1">
                  <span className="relative inline-block text-xs font-medium tracking-[0.15em] uppercase text-white sm:text-sm md:text-sm leading-tight">
                    {edit.name}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                  </span>
                  <span className="text-[11px] text-white/75 sm:text-xs md:text-xs leading-snug block mt-1.5 font-light tracking-wide">
                    {edit.subtext}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wordmark divider */}
      <div className="flex items-center justify-center py-5 sm:py-6 md:py-8">
        <div className="h-px flex-1 max-w-[80px] bg-border sm:max-w-[120px]" />
        <span className="mx-4 text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground/70 sm:text-[10px]">
          Miruna — Est. UAE
        </span>
        <div className="h-px flex-1 max-w-[80px] bg-border sm:max-w-[120px]" />
      </div>
    </div>
  );
};

export default StyleEditsGrid;
