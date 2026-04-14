import { useState, useRef, useEffect } from "react";
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
  colors: Array<{ name: string; hex: string }>;
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [recommendScrollIndex, setRecommendScrollIndex] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const addToCartRef = useRef<HTMLButtonElement>(null);

  const product = (id && productDatabase[id]) || defaultProduct;
  const tabbyMonthlyPrice = (product.priceDhs / 4).toFixed(2);
  const recommendedProducts = allProducts.filter(p => p.id !== id).slice(0, 8);

  // Sticky bar: show when Add to Cart button scrolls out of view (mobile only)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (addToCartRef.current) observer.observe(addToCartRef.current);
    return () => observer.disconnect();
  }, []);

  // Touch swipe for mobile carousel
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < product.images.length - 1) setCurrentSlide(currentSlide + 1);
      if (diff < 0 && currentSlide > 0) setCurrentSlide(currentSlide - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({ title: "Please select a size", description: "Choose a size before adding to cart", variant: "destructive" });
      return;
    }
    toast({ title: "Added to cart", description: `${product.name} (${selectedSize}) added to your cart` });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("WELCOME");
    setCopiedCode(true);
    toast({ title: "Code copied!", description: "WELCOME has been copied to your clipboard" });
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header solidBackground />

      <div className="max-w-[1400px] mx-auto px-0 lg:px-8 py-0 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-0 lg:gap-12">

          {/* ===== MOBILE: Swipeable Image Carousel (< lg) ===== */}
          <div className="lg:hidden relative">
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              ref={carouselRef}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {product.images.map((img, i) => (
                  <div key={i} className="min-w-full aspect-[3/4] bg-muted">
                    <img
                      src={img}
                      alt={`${product.name} - View ${i + 1}`}
                      className="h-full w-full object-cover"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Dots indicator */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    currentSlide === i ? "bg-foreground w-4" : "bg-foreground/30"
                  }`}
                />
              ))}
            </div>
            {/* Slide counter */}
            <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm text-[10px] px-2 py-0.5 text-foreground">
              {currentSlide + 1} / {product.images.length}
            </div>
          </div>

          {/* ===== DESKTOP: 2-Column Image Grid (>= lg) ===== */}
          <div className="hidden lg:grid grid-cols-2 gap-1">
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

          {/* ===== RIGHT: Product Info ===== */}
          <div className="px-4 lg:px-0 pt-4 lg:pt-0 lg:sticky lg:top-4 lg:self-start lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto scrollbar-hide">

            {/* Reviews Badge */}
            <div className="flex items-center gap-1.5 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-foreground text-foreground" />
                ))}
              </div>
              <span className="text-[11px] text-muted-foreground">(10)</span>
            </div>

            {/* Product Name */}
            <h1 className="text-base sm:text-lg font-medium tracking-tight uppercase mb-0.5">
              {product.name}
            </h1>

            {/* Subtitle */}
            <p className="text-[12px] sm:text-[13px] text-muted-foreground mb-3">
              {product.subtitle}
            </p>

            {/* Price */}
            <p className="text-sm mb-3">
              <span className="text-muted-foreground text-[11px] mr-1">Sale price</span>
              <span className="font-medium">{product.priceDhs.toLocaleString()}.00 AED</span>
            </p>

            {/* Tabby Payment */}
            <div className="flex items-center justify-between border border-border p-3 mb-4">
              <p className="text-[11px] sm:text-xs">
                As low as <span className="font-semibold">৳ {tabbyMonthlyPrice}/month</span> or 4 interest-free payments.{" "}
                <button className="underline font-medium hover:text-muted-foreground">Learn more</button>
              </p>
              <div className="bg-[#3CFFD0] text-foreground font-bold text-[10px] sm:text-[11px] px-2 py-1 rounded flex-shrink-0 ml-2">
                tabby
              </div>
            </div>

            {/* Color */}
            <div className="mb-4">
              <p className="text-[11px] text-muted-foreground mb-1.5">Color:</p>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    className="w-7 h-7 sm:w-8 sm:h-8 border-2 border-foreground p-0.5"
                    title={c.name}
                  >
                    <div className="w-full h-full" style={{ backgroundColor: c.hex }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-1.5">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-[11px] text-muted-foreground">Size:</p>
                <button className="text-[11px] underline text-muted-foreground hover:text-foreground">Size chart</button>
              </div>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[38px] sm:min-w-[40px] h-9 sm:h-10 px-3.5 sm:px-4 border text-[13px] sm:text-sm transition-all ${
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
            <p className="text-[10px] sm:text-[11px] text-muted-foreground mb-0.5">{product.sizeNote}</p>
            <p className="text-[10px] sm:text-[11px] text-muted-foreground mb-4">{product.fitNote}</p>

            {/* Flash Offer CRO Block */}
            <div className="border border-foreground p-3 sm:p-4 mb-4 text-center">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wide mb-0.5">
                Flash Offer - Get 15% Off Your Order
              </p>
              <p className="text-[9px] sm:text-[10px] text-muted-foreground mb-2.5">
                Tap the discount code below to copy. Expires soon!
              </p>
              <button
                onClick={handleCopyCode}
                className="w-full border border-dashed border-foreground py-2 sm:py-2.5 flex items-center justify-center gap-2 hover:bg-muted/50 transition-colors active:scale-[0.98]"
              >
                <span className="text-xs sm:text-sm font-semibold tracking-widest">{copiedCode ? "COPIED!" : "WELCOME"}</span>
                <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>

            {/* Add to Cart */}
            <button
              ref={addToCartRef}
              onClick={handleAddToCart}
              className="w-full h-11 sm:h-12 bg-foreground text-background text-[13px] sm:text-sm font-medium uppercase tracking-wider hover:bg-foreground/90 transition-colors active:scale-[0.98] mb-2"
            >
              ADD TO CART
            </button>

            {/* Wishlist */}
            <button
              onClick={() => toast({ title: "Added to wishlist", description: `${product.name} saved` })}
              className="w-full flex items-center justify-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-wider py-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <Heart className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              ADD TO WISHLIST
            </button>

            {/* Trust Badges */}
            <div className="space-y-2.5 py-3 border-t border-border mb-1">
              <div className="flex items-center gap-2.5">
                <Truck className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-[11px] sm:text-xs">International Delivery : 2–3 working days.</p>
              </div>
              <div className="flex items-center gap-2.5">
                <RotateCcw className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-[11px] sm:text-xs">7-Day Easy Returns & Exchanges</p>
              </div>
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full border-t border-border">
              <AccordionItem value="details" className="border-b border-border">
                <AccordionTrigger className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider py-3.5 sm:py-4 hover:no-underline">
                  Product Details
                </AccordionTrigger>
                <AccordionContent className="text-[11px] sm:text-xs text-muted-foreground pb-3.5 sm:pb-4 space-y-2.5">
                  <p>{product.description}</p>
                  {product.keyFeatures && (
                    <div>
                      <p className="font-semibold text-foreground mb-1">Key Features</p>
                      <ul className="space-y-0.5">
                        {product.keyFeatures.map((f, i) => <li key={i}>• {f}</li>)}
                      </ul>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-foreground mb-0.5">Fit & Sizing</p>
                    <p>{product.fitSizing}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-0.5">Fabric Composition</p>
                    {product.fabricComposition.map((f, i) => <p key={i}>{f}</p>)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-0.5">Care Instructions</p>
                    <p>{product.careInstructions}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="size-fit" className="border-b border-border">
                <AccordionTrigger className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider py-3.5 sm:py-4 hover:no-underline">
                  Size & Fit
                </AccordionTrigger>
                <AccordionContent className="text-[11px] sm:text-xs text-muted-foreground pb-3.5 sm:pb-4">
                  <p>{product.sizeNote}</p>
                  <p className="mt-1">{product.fitNote}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping" className="border-b border-border">
                <AccordionTrigger className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider py-3.5 sm:py-4 hover:no-underline">
                  Shipping Information
                </AccordionTrigger>
                <AccordionContent className="text-[11px] sm:text-xs text-muted-foreground pb-3.5 sm:pb-4 space-y-1.5">
                  <p className="font-semibold text-foreground">UAE Delivery</p>
                  <p>Same-Day Delivery (Dubai): AED 35 — Orders placed before 4 PM</p>
                  <p>Standard Delivery (UAE): 1–2 business days — AED 25</p>
                  <p>Free Shipping on orders above AED 1,000</p>
                  <p className="font-semibold text-foreground mt-2">GCC Countries</p>
                  <p>Express Shipping: 4–5 business days — AED 50 (up to 2kg)</p>
                  <p className="font-semibold text-foreground mt-2">International</p>
                  <p>Standard Worldwide: AED 130 — 3–7 business days (up to 2kg)</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns" className="border-b border-border">
                <AccordionTrigger className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider py-3.5 sm:py-4 hover:no-underline">
                  Returns & Exchanges
                </AccordionTrigger>
                <AccordionContent className="text-[11px] sm:text-xs text-muted-foreground pb-3.5 sm:pb-4 space-y-1.5">
                  <p>Return requests must be submitted within <strong>7 days of delivery (UAE)</strong> and <strong>14 days for international orders</strong>.</p>
                  <p>Items must be unworn, unused, and returned with original tags and packaging.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Customers Also Bought */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-border px-4 lg:px-0">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-sm sm:text-lg font-medium uppercase tracking-wide">Customers Also Bought</h2>
            <div className="flex gap-1.5">
              <button
                onClick={() => setRecommendScrollIndex(Math.max(0, recommendScrollIndex - 1))}
                className="w-7 h-7 sm:w-8 sm:h-8 border border-border flex items-center justify-center hover:border-foreground transition-colors"
              >
                <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
              <button
                onClick={() => setRecommendScrollIndex(Math.min(recommendedProducts.length - 2, recommendScrollIndex + 1))}
                className="w-7 h-7 sm:w-8 sm:h-8 border border-border flex items-center justify-center hover:border-foreground transition-colors"
              >
                <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex gap-2 sm:gap-3 transition-transform duration-300"
              style={{ transform: `translateX(-${recommendScrollIndex * 52}%)` }}
            >
              {recommendedProducts.map((p) => (
                <div key={p.id} className="w-[48%] sm:w-[31%] lg:w-[23.5%] flex-shrink-0">
                  <ProductCard {...p} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-border px-4 lg:px-0 pb-8">
          <div className="text-center mb-5 sm:mb-8">
            <h2 className="text-sm sm:text-lg font-medium uppercase tracking-wide mb-1.5">Customer Reviews</h2>
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-lg sm:text-2xl font-semibold">5.00</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-foreground text-foreground" />
                ))}
              </div>
              <span className="text-[11px] sm:text-sm text-muted-foreground">({reviews.length})</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {reviews.map((review, i) => (
              <div key={i} className="border border-border p-4 sm:p-5">
                <div className="flex items-center gap-0.5 mb-1.5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-[11px] sm:text-xs text-muted-foreground mb-2">"{review.text}"</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] sm:text-xs font-medium">{review.name}</span>
                  <span className="text-[9px] sm:text-[10px] text-green-600 font-medium">✓ Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== MOBILE STICKY ADD TO CART BAR ===== */}
      <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border transition-transform duration-300 ${showStickyBar ? "translate-y-0" : "translate-y-full"}`}>
        <div className="px-4 py-3 flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-medium uppercase truncate">{product.name}</p>
            <p className="text-[11px] text-muted-foreground">{product.priceDhs.toLocaleString()}.00 AED</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-foreground text-background text-[11px] font-medium uppercase tracking-wider px-5 py-2.5 flex-shrink-0 active:scale-[0.97]"
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
