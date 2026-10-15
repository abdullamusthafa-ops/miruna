import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const PARTNERSHIP_VIDEO = "/videos/brand-video.mp4"; // placeholder — swap with the shared video

const partnershipTypes = [
  {
    eyebrow: "01",
    title: "Collaborations",
    copy: "Limited capsule edits created together — from concept to campaign, built around shared taste.",
  },
  {
    eyebrow: "02",
    title: "Creators & Stylists",
    copy: "For content creators and stylists who live in the pieces and present them the way they were made to be seen.",
  },
  {
    eyebrow: "03",
    title: "Boutiques & Retail",
    copy: "Wholesale partnerships for curated boutiques carrying the Miruna edit in-store.",
  },
];

const steps = [
  { n: "I", label: "Reach Out", copy: "Tell us who you are and what the partnership looks like in your head." },
  { n: "II", label: "Align", copy: "We talk timelines, pieces and creative direction — everything on the table." },
  { n: "III", label: "Create", copy: "The edit, the shoot, the launch. Together, end to end." },
];

const Partnerships = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { rootMargin: "200px", threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const intro = useScrollAnimation({ threshold: 0.15 });
  const types = useScrollAnimation({ threshold: 0.1 });
  const process = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Video Hero */}
      <section ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden">
        <video
          ref={videoRef}
          src={PARTNERSHIP_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <div className="flex items-center gap-3 mb-5 animate-fade-in">
            <span className="h-px w-10 bg-white/70" />
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] sm:text-xs">
              Miruna Partnerships
            </p>
            <span className="h-px w-10 bg-white/70" />
          </div>
          <h1 className="max-w-3xl text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
            Built together, <span className="italic font-light">worn everywhere.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm animate-fade-in">
            Collaborations, creators and boutiques — a page for the people who want to grow with us.
          </p>
          <div className="mt-10 animate-fade-in">
            <a
              href="#partner-form"
              className="group relative inline-block overflow-hidden border border-white px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors active:scale-[0.98]"
            >
              <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                Partner With Us
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section
        ref={intro.ref}
        className={`flex min-h-[60dvh] items-center border-b border-border py-16 md:py-24 transition-all duration-1000 ease-out ${
          intro.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-10 bg-luxury-taupe" />
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                The Philosophy
              </p>
              <span className="h-px w-10 bg-luxury-taupe" />
            </div>
            <h2 className="text-2xl font-display tracking-tight md:text-4xl lg:text-5xl leading-[1.1] mb-6">
              We don't chase partnerships. <span className="italic font-light">We build them slowly.</span>
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Every piece we make starts with the same question — who is it for? Partnerships are the same.
              We work with a small circle of collaborators, creators and boutiques who understand the
              quiet side of luxury: quality over volume, intention over noise. If that sounds like you,
              we'd love to hear it.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section
        ref={types.ref}
        className={`border-b border-border py-16 md:py-24 transition-all duration-1000 ease-out ${
          types.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground sm:text-xs mb-4">
              Three Ways
            </p>
            <h2 className="text-2xl font-display tracking-tight md:text-4xl lg:text-5xl leading-[1.1]">
              How we <span className="italic font-light">partner</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {partnershipTypes.map((type) => (
              <div key={type.title} className="group bg-background px-8 py-12 text-center md:py-16">
                <span className="text-[11px] tracking-[0.3em] text-muted-foreground">{type.eyebrow}</span>
                <h3 className="mt-4 text-xl font-display tracking-tight md:text-2xl">{type.title}</h3>
                <p className="mx-auto mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {type.copy}
                </p>
                <span className="mx-auto mt-6 block h-px w-8 bg-foreground/30 transition-all duration-500 group-hover:w-16 group-hover:bg-foreground" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed Video Pause */}
      <section className="relative h-[70dvh] w-full overflow-hidden border-b border-border">
        <video
          src={PARTNERSHIP_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] sm:text-xs mb-4">
            The Brand, In Motion
          </p>
          <h2 className="max-w-2xl text-2xl font-display tracking-tight sm:text-3xl md:text-5xl leading-[1.1]">
            One brand. Many rooms. <span className="italic font-light">Same feeling.</span>
          </h2>
        </div>
      </section>

      {/* Process */}
      <section
        ref={process.ref}
        className={`border-b border-border py-16 md:py-24 transition-all duration-1000 ease-out ${
          process.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground sm:text-xs mb-4">
              The Process
            </p>
            <h2 className="text-2xl font-display tracking-tight md:text-4xl lg:text-5xl leading-[1.1]">
              Simple by <span className="italic font-light">design</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.label} className="group bg-background px-8 py-12 text-center md:py-16">
                <span className="font-display text-3xl italic text-muted-foreground/60 md:text-4xl">
                  {step.n}
                </span>
                <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em]">{step.label}</h3>
                <p className="mx-auto mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {step.copy}
                </p>
                <span className="mx-auto mt-6 block h-px w-8 bg-foreground/30 transition-all duration-500 group-hover:w-16 group-hover:bg-foreground" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="partner-form" className="flex min-h-[70dvh] items-center py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-10 bg-luxury-taupe" />
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                Start The Conversation
              </p>
              <span className="h-px w-10 bg-luxury-taupe" />
            </div>
            <h2 className="text-2xl font-display tracking-tight md:text-4xl lg:text-5xl leading-[1.1] mb-6">
              Have an idea? <span className="italic font-light">Let's hear it.</span>
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm mb-10">
              Tell us who you are, your audience or your boutique, and what kind of partnership you
              have in mind. We read every message and reply personally.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:partnerships@miruna.io?subject=Partnership%20Enquiry"
                className="group relative inline-block w-full overflow-hidden border border-foreground px-10 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors active:scale-[0.98] sm:w-auto"
              >
                <span className="absolute inset-0 translate-y-full bg-foreground transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-background">
                  Email Partnerships
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
              <Link
                to="/contact"
                className="group relative inline-block w-full overflow-hidden border border-foreground px-10 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors active:scale-[0.98] sm:w-auto"
              >
                <span className="absolute inset-0 translate-y-full bg-foreground transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                  Contact Page
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Partnerships;
