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
  { name: "Red", color: "hsl(0, 72%, 51%)", link: "/products?color=red" },
  { name: "Pink", color: "hsl(340, 82%, 72%)", link: "/products?color=pink" },
  { name: "Black", color: "hsl(0, 0%, 10%)", link: "/products?color=black" },
  { name: "White", color: "hsl(0, 0%, 100%)", link: "/products?color=white" },
  { name: "Gold", color: "hsl(48, 96%, 53%)", link: "/products?color=gold" },
];

const DressesShowcase = () => {
  return (
    <section className="border-y border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Left - Image */}
          <div className="relative overflow-hidden lg:col-span-2">
            <img
              src="https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=800"
              alt="Dresses Collection"
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-3xl font-semibold text-white">Dresses</h2>
              <Link 
                to="/products?category=dresses" 
                className="mt-2 inline-block text-sm text-white/90 underline underline-offset-4"
              >
                Shop All
              </Link>
            </div>
          </div>

          {/* Right - Navigation Links */}
          <div className="flex flex-col justify-center space-y-8 lg:col-span-3">
            {/* By Occasion */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">By Occasion</h3>
              <div className="flex flex-wrap gap-2">
                {occasions.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* By Length */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">By Length</h3>
              <div className="flex flex-wrap gap-2">
                {lengths.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* By Color */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">By Colour</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="group flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:border-foreground"
                  >
                    <span
                      className="h-3 w-3 rounded-full border border-border/50"
                      style={{ backgroundColor: item.color }}
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