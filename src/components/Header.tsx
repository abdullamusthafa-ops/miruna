import { ShoppingCart, Search, User, Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const megaMenuData = {
  shop: {
    items: [
      { name: "New In", href: "/products?filter=new" },
      { name: "Bestsellers", href: "/products?filter=bestseller" },
      { name: "Shop All", href: "/products" },
    ],
  },
  dresses: {
    sections: [
      {
        title: "By Occasion",
        items: [
          { name: "Party", href: "/products?occasion=party" },
          { name: "Evening", href: "/products?occasion=evening" },
          { name: "Day / Brunch", href: "/products?occasion=day" },
          { name: "Bridal", href: "/products?occasion=bridal" },
        ],
      },
      {
        title: "By Length",
        items: [
          { name: "Mini", href: "/products?length=mini" },
          { name: "Midi", href: "/products?length=midi" },
          { name: "Maxi", href: "/products?length=maxi" },
        ],
      },
      {
        title: "By Colour",
        items: [
          { name: "Red", href: "/products?color=red" },
          { name: "Brown", href: "/products?color=brown" },
          { name: "Pink", href: "/products?color=pink" },
          { name: "Yellow", href: "/products?color=yellow" },
          { name: "Blue", href: "/products?color=blue" },
          { name: "White", href: "/products?color=white" },
          { name: "Black", href: "/products?color=black" },
          { name: "Gold", href: "/products?color=gold" },
          { name: "Silver", href: "/products?color=silver" },
        ],
      },
    ],
  },
  clothing: {
    items: [
      { name: "Co-ords", href: "/products?category=coords" },
      { name: "Blazers", href: "/products?category=blazers" },
      { name: "Tops / Bodysuits", href: "/products?category=tops" },
      { name: "Corsets", href: "/products?category=corsets" },
      { name: "Bottoms / Skirts", href: "/products?category=bottoms" },
      { name: "Jumpsuits", href: "/products?category=jumpsuits" },
    ],
  },
  drops: {
    items: [
      { name: "Too Good To Lose", href: "/products?collection=too-good-to-lose" },
      { name: "My Mom Said No", href: "/products?collection=my-mom-said-no" },
      { name: "I Woke Up Like This", href: "/products?collection=i-woke-up-like-this" },
      { name: "Fluff Stuff", href: "/products?collection=fluff-stuff" },
    ],
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Announcement Bar */}
      <div className="border-b border-border bg-primary text-primary-foreground">
        <div className="container mx-auto overflow-hidden">
          <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap py-2 text-sm">
            <span className="mx-8">ENJOY FAST, RELIABLE WORLDWIDE SHIPPING!</span>
            <span className="mx-8">4H DELIVERY IN DUBAI. SAME-DAY DELIVERY ACROSS UAE</span>
            <span className="mx-8">UP TO 40% OFF SELECTED ITEMS</span>
            <span className="mx-8">ENJOY FAST, RELIABLE WORLDWIDE SHIPPING!</span>
            <span className="mx-8">4H DELIVERY IN DUBAI. SAME-DAY DELIVERY ACROSS UAE</span>
            <span className="mx-8">UP TO 40% OFF SELECTED ITEMS</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] overflow-y-auto">
            <nav className="flex flex-col space-y-6 mt-8">
              {/* Mobile Shop Menu */}
              <div>
                <h3 className="text-lg font-bold mb-3">SHOP</h3>
                <div className="flex flex-col space-y-2 pl-2">
                  {megaMenuData.shop.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-sm hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Dresses Menu */}
              <div>
                <h3 className="text-lg font-bold mb-3">DRESSES</h3>
                {megaMenuData.dresses.sections.map((section) => (
                  <div key={section.title} className="mb-4">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                      {section.title}
                    </h4>
                    <div className="flex flex-col space-y-2 pl-2">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-sm hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Clothing Menu */}
              <div>
                <h3 className="text-lg font-bold mb-3">CLOTHING</h3>
                <div className="flex flex-col space-y-2 pl-2">
                  {megaMenuData.clothing.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-sm hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Drops Menu */}
              <div>
                <h3 className="text-lg font-bold mb-3">DROPS</h3>
                <div className="flex flex-col space-y-2 pl-2">
                  {megaMenuData.drops.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-sm hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Lookbook */}
              <Link
                to="/lookbook"
                className="text-lg font-bold hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                LOOKBOOK
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-wider">mi·ru·na</span>
        </Link>

        {/* Desktop Navigation with Mega Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-0">
            {/* SHOP Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium tracking-wide uppercase px-3">
                Shop
              </NavigationMenuTrigger>
              <NavigationMenuContent className="fixed left-0 right-0 top-[calc(64px+41px)] w-screen z-50">
                <div className="w-full bg-background border-t border-border shadow-xl">
                  <div className="max-w-screen-xl mx-auto py-10 px-12">
                    <div className="flex gap-20">
                      {/* Links */}
                      <div className="space-y-4">
                        {megaMenuData.shop.items.map((item) => (
                          <NavigationMenuLink asChild key={item.name}>
                            <Link
                              to={item.href}
                              className="block text-sm tracking-wide hover:text-primary transition-colors hover:underline underline-offset-4"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                      {/* Featured Image */}
                      <div className="flex-1 flex justify-end">
                        <div className="w-[280px] h-[180px] relative overflow-hidden group">
                          <img
                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop"
                            alt="New Collection"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                            <span className="text-white text-sm font-medium tracking-widest">NEW ARRIVALS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* DRESSES Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium tracking-wide uppercase px-3">
                Dresses
              </NavigationMenuTrigger>
              <NavigationMenuContent className="fixed left-0 right-0 top-[calc(64px+41px)] w-screen z-50">
                <div className="w-full bg-background border-t border-border shadow-xl">
                  <div className="max-w-screen-xl mx-auto py-10 px-12">
                    <div className="flex gap-16">
                      {/* Sections */}
                      {megaMenuData.dresses.sections.map((section) => (
                        <div key={section.title} className="space-y-4">
                          <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                            {section.title}
                          </h3>
                          <div className="space-y-3">
                            {section.items.map((item) => (
                              <NavigationMenuLink asChild key={item.name}>
                                <Link
                                  to={item.href}
                                  className="block text-sm tracking-wide hover:text-primary transition-colors hover:underline underline-offset-4"
                                >
                                  {item.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      ))}
                      {/* Featured Image */}
                      <div className="flex-1 flex justify-end">
                        <div className="w-[280px] h-[280px] relative overflow-hidden group">
                          <img
                            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop"
                            alt="Dresses Collection"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                            <span className="text-white text-sm font-medium tracking-widest">SHOP DRESSES</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* CLOTHING Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium tracking-wide uppercase px-3">
                Clothing
              </NavigationMenuTrigger>
              <NavigationMenuContent className="fixed left-0 right-0 top-[calc(64px+41px)] w-screen z-50">
                <div className="w-full bg-background border-t border-border shadow-xl">
                  <div className="max-w-screen-xl mx-auto py-10 px-12">
                    <div className="flex gap-20">
                      {/* Links */}
                      <div className="space-y-4">
                        {megaMenuData.clothing.items.map((item) => (
                          <NavigationMenuLink asChild key={item.name}>
                            <Link
                              to={item.href}
                              className="block text-sm tracking-wide hover:text-primary transition-colors hover:underline underline-offset-4"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                      {/* Featured Image */}
                      <div className="flex-1 flex justify-end">
                        <div className="w-[280px] h-[180px] relative overflow-hidden group">
                          <img
                            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop"
                            alt="Clothing Collection"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                            <span className="text-white text-sm font-medium tracking-widest">SHOP CLOTHING</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* DROPS Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium tracking-wide uppercase px-3">
                Drops
              </NavigationMenuTrigger>
              <NavigationMenuContent className="fixed left-0 right-0 top-[calc(64px+41px)] w-screen z-50">
                <div className="w-full bg-background border-t border-border shadow-xl">
                  <div className="max-w-screen-xl mx-auto py-10 px-12">
                    <div className="flex gap-20">
                      {/* Links */}
                      <div className="space-y-4">
                        {megaMenuData.drops.items.map((item) => (
                          <NavigationMenuLink asChild key={item.name}>
                            <Link
                              to={item.href}
                              className="block text-sm tracking-wide hover:text-primary transition-colors hover:underline underline-offset-4"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                      {/* Featured Images */}
                      <div className="flex-1 flex justify-end gap-4">
                        <div className="w-[180px] h-[180px] relative overflow-hidden group">
                          <img
                            src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=300&h=300&fit=crop"
                            alt="Drops Collection"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="w-[180px] h-[180px] relative overflow-hidden group">
                          <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop"
                            alt="Featured Drop"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* LOOKBOOK - Simple Link */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/lookbook"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary"
                >
                  Lookbook
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;