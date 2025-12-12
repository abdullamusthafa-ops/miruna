import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
        <div className="overflow-hidden rounded-xl border border-border/50 bg-secondary/30">
          <div className="grid items-center lg:grid-cols-[280px_1fr]">
            {/* Left - Image */}
            <div className="hidden overflow-hidden lg:block">
              <img
                src="https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=800"
                alt="Dresses Collection"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            {/* Right - Navigation Links */}
            <div className="space-y-5 p-6 lg:p-8">
              {/* Header */}
              <h2 className="font-serif text-xl tracking-wide">Dresses</h2>

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
                      className="rounded-full border border-border bg-background px-3 py-1 text-[11px] transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
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
                      className="rounded-full border border-border bg-background px-3 py-1 text-[11px] transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* By Colour */}
              <div>
                <h3 className="mb-3 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  By Colour
                </h3>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5">
                  {colors.map((item) => (
                    <Link
                      key={item.name}
                      to={`/products?color=${item.name.toLowerCase()}`}
                      className="group flex flex-col items-center gap-1.5 rounded-lg border border-transparent p-2 transition-all hover:border-border hover:bg-background/80"
                    >
                      <span
                        className="h-8 w-8 rounded-full shadow-sm ring-1 ring-border/30 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: item.hex }}
                      />
                      <span className="text-[10px] font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button asChild variant="outline" size="sm" className="group mt-2">
                <Link to="/products?category=dresses">
                  Shop All Dresses
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressesShowcase;