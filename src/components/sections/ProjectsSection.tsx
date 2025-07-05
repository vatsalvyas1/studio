"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const projects = [
  {
    title: 'QuantumLeap',
    description: 'A cutting-edge SaaS platform for data analytics, featuring a dynamic dashboard and real-time reporting.',
    image: 'https://placehold.co/800x600.png',
    tags: ['Next.js', 'Tailwind', 'AI'],
    hint: 'dashboard analytics'
  },
  {
    title: 'NovaMart',
    description: 'An e-commerce storefront with a custom headless CMS, optimized for performance and conversion.',
    image: 'https://placehold.co/800x600.png',
    tags: ['React', 'Headless CMS'],
    hint: 'ecommerce shopping'
  },
  {
    title: 'ConnectSphere',
    description: 'A social networking app designed to connect professionals, with features like real-time chat and event management.',
    image: 'https://placehold.co/800x600.png',
    tags: ['Mobile App', 'Firebase'],
    hint: 'social media'
  },
  {
    title: 'ArtisanPortfolio',
    description: 'A visually-driven portfolio website for a renowned photographer, focusing on minimalism and powerful imagery.',
    image: 'https://placehold.co/800x600.png',
    tags: ['Web Design', 'Animation'],
    hint: 'portfolio gallery'
  },
];

const ProjectsSection = () => {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We've helped businesses of all sizes transform their digital presence. Here's a glimpse of what we can do.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title} 
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Link href="#">
                <Card className="group overflow-hidden rounded-xl border-border/50 hover:border-accent/50 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-xl hover:shadow-accent/10">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      data-ai-hint={project.hint}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex-grow">
                      <h3 className="font-headline text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto flex items-center text-accent font-semibold">
                      <span>View Case Study</span>
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
