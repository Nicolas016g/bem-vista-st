import { BackToTop } from "./extras/BackToTop";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { AboutSection } from "./sections/AboutSection";
import { HeroSection } from "./sections/HeroSection";
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
        <AboutSection />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
