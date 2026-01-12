import Group, { type Code } from './group';

const GROUP_CODES: Code[] = ['FRONTEND_MOBILE', 'BACKEND', 'QUALITY_DELIVERY'];

export default function Page() {
  return (
    <div className="p-6">
      Шаг 1. Выберите направление:
      <div className="mt-6 flex flex-col gap-3 sm:gap-8 md:grid md:grid-cols-3">
        {GROUP_CODES.map((code) => (
          <Group key={code} code={code} />
        ))}
      </div>
    </div>
  );
}
