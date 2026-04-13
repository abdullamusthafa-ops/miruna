import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useRef, useState } from "react";

const sheProducts = [
  {
    id: "she-less-said",
    name: "SHE - LESS SAID",
    subtitle: "Sculpted Satin Dress With Twisted Neckline And Precise Cut-Out",
    price: 849,
    image: "https://miruna.io/cdn/shop/files/D0009272.jpg?v=1773215857&width=3412",
    hoverImage: "https://miruna.io/cdn/shop/files/D0009237.jpg?v=1773215857&width=3655",
    badge: "Selling Fast",
  },
  {
    id: "she-enough",
    name: "SHE - ENOUGH",
    subtitle: "Fluid Gold Satin-Blend Statement Silhouette",
    price: 599,
    image: "https://miruna.io/cdn/shop/files/D0008965.jpg?v=1773056732&width=3712",
    hoverImage: "https://miruna.io/cdn/shop/files/D0008975.jpg?v=1773056732&width=3897",
    badge: "Limited Pieces",
  },
  {
    id: "she-not-much",
    name: "SHE - NOT MUCH",
    subtitle: "High-Neck Dress With Delicate Floral Sequin Detailing",
    price: 849,
    image: "https://miruna.io/cdn/shop/files/D0009825.jpg?v=1773058099&width=3333",
    hoverImage: "https://miruna.io/cdn/shop/files/D0009854.jpg?v=1773058157&width=3579",
    badge: "Low Stock",
  },
  {
    id: "she-nothing-extra",
    name: "SHE - NOTHING EXTRA",
    subtitle: "Metallic Lamé Feather-Trim Cardigan With Fluid Drape",
    price: 999,
    image: "https://miruna.io/cdn/shop/files/D0000383.jpg?v=1773057745&width=3761",
    hoverImage: "https://miruna.io/cdn/shop/files/D0000402.jpg?v=1772697089&width=4084",
    badge: "PRE-ORDER",
  },
  {
    id: "she-just-enough",
    name: "SHE - JUST ENOUGH",
    subtitle: "Sequin Bodice Dress Balanced With Smooth Black Jersey Skirt",
    price: 699,
    image: "https://miruna.io/cdn/shop/files/D0009940.jpg?v=1773057159&width=3345",
    hoverImage: "https://miruna.io/cdn/shop/files/D0009933.jpg?v=1773057159&width=3331",
    badge: "Limited Pieces",
  },
  {
    id: "she-nothing-heavy-white",
    name: "SHE - NOTHING HEAVY WHITE",
    subtitle: "Sheer Tie-Front Cardigan In Lightweight Organza Satin",
    price: 399,
    image: "https://miruna.io/cdn/shop/files/D0009790.jpg?v=1773056901&width=3729",
    hoverImage: "https://miruna.io/cdn/shop/files/D0009755.jpg?v=1773056927&width=3493",
  },
  {
    id: "she-no-additions",
    name: "SHE - NO ADDITIONS",
    subtitle: "Lightweight Feather-Trim Outer Layer With Soft Movement",
    price: 999,
    image: "https://miruna.io/cdn/shop/files/D0009528.jpg?v=1773215898&width=3711",
    hoverImage: "https://miruna.io/cdn/shop/files/D0009541.jpg?v=1773215926&width=3711",
    badge: "PRE-ORDER",
  },
  {
    id: "she-left-unsaid",
    name: "SHE - LEFT UNSAID",
    subtitle: "Full-Length Satin Silhouette With Fluid Layered Overlay",
    price: 799,
    image: "https://miruna.io/cdn/shop/files/D0009118.jpg?v=1773215571&width=3364",
    hoverImage: "https://miruna.io/cdn/shop/files/D0009089.jpg?v=1773215571&width=3488",
    badge: "PRE-ORDER",
  },
  {
    id: "she-nearly-invisible-navy-blue",
    name: "SHE - NEARLY INVISIBLE NAVY BLUE",
    subtitle: "Sheer Organza Outer Layer With Soft, Fluid Drape",
    price: 399,
    image: "https://miruna.io/cdn/shop/files/D0009367.jpg?v=1773055809&width=3661",
    hoverImage: "https://miruna.io/cdn/shop/files/D0009385.jpg?v=1773055848&width=3617",
  },
  {
    id: "she-red-alert",
    name: "SHE - RED ALERT",
    subtitle: "Leather-effect sculpted silhouette with statement side slit",
    price: 649,
    image: "https://miruna.io/cdn/shop/files/D0009991.jpg?v=1773055554&width=3470",
    hoverImage: "https://miruna.io/cdn/shop/files/D0000162.jpg?v=1773055554&width=3759",
    badge: "Selling Fast",
  },
];

const SheCollectionCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [wishlisted, setWishlisted] = useState<Set<string>>(new Set());

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

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between md:mb-8">
          <h2 className="text-xl font-display tracking-tight sm:text-2xl md:text-3xl">
            She
          </h2>
          <div className="flex items-center gap-2">
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

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide md:gap-4"
        >
          {sheProducts.map((product) => (
            <div
              key={product.id}
              className="group flex-shrink-0"
              style={{ width: "calc(50% - 6px)", minWidth: "170px", maxWidth: "300px" }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={product.hoverImage}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </Link>

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute right-3 top-3 p-1.5 transition-transform hover:scale-110"
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
                  <div className="absolute left-3 top-3 bg-background/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="mt-3 space-y-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-[11px] font-semibold uppercase tracking-wide text-foreground line-clamp-1 sm:text-xs hover:text-muted-foreground transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-[10px] text-muted-foreground line-clamp-1 sm:text-[11px]">
                  {product.subtitle}
                </p>
                <p className="text-xs font-medium text-foreground sm:text-sm">
                  {product.price.toFixed(2)} AED
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SheCollectionCarousel;
