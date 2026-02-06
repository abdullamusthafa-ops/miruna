import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Sparkles, Star, Clock, MapPin, Truck, RotateCcw, Instagram, ArrowRight } from "lucide-react";
import mirunaFounder from "@/assets/miruna-founder.jpg";

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
      title: "Statement",
      description: "Made to speak before you do.",
    },
    {
      icon: Sparkles,
      title: "Precision",
      description: "Every cut, deliberate.",
    },
    {
      icon: Star,
      title: "Identity",
      description: "Fashion that reflects standards, not trends.",
    },
    {
      icon: Clock,
      title: "Longevity",
      description: "Designed to stay, not cycle out.",
    },
  ];

  const trustPoints = [
    { icon: Heart, text: "Made to be seen" },
    { icon: Sparkles, text: "Crafted to be felt" },
    { icon: Star, text: "Designed with standards" },
    { icon: Heart, text: "Worn with certainty" },
  ];

  const trustBadges = [
    { icon: MapPin, text: "Designed in Dubai" },
    { icon: Truck, text: "Fast Delivery" },
    { icon: RotateCcw, text: "Easy Returns" },
  ];

  const collectionImages = [
    {
      src: "https://miruna.io/cdn/shop/files/To_Good_To_Lose-Mega-Menu-Desktop.webp?v=1769001461&width=630",
      caption: "Too Good To Lose",
    },
    {
      src: "https://miruna.io/cdn/shop/files/My_Mom_Said_No-Mega-Menu-Desktop.webp?v=1769001461&width=630",
      caption: "My Mom Said No",
    },
    {
      src: "https://miruna.io/cdn/shop/files/I_Woke_Up_Like_This-Mega-Menu-Desktop.webp?v=1769001461&width=630",
      caption: "I Woke Up Like This",
    },
    {
      src: "https://miruna.io/cdn/shop/files/Fluff_Stuff-Mega-Menu-Desktop.webp?v=1769001462&width=630",
      caption: "Fluff Stuff",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 1️⃣ HERO SECTION - Premium Founder Showcase */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-muted/20" />
        
        <div className="container relative mx-auto px-4 py-24 lg:py-32">
          <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-[1fr_1.1fr]">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 max-w-xl">
              <AnimatedText delay={0}>
                <p className="mb-6 text-[11px] md:text-xs uppercase tracking-[0.5em] text-muted-foreground font-medium">
                  The Woman Behind The Brand
                </p>
              </AnimatedText>
              
              <AnimatedText delay={100}>
                <h1 className="mb-8 text-5xl font-display tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                  Meet
                  <span className="block mt-1 italic font-normal text-foreground/90">Miruna</span>
                </h1>
              </AnimatedText>
              
              <AnimatedText delay={300}>
                <p className="mb-10 text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground">
                   Behind every piece is a woman who believes clothing should express who you are — before you say a word. 
                   Miruna designs for women who don't chase trends. They move differently. They choose intentionally. 
                   <span className="block mt-2 text-foreground/80 font-medium">They wear confidence without explanation.</span>
                 </p>
              </AnimatedText>
              
              {/* Stats Row */}
              <AnimatedText delay={500}>
                <div className="flex flex-wrap gap-8 md:gap-12 mb-12">
                  <div className="group">
                     <p className="text-3xl md:text-4xl font-light tracking-tight transition-colors group-hover:text-foreground/70">Dubai</p>
                     <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Designed & Crafted</p>
                   </div>
                   <div className="w-px bg-border" />
                   <div className="group">
                     <p className="text-3xl md:text-4xl font-light tracking-tight transition-colors group-hover:text-foreground/70">2025</p>
                     <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Founded</p>
                   </div>
                   <div className="w-px bg-border hidden md:block" />
                   <div className="group">
                     <p className="text-3xl md:text-4xl font-light tracking-tight transition-colors group-hover:text-foreground/70">1,000+</p>
                     <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Women Wearing Miruna</p>
                  </div>
                </div>
              </AnimatedText>
              
              {/* Signature Quote */}
              <AnimatedText delay={700}>
                <div className="relative pl-6 border-l-2 border-foreground/20">
                   <p className="text-base md:text-lg italic leading-relaxed text-foreground/80">
                     "I design what I couldn't find."
                   </p>
                   <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">— Miruna, Founder & Creative Director</p>
                </div>
              </AnimatedText>
            </div>
            
            {/* Right: Founder Portrait */}
            <div className="order-1 lg:order-2">
              <AnimatedText delay={200}>
                <div className="relative">
                  {/* Main Image Container */}
                  <div className="relative">
                    <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                      <img
                        src={mirunaFounder}
                        alt="Miruna - Founder & Creative Director"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-4 -left-4 w-full h-full border border-foreground/10 -z-10" />
                    <div className="absolute -bottom-8 -left-8 w-full h-full border border-foreground/5 -z-20" />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-2 md:right-6 bg-foreground text-background px-6 py-4 md:px-8 md:py-6 shadow-xl">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Founder</p>
                    <p className="text-lg md:text-xl font-light tracking-wide">Miruna</p>
                  </div>
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <AnimatedText delay={1000}>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Scroll</p>
            <div className="w-px h-10 bg-gradient-to-b from-foreground/40 to-transparent animate-pulse" />
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
                   <p className="text-3xl md:text-4xl font-light tracking-tight">UAE</p>
                   <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80">Crafted Locally</p>
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
                 <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight leading-tight">
                   A Vision Born from{" "}
                   <span className="italic">Personal Experience</span>
                 </h2>
               </AnimatedText>
               <AnimatedText delay={200}>
                 <div className="space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base">
                   <p className="text-base md:text-lg">
                     Growing up, Miruna searched for pieces that felt aligned — elegant yet impactful, 
                     strong yet refined. Clothing that made a statement before she did.
                   </p>
                   <p>
                     When she couldn't find them, she began designing them.
                   </p>
                   <p>
                     What started as sketches became a commitment: to create pieces for women who don't 
                     compromise between comfort and sophistication — who understand that true confidence 
                     doesn't rely on noise.
                   </p>
                   <p>
                     Every Miruna piece reflects this mindset. Clean lines. Intentional cuts. Fabrics 
                     chosen for how they feel, not just how they look.
                   </p>
                   <p>
                     Miruna personally oversees each collection, from sourcing to final construction. 
                     Because details are not decoration — they are identity.
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
              <h2 className="mb-16 text-4xl font-display tracking-tight md:text-5xl">
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
               Miruna creates clothing that supports your presence — not replaces it.
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
              <h2 className="mb-12 text-center text-4xl font-display tracking-tight md:text-5xl">
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
                     Miruna was created from a clear belief: what you wear should reflect your standards. 
                     Not trends. Not expectations. It began with the desire to design for women who choose 
                     intention over impulse — and quality that speaks for itself.
                   </p>
                </div>
              </AnimatedText>

              <AnimatedText delay={400}>
                <div className="relative mb-12">
                  <div className="absolute -left-[41px] md:-left-[49px] h-2 w-2 rounded-full bg-foreground" />
                   <h3 className="mb-4 text-xl font-medium">The Inspiration</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     Influenced by European refinement and shaped by modern ambition, Miruna brings 
                     together precision and fluidity. Clean silhouettes. Confident lines. Pieces that 
                     feel composed, not complicated.
                   </p>
                </div>
              </AnimatedText>

              <AnimatedText delay={600}>
                <div className="relative">
                  <div className="absolute -left-[41px] md:-left-[49px] h-2 w-2 rounded-full bg-foreground" />
                   <h3 className="mb-4 text-xl font-medium">Designed in Dubai</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     Designed in Dubai and crafted with purpose, each collection blends global perspective 
                     with personal vision. Every piece is created to be worn your way — defined by you, 
                     not by the season.
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
                 Every Miruna collection carries intention — but never takes itself too seriously. 
                 Each piece is thoughtfully named, not just to describe it, but to capture a moment. A mood. A knowing smile.
               </p>
             </AnimatedText>
             <AnimatedText delay={300}>
               <p className="mt-4 text-muted-foreground leading-relaxed">
                 Because what you wear isn't random. It reflects how you feel, where you're going, 
                 and sometimes… exactly what you're thinking.
               </p>
             </AnimatedText>
             <AnimatedText delay={400}>
               <p className="mt-4 text-muted-foreground leading-relaxed">
                 Miruna turns clothing into conversation. Something personal. Something expressive. Something remembered.
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
               text="Designed to speak before you do."
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
