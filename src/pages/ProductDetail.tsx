import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Truck, RotateCcw, Copy, Star, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";
import { allProducts } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const productDatabase: Record<string, {
  name: string;
  subtitle: string;
  price: number;
  priceDhs: number;
  images: string[];
  colors: Array<{ name: string; hex: string; link?: string }>;
  sizes: string[];
  sizeNote: string;
  fitNote: string;
  description: string;
  keyFeatures: string[];
  fitSizing: string;
  fabricComposition: string[];
  careInstructions: string;
  badge?: string;
}> = {
  "morning-after-ex": {
    name: "MORNING AFTER EX SET & COVER UP - WHITE",
    subtitle: "Feather Blazer Paired With A Sheer Corset-Style Mini Dress",
    price: 585.16,
    priceDhs: 2149,
    images: [
      "https://miruna.io/cdn/shop/files/D0000265.jpg?v=1773870506&width=800",
      "https://miruna.io/cdn/shop/files/D0000326.jpg?v=1773870506&width=800",
      "https://miruna.io/cdn/shop/files/D0000315.jpg?v=1773870506&width=800",
      "https://miruna.io/cdn/shop/files/D0000303.jpg?v=1772606590&width=800",
      "https://miruna.io/cdn/shop/files/D0000328.jpg?v=1772606569&width=800",
      "https://miruna.io/cdn/shop/files/D0000275.jpg?v=1772606569&width=800",
    ],
    colors: [{ name: "White", hex: "#F5F5F5" }],
    sizes: ["S", "M", "L"],
    sizeNote: "Model is 170 cm / 5'7\" and wears size S (dress) and One Size (blazer).",
    fitNote: "This style runs true to size — take your usual size for the best fit.",
    description: "The Morning After Ex Set in white combines sculpted structure with soft movement, creating a striking contrast between precision and fluidity. The sheer corset dress is crafted from structured mesh that contours the body closely, shaping the waist and hips while maintaining a light, barely-there feel.",
    keyFeatures: [
      "Two-piece set with corset dress and feather blazer",
      "Structured mesh corset dress shaping the waist and hips",
      "Semi-sheer finish creating subtle transparency",
      "Natural feather detailing on the blazer adding movement and texture",
      "Tailored blazer silhouette balancing the softness of the dress",
      "Layered look combining structure and fluidity",
    ],
    fitSizing: "Designed with a structured corset fit through the dress, while the blazer offers a tailored yet comfortable silhouette. True to size.",
    fabricComposition: [
      "Dress — Structured mesh with lycra lining",
      "Blazer — Natural feathers with premium tailoring blend",
    ],
    careInstructions: "Dry clean only.",
    badge: "EXCLUSIVE",
  },
};

const defaultProduct = {
  name: "MEET ME THERE - RED",
  subtitle: "Off-Shoulder Corset Mini Dress",
  price: 231.18,
  priceDhs: 849,
  images: [
    "https://miruna.io/cdn/shop/files/MEETMETHERE-RED01.webp?v=1769080404&width=800",
    "https://miruna.io/cdn/shop/files/MEETMETHERE-RED02.webp?v=1769080404&width=800",
    "https://miruna.io/cdn/shop/files/MEETMETHERE-RED01.webp?v=1769080404&width=800",
    "https://miruna.io/cdn/shop/files/MEETMETHERE-RED02.webp?v=1769080404&width=800",
  ],
  colors: [
    { name: "Red", hex: "#DC2626" },
    { name: "Brown", hex: "#8B5E3C" },
  ],
  sizes: ["S", "M", "L"],
  sizeNote: "Model is 170 cm / 5'7\" and wears size S.",
  fitNote: "This style runs true to size — take your usual size for the best fit.",
  description: "A bold, body-sculpting mini dress with off-shoulder corset detailing and a structured silhouette.",
  keyFeatures: [
    "Off-shoulder corset design",
    "Structured boning for support",
    "Body-sculpting fit",
    "Mini length",
  ],
  fitSizing: "True to size with structured corset fit.",
  fabricComposition: ["Premium stretch fabric with corset boning"],
  careInstructions: "Dry clean only.",
};

const reviews = [
  { name: "Eliza", text: "amazing dress", rating: 5 },
  { name: "Anastasia", text: "I wore this dress to an event and got so many compliments! It's classic, feminine, and pairs perfectly with heels or flats.", rating: 5 },
  { name: "Didi", text: "Beautiful quality and perfect fit!", rating: 5 },
  { name: "Sarah", text: "The fabric is incredible. Worth every dirham.", rating: 5 },
  { name: "Noor", text: "Stunning piece, got so many compliments!", rating: 5 },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [reviewScrollIndex, setReviewScrollIndex] = useState(0);

  const product = (id && productDatabase[id]) || defaultProduct;
  const tabbyMonthlyPrice = (product.priceDhs / 4).toFixed(2);

  const recommendedProducts = allProducts.filter(p => p.id !== id).slice(0, 8);

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
      description: `${product.name} (${selectedSize}) added to your cart`,
    });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("WELCOME");
    setCopiedCode(true);
    toast({ title: "Code copied!", description: "WELCOME has been copied to your clipboard" });
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-4 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-6 lg:gap-12">
          
          {/* LEFT: Product Images - 2 Column Grid like live site */}
          <div className="grid grid-cols-2 gap-1">
            {product.images.map((img, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={img}
                  alt={`${product.name} - View ${i + 1}`}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>

          {/* RIGHT: Product Info - Sticky */}
          <div className="lg:sticky lg:top-4 lg:self-start lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto lg:scrollbar-hide">
            
            {/* Reviews Badge */}
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-foreground text-foreground" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">(10)</span>
            </div>

            {/* Product Name */}
            <h1 className="text-lg font-medium tracking-tight uppercase mb-1">
              {product.name}
            </h1>

            {/* Subtitle */}
            <p className="text-[13px] text-muted-foreground mb-4">
              {product.subtitle}
            </p>

            {/* Price */}
            <p className="text-sm mb-4">
              <span className="text-muted-foreground text-xs mr-1">Sale price</span>
              {product.priceDhs.toLocaleString()}.00 AED
            </p>

            {/* Tabby Payment */}
            <div className="flex items-center justify-between border border-border p-3.5 mb-5">
              <p className="text-xs">
                As low as <span className="font-semibold">৳ {tabbyMonthlyPrice}/month</span> or 4 interest-free payments.{" "}
                <button className="underline font-medium hover:text-muted-foreground">Learn more</button>
              </p>
              <div className="bg-[#3CFFD0] text-black font-bold text-[11px] px-2.5 py-1 rounded flex-shrink-0 ml-3">
                tabby
              </div>
            </div>

            {/* Color */}
            <div className="mb-5">
              <p className="text-xs text-muted-foreground mb-2">Color:</p>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    className="w-8 h-8 border-2 border-foreground p-0.5"
                    title={c.name}
                  >
                    <div className="w-full h-full" style={{ backgroundColor: c.hex }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-2">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-muted-foreground">Size:</p>
                <button className="text-xs underline text-muted-foreground hover:text-foreground">Size chart</button>
              </div>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[40px] h-10 px-4 border text-sm transition-all ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Note */}
            <p className="text-[11px] text-muted-foreground mb-1">{product.sizeNote}</p>
            <p className="text-[11px] text-muted-foreground mb-5">{product.fitNote}</p>

            {/* Flash Offer CRO Block */}
            <div className="border border-foreground p-4 mb-5 text-center">
              <p className="text-xs font-bold uppercase tracking-wide mb-1">
                Flash Offer - Get 15% Off Your Order
              </p>
              <p className="text-[10px] text-muted-foreground mb-3">
                Tap the discount code button below and we will automatically apply it to your order at checkout. Expire Soon!!
              </p>
              <button
                onClick={handleCopyCode}
                className="w-full border border-dashed border-foreground py-2.5 flex items-center justify-center gap-2 hover:bg-muted/50 transition-colors"
              >
                <span className="text-sm font-semibold tracking-widest">{copiedCode ? "COPIED!" : "WELCOME"}</span>
                <Copy className="h-4 w-4" />
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full h-12 bg-foreground text-background text-sm font-medium uppercase tracking-wider hover:bg-foreground/90 transition-colors mb-3"
            >
              ADD TO CART
            </button>

            {/* Wishlist */}
            <button
              onClick={() => toast({ title: "Added to wishlist", description: `${product.name} saved` })}
              className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider py-2.5 text-muted-foreground hover:text-foreground transition-colors mb-5"
            >
              <Heart className="h-3.5 w-3.5" />
              ADD TO WISHLIST
            </button>

            {/* Trust Badges */}
            <div className="space-y-3 py-4 border-t border-border mb-2">
              <div className="flex items-center gap-3">
                <Truck className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-xs">International Delivery : 2–3 working days.</p>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-xs">7-Day Easy Returns & Exchanges</p>
              </div>
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full border-t border-border">
              <AccordionItem value="details" className="border-b border-border">
                <AccordionTrigger className="text-xs font-semibold uppercase tracking-wider py-4 hover:no-underline">
                  Product Details
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-4 space-y-3">
                  <p>{product.description}</p>
                  {product.keyFeatures && (
                    <div>
                      <p className="font-semibold text-foreground mb-1">Key Features</p>
                      <ul className="space-y-1">
                        {product.keyFeatures.map((f, i) => <li key={i}>• {f}</li>)}
                      </ul>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-foreground mb-1">Fit & Sizing</p>
                    <p>{product.fitSizing}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Fabric Composition</p>
                    {product.fabricComposition.map((f, i) => <p key={i}>{f}</p>)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Care Instructions</p>
                    <p>{product.careInstructions}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="size-fit" className="border-b border-border">
                <AccordionTrigger className="text-xs font-semibold uppercase tracking-wider py-4 hover:no-underline">
                  Size & Fit
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-4">
                  <p>{product.sizeNote}</p>
                  <p className="mt-1">{product.fitNote}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping" className="border-b border-border">
                <AccordionTrigger className="text-xs font-semibold uppercase tracking-wider py-4 hover:no-underline">
                  Shipping Information
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-4 space-y-2">
                  <p className="font-semibold text-foreground">UAE Delivery</p>
                  <p>Same-Day Delivery (Dubai): AED 35 — Orders placed before 4 PM</p>
                  <p>Standard Delivery (UAE): 1–2 business days — AED 25</p>
                  <p>Free Shipping on orders above AED 1,000</p>
                  <p className="font-semibold text-foreground mt-3">GCC Countries</p>
                  <p>Express Shipping: 4–5 business days — AED 50 (up to 2kg)</p>
                  <p className="font-semibold text-foreground mt-3">International</p>
                  <p>Standard Worldwide: AED 130 — 3–7 business days (up to 2kg)</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns" className="border-b border-border">
                <AccordionTrigger className="text-xs font-semibold uppercase tracking-wider py-4 hover:no-underline">
                  Returns & Exchanges
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-4 space-y-2">
                  <p>Return requests must be submitted within <strong>7 days of delivery (UAE)</strong> and <strong>14 days for international orders</strong>.</p>
                  <p>Items must be unworn, unused, and returned with original tags and packaging.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Customers Also Bought - Carousel */}
        <div className="mt-16 pt-10 border-t border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium uppercase tracking-wide">Customers Also Bought</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => setReviewScrollIndex(Math.max(0, reviewScrollIndex - 1))}
                className="w-8 h-8 border border-border flex items-center justify-center hover:border-foreground transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setReviewScrollIndex(Math.min(recommendedProducts.length - 4, reviewScrollIndex + 1))}
                className="w-8 h-8 border border-border flex items-center justify-center hover:border-foreground transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div 
              className="flex gap-3 transition-transform duration-300"
              style={{ transform: `translateX(-${reviewScrollIndex * 25}%)` }}
            >
              {recommendedProducts.map((p) => (
                <div key={p.id} className="min-w-[calc(50%-6px)] sm:min-w-[calc(33.333%-8px)] lg:min-w-[calc(25%-9px)] flex-shrink-0">
                  <ProductCard {...p} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-16 pt-10 border-t border-border">
          <div className="text-center mb-8">
            <h2 className="text-lg font-medium uppercase tracking-wide mb-2">Customer Reviews</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl font-semibold">5.00</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({reviews.length})</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, i) => (
              <div key={i} className="border border-border p-5">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mb-3">"{review.text}"</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">{review.name}</span>
                  <span className="text-[10px] text-green-600 font-medium">✓ Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
