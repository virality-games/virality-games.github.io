import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-secondary/50">
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2 text-lg font-bold">
          <Gamepad2 className="h-5 w-5 text-primary" />
          Virality Games
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/games" className="hover:text-foreground transition-colors">Games</Link>
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <a
            href="https://www.roblox.com/groups/5765488/Virality-Games"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Roblox Group
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Virality Games. All rights reserved. Not affiliated with Roblox Corporation.
      </p>
    </div>
  </footer>
);

export default Footer;
