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
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
          {/* Left - Image */}
          <div className="hidden overflow-hidden bg-secondary lg:block">
            <img
              src="https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=800"
              alt="Dresses Collection"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>

          {/* Right - Navigation Links */}
          <div className="space-y-5">
            {/* By Occasion */}
            <div>
              <h3 className="mb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                By Occasion
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {occasions.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="rounded-full border border-border px-3 py-1 text-[11px] transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* By Length */}
            <div>
              <h3 className="mb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                By Length
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {lengths.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="rounded-full border border-border px-3 py-1 text-[11px] transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* By Colour */}
            <div>
              <h3 className="mb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                By Colour
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {colors.map((item) => (
                  <Link
                    key={item.name}
                    to={`/products?color=${item.name.toLowerCase()}`}
                    className="group flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[11px] transition-colors hover:border-foreground"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full border border-border/40"
                      style={{ backgroundColor: item.hex }}
                    />
                    <span>{item.name}</span>
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