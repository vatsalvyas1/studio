"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import { AnimatedElement } from '@/components/animated-element';
import { Plus } from 'lucide-react';

const portfolioItems = [
  { src: 'https://placehold.co/600x400.png', alt: 'Project One', hint: 'web design app' },
  { src: 'https://placehold.co/400x600.png', alt: 'Project Two', hint: 'mobile dashboard' },
  { src: 'https://placehold.co/600x400.png', alt: 'Project Three', hint: 'ecommerce website' },
  { src: 'https://placehold.co/600x400.png', alt: 'Project Four', hint: 'corporate branding' },
  { src: 'https://placehold.co/400x600.png', alt: 'Project Five', hint: 'saas interface' },
  { src: 'https://placehold.co/600x400.png', alt: 'Project Six', hint: 'portfolio landing' },
];

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Work</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A glimpse into the successful projects we've delivered for our clients.
            </p>
          </div>
        </AnimatedElement>

        <Dialog onOpenChange={(open) => !open && setSelectedImage(null)}>
          <div className="columns-2 md:columns-3 gap-4">
            {portfolioItems.map((item, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <DialogTrigger asChild onClick={() => setSelectedImage(item.src)}>
                  <div className="mb-4 break-inside-avoid group relative cursor-pointer">
                    <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-lg">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        data-ai-hint={item.hint}
                        width={600}
                        height={item.src.includes('400x600') ? 600 : 400}
                        className="w-full h-auto object-cover"
                      />
                    </Card>
                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <Plus className="h-12 w-12 text-white" />
                     </div>
                  </div>
                </DialogTrigger>
              </AnimatedElement>
            ))}
          </div>

          <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected project"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioSection;
