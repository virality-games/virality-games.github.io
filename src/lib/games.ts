export type GameStatus = "active" | "shutdown" | "taken-down";

export interface Game {
  id: string;
  title: string;
  description: string;
  status: GameStatus;
  statusLabel: string;
  note?: string;
  robloxUrl?: string;
  emoji: string;
}

export const games: Game[] = [
  {
    id: "rainbow-pizza-obby",
    title: "Rainbow Pizza Obby",
    description: "Jump through colorful pizza-themed obstacle courses! A fan-favorite obby with tons of stages and vibrant worlds.",
    status: "active",
    statusLabel: "Active",
    robloxUrl: "https://www.roblox.com/games/",
    emoji: "🍕",
  },
  {
    id: "super-gaming-cart-ride",
    title: "Super Gaming Cart Ride",
    description: "Hop in your cart and ride through wild tracks filled with twists, turns, and surprises at every corner.",
    status: "active",
    statusLabel: "Active",
    robloxUrl: "https://www.roblox.com/games/",
    emoji: "🛒",
  },
  {
    id: "evervale-rp",
    title: "Evervale RP",
    description: "An immersive roleplay experience set in a richly detailed world. Currently offline while we resolve a security issue.",
    status: "shutdown",
    statusLabel: "Temporarily Shut Down",
    note: "Taken offline due to a virus. We're working on bringing it back!",
    emoji: "🏰",
  },
  {
    id: "esponja-obby",
    title: "Esponja Obby",
    description: "Once a Top 10 game on Roblox! This beloved obby reached millions of players before being taken down.",
    status: "taken-down",
    statusLabel: "Formerly Owned",
    note: "Achieved Top 10 on Roblox. No longer under Virality Games ownership.",
    emoji: "🧽",
  },
];
