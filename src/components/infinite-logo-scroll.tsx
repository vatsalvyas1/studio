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
          <path d="M21.2 9.2a6.4 6.4 0 0 0-8.4-8.4 6.4 6.4 0 0 0-8.4 8.4l1.5 1.5-1.5 1.5a6.4 6.4 0 0 0 8.4 8.4 6.4 6.4 0 0 0 8.4-8.4l-1.5-1.5 1.5-1.5Z"/>
          <path d="m8.8 8.8 6.4 6.4"/>
        </svg>
        <p className="font-bold text-xl font-headline">Shagun<br />Sweets</p>
      </div>
    )
  },
  { 
    name: 'HackIn', 
    logo: () => (
      <div className="flex flex-col items-center text-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
        <p className="font-bold text-xl font-headline">HackIn</p>
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
          <path d="M21.2 9.2a6.4 6.4 0 0 0-8.4-8.4 6.4 6.4 0 0 0-8.4 8.4l1.5 1.5-1.5 1.5a6.4 6.4 0 0 0 8.4 8.4 6.4 6.4 0 0 0 8.4-8.4l-1.5-1.5 1.5-1.5Z"/>
          <path d="m8.8 8.8 6.4 6.4"/>
        </svg>
        <p className="font-bold text-xl font-headline">Shagun<br />Sweets</p>
      </div>
    )
  },
    { 
    name: 'HackIn', 
    logo: () => (
      <div className="flex flex-col items-center text-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
        <p className="font-bold text-xl font-headline">HackIn</p>
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
