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
import BestSellersSection from "@/components/BestSellersSection";
import OfferSection from "@/components/OfferSection";
import StorytellingSection from "@/components/StorytellingSection";
import DropsSection from "@/components/DropsSection";
import DressesShowcase from "@/components/DressesShowcase";
import { featuredProducts } from "@/data/products";
import QualityBadge from "@/components/QualityBadge";
const Home = () => {
  const testimonials = [{
    name: "Sarah Johnson",
    rating: 5,
    comment: "Absolutely stunning jewelry! The quality exceeded my expectations. Fast shipping and beautiful packaging."
  }, {
    name: "Emily Davis",
    rating: 5,
    comment: "I'm in love with my purchase! The craftsmanship is exceptional and it arrived even faster than expected."
  }, {
    name: "Michael Chen",
    rating: 5,
    comment: "Perfect gift for my wife. She was thrilled! Excellent customer service and premium quality products."
  }];
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] bg-primary">
        <div className="absolute inset-0 bg-[url('https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=1920')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative container mx-auto flex h-full items-center justify-center px-4 text-center">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block animate-fade-in rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              New Season Collection
            </div>
            <h1 className="mb-6 animate-fade-in text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
              This Outfit Will Do<br />The Talking
            </h1>
            <p className="mb-10 animate-fade-in text-xl text-white/90 md:text-2xl">
              Statement pieces designed to make you unforgettable
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="min-w-[200px] text-base">
                <Link to="/products">Explore Collections</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-w-[200px] border-2 border-white bg-transparent text-base text-white hover:bg-white hover:text-primary">
                <Link to="/products?filter=sale">Shop Sale</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Collection Navigation */}
      <CollectionNavigationSection />

      {/* Best Sellers Section */}
      <BestSellersSection products={featuredProducts} />

      {/* Offer Section */}
      <OfferSection />

      {/* Featured Products with Quality Badge */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tight md:text-4xl">Limited Collection</h2>
            <div className="mx-auto max-w-2xl">
              <QualityBadge />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map(product => <ProductCard key={product.id} {...product} />)}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dresses Showcase */}
      <DressesShowcase />

      {/* Drops Section */}
      <DropsSection />

      {/* Storytelling Section */}
      <StorytellingSection />

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">What Our Customers Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Join thousands of satisfied customers who trust Miruna for their jewelry needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-warning text-warning" />)}
                  </div>
                  <p className="mb-4 text-muted-foreground">{testimonial.comment}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <InstagramGallery />

      {/* Newsletter CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Your cart just got 10% sweeter</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Subscribe to our newsletter and get 10% off your first order plus exclusive access to new collections
          </p>
          <div className="mx-auto flex max-w-md space-x-2">
            <input type="email" placeholder="Enter your email" className="flex-1 rounded-md border-0 px-4 py-3 text-foreground" />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;