"use client";

import { motion } from 'framer-motion';

const clients = ["Stripe", "Framer", "Vercel", "Linear", "Raycast", "Notion"];

const ClientsSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="clients" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-center font-headline text-lg text-muted-foreground">
            Trusted by innovators at the world's best companies
          </h2>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
            {clients.map((client) => (
              <span key={client} className="font-headline text-xl text-muted-foreground/80 font-medium">
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
