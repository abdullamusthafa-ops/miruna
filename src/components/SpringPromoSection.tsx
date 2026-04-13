import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const SpringPromoSection = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Video / Image Side */}
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <video
              src="https://miruna.io/cdn/shop/videos/c/vp/0a179ebae7f8446f80a61f738aa903ae/0a179ebae7f8446f80a61f738aa903ae.HD-1080p-7.2Mbps-77810477.mp4?v=0"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
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
