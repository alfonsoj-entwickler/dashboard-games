import type { Metadata } from "next";
import { Children } from "react";
 
 

export const metadata: Metadata = {
  title: "Game id",
  description: "Wiki of games",
};


export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>{children}</div>
  );
}
