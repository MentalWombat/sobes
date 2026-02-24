'use client';

import Link from 'next/link';

import PROFESSIONS from '@/data/professions.json';
import useMediaQuery from '@/hooks/use-media-query';

export type Code = 'BACKEND' | 'FRONTEND_MOBILE' | 'QUALITY_DELIVERY';

const GROUPS = {
  FRONTEND_MOBILE: 'Frontend / Mobile',
  BACKEND: 'Backend',
  QUALITY_DELIVERY: 'Quality & Delivery'
};

function Options({ code }: { code: Code }) {
  const professions = PROFESSIONS.filter((item) => item.group_code === code);

  return (
    <div className="flex flex-wrap gap-3 p-3">
      {professions.map((item) => (
        <Link
          className="border-foreground hover:border-accent1 hover:bg-accent1 rounded-md border px-4 py-2 text-2xl hover:text-white md:px-2 md:py-1 md:text-base"
          href="/slug"
          key={item.code}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default function Group({ code }: { code: Code }) {
  const name = GROUPS[code];
  const small = useMediaQuery();

  return small ? (
    <details className="block rounded-sm border sm:hidden" name="stack">
      <summary className="bg-foreground text-background px-4 py-2 text-2xl">{name}</summary>
      <Options code={code} />
    </details>
  ) : (
    <details className="hidden rounded-sm border sm:block" open>
      <summary
        className="bg-foreground text-background px-4 py-2 text-2xl sm:px-3 sm:py-1 sm:text-sm"
        inert
      >
        {name}
      </summary>
      <Options code={code} />
    </details>
  );
}
