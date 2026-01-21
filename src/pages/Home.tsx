import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import InstagramGallery from "@/components/InstagramGallery";
import CollectionNavigationSection from "@/components/CollectionNavigationSection";
import DressCategoriesSection from "@/components/DressCategoriesSection";
import BestSellersSection from "@/components/BestSellersSection";
import OfferSection from "@/components/OfferSection";
import ValentinesEditSection from "@/components/ValentinesEditSection";
import StorytellingSection from "@/components/StorytellingSection";
import DropsSection from "@/components/DropsSection";
import DressesShowcase from "@/components/DressesShowcase";
import VideoSection from "@/components/VideoSection";
import ClothingNavigationSection from "@/components/ClothingNavigationSection";
import { featuredProducts } from "@/data/products";

const Home = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      rating: 5,
      comment: "Absolutely stunning! The quality exceeded my expectations.",
    },
    {
      name: "Emily D.",
      rating: 5,
      comment: "In love with my purchase! Arrived faster than expected.",
    },
    {
      name: "Mira K.",
      rating: 5,
      comment: "Perfect gift. She was thrilled! Premium quality.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[100vh] overflow-hidden">
        {/* Fallback image shown while video loads */}
        <img
          src="/images/valentines-edit.webp"
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/valentines-edit.webp"
        >
          <source src="/videos/miruna-banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto flex h-full items-center justify-center px-4 text-center">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              These Outfits Will Do The Talking
            </h1>
            <p className="mb-10 text-xs font-medium uppercase tracking-[0.3em] text-white/90 md:text-sm">
              Designed for every mood, every moment, made in UAE.
            </p>
            <Button asChild size="lg" className="min-w-[180px] bg-white text-foreground hover:bg-white/90">
              <Link to="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Valentines Edit - High visibility promotional banner */}
      <ValentinesEditSection />

      {/* Shop by Dress Categories - Main navigation */}
      <DressCategoriesSection />

      {/* Clothing Navigation */}
      <ClothingNavigationSection />

      {/* Best Sellers Section - Social proof */}
      <BestSellersSection products={featuredProducts} />

      {/* Drops Section - New arrivals */}
      <DropsSection />


      {/* Storytelling Section - Brand story */}
      <StorytellingSection />

      {/* Brand Video */}
      <VideoSection />

      {/* Testimonials */}
      <section className="border-t border-border py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-secondary">
                <CardContent className="p-6">
                  <div className="mb-3 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
                    ))}
                  </div>
                  <p className="mb-3 text-sm text-muted-foreground">{testimonial.comment}</p>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <InstagramGallery />

      {/* Newsletter CTA */}
      <section className="bg-foreground py-12 text-background md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-3 text-2xl font-semibold tracking-tight md:text-3xl">Get 10% Off</h2>
          <p className="mx-auto mb-6 max-w-md text-sm text-background/70">
            Subscribe for exclusive access to new collections and special offers
          </p>
          <div className="mx-auto flex max-w-sm gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-none border-0 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-1 focus:ring-background/30"
            />
            <Button variant="secondary" className="rounded-none">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;