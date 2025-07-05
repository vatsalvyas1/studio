"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, PenTool, Server, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'Web Development',
    description: 'We build fast, scalable, and secure web applications tailored to your specific needs using modern technologies.',
  },
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: 'UI/UX Design',
    description: 'Our design team creates intuitive and beautiful interfaces that provide an exceptional user experience.',
  },
  {
    icon: <Server className="h-8 w-8 text-accent" />,
    title: 'Hosting & Deployment',
    description: "We handle the complexities of hosting and deployment, ensuring your site is always available and performant.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Maintenance & Support',
    description: 'Our ongoing support and maintenance plans keep your website secure, updated, and running smoothly.',
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardMotionVariants = {
    rest: { y: 0 },
    hover: { y: -8, transition: { duration: 0.2, ease: "easeOut" } }
  };

  return (
    <section id="services" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
       <motion.div 
        className="absolute inset-0 bg-secondary/40 -z-10"
        style={{ y: backgroundY }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold">Our Services</h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              From initial concept to final launch and beyond, we offer a complete suite of services to bring your digital vision to life.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.title} 
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="h-full"
            >
              <motion.div variants={cardMotionVariants} className="h-full">
                <Card className="relative overflow-hidden text-left h-full bg-card/50 border-border/50 transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
                  <div className="relative z-10 h-full flex flex-col">
                    <CardHeader>
                      <div className="mb-4">
                        {service.icon}
                      </div>
                      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
