import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductSpotlight from "@/components/ProductSpotlight";
import FAQSection from "@/components/FAQSection";
import ReviewsSlider from "@/components/ReviewsSlider";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductSpotlight />
      <ReviewsSlider />
      <FAQSection />
      <TrustBadges />
      <Footer />
    </main>
  );
};

export default Index;
