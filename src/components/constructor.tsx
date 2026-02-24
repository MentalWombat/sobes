'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

function Button({
  children,
  disabled,
  onClick
}: {
  children: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="peer-hover:text-accent2 hover:not-disabled:text-accent2 peer-hover:border-accent2 hover:not-disabled:border-accent2 flex-none cursor-pointer rounded-sm peer-hover:not-disabled:border hover:not-disabled:border disabled:cursor-default disabled:text-transparent sm:h-8 sm:w-8 pointer-coarse:h-12 pointer-coarse:w-12 pointer-coarse:rounded-none"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const ALLOWED_VALUES = ['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

function Option({
  id,
  name,
  update
}: {
  id: string;
  name: string;
  update: (id: string, count: number) => void;
}) {
  const [value, setValue] = useState(0);
  const color = value > 0 ? 'text-accent2' : '';

  const decrement = () => {
    if (value === 0) return;
    const count = value - 1;
    setValue(count);
    update(id, count);
  };
  const increment = () => {
    if (value === 10) return;
    const count = value + 1;
    setValue(count);
    update(id, count);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!ALLOWED_VALUES.includes(e.target.value)) return;
    setValue(+e.target.value);
  };

  return (
    <div className="group pointer-coarse:hover:border-accent1 flex min-h-12 items-center justify-between not-last:mb-1 sm:min-h-8 sm:justify-normal sm:border-0 pointer-coarse:border">
      <div className={`peer group-hover:text-accent2 ${color} grow px-2 py-1 text-xs sm:text-base`}>
        {name}
      </div>
      <Button disabled={value === 0 || !value} onClick={decrement}>
        -
      </Button>
      <input
        className={`peer-hover:text-accent2 group-hover:text-accent2 ${color} w-12 [appearance:textfield] text-center sm:ml-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
        type="number"
        placeholder="0"
        min="0"
        max="10"
        list="list"
        value={value}
        onChange={onChange}
      />
      <Button disabled={value === 10} onClick={increment}>
        +
      </Button>
    </div>
  );
}

function Run({ disabled }: { disabled: boolean }) {
  return (
    <Link
      aria-disabled={disabled}
      className="aria-disabled:text-subtle hover:border-accent1 hover:bg-accent1 border-foreground rounded-lg border px-4 py-2 text-center text-xl hover:text-white aria-disabled:cursor-default aria-disabled:border-transparent aria-disabled:hover:bg-transparent md:text-base"
      href={disabled ? '' : '/slug/test'}
      role="link"
    >
      Составить
      <span className="hidden sm:inline"> вариант</span>
    </Link>
  );
}

export default function Constructor({ data }: { data: { id: string; name: string }[] }) {
  const init = data.map((item) => ({ id: item.id, count: 0 }));
  const payload = useRef(init);
  const [clear, setClear] = useState(0);
  const [sum, setSum] = useState(0);

  const reset = () => {
    setClear(clear + 1);
    setSum(0);
    payload.current = init;
  };

  const update = (id: string, count: number) => {
    payload.current = [...payload.current.filter((item) => item.id !== id), { id, count }];
    const sum = payload.current.reduce((acc, cur) => acc + cur.count, 0);
    setSum(sum);
  };

  return (
    <div className="mt-12 pointer-fine:w-172">
      <div className="mb-6 sm:pl-17">Или составьте свой вариант с&nbsp;помощью конструктора:</div>
      <div key={clear}>
        {data.map((item) => (
          <Option key={item.id} id={item.id} name={item.name} update={update} />
        ))}
      </div>
      <div className="my-6 text-end">{`Всего вопросов: ${sum}`}</div>
      <div className="flex justify-between">
        <button
          className="hover:border-foreground text-l cursor-pointer rounded-lg border border-transparent px-4 py-2 text-center disabled:invisible md:text-sm"
          disabled={sum === 0}
          onClick={reset}
        >
          Сбросить
        </button>
        <Run disabled={sum === 0} />
      </div>
    </div>
  );
}
