import { Link } from "react-router-dom";

const drops = [
  {
    name: "Too Good To Lose",
    image: "https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=600",
    link: "/products?drop=too-good-to-lose",
  },
  {
    name: "My Mom Said No",
    image: "https://miruna.io/cdn/shop/files/D0006764.webp?v=1761729466&width=600",
    link: "/products?drop=my-mom-said-no",
  },
  {
    name: "I Woke Up Like This",
    image: "https://miruna.io/cdn/shop/files/Facetune_26-10-2025-15-54-01_b734120f-4b7f-4886-bd7f-1d61d4a3e6ae.jpg?v=1761560458&width=800",
    link: "/products?drop=i-woke-up-like-this",
  },
  {
    name: "Fluff Stuff",
    image: "https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=600",
    link: "/products?drop=fluff-stuff",
  },
];

const DropsSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Exclusive Drops</h2>
            <p className="mt-1 text-sm text-muted-foreground">Limited edition collections</p>
          </div>
          <Link 
            to="/products?category=drops" 
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {drops.map((drop) => (
            <Link
              key={drop.name}
              to={drop.link}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={drop.image}
                  alt={drop.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-semibold text-white md:text-base">{drop.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DropsSection;