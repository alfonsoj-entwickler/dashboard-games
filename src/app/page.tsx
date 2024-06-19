import GameCard from "@/games/components/GameCard";
export default function Home() {
  return (
    <main className="container mx-auto p-5">
      <h1 className="mb-6 text-4xl font-bold">Main Content</h1>
      <div className="grid grid-cols-4 gap-4">
        <GameCard img="/images/dummy_cover_01.jpg" game={{id: "test", name: "test"}} />
        <GameCard img="/images/dummy_cover_02.jpg" game={{id: "test1", name: "test1"}} />
        <GameCard img="/images/dummy_cover_03.jpg" game={{id: "test2", name: "test2"}} />
        <GameCard img="/images/dummy_cover_04.jpg" game={{id: "test3", name: "test3"}} />
      </div>
    </main>
  );
}
