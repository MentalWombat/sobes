import Link from 'next/link';

export const GROUPS: { [key: string]: string } = {
  FRONTEND_MOBILE: 'Frontend / Mobile',
  BACKEND: 'Backend',
  QUALITY_DELIVERY: 'Quality & Delivery'
};

export const GROUP_CODES = Object.keys(GROUPS);

export default function Option({ name }: { name: string }) {
  return (
    <Link
      className="border-foreground hover:border-accent1 hover:text-accent1 rounded-md border px-4 py-2 text-2xl md:px-2 md:py-1 md:text-base"
      href="/v2/next"
    >
      {name}
    </Link>
  );
}
