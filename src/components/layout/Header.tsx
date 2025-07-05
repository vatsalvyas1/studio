"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Moon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Our Work' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="container mx-auto mt-4"
        >
          <div className="relative w-full rounded-full border border-black/10 bg-white/30 p-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/20 flex items-center justify-between gap-4">
            <Link href="#home" className="flex flex-shrink-0 items-center gap-2 pl-4">
              <Moon className="h-6 w-6 text-accent" />
              <span className="font-headline text-xl font-bold text-foreground">3AM Devs</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                 <Button key={link.href} variant="ghost" asChild className="rounded-full text-sm font-normal">
                    <Link href={link.href}>{link.label}</Link>
                 </Button>
              ))}
            </nav>
            <div className="flex items-center gap-1 pr-2">
              <ThemeToggle />
              <Button asChild className="rounded-full text-xs h-8 bg-primary hover:bg-primary/90 text-primary-foreground hidden sm:flex">
                <Link href="#contact">Get a Quote</Link>
              </Button>
              <div className="sm:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)} className="rounded-full">
                  <Menu />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 right-0 bg-background/95 border-b p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <Link href="#home" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <Moon className="h-6 w-6 text-accent" />
                  <span className="font-headline text-xl font-bold text-foreground">3AM Devs</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X />
                </Button>
              </div>
              <nav className="flex flex-col gap-4 text-center">
                <Link href="#home" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                 <Button asChild size="lg" className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setIsMenuOpen(false)}>
                    <Link href="#contact">Get a Quote</Link>
                 </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
