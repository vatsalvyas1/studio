import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
    image: 'https://placehold.co/800x600.png',
    tags: ['React', 'Headless CMS'],
    hint: 'fashion ecommerce website'
  },
  {
    title: 'ConnectSphere',
    description: 'A social networking app designed to connect professionals, with features like real-time chat and event management.',
    image: 'https://placehold.co/800x600.png',
    tags: ['Mobile App', 'Firebase'],
    hint: 'mobile social network'
  },
  {
    title: 'ArtisanPortfolio',
    description: 'A visually-driven portfolio website for a renowned photographer, focusing on minimalism and powerful imagery.',
    image: 'https://placehold.co/800x600.png',
    tags: ['Web Design', 'Animation'],
    hint: 'minimalist photography portfolio'
  },
  {
    title: 'HealthTrack',
    description: 'A mobile app for tracking fitness and health metrics, with personalized coaching.',
    image: 'https://placehold.co/800x600.png',
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
];

const ProjectCard = ({ project }: { project: typeof allProjects[0] }) => {
    return (
        <Link href="#">
            <Card className="group relative overflow-hidden rounded-xl border-border/50 transition-shadow duration-300 h-full shadow-sm hover:shadow-xl hover:shadow-accent/10">
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
    );
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section id="projects" className="py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold">Our Work</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        A selection of projects that we're proud of.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Button asChild variant="outline">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
