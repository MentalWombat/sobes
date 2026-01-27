import Constructor from '@/components/constructor';
import Set from '@/components/set';

import data from './data.json';

export default async function Page() {
  return (
    <div className="p-6">
      <Set amount={10} href="/max/test" />
      <Constructor data={data} />
    </div>
  );
}
