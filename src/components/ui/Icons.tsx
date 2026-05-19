import React from 'react';
import { cn } from '../../lib/utils';

export const KangarooLine = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("stroke-current", className)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M40 85 C30 85 22 75 22 62 C22 45 40 25 45 15 C48 9 52 10 52 14 C52 28 60 40 65 50 C70 60 85 70 85 80 C85 85 80 88 75 85 C70 82 72 75 65 72 C60 70 50 85 40 85 Z" />
    <circle cx="34" cy="40" r="1.5" fill="currentColor" stroke="none" />
    <path d="M48 65 Q52 70 50 80" />
    <path d="M22 62 Q15 65 18 72" />
    <path d="M65 50 Q75 40 70 30" />
    <path d="M52 14 Q58 5 65 10" />
  </svg>
);

export const JoewyLine = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("stroke-current", className)} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M35 70 C30 70 25 60 25 50 C25 35 40 25 45 20 C48 15 52 18 50 25 C45 35 55 45 60 55 C65 65 75 60 80 65 C85 70 80 75 75 75 C60 75 45 70 35 70 Z" />
    <circle cx="38" cy="40" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export const BranchLine = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
    {/* Stem */}
    <path d="M20 80 Q50 60 80 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Leaves */}
    <path d="M35 55 Q20 50 30 40 Q40 50 35 55 Z" />
    <path d="M50 45 Q40 25 55 25 Q60 35 50 45 Z" />
    <path d="M65 30 Q75 15 85 25 Q75 35 65 30 Z" />
    <path d="M40 70 Q55 80 65 70 Q55 60 40 70 Z" />
    <path d="M60 55 Q75 65 80 50 Q65 45 60 55 Z" />
    <circle cx="20" cy="40" r="3" />
    <circle cx="70" cy="70" r="2.5" />
  </svg>
);

export const PawPrint = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
    {/* Large main pad */}
    <path d="M50 85 C35 85 25 70 30 55 C35 40 65 40 70 55 C75 70 65 85 50 85 Z" />
    {/* Toes (Kangaroos typically have a distinct long middle toe, but we'll make it stylized and cute) */}
    <ellipse cx="25" cy="35" rx="8" ry="12" transform="rotate(-30 25 35)" />
    <ellipse cx="50" cy="20" rx="10" ry="15" />
    <ellipse cx="75" cy="35" rx="8" ry="12" transform="rotate(30 75 35)" />
    <circle cx="15" cy="55" r="5" />
    <circle cx="85" cy="55" r="5" />
  </svg>
);

export const OrganicBlob = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={cn("fill-current", className)}>
    <path d="M45.7,-76.3C58.9,-69.3,69.2,-55.3,77.7,-40.8C86.2,-26.3,92.9,-11.3,91.8,3.2C90.8,17.7,82.1,31.7,72.4,44.2C62.7,56.7,52.1,67.7,39.3,75.4C26.5,83.2,11.5,87.6,-3.4,93.4C-18.3,99.2,-33.1,106.4,-45.5,100.1C-57.9,93.9,-68.1,74.2,-76.4,56.5C-84.7,38.8,-91.1,23.1,-91.7,7.2C-92.3,-8.6,-87.2,-24.8,-79.1,-39.3C-71,-53.8,-60,-66.6,-46.6,-73.4C-33.1,-80.2,-17.3,-81,-1,-79.3C15.3,-77.6,32.4,-83.4,45.7,-76.3Z" transform="translate(100 100)" />
  </svg>
);
