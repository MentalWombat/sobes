import Link from 'next/link';

function Button({ children }: { children: string }) {
  return (
    <Link
      className="hover:border-accent2 hover:text-accent2 border-foreground cursor-pointer rounded-lg border px-4 py-2 text-xl md:text-base"
      href="/min/test"
    >
      {children}
    </Link>
  );
}

function Sets() {
  return (
    <div className="mt-6 flex flex-col flex-wrap gap-3 sm:flex-row">
      <Button>Вариант 1</Button>
      <Button>Вариант 2</Button>
      <Button>Вариант 3</Button>
      <Button>Вариант 4</Button>
    </div>
  );
}

export default async function Page() {
  return (
    <div className="p-6">
      Шаг 2. Выберите готовый вариант:
      <Sets />
      <div className="mt-6 sm:pl-17">Или составьте свой вариант с&nbsp;помощью конструктора:</div>
      <div className="mt-6">CONSTRUCTOR UNDER CONSTRUCTION</div>
    </div>
  );
}
