import Link from 'next/link';

function Button({ href, short, variant }: { href: string; short: boolean; variant: number }) {
  const sm = short ? 'sm:hidden' : 'sm:inline';

  return (
    <Link
      className="border-foreground hover:border-accent1 hover:bg-accent1 rounded-lg border px-4 py-2 text-center text-xl hover:text-white md:text-base"
      href={href}
    >
      <span className={`hidden ${sm}`}>Вариант </span>
      {variant}
    </Link>
  );
}

export default function Set({ amount, href }: { amount: number; href: string }) {
  const columns = amount === 6 ? 'grid-cols-3' : 'grid-cols-4';
  const short = amount > 9;
  const variants = Array.from({ length: amount }, (_, i) => i + 1);

  return (
    <>
      <div className="mb-6">Шаг 2. Выберите готовый вариант:</div>
      <div className={`grid ${columns} gap-3 sm:flex sm:flex-row sm:flex-wrap`}>
        {variants.map((variant) => (
          <Button key={variant} href={href} short={short} variant={variant} />
        ))}
      </div>
    </>
  );
}
