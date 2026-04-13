import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useRef, useState } from "react";
import { carouselTabs, productsByTab, type CarouselTab } from "@/data/carouselProducts";

const SheCollectionCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [wishlisted, setWishlisted] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<CarouselTab>("new-in");

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.6;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const toggleWishlist = (id: string) => {
    setWishlisted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleTabChange = (tab: CarouselTab) => {
    setActiveTab(tab);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const products = productsByTab[activeTab];

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header with Tabs */}
        <div className="mb-5 flex flex-col gap-3 md:mb-8 md:flex-row md:items-center md:justify-between">
          {/* Scrollable tabs with snap on mobile */}
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:gap-2 md:gap-3">
            {carouselTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`whitespace-nowrap snap-start px-4 py-2 text-[10px] font-medium uppercase tracking-wider transition-all duration-200 flex-shrink-0 sm:px-5 sm:py-2.5 sm:text-xs active:scale-95 ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-foreground hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Arrows - desktop only */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-9 w-9 items-center justify-center border border-foreground/20 text-foreground/60 transition-colors hover:border-foreground hover:text-foreground"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-9 w-9 items-center justify-center border border-foreground/20 text-foreground/60 transition-colors hover:border-foreground hover:text-foreground"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel - snap scroll on mobile */}
        <div
          ref={scrollRef}
          className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory sm:gap-3 md:gap-4 md:snap-none"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex-shrink-0 snap-start"
              style={{ width: "calc(50% - 5px)", minWidth: "160px", maxWidth: "300px" }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    loading="lazy"
                  />
                  <img
                    src={product.hoverImage}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    loading="lazy"
                  />
                </Link>

                {/* Wishlist - larger tap target on mobile */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute right-2 top-2 p-2 transition-transform hover:scale-110 active:scale-95 sm:right-3 sm:top-3 sm:p-1.5"
                  aria-label="Add to wishlist"
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      wishlisted.has(product.id)
                        ? "fill-destructive text-destructive"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  />
                </button>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute left-2 top-2 bg-background/90 px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider text-foreground sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="mt-2.5 space-y-0.5 sm:mt-3 sm:space-y-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-[10px] font-semibold uppercase tracking-wide text-foreground line-clamp-1 sm:text-xs hover:text-muted-foreground transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-[9px] text-muted-foreground line-clamp-1 sm:text-[11px]">
                  {product.subtitle}
                </p>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <p className="text-[11px] font-medium text-foreground sm:text-sm">
                    {product.price.toFixed(2)} AED
                  </p>
                  {product.originalPrice && (
                    <p className="text-[9px] text-muted-foreground line-through sm:text-xs">
                      {product.originalPrice.toFixed(2)} AED
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SheCollectionCarousel;
