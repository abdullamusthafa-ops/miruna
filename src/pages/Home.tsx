import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import InstagramGallery from "@/components/InstagramGallery";
import LimitedEditionBanner from "@/components/LimitedEditionBanner";
import CollectionBanners from "@/components/CollectionBanners";
import { featuredProducts } from "@/data/products";

const Home = () => {

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely stunning jewelry! The quality exceeded my expectations. Fast shipping and beautiful packaging.",
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment: "I'm in love with my purchase! The craftsmanship is exceptional and it arrived even faster than expected.",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Perfect gift for my wife. She was thrilled! Excellent customer service and premium quality products.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative container mx-auto flex h-full items-center justify-center px-4 text-center">
          <div className="max-w-3xl">
            <div className="mb-4 inline-block border border-primary-foreground px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Special Offer
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-primary-foreground md:text-7xl">
              BLACK FRIDAY
            </h1>
            <p className="mb-8 text-2xl font-medium text-primary-foreground md:text-4xl">
              UP TO 40% OFF
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:w-auto">
                <Link to="/products">View Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Limited Edition Banner */}
      <LimitedEditionBanner />

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Limited Collection</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              This outfit will do the talking. Made in the UAE, every piece is lovingly stitched with the finest quality.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collection Banners */}
      <CollectionBanners />

      {/* Brand Story */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                At Miruna, we believe fashion is more than just clothing—it's an expression of your unique personality and confidence. 
                Founded in the UAE with a passion for bold designs, we've dedicated ourselves to creating statement pieces that empower 
                women to express themselves fearlessly.
              </p>
              <p className="mb-6 text-muted-foreground">
                Every piece in our collection is carefully designed and crafted with premium materials, ensuring that you receive only the 
                highest quality. From daring dresses to elegant evening wear, we offer something special for every occasion and every woman 
                who isn't afraid to stand out.
              </p>
              <Button asChild variant="default">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                alt="Fashion craftsmanship"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">{testimonial.comment}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
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
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border-0 px-4 py-3 text-foreground"
            />
            <Button variant="secondary" size="lg">
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
