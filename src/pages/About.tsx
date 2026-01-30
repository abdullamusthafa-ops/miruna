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
          <h1 className="mb-4 text-4xl font-display tracking-tight md:text-5xl">About Miruna</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Crafting bold fashion statements through exceptional design since our inception
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-display tracking-tight">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Miruna was born from a simple yet powerful vision: to create fashion that transcends trends and 
                  empowers women to express themselves boldly. Founded in Dubai by passionate designers, we've built 
                  our reputation on fearless designs and uncompromising quality.
                </p>
                <p>
                  What started as a small studio has evolved into a trusted destination for women seeking statement pieces 
                  that dare to be different. Each design tells a story—of confidence, individuality, and the unapologetic 
                  beauty of being yourself.
                </p>
                <p>
                  Today, Miruna serves fashion-forward women around the globe, but our values remain unchanged: create pieces 
                  that inspire confidence, challenge conventions, and celebrate the uniqueness of every woman who wears them. 
                  Made in the UAE with love and precision, every piece carries our dedication to quality.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                alt="Fashion craftsmanship"
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
          <h2 className="mb-4 text-3xl font-display tracking-tight">Our Values</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            The principles that guide everything we create
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
            <h2 className="mb-6 text-3xl font-display tracking-tight">Our Commitment to You</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              When you choose Miruna, you're not just purchasing clothing—you're investing in pieces crafted with passion, 
              backed by our promise of quality, and delivered with exceptional service. Made in the UAE with the finest materials.
            </p>
            <div className="grid gap-6 text-left md:grid-cols-3">
              <div>
                <h3 className="mb-2 font-semibold">Premium Materials</h3>
                <p className="text-sm text-muted-foreground">
                  We use only the finest fabrics and materials, carefully sourced for quality and comfort.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Made in UAE</h3>
                <p className="text-sm text-muted-foreground">
                  Every piece is lovingly stitched with precision in our UAE studio by skilled artisans.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">
                  Not satisfied? We offer hassle-free returns within 30 days of purchase in Dubai.
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
                src="https://miruna.io/cdn/shop/files/D0006764.webp?v=1761729466&width=400"
                alt="Fashion 1"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://miruna.io/cdn/shop/files/D0007578.webp?v=1761738523&width=400"
                alt="Fashion 2"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://miruna.io/cdn/shop/files/D0006652_1.webp?v=1761809640&width=400"
                alt="Fashion 3"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://miruna.io/cdn/shop/files/D0001205.webp?v=1761725544&width=400"
                alt="Fashion 4"
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
