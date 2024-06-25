import GameCard from "@/games/components/GameCard";



export default function Home() {
  const cards = Array.from(Array(100).keys());

  return (
    <main className="container mx-auto p-5">
      <h1 className="mb-6 text-4xl font-bold">Main Content</h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map( item => (
          <GameCard key={`test-${item}`} img="/images/dummy_cover.jpg" game={{id: `test-${item}`, name: `test-${item}`}} />
        ))}
      </div>
    </main>
  );
}
