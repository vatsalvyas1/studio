"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jane Doe',
    title: 'CEO, TechCorp',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: 'DevRidge delivered a stunning website that exceeded our expectations. Their attention to detail and commitment to quality is unparalleled. We saw a 50% increase in user engagement after the launch.',
  },
  {
    name: 'John Smith',
    title: 'Founder, Innovate Startups',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: 'The team at DevRidge is incredibly talented and professional. They transformed our vision into a digital masterpiece. Highly recommended for anyone looking for top-tier web development.',
  },
  {
    name: 'Emily White',
    title: 'Marketing Director, Creative Co.',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: 'Working with DevRidge was a breeze. They were communicative, responsive, and delivered on time and on budget. Our new site is fast, beautiful, and drives conversions.',
  },
];

const TestimonialsSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We are proud to have earned the trust of our amazing clients.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-0 shadow-none">
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                        <Avatar className="w-20 h-20 mb-4">
                          <AvatarImage src={item.avatar} alt={item.name} />
                          <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <blockquote className="text-lg italic text-foreground mb-4">"{item.testimonial}"</blockquote>
                        <p className="font-bold font-headline">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
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
