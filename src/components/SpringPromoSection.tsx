import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const SpringPromoSection = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Video / Image Side */}
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <img
              src="https://miruna.io/cdn/shop/files/preview_images/b1b8f3393f3348c88238cac895e0ca05.thumbnail.0000000000.jpg?v=1773405695&width=1080"
              alt="Spring Collection Preview"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg cursor-pointer transition-transform hover:scale-110">
                <Play className="h-6 w-6 text-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Exclusive for Spring 2026
            </p>
            <h2 className="text-lg font-display tracking-tight sm:text-xl md:text-2xl lg:text-3xl mb-4">
              Discover sculpted silhouettes, elegant abayas, and refined evening styles
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Limited pieces
            </p>
            <div>
              <Link
                to="/collection/spring-collection"
                className="inline-block border-b border-foreground pb-1 text-xs font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:text-muted-foreground hover:border-muted-foreground"
              >
                Explore now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpringPromoSection;
