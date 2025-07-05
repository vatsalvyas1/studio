// This is a new file
"use client"
import { motion } from 'framer-motion';

export const AnimatedSeparator = () => (
  <div className="flex justify-center my-16 lg:my-24">
    <motion.div
      className="h-1 bg-accent rounded-full"
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "6rem", opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
);
