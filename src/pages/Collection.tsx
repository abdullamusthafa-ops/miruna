import { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CollectionSeoDescription from "@/components/CollectionSeoDescription";
import MobileBottomBar from "@/components/MobileBottomBar";
import { allProducts } from "@/data/products";

const collectionInfo: Record<string, { title: string; description: string }> = {
  "dresses": {
    title: "Dresses",
    description: "Dresses for women at Miruna are designed to combine elegance, versatility, and modern style for every occasion.",
  },
  "co-ords": { title: "Co-ords", description: "Perfectly matched sets for effortless style" },
  "blazers": { title: "Blazers", description: "Tailored elegance for every occasion" },
  "tops-bodysuits": { title: "Tops & Bodysuits", description: "Statement pieces to elevate any look" },
  "bottoms-skirts": { title: "Bottoms & Skirts", description: "From mini to maxi, find your perfect fit" },
  "jumpsuits": { title: "Jumpsuits", description: "One-piece wonders for effortless chic" },
  "corsets": { title: "Corsets", description: "Sculpted silhouettes with timeless appeal" },
  "mini": { title: "Mini Dresses", description: "Short and sweet for making a statement" },
  "midi": { title: "Midi Dresses", description: "Timeless elegance in the perfect length" },
  "maxi": { title: "Maxi Dresses", description: "Floor-sweeping glamour for every occasion" },
  "party": { title: "Party Dresses", description: "Turn heads at every celebration" },
  "brunch": { title: "Brunch Dresses", description: "Effortlessly chic for daytime occasions" },
  "bridal": { title: "Bridal Dresses", description: "Romantic pieces for your special day" },
  "birthday": { title: "Birthday Dresses", description: "Make your day extra special" },
  "prom": { title: "Prom Dresses", description: "Unforgettable looks for your big night" },
  "evening": { title: "Evening Dresses", description: "Sophisticated glamour for after dark" },
  "evening-dresses": { title: "Evening Dresses", description: "Sophisticated glamour for after dark" },
  "formal": { title: "Formal Dresses", description: "Elegant pieces for refined occasions" },
  "night-out": { title: "Night Out Dresses", description: "Bold looks for unforgettable evenings" },
  "red": { title: "Red Dresses", description: "Bold and passionate in every shade" },
  "brown": { title: "Brown Dresses", description: "Earthy tones for natural elegance" },
  "pink": { title: "Pink Dresses", description: "Romantic hues for feminine charm" },
  "yellow": { title: "Yellow Dresses", description: "Sunny shades to brighten any moment" },
  "blue": { title: "Blue Dresses", description: "From sky to navy, timeless blues" },
  "white": { title: "White Dresses", description: "Pure and pristine elegance" },
  "black": { title: "Black Dresses", description: "Classic sophistication never fades" },
  "gold": { title: "Gold Dresses", description: "Luxurious shimmer for special nights" },
  "silver": { title: "Silver Dresses", description: "Metallic magic for standout style" },
  "too-good-to-lose": { title: "Too Good To Lose", description: "Must-have pieces you can't miss" },
  "my-mom-said-no": { title: "My Mom Said No", description: "Daring pieces that push boundaries" },
  "i-woke-up-like-this": { title: "I Woke Up Like This", description: "Effortless beauty, naturally stunning" },
  "fluff-stuff": { title: "Fluff Stuff", description: "Playful textures and fun details" },
  "new-in": { title: "New In", description: "Fresh arrivals just landed" },
  "bestsellers": { title: "Bestsellers", description: "Our most loved pieces" },
  "she": { title: "SHE", description: "The signature collection" },
  "occasion": { title: "Occasion", description: "For every moment that matters" },
  "spring-collection": { title: "Spring Collection", description: "Sculpted silhouettes for standout moments" },
  "elevated-essentials": { title: "Elevated Essentials", description: "Everyday ease with refined style" },
  "wedding-guest-edit": { title: "Wedding Guest Edit", description: "Occasion-ready elegance" },
  "tailored-edit": { title: "Tailored Edit", description: "Sharp cuts and structured silhouettes" },
};

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
];

const Collection = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState("featured");
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const info = collectionInfo[slug || ""] || {
    title: slug ? slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") : "Collection",
    description: "Explore our curated selection",
  };

  // Sort products
  let products = [...allProducts];
  if (sortBy === "price-asc") products.sort((a, b) => a.price - b.price);
  else if (sortBy === "price-desc") products.sort((a, b) => b.price - a.price);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Clean Title Section */}
      <section className="pt-8 pb-4 md:pt-12 md:pb-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-display tracking-wide uppercase text-foreground md:text-3xl lg:text-4xl">
            {info.title}
          </h1>
        </div>
      </section>

      {/* SEO Description */}
      <CollectionSeoDescription slug={slug || ""} />

      {/* Filter + Sort Toolbar */}
      <section className="sticky top-0 z-20 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Filter */}
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-foreground sm:text-xs"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filter
              {showFilter && <X className="h-3 w-3 ml-1" />}
            </button>

            {/* Product Count - center */}
            <p className="text-[10px] text-muted-foreground sm:text-xs">
              {products.length} products
            </p>

            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => setShowSort(!showSort)}
                className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-foreground sm:text-xs"
              >
                Sort By
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showSort ? "rotate-180" : ""}`} />
              </button>

              {showSort && (
                <div className="absolute right-0 top-full mt-2 min-w-[180px] border border-border bg-background shadow-lg z-30">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setShowSort(false); }}
                      className={`block w-full px-4 py-2.5 text-left text-[11px] uppercase tracking-wider transition-colors hover:bg-muted sm:text-xs ${
                        sortBy === opt.value ? "font-semibold text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Panel (collapsible) */}
      {showFilter && (
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-4 md:py-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {/* Size Filter */}
              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-foreground mb-2 sm:text-[11px]">Size</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button key={size} className="border border-border px-3 py-1 text-[10px] uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-colors sm:text-[11px]">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-foreground mb-2 sm:text-[11px]">Color</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Black", hex: "#000" },
                    { name: "White", hex: "#fff" },
                    { name: "Red", hex: "#dc2626" },
                    { name: "Pink", hex: "#ec4899" },
                    { name: "Blue", hex: "#3b82f6" },
                  ].map((c) => (
                    <button
                      key={c.name}
                      className="h-5 w-5 rounded-full border border-border hover:ring-2 hover:ring-foreground hover:ring-offset-1 transition-all sm:h-6 sm:w-6"
                      style={{ backgroundColor: c.hex }}
                      aria-label={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Length Filter */}
              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-foreground mb-2 sm:text-[11px]">Length</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Mini", "Midi", "Maxi"].map((len) => (
                    <button key={len} className="border border-border px-3 py-1 text-[10px] uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-colors sm:text-[11px]">
                      {len}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-foreground mb-2 sm:text-[11px]">Price</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Under 500 AED", "500-1000 AED", "1000+ AED"].map((p) => (
                    <button key={p} className="border border-border px-3 py-1 text-[10px] uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-colors sm:text-[11px]">
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Collection;
