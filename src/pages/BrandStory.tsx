import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Sparkles, Star, Clock, MapPin, Truck, RotateCcw, Instagram, ArrowRight } from "lucide-react";

// Animated Text Component
const AnimatedText = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Parallax Image Component
const ParallaxImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setOffset(scrollProgress * 50);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-100"
        style={{ transform: `translateY(${-offset}px) scale(1.1)` }}
        loading="lazy"
      />
    </div>
  );
};

// Word-by-word reveal component
const WordReveal = ({ text, className = "" }: { text: string; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const words = text.split(' ');

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: `${index * 80}ms`,
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
};

const BrandStory = () => {
  const values = [
    {
      icon: Heart,
      title: "Quiet Confidence",
      description: "Clothes that speak without trying too hard",
    },
    {
      icon: Sparkles,
      title: "Intentional Design",
      description: "Every piece has meaning and purpose",
    },
    {
      icon: Star,
      title: "Emotional Connection",
      description: "Fashion that feels personal",
    },
    {
      icon: Clock,
      title: "Timeless Appeal",
      description: "Designed beyond trends",
    },
  ];

  const trustPoints = [
    { icon: Heart, text: "Designed with intention and emotion" },
    { icon: Sparkles, text: "Premium quality with effortless comfort" },
    { icon: Star, text: "Made for real women and real moments" },
    { icon: Heart, text: "Personal brand built on authenticity" },
  ];

  const trustBadges = [
    { icon: MapPin, text: "Designed in Dubai" },
    { icon: Truck, text: "Fast Delivery" },
    { icon: RotateCcw, text: "Easy Returns" },
  ];

  const collectionImages = [
    {
      src: "https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=600",
      caption: "The Confidence Edit",
    },
    {
      src: "https://miruna.io/cdn/shop/files/D0007578.webp?v=1761738523&width=600",
      caption: "Timeless Elegance",
    },
    {
      src: "https://miruna.io/cdn/shop/files/D0006764.webp?v=1761729466&width=600",
      caption: "Modern Femininity",
    },
    {
      src: "https://miruna.io/cdn/shop/files/D0006652_1.webp?v=1761809640&width=600",
      caption: "Everyday Luxury",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 1️⃣ HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-0">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text */}
            <div className="order-2 lg:order-1">
            <AnimatedText delay={0}>
                <h1 className="mb-4 text-6xl font-light tracking-tight md:text-7xl lg:text-8xl">
                  Meet Miruna
                </h1>
              </AnimatedText>
              <AnimatedText delay={200}>
                <p className="mb-6 text-lg uppercase tracking-[0.2em] text-muted-foreground">
                  The person. The philosophy. The story behind the brand.
                </p>
              </AnimatedText>
              <AnimatedText delay={400}>
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                  Miruna is more than a fashion label. It is a personal expression of confidence, 
                  femininity, and quiet strength — created for women who want to feel effortless 
                  and unforgettable.
                </p>
              </AnimatedText>
            </div>
            
            {/* Right: Portrait */}
            <div className="relative order-1 lg:order-2">
              <ParallaxImage
                src="https://miruna.io/cdn/shop/files/D0001829.jpg?v=1761559119&width=800"
                alt="Miruna - Founder"
                className="aspect-[3/4] w-full rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ WHO IS MIRUNA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <AnimatedText>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  The Woman Behind The Brand
                </p>
              </AnimatedText>
              <AnimatedText delay={100}>
                <h2 className="mb-8 text-4xl font-light tracking-tight md:text-5xl">
                  Meet Miruna
                </h2>
              </AnimatedText>
              <AnimatedText delay={200}>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Miruna is the founder and creative force behind the brand. Inspired by modern 
                    femininity and timeless elegance, she believes that fashion should feel personal, 
                    expressive, and wearable in real life.
                  </p>
                  <p>
                    Each design reflects her belief that style doesn't need to be loud to be powerful. 
                    The Miruna woman is confident, independent, and unapologetically herself.
                  </p>
                  <p className="font-medium text-foreground">
                    This brand is built on emotion, intention, and authenticity — not trends.
                  </p>
                </div>
              </AnimatedText>
            </div>

            {/* Image Collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <AnimatedText delay={100}>
                  <div className="group aspect-[3/4] overflow-hidden rounded-sm">
                    <img
                      src="https://miruna.io/cdn/shop/files/D0001698_ff86f997-3e1c-4456-891e-748cd21f70ef.jpg?v=1761556951&width=600"
                      alt="Miruna collection"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </AnimatedText>
                <AnimatedText delay={300}>
                  <div className="group aspect-square overflow-hidden rounded-sm">
                    <img
                      src="https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=400"
                      alt="Miruna design"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </AnimatedText>
              </div>
              <div className="pt-8">
                <AnimatedText delay={200}>
                  <div className="group aspect-[2/3] overflow-hidden rounded-sm">
                    <img
                      src="https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=600"
                      alt="Miruna style"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </AnimatedText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ BRAND PHILOSOPHY */}
      <section className="bg-muted/50 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedText>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                What We Believe
              </p>
            </AnimatedText>
            <AnimatedText delay={100}>
              <h2 className="mb-16 text-4xl font-light tracking-tight md:text-5xl">
                The Philosophy
              </h2>
            </AnimatedText>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <AnimatedText key={value.title} delay={index * 150}>
                <div className="group text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:bg-foreground group-hover:border-foreground">
                      <value.icon className="h-6 w-6 transition-colors duration-500 group-hover:text-background" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-medium tracking-wide">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>

          <AnimatedText delay={600}>
            <p className="mx-auto mt-16 max-w-2xl text-center text-lg italic text-muted-foreground">
              Miruna creates pieces that move with you — from day to night, moment to moment.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* 4️⃣ THE JOURNEY */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <AnimatedText>
              <p className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Our Story
              </p>
            </AnimatedText>
            <AnimatedText delay={100}>
              <h2 className="mb-12 text-center text-4xl font-light tracking-tight md:text-5xl">
                The Journey
              </h2>
            </AnimatedText>

            {/* Timeline */}
            <div className="relative border-l border-border pl-8 md:pl-12">
              <AnimatedText delay={200}>
                <div className="relative mb-12">
                  <div className="absolute -left-[41px] md:-left-[49px] h-2 w-2 rounded-full bg-foreground" />
                  <h3 className="mb-4 text-xl font-medium">The Beginning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The idea behind Miruna was born from a desire to create clothing that feels 
                    effortless yet refined. A vision to dress women who value quality over quantity, 
                    intention over impulse.
                  </p>
                </div>
              </AnimatedText>

              <AnimatedText delay={400}>
                <div className="relative mb-12">
                  <div className="absolute -left-[41px] md:-left-[49px] h-2 w-2 rounded-full bg-foreground" />
                  <h3 className="mb-4 text-xl font-medium">The Inspiration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Inspired by European aesthetics and shaped by modern lifestyles, the brand brings 
                    together comfort, elegance, and individuality. Every design tells a story of 
                    confidence and self-expression.
                  </p>
                </div>
              </AnimatedText>

              <AnimatedText delay={600}>
                <div className="relative">
                  <div className="absolute -left-[41px] md:-left-[49px] h-2 w-2 rounded-full bg-foreground" />
                  <h3 className="mb-4 text-xl font-medium">Designed in Dubai</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Miruna blends global influences with a personal touch — creating collections that 
                    feel both contemporary and timeless. Each piece is crafted with care, designed to 
                    become part of your story.
                  </p>
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ STORIES YOU WEAR */}
      <section className="bg-muted/30 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <AnimatedText>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Collections
              </p>
            </AnimatedText>
            <AnimatedText delay={100}>
              <h2 className="mb-6 text-4xl font-light tracking-tight md:text-5xl">
                Stories You Wear
              </h2>
            </AnimatedText>
            <AnimatedText delay={200}>
              <p className="text-muted-foreground leading-relaxed">
                Every Miruna collection tells a story. Each piece is named and designed to reflect 
                moods, moments, and personalities — allowing women to express themselves through 
                what they wear.
              </p>
            </AnimatedText>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {collectionImages.map((image, index) => (
              <AnimatedText key={image.caption} delay={index * 150}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                      <p className="text-sm font-medium text-white">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>

          <AnimatedText delay={600}>
            <p className="mx-auto mt-12 max-w-xl text-center italic text-muted-foreground">
              Fashion becomes storytelling — personal, expressive, and real.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* 6️⃣ WHY MIRUNA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <AnimatedText>
              <h2 className="mb-16 text-center text-4xl font-light tracking-tight md:text-5xl">
                Why Women Choose Miruna
              </h2>
            </AnimatedText>

            <div className="mb-16 grid gap-6 md:grid-cols-2">
              {trustPoints.map((point, index) => (
                <AnimatedText key={point.text} delay={index * 100}>
                  <div className="flex items-start gap-4 rounded-sm border border-border p-6 transition-all duration-300 hover:border-foreground">
                    <point.icon className="h-5 w-5 shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">{point.text}</p>
                  </div>
                </AnimatedText>
              ))}
            </div>

            {/* Trust Badges */}
            <AnimatedText delay={500}>
              <div className="flex flex-wrap justify-center gap-8 border-t border-border pt-12">
                {trustBadges.map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-muted-foreground">
                    <badge.icon className="h-4 w-4" />
                    <span className="text-sm">{badge.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* 7️⃣ SIGNATURE QUOTE */}
      <section className="bg-muted/50 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedText>
              <div className="mb-8">
                <span className="text-6xl text-muted-foreground/30">"</span>
              </div>
            </AnimatedText>
            <WordReveal
              text="Miruna was created to make women feel confident without trying — elegant without effort."
              className="text-2xl font-light leading-relaxed md:text-3xl lg:text-4xl"
            />
            <AnimatedText delay={1500}>
              <p className="mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                — Miruna, Founder
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* 8️⃣ FINAL CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedText>
              <h2 className="mb-8 text-4xl font-light tracking-tight md:text-5xl">
                Discover the Story
              </h2>
            </AnimatedText>
            <AnimatedText delay={200}>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="group min-w-[200px]">
                  <Link to="/products">
                    <span>Explore the Collection</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group min-w-[200px]">
                  <a
                    href="https://www.instagram.com/miruna.studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    <span>Follow @miruna.studio</span>
                  </a>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandStory;
