import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const saleProducts = [
  {
    id: "better-luck-next-time-pink",
    name: "BETTER LUCK NEXT TIME - PINK",
    price: 649,
    originalPrice: 889,
    image: "https://miruna.io/cdn/shop/files/BETTERLUCKNEXTTIME-PINK.webp?v=1769079719&width=3717",
    hoverImage: "https://miruna.io/cdn/shop/files/BETTERLUCKNEXTTIME-PINK02.webp?v=1769079719&width=3717",
  },
  {
    id: "asked-anyway-silver",
    name: "ASKED ANYWAY - SILVER",
    price: 599,
    originalPrice: 949,
    image: "https://miruna.io/cdn/shop/files/ASKEDANYWAY-ROSESILVER01_11bb99c2-27ce-4c7d-889c-8bca9318fe6b.webp?v=1769069916&width=3690",
    hoverImage: "https://miruna.io/cdn/shop/files/ASKEDANYWAY-ROSESILVER02_0e181efa-7982-41fe-9940-cdcd0767833b.webp?v=1769069916&width=3943",
  },
  {
    id: "not-sorry-blue-silver",
    name: "NOT SORRY - BLUE SILVER",
    price: 699,
    originalPrice: 999,
    image: "https://miruna.io/cdn/shop/files/NOTSORRY-BLUESILVER01.webp?v=1769070291&width=3655",
    hoverImage: "https://miruna.io/cdn/shop/files/NOTSORRY-BLUESILVER02.webp?v=1769070291&width=3517",
  },
  {
    id: "home-ish-on-time-silver",
    name: "HOME-ISH ON TIME - SILVER",
    price: 599,
    originalPrice: 849,
    image: "https://miruna.io/cdn/shop/files/HOME-ISHONTIME-SILVER01_377065dd-8d48-405a-a04c-16ec672a9740.webp?v=1769070190&width=3551",
    hoverImage: "https://miruna.io/cdn/shop/files/HOME-ISHONTIME-SILVER02_3442041f-5791-44bd-add5-8a98ea1cbaf2.webp?v=1769070190&width=3387",
  },
  {
    id: "who-invited-her-white",
    name: "WHO INVITED HER - WHITE",
    price: 699,
    originalPrice: 999,
    image: "https://miruna.io/cdn/shop/files/WHOINVITEDHER-WHITE01.webp?v=1769081854&width=3717",
    hoverImage: "https://miruna.io/cdn/shop/files/WHOINVITEDHER-WHITE02.webp?v=1769081854&width=3717",
  },
  {
    id: "heartbreaker-pastel-yellow",
    name: "HEARTBREAKER - PASTEL YELLOW",
    price: 449,
    originalPrice: 789,
    image: "https://miruna.io/cdn/shop/files/HEARTBREAKER-PASTELYELLOW01.webp?v=1769071404&width=3497",
    hoverImage: "https://miruna.io/cdn/shop/files/HEARTBREAKER-PASTELYELLOW02.webp?v=1769071405&width=3497",
  },
  {
    id: "asked-anyway-blue-silver",
    name: "ASKED ANYWAY - BLUE SILVER",
    price: 599,
    originalPrice: 949,
    image: "https://miruna.io/cdn/shop/files/ASKEDANYWAY-BLUESILVER01.webp?v=1769069888&width=3717",
    hoverImage: "https://miruna.io/cdn/shop/files/ASKEDANYWAY-BLUESILVER02.webp?v=1769069888&width=3717",
  },
  {
    id: "not-sorry-rose-silver",
    name: "NOT SORRY - ROSE SILVER",
    price: 699,
    originalPrice: 999,
    image: "https://miruna.io/cdn/shop/files/NOTSORRY-ROSESILVER01.webp?v=1769070323&width=3717",
    hoverImage: "https://miruna.io/cdn/shop/files/NOTSORRY-ROSESILVER02.webp?v=1769070320&width=3717",
  },
];

const SaleProductsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.6;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8 md:py-14">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between md:mb-8">
          <h2 className="text-base font-display tracking-tight sm:text-xl md:text-2xl">
            Up to 40% Off – Selected Dresses
          </h2>
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center border border-foreground transition-colors hover:bg-foreground hover:text-background"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center border border-foreground transition-colors hover:bg-foreground hover:text-background"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel with snap scroll on mobile */}
        <div
          ref={scrollRef}
          className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory sm:gap-3 md:gap-4 md:snap-none"
        >
          {saleProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group flex-shrink-0 snap-start"
              style={{ width: "calc(50% - 5px)", minWidth: "155px", maxWidth: "280px" }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                {/* Sale badge */}
                <div className="absolute left-2 top-2 z-10 bg-destructive px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-destructive-foreground sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
                  Sale
                </div>
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
              </div>
              <div className="mt-2.5 space-y-0.5 sm:mt-3 sm:space-y-1">
                <h3 className="text-[10px] font-medium uppercase tracking-wide text-foreground line-clamp-1 sm:text-xs">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-[11px] font-semibold text-foreground sm:text-sm">
                    {product.price.toFixed(2)} AED
                  </span>
                  <span className="text-[9px] text-muted-foreground line-through sm:text-xs">
                    {product.originalPrice.toFixed(2)} AED
                  </span>
                  <span className="text-[8px] font-bold text-destructive sm:text-[10px]">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Shop Sale CTA */}
        <div className="mt-5 text-center md:mt-8">
          <Button asChild variant="outline" className="border-foreground px-8 w-full sm:w-auto active:scale-95 transition-transform">
            <Link to="/products?filter=sale">SHOP SALE</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SaleProductsSection;
