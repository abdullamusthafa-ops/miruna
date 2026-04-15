import { ShoppingCart, Search, User, Heart, Menu, ChevronDown } from "lucide-react";
import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";

const megaMenuData = {
  shop: {
    items: [
      { name: "New In", href: "/collection/new-in" },
      { name: "Best Sellers", href: "/collection/bestsellers" },
      { name: "Shop All", href: "/products" },
    ],
    featured: [
      { name: "New Arrivals", href: "/collection/new-in", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop" },
      { name: "Best Sellers", href: "/collection/bestsellers", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&h=500&fit=crop" },
    ],
  },
  drops: {
    items: [
      { name: "Too Good To Lose", href: "/collection/too-good-to-lose", image: "https://miruna.io/cdn/shop/files/To_Good_To_Lose-Mega-Menu-Desktop.webp?v=1769001461&width=630" },
      { name: "My Mom Said No", href: "/collection/my-mom-said-no", image: "https://miruna.io/cdn/shop/files/My_Mom_Said_No-Mega-Menu-Desktop.webp?v=1769001461&width=630" },
      { name: "I Woke Up Like This", href: "/collection/i-woke-up-like-this", image: "https://miruna.io/cdn/shop/files/I_Woke_Up_Like_This-Mega-Menu-Desktop.webp?v=1769001461&width=630" },
      { name: "Fluff Stuff", href: "/collection/fluff-stuff", image: "https://miruna.io/cdn/shop/files/Fluff_Stuff-Mega-Menu-Desktop.webp?v=1769001462&width=630" },
    ],
  },
  dresses: {
    sections: [
      {
        title: "BY LENGTH",
        items: [
          { name: "Mini", href: "/collection/mini" },
          { name: "Midi", href: "/collection/midi" },
          { name: "Maxi", href: "/collection/maxi" },
        ],
      },
      {
        title: "BY OCCASION",
        items: [
          { name: "Party", href: "/collection/party" },
          { name: "Birthday", href: "/collection/birthday" },
          { name: "Evening", href: "/collection/evening" },
          { name: "Bridal", href: "/collection/bridal" },
          { name: "Casual", href: "/collection/casual" },
          { name: "Prom", href: "/collection/prom" },
          { name: "Brunch", href: "/collection/brunch" },
        ],
      },
      {
        title: "BY STYLE",
        items: [
          { name: "Bodycon", href: "/collection/bodycon" },
          { name: "Cut Out", href: "/collection/cut-out" },
          { name: "Corset", href: "/collection/corset" },
          { name: "Blazer", href: "/collection/blazer" },
          { name: "Drapped", href: "/collection/drapped" },
        ],
      },
      {
        title: "BY COLOUR",
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
    featured: { name: "Shop All Dresses", href: "/collection/dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop" },
  },
  clothing: {
    items: [
      { name: "Co-ords", href: "/collection/co-ords" },
      { name: "Blazers", href: "/collection/blazers" },
      { name: "Tops / Bodysuits", href: "/collection/tops-bodysuits" },
      { name: "Bottoms / Skirts", href: "/collection/bottoms-skirts" },
      { name: "Jumpsuits", href: "/collection/jumpsuits" },
    ],
    featured: [
      { name: "Co-ords", href: "/collection/co-ords", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop" },
      { name: "New Blazers", href: "/collection/blazers", image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop" },
    ],
  },
};

interface HeaderProps {
  solidBackground?: boolean;
}

const Header = ({ solidBackground = false }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(solidBackground);
  const [isHovered, setIsHovered] = useState(false);

  const isSolid = isScrolled || isHovered || activeMenu !== null;

  useEffect(() => {
    if (solidBackground) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [solidBackground]);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const CollectionCard = ({ item, className = "" }: { item: { name: string; href: string; image: string }; className?: string }) => (
    <Link 
      to={item.href} 
      className={`collection-card block aspect-[3/4] ${className}`}
    >
      <img
        src={item.image}
        alt={item.name}
        className="collection-card-image"
      />
      <div className="collection-card-overlay" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="text-white text-[11px] font-medium tracking-[0.15em] uppercase">
          {item.name}
        </span>
      </div>
    </Link>
  );

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Announcement Bar - only visible when scrolled */}
      {isScrolled && <AnnouncementBar />}

      {/* Main Header */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-background border-b border-border' : 'bg-transparent border-b border-transparent'}`}>
        <div className={`container mx-auto flex h-16 items-center justify-between px-4 transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
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
                {/* Mobile Sale */}
                <Link
                  to="/collection/sale"
                  className="text-sm font-semibold tracking-[0.1em] uppercase border border-foreground px-4 py-2 text-center hover:bg-foreground hover:text-background transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sale
                </Link>

                {/* Mobile Shop */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-foreground">Shop</h3>
                  <div className="flex flex-col space-y-2">
                    {megaMenuData.shop.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-sm py-1.5 text-foreground/80 hover:text-foreground transition-colors"
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
                  <div className="flex flex-col space-y-2">
                    {megaMenuData.drops.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-sm py-1.5 text-foreground/80 hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Dresses */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-foreground">Dresses</h3>
                  {megaMenuData.dresses.sections.map((section) => (
                    <div key={section.title} className="mb-4">
                      <span className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase font-semibold">{section.title}</span>
                      <div className="flex flex-col mt-2 space-y-1.5">
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
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
                  <div className="flex flex-col space-y-2">
                    {megaMenuData.clothing.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-sm py-1.5 text-foreground/80 hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Lookbook */}
                <Link
                  to="/lookbook"
                  className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Lookbook
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center">
            <img
              src={isScrolled ? logoBlack : logoWhite}
              alt="Miruna"
              className="h-4 sm:h-4 md:h-5 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0" onMouseLeave={handleMouseLeave}>
            {/* New In */}
            <Link
              to="/collection/new-in"
              className="px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase hover:text-muted-foreground transition-colors"
            >
              New In
            </Link>

            {/* Spring */}
            <Link
              to="/collection/spring-collection"
              className="px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase hover:text-muted-foreground transition-colors"
            >
              Spring
            </Link>

            {/* Clothing */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('clothing')}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors ${activeMenu === 'clothing' ? 'bg-muted' : 'hover:text-muted-foreground'}`}>
                Clothing
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'clothing' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Occasion */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('shop')}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors ${activeMenu === 'shop' ? 'bg-muted' : 'hover:text-muted-foreground'}`}>
                Occasion
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'shop' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Dresses */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('dresses')}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors ${activeMenu === 'dresses' ? 'bg-muted' : 'hover:text-muted-foreground'}`}>
                Dresses
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'dresses' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Drops */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('drops')}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors ${activeMenu === 'drops' ? 'bg-muted' : 'hover:text-muted-foreground'}`}>
                Drops
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'drops' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Sale */}
            <Link
              to="/collection/sale"
              className={`px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase mx-2 transition-colors ${isScrolled ? 'border border-foreground hover:bg-foreground hover:text-background' : 'border border-white hover:bg-white hover:text-black'}`}
            >
              Sale
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className={`hidden sm:flex hover:bg-transparent rounded-none ${isScrolled ? 'border border-border' : 'border border-white/50'}`}>
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-transparent">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdowns */}
      {activeMenu && (
        <div 
          className="fixed inset-x-0 top-[97px] z-40 bg-background border-b border-border shadow-lg animate-slide-down"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto py-8 px-8">
            {/* Shop Menu */}
            {activeMenu === 'shop' && (
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3 space-y-3">
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground mb-4">QUICK LINKS</h4>
                  {megaMenuData.shop.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="mega-menu-link block py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="col-span-6">
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground mb-4">FEATURED</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {megaMenuData.shop.featured.map((item) => (
                      <CollectionCard key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Drops Menu */}
            {activeMenu === 'drops' && (
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground mb-4">LATEST COLLECTIONS</h4>
                <div className="grid grid-cols-4 gap-4">
                  {megaMenuData.drops.items.map((item) => (
                    <CollectionCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            )}

            {/* Dresses Menu */}
            {activeMenu === 'dresses' && (
              <div className="grid grid-cols-12 gap-8">
                {/* Categories - 4 columns */}
                <div className="col-span-9 grid grid-cols-4 gap-8">
                  {megaMenuData.dresses.sections.map((section) => (
                    <div key={section.title}>
                      <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground mb-4">{section.title}</h4>
                      <div className="space-y-2">
                        {section.items.map((item) => (
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
                </div>
                {/* Featured Image */}
                <div className="col-span-3">
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground mb-4">FEATURED</h4>
                  <CollectionCard item={megaMenuData.dresses.featured} />
                </div>
              </div>
            )}

            {/* Clothing Menu */}
            {activeMenu === 'clothing' && (
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3 space-y-2">
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground mb-4">CATEGORIES</h4>
                  {megaMenuData.clothing.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="mega-menu-link block py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link 
                    to="/collection/clothing" 
                    className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase border-b border-foreground pb-0.5 mt-4 hover:text-muted-foreground transition-colors"
                  >
                    Shop All Clothing
                  </Link>
                </div>
                <div className="col-span-6">
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground mb-4">FEATURED</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {megaMenuData.clothing.featured.map((item) => (
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
          className="fixed inset-0 bg-black/20 z-30 top-[97px]"
          onClick={handleMouseLeave}
        />
      )}
    </header>
  );
};

export default Header;