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
    <nav className="sm:inline">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/v0">v0</NavLink>
      <NavLink href="/v1">v1</NavLink>
      <NavLink href="/v2">v2</NavLink>
    </nav>
  );
}
