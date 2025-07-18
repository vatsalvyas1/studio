
"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

const projects = [
  {
    title: 'VolunTier',
    description: 'volunTier is a platform dedicated to connecting volunteers with NGOs.',
    image: 'https://res.cloudinary.com/dhrhfuzb0/image/upload/v1751865257/voluntier_qpwi0g.jpg',
    tags: ['React', 'Firebase Auth', 'Firestore DB'],
    hint: 'ngo volunteer platform'
  },
  {
    title: 'NexFix',
    description: 'A one stop solution for hardware, paints, and tools online.',
    image: 'https://res.cloudinary.com/dhrhfuzb0/image/upload/v1751864524/nexfix_jdvwh3.png',
    tags: ['MERN Stack', 'Cashfree API'],
    hint: 'hardware ecommerce website'
  },
  {
    title: 'HackiN',
    description: 'A one-stop solution for all the hackathons aiming to connect hackers worldwide.',
    image: 'https://res.cloudinary.com/dhrhfuzb0/image/upload/v1751794207/hackIn_mskonw.png',
    tags: ['MERN Stack', 'Tailwind', 'Sockets'],
    hint: 'hackathon website'
  },
  {
    title: 'SprintSync',
    description: 'a platform to assist software developers to boost productivity.',
    image: 'https://res.cloudinary.com/dhrhfuzb0/image/upload/v1751866610/sprints_c2bvb5.png',
    tags: ['MERN Stack', 'Productivity Tools'],
    hint: 'productivity platform'
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className={cn(index === 0 && 'md:col-span-2 lg:col-span-2')}
    >
      <Link href="#">
        <Card className="group relative overflow-hidden rounded-xl border-border/50 transition-shadow duration-300 h-full shadow-sm hover:shadow-xl hover:shadow-accent/10">
          <Image
            src={project.image}
            alt={project.title}
            data-ai-hint={project.hint}
            width={index === 0 ? 1200 : 800}
            height={index === 0 ? 800 : 600}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
    </motion.div>
  );
};

const ViewMoreCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
      <motion.div
          ref={ref}
          style={{ y, opacity, scale }}
          className="h-full"
      >
          <Link href="/projects" className="h-full flex">
              <Card className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border-border/50 transition-all duration-300 h-full w-full shadow-sm hover:shadow-xl hover:shadow-accent/10 min-h-[300px] bg-secondary/40 hover:border-accent/50">
                  <div className="text-center p-6">
                      <h3 className="font-headline text-2xl font-bold">View More Projects</h3>
                      <p className="text-muted-foreground mt-2">Explore our full portfolio</p>
                      <div className="mt-4 flex items-center justify-center text-accent font-semibold text-sm">
                          <span>Explore All</span>
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                  </div>
              </Card>
          </Link>
      </motion.div>
  )
}


const ProjectsSection = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      <div aria-hidden="true" className="absolute top-1/4 left-10 w-8 h-8 bg-accent/20 rounded-full opacity-50 animate-blob -z-10" />
      <div aria-hidden="true" className="absolute bottom-1/4 right-10 w-12 h-12 bg-primary/10 rounded-full opacity-50 animate-blob2 animation-delay-4000 -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We've helped businesses of all sizes transform their digital presence. Here's a glimpse of what we can do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
          <ViewMoreCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

    