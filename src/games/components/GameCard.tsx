"use client";
import Link from "next/link";
import { SimpleGame } from "../interfaces/simple-game";
import Image from "next/image";

interface Props {
  game: SimpleGame;
  img: string;
}

export default function GameCard({ game, img }: Props) {
  const { id, name } = game;

  return (
    <div className="relative mx-auto right-0 mt-2 overflow-hidden rounded-lg">
      <Image 
        src={img}
        alt={`img ${name}`}
        width={600}
        height={600}
        className="relative z-0"
      />
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-linear-black z-10" />
      <div className="flex flex-col gap-2 absolute bottom-0 left-0 w-full  p-6 text-white z-20">
        <ul className="flex overflow-hidden">
          <li>
            <span className="bg-pc p-1 text-xs text-white">
              <Link href="/hardware/pc">PC</Link>
            </span>
          </li>
          <li>
            <span className="bg-nintendo p-1 text-xs text-white">
            <Link href="/hardware/switch">SWITCH</Link>
            </span>
          </li>
          <li>
            <span className="bg-xbox p-1 text-xs text-white">
              <Link href="/hardware/xbox">XBOX</Link>  
            </span>
          </li>
          <li>
            <span className="bg-playstation p-1 text-xs text-white">
              <Link href="/hardware/ps5">PS5</Link>
            </span>
          </li>
        </ul>
        <h2 className="text-4xl font-semibold uppercase">Headline</h2>
        <p>Text</p>
        <div className="flex justify-end">
          <Link href={"/"} className="py-1.5 px-4 rounded-md text-sm uppercase text-white transition-colors bg-orange-600 hover:bg-orange-800">More</Link>
        </div>
        
      </div>
    </div>
  );
}
