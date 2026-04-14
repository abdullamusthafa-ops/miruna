import { Instagram, Play } from "lucide-react";

const instagramPosts = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    alt: "Fashion editorial shot",
  },
  {
    type: "video",
    src: "/videos/brand-video.mp4",
    poster: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
    alt: "Behind the scenes",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    alt: "Street style look",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    alt: "Runway moment",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
    alt: "Editorial portrait",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    alt: "Fashion week",
  },
];

const InstagramGallery = () => {
  return (
    <section className="bg-muted min-h-screen flex flex-col justify-center py-10 md:py-20">
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

        {/* Grid - 3 columns on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2 md:grid-cols-6 md:gap-3">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/miruna.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-background aspect-square"
            >
              {post.type === "video" ? (
                <>
                  <video
                    src={post.src}
                    poster={post.poster}
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-lg sm:h-10 sm:w-10 md:h-12 md:w-12">
                      <Play className="h-3 w-3 text-foreground ml-0.5 sm:h-4 sm:w-4 md:h-5 md:w-5" fill="currentColor" />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={post.src}
                  alt={post.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
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
