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

const DressesShowcase = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left - Image */}
          <div className="overflow-hidden bg-secondary">
            <img
              src="https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=800"
              alt="Dresses Collection"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          {/* Right - Navigation Links */}
          <div className="space-y-10">
            {/* By Occasion */}
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                By Occasion
              </h3>
              <div className="flex flex-wrap gap-3">
                {occasions.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="rounded-full border border-border bg-background px-5 py-2.5 text-sm transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* By Length */}
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                By Length
              </h3>
              <div className="flex flex-wrap gap-3">
                {lengths.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="rounded-full border border-border bg-background px-5 py-2.5 text-sm transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {item.name}
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