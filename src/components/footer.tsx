import Nav from './footer-nav';
import Theme from './theme';

export default function Footer() {
  return (
    <footer className="flex min-h-14.5 items-center justify-between px-6 py-3 2xl:mx-auto 2xl:w-7xl">
      <div className="text-center text-xs md:text-base">
        © 2025 ПройдуСобес
        <Nav />
      </div>
      <Theme />
    </footer>
  );
}
