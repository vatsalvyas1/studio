import Link from 'next/link';
import { Mountain, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start space-y-4 md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">DevRidge</span>
            </Link>
            <p className="text-sm text-muted-foreground">Premium web solutions for modern businesses.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Github /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
          <div className="lg:col-start-3">
            <h3 className="font-headline text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="#portfolio" className="text-sm text-muted-foreground hover:text-primary">Our Work</Link></li>
              <li><Link href="#testimonials" className="text-sm text-muted-foreground hover:text-primary">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">Request a Quote</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DevRidge Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
