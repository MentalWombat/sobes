import Link from 'next/link';

import Constructor from '@/components/constructor';

import data from './data.json';

function Button({ children }: { children: string }) {
  return (
    <Link
      className="hover:border-accent2 hover:text-accent2 border-foreground cursor-pointer rounded-lg border px-4 py-2 text-center text-xl md:text-base"
      href="/max/test"
    >
      {children}
    </Link>
  );
}

function Sets() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:flex-wrap">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>10</Button>
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
