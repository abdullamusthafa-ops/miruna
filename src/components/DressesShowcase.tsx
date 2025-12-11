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
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.5fr] lg:gap-10">
          {/* Left - Image */}
          <div className="overflow-hidden bg-secondary">
            <img
              src="https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=800"
              alt="Dresses Collection"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>

          {/* Right - Navigation Links */}
          <div className="space-y-6">
            {/* By Occasion */}
            <div>
              <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                By Occasion
              </h3>
              <div className="flex flex-wrap gap-2">
                {occasions.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="rounded-full border border-border px-4 py-1.5 text-xs transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* By Length */}
            <div>
              <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                By Length
              </h3>
              <div className="flex flex-wrap gap-2">
                {lengths.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="rounded-full border border-border px-4 py-1.5 text-xs transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* By Colour */}
            <div>
              <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                By Colour
              </h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((item) => (
                  <Link
                    key={item.name}
                    to={`/products?color=${item.name.toLowerCase()}`}
                    className="group flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs transition-colors hover:border-foreground"
                  >
                    <span
                      className="h-3 w-3 rounded-full border border-border/40"
                      style={{ backgroundColor: item.hex }}
                    />
                    <span className="group-hover:text-foreground">{item.name}</span>
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