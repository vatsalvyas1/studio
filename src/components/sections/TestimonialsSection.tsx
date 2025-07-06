"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    name: 'Ayush Singhal',
    title: 'Owner, Aggarwal Cycles',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: "3AM Devs transformed our local cycle shop into a digital storefront. Their design is clean, the site is incredibly fast, and our online inquiries have doubled. They understood our business needs perfectly.",
    hint: 'portrait man'
  },
  {
    name: 'Rajat Mangla',
    title: 'Owner, Mangla Hardwares',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: "Taking our decades-old hardware business online was a big step, but 3AM Devs made it seamless. They built us a robust e-commerce platform that's easy for our customers to use and for us to manage.",
    hint: 'portrait man business'
  },
  {
    name: 'Uday Sharma',
    title: 'YouTuber',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: "As a YouTuber, my personal brand is everything. The team created a stunning portfolio website that perfectly captures my style. It's the perfect hub for my community and has helped me land new sponsorship deals.",
    hint: 'portrait person content'
  },
  {
    name: 'Ritesh Jha',
    title: 'Software Developer',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: "Collaborating with 3AM Devs was a fantastic experience. Their code is clean, their development process is agile and transparent, and they're true experts in modern web technologies.",
    hint: 'portrait developer'
  },
];


const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
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
                  <div className="p-1 h-full">
                    <Card className="relative h-full overflow-hidden bg-card/80 border-border/50 transition-all duration-300 hover:shadow-xl hover:border-accent/50 hover:-translate-y-2 backdrop-blur-sm">
                      <Quote className="absolute top-4 right-4 h-16 w-16 text-primary/5 -rotate-12" />
                      <CardContent className="relative z-10 flex flex-col items-start justify-start p-6 text-left h-full">
                        <blockquote className="text-base text-foreground mb-4 flex-grow">"{item.testimonial}"</blockquote>
                        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50 w-full">
                           <Avatar className="w-10 h-10">
                              <AvatarImage src={item.avatar} alt={item.name} data-ai-hint={item.hint} />
                              <AvatarFallback>{item.name.slice(0,2)}</AvatarFallback>
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
