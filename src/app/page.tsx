import Nav from '@/components/footer-nav';

export default function Page() {
  return (
    <div className="bg-block p-12 text-center 2xl:rounded-xl">
      <div>Welcome to A/B testing</div>
      <div className="mb-4">Choose v1 or v2</div>
      <div className="-ml-1">
        <Nav />
      </div>
    </div>
  );
}
