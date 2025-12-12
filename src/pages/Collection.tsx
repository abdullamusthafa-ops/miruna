import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/data/products";

const collectionInfo: Record<string, { title: string; description: string; image: string }> = {
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
