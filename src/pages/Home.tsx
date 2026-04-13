import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlideshow from "@/components/HeroSlideshow";
import CategoryGrid from "@/components/CategoryGrid";
import SpringPromoSection from "@/components/SpringPromoSection";
import SheCollectionCarousel from "@/components/SheCollectionCarousel";
import BestSellersBanner from "@/components/BestSellersBanner";
import InstagramGallery from "@/components/InstagramGallery";
import TrustBadges from "@/components/TrustBadges";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 1. HERO - Slideshow with Spring Collection + New In */}
      <HeroSlideshow />

      {/* 2. CATEGORY ACCESS - Occasion-based categories */}
      <CategoryGrid />

      {/* 3. SEASONAL PROMO - Spring 2026 Exclusive */}
      <SpringPromoSection />

      {/* 4. PRODUCT SHOWCASE - She Collection */}
      <SheCollectionCarousel />

      {/* 5. SOCIAL PROOF - Best Sellers Banner */}
      <BestSellersBanner />

      {/* 6. SOCIAL PROOF - Instagram UGC */}
      <InstagramGallery />

      {/* 7. TRUST - Build credibility */}
      <TrustBadges />

      <Footer />
    </div>
  );
};

export default Home;
