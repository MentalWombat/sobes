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
    </div>
  );
}

export default async function Page() {
  return (
    <div className="p-6">
      Шаг 2. Выберите готовый вариант:
      <Sets />
      <div className="mt-6 sm:pl-17">Или составьте свой вариант с&nbsp;помощью конструктора:</div>
      <div className="mt-6">CONSTRUCTOR UNDER CONSTRUCTION</div>
    </div>
  );
}
