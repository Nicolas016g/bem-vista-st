import { BackToTop } from "./extras/BackToTop";
import { StickyCTA } from "./extras/StickyCTA";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { AboutSection } from "./sections/AboutSection";
import { CTABanner } from "./sections/CTABanner";
import { HeroSection } from "./sections/HeroSection";
import { GallerySection } from "./sections/GallerySection";
import { ProductsSection } from "./sections/ProductsSection";
import { WhySection } from "./sections/WhySection";
import { WhatsAppButton } from "./ui/WhatsAppButton";

export function SiteShell() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <ProductsSection />
        <GallerySection />
        <AboutSection />
        <CTABanner />
      </main>
      <Footer />
      <StickyCTA />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
