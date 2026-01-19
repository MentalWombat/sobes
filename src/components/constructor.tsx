function Button({ children }: { children: string }) {
  return (
    <button className="hover:text-foreground1 hover:bg-accent1 h-8 w-8 cursor-pointer rounded-sm">
      {children}
    </button>
  );
}

function Option({ name }: { name: string }) {
  return (
    <div className="group flex min-h-12 items-center justify-between not-last:mb-1 sm:min-h-8 sm:flex-row-reverse sm:justify-end sm:border-0 pointer-coarse:border">
      <div className="peer group-hover:text-accent1 px-2 py-1 text-sm sm:text-base">{name}</div>
      <div className="peer-hover:bg-accent1 peer-hover:text-foreground1 flex justify-between rounded-sm">
        <Button>-</Button>
        <input className="text-center" type="number" min="0" max="10" list="list" placeholder="0" />
        <Button>+</Button>
      </div>
    </div>
  );
}

export default function Constructor({ data }: { data: { id: string; name: string }[] }) {
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
