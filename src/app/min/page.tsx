import Link from 'next/link';

import Constructor from './constructor';
import data from './data.json';

function Button({ children }: { children: string }) {
  return (
    <Link
      className="hover:outline-accent2 hover:text-accent2 border-foreground cursor-pointer rounded-lg border px-4 py-2 text-center text-xl hover:border-transparent hover:outline-2 md:text-base"
      href="/min/test"
    >
      {children}
    </Link>
  );
}

function Sets() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:flex-wrap">
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
      <div className="mb-6">Шаг 2. Выберите готовый вариант:</div>
      <Sets />
      <Constructor data={data} />
    </div>
  );
}
