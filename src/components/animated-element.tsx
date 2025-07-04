"use client";

import { useRef, useEffect, useState, type ReactNode, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  animationClass?: string;
  delay?: number;
  threshold?: number;
}

export const AnimatedElement = ({
  children,
  className,
  animationClass = 'fade-in-on-scroll',
  delay = 0,
  threshold = 0.1,
  ...props
}: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, delay]);

  return (
    <div
      ref={ref}
      className={cn(className, animationClass, { 'is-visible': isVisible })}
      {...props}
    >
      {children}
    </div>
  );
};
