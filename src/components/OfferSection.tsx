import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Sparkles } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_linear_infinite]" />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Limited Time Only</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            BLACK FRIDAY EXTRAVAGANZA
          </h2>
          <p className="mb-2 text-5xl font-bold md:text-7xl">UP TO 40% OFF</p>
          <p className="mb-8 text-xl opacity-90">
            On selected items. Don't miss out on our biggest sale of the year
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
              <Link to="/products?filter=sale">Shop Sale Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[200px] border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/products">Browse All Collections</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm opacity-75">
            <Sparkles className="h-4 w-4" />
            <span>Free shipping on orders over $100</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
