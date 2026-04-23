import { Instagram } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const instagramPosts = [
  {
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=70",
    alt: "Fashion editorial shot",
  },
  {
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&q=70",
    alt: "Behind the scenes",
  },
  {
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=70",
    alt: "Street style look",
  },
  {
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=70",
    alt: "Runway moment",
  },
  {
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=70",
    alt: "Editorial portrait",
  },
  {
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=70",
    alt: "Fashion week",
  },
];

const InstagramGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { rootMargin: "200px", threshold: 0 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-muted py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center md:mb-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-3 md:text-[11px]">
            #MirunaGirls
          </p>
          <h2 className="text-2xl font-display tracking-tight sm:text-3xl md:text-4xl lg:text-5xl mb-3">
            Seen on <span className="italic font-light">Miruna Girls</span>
          </h2>
          <p className="text-xs text-muted-foreground sm:text-sm mb-3">
            Real moments. Real style. Real confidence.
          </p>
          <a
            href="https://www.instagram.com/miruna.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity"
          >
            <Instagram className="h-4 w-4" />
            Tag us @miruna.studio
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-px md:grid-cols-6">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/miruna.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-background aspect-square"
            >
              {isVisible && (
                <img
                  src={post.src}
                  alt={post.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              )}

              {/* Hover Overlay - subtle white-out with Instagram icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-all duration-300 group-hover:bg-background/70">
                <Instagram className="h-6 w-6 text-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 sm:h-7 sm:w-7" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center md:mt-14">
          <a
            href="https://www.instagram.com/miruna.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block overflow-hidden border border-foreground px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors active:scale-[0.98]"
          >
            <span className="absolute inset-0 bg-foreground translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
              Follow @miruna.studio
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
