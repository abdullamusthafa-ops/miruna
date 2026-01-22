import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Star } from "lucide-react";

const StorytellingSection = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
          {/* Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=600"
                    alt="Fashion piece"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="group relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src="https://miruna.io/cdn/shop/files/D0001829.jpg?v=1761559119&width=600"
                    alt="Fashion detail"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-6 md:space-y-4 md:pt-8">
                <div className="group relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src="https://miruna.io/cdn/shop/files/D0001698_ff86f997-3e1c-4456-891e-748cd21f70ef.jpg?v=1761556951&width=600"
                    alt="Fashion styling"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://miruna.io/cdn/shop/files/D0007578.webp?v=1761738523&width=600"
                    alt="Fashion collection"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-primary p-3 text-primary-foreground shadow-2xl md:right-0 md:p-4 lg:-right-4">
              <div className="flex flex-col items-center">
                <Star className="mb-1 h-6 w-6 fill-current md:h-8 md:w-8" />
                <p className="text-xl font-bold md:text-2xl">4.9</p>
                <p className="text-[10px] opacity-90 md:text-xs">Rating</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-luxury/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-luxury" />
              <span className="text-sm font-semibold uppercase tracking-wider text-luxury">Your Story Starts Here</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Fashion That Speaks <span className="text-luxury">Louder Than Words</span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Every woman deserves to feel unstoppable. Our pieces aren't just clothes—they're confidence, empowerment, 
              and self-expression wrapped in premium fabric.
            </p>
            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-luxury/10">
                  <Heart className="h-5 w-5 text-luxury" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Handcrafted in the UAE</h3>
                  <p className="text-sm text-muted-foreground">
                    Every stitch tells a story of dedication and artistry. Made locally with love and precision.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-luxury/10">
                  <Sparkles className="h-5 w-5 text-luxury" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Premium Quality Materials</h3>
                  <p className="text-sm text-muted-foreground">
                    We source only the finest fabrics that feel as good as they look. Comfort meets luxury.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-luxury/10">
                  <Star className="h-5 w-5 text-luxury" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Designed to Turn Heads</h3>
                  <p className="text-sm text-muted-foreground">
                    Bold designs that make statements. Be unforgettable, be unapologetically you.
                  </p>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="group">
              <Link to="/about">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
