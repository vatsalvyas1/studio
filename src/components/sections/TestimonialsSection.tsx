"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'Product Manager, Stripe',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: 'OpenNote has become my second brain. The AI summarization is a game-changer for my meeting notes, and I can find anything in seconds.',
  },
  {
    name: 'Mikael D.',
    title: 'Designer, Framer',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: "I'm a visual thinker, and OpenNote lets me organize my thoughts with notes, images, and links seamlessly. It's beautifully designed and incredibly powerful.",
  },
  {
    name: 'Alex C.',
    title: 'PhD Student, MIT',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: "As a researcher, I'm drowning in papers and notes. OpenNote's AI helps me connect ideas I would have otherwise missed. It's indispensable.",
  },
];

const TestimonialsSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-bold">Loved by the world's most productive people</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our users have to say.
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
                              <AvatarImage src={item.avatar} alt={item.name} />
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
