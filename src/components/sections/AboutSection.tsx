"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Code, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">About DevRidge</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We are a team of passionate developers and designers dedicated to building exceptional web experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-headline text-2xl font-semibold">Why Choose Us?</h3>
            <p className="text-muted-foreground">
              At DevRidge, we combine cutting-edge technology with creative design to deliver solutions that are not only visually stunning but also robust, scalable, and reliable. Our client-centric approach ensures we understand your vision and translate it into a digital reality that drives results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="text-center flex flex-col items-center">
                <Award className="h-10 w-10 text-primary mb-2" />
                <p className="font-semibold">Quality</p>
                <p className="text-xs text-muted-foreground">Pixel-perfect designs</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <Code className="mx-auto h-10 w-10 text-primary mb-2" />
                <p className="font-semibold">Technology</p>
                <p className="text-xs text-muted-foreground">Modern tech stack</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <Users className="mx-auto h-10 w-10 text-primary mb-2" />
                <p className="font-semibold">Support</p>
                <p className="text-xs text-muted-foreground">Reliable partnership</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden shadow-xl rounded-lg">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Team collaboration"
                  data-ai-hint="team collaboration office"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
