import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Game } from "@/lib/games";
import { ExternalLink } from "lucide-react";

const statusColors: Record<string, string> = {
  active: "bg-success text-success-foreground",
  shutdown: "bg-warning text-warning-foreground",
  "taken-down": "bg-destructive text-destructive-foreground",
};

const GameCard = ({ game }: { game: Game }) => (
  <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    {/* Colored top stripe */}
    <div
      className={cn(
        "h-1.5 w-full",
        game.status === "active" && "bg-success",
        game.status === "shutdown" && "bg-warning",
        game.status === "taken-down" && "bg-destructive"
      )}
    />

    <CardHeader className="pb-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{game.emoji}</span>
          <CardTitle className="text-lg">{game.title}</CardTitle>
        </div>
        <Badge className={cn("shrink-0", statusColors[game.status])}>
          {game.statusLabel}
        </Badge>
      </div>
    </CardHeader>

    <CardContent className="space-y-3">
      <p className="text-sm text-muted-foreground leading-relaxed">{game.description}</p>

      {game.note && (
        <p className="text-xs italic text-muted-foreground border-l-2 border-primary/30 pl-3">
          {game.note}
        </p>
      )}

      {game.status === "active" && game.robloxUrl && (
        <a
          href={game.robloxUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          Play on Roblox <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </CardContent>
  </Card>
);

export default GameCard;
