'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ children, href }: { children: string; href: string }) {
  const pathname = usePathname();

  return (
    <Link
      aria-current={href === pathname ? 'page' : undefined}
      className="aria-[current=page]:text-accent2 ml-1 border px-1"
      href={href}
    >
      {children}
    </Link>
  );
}

export default function Nav() {
  return (
    <nav className="border-t-subtle border-t px-6 py-3 sm:inline 2xl:mx-auto 2xl:w-7xl">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/slug">Slug</NavLink>
      <NavLink href="/slug/test">Test</NavLink>
      <NavLink href="/slug/test/results">Results</NavLink>
    </nav>
  );
}
