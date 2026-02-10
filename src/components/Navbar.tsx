import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <Gamepad2 className="h-6 w-6 text-primary" />
          <span>Virality Games</span>
        </Link>

        {/* Desktop */}
        <div className="hidden gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary",
                location.pathname === l.to && "bg-secondary text-primary"
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.roblox.com/groups/5765488/Virality-Games"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Roblox Group
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-background px-4 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary",
                location.pathname === l.to && "bg-secondary text-primary"
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.roblox.com/groups/5765488/Virality-Games"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-md bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
          >
            Roblox Group
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
