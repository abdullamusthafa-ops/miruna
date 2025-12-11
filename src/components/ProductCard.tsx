import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import type { ColorVariant } from "@/data/products";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  originalPrice?: number;
  badge?: string;
  colors?: ColorVariant[];
}

const ProductCard = ({ id, name, price, image, originalPrice, badge, colors }: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group overflow-hidden border-border transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        {badge && (
          <div className="absolute left-2 top-2 bg-destructive px-2 py-1 text-xs font-semibold text-destructive-foreground uppercase tracking-wider">
            {badge}
          </div>
        )}
        {discount > 0 && (
          <div className="absolute right-2 top-2 bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
            -{discount}%
          </div>
        )}
        <div className="absolute inset-x-2 bottom-2 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <Button
            size="icon"
            variant="secondary"
            className="flex-1 backdrop-blur-sm bg-background/80"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="flex-1 backdrop-blur-sm bg-background/80"
            asChild
          >
            <Link to={`/product/${id}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="mb-2 font-medium text-foreground hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        
        {colors && colors.length > 0 && (
          <div className="mb-3 flex items-center gap-1.5">
            {colors.map((color) => (
              <div
                key={color.name}
                className="h-4 w-4 rounded-full border border-border"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">${price.toFixed(2)}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          <Button size="sm" variant="default" className="shrink-0">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
