"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="home" ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background grid-background" />
          <div aria-hidden="true" className="absolute inset-0 z-[1] flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-20 bg-accent/20 rounded-full blur-3xl opacity-40 animate-blob" />
              <div className="absolute top-10 right-10 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl opacity-40 animate-blob2 animation-delay-2000" />
              <div className="absolute bottom-10 left-10 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl opacity-40 animate-blob3 animation-delay-4000" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-40 animate-blob4" />
            </div>
          </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
      
      <motion.div style={{ y: contentY }} className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
          >
            Digital Experiences
            <br />
            That Drive <span className="text-accent">Growth</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
          >
            We build beautiful, high-performance websites and applications for businesses of all sizes.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20">
              <Link href="#projects">View Our Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
