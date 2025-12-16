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
  dresses: {
    sections: [
      {
        title: "By Length",
        items: [
          { name: "Mini", href: "/collection/mini" },
          { name: "Midi", href: "/collection/midi" },
          { name: "Maxi", href: "/collection/maxi" },
        ],
      },
      {
        title: "By Occasion",
        items: [
          { name: "Party", href: "/collection/party" },
          { name: "Brunch", href: "/collection/brunch" },
          { name: "Bridal", href: "/collection/bridal" },
          { name: "Birthday", href: "/collection/birthday" },
          { name: "Prom", href: "/collection/prom" },
        ],
      },
      {
        title: "By Style",
        items: [
          { name: "Evening", href: "/collection/evening" },
          { name: "Formal", href: "/collection/formal" },
          { name: "Night Out", href: "/collection/night-out" },
        ],
      },
      {
        title: "By Colour",
        items: [
          { name: "Red", href: "/collection/red" },
          { name: "Brown", href: "/collection/brown" },
          { name: "Pink", href: "/collection/pink" },
          { name: "Yellow", href: "/collection/yellow" },
          { name: "Blue", href: "/collection/blue" },
          { name: "White", href: "/collection/white" },
          { name: "Black", href: "/collection/black" },
          { name: "Gold", href: "/collection/gold" },
          { name: "Silver", href: "/collection/silver" },
        ],
      },
    ],
  },
  clothing: {
    items: [
      { name: "Co-ords", href: "/collection/co-ords" },
      { name: "Blazers", href: "/collection/blazers" },
      { name: "Tops / Bodysuits", href: "/collection/tops-bodysuits" },
      { name: "Corsets", href: "/collection/corsets" },
      { name: "Bottoms / Skirts", href: "/collection/bottoms-skirts" },
      { name: "Jumpsuits", href: "/collection/jumpsuits" },
    ],
  },
  drops: {
    items: [
      { name: "Too Good To Lose", href: "/collection/too-good-to-lose" },
      { name: "My Mom Said No", href: "/collection/my-mom-said-no" },
      { name: "I Woke Up Like This", href: "/collection/i-woke-up-like-this" },
      { name: "Fluff Stuff", href: "/collection/fluff-stuff" },
    ],
  },
  shop: {
    items: [
      { name: "New In", href: "/collection/new-in" },
      { name: "Bestsellers", href: "/collection/bestsellers" },
      { name: "Shop All", href: "/products" },
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
          <NavigationMenuList className="gap-1">
            {/* DRESSES Menu - First since it's the main category */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 hover:text-primary transition-colors">
                Dresses
              </NavigationMenuTrigger>
              <NavigationMenuContent className="fixed left-0 right-0 top-[calc(64px+41px)] w-screen z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                <div className="w-full bg-background/98 backdrop-blur-sm border-t border-border/50 shadow-2xl">
                  <div className="max-w-screen-xl mx-auto py-8 px-8">
                    <div className="grid grid-cols-5 gap-8">
                      {/* Sections */}
                      {megaMenuData.dresses.sections.map((section) => (
                        <div key={section.title} className="space-y-4">
                          <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary border-b border-primary/20 pb-2">
                            {section.title}
                          </h3>
                          <div className="space-y-2.5">
                            {section.items.map((item) => (
                              <NavigationMenuLink asChild key={item.name}>
                                <Link
                                  to={item.href}
                                  className="block text-sm font-light tracking-wide text-foreground/80 hover:text-primary hover:translate-x-1 transition-all duration-200"
                                >
                                  {item.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      ))}
                      {/* Featured Image */}
                      <div className="flex justify-end">
                        <Link to="/collection/party" className="block w-[220px] h-[280px] relative overflow-hidden group">
                          <img
                            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop"
                            alt="Dresses Collection"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <span className="text-white text-[10px] font-semibold tracking-[0.3em] uppercase">Shop Dresses</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* CLOTHING Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 hover:text-primary transition-colors">
                Clothing
              </NavigationMenuTrigger>
              <NavigationMenuContent className="fixed left-0 right-0 top-[calc(64px+41px)] w-screen z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                <div className="w-full bg-background/98 backdrop-blur-sm border-t border-border/50 shadow-2xl">
                  <div className="max-w-screen-xl mx-auto py-8 px-8">
                    <div className="flex gap-16">
                      {/* Links in 2 columns */}
                      <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                        {megaMenuData.clothing.items.map((item) => (
                          <NavigationMenuLink asChild key={item.name}>
                            <Link
                              to={item.href}
                              className="text-sm font-light tracking-wide text-foreground/80 hover:text-primary hover:translate-x-1 transition-all duration-200 whitespace-nowrap"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                      {/* Featured Images */}
                      <div className="flex-1 flex justify-end gap-4">
                        <Link to="/collection/co-ords" className="block w-[180px] h-[220px] relative overflow-hidden group">
                          <img
                            src="https://miruna.io/cdn/shop/files/D0001752.jpg?v=1761559408&width=400"
                            alt="Co-ords"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <span className="text-white text-[9px] font-semibold tracking-[0.25em] uppercase">Co-ords</span>
                          </div>
                        </Link>
                        <Link to="/collection/blazers" className="block w-[180px] h-[220px] relative overflow-hidden group">
                          <img
                            src="https://miruna.io/cdn/shop/files/D0001829.jpg?v=1761559119&width=400"
                            alt="Blazers"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <span className="text-white text-[9px] font-semibold tracking-[0.25em] uppercase">Blazers</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* DROPS Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 hover:text-primary transition-colors">
                Drops
              </NavigationMenuTrigger>
              <NavigationMenuContent className="fixed left-0 right-0 top-[calc(64px+41px)] w-screen z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                <div className="w-full bg-background/98 backdrop-blur-sm border-t border-border/50 shadow-2xl">
                  <div className="max-w-screen-xl mx-auto py-8 px-8">
                    <div className="flex gap-16">
                      {/* Links */}
                      <div className="space-y-3">
                        {megaMenuData.drops.items.map((item) => (
                          <NavigationMenuLink asChild key={item.name}>
                            <Link
                              to={item.href}
                              className="block text-sm font-light tracking-wide text-foreground/80 hover:text-primary hover:translate-x-1 transition-all duration-200"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                      {/* Featured Images Grid */}
                      <div className="flex-1 flex justify-end gap-3">
                        {megaMenuData.drops.items.slice(0, 4).map((item, index) => (
                          <Link 
                            key={item.name}
                            to={item.href} 
                            className="block w-[140px] h-[180px] relative overflow-hidden group"
                          >
                            <img
                              src={[
                                "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=300&h=400&fit=crop",
                                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop",
                                "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&h=400&fit=crop",
                                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=400&fit=crop",
                              ][index]}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-2.5">
                              <span className="text-white text-[8px] font-semibold tracking-[0.2em] uppercase leading-tight block">
                                {item.name}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* SHOP Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 hover:text-primary transition-colors">
                Shop
              </NavigationMenuTrigger>
              <NavigationMenuContent className="fixed left-0 right-0 top-[calc(64px+41px)] w-screen z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                <div className="w-full bg-background/98 backdrop-blur-sm border-t border-border/50 shadow-2xl">
                  <div className="max-w-screen-xl mx-auto py-8 px-8">
                    <div className="flex gap-16">
                      {/* Links */}
                      <div className="space-y-3">
                        {megaMenuData.shop.items.map((item) => (
                          <NavigationMenuLink asChild key={item.name}>
                            <Link
                              to={item.href}
                              className="block text-sm font-light tracking-wide text-foreground/80 hover:text-primary hover:translate-x-1 transition-all duration-200"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                      {/* Featured Image */}
                      <div className="flex-1 flex justify-end">
                        <Link to="/collection/new-in" className="block w-[320px] h-[200px] relative overflow-hidden group">
                          <img
                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop"
                            alt="New Collection"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <span className="text-white text-[10px] font-semibold tracking-[0.3em] uppercase">New Arrivals</span>
                          </div>
                        </Link>
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
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition-colors hover:text-primary"
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