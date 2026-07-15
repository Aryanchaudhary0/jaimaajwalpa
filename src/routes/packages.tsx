import { createFileRoute, Link } from "@tanstack/react-router";
import { PACKAGES, DESTINATIONS, ROUTES } from "@/data/site";
import { FaMountain } from "react-icons/fa";

const EXTRA = [
  "Do Dham Yatra", "Kedarnath Tour", "Badrinath Tour", "Mussoorie Weekend",
  "Nainital Escape", "Jim Corbett Safari", "Auli Snow Trip", "Rishikesh Adventure",
  "Haridwar Spiritual Tour", "Custom Family Tour", "Delhi Tour Package",
  "Banaras Tour Package", "Vaishno Devi Temple Package", "Ayodhya Package", "Kathmandu Package",
];

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages: Char Dham, Kedarnath, Badrinath | Kotdwar" },
      { name: "description", content: "Explore Char Dham, Do Dham, Kedarnath, Badrinath, Vaishno Devi, Ayodhya, Kathmandu and hill-station tour packages from Kotdwar." },
      { property: "og:title", content: "Tour Packages — Jai Maa Jwalpa" },
      { property: "og:description", content: "Uttarakhand tour packages from a trusted Kotdwar operator." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: Packages,
});

function Packages() {
  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-pro py-16 md:py-24">
          <h1 className="font-display text-4xl md:text-6xl font-semibold">Tour Packages</h1>
          <p className="mt-3 max-w-2xl text-white/85 text-lg">Pre-built pilgrimage & hill-station packages plus custom itineraries for your family.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-pro">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((p) => (
              <article key={p.title} className={`rounded-2xl border p-6 shadow-luxe bg-card ${p.featured ? "border-accent ring-2 ring-accent/30" : "border-border"}`}>
                <h3 className="font-display text-lg font-semibold text-primary">{p.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{p.duration}</p>
                <p className="mt-4 text-sm">{p.covers}</p>
                <p className="mt-2 text-xs text-muted-foreground">{p.incl}</p>
                <p className="mt-4 font-display text-xl font-bold">{p.price}</p>
                <Link to="/routes/$slug" params={{ slug: p.slug }} className="mt-4 inline-flex btn-gold rounded-full px-4 py-2 text-xs font-semibold">Full Itinerary</Link>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <h2 className="font-display text-3xl font-semibold text-primary">More destinations & custom tours</h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {EXTRA.map((d) => (
                <div key={d} className="rounded-xl border border-border bg-card p-4 text-sm flex items-center gap-2">
                  <FaMountain className="text-accent" /> {d}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-display text-3xl font-semibold text-primary">All destination pages</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {ROUTES.map((r) => (
                <Link key={r.slug} to="/routes/$slug" params={{ slug: r.slug }} className="rounded-full bg-card border border-border px-3.5 py-1.5 text-xs hover:border-accent">
                  {r.h1.replace(/ — .*/, "").replace(/ Package.*/, "")}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {DESTINATIONS.map((d) => (
                <span key={d} className="rounded-full bg-secondary px-3 py-1 text-xs">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
