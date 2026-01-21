import { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { ColorVariant } from "@/data/products";

interface ProductCardProps {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  priceDhs?: number;
  image: string;
  originalPrice?: number;
  originalPriceDhs?: number;
  badge?: string;
  colors?: ColorVariant[];
}

const ProductCard = ({ id, name, subtitle, price, priceDhs, image, originalPrice, originalPriceDhs, badge, colors }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        
        {/* Wishlist Heart */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute right-3 top-3 p-2 transition-transform hover:scale-110"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={`h-6 w-6 transition-colors ${
              isWishlisted 
                ? "fill-destructive text-destructive" 
                : "text-foreground/70 hover:text-foreground"
            }`} 
          />
        </button>

        {/* Sale Badge */}
        {badge && (
          <div className="absolute left-3 top-3 bg-destructive px-2 py-1 text-xs font-semibold text-destructive-foreground uppercase tracking-wider">
            {badge}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <Link to={`/product/${id}`}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors line-clamp-1">
            {name}
          </h3>
        </Link>
        
        {subtitle && (
          <p className="text-xs text-muted-foreground line-clamp-1">
            {subtitle}
          </p>
        )}

        <div className="flex items-center gap-2 pt-1">
          <span className="text-sm font-medium text-foreground">
            {priceDhs ? `${priceDhs.toFixed(2)} د.إ AED` : `${price.toFixed(2)} د.إ AED`}
          </span>
          {originalPriceDhs && priceDhs && originalPriceDhs > priceDhs && (
            <span className="text-xs text-muted-foreground line-through">
              {originalPriceDhs.toFixed(2)} د.إ
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
