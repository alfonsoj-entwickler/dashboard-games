import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Games",
  description: "Wiki of games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="h-screen flex">
          <div className="flex flex-col gap-2 w-1/5 h-full bg-slate-900 text-white">
            <div className="p-6 bg-slate-800">
              Logo
            </div>
            <div className="p-6">
              SideBar
            </div>
          </div>
          <div className="flex-1 bg-white text-black">
          <header className="w-full p-6 border-b-2 border-solid border-b-slate-200">Header</header>
            {children}
          </div>
        </div>
        <footer className="p-6 bg-green-400">Footer</footer>
      </body>
    </html>
  );
}
