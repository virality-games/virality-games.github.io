import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { games } from "@/lib/games";
import GameCard from "@/components/GameCard";
import { Gamepad2, TrendingUp, Users, Zap } from "lucide-react";

const stats = [
  { icon: Gamepad2, label: "Games Created", value: "4+" },
  { icon: Users, label: "Total Players", value: "Millions" },
  { icon: TrendingUp, label: "Top 10 Hit", value: "Esponja Obby" },
  { icon: Zap, label: "Status", value: "Active Studio" },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      <div className="container relative mx-auto px-4 py-24 text-center md:py-36">
        <div className="mx-auto max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <Gamepad2 className="h-4 w-4 text-primary" /> Roblox Game Studio
          </div>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
            Virality<span className="text-primary"> Games</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            We build fun, creative experiences on Roblox — from obbies to roleplay worlds. Join millions of players in our games.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/games">Explore Our Games</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.roblox.com/groups/5765488/Virality-Games"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Group
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-y bg-secondary/30">
      <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <s.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Featured Games */}
    <section className="container mx-auto px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold">Featured Games</h2>
        <p className="text-muted-foreground">Check out what we've been building on Roblox</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {games.slice(0, 2).map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button variant="outline" asChild>
          <Link to="/games">View All Games →</Link>
        </Button>
      </div>
    </section>
  </>
);

export default Index;
