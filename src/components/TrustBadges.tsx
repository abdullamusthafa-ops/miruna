const badges = [
  { num: "01", title: "4-Hour Delivery", description: "Within Dubai" },
  { num: "02", title: "7-Day Returns", description: "Across the UAE" },
  { num: "03", title: "Customer Care", description: "Prompt & Reliable" },
  { num: "04", title: "Secure Payments", description: "Tabby · COD · Cards" },
];

const TrustBadges = () => {
  return (
    <section className="border-t border-border bg-luxury-cream py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-3 py-4 md:px-6 md:py-2 ${
                index < badges.length - 1 ? "md:border-r md:border-border/60" : ""
              } ${index % 2 === 0 ? "border-r border-border/60 md:border-r" : ""} ${
                index < 2 ? "border-b border-border/60 md:border-b-0 pb-6 md:pb-2" : "pt-6 md:pt-2"
              }`}
            >
              <span className="font-display text-base text-muted-foreground/80 mb-2 md:text-lg">
                {badge.num}.
              </span>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground sm:text-[11px] md:text-xs">
                {badge.title}
              </h3>
              <p className="mt-1.5 text-[10px] text-muted-foreground sm:text-[11px] tracking-wide">
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
