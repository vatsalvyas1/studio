"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion, useScroll, useTransform } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'CEO, QuantumLeap',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: '3AM Devs delivered a product that exceeded our expectations. Their attention to detail and commitment to quality is unparalleled. Our new platform is fast, beautiful, and loved by our users.',
    hint: 'portrait woman'
  },
  {
    name: 'Mikael D.',
    title: 'Founder, NovaMart',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: "The team at 3AM Devs is phenomenal. They understood our vision perfectly and executed it flawlessly. Our online sales have increased by 40% since the new site launch.",
    hint: 'portrait man'
  },
  {
    name: 'Alex C.',
    title: 'CTO, ConnectSphere',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: "Working with 3AM Devs was a breeze. Their process is transparent, and their communication is top-notch. They are true partners, not just developers.",
    hint: 'portrait person'
  },
];

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const carouselY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const carouselOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
       <div aria-hidden="true" className="absolute -top-10 -left-10 w-24 h-24 bg-primary/10 rounded-full opacity-50 animate-blob3 -z-10" />
       <div aria-hidden="true" className="absolute -bottom-20 -right-10 w-32 h-32 bg-accent/10 rounded-full opacity-50 animate-blob4 animation-delay-2000 -z-10" />
       <div aria-hidden="true" className="absolute top-1/2 left-1/4 w-20 h-20 bg-accent/5 rounded-full opacity-50 animate-blob animation-delay-4000 -z-10" />
       <motion.div 
        className="absolute inset-0 bg-secondary/40 -z-10"
        style={{ y: backgroundY }}
      />
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
          style={{ y: carouselY, opacity: carouselOpacity }}
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
                    <Card className="h-full bg-card/50 border-border/50 transition-all duration-300 hover:shadow-xl hover:border-accent/50 hover:-translate-y-2">
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
