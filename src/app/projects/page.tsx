
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const allProjects = [
  {
    title: 'QuantumLeap',
    description: 'A cutting-edge SaaS platform for data analytics, featuring a dynamic dashboard and real-time reporting.',
    image: 'https://placehold.co/800x600.png',
    tags: ['Next.js', 'Tailwind', 'AI'],
    hint: 'saas dashboard analytics'
  },
  {
    title: 'NovaMart',
    description: 'An e-commerce storefront with a custom headless CMS, optimized for performance and conversion.',
    image: 'https://placehold.co/800x1000.png',
    tags: ['React', 'Headless CMS'],
    hint: 'fashion ecommerce website'
  },
  {
    title: 'ConnectSphere',
    description: 'A social networking app designed to connect professionals, with features like real-time chat and event management.',
    image: 'https://placehold.co/800x800.png',
    tags: ['Mobile App', 'Firebase'],
    hint: 'mobile social network'
  },
  {
    title: 'ArtisanPortfolio',
    description: 'A visually-driven portfolio website for a renowned photographer, focusing on minimalism and powerful imagery.',
    image: 'https://placehold.co/800x1200.png',
    tags: ['Web Design', 'Animation'],
    hint: 'minimalist photography portfolio'
  },
  {
    title: 'HealthTrack',
    description: 'A mobile app for tracking fitness and health metrics, with personalized coaching.',
    image: 'https://placehold.co/800x700.png',
    tags: ['React Native', 'AI', 'Health'],
    hint: 'fitness app dashboard'
  },
  {
    title: 'EcoFriendly Eats',
    description: 'A platform for discovering and ordering from sustainable restaurants.',
    image: 'https://placehold.co/800x600.png',
    tags: ['Web App', 'Sustainability'],
    hint: 'food delivery app'
  },
  {
    title: 'StellarDocs',
    description: 'A collaborative documentation platform for technical teams with version control.',
    image: 'https://placehold.co/800x900.png',
    tags: ['TypeScript', 'Web Sockets'],
    hint: 'documentation website'
  },
  {
    title: 'Momentum',
    description: 'A sleek and simple habit-tracking application to help users build better routines.',
    image: 'https://placehold.co/800x800.png',
    tags: ['Productivity', 'Mobile App'],
    hint: 'habit tracker app'
  },
  {
    title: 'Wanderlust',
    description: 'A travel planning app that uses AI to suggest itineraries based on user preferences.',
    image: 'https://placehold.co/800x1100.png',
    tags: ['AI', 'Travel', 'Web App'],
    hint: 'travel planning interface'
  },
  {
    title: 'CodeFlow',
    description: 'An online IDE for front-end developers with real-time collaboration features.',
    image: 'https://placehold.co/800x600.png',
    tags: ['Developer Tools', 'SaaS'],
    hint: 'code editor interface'
  },
  {
    title: 'GourmetGo',
    description: 'A premium meal-kit delivery service website with recipe tutorials.',
    image: 'https://placehold.co/800x700.png',
    tags: ['E-commerce', 'Food'],
    hint: 'meal kit website'
  },
  {
    title: 'Zenith CRM',
    description: 'A powerful CRM for sales teams to manage leads and customer relationships.',
    image: 'https://placehold.co/800x900.png',
    tags: ['SaaS', 'Business'],
    hint: 'crm dashboard'
  }
];

const ProjectCard = ({ project }: { project: typeof allProjects[0] }) => {
    return (
        <div className="mb-8 break-inside-avoid">
            <Link href="#">
                <Card className="group relative overflow-hidden rounded-xl border-border/50 transition-shadow duration-300 shadow-sm hover:shadow-xl hover:shadow-accent/10">
                <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.hint}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-headline text-2xl font-bold text-white">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-0 backdrop-blur-sm">{tag}</Badge>
                    ))}
                    </div>
                    <div className="mt-4 transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                    <p className="text-white/80 mb-4 text-sm">{project.description}</p>
                    <div className="flex items-center text-accent font-semibold text-sm">
                        <span>View Work</span>
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                    </div>
                </div>
                </Card>
            </Link>
        </div>
    );
};

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const currentProjects = allProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section id="projects" className="py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-16"
                >
                    <h1 className="font-headline text-4xl md:text-6xl font-bold">Our Work</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        A selection of projects that we're proud of.
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                      key={currentPage}
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0 }}
                      className="columns-1 md:columns-2 lg:columns-3 gap-8"
                  >
                      {currentProjects.map((project) => (
                          <motion.div variants={itemVariants} key={project.title}>
                              <ProjectCard project={project} />
                          </motion.div>
                      ))}
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex justify-center items-center gap-4 mt-16"
                >
                    <Button
                        variant="outline"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                    </Button>
                    <span className="text-sm text-muted-foreground">
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button
                        variant="outline"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center mt-12"
                >
                    <Button asChild variant="outline">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
