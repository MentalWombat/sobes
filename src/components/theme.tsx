'use client';

import dynamic from 'next/dynamic';

import type { Mode } from './theme-switch';

// disable prerendering to prevent hydration mismatches
const Switch = dynamic(() => import('./theme-switch'), { ssr: false });

let theme: Mode | null = null;

if (typeof window !== 'undefined') {
  try {
    theme = !('theme' in localStorage) ? 'system' : localStorage.theme;
  } catch (error) {
    console.error(error);
    theme = null;
  }
}

export default function Theme() {
  return (
    <div>
      <Switch theme={theme} />
    </div>
  );
}
