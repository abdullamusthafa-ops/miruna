import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlideshow from "@/components/HeroSlideshow";
import CategoryGrid from "@/components/CategoryGrid";
import DualCollectionGrid from "@/components/DualCollectionGrid";
import SpringPromoSection from "@/components/SpringPromoSection";
import SheCollectionCarousel from "@/components/SheCollectionCarousel";
import EditorialDropsSection from "@/components/EditorialDropsSection";

import InstagramGallery from "@/components/InstagramGallery";
import TrustBadges from "@/components/TrustBadges";
import NewsletterSection from "@/components/NewsletterSection";
import MobileBottomBar from "@/components/MobileBottomBar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlideshow />
      <CategoryGrid />
      <DualCollectionGrid />
      <SpringPromoSection />
      <SheCollectionCarousel />
      
      <InstagramGallery />
      <TrustBadges />
      <NewsletterSection />
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Home;
