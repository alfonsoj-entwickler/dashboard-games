import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <header className="w-full p-6 bg-blue-300">Header</header>
        <div className="h-screen flex">
          <div className="w-1/5 h-full p-6 bg-red-300">SideBar</div>
          <div className="flex-1 p-6 bg-yellow-200">
            {children}
          </div>
        </div>
        <footer className="p-6 bg-green-400">Footer</footer>
      </body>
    </html>
  );
}
