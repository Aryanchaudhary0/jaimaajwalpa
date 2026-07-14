import { createFileRoute, Link } from "@tanstack/react-router";
import { ROUTES } from "@/data/site";
import { FaCarSide, FaBus, FaTaxi, FaPlaneDeparture, FaRing, FaBuilding } from "react-icons/fa";

const SERVICES = [
  { icon: FaTaxi, title: "Local Taxi Kotdwar", desc: "City & nearby sightseeing incl. Sidhbali, Kanvashram." },
  { icon: FaCarSide, title: "Outstation Taxi", desc: "Kotdwar → Delhi, Dehradun, Haridwar, Rishikesh, Pauri." },
  { icon: FaPlaneDeparture, title: "Airport / Railway Pickup", desc: "Jolly Grant (DED), IGI Delhi, Haridwar & Kotdwar station." },
  { icon: FaCarSide, title: "One-way & Round Trip", desc: "Any combination of drop-off/return, transparent fares." },
  { icon: FaBuilding, title: "Corporate Taxi", desc: "Dedicated cabs & monthly billing for businesses." },
  { icon: FaRing, title: "Wedding Transport", desc: "Baraat cabs, Tempo Travellers for guests, on-time arrival." },
  { icon: FaBus, title: "Tempo Traveller (14/16/17+1)", desc: "Push-back seats, AC, curtains, mobile charging." },
  { icon: FaCarSide, title: "Innova Crysta", desc: "Premium 6+1 for family hill trips & long distance." },
  { icon: FaCarSide, title: "Sedan (Dzire) & Ertiga", desc: "Fuel-efficient options for couples and small families." },
];

const TABLE = [
  { r: "Kotdwar → Delhi", p: "₹4,500", slug: "kotdwar-to-delhi-taxi-service" },
  { r: "Kotdwar → Dehradun", p: "₹3,500", slug: "kotdwar-to-dehradun-taxi-service" },
  { r: "Kotdwar → Pauri", p: "₹3,500", slug: "kotdwar-to-pauri-taxi-service" },
  { r: "Delhi → Kotdwar", p: "₹4,500", slug: "delhi-to-kotdwar-taxi-service" },
  { r: "Sharing Cab to Delhi", p: "₹1,000 / person", slug: "kotdwar-to-delhi-taxi-service" },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Kotdwar Taxi Services | Local, Outstation, Airport & Tempo Traveller" },
      { name: "description", content: "Full range of Kotdwar taxi services — local, outstation, airport pickup, one-way, round trip, corporate, wedding transport, Tempo Traveller, Innova Crysta." },
      { property: "og:title", content: "Kotdwar Taxi Services — Jai Maa Jwalpa" },
      { property: "og:description", content: "Every kind of Kotdwar taxi service with transparent pricing." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-pro py-16 md:py-24">
          <h1 className="font-display text-4xl md:text-6xl font-semibold max-w-3xl leading-[1.05]">Kotdwar Taxi Services</h1>
          <p className="mt-4 max-w-2xl text-white/85 text-lg">Every kind of journey — local sightseeing, airport transfers, outstation cabs, corporate accounts, weddings and yatra circuits.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-pro">
          <div className="grid gap-4 md:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-luxe">
                <div className="w-12 h-12 grid place-items-center rounded-xl bg-primary text-primary-foreground"><s.icon /></div>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h2 className="font-display text-3xl font-semibold text-primary">Outstation Fare Table</h2>
            <p className="text-sm text-muted-foreground mt-1">Indicative starting fares. Prices may vary based on season, vehicle and pickup point.</p>
            <div className="mt-6 rounded-2xl overflow-hidden border border-border">
              <table className="w-full text-sm bg-card">
                <thead className="bg-primary text-primary-foreground text-left">
                  <tr><th className="p-4">Route</th><th className="p-4">Starting Fare</th><th className="p-4 text-right">Details</th></tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {TABLE.map((r) => (
                    <tr key={r.r} className="hover:bg-secondary/40">
                      <td className="p-4 font-medium">{r.r}</td>
                      <td className="p-4"><span className="font-display font-semibold text-primary">{r.p}</span></td>
                      <td className="p-4 text-right"><Link to="/routes/$slug" params={{ slug: r.slug }} className="text-xs font-semibold text-primary underline">Details →</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-display text-3xl font-semibold text-primary">All service pages</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {ROUTES.map((r) => (
                <Link key={r.slug} to="/routes/$slug" params={{ slug: r.slug }} className="rounded-full bg-card border border-border px-3.5 py-1.5 text-xs hover:border-accent">
                  {r.h1.replace(/ — .*/, "").replace(/ Package.*/, "")}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
