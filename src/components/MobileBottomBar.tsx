import { Home, Search, Heart, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileBottomBar = () => {
  const location = useLocation();

  const items = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", href: "/products" },
    { icon: Heart, label: "Wishlist", href: "/wishlist" },
    { icon: ShoppingCart, label: "Cart", href: "/cart" },
    { icon: User, label: "Account", href: "/account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background sm:hidden">
      <div className="flex items-center justify-around py-2 pb-[env(safe-area-inset-bottom,8px)]">
        {items.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.label}
              to={item.href}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[9px] font-medium tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomBar;
