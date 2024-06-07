"use client";
import { SimpleGame } from "../interfaces/simple-game";

interface Props {
  game: SimpleGame;
}

export default function GameCard({ game }: Props) {
  const { id, name } = game;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
