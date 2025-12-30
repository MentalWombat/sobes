import PROFESSIONS from '@/data/professions.json';

import Option, { GROUPS, GROUP_CODES } from './option';

function Group({ code, name }: { code: string; name: string }) {
  return (
    <fieldset className="rounded-sm border p-3">
      <legend className="bg-foreground text-background rounded-sm px-3 py-1 text-sm">{name}</legend>
      <div className="flex flex-wrap gap-3">
        {PROFESSIONS.filter((item) => item.group_code === code).map((item) => (
          <Option key={item.code} name={item.name} />
        ))}
      </div>
    </fieldset>
  );
}

export default function StackMax() {
  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
      {GROUP_CODES.map((code) => (
        <Group key={code} code={code} name={GROUPS[code]} />
      ))}
    </div>
  );
}
