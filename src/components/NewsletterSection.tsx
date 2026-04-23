import { useState } from "react";
import editorialImg from "@/assets/in-white-category.webp";

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
    <section className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[70svh] md:max-h-[85svh]">
        {/* Image side */}
        <div className="relative h-[50svh] md:h-auto overflow-hidden bg-muted order-1">
          <img
            src={editorialImg}
            alt="Miruna newsletter"
            className="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Copy + form side */}
        <div className="flex flex-col justify-center bg-luxury-cream px-6 py-16 md:px-12 lg:px-20 md:py-24 order-2">
          <div className="max-w-md mx-auto md:mx-0 w-full text-center md:text-left">
            <span className="inline-block bg-foreground text-background text-[10px] font-semibold uppercase tracking-[0.25em] px-3 py-1.5 mb-5">
              10% Off · First Order
            </span>
            <h2 className="text-3xl font-display tracking-tight text-foreground md:text-4xl lg:text-5xl mb-4 leading-[1.1]">
              Be the first <span className="italic font-light">to know.</span>
            </h2>
            <p className="text-xs text-muted-foreground mb-8 sm:text-sm leading-relaxed">
              Join the list for early access to new collections, private drops, and VIP-only offers.
            </p>

            {isSubmitted ? (
              <p className="text-sm font-medium text-foreground">
                Thank you. Check your inbox for your discount code.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">Email</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full bg-transparent border-0 border-b border-foreground/30 px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative inline-block overflow-hidden border border-foreground px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors active:scale-[0.98]"
                >
                  <span className="absolute inset-0 bg-foreground translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                    Subscribe
                  </span>
                </button>
              </form>
            )}

            <p className="mt-6 text-[10px] text-muted-foreground tracking-wide">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
