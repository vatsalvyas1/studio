"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold">See the magic in action</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Watch a quick overview of how OpenNote transforms your notes into structured knowledge.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="overflow-hidden shadow-2xl shadow-accent/10 rounded-xl border-border/50 group cursor-pointer">
            <div className="relative">
              <Image
                src="https://placehold.co/1200x675.png"
                alt="OpenNote application interface"
                data-ai-hint="application user interface"
                width={1200}
                height={675}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <PlayCircle className="h-20 w-20 text-white/80 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
