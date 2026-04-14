import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { carouselTabs, productsByTab, type CarouselTab } from "@/data/carouselProducts";

const SheCollectionCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [wishlisted, setWishlisted] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<CarouselTab>("new-in");
  const [desktopPage, setDesktopPage] = useState(0);

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
    setDesktopPage(0);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const products = productsByTab[activeTab].slice(0, 10);
  const totalPages = Math.ceil(products.length / 5);
  const desktopProducts = products.slice(desktopPage * 5, desktopPage * 5 + 5);

  const handleDesktopNav = (direction: "left" | "right") => {
    setDesktopPage((prev) => {
      if (direction === "left") return Math.max(0, prev - 1);
      return Math.min(totalPages - 1, prev + 1);
    });
  };

  return (
    <section className="py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-10">
        {/* Header: Title left, Tabs right */}
        <div className="mb-3 flex flex-col gap-2 md:mb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-light text-foreground md:text-2xl">A Moment For New</h2>
            <p className="mt-0.5 text-[10px] text-muted-foreground md:text-xs">
              Season defining styles that are as versatile as they are timeless.
            </p>
          </div>
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:gap-2 md:gap-2">
            {carouselTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`whitespace-nowrap rounded-full px-3 py-1 text-[9px] font-medium uppercase tracking-wider transition-all duration-200 flex-shrink-0 sm:px-4 sm:py-1.5 sm:text-[10px] active:scale-95 ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-foreground hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop/Tablet arrows */}
          {!isMobile && desktopPage > 0 && (
            <button
              onClick={() => handleDesktopNav("left")}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 hidden h-10 w-10 items-center justify-center rounded-full bg-background shadow-md border border-border text-foreground/60 transition-colors hover:text-foreground md:flex"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          {!isMobile && desktopPage < totalPages - 1 && (
            <button
              onClick={() => handleDesktopNav("right")}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 hidden h-10 w-10 items-center justify-center rounded-full bg-background shadow-md border border-border text-foreground/60 transition-colors hover:text-foreground md:flex"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          {isMobile ? (
            /* Mobile: 2-up scrollable */
            <div
              ref={scrollRef}
              className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group flex-shrink-0 snap-start"
                  style={{ width: "calc(50% - 4px)", minWidth: "140px" }}
                >
                  {renderProduct(product, wishlisted, toggleWishlist)}
                </div>
              ))}
            </div>
          ) : (
            /* Desktop/Tablet: 5 per page */
            <div className="grid grid-cols-5 gap-3 transition-all duration-300">
              {desktopProducts.map((product) => (
                <div key={product.id} className="group min-w-0">
                  {renderProduct(product, wishlisted, toggleWishlist)}
                </div>
              ))}
            </div>
          )}

          {/* Page dots for desktop */}
          {!isMobile && totalPages > 1 && (
            <div className="flex justify-center gap-1.5 mt-4">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setDesktopPage(i)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === desktopPage ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

function renderProduct(
  product: { id: string; name: string; subtitle: string; price: number; originalPrice?: number; image: string; hoverImage: string; badge?: string },
  wishlisted: Set<string>,
  toggleWishlist: (id: string) => void
) {
  return (
    <>
      <div className="relative aspect-[3/4] md:aspect-[3/4.2] overflow-hidden bg-muted">
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

        {product.badge && (
          <div className="absolute left-2 bottom-2 bg-background/90 px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider text-foreground sm:left-3 sm:bottom-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
            {product.badge}
          </div>
        )}
      </div>

      <div className="mt-2.5 space-y-0.5 sm:mt-3 sm:space-y-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-[10px] font-semibold uppercase tracking-wide text-foreground sm:text-xs hover:text-muted-foreground transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-[9px] text-muted-foreground sm:text-[11px] line-clamp-2">
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
    </>
  );
}

export default SheCollectionCarousel;
