import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Heart, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";
import ColorSelector from "@/components/ColorSelector";
import { Label } from "@/components/ui/label";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("M");

  const product = {
    name: "THE BEST YOU EVER HAD",
    subtitle: "Premium elegance with a flattering silhouette",
    price: 435.45,
    originalPrice: 544.32,
    priceDhs: 1599.20,
    originalPriceDhs: 1999,
    rating: 4.9,
    reviews: 247,
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
        name: "Pink",
        hex: "#FFC0CB",
        images: [
          "https://miruna.io/cdn/shop/files/D0001829.jpg?v=1761559119&width=800",
          "https://miruna.io/cdn/shop/files/D0001829.jpg?v=1761559119&width=800",
        ]
      }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    features: [
      "Premium quality materials",
      "Made in UAE with precision",
      "Comfortable and breathable fabric",
      "Statement design that turns heads",
      "Easy care and maintenance",
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
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name} (${selectedColor}, ${selectedSize}) added to your cart`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-foreground">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div>
            <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-muted group">
              <img
                src={getCurrentImages()[selectedImage]}
                alt={`${product.name} - ${selectedColor}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {getCurrentImages().map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all hover:border-primary ${
                    selectedImage === index ? "border-primary ring-2 ring-primary ring-offset-2" : "border-border"
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="mb-1 text-3xl font-bold tracking-tight">{product.name}</h1>
            {product.subtitle && (
              <p className="mb-3 text-base text-muted-foreground">{product.subtitle}</p>
            )}
            <div className="mb-4 flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-warning text-warning" : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <div className="mb-6 flex items-center space-x-4">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="rounded-full bg-destructive px-3 py-1 text-sm font-semibold text-destructive-foreground">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            <p className="mb-6 text-muted-foreground">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <Label className="mb-3 block font-semibold">Color: {selectedColor}</Label>
              <ColorSelector 
                colors={product.colors} 
                selectedColor={selectedColor} 
                onColorChange={handleColorChange}
              />
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <Label className="mb-3 block font-semibold">Size: {selectedSize}</Label>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border-2 transition-all hover:border-primary ${
                      selectedSize === size 
                        ? "border-primary bg-primary text-primary-foreground" 
                        : "border-border"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 font-semibold">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-success">✓</span>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="mb-2 block font-semibold">Quantity:</label>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-6 flex space-x-4">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {product.inStock && (
              <div className="mb-6 rounded-lg bg-success/10 p-4 text-sm text-success">
                ✓ In Stock - Ships within 24 hours
              </div>
            )}

            {/* Trust Badges */}
            <div className="space-y-3 border-t border-border pt-6">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-accent" />
                <span className="text-sm">Fast worldwide shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-sm">Secure payment & authenticity guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <RefreshCw className="h-5 w-5 text-accent" />
                <span className="text-sm">30-day easy returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">Product Description</h3>
                  <p className="mb-4 text-muted-foreground">{product.description}</p>
                  <p className="text-muted-foreground">
                    Each piece is meticulously crafted by skilled artisans, ensuring exceptional quality and attention to detail. 
                    Our jewelry is designed to be cherished for generations, combining timeless elegance with contemporary style.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">Shipping Information</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Free worldwide shipping on orders over $100</li>
                    <li>• 4-hour delivery in Dubai</li>
                    <li>• Same-day delivery across UAE</li>
                    <li>• International shipping: 5-10 business days</li>
                    <li>• All items are carefully packaged in premium gift boxes</li>
                    <li>• Full tracking information provided</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">Customer Reviews</h3>
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-b border-border pb-6 last:border-0">
                        <div className="mb-2 flex items-center justify-between">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                              <Star key={index} className="h-4 w-4 fill-warning text-warning" />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">2 days ago</span>
                        </div>
                        <p className="mb-2 font-semibold">Absolutely Beautiful!</p>
                        <p className="text-sm text-muted-foreground">
                          The quality is outstanding and it arrived even more beautiful than in the photos. Highly recommend!
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold">You May Also Like</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
