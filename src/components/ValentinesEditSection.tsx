import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ValentinesEditSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="/images/valentines-edit.webp"
          alt="Valentines Edit Collection"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md">
              <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl lg:text-5xl mb-4">
                VALENTINES EDIT
              </h2>
              <p className="text-white/80 text-sm md:text-base mb-6">
                Fall in love with our curated collection
              </p>
              <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90">
                <Link to="/collection/valentines">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValentinesEditSection;
