'use client';

import dynamic from 'next/dynamic';

import type { Mode } from './theme-switch';

// disable prerendering to prevent hydration mismatches
const Switch = dynamic(() => import('./theme-switch'), { ssr: false });

let theme: Mode;

if (typeof window !== 'undefined') {
  try {
    theme = !('theme' in localStorage) ? 'system' : localStorage.theme;
  } catch (error) {
    console.error(error);
    theme = 'system';
  }
}

export default function Theme() {
  return <Switch theme={theme} />;
}
