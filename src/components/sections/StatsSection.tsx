// This is a new file
"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, count, to]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.div ref={ref} variants={itemVariants}>
      <h3 className="font-headline text-4xl md:text-5xl font-bold text-accent">
        <motion.span>{rounded}</motion.span>{suffix}
      </h3>
      <p className="mt-2 text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
          <AnimatedStat to={1.5} suffix="M+" isFloat={true} label="Businesses Online" />
          <AnimatedStat to={200} suffix="+" label="Happy Clients" />
          <AnimatedStat to={300} suffix="%+" label="Revenue Growth" />
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
