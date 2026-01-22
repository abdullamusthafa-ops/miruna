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
    <section className="border-y border-border bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-background p-4 shadow-sm">
                <badge.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-bold uppercase tracking-wider">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
