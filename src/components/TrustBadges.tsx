import { Truck, RefreshCw, Headphones, CreditCard } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Truck,
      title: "4-Hour Delivery",
      description: "Within Dubai",
    },
    {
      icon: RefreshCw,
      title: "7-DAY RETURNS POLICY",
      description: "Across the UAE",
    },
    {
      icon: Headphones,
      title: "CUSTOMER CARE",
      description: "Prompt & Reliable",
    },
    {
      icon: CreditCard,
      title: "Secure payments options",
      description: "Tabby, COD & All Major Cards",
    },
  ];

  return (
    <section className="border-y border-border bg-background py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <badge.icon className="mb-2 h-5 w-5 text-foreground md:h-6 md:w-6" strokeWidth={1.5} />
              <h3 className="text-[10px] font-semibold uppercase tracking-wider text-foreground sm:text-[11px]">
                {badge.title}
              </h3>
              <p className="mt-0.5 text-[9px] text-muted-foreground sm:text-[10px]">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
