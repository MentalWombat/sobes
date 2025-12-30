'use client';

import { useState } from 'react';

import PROFESSIONS from '@/data/professions.json';
import useMediaQuery from '@/hooks/use-media-query';

const GROUPS: { [key: string]: string } = {
  FRONTEND_MOBILE: 'Frontend / Mobile',
  BACKEND: 'Backend',
  QUALITY_DELIVERY: 'Quality & Delivery'
};

const GROUP_CODES = Object.keys(GROUPS);

function Button({ title }: { title: string }) {
  return (
    <button className="hover:border-accent2 hover:text-accent2 border-foreground cursor-pointer rounded-lg border px-4 py-2 text-xl md:text-base">
      {title}
    </button>
  );
}

function Sets() {
  return (
    <div className="mt-6 flex flex-col flex-wrap gap-3 sm:flex-row">
      <Button title="Вариант 1" />
      <Button title="Вариант 2" />
      <Button title="Вариант 3" />
      <Button title="Вариант 4" />
      <Button title="Вариант 5" />
      <Button title="Вариант 6" />
      <Button title="Вариант 7" />
      <Button title="Вариант 8" />
      <Button title="Вариант 9" />
      <Button title="Вариант 10" />
    </div>
  );
}

function Option({
  code,
  name,
  selected,
  setSelected
}: {
  code: string;
  name: string;
  selected: string;
  setSelected: (code: string) => void;
}) {
  const onChange = () => {
    setSelected(code);
  };

  return (
    <div
      aria-checked={code === selected}
      className="border-foreground aria-checked:border-accent1 aria-checked:outline-accent1 aria-checked:bg-accent1 hover:border-accent1 hover:text-accent1 rounded-md border aria-checked:text-white aria-checked:outline-1"
    >
      <input
        className="hidden"
        type="radio"
        id={code}
        name="profession"
        value={code}
        checked={code === selected}
        onChange={onChange}
      />
      <label
        className="block cursor-pointer px-4 py-2 text-2xl md:px-2 md:py-1 md:text-base"
        htmlFor={code}
      >
        {name}
      </label>
    </div>
  );
}

function Options({
  code,
  selected,
  setSelected
}: {
  code: string;
  selected: string;
  setSelected: (code: string) => void;
}) {
  const professions = PROFESSIONS.filter((item) => item.group_code === code);

  return (
    <div className="flex flex-wrap gap-3 p-3">
      {professions.map((item) => (
        <Option
          key={item.code}
          code={item.code}
          name={item.name}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}

function Group({
  code,
  name,
  selected,
  setSelected
}: {
  code: string;
  name: string;
  selected: string;
  setSelected: (code: string) => void;
}) {
  const small = useMediaQuery();

  return small ? (
    <details className="block rounded-sm border sm:hidden" name="stack">
      <summary className="bg-foreground text-background px-4 py-2 text-2xl">{name}</summary>
      <Options code={code} selected={selected} setSelected={setSelected} />
    </details>
  ) : (
    <details className="hidden rounded-sm border sm:block" open>
      <summary
        className="bg-foreground text-background px-4 py-2 text-2xl sm:px-3 sm:py-1 sm:text-sm"
        inert
      >
        {name}
      </summary>
      <Options code={code} selected={selected} setSelected={setSelected} />
    </details>
  );
}

export default function Stack() {
  const [selected, setSelected] = useState('');

  return (
    <>
      <div className="2xl:bg-block p-6 2xl:rounded-xl">
        Шаг 1. Выберите направление:
        <div className="mt-6 flex flex-col gap-3 sm:gap-8 md:grid md:grid-cols-3">
          {GROUP_CODES.map((item) => (
            <Group
              key={item}
              code={item}
              name={GROUPS[item]}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>
      {selected ? (
        <div className="2xl:bg-block p-6 sm:mt-8 2xl:rounded-xl">
          Шаг 2. Выберите готовый вариант:
          <Sets />
          <div className="mt-6 sm:pl-17">
            Или составьте свой вариант с&nbsp;помощью конструктора:
          </div>
          <div className="mt-6">CONSTRUCTOR UNDER CONSTRUCTION</div>
        </div>
      ) : null}
    </>
  );
}
