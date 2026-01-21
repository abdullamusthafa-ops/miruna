export interface ColorVariant {
  name: string;
  hex: string;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  priceDhs: number;
  originalPriceDhs?: number;
  image: string;
  badge?: string;
  category: string;
  colors?: ColorVariant[];
  sizes?: string[];
  description?: string;
}

export const featuredProducts: Product[] = [
  {
    id: "morning-after-ex",
    name: "MORNING AFTER EX",
    subtitle: "Bold statement piece for unforgettable nights",
    price: 490.13,
    originalPrice: 612.66,
    priceDhs: 1800,
    originalPriceDhs: 2250,
    image: "https://miruna.io/cdn/shop/files/Facetune_26-10-2025-15-54-01_b734120f-4b7f-4886-bd7f-1d61d4a3e6ae.jpg?v=1761560458&width=600",
    badge: "SALE",
    category: "Limited Collection",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        images: ["https://miruna.io/cdn/shop/files/Facetune_26-10-2025-15-54-01_b734120f-4b7f-4886-bd7f-1d61d4a3e6ae.jpg?v=1761560458&width=600"]
      }
    ],
    description: "Make a statement with this bold outfit that speaks for itself. Crafted in the UAE with meticulous attention to detail.",
  },
  {
    id: "the-best-you-ever-had",
    name: "THE BEST YOU EVER HAD",
    subtitle: "Premium elegance with a flattering silhouette",
    price: 435.45,
    originalPrice: 544.32,
    priceDhs: 1599.20,
    originalPriceDhs: 1999,
    image: "https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=600",
    badge: "SALE",
    category: "Limited Collection",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        images: ["https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=600"]
      },
      {
        name: "Pink",
        hex: "#FFC0CB",
        images: ["https://miruna.io/cdn/shop/files/D0001829.jpg?v=1761559119&width=600"]
      }
    ],
    description: "An unforgettable piece that lives up to its name. Premium fabric with a flattering fit.",
  },
  {
    id: "out-of-his-budget",
    name: "OUT OF HIS BUDGET",
    subtitle: "Luxury statement piece worth every moment",
    price: 272.29,
    originalPrice: 340.37,
    priceDhs: 1000,
    originalPriceDhs: 1250,
    image: "https://miruna.io/cdn/shop/files/D0001698_ff86f997-3e1c-4456-891e-748cd21f70ef.jpg?v=1761556951&width=600",
    badge: "SALE",
    category: "Limited Collection",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {
        name: "Pink",
        hex: "#FFC0CB",
        images: ["https://miruna.io/cdn/shop/files/D0001698_ff86f997-3e1c-4456-891e-748cd21f70ef.jpg?v=1761556951&width=600"]
      }
    ],
    description: "Luxury fashion that makes a bold statement. Worth every penny.",
  },
];

export const allProducts = [
  ...featuredProducts,
  {
    id: "better-luck-next-time-pink",
    name: "BETTER LUCK NEXT TIME - PINK",
    subtitle: "Flirty and feminine with a playful edge",
    price: 145.24,
    originalPrice: 242.07,
    priceDhs: 533.40,
    originalPriceDhs: 889,
    image: "https://miruna.io/cdn/shop/files/D0006764.webp?v=1761729466&width=600",
    badge: "SALE",
    category: "Can't Miss Looks",
  },
  {
    id: "split-decision-pink-white",
    name: "SPLIT DECISION - PINK & WHITE",
    subtitle: "Two-tone elegance for the bold fashionista",
    price: 155.04,
    originalPrice: 258.41,
    priceDhs: 569.40,
    originalPriceDhs: 949,
    image: "https://miruna.io/cdn/shop/files/D0007578.webp?v=1761738523&width=600",
    badge: "SALE",
    category: "Can't Miss Looks",
  },
  {
    id: "who-invited-her-black",
    name: "WHO INVITED HER - BLACK",
    subtitle: "Show-stopping entrance in sleek black",
    price: 163.21,
    originalPrice: 272.02,
    priceDhs: 599.40,
    originalPriceDhs: 999,
    image: "https://miruna.io/cdn/shop/files/D0006652_1.webp?v=1761809640&width=600",
    badge: "SALE",
    category: "Can't Miss Looks",
  },
  {
    id: "bare-minimum-pink",
    name: "BARE MINIMUM - PINK",
    subtitle: "Minimal design, maximum impact",
    price: 180.88,
    originalPrice: 258.41,
    priceDhs: 664.30,
    originalPriceDhs: 949,
    image: "https://miruna.io/cdn/shop/files/bare_minimum_pink.webp?v=1760788877&width=600",
    badge: "SALE",
    category: "Can't Miss Looks",
  },
  {
    id: "soft-but-spicy-white",
    name: "SOFT BUT SPICY - WHITE",
    subtitle: "Delicate charm with a daring twist",
    price: 163.21,
    originalPrice: 272.02,
    priceDhs: 599.40,
    originalPriceDhs: 999,
    image: "https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=600",
    badge: "SALE",
    category: "Can't Miss Looks",
  },
  {
    id: "still-went-out-silver",
    name: "STILL WENT OUT - SILVER",
    subtitle: "Metallic glamour for late-night adventures",
    price: 138.71,
    originalPrice: 231.18,
    priceDhs: 509.40,
    originalPriceDhs: 849,
    image: "https://miruna.io/cdn/shop/files/D0002893.webp?v=1761735891&width=600",
    badge: "SALE",
    category: "Can't Miss Looks",
  },
  {
    id: "waist-not-pink",
    name: "WAIST NOT - PINK",
    subtitle: "Figure-flattering silhouette in blush pink",
    price: 180.88,
    originalPrice: 258.41,
    priceDhs: 664.30,
    originalPriceDhs: 949,
    image: "https://miruna.io/cdn/shop/files/D0001304.webp?v=1761726685&width=600",
    badge: "SALE",
    category: "Can't Miss Looks",
  },
  {
    id: "youll-regret-this-white",
    name: "YOU'LL REGRET THIS - WHITE",
    subtitle: "Unforgettable elegance in pristine white",
    price: 337.43,
    originalPrice: 421.78,
    priceDhs: 1239.20,
    originalPriceDhs: 1549,
    image: "https://miruna.io/cdn/shop/files/D0000742.jpg?v=1761558255&width=600",
    badge: "SALE",
    category: "Limited Collection",
  },
];
