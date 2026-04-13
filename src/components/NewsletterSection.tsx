import { useState } from "react";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-foreground py-10 text-background md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-2 text-lg font-display tracking-tight sm:text-2xl md:text-3xl">
          Get 10% Off Your First Order
        </h2>
        <p className="mx-auto mb-5 max-w-md text-[11px] text-background/70 sm:text-sm sm:mb-6">
          Subscribe for exclusive access to new collections & VIP offers
        </p>
        
        {isSubmitted ? (
          <p className="text-sm font-medium text-background">
            Thank you! Check your email for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 border border-background/30 bg-transparent px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:border-background sm:py-2.5"
            />
            <Button 
              type="submit"
              variant="secondary" 
              className="px-6 py-3 text-xs uppercase tracking-wider w-full sm:w-auto sm:py-2.5 active:scale-95 transition-transform"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
