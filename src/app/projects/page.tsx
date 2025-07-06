
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft, Sparkles, Ghost, Heart, Star, Cat } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

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
  
  const targetRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (targetRef.current) {
      const { left, top, width, height } = targetRef.current.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      mouseX.set(x / width - 0.5);
      mouseY.set(y / height - 0.5);
    }
  };

  const shape1X = useTransform(mouseX, value => value * -40);
  const shape1Y = useTransform(mouseY, value => value * -20);
  const shape2X = useTransform(mouseX, value => value * 70);
  const shape2Y = useTransform(mouseY, value => value * 50);
  const shape3X = useTransform(mouseX, value => value * -25);
  const shape3Y = useTransform(mouseY, value => value * 60);
  const shape4X = useTransform(mouseX, value => value * -60);
  const shape4Y = useTransform(mouseY, value => value * 40);
  const shape5X = useTransform(mouseX, value => value * 50);
  const shape5Y = useTransform(mouseY, value => value * -70);


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
      <main 
        ref={targetRef} 
        onMouseMove={handleMouseMove}
        className="flex-1 pt-24 relative overflow-hidden"
      >
        <div 
          aria-hidden="true"
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-background grid-background animate-grid-pan" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 z-[1]">
              <motion.div style={{ x: shape1X, y: shape1Y }} className="absolute top-[10%] left-[15%] w-16 h-16 text-primary/30">
                  <Sparkles className="w-full h-full animate-blob animation-delay-2000" />
              </motion.div>
              <motion.div style={{ x: shape2X, y: shape2Y }} className="absolute bottom-[10%] right-[10%] w-20 h-20 text-accent/40">
                  <Ghost className="w-full h-full animate-blob2" />
              </motion.div>
              <motion.div style={{ x: shape3X, y: shape3Y }} className="absolute top-[20%] right-[20%] w-12 h-12 text-accent/30">
                  <Heart className="w-full h-full animate-blob3 animation-delay-4000" />
              </motion.div>
              <motion.div style={{ x: shape4X, y: shape4Y }} className="absolute bottom-[20%] left-[25%] w-14 h-14 text-primary/20">
                  <Star className="w-full h-full animate-blob" />
              </motion.div>
              <motion.div style={{ x: shape5X, y: shape5Y }} className="absolute top-[60%] right-[15%] w-16 h-16 text-accent/20">
                  <Cat className="w-full h-full animate-blob2 animation-delay-3000" />
              </motion.div>
          </div>
        </div>
        
        <div className="relative z-10">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
