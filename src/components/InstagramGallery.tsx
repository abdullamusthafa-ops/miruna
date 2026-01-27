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
    type: "video",
    src: "/videos/miruna-banner.mp4",
    poster: "https://images.unsplash.com/photo-1558769132-cb1aea1c8347?w=800&q=80",
    alt: "Campaign video",
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
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    alt: "Studio shoot",
  },
];

const InstagramGallery = () => {
  return (
    <section className="bg-muted py-14 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center md:mb-12">
          <a
            href="https://www.instagram.com/miruna.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <div className="mb-3 flex items-center justify-center gap-3">
              <Instagram className="h-6 w-6 md:h-7 md:w-7" />
              <span className="text-lg font-semibold tracking-wide md:text-xl">
                @miruna.studio
              </span>
            </div>
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Follow us for daily inspiration & behind the scenes
            </p>
          </a>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-3">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/miruna.studio"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden bg-background ${
                index === 0 || index === 5 
                  ? "row-span-2 aspect-[3/4] sm:aspect-auto" 
                  : "aspect-square"
              }`}
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-5 w-5 text-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={post.src}
                  alt={post.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/30">
                <Instagram className="h-8 w-8 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center md:mt-10">
          <a
            href="https://www.instagram.com/miruna.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Follow @miruna.studio
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
