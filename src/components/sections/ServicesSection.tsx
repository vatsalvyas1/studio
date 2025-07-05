"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Search, Zap, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    title: 'Capture everything, effortlessly.',
    description: 'Transcribe voice notes, save web pages, and write down your ideas. All in one place.',
  },
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: 'Find anything, instantly.',
    description: 'Our AI-powered search understands natural language. Find what you need without remembering how you filed it.',
  },
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: 'Automate your workflows.',
    description: "Let AI summarize, create action items, and connect related thoughts automatically.",
  },
  {
    icon: <Network className="h-8 w-8 text-accent" />,
    title: 'Structure thoughts your way.',
    description: 'Use tags, nested notes, and backlinks to create a knowledge base that works for you.',
  },
];

const FeaturesSection = () => {
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
    <section id="features" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold">A second brain, built for the new wave of AI.</h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              OpenNote is more than just a notebook. It's an intelligent partner that helps you think better.
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
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="text-left h-full bg-card/50 border-border/50 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
                <CardHeader>
                  <div 
                    className="mb-4"
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
