import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
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
    {
      id: "5",
      name: "Rose Gold Pendant",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: "6",
      name: "Crystal Drop Earrings",
      price: 119.99,
      originalPrice: 189.99,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      badge: "SALE",
    },
    {
      id: "7",
      name: "Statement Ring Collection",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    },
    {
      id: "8",
      name: "Layered Chain Necklace",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
      badge: "NEW",
    },
  ];

  const categories = ["Necklaces", "Earrings", "Bracelets", "Rings", "Pendants"];
  const materials = ["Gold", "Silver", "Rose Gold", "Platinum", "Diamond"];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="border-b border-border bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">Shop All Products</h1>
          <p className="text-muted-foreground">Discover our complete collection of luxury jewelry and accessories</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <aside className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={category} />
                    <Label htmlFor={category} className="cursor-pointer text-sm">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Materials</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <div key={material} className="flex items-center space-x-2">
                    <Checkbox id={material} />
                    <Label htmlFor={material} className="cursor-pointer text-sm">
                      {material}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Price Range</h3>
              <Slider
                min={0}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Reset Filters
            </Button>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{products.length} products found</p>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="bestselling">Best Selling</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline">Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
