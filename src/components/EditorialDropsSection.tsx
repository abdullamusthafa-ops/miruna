import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import editorialHero from "@/assets/editorial-hero.webp";
import dropFluffStuff from "@/assets/drop-fluff-stuff.webp";
import dropTooGoodToLose from "@/assets/drop-too-good-to-lose.webp";
import dropIWokeUp from "@/assets/drop-i-woke-up-like-this.webp";
import dropMyMomSaidNo from "@/assets/drop-my-mom-said-no.webp";

const sheCategories = [
  {
    name: "FLUFF STUFF",
    tag: "Limited Edition",
    image: dropFluffStuff,
    hoverImage: dropTooGoodToLose,
    link: "/collection/fluff-stuff",
  },
  {
    name: "TOO GOOD TO LOSE",
    image: dropTooGoodToLose,
    hoverImage: dropFluffStuff,
    link: "/collection/too-good-to-lose",
  },
  {
    name: "I WOKE UP LIKE THIS",
    image: dropIWokeUp,
    hoverImage: dropMyMomSaidNo,
    link: "/collection/i-woke-up-like-this",
  },
  {
    name: "MY MOM SAID NO",
    image: dropMyMomSaidNo,
    hoverImage: dropIWokeUp,
    link: "/collection/my-mom-said-no",
  },
];

const EditorialDropsSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVideoVisible(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { rootMargin: "300px", threshold: 0.1 }
    );
    if (videoContainerRef.current) observer.observe(videoContainerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-16 md:pt-24">
      {/* Section title */}
      <div className="container mx-auto px-4 mb-8 md:mb-12 text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-2 md:text-[11px]">
          Curated Capsules
        </p>
        <h2 className="text-2xl font-display tracking-tight md:text-4xl lg:text-5xl">
          The <span className="italic font-light">Drops</span>
        </h2>
      </div>

      {/* Editorial Split */}
      <div className="h-[100dvh] px-0 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-1 h-full">
          <Link to="/collection/she" className="group relative block overflow-hidden">
            <div className="h-full overflow-hidden bg-muted">
              <img
                src={editorialHero}
                alt="SHE Collection"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 transition-transform duration-500 group-hover:-translate-y-1">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/80 sm:text-[11px]">
                The Collection
              </p>
              <h3 className="mt-2 text-3xl font-display tracking-tight text-white sm:text-4xl md:text-5xl">
                SHE
              </h3>
              <span className="mt-5 inline-block border border-white/80 bg-transparent px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors group-hover:bg-white group-hover:text-foreground sm:px-7 sm:py-3">
                Explore
              </span>
            </div>
          </Link>

          <div ref={videoContainerRef} className="relative h-full overflow-hidden bg-muted hidden md:block">
            {videoVisible && (
              <video
                ref={videoRef}
                src="/videos/editorial-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                preload="none"
              />
            )}
          </div>
        </div>
      </div>

      {/* Drop Names Strip */}
      <div className="px-0 md:px-4 mt-1">
        <div className="grid grid-cols-2 gap-px md:grid-cols-4 md:gap-1">
          {sheCategories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.link}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={cat.hoverImage}
                  alt={cat.name}
                  className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              {cat.tag && (
                <div className="absolute top-3 left-3">
                  <span className="bg-background/90 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-foreground sm:text-[10px]">
                    {cat.tag}
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-transform duration-500 group-hover:-translate-y-1">
                <span className="relative inline-block text-xs font-medium tracking-[0.15em] uppercase text-white sm:text-sm leading-tight">
                  {cat.name}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* View all link */}
      <div className="container mx-auto px-4 mt-10 md:mt-14 text-center">
        <Link
          to="/collection/drops"
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground hover:opacity-70 transition-opacity"
        >
          View All Drops
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
};

export default EditorialDropsSection;
