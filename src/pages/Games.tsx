import { games } from "@/lib/games";
import GameCard from "@/components/GameCard";

const Games = () => (
  <section className="container mx-auto px-4 py-16">
    <div className="mb-12 text-center">
      <h1 className="mb-3 text-4xl font-bold">Our Games</h1>
      <p className="mx-auto max-w-lg text-muted-foreground">
        From thrilling obbies to immersive roleplay — here's everything Virality Games has created on Roblox.
      </p>
    </div>
    <div className="grid gap-6 sm:grid-cols-2">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  </section>
);

export default Games;
