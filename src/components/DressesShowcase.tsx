import { Link } from "react-router-dom";

const occasions = [
  { name: "Party", link: "/products?occasion=party" },
  { name: "Evening", link: "/products?occasion=evening" },
  { name: "Day / Brunch", link: "/products?occasion=day-brunch" },
  { name: "Bridal", link: "/products?occasion=bridal" },
];

const lengths = [
  { name: "Mini", link: "/products?length=mini" },
  { name: "Midi", link: "/products?length=midi" },
  { name: "Maxi", link: "/products?length=maxi" },
];

const colors = [
  { name: "Red", hex: "#dc2626" },
  { name: "Brown", hex: "#78350f" },
  { name: "Pink", hex: "#f472b6" },
  { name: "Yellow", hex: "#facc15" },
  { name: "Blue", hex: "#3b82f6" },
  { name: "White", hex: "#ffffff" },
  { name: "Black", hex: "#171717" },
  { name: "Gold", hex: "#d4af37" },
  { name: "Silver", hex: "#a8a8a8" },
];

const DressesShowcase = () => {
  return (
    <section className="bg-secondary/50 py-10 md:py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Shop Dresses</h2>
            <p className="mt-1 text-xs text-muted-foreground">Find your perfect dress</p>
          </div>
          <Link 
            to="/products?category=dresses" 
            className="text-xs font-medium underline-offset-4 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[240px_1fr]">
          {/* Left - Image */}
          <Link to="/products?category=dresses" className="group hidden overflow-hidden lg:block">
            <img
              src="https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=800"
              alt="Dresses Collection"
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Right - Navigation Links */}
          <div className="grid gap-4 sm:grid-cols-3">
            {/* By Occasion */}
            <div className="rounded-lg bg-background p-4">
              <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                By Occasion
              </h3>
              <div className="flex flex-col gap-1.5">
                {occasions.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="text-sm transition-colors hover:text-muted-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* By Length */}
            <div className="rounded-lg bg-background p-4">
              <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                By Length
              </h3>
              <div className="flex flex-col gap-1.5">
                {lengths.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="text-sm transition-colors hover:text-muted-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* By Colour */}
            <div className="rounded-lg bg-background p-4">
              <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                By Colour
              </h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((item) => (
                  <Link
                    key={item.name}
                    to={`/products?color=${item.name.toLowerCase()}`}
                    className="group flex items-center gap-1.5"
                    title={item.name}
                  >
                    <span
                      className="h-5 w-5 rounded-full border border-border/60 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: item.hex }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressesShowcase;