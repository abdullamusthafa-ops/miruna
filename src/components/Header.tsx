import { ShoppingCart, Search, User, Heart, Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const megaMenuData = {
  shop: {
    items: [
      { name: "New In", href: "/collection/new-in" },
      { name: "Best Sellers", href: "/collection/bestsellers" },
      { name: "Shop All", href: "/products" },
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
  },
  clothing: {
    items: [
      { name: "Co-ords", href: "/collection/co-ords" },
      { name: "Blazers", href: "/collection/blazers" },
      { name: "Tops / Bodysuits", href: "/collection/tops-bodysuits" },
      { name: "Bottoms / Skirts", href: "/collection/bottoms-skirts" },
      { name: "Jumpsuits", href: "/collection/jumpsuits" },
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

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement Bar */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto py-2 text-center">
          <span className="text-[11px] tracking-[0.2em] uppercase font-medium text-foreground">
            MADE IN UAE
          </span>
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
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">
              mi<span className="text-muted-foreground">·</span>ru<span className="text-muted-foreground">·</span>na
              <span className="text-[8px] align-super">®</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0" onMouseLeave={handleMouseLeave}>
            {/* Sale */}
            <Link
              to="/collection/sale"
              className="px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase border border-foreground mx-2 hover:bg-foreground hover:text-background transition-colors"
            >
              Sale
            </Link>

            {/* Shop */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('shop')}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors ${activeMenu === 'shop' ? 'bg-muted' : 'hover:text-muted-foreground'}`}>
                Shop
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'shop' ? 'rotate-180' : ''}`} />
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

            {/* Lookbook */}
            <Link
              to="/lookbook"
              className="px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-muted transition-colors"
            >
              Lookbook
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-transparent border border-border rounded-none">
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
          className="fixed inset-x-0 top-[97px] z-40 bg-background border-b border-border shadow-sm animate-slide-down"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto py-6 px-8">
            {/* Shop Menu */}
            {activeMenu === 'shop' && (
              <div className="space-y-2.5">
                {megaMenuData.shop.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Drops Menu */}
            {activeMenu === 'drops' && (
              <div className="space-y-2.5">
                {megaMenuData.drops.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Dresses Menu */}
            {activeMenu === 'dresses' && (
              <div className="grid grid-cols-4 gap-12">
                {megaMenuData.dresses.sections.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-xs font-bold tracking-[0.15em] text-foreground mb-4">{section.title}</h4>
                    <div className="space-y-2.5">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Clothing Menu */}
            {activeMenu === 'clothing' && (
              <div className="space-y-2.5">
                {megaMenuData.clothing.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;