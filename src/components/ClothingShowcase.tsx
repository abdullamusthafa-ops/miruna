import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Co-ords", link: "/products?category=co-ords" },
  { name: "Blazers", link: "/products?category=blazers" },
  { name: "Tops & Bodysuits", link: "/products?category=tops-bodysuits" },
  { name: "Bottoms & Skirts", link: "/products?category=bottoms-skirts" },
  { name: "Jumpsuits", link: "/products?category=jumpsuits" },
  { name: "Corsets", link: "/products?category=corsets" },
];

const ClothingShowcase = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-xl border border-border/50 bg-secondary/30">
          <div className="grid items-center lg:grid-cols-[1fr_280px]">
            {/* Left - Navigation Links */}
            <div className="space-y-5 p-6 lg:p-8">
              {/* Header */}
              <h2 className="font-serif text-xl tracking-wide">Clothing</h2>

              {/* By Category */}
              <div>
                <h3 className="mb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  By Category
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((item) => (
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

              {/* CTA */}
              <Button asChild variant="outline" size="sm" className="group mt-2">
                <Link to="/products?category=clothing">
                  Shop All Clothing
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            {/* Right - Image */}
            <div className="hidden overflow-hidden lg:block">
              <img
                src="https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=800"
                alt="Clothing Collection"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothingShowcase;
