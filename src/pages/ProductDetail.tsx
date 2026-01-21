import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Ruler } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";
import ColorSelector from "@/components/ColorSelector";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const product = {
    brand: "MIRUNA",
    name: "MEET ME THERE - RED",
    subtitle: "Premium elegance with a flattering silhouette",
    price: 849.00,
    priceCurrency: "AED",
    description: "Elevate your wardrobe with this stunning statement piece. Crafted with premium materials and featuring bold design elements, this piece combines luxury with comfort. Perfect for making an unforgettable impression at any event.",
    images: [
      "https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=800",
      "https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=800",
      "https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=800",
    ],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        images: [
          "https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=800",
          "https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=800",
        ]
      },
      {
        name: "Red",
        hex: "#DC2626",
        images: [
          "https://miruna.io/cdn/shop/files/D0001829.jpg?v=1761559119&width=800",
          "https://miruna.io/cdn/shop/files/D0001829.jpg?v=1761559119&width=800",
        ]
      }
    ],
    sizes: ["S", "M", "L", "XL"],
    sizeAndFit: [
      "Model is 5'9\" and wears size S",
      "Fits true to size",
      "Regular fit through the body",
      "Length: Mini"
    ],
    shippingInfo: [
      "Free shipping on orders over 500 AED",
      "4-hour delivery in Dubai",
      "Same-day delivery across UAE",
      "International shipping: 5-10 business days"
    ],
    returnsInfo: [
      "30-day return policy",
      "Items must be unworn with tags attached",
      "Free returns within UAE",
      "Refunds processed within 5-7 business days"
    ],
    inStock: true,
  };

  const relatedProducts = [
    {
      id: "morning-after-ex",
      name: "MORNING AFTER EX",
      price: 490.13,
      originalPrice: 612.66,
      image: "https://miruna.io/cdn/shop/files/Facetune_26-10-2025-15-54-01_b734120f-4b7f-4886-bd7f-1d61d4a3e6ae.jpg?v=1761560458&width=600",
    },
    {
      id: "out-of-his-budget-pink",
      name: "OUT OF HIS BUDGET - PINK",
      price: 272.29,
      originalPrice: 340.37,
      image: "https://miruna.io/cdn/shop/files/D0001698_ff86f997-3e1c-4456-891e-748cd21f70ef.jpg?v=1761556951&width=600",
    },
    {
      id: "split-decision-pink-white",
      name: "SPLIT DECISION - PINK & WHITE",
      price: 155.04,
      originalPrice: 258.41,
      image: "https://miruna.io/cdn/shop/files/D0007578.webp?v=1761738523&width=600",
    },
  ];

  const handleColorChange = (colorName: string) => {
    setSelectedColor(colorName);
    const selectedColorData = product.colors.find(c => c.name === colorName);
    if (selectedColorData) {
      setSelectedImage(0);
    }
  };

  const getCurrentImages = () => {
    const colorData = product.colors.find(c => c.name === selectedColor);
    return colorData?.images || product.images;
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose a size before adding to cart",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedColor}, ${selectedSize}) added to your cart`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
    });
  };

  const tabbyMonthlyPrice = (product.price / 4).toFixed(2);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6 lg:py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4 aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={getCurrentImages()[selectedImage]}
                alt={`${product.name} - ${selectedColor}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {getCurrentImages().map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[3/4] overflow-hidden border transition-all ${
                    selectedImage === index ? "border-foreground" : "border-transparent"
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Brand */}
            <p className="text-xs tracking-widest text-muted-foreground uppercase mb-1">
              {product.brand}
            </p>
            
            {/* Product Name */}
            <h1 className="text-xl font-semibold tracking-tight mb-1">
              {product.name}
            </h1>
            
            {/* Subtitle */}
            {product.subtitle && (
              <p className="text-sm text-muted-foreground mb-4">
                {product.subtitle}
              </p>
            )}

            {/* Price */}
            <p className="text-base font-medium mb-1">
              {product.price.toFixed(2)} {product.priceCurrency}
            </p>

            {/* Tax Notice */}
            <p className="text-xs text-muted-foreground mb-4">
              Taxes included.{" "}
              <Link to="/shipping" className="underline hover:text-foreground">
                Shipping
              </Link>{" "}
              calculated at checkout.
            </p>

            {/* Tabby Payment Option */}
            <div className="flex items-center justify-between border border-border rounded-md p-3 mb-6">
              <div className="text-sm">
                <span>As low as </span>
                <span className="font-semibold">৳ {tabbyMonthlyPrice}/month</span>
                <span> or 4 interest-free payments. </span>
                <button className="underline font-medium hover:text-muted-foreground">
                  Learn more
                </button>
              </div>
              <div className="bg-[#3CFFD0] text-black font-bold text-sm px-3 py-1.5 rounded">
                tabby
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="text-sm mb-3">
                Color: <span className="font-medium">{selectedColor}</span>
              </p>
              <ColorSelector 
                colors={product.colors} 
                selectedColor={selectedColor} 
                onColorChange={handleColorChange}
              />
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <p className="text-sm mb-3">Size</p>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] h-10 px-4 rounded-full border text-sm font-medium transition-all ${
                      selectedSize === size 
                        ? "bg-foreground text-background border-foreground" 
                        : "bg-background text-foreground border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Chart Link */}
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6">
              <Ruler className="h-4 w-4" />
              <span>Size chart</span>
            </button>

            {/* Add to Cart Button */}
            <Button 
              size="lg" 
              className="w-full h-12 rounded-md text-base font-medium mb-3"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>

            {/* Add to Wishlist */}
            <button 
              onClick={handleAddToWishlist}
              className="w-full flex items-center justify-center gap-2 text-sm py-3 hover:text-muted-foreground transition-colors"
            >
              <Heart className="h-4 w-4" />
              <span>Add to wishlist</span>
            </button>

            {/* Accordion Sections */}
            <div className="mt-8 border-t border-border">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="details" className="border-b border-border">
                  <AccordionTrigger className="text-sm font-medium py-4 hover:no-underline">
                    PRODUCT DETAILS
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    {product.description}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="size-fit" className="border-b border-border">
                  <AccordionTrigger className="text-sm font-medium py-4 hover:no-underline">
                    SIZE & FIT
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    <ul className="space-y-2">
                      {product.sizeAndFit.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping" className="border-b border-border">
                  <AccordionTrigger className="text-sm font-medium py-4 hover:no-underline">
                    SHIPPING INFORMATION
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    <ul className="space-y-2">
                      {product.shippingInfo.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="returns" className="border-b border-border">
                  <AccordionTrigger className="text-sm font-medium py-4 hover:no-underline">
                    RETURNS & EXCHANGES
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    <ul className="space-y-2">
                      {product.returnsInfo.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="mb-8 text-xl font-semibold">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
