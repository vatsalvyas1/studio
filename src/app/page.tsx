import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ClientsSection from '@/components/sections/AboutSection';
import FeaturesSection from '@/components/sections/ServicesSection';
import HowItWorksSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ClientsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
