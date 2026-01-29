import { forwardRef } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductSpotlight from "@/components/ProductSpotlight";
import ReviewsSlider from "@/components/ReviewsSlider";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

const Index = forwardRef<HTMLElement>((_, ref) => {
  return (
    <main ref={ref} className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProductSpotlight />
      <ReviewsSlider />
      <TrustBadges />
      <Footer />
    </main>
  );
});

Index.displayName = "Index";

export default Index;
