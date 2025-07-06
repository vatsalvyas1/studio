"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { TrendingUp, Code, Globe, BarChart, Sprout, Rocket, Network } from 'lucide-react';

type AnimatedStatProps = {
  to: number;
  label: string;
  suffix?: string;
  isFloat?: boolean;
};

const AnimatedStat = ({ to, label, suffix = "", isFloat = false }: AnimatedStatProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return isFloat ? latest.toFixed(1) : Math.round(latest).toLocaleString();
  });

  useEffect(() => {
    const animation = animate(count, to, { duration: 2.5, ease: "easeOut" });
    return animation.stop;
  }, [to, count]);

  return (
    <div className="px-4 py-8 md:py-0">
      <h3 className="font-headline text-3xl sm:text-4xl font-bold text-accent">
        <motion.span>{rounded}</motion.span>{suffix}
      </h3>
      <p className="mt-2 text-muted-foreground">{label}</p>
    </div>
  );
};


const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);
  const contentBlur = useTransform(scrollYProgress, [0.4, 0.7], ['blur(0px)', 'blur(8px)']);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (targetRef.current) {
      const { left, top, width, height } = targetRef.current.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      mouseX.set(x / width - 0.5);
      mouseY.set(y / height - 0.5);
    }
  };

  const shape1X = useTransform(mouseX, value => value * -40);
  const shape1Y = useTransform(mouseY, value => value * -20);
  const shape2X = useTransform(mouseX, value => value * 70);
  const shape2Y = useTransform(mouseY, value => value * 50);
  const shape3X = useTransform(mouseX, value => value * -25);
  const shape3Y = useTransform(mouseY, value => value * 60);
  const shape4X = useTransform(mouseX, value => value * -60);
  const shape4Y = useTransform(mouseY, value => value * 40);
  const shape5X = useTransform(mouseX, value => value * 50);
  const shape5Y = useTransform(mouseY, value => value * -70);
  const shape6X = useTransform(mouseX, value => value * 30);
  const shape6Y = useTransform(mouseY, value => value * -50);
  const shape7X = useTransform(mouseX, value => value * -50);
  const shape7Y = useTransform(mouseY, value => value * -30);

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
    <section 
      id="home" 
      ref={targetRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-background grid-background animate-grid-pan" />
        <div aria-hidden="true" className="absolute inset-0 z-[1]">
              <motion.div style={{ x: shape1X, y: shape1Y }} className="absolute top-[10%] left-[20%] w-16 h-16 text-primary/20">
                  <TrendingUp className="w-full h-full animate-blob animation-delay-2000" />
              </motion.div>
              <motion.div style={{ x: shape2X, y: shape2Y }} className="absolute bottom-[10%] right-[15%] w-20 h-20 text-accent/25">
                  <Code className="w-full h-full animate-blob2" />
              </motion.div>
              <motion.div style={{ x: shape3X, y: shape3Y }} className="absolute top-[25%] right-[25%] w-12 h-12 text-accent/20">
                  <Globe className="w-full h-full animate-blob3 animation-delay-4000" />
              </motion.div>
              <motion.div style={{ x: shape4X, y: shape4Y }} className="absolute bottom-[20%] left-[30%] w-14 h-14 text-primary/15">
                  <BarChart className="w-full h-full animate-blob" />
              </motion.div>
              <motion.div style={{ x: shape5X, y: shape5Y }} className="absolute top-[60%] right-[20%] w-16 h-16 text-accent/15">
                  <Sprout className="w-full h-full animate-blob2 animation-delay-3000" />
              </motion.div>
              <motion.div style={{ x: shape6X, y: shape6Y }} className="absolute top-[45%] left-[10%] w-12 h-12 text-primary/20">
                  <Rocket className="w-full h-full animate-blob3 animation-delay-1000" />
              </motion.div>
              <motion.div style={{ x: shape7X, y: shape7Y }} className="absolute bottom-[35%] right-[30%] w-14 h-14 text-accent/20">
                  <Network className="w-full h-full animate-blob animation-delay-5000" />
              </motion.div>
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity: contentOpacity, filter: contentBlur }}
          className="flex flex-col items-center mt-36"
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
            <Button size="lg" variant="gradient" asChild>
              <Link href="/#contact">Book Free Trial</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-20 md:mt-28 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-border">
              <AnimatedStat to={1357921} suffix="+" label="Businesses Went Online" />
              <AnimatedStat to={200000} suffix="+" label="Website Launches Daily" />
              <AnimatedStat to={40} suffix="%+" label="Revenue Growth" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
