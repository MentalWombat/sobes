'use client';

import { useState } from 'react';

import PROFESSIONS from '@/data/professions.json';

import Option, { GROUPS, GROUP_CODES } from './option';

function Group({ code, name }: { code: string; name: string }) {
  const professions = PROFESSIONS.filter((item) => item.group_code === code);

  return (
    <fieldset className="rounded-sm border p-3">
      <legend className="bg-foreground text-background rounded-sm px-3 py-1 text-sm">{name}</legend>
      <div className="flex flex-wrap gap-3">
        {professions.map((item) => (
          <Option key={item.code} name={item.name} />
        ))}
      </div>
    </fieldset>
  );
}

function Specialization({
  code,
  name,
  setSelected
}: {
  code: string;
  name: string;
  setSelected: (code: string) => void;
}) {
  const onClick = () => {
    setSelected(code);
  };

  return (
    <button
      className="border-subtle hover:bg-accent1 hover:border-accent1 cursor-pointer rounded-md border px-4 py-2 text-2xl hover:text-white md:px-2 md:py-1 md:text-base"
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default function StackMin() {
  const [selected, setSelected] = useState('');
  const reset = () => {
    setSelected('');
  };

  return !selected ? (
    <div className="flex flex-wrap gap-3">
      {GROUP_CODES.map((item) => (
        <Specialization key={item} code={item} name={GROUPS[item]} setSelected={setSelected} />
      ))}
    </div>
  ) : (
    <div>
      <Group code={selected} name={GROUPS[selected]} />
      <button className="text-4xl" onClick={reset}>
        &#x2B05;
      </button>
    </div>
  );
}
