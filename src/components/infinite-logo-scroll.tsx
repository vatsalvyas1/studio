"use client";

import { cn } from "@/lib/utils";

const logos = [
  { name: 'EXL', logo: () => <p className="font-bold text-2xl font-headline">EXL</p> },
  { name: 'NexFix', logo: () => <p className="font-bold text-2xl font-headline">NexFix</p> },
  { name: 'Mangla Hardwares', logo: () => <p className="font-bold text-2xl font-headline">Mangla Hardwares</p> },
  { name: 'Shagun Sweets', logo: () => <p className="font-bold text-2xl font-headline">Shagun Sweets</p> },
  { name: 'EXL', logo: () => <p className="font-bold text-2xl font-headline">EXL</p> },
  { name: 'NexFix', logo: () => <p className="font-bold text-2xl font-headline">NexFix</p> },
  { name: 'Mangla Hardwares', logo: () => <p className="font-bold text-2xl font-headline">Mangla Hardwares</p> },
  { name: 'Shagun Sweets', logo: () => <p className="font-bold text-2xl font-headline">Shagun Sweets</p> },
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
