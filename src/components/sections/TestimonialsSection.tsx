"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'CEO, QuantumLeap',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: 'DevRidge delivered a product that exceeded our expectations. Their attention to detail and commitment to quality is unparalleled. Our new platform is fast, beautiful, and loved by our users.',
    hint: 'portrait woman'
  },
  {
    name: 'Mikael D.',
    title: 'Founder, NovaMart',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: "The team at DevRidge is phenomenal. They understood our vision perfectly and executed it flawlessly. Our online sales have increased by 40% since the new site launch.",
    hint: 'portrait man'
  },
  {
    name: 'Alex C.',
    title: 'CTO, ConnectSphere',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: "Working with DevRidge was a breeze. Their process is transparent, and their communication is top-notch. They are true partners, not just developers.",
    hint: 'portrait person'
  },
];

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We're proud to have built strong relationships with our clients.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full bg-card/50 border-border/50">
                      <CardContent className="flex flex-col items-start justify-start p-6 text-left h-full">
                        <blockquote className="text-base text-foreground mb-4 flex-grow">"{item.testimonial}"</blockquote>
                        <div className="flex items-center gap-4 mt-auto pt-4">
                           <Avatar className="w-10 h-10">
                              <AvatarImage src={item.avatar} alt={item.name} data-ai-hint={item.hint} />
                              <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                           </Avatar>
                           <div>
                              <p className="font-bold font-headline">{item.name}</p>
                              <p className="text-sm text-muted-foreground">{item.title}</p>
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
