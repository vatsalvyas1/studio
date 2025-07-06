"use client";

const logos = [
  { 
    name: 'EXL', 
    logo: () => (
      <div className="flex flex-col items-center text-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
        <p className="font-bold text-xl font-headline">EXL</p>
      </div>
    ) 
  },
  { 
    name: 'NexFix', 
    logo: () => (
      <div className="flex flex-col items-center text-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
        <p className="font-bold text-xl font-headline">NexFix</p>
      </div>
    ) 
  },
  { 
    name: 'Mangla Hardwares', 
    logo: () => (
      <div className="flex flex-col items-center text-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 12-8.373 8.373a1 1 0 1 1-1.414-1.414L13.586 10.5" />
          <path d="m7 2 3.5 3.5" />
          <path d="M14 6.5 22 14.5" />
          <path d="M12 10.5 5.5 17" />
          <path d="m17 3 4.5 4.5" />
        </svg>
        <p className="font-bold text-xl font-headline">Mangla<br />Hardwares</p>
      </div>
    )
  },
  { 
    name: 'Shagun Sweets', 
    logo: () => (
      <div className="flex flex-col items-center text-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.3c.1-.3.1-.6.1-.9a8.95 8.95 0 0 0-8-8.95A8.95 8.95 0 0 0 4.15 11c-.1.3-.1.6-.1.9c0 1.6.5 3.1 1.4 4.4c.1.1.2.2.3.3c.1.1.1.1.2.2l3.4 3.4c.5.5 1.2.8 2 .8s1.5-.3 2-.8l3.4-3.4c.1-.1.1-.1.2-.2c.1-.1.2-.2.3-.3c.9-1.3 1.4-2.8 1.4-4.4Z" />
          <path d="m8.5 8.5 7 7" />
          <path d="m15.5 8.5-7 7" />
        </svg>
        <p className="font-bold text-xl font-headline">Shagun<br />Sweets</p>
      </div>
    )
  },
  { 
    name: 'EXL', 
    logo: () => (
      <div className="flex flex-col items-center text-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
        <p className="font-bold text-xl font-headline">EXL</p>
      </div>
    ) 
  },
  { 
    name: 'NexFix', 
    logo: () => (
      <div className="flex flex-col items-center text-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
        <p className="font-bold text-xl font-headline">NexFix</p>
      </div>
    ) 
  },
  { 
    name: 'Mangla Hardwares', 
    logo: () => (
      <div className="flex flex-col items-center text-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 12-8.373 8.373a1 1 0 1 1-1.414-1.414L13.586 10.5" />
          <path d="m7 2 3.5 3.5" />
          <path d="M14 6.5 22 14.5" />
          <path d="M12 10.5 5.5 17" />
          <path d="m17 3 4.5 4.5" />
        </svg>
        <p className="font-bold text-xl font-headline">Mangla<br />Hardwares</p>
      </div>
    )
  },
  { 
    name: 'Shagun Sweets', 
    logo: () => (
      <div className="flex flex-col items-center text-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.3c.1-.3.1-.6.1-.9a8.95 8.95 0 0 0-8-8.95A8.95 8.95 0 0 0 4.15 11c-.1.3-.1.6-.1.9c0 1.6.5 3.1 1.4 4.4c.1.1.2.2.3.3c.1.1.1.1.2.2l3.4 3.4c.5.5 1.2.8 2 .8s1.5-.3 2-.8l3.4-3.4c.1-.1.1-.1.2-.2c.1-.1.2-.2.3-.3c.9-1.3 1.4-2.8 1.4-4.4Z" />
          <path d="m8.5 8.5 7 7" />
          <path d="m15.5 8.5-7 7" />
        </svg>
        <p className="font-bold text-xl font-headline">Shagun<br />Sweets</p>
      </div>
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
