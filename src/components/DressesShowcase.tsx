import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  { name: "Brown", color: "hsl(30, 41%, 31%)", link: "/products?color=brown" },
  { name: "Pink", color: "hsl(340, 82%, 72%)", link: "/products?color=pink" },
  { name: "Yellow", color: "hsl(48, 96%, 53%)", link: "/products?color=yellow" },
  { name: "Blue", color: "hsl(217, 91%, 60%)", link: "/products?color=blue" },
  { name: "White", color: "hsl(0, 0%, 100%)", link: "/products?color=white" },
  { name: "Black", color: "hsl(0, 0%, 10%)", link: "/products?color=black" },
  { name: "Gold", color: "hsl(48, 96%, 53%)", link: "/products?color=gold" },
  { name: "Silver", color: "hsl(0, 0%, 75%)", link: "/products?color=silver" },
];

const DressesShowcase = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left - Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=800"
              alt="Dresses Collection"
              className="h-full min-h-[500px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="mb-2 text-4xl font-bold text-white md:text-5xl">Dresses</h2>
              <p className="mb-4 text-lg text-white/90">Find your perfect dress for every occasion</p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/products?category=dresses">Shop All Dresses</Link>
              </Button>
            </div>
          </div>

          {/* Right - Navigation Links */}
          <div className="flex flex-col justify-center space-y-8">
            {/* By Occasion */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">By Occasion</h3>
              <div className="flex flex-wrap gap-3">
                {occasions.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* By Length */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">By Length</h3>
              <div className="flex flex-wrap gap-3">
                {lengths.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* By Color */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">By Colour</h3>
              <div className="flex flex-wrap gap-3">
                {colors.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="group flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
                  >
                    <span
                      className="h-4 w-4 rounded-full border border-border/50"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="group-hover:text-primary">{item.name}</span>
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
