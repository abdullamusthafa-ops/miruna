import { Instagram } from "lucide-react";

const InstagramGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
    "https://images.unsplash.com/photo-1558769132-cb1aea1c8347?w=400&q=80",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80",
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center space-x-2">
            <Instagram className="h-6 w-6" />
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">@miruna.official</h2>
          </div>
          <p className="text-muted-foreground">Follow us for style inspiration and exclusive updates</p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          {images.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com/miruna.official"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-muted"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 transition-all duration-300 group-hover:bg-primary/20" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
