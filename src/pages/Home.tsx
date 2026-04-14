import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlideshow from "@/components/HeroSlideshow";
import StyleEditsGrid from "@/components/StyleEditsGrid";
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
      <StyleEditsGrid />
      <SpringPromoSection />
      <SheCollectionCarousel />
      <EditorialDropsSection />
      <InstagramGallery />
      <TrustBadges />
      <NewsletterSection />
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Home;
