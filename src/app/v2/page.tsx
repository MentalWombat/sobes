import StackMax from './stack-max';
import StackMin from './stack-min';

export default function Page() {
  return (
    <div className="p-6">
      Шаг 1. Выберите направление:
      <div className="mt-6 block sm:hidden">
        <StackMin />
      </div>
      <div className="mt-6 hidden sm:block">
        <StackMax />
      </div>
    </div>
  );
}
