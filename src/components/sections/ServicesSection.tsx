"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Paintbrush, Code, Database, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: 'Web Design',
    description: 'Creating beautiful, intuitive, and user-friendly interfaces that captivate your audience.',
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Development',
    description: 'Building robust and scalable websites with the latest technologies for optimal performance.',
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: 'Hosting Solutions',
    description: 'Reliable, secure, and high-speed hosting to ensure your website is always available.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Maintenance',
    description: 'Ongoing support and updates to keep your website secure and running smoothly.',
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We offer a complete suite of services to bring your digital vision to life.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="text-center h-full transition-shadow duration-300 hover:shadow-xl hover:bg-accent/5">
                <CardHeader>
                  <motion.div 
                    className="mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
