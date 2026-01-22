import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ValentinesEditSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="/images/valentines-edit.webp"
          alt="Valentines Edit Collection"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent md:from-black/40 md:via-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-sm md:max-w-md">
              <h2 className="text-2xl font-light tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4">
                VALENTINES EDIT
              </h2>
              <p className="text-white/90 text-xs sm:text-sm md:text-base mb-4 md:mb-6">
                Fall in love with our curated collection
              </p>
              <Button asChild size="default" className="bg-white text-foreground hover:bg-white/90 md:size-lg">
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
