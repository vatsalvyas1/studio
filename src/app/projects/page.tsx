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
    title: 'NexFix',
    description: 'a one stop solution for hardware, paints, tool online',
    image: 'https://imgs.search.brave.com/HXLrh9uZBBuKHTw1agKCx4i1JvQnBKShZxhmULZf5Bc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/MS8yOC8xMi8xNy9k/ZWxpdmVyeS02OTc0/NTA2XzY0MC5qcGc',
    tags: ['Next.js', 'Tailwind', 'AI'],
    hint: 'delivery person'
  },
  {
    title: 'Darpan',
    description: 'online fund rasing platform for people in need',
    image: 'https://img.freepik.com/premium-photo/helping-poor-old-women-children-from-charity-fun-flood-affected-starving-people_612827-93056.jpg',
    tags: ['React', 'Headless CMS'],
    hint: 'charity donation'
  },
  {
    title: 'HackIn',
    description: 'a web hackathon hosting platform for organisers',
    image: 'https://res.cloudinary.com/dhrhfuzb0/image/upload/v1751794207/hackIn_mskonw.png',
    tags: ['Mobile App', 'Firebase'],
    hint: 'hackathon website'
  },
  {
    title: 'Socio',
    description: 'built for colleges to connect to college societies and alumni',
    image: 'https://imgs.search.brave.com/0blqmLNm0ZilG0DdcBHBhCwaCohztVvi_U35vi6uOeA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzUzLzMwLzAx/LzM2MF9GXzEwNTMz/MDAxNTJfVTc4ZVNG/MmpWYWl1Mm42bUpm/b2V3blpKZGJTcHdt/SVMuanBn',
    tags: ['Web Design', 'Animation'],
    hint: 'college students network'
  },
  {
    title: 'SyncSprint',
    description: 'a platform to assist software developers to boos productivity',
    image: 'https://imgs.search.brave.com/xh9XpijsLZj9zC3_2uXdKiJ_YHmXhBGqO8I1uB1CSu8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NjQ0YzFiOThjYWU0/ZWEyNzUwMmFiNTcv/Njg1MDU2OTE2ZTA1/YzI4ZTY4YTE1NGM4/X0NhcGFjaXR5JTIw/T24tRGVtYW5kLnBu/Zw',
    tags: ['React Native', 'AI', 'Health'],
    hint: 'capacity on-demand'
  },
  {
    title: 'SneakersDekho',
    description: 'a display website for a shoe store',
    image: 'https://imgs.search.brave.com/mx2glfQG96nj4MRekHlnCBmy8DXxyji0-y7MUzFJqZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXltYWxsYm94LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8xMi8xMC1iZXN0/LXVzYS13ZWJzaXRl/cy10by1idXktc25l/YWtlcnMtb25saW5l/LTIwMjQtbXltYWxs/Ym94LmpwZw',
    tags: ['Web App', 'Sustainability'],
    hint: 'shoe website sneakers'
  },
  {
    title: 'StellarDocs',
    description: 'A collaborative documentation platform for technical teams with version control.',
    image: 'https://imgs.search.brave.com/VwPMZCczX_2obfNlKS6wD9EPewR84F2PZZ2gFaHqU4k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ4NDc0/MDkuanBn',
    tags: ['TypeScript', 'Web Sockets'],
    hint: 'documentation website'
  },
  {
    title: 'Momentum',
    description: 'A sleek and simple habit-tracking application to help users build better routines.',
    image: 'https://imgs.search.brave.com/mewiIzkTpW9V5Qpi_slglnjEhQ32sUx_6paTO0Ssjhk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/ODU2OTU4OS9maWxl/L29yaWdpbmFsLThi/NzBlY2NlYmUwNzBm/MGUwOWEyODU4ZTA1/MDNkMWFkLmpwZz9m/b3JtYXQ9d2VicCZy/ZXNpemU9NDAweDMw/MCZ2ZXJ0aWNhbD1j/ZW50ZXI',
    tags: ['Productivity', 'Mobile App'],
    hint: 'habit tracker app'
  },
  {
    title: 'Wanderlust',
    description: 'A travel planning app that uses AI to suggest itineraries based on user preferences.',
    image: 'https://imgs.search.brave.com/pWQACQMv37Nba3qb5-R8yR2vs2C15h9F-Vzura-yZIY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/NDMxNDI0MDQvZmls/ZS9vcmlnaW5hbC01/ZTQ5ZTZlNGVkNDRi/YTM1ZmIyY2ZlNzU4/NmNiNjE5OC5qcGc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy',
    tags: ['AI', 'Travel', 'Web App'],
    hint: 'travel planning interface'
  },
  {
    title: 'CodeFlow',
    description: 'An online IDE for front-end developers with real-time collaboration features.',
    image: 'https://imgs.search.brave.com/Xw_Bi_FbMyaWPo1mYfEbKkpc3_2aN0Nk9BqiuCTCekQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jbXMu/amliZWNkbi5jb20v/cHJvZC9naXRodWJp/bmMtY2FyZWVycy9h/c3NldHMvTFAtU0tV/LUQ0LTEtSU1HLWVu/LXVzLTE2OTk0MjUx/NDA5OTAuanBn',
    tags: ['Developer Tools', 'SaaS'],
    hint: 'code editor interface'
  },
  {
    title: 'GourmetGo',
    description: 'A premium meal-kit delivery service website with recipe tutorials.',
    image: 'https://imgs.search.brave.com/mssxScYuV9k5T_BcOI9Ht2um8sJ7yIh4Tsl624rsFOM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZmhvbWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzEwL1RoZS02/LUJlc3QtTWVhbC1E/ZWxpdmVyeS1TZXJ2/aWNlcy1mb3ItRmFt/aWxpZXNfVE9IX1BU/VF9NRUFMX0tJVFNf/MTAwMjI0X0VGX0ds/dXRlbl9GcmVlLmpw/Zw',
    tags: ['E-commerce', 'Food'],
    hint: 'meal kit website'
  },
  {
    title: 'Zenith CRM',
    description: 'A powerful CRM for sales teams to manage leads and customer relationships.',
    image: 'https://imgs.search.brave.com/mSugOGT2vezI3NRRfsNiTo-bZX_HtPwNBayVBgZNxG0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/b25lcGFnZWNybS5j/b20vd3AtY29udGVu/dC91cGxvYWRzL01v/YmlsZTZfaW1hZ2Uu/cG5n',
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
