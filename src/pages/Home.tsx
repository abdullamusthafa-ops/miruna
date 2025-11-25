import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Elegant Pearl Necklace",
      price: 129.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      badge: "SALE",
    },
    {
      id: "2",
      name: "Diamond Stud Earrings",
      price: 299.99,
      originalPrice: 499.99,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      badge: "SALE",
    },
    {
      id: "3",
      name: "Gold Chain Bracelet",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    },
    {
      id: "4",
      name: "Silver Ring Set",
      price: 89.99,
      originalPrice: 149.99,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      badge: "NEW",
    },
  ];

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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')] bg-cover bg-center opacity-60" />
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

      {/* Features */}
      <section className="border-b border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center space-x-4">
              <Truck className="h-10 w-10 text-accent" />
              <div>
                <h3 className="font-semibold">Fast Shipping</h3>
                <p className="text-sm text-muted-foreground">Worldwide delivery</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ShieldCheck className="h-10 w-10 text-accent" />
              <div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">100% protected</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <RefreshCw className="h-10 w-10 text-accent" />
              <div>
                <h3 className="font-semibold">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30-day guarantee</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Star className="h-10 w-10 text-accent" />
              <div>
                <h3 className="font-semibold">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">Handcrafted excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Featured Collection</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Discover our carefully curated selection of exquisite jewelry pieces, each designed to make you shine
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

      {/* Brand Story */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                At Miruna, we believe jewelry is more than just an accessory—it's an expression of your unique style and personality. 
                Founded with a passion for exceptional craftsmanship, we've dedicated ourselves to creating pieces that combine timeless 
                elegance with contemporary design.
              </p>
              <p className="mb-6 text-muted-foreground">
                Every piece in our collection is carefully selected and crafted with precision, ensuring that you receive only the highest 
                quality jewelry. From classic designs to modern statement pieces, we offer something special for every occasion.
              </p>
              <Button asChild variant="default">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Jewelry craftsmanship"
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

      {/* Newsletter CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Stay in Style</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Subscribe to our newsletter and get exclusive access to new collections, special offers, and style tips
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
