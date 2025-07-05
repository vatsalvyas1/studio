"use client";

import { motion } from 'framer-motion';
import { InfiniteLogoScroll } from '@/components/infinite-logo-scroll';

const ClientsSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="clients" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-center font-headline text-lg font-semibold text-muted-foreground">
            Powering the world's best companies
          </h2>
          <div className="mt-12">
            <InfiniteLogoScroll />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
