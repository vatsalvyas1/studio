import Link from 'next/link';

const LogoIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-accent"
    >
      <path d="M12 2v8" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m17.66 10.93 1.41-1.41" />
      <path d="M18 22H6" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
);

const Footer = () => {
  return (
    <footer className="bg-secondary/40 border-t border-border">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1 flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <LogoIcon />
              <span className="font-headline text-xl font-bold">3AM Devs</span>
            </Link>
            <p className="text-sm text-muted-foreground">Crafting digital excellence.</p>
          </div>
          <div className="md:col-start-3">
            <h3 className="font-headline text-base font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground">Web Development</Link></li>
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground">Web Design</Link></li>
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground">Hosting</Link></li>
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground">Maintenance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-base font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">Work</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-base font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 3AM Devs Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
