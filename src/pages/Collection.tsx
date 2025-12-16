import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/data/products";

const collectionInfo: Record<string, { title: string; description: string; image: string }> = {
  // Clothing
  "co-ords": {
    title: "Co-ords",
    description: "Perfectly matched sets for effortless style",
    image: "https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=1200",
  },
  "blazers": {
    title: "Blazers",
    description: "Tailored elegance for every occasion",
    image: "https://miruna.io/cdn/shop/files/D0001829.jpg?v=1761559119&width=1200",
  },
  "tops-bodysuits": {
    title: "Tops & Bodysuits",
    description: "Statement pieces to elevate any look",
    image: "https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=1200",
  },
  "bottoms-skirts": {
    title: "Bottoms & Skirts",
    description: "From mini to maxi, find your perfect fit",
    image: "https://miruna.io/cdn/shop/files/D0006764.webp?v=1761729466&width=1200",
  },
  "jumpsuits": {
    title: "Jumpsuits",
    description: "One-piece wonders for effortless chic",
    image: "https://miruna.io/cdn/shop/files/D0007578.webp?v=1761738523&width=1200",
  },
  "corsets": {
    title: "Corsets",
    description: "Sculpted silhouettes with timeless appeal",
    image: "https://miruna.io/cdn/shop/files/D0006652_1.webp?v=1761809640&width=1200",
  },
  // Dresses by Length
  "mini": {
    title: "Mini Dresses",
    description: "Short and sweet for making a statement",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=800&fit=crop",
  },
  "midi": {
    title: "Midi Dresses",
    description: "Timeless elegance in the perfect length",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&h=800&fit=crop",
  },
  "maxi": {
    title: "Maxi Dresses",
    description: "Floor-sweeping glamour for every occasion",
    image: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=1200&h=800&fit=crop",
  },
  // Dresses by Occasion
  "party": {
    title: "Party Dresses",
    description: "Turn heads at every celebration",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&h=800&fit=crop",
  },
  "brunch": {
    title: "Brunch Dresses",
    description: "Effortlessly chic for daytime occasions",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=800&fit=crop",
  },
  "bridal": {
    title: "Bridal Dresses",
    description: "Romantic pieces for your special day",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=1200&h=800&fit=crop",
  },
  "birthday": {
    title: "Birthday Dresses",
    description: "Make your day extra special",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&h=800&fit=crop",
  },
  "prom": {
    title: "Prom Dresses",
    description: "Unforgettable looks for your big night",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop",
  },
  // Dresses by Style
  "evening": {
    title: "Evening Dresses",
    description: "Sophisticated glamour for after dark",
    image: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=1200&h=800&fit=crop",
  },
  "formal": {
    title: "Formal Dresses",
    description: "Elegant pieces for refined occasions",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=800&fit=crop",
  },
  "night-out": {
    title: "Night Out Dresses",
    description: "Bold looks for unforgettable evenings",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&h=800&fit=crop",
  },
  // Dresses by Colour
  "red": {
    title: "Red Dresses",
    description: "Bold and passionate in every shade",
    image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=1200&h=800&fit=crop",
  },
  "brown": {
    title: "Brown Dresses",
    description: "Earthy tones for natural elegance",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&h=800&fit=crop",
  },
  "pink": {
    title: "Pink Dresses",
    description: "Romantic hues for feminine charm",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=800&fit=crop",
  },
  "yellow": {
    title: "Yellow Dresses",
    description: "Sunny shades to brighten any moment",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&h=800&fit=crop",
  },
  "blue": {
    title: "Blue Dresses",
    description: "From sky to navy, timeless blues",
    image: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=1200&h=800&fit=crop",
  },
  "white": {
    title: "White Dresses",
    description: "Pure and pristine elegance",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=1200&h=800&fit=crop",
  },
  "black": {
    title: "Black Dresses",
    description: "Classic sophistication never fades",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&h=800&fit=crop",
  },
  "gold": {
    title: "Gold Dresses",
    description: "Luxurious shimmer for special nights",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop",
  },
  "silver": {
    title: "Silver Dresses",
    description: "Metallic magic for standout style",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=800&fit=crop",
  },
  // Drops
  "too-good-to-lose": {
    title: "Too Good To Lose",
    description: "Must-have pieces you can't miss",
    image: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=1200&h=800&fit=crop",
  },
  "my-mom-said-no": {
    title: "My Mom Said No",
    description: "Daring pieces that push boundaries",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&h=800&fit=crop",
  },
  "i-woke-up-like-this": {
    title: "I Woke Up Like This",
    description: "Effortless beauty, naturally stunning",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=800&fit=crop",
  },
  "fluff-stuff": {
    title: "Fluff Stuff",
    description: "Playful textures and fun details",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&h=800&fit=crop",
  },
  // Shop
  "new-in": {
    title: "New In",
    description: "Fresh arrivals just landed",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop",
  },
  "bestsellers": {
    title: "Bestsellers",
    description: "Our most loved pieces",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=800&fit=crop",
  },
};

const Collection = () => {
  const { slug } = useParams<{ slug: string }>();
  const info = collectionInfo[slug || ""] || {
    title: "Collection",
    description: "Explore our curated selection",
    image: "https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=1200",
  };

  // For now, show all products - in production this would filter by category
  const products = allProducts;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${info.image})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex h-full items-center justify-center text-center">
          <div>
            <h1 className="mb-3 text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl">
              {info.title}
            </h1>
            <p className="text-sm text-white/80 md:text-base">{info.description}</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <p className="mb-6 text-sm text-muted-foreground">{products.length} products</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;
