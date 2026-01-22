import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { TrendingUp } from "lucide-react";

interface BestSellersProps {
  products: Array<{
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    badge?: string;
    colors?: Array<{ name: string; hex: string; images: string[] }>;
  }>;
}

const BestSellersSection = ({ products }: BestSellersProps) => {
  return (
    <section className="relative overflow-hidden bg-muted py-12 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03),transparent_50%)]" />
      <div className="container relative mx-auto px-4">
        <div className="mb-8 flex items-center justify-between md:mb-12">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary md:h-6 md:w-6" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary md:text-sm">Trending Now</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Best Sellers</h2>
            <p className="mt-1 text-sm text-muted-foreground md:mt-2 md:text-base">Our most loved pieces flying off the shelves</p>
          </div>
          <Button asChild variant="outline" size="lg" className="hidden md:flex">
            <Link to="/products?filter=bestsellers">View All Best Sellers</Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-6 text-center md:hidden">
          <Button asChild variant="outline" size="default">
            <Link to="/products?filter=bestsellers">View All Best Sellers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
