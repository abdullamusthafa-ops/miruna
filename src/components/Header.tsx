import { ShoppingCart, Search, User, Heart, Menu } from "lucide-react";
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
  dresses: {
    title: "DRESSES",
    sections: [
      {
        title: "SHOP BY LENGTH",
        items: [
          { name: "Mini", href: "/products?length=mini" },
          { name: "Maxi", href: "/products?length=maxi" },
          { name: "Midi", href: "/products?length=midi" },
          { name: "Midaxi", href: "/products?length=midaxi" },
          { name: "Gowns", href: "/products?length=gowns" },
        ],
      },
      {
        title: "SHOP BY COLOUR",
        items: [
          { name: "Red", href: "/products?color=red" },
          { name: "Black", href: "/products?color=black" },
          { name: "Brown", href: "/products?color=brown" },
          { name: "Gold", href: "/products?color=gold" },
          { name: "White", href: "/products?color=white" },
          { name: "Pink", href: "/products?color=pink" },
          { name: "Blue", href: "/products?color=blue" },
        ],
      },
      {
        title: "SHOP BY STYLE",
        items: [
          { name: "Embellished", href: "/products?style=embellished" },
          { name: "Corset", href: "/products?style=corset" },
          { name: "Bodycon", href: "/products?style=bodycon" },
          { name: "Backless", href: "/products?style=backless" },
          { name: "Long Sleeve", href: "/products?style=long-sleeve" },
          { name: "Daytime", href: "/products?style=daytime" },
        ],
      },
    ],
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const simpleNavigation = [
    { name: "Best Sellers", href: "/products?filter=bestseller" },
    { name: "New Arrivals", href: "/products?filter=new" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

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
              {/* Mobile Dresses Menu */}
              <div>
                <h3 className="text-lg font-bold mb-4">DRESSES</h3>
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
              
              {/* Other Nav Items */}
              {simpleNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-wider">mi·ru·na</span>
        </Link>

        {/* Desktop Navigation with Mega Menu */}
        <NavigationMenu className="hidden lg:flex static">
          <NavigationMenuList>
            {/* Dresses Mega Menu */}
            <NavigationMenuItem className="static">
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium tracking-wide uppercase">
                Dresses
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 top-full w-screen">
                <div className="w-screen bg-background border-t border-border shadow-2xl">
                  <div className="container mx-auto py-12 px-8">
                    <div className="grid grid-cols-4 gap-12">
                      {/* Menu Sections */}
                      {megaMenuData.dresses.sections.map((section) => (
                        <div key={section.title}>
                          <h3 className="text-xs font-bold tracking-[0.2em] text-primary mb-6 pb-2 border-b border-border">
                            {section.title}
                          </h3>
                          <ul className="space-y-3">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={item.href}
                                    className="block text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200 py-1"
                                  >
                                    {item.name}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      
                      {/* Featured Image */}
                      <div className="relative overflow-hidden rounded-lg group">
                        <img 
                          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop" 
                          alt="Featured Collection"
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="text-xs tracking-widest mb-1">NEW COLLECTION</p>
                          <p className="text-lg font-semibold">Spring Essentials</p>
                          <Link 
                            to="/products?collection=spring" 
                            className="inline-block mt-2 text-xs underline underline-offset-4 hover:text-primary transition-colors"
                          >
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Bar */}
                    <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
                      <Link 
                        to="/products?category=dresses" 
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        View All Dresses 
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                      <p className="text-xs text-muted-foreground">Free shipping on orders over AED 500</p>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Simple Nav Links */}
            {simpleNavigation.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
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
