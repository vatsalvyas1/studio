"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const CubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 8L12 4L20 8L12 12L4 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 8V16L12 20L20 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ConcentricCirclesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="3" />
    </svg>
);
  
const TriangleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 3L2 21H22L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M15.5834 8.41663L18.4118 5.58819" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.25 12.75L12.75 11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.41663 15.5834L5.58819 18.4118" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.0001 2.08337C12.0001 2.08337 6.25008 6.25004 2.08341 12.0001C-2.08325 17.7501 6.25008 22.0834 12.0001 17.9167C17.7501 13.75 21.9167 7.91671 12.0001 2.08337Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const HexagonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M21 8.5V15.5L12 20.5L3 15.5V8.5L12 3.5L21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

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
    <div>
      <h3 className="font-headline text-3xl md:text-4xl font-bold text-accent">
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

  const shape1X = useTransform(mouseX, value => value * -50);
  const shape1Y = useTransform(mouseY, value => value * -30);
  const shape2X = useTransform(mouseX, value => value * 80);
  const shape2Y = useTransform(mouseY, value => value * 60);
  const shape3X = useTransform(mouseX, value => value * -30);
  const shape3Y = useTransform(mouseY, value => value * 70);
  const shape4X = useTransform(mouseX, value => value * 40);
  const shape4Y = useTransform(mouseY, value => value * -50);
  const shape5X = useTransform(mouseX, value => value * -70);
  const shape5Y = useTransform(mouseY, value => value * 20);

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
            <motion.div style={{ x: shape1X, y: shape1Y }} className="absolute top-[20%] left-[15%] w-20 h-20 text-accent/50">
                <CubeIcon className="w-full h-full animate-blob" />
            </motion.div>
            <motion.div style={{ x: shape2X, y: shape2Y }} className="absolute bottom-[25%] right-[10%] w-24 h-24 text-primary/30">
                <ConcentricCirclesIcon className="w-full h-full animate-blob2 animation-delay-2000" />
            </motion.div>
            <motion.div style={{ x: shape3X, y: shape3Y }} className="absolute bottom-[50%] right-[45%] w-16 h-16 text-accent/40">
                <TriangleIcon className="w-full h-full animate-blob3 animation-delay-4000" />
            </motion.div>
            <motion.div style={{ x: shape4X, y: shape4Y }} className="absolute bottom-[15%] left-[20%] w-20 h-20 text-accent/40 transform -rotate-45">
                <RocketIcon className="w-full h-full animate-blob animation-delay-2000" />
            </motion.div>
            <motion.div style={{ x: shape5X, y: shape5Y }} className="absolute top-[30%] right-[25%] w-12 h-12 text-accent/30">
                <HexagonIcon className="w-full h-full animate-blob2 animation-delay-4000 rotate-45" />
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
          className="flex flex-col items-center mt-24"
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

          <motion.div
            variants={itemVariants}
            className="mt-28 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
              <AnimatedStat to={1357921} suffix="+" label="Businesses Online" />
              <AnimatedStat to={234} suffix="+" label="Happy Clients" />
              <AnimatedStat to={280} suffix="%+" label="Revenue Growth" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
