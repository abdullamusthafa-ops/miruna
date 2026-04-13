import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const SpringPromoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-width background video */}
      <div className="relative aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://miruna.io/cdn/shop/files/preview_images/b1b8f3393f3348c88238cac895e0ca05.thumbnail.0000000000.jpg?v=1773405695&width=1080"
        >
          <source src="/videos/brand-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-2xl px-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 mb-3 sm:text-xs sm:mb-4">
              Exclusive for Spring 2026
            </p>
            <h2 className="text-lg font-display tracking-tight text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 sm:mb-4 leading-tight">
              Discover sculpted silhouettes, elegant abayas, and refined evening styles
            </h2>
            <p className="text-[10px] text-white/70 uppercase tracking-[0.15em] mb-5 sm:text-xs sm:mb-6">
              Limited pieces
            </p>
            <Link
              to="/collection/spring-collection"
              className="inline-block border-b border-white pb-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white transition-colors hover:text-white/70 hover:border-white/70 sm:text-xs"
            >
              Explore now
            </Link>
          </div>
        </div>

        {/* Mute/Unmute toggle */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-10 flex h-9 w-9 items-center justify-center bg-white/10 backdrop-blur-sm text-white/80 hover:text-white hover:bg-white/20 transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
    </section>
  );
};

export default SpringPromoSection;
