import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const LimitedEditionBanner = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80')] bg-cover bg-center opacity-20" />
      <div className="relative container mx-auto px-4 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center space-x-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Limited Edition</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">FLUFF STUFF</h2>
          <p className="mb-8 text-lg opacity-90">
            Exclusive collection dropping soon. Be the first to own these limited pieces.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-lg">
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LimitedEditionBanner;
