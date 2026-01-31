import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductSpotlight from "@/components/ProductSpotlight";
import FAQSection from "@/components/FAQSection";
import ReviewsSlider from "@/components/ReviewsSlider";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProductSpotlight />
      <FAQSection />
      <ReviewsSlider />
      <TrustBadges />
      <Footer />
    </main>
  );
};

export default Index;
