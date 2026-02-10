import { Button } from "@/components/ui/button";
import { Gamepad2, Heart, Shield, Sparkles } from "lucide-react";

const values = [
  { icon: Sparkles, title: "Creativity", desc: "We push the limits of what Roblox games can be." },
  { icon: Heart, title: "Community", desc: "Our players are at the heart of everything we build." },
  { icon: Shield, title: "Quality", desc: "We maintain high standards for fun, fair gameplay." },
];

const About = () => (
  <section className="container mx-auto px-4 py-16">
    <div className="mx-auto max-w-3xl">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">About Virality Games</h1>
        <p className="text-muted-foreground">
          The story behind one of Roblox's creative game studios.
        </p>
      </div>

      <div className="prose prose-lg mx-auto mb-16 max-w-2xl space-y-4 text-muted-foreground">
        <p>
          <strong className="text-foreground">Virality Games</strong> is a Roblox game studio dedicated to building
          fun, creative, and engaging experiences for players of all ages. From the colorful chaos of{" "}
          <em>Rainbow Pizza Obby</em> to the immersive world of <em>Evervale RP</em>, we've entertained millions.
        </p>
        <p>
          Our proudest achievement was <em>Esponja Obby</em>, which reached the{" "}
          <strong className="text-foreground">Top 10 on Roblox</strong> — a milestone very few studios ever reach.
          While that game is no longer under our ownership, the spirit of innovation that built it continues
          to drive everything we create.
        </p>
        <p>
          We're currently focused on growing our active titles and working to bring <em>Evervale RP</em> back
          online after a temporary shutdown. Stay tuned — the best is yet to come.
        </p>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold">What We Stand For</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-lg border bg-card p-6 text-center transition-shadow hover:shadow-md"
            >
              <v.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-1 font-semibold">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-10 text-center">
        <Gamepad2 className="mx-auto mb-4 h-10 w-10 text-primary" />
        <h2 className="mb-2 text-2xl font-bold">Join the Community</h2>
        <p className="mb-6 text-muted-foreground">
          Be part of our Roblox group and get early access to new games and updates.
        </p>
        <Button size="lg" asChild>
          <a
            href="https://www.roblox.com/groups/5765488/Virality-Games"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Virality Games on Roblox
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default About;
