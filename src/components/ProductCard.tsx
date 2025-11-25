import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  originalPrice?: number;
  badge?: string;
}

const ProductCard = ({ id, name, price, image, originalPrice, badge }: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group overflow-hidden border-border transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        {badge && (
          <div className="absolute left-2 top-2 bg-destructive px-2 py-1 text-xs font-semibold text-destructive-foreground">
            {badge}
          </div>
        )}
        {discount > 0 && (
          <div className="absolute right-2 top-2 bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
            -{discount}%
          </div>
        )}
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-2 bottom-2 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="mb-2 font-medium text-foreground hover:text-accent-foreground transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-foreground">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button size="sm" variant="default">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
