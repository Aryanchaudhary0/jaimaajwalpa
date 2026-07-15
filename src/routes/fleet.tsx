import { createFileRoute } from "@tanstack/react-router";
import tempo1 from "@/assets/fleet-tempo-sedan.jpg.asset.json";
import tempoRear from "@/assets/fleet-tempo-rear.jpg.asset.json";
import tempoInt from "@/assets/fleet-tempo-interior.jpg.asset.json";
import sedan from "@/assets/fleet-sedan-front.jpg.asset.json";
import innova from "@/assets/fleet-innova.jpg.asset.json";
import ertiga from "@/assets/fleet-ertiga.jpg.asset.json";
import { waLink } from "@/data/site";
import { FaWhatsapp } from "react-icons/fa";

const FLEET = [
  { name: "Force Tempo Traveller 17+1", img: tempo1.url, seats: "17+1", ac: "AC", best: "Char Dham, wedding, group tours" },
  { name: "Tempo Traveller Interior", img: tempoInt.url, seats: "14/16/17+1", ac: "AC", best: "Push-back seat comfort" },
  { name: "Tempo Traveller — Rear", img: tempoRear.url, seats: "17+1", ac: "AC", best: "Yatra circuits" },
  { name: "Sedan — Swift Dzire", img: sedan.url, seats: "4", ac: "AC", best: "Kotdwar → Delhi/Dehradun/Pauri" },
  { name: "Innova Crysta", img: innova.url, seats: "6+1", ac: "AC", best: "Premium family travel" },
  { name: "Maruti Ertiga", img: ertiga.url, seats: "6+1", ac: "AC", best: "Small family / corporate" },
  { name: "Tempo Traveller 14 Seater", img: "", seats: "14", ac: "AC", best: "Small group tours" },
  { name: "Tempo Traveller 16 Seater", img: "", seats: "16", ac: "AC", best: "Extended families" },
];

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet | Sedan, Innova, Tempo Traveller — Jai Maa Jwalpa Kotdwar" },
      { name: "description", content: "Clean, well-maintained fleet: Dzire sedan, Ertiga, Innova Crysta and 14/16/17+1 seater luxury Tempo Travellers with AC and push-back seats." },
      { property: "og:title", content: "Our Fleet — Jai Maa Jwalpa" },
      { property: "og:description", content: "Sedan, Innova Crysta & Tempo Traveller for Char Dham & Uttarakhand." },
      { property: "og:url", content: "/fleet" },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: Fleet,
});

function Fleet() {
  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-pro py-16 md:py-24">
          <h1 className="font-display text-4xl md:text-6xl font-semibold">Our Fleet</h1>
          <p className="mt-3 max-w-2xl text-white/85 text-lg">Sedan, SUV, Innova Crysta and 14/16/17+1 seater luxury Tempo Traveller — every vehicle inspected before every trip.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-pro grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FLEET.map((v) => (
            <article key={v.name} className="rounded-2xl overflow-hidden border border-border bg-card shadow-luxe">
              <div className="aspect-[16/10] bg-secondary">
                {v.img ? (
                  <img src={v.img} alt={v.name} loading="lazy" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full grid place-items-center text-xs text-muted-foreground">Real photo coming soon · Placeholder</div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{v.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{v.seats} seats · {v.ac}</p>
                <p className="mt-2 text-sm">{v.best}</p>
                <a href={waLink(`Hello, I'd like to enquire about ${v.name}.`)} target="_blank" rel="noopener" className="mt-4 inline-flex btn-gold rounded-full px-4 py-2 text-xs font-semibold items-center gap-2">
                  <FaWhatsapp /> Enquire
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
