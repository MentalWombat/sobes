import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';

import './globals.css';

const jbMono = JetBrains_Mono({
  variable: '--font-jb-mono',
  fallback: ['Consolas', 'monospace'],
  subsets: ['cyrillic', 'latin']
});

export const metadata: Metadata = {
  title: 'v1',
  description: 'under construction',
  robots: {
    index: false,
    follow: false
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.toggle("dark", localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches));
              } catch (error) {
                console.error(error);
              }
            `
          }}
        />
      </head>
      <body className={`${jbMono.variable} antialiased`}>
        <div className="font-body grid min-h-dvh grid-rows-[auto_1fr_auto]">
          <Header />
          <main className="2xl:mx-auto 2xl:w-7xl">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
