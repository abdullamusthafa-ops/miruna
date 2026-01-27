import { Instagram } from "lucide-react";

const instagramPosts = [
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
    alt: "Fashion post 1",
  },
  {
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&q=80",
    alt: "Fashion post 2",
  },
  {
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    alt: "Fashion post 3",
  },
  {
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
    alt: "Fashion post 4",
  },
  {
    image: "https://images.unsplash.com/photo-1558769132-cb1aea1c8347?w=400&q=80",
    alt: "Fashion post 5",
  },
  {
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80",
    alt: "Fashion post 6",
  },
];

const InstagramGallery = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 text-center md:mb-8">
          <a
            href="https://www.instagram.com/miruna.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <Instagram className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wide">@miruna.studio</span>
          </a>
          <p className="mt-1 text-xs text-muted-foreground">
            Follow us for style inspiration
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2 md:grid-cols-6">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/miruna.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-muted"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20">
                <Instagram className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
