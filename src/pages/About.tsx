import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Every piece we create is infused with passion and dedication to exceptional craftsmanship.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest materials and work with skilled artisans to ensure superior quality.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We're committed to providing an exceptional shopping experience.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From our studio to your doorstep worldwide, we deliver luxury with care and reliability.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">About Miruna</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Crafting timeless elegance through exceptional jewelry since our inception
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Miruna was born from a simple yet powerful vision: to create jewelry that transcends trends and 
                  becomes a cherished part of life's most precious moments. Founded by passionate designers and 
                  craftspeople, we've built our reputation on a commitment to excellence and authenticity.
                </p>
                <p>
                  What started as a small studio has evolved into a trusted destination for those seeking exceptional 
                  jewelry. Each piece in our collection tells a story—of artistry, quality, and the timeless beauty 
                  that defines true luxury.
                </p>
                <p>
                  Today, Miruna serves customers around the globe, but our values remain unchanged: create pieces that 
                  inspire, endure, and bring joy to those who wear them. Every necklace, ring, and bracelet we craft 
                  carries our dedication to perfection and our passion for beauty.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Jewelry craftsmanship"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-primary p-4">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Commitment to You</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              When you choose Miruna, you're not just purchasing jewelry—you're investing in pieces crafted with care, 
              backed by our promise of quality, and delivered with exceptional service.
            </p>
            <div className="grid gap-6 text-left md:grid-cols-3">
              <div>
                <h3 className="mb-2 font-semibold">Authenticity Guaranteed</h3>
                <p className="text-sm text-muted-foreground">
                  Every piece comes with a certificate of authenticity and is backed by our quality guarantee.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Sustainable Practices</h3>
                <p className="text-sm text-muted-foreground">
                  We're committed to ethical sourcing and environmentally responsible production methods.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Lifetime Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our relationship doesn't end at purchase. We offer lifetime care and repair services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80"
                alt="Jewelry 1"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80"
                alt="Jewelry 2"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80"
                alt="Jewelry 3"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80"
                alt="Jewelry 4"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
