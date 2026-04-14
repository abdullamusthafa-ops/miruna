import { Instagram, Play } from "lucide-react";
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
    <section ref={sectionRef} className="bg-muted min-h-[100dvh] flex flex-col justify-center py-16 md:py-24 mt-12 md:mt-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 text-center md:mb-12">
          <a
            href="https://www.instagram.com/miruna.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <h2 className="mb-1 text-base font-display tracking-wide sm:text-lg md:text-xl sm:mb-2">
              Seen on Miruna Girls
            </h2>
            <p className="text-[11px] text-muted-foreground group-hover:text-foreground transition-colors sm:text-sm mb-1 sm:mb-2">
              Real moments. Real style. Real confidence.
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-[11px] tracking-wide sm:text-sm">
                @miruna.studio
              </span>
            </div>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2 md:grid-cols-6 md:gap-3">
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
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/30">
                <Instagram className="h-6 w-6 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 sm:h-8 sm:w-8" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 text-center md:mt-10">
          <a
            href="https://www.instagram.com/miruna.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] text-foreground transition-all hover:bg-foreground hover:text-background active:scale-95 sm:px-8 sm:py-3 sm:text-xs"
          >
            Follow @miruna.studio
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
