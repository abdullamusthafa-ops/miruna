import { ShoppingCart, Search, User, Heart, Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const megaMenuData = {
  dresses: {
    featured: [
      { name: "Evening Gowns", href: "/collection/evening", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop" },
      { name: "Party Dresses", href: "/collection/party", image: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=400&h=500&fit=crop" },
      { name: "Bridal", href: "/collection/bridal", image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=400&h=500&fit=crop" },
    ],
    categories: [
      { title: "BY LENGTH", items: [
        { name: "Mini Dresses", href: "/collection/mini" },
        { name: "Midi Dresses", href: "/collection/midi" },
        { name: "Maxi Dresses", href: "/collection/maxi" },
      ]},
      { title: "BY OCCASION", items: [
        { name: "Party", href: "/collection/party" },
        { name: "Birthday", href: "/collection/birthday" },
        { name: "Prom", href: "/collection/prom" },
        { name: "Night Out", href: "/collection/night-out" },
      ]},
    ],
  },
  clothing: {
    featured: [
      { name: "Co-ords", href: "/collection/co-ords", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop" },
      { name: "Blazers", href: "/collection/blazers", image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop" },
      { name: "Corsets", href: "/collection/corsets", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop" },
    ],
    categories: [
      { title: "CATEGORIES", items: [
        { name: "Tops & Bodysuits", href: "/collection/tops-bodysuits" },
        { name: "Bottoms & Skirts", href: "/collection/bottoms-skirts" },
        { name: "Jumpsuits", href: "/collection/jumpsuits" },
      ]},
    ],
  },
  drops: {
    featured: [
      { name: "Too Good To Lose", href: "/collection/too-good-to-lose", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop" },
      { name: "My Mom Said No", href: "/collection/my-mom-said-no", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop" },
      { name: "I Woke Up Like This", href: "/collection/i-woke-up-like-this", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop" },
    ],
  },
  shop: {
    featured: [
      { name: "New Arrivals", href: "/collection/new-in", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop" },
      { name: "Bestsellers", href: "/collection/bestsellers", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&h=500&fit=crop" },
    ],
    links: [
      { name: "Shop All", href: "/products" },
      { name: "Gift Cards", href: "/gift-cards" },
    ],
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const CollectionCard = ({ item, size = "normal" }: { item: { name: string; href: string; image: string }; size?: "normal" | "large" }) => (
    <Link 
      to={item.href} 
      className={`collection-card block ${size === "large" ? "aspect-[3/4]" : "aspect-[4/5]"}`}
    >
      <img
        src={item.image}
        alt={item.name}
        className="collection-card-image"
      />
      <div className="collection-card-overlay" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="text-white text-xs font-medium tracking-[0.2em] uppercase">
          {item.name}
        </span>
      </div>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto overflow-hidden">
          <div className="flex animate-[scroll_25s_linear_infinite] whitespace-nowrap py-2.5 text-[11px] tracking-[0.15em] font-light">
            <span className="mx-10">ENJOY FAST, RELIABLE WORLDWIDE SHIPPING</span>
            <span className="mx-10">·</span>
            <span className="mx-10">4H DELIVERY IN DUBAI</span>
            <span className="mx-10">·</span>
            <span className="mx-10">UP TO 40% OFF SELECTED ITEMS</span>
            <span className="mx-10">·</span>
            <span className="mx-10">ENJOY FAST, RELIABLE WORLDWIDE SHIPPING</span>
            <span className="mx-10">·</span>
            <span className="mx-10">4H DELIVERY IN DUBAI</span>
            <span className="mx-10">·</span>
            <span className="mx-10">UP TO 40% OFF SELECTED ITEMS</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-transparent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[320px] overflow-y-auto bg-background">
              <nav className="flex flex-col space-y-8 mt-10">
                {/* Mobile Dresses */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-foreground">Dresses</h3>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {megaMenuData.dresses.featured.slice(0, 2).map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="relative aspect-[3/4] overflow-hidden"
                        onClick={() => setIsOpen(false)}
                      >
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30" />
                        <span className="absolute bottom-2 left-2 text-white text-[10px] tracking-wider uppercase">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                  {megaMenuData.dresses.categories.map((cat) => (
                    <div key={cat.title} className="mb-3">
                      <span className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase">{cat.title}</span>
                      <div className="flex flex-col mt-1.5">
                        {cat.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm py-1.5 hover:text-muted-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Clothing */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-foreground">Clothing</h3>
                  <div className="flex flex-col">
                    {megaMenuData.clothing.categories[0].items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-sm py-1.5 hover:text-muted-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Drops */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-foreground">Drops</h3>
                  <div className="flex flex-col">
                    {megaMenuData.drops.featured.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-sm py-1.5 hover:text-muted-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Shop */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-foreground">Shop</h3>
                  <div className="flex flex-col">
                    {megaMenuData.shop.links.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-sm py-1.5 hover:text-muted-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-light tracking-[0.1em]">mi·ru·na</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" onMouseLeave={handleMouseLeave}>
            {/* Dresses */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('dresses')}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors">
                Dresses
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'dresses' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Clothing */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('clothing')}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors">
                Clothing
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'clothing' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Drops */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('drops')}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors">
                Drops
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'drops' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Shop */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('shop')}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors">
                Shop
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'shop' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Lookbook - Simple Link */}
            <Link
              to="/lookbook"
              className="px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors"
            >
              Lookbook
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-transparent">
              <User className="h-4 w-4" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-transparent">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Wishlist</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mega Menu Overlays */}
      {activeMenu && (
        <div 
          className="fixed inset-x-0 top-[105px] z-40 bg-background border-b border-border shadow-lg animate-slide-down"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto py-8 px-8">
            {/* Dresses Menu */}
            {activeMenu === 'dresses' && (
              <div className="grid grid-cols-12 gap-8">
                {/* Categories */}
                <div className="col-span-3 space-y-6">
                  {megaMenuData.dresses.categories.map((cat) => (
                    <div key={cat.title}>
                      <h4 className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground mb-3">{cat.title}</h4>
                      <div className="space-y-2">
                        {cat.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="mega-menu-link block py-0.5"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link 
                    to="/collection/dresses" 
                    className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase border-b border-foreground pb-0.5 hover:text-muted-foreground transition-colors"
                  >
                    Shop All Dresses
                  </Link>
                </div>

                {/* Featured Collections */}
                <div className="col-span-9">
                  <h4 className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground mb-4">FEATURED</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {megaMenuData.dresses.featured.map((item) => (
                      <CollectionCard key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Clothing Menu */}
            {activeMenu === 'clothing' && (
              <div className="grid grid-cols-12 gap-8">
                {/* Categories */}
                <div className="col-span-3 space-y-6">
                  {megaMenuData.clothing.categories.map((cat) => (
                    <div key={cat.title}>
                      <h4 className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground mb-3">{cat.title}</h4>
                      <div className="space-y-2">
                        {cat.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="mega-menu-link block py-0.5"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link 
                    to="/collection/clothing" 
                    className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase border-b border-foreground pb-0.5 hover:text-muted-foreground transition-colors"
                  >
                    Shop All Clothing
                  </Link>
                </div>

                {/* Featured Collections */}
                <div className="col-span-9">
                  <h4 className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground mb-4">FEATURED</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {megaMenuData.clothing.featured.map((item) => (
                      <CollectionCard key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Drops Menu */}
            {activeMenu === 'drops' && (
              <div>
                <h4 className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground mb-4">LATEST COLLECTIONS</h4>
                <div className="grid grid-cols-3 gap-4 max-w-4xl">
                  {megaMenuData.drops.featured.map((item) => (
                    <CollectionCard key={item.name} item={item} size="large" />
                  ))}
                </div>
              </div>
            )}

            {/* Shop Menu */}
            {activeMenu === 'shop' && (
              <div className="grid grid-cols-12 gap-8">
                {/* Quick Links */}
                <div className="col-span-3 space-y-3">
                  <h4 className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground mb-3">QUICK LINKS</h4>
                  {megaMenuData.shop.links.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="mega-menu-link block py-0.5"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Featured */}
                <div className="col-span-6">
                  <h4 className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground mb-4">FEATURED</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {megaMenuData.shop.featured.map((item) => (
                      <CollectionCard key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overlay backdrop */}
      {activeMenu && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 top-[105px]"
          onClick={handleMouseLeave}
        />
      )}
    </header>
  );
};

export default Header;