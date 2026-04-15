import { Link } from "react-router-dom";
import logoBlack from "@/assets/logo-black.png";
import { Instagram, Facebook, Twitter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="border-t border-border bg-background pb-20 sm:pb-0">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="pb-6 md:pb-0">
            <img src={logoBlack} alt="Miruna" className="h-6 w-auto mb-3 md:mb-4" />
            <p className="text-[11px] text-muted-foreground sm:text-sm leading-relaxed">
              Discover bold fashion and statement pieces crafted with passion and precision.
            </p>
          </div>

          {/* Quick Links - Accordion on mobile */}
          <div className="border-t border-border md:border-0">
            <button
              onClick={() => toggleSection("quick")}
              className="flex w-full items-center justify-between py-4 md:pointer-events-none md:pb-0 md:pt-0"
            >
              <h4 className="text-xs font-semibold uppercase tracking-wider">Quick Links</h4>
              <ChevronDown className={`h-4 w-4 transition-transform md:hidden ${openSection === "quick" ? "rotate-180" : ""}`} />
            </button>
            <ul className={`space-y-2 text-sm overflow-hidden transition-all duration-300 md:max-h-none md:opacity-100 md:mt-4 ${openSection === "quick" ? "max-h-60 opacity-100 pb-4" : "max-h-0 opacity-0"}`}>
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors text-[12px]">Shop All</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-[12px]">About Us</Link></li>
              <li><Link to="/story" className="text-muted-foreground hover:text-foreground transition-colors text-[12px]">Meet Miruna</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-[12px]">Contact</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors text-[12px]">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Service - Accordion on mobile */}
          <div className="border-t border-border md:border-0">
            <button
              onClick={() => toggleSection("service")}
              className="flex w-full items-center justify-between py-4 md:pointer-events-none md:pb-0 md:pt-0"
            >
              <h4 className="text-xs font-semibold uppercase tracking-wider">Customer Service</h4>
              <ChevronDown className={`h-4 w-4 transition-transform md:hidden ${openSection === "service" ? "rotate-180" : ""}`} />
            </button>
            <ul className={`space-y-2 text-sm overflow-hidden transition-all duration-300 md:max-h-none md:opacity-100 md:mt-4 ${openSection === "service" ? "max-h-60 opacity-100 pb-4" : "max-h-0 opacity-0"}`}>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors text-[12px]">Shipping Information</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors text-[12px]">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors text-[12px]">Size Guide</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors text-[12px]">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="border-t border-border pt-4 md:border-0 md:pt-0">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider md:mb-4">Stay Connected</h4>
            <p className="mb-3 text-[11px] text-muted-foreground sm:text-sm md:mb-4">
              Subscribe to get special offers
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="flex-1 text-sm py-2.5" />
              <Button variant="default" className="active:scale-95 transition-transform">Subscribe</Button>
            </div>
            <div className="mt-5 flex space-x-5 md:mt-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-[11px] text-muted-foreground sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Miruna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
