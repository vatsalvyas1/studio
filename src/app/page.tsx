import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ClientsSection from '@/components/sections/ClientsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/layout/Footer';
import { AnimatedSeparator } from '@/components/animated-separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ClientsSection />
        <ServicesSection />
        <AnimatedSeparator />
        <ProjectsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
