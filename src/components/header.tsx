import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sm:py-3 2xl:mx-auto 2xl:flex 2xl:w-7xl 2xl:py-6">
      <div className="relative isolate flex items-center gap-1.5 2xl:flex-none">
        <Image
          className="hue-rotate-330 invert-100"
          src="https://sobes.run/images/logo.webp"
          alt="Пройду Собес logo"
          width={120}
          height={120}
          priority
        />
        <div>
          <h1 className="text-3xl/12 sm:text-4xl/14">
            <Link href="/">
              <span className="absolute inset-0 z-10"></span>
              <span className="text-accent1 font-bold">Пройду</span>
              <span className="text-accent2 font-bold">Собес</span>
            </Link>
          </h1>
          <p className="text-subtle text-xs md:text-base">
            Тренажер для подготовки к&nbsp;собеседованиям
          </p>
        </div>
      </div>
    </header>
  );
}
