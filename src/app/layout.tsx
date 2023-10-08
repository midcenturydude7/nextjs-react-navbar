/* eslint-disable @next/next/no-img-element */
import "./globals.css";
import Navbar from "./components/Navbar";
import Image from "next/image";

export const metadata = {
  title: "Navbar built with React and Framer Motion in Nextjs",
  description: "Interactive navbar inspired by Vercel's landing page's navbar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tr overflow-x-hidden min-w-screen from-zinc-950 via-stone-900 to-neutral-950 flex min-h-screen flex-col items-center justify-between">
        <main className="p-4 py-24 gap-g w-full lg:w-[55%]">
          <section className="w-full flex gap-4 justify-start mb-6 p-2">
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/68690233?s=100&v=4"
                alt="avatar"
                width={100}
                height={100}
                className="w-12 h-12 rounded-full shadow-lg grayscale hover:grayscale-0 duration-300"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h2 className="mb-0 text-zinc-100 font-bold">Ashish</h2>
              <p className="mb-0 text-zinc-400 font-semibold leading-none">
                Student • Dev • Ailurophile
              </p>
            </div>
          </section>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
