import { Link } from "react-router-dom";

const SpringPromoSection = () => {
  return (
    <section className="min-h-screen flex items-center py-10 md:py-16">
      <div className="container mx-auto px-0 md:px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 items-center">
          {/* Video Side - full bleed on mobile */}
          <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-muted">
            <video
              src="https://miruna.io/cdn/shop/videos/c/vp/0a179ebae7f8446f80a61f738aa903ae/0a179ebae7f8446f80a61f738aa903ae.HD-1080p-7.2Mbps-77810477.mp4?v=0"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              preload="metadata"
            />
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center text-center px-6 py-8 md:text-left md:px-0 md:py-0">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2 sm:text-xs sm:mb-3">
              Spring 2026 Exclusive Drop
            </p>
            <h2 className="text-lg font-display tracking-tight sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 leading-tight">
              Sculpted silhouettes, elegant abayas, and refined evening styles designed for standout moments.
            </h2>
            <p className="text-[11px] text-muted-foreground mb-5 sm:text-sm sm:mb-6">
              Limited Pieces
            </p>
            <div>
              <Link
                to="/collection/spring-collection"
                className="inline-block border border-foreground px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] text-foreground transition-all hover:bg-foreground hover:text-background active:scale-95 sm:border-b sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:px-0 sm:py-0 sm:pb-1"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpringPromoSection;
