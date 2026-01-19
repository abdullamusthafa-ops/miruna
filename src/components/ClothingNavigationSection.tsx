import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const clothingCategories = [
  { name: "Co-ords", link: "/collection/co-ords" },
  { name: "Blazers", link: "/collection/blazers" },
  { name: "Tops / Bodysuits", link: "/collection/tops-bodysuits" },
  { name: "Bottoms / Skirts", link: "/collection/bottoms-skirts" },
  { name: "Jumpsuits", link: "/collection/jumpsuits" },
];

const ClothingNavigationSection = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Image */}
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src="https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=600"
              alt="Clothing Collection"
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* Right - Navigation Links */}
          <div className="flex flex-col justify-center px-4 md:px-12">
            <h2 className="text-2xl font-semibold tracking-tight mb-8 md:text-3xl">
              CLOTHING
            </h2>
            <ul className="space-y-4">
              {clothingCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.link}
                    className="group flex items-center justify-between py-3 border-b border-border/50 hover:border-foreground transition-colors"
                  >
                    <span className="text-base md:text-lg font-light tracking-wide group-hover:translate-x-2 transition-transform">
                      {category.name}
                    </span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/products?category=clothing"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            >
              Shop All Clothing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothingNavigationSection;
