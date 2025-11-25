import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CollectionBanners = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Best Sellers Banner */}
          <Link
            to="/products"
            className="group relative overflow-hidden rounded-lg bg-accent aspect-[16/10]"
          >
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
              alt="Best Sellers"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <h3 className="mb-2 text-3xl font-bold uppercase">Best Sellers</h3>
              <Button variant="secondary" size="sm" className="mt-2">
                Shop Now
              </Button>
            </div>
          </Link>

          {/* Black Friday Banner */}
          <Link
            to="/products"
            className="group relative overflow-hidden rounded-lg bg-destructive aspect-[16/10]"
          >
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
              alt="Black Friday Sale"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <h3 className="mb-2 text-3xl font-bold uppercase">Black Friday</h3>
              <p className="mb-3 text-lg">Up to 40% OFF</p>
              <Button variant="secondary" size="sm" className="mt-2">
                Shop Now
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionBanners;
