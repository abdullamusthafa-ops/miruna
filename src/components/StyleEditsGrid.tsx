import { Link } from "react-router-dom";

const styleEdits = [
  {
    name: "AFTER DARK",
    image: "https://miruna.io/cdn/shop/files/Evening_Glam_Category.jpg?v=1774348380&width=2910",
    link: "/collection/evening-dresses",
  },
  {
    name: "EVERYDAY EASE",
    image: "https://miruna.io/cdn/shop/files/Elevated_Essentials_Category.jpg?v=1774348407&width=3112",
    link: "/collection/elevated-essentials",
  },
  {
    name: "OCCASION READY",
    image: "https://miruna.io/cdn/shop/files/Wedding_Guest_Category_-_3.4.jpg?v=1774348428&width=1069",
    link: "/collection/wedding-guest-edit",
  },
  {
    name: "TAILORED EDGE",
    image: "https://miruna.io/cdn/shop/files/DSCF4817_2.jpg?v=1774348358&width=2344",
    link: "/collection/tailored-edit",
  },
];

const StyleEditsGrid = () => {
  return (
    <div>
      <section className="h-[100dvh]">
        <div className="h-full px-0">
          <div className="grid grid-cols-2 gap-0 md:grid-cols-4 h-full">
            {styleEdits.map((edit) => (
              <Link
                key={edit.name}
                to={edit.link}
                className="group relative overflow-hidden"
              >
                <div className="h-full overflow-hidden bg-muted">
                  <img
                    src={edit.image}
                    alt={edit.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                  <span className="text-[9px] font-medium tracking-[0.12em] uppercase text-white sm:text-[10px] md:text-xs leading-tight block">
                    {edit.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-3 sm:py-4 md:py-5">
        <div className="h-px w-10 bg-border sm:w-14 md:w-16" />
        <span className="mx-2 text-[7px] text-muted-foreground/60 sm:text-[8px]">✦</span>
        <div className="h-px w-10 bg-border sm:w-14 md:w-16" />
      </div>
    </div>
  );
};

export default StyleEditsGrid;
