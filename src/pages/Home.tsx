import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DressCategoriesSection from "@/components/DressCategoriesSection";
import BestSellersBanner from "@/components/BestSellersBanner";
import SaleProductsSection from "@/components/SaleProductsSection";
import ValentinesEditSection from "@/components/ValentinesEditSection";
import ClothingNavigationSection from "@/components/ClothingNavigationSection";
import TrustBadges from "@/components/TrustBadges";
import NewsletterSection from "@/components/NewsletterSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Video */}
      <section className="relative h-[85vh] sm:h-[90vh] md:h-[100vh] overflow-hidden">
        {/* Fallback image shown while video loads */}
        <img
          src="/images/hero-poster.png"
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.png"
        >
          <source src="/videos/miruna-banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto flex h-full items-center justify-center px-4 text-center">
          <div className="max-w-4xl">
            <h1 className="mb-4 text-2xl font-light tracking-wide text-white uppercase sm:text-3xl sm:mb-6 md:text-4xl lg:text-5xl xl:text-6xl">
              These Outfits Will Do The Talking
            </h1>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-xs sm:tracking-[0.3em] sm:mb-8">
              Designed for every mood, every moment, made in UAE.
            </p>
            <Link 
              to="/products"
              className="inline-block border border-white bg-transparent px-6 py-2.5 text-[10px] font-medium tracking-[0.15em] uppercase text-white transition-colors hover:bg-white hover:text-foreground sm:px-8 sm:py-3 sm:text-xs"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges - Build immediate credibility */}
      <TrustBadges />

      {/* Dress Categories - Primary navigation */}
      <DressCategoriesSection />

      {/* Best Sellers Banner - Social proof */}
      <BestSellersBanner />

      {/* Sale Products Carousel - Create urgency */}
      <SaleProductsSection />

      {/* Valentines Edit Banner - Seasonal promotion */}
      <ValentinesEditSection />

      {/* Explore the Wardrobe - Secondary categories */}
      <ClothingNavigationSection />

      {/* Newsletter CTA */}
      <NewsletterSection />

      <Footer />
    </div>
  );
};

export default Home;