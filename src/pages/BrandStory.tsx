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
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      caption: "The Confidence Edit",
    },
    {
      src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
      caption: "Timeless Elegance",
    },
    {
      src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      caption: "Modern Femininity",
    },
    {
      src: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80",
      caption: "Everyday Luxury",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 1️⃣ HERO SECTION - Founder Showcase */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 py-20 lg:py-0">
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1">
              <AnimatedText delay={0}>
                <p className="mb-4 text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
                  The Woman. The Vision. The Brand.
                </p>
              </AnimatedText>
              <AnimatedText delay={100}>
                <h1 className="mb-6 text-4xl font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Meet
                  <span className="block mt-2 italic font-normal">Miruna</span>
                </h1>
              </AnimatedText>
              <AnimatedText delay={300}>
                <p className="mb-10 text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-lg">
                  Behind every piece is a woman who believes fashion should make you feel something. 
                  Miruna creates for the woman who doesn't follow trends — she sets them. 
                  Quietly. Confidently. Unapologetically.
                </p>
              </AnimatedText>
              <AnimatedText delay={500}>
                <div className="flex flex-wrap gap-6 md:gap-8 mb-10">
                  <div className="border-l-2 border-foreground pl-4">
                    <p className="text-xl md:text-2xl font-light tracking-tight">Dubai</p>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">Designed & Created</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-4">
                    <p className="text-xl md:text-2xl font-light tracking-tight">2020</p>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">Founded</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-4">
                    <p className="text-xl md:text-2xl font-light tracking-tight">10K+</p>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">Women Styled</p>
                  </div>
                </div>
              </AnimatedText>
              
              {/* Quote */}
              <AnimatedText delay={700}>
                <div className="border-l border-foreground/30 pl-6 max-w-md">
                  <p className="text-sm md:text-base italic leading-relaxed text-foreground/80">
                    "I design for the woman I wish I had clothes for when I was younger."
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">— Miruna, Founder</p>
                </div>
              </AnimatedText>
            </div>
            
            {/* Right: Founder Portrait */}
            <div className="order-1 lg:order-2">
              <AnimatedText delay={200}>
                <div className="relative">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
                      alt="Miruna - Founder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative frame */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-foreground/20 -z-10" />
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <AnimatedText delay={1000}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll to discover</p>
            <div className="w-px h-8 bg-foreground/30 animate-pulse" />
          </div>
        </AnimatedText>
      </section>

      {/* 2️⃣ WHO IS MIRUNA - Premium Fashion Layout */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
            {/* Image Layout - Left side */}
            <div className="relative">
              <div className="flex gap-4 md:gap-6">
                {/* Main large image */}
                <AnimatedText delay={0} className="flex-1">
                  <div className="group aspect-[3/4] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80"
                      alt="Miruna in her studio"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </AnimatedText>
                
                {/* Stacked smaller images */}
                <div className="flex flex-col gap-4 md:gap-6 w-2/5">
                  <AnimatedText delay={200} className="flex-1">
                    <div className="group h-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80"
                        alt="Design details"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </AnimatedText>
                  <AnimatedText delay={300} className="flex-1">
                    <div className="group h-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&q=80"
                        alt="Miruna collection"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </AnimatedText>
                </div>
              </div>
              
              {/* Experience badge */}
              <AnimatedText delay={500}>
                <div className="absolute -bottom-6 -right-2 md:right-8 bg-foreground text-background p-5 md:p-8 shadow-2xl">
                  <p className="text-3xl md:text-4xl font-light tracking-tight">5+</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80">Years of Passion</p>
                </div>
              </AnimatedText>
            </div>

            {/* Text - Right side */}
            <div className="lg:pl-4">
              <AnimatedText>
                <p className="mb-4 text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
                  The Creative Force
                </p>
              </AnimatedText>
              <AnimatedText delay={100}>
                <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
                  A Vision Born from{" "}
                  <span className="italic">Personal Experience</span>
                </h2>
              </AnimatedText>
              <AnimatedText delay={200}>
                <div className="space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base">
                  <p className="text-base md:text-lg">
                    Growing up, Miruna struggled to find clothes that felt like <em className="not-italic font-medium text-foreground">her</em> — 
                    pieces that were elegant yet effortless, bold yet refined. So she decided 
                    to create them herself.
                  </p>
                  <p>
                    What started as sketches in a notebook became a mission: to design for women 
                    who refuse to choose between comfort and style, between standing out and fitting in. 
                    Every Miruna piece carries this philosophy — fashion that empowers without demanding attention.
                  </p>
                  <p>
                    Today, Miruna personally oversees every collection, ensuring each design meets 
                    her exacting standards. From fabric selection to final stitch, her hands guide 
                    the process because she believes the details matter most.
                  </p>
                </div>
              </AnimatedText>
              <AnimatedText delay={400}>
                <div className="mt-10 flex gap-8 border-t border-border pt-8">
                  <div className="flex-1">
                    <p className="text-xl md:text-2xl font-light mb-1 tracking-tight">Handpicked</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Premium fabrics sourced globally</p>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="flex-1">
                    <p className="text-xl md:text-2xl font-light mb-1 tracking-tight">Made in UAE</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Crafted with local artisans</p>
                  </div>
                </div>
              </AnimatedText>
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
