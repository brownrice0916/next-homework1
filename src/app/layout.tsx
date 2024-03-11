import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-between max-w-screen-sm mb-5">
          <Link href="/">Home</Link>
          <div>
            <Link className="px-6" href="SSG">
              SSG
            </Link>
            <Link className="px-6" href="ISR">
              ISR
            </Link>
            <Link className="px-6" href="SSR">
              SSR
            </Link>
            <Link className="px-6" href="CSR">
              CSR
            </Link>
          </div>
        </nav>
        <Image alt="cat" src="/cat.jpeg" width={300} height={300} />
        {children}
      </body>
    </html>
  );
}
