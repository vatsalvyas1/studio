"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CodeXml } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/70 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn('flex items-center justify-between transition-all duration-300 h-20')}>
          <Link href="/" className="flex items-center gap-2">
            <CodeXml className="h-6 w-6 text-accent" />
            <span className="font-headline text-xl font-bold text-foreground">DevRidge</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Our Work</Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-foreground transition-colors">Testimonials</Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
