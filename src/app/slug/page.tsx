import Constructor from './constructor';
import Set from './set';

export default async function Page() {
  return (
    <div className="p-6">
      <Set amount={6} href="/slug/test" />
      <Constructor />
    </div>
  );
}
