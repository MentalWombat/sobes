import Link from 'next/link';

import data from './data.json';

function Button({ children }: { children: string }) {
  return (
    <Link
      className="hover:border-accent2 hover:text-accent2 border-foreground cursor-pointer rounded-lg border px-4 py-2 text-center text-xl md:text-base"
      href="/slug/test"
    >
      <span className="hidden sm:inline">Вариант </span>
      {children}
    </Link>
  );
}

function Sets() {
  return (
    <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row sm:flex-wrap">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
    </div>
  );
}

// both buttons should be hovered (peer-hover), but you have to make sure peer goes before both buttons
function OptionButton({ children }: { children: string }) {
  return (
    <button className="hover:text-foreground1 hover:bg-accent1 w-8 flex-none cursor-pointer rounded-sm sm:h-8">
      {children}
    </button>
  );
}

function Option({ name }: { name: string }) {
  return (
    <div className="group flex min-h-12 items-center justify-between not-last:mb-1 sm:min-h-8 sm:justify-normal sm:border-0 pointer-coarse:border">
      <OptionButton>-</OptionButton>
      <div className="peer group-hover:text-accent1 px-2 py-1 text-sm sm:w-[60ch] sm:text-base">
        {name}
      </div>
      <input
        className="peer-hover:text-accent1 group-hover:text-accent1 ml-auto w-8 text-center sm:ml-0"
        type="number"
        min="0"
        max="10"
        list="list"
        placeholder="0"
      />
      <OptionButton>+</OptionButton>
    </div>
  );
}

function Constructor() {
  return (
    <div className="mt-6">
      <div className="mb-6 sm:pl-17">Или составьте свой вариант с&nbsp;помощью конструктора:</div>
      <div>
        {data.map((item) => (
          <Option key={item.id} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default async function Page() {
  return (
    <div className="p-6">
      <div className="mb-6">Шаг 2. Выберите готовый вариант:</div>
      <Sets />
      <Constructor />
    </div>
  );
}
