import { useState } from "react";
import { Heart, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import type { ColorVariant } from "@/data/products";

interface ProductCardProps {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  priceDhs?: number;
  image: string;
  hoverImage?: string;
  originalPrice?: number;
  originalPriceDhs?: number;
  badge?: string;
  colors?: ColorVariant[];
}

const badgeStyles: Record<string, string> = {
  "EXCLUSIVE": "bg-foreground text-background",
  "NEW IN": "bg-foreground text-background",
  "SELLING FAST": "bg-destructive text-destructive-foreground",
  "LOW STOCK": "bg-destructive text-destructive-foreground",
  "MOST LOVED": "bg-primary text-primary-foreground",
  "LIMITED PIECES": "bg-foreground text-background",
  "SALE": "bg-destructive text-destructive-foreground",
};

const ProductCard = ({ id, name, subtitle, price, priceDhs, image, hoverImage, originalPrice, originalPriceDhs, badge, colors }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-2.5 sm:mb-3">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className={`h-full w-full object-cover transition-opacity duration-300 ${hoverImage ? "group-hover:opacity-0" : "group-hover:scale-105 transition-transform duration-500"}`}
            loading="lazy"
          />
          {hoverImage && (
            <img
              src={hoverImage}
              alt={name}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              loading="lazy"
            />
          )}
        </Link>

        {/* Wishlist Heart */}
        <button
          onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted); }}
          className="absolute right-2 top-2 p-1.5 transition-transform hover:scale-110 active:scale-95 sm:right-3 sm:top-3"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`h-5 w-5 transition-colors sm:h-[22px] sm:w-[22px] ${
              isWishlisted
                ? "fill-destructive text-destructive"
                : "text-foreground/50 hover:text-foreground"
            }`}
          />
        </button>

        {/* Quick Add */}
        <button
          className="absolute right-2 bottom-2 p-1.5 bg-background/90 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-foreground hover:text-background active:scale-95 sm:right-3 sm:bottom-3"
          aria-label="Quick add"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Badge */}
        {badge && (
          <div className={`absolute left-2 top-2 px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px] ${badgeStyles[badge] || "bg-foreground text-background"}`}>
            {badge}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-0.5 sm:space-y-1">
        <Link to={`/product/${id}`}>
          <h3 className="text-[10px] font-semibold uppercase tracking-wide text-foreground hover:text-muted-foreground transition-colors line-clamp-1 sm:text-xs">
            {name}
          </h3>
        </Link>

        {subtitle && (
          <p className="text-[9px] text-muted-foreground line-clamp-1 sm:text-[11px]">
            {subtitle}
          </p>
        )}

        <div className="flex items-center gap-1.5 sm:gap-2 pt-0.5">
          <span className="text-[11px] font-medium text-foreground sm:text-sm">
            {priceDhs ? `${priceDhs.toFixed(0)} AED` : `$${price.toFixed(2)}`}
          </span>
          {originalPriceDhs && priceDhs && originalPriceDhs > priceDhs && (
            <span className="text-[9px] text-muted-foreground line-through sm:text-xs">
              {originalPriceDhs.toFixed(0)} AED
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
