import { Truck, RefreshCw, Clock, Headphones } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Truck,
      title: "FREE DELIVERY",
      description: "Orders above AED 1000",
    },
    {
      icon: RefreshCw,
      title: "EASY RETURNS",
      description: "In Dubai",
    },
    {
      icon: Clock,
      title: "4 HOURS DELIVERY",
      description: "In Dubai",
    },
    {
      icon: Headphones,
      title: "CUSTOMER SUPPORT",
      description: "Our team is here to help you",
    },
  ];

  return (
    <section className="border-y border-border bg-muted/50 py-6">
      <div className="container mx-auto px-4">
        {/* Horizontal scroll on mobile, 2x2 grid on tablet, 4-col on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide md:grid md:max-w-3xl md:mx-auto md:grid-cols-2 md:gap-6 md:overflow-visible lg:grid-cols-4 lg:max-w-none">
          {badges.map((badge, index) => (
            <div key={index} className="flex min-w-[140px] flex-shrink-0 flex-col items-center text-center md:min-w-0 md:flex-shrink">
              <div className="mb-2 rounded-full bg-background p-3 shadow-sm">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-1 text-xs font-bold uppercase tracking-wider whitespace-nowrap">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
