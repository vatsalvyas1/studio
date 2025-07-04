import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-accent/10 opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in-up">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
            We Build Premium <br />
            <span className="text-primary">Digital Experiences</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            DevRidge is a creative agency that crafts stunning, high-performance websites to elevate your brand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#portfolio">Our Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
