"use client";

const logos = [
  { 
    name: 'EXL', 
    logo: () => (
      <p className="text-3xl font-bold tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>EXL</p>
    ) 
  },
  { 
    name: 'NexFix', 
    logo: () => (
      <p className="text-3xl font-sans font-semibold">NexFix</p>
    ) 
  },
  { 
    name: 'Mangla Hardwares', 
    logo: () => (
      <p className="text-3xl font-serif font-bold text-center">Mangla<br />Hardwares</p>
    )
  },
  { 
    name: 'Shagun Sweets', 
    logo: () => (
      <p className="text-3xl font-bold text-center" style={{ fontFamily: 'cursive' }}>Shagun<br />Sweets</p>
    )
  },
  { 
    name: 'HackIn', 
    logo: () => (
      <p className="text-3xl font-mono font-bold">HackIn</p>
    ) 
  },
  { 
    name: 'EXL', 
    logo: () => (
      <p className="text-3xl font-bold tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>EXL</p>
    ) 
  },
  { 
    name: 'NexFix', 
    logo: () => (
      <p className="text-3xl font-sans font-semibold">NexFix</p>
    ) 
  },
  { 
    name: 'Mangla Hardwares', 
    logo: () => (
      <p className="text-3xl font-serif font-bold text-center">Mangla<br />Hardwares</p>
    )
  },
  { 
    name: 'Shagun Sweets', 
    logo: () => (
      <p className="text-3xl font-bold text-center" style={{ fontFamily: 'cursive' }}>Shagun<br />Sweets</p>
    )
  },
    { 
    name: 'HackIn', 
    logo: () => (
      <p className="text-3xl font-mono font-bold">HackIn</p>
    ) 
  },
];

export const InfiniteLogoScroll = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index} className="flex-shrink-0 text-muted-foreground/80 hover:text-foreground transition-colors">
            <logo.logo />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index} className="flex-shrink-0 text-muted-foreground/80 hover:text-foreground transition-colors">
            <logo.logo />
          </li>
        ))}
      </ul>
    </div>
  );
};
