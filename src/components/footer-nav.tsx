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
      <div className="mt-1 sm:mt-0 sm:inline">
        <span className="sm:ml-2">MIN</span>
        <NavLink href="/min">Slug</NavLink>
        <NavLink href="/min/test">Test</NavLink>
        <span className="ml-2">MAX</span>
        <NavLink href="/max">Slug</NavLink>
        <NavLink href="/max/test">Test</NavLink>
      </div>
    </nav>
  );
}
