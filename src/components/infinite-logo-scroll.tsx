// This is a new file
"use client";

import { cn } from "@/lib/utils";

const logos = [
  { name: 'Stripe', logo: () => <p className="font-bold text-2xl font-headline">Stripe</p> },
  { name: 'Framer', logo: () => <p className="font-bold text-2xl font-headline">Framer</p> },
  { name: 'Vercel', logo: () => <svg height="26" viewBox="0 0 75 65" fill="currentColor"><path d="M37.59.25l36.95 64H.64l36.95-64z"></path></svg> },
  { name: 'Linear', logo: () => <p className="font-bold text-2xl font-headline">Linear</p> },
  { name: 'Raycast', logo: () => <p className="font-bold text-2xl font-headline">Raycast</p> },
  { name: 'Notion', logo: () => <p className="font-bold text-2xl font-headline">Notion</p> },
  { name: 'Spline', logo: () => <p className="font-bold text-2xl font-headline">Spline</p> },
  { name: 'Loom', logo: () => <p className="font-bold text-2xl font-headline">Loom</p> },
];

export const InfiniteLogoScroll = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:h-8 [&_svg]:w-auto animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index} className="flex-shrink-0 text-muted-foreground/80 hover:text-foreground transition-colors">
            <logo.logo />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:h-8 [&_svg]:w-auto animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index} className="flex-shrink-0 text-muted-foreground/80 hover:text-foreground transition-colors">
            <logo.logo />
          </li>
        ))}
      </ul>
    </div>
  );
};
