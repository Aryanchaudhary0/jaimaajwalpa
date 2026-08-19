import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import tempo1 from "@/assets/fleet-tempo-sedan.jpg";
import tempoRear from "@/assets/fleet-tempo-rear.jpg";
import tempoInt from "@/assets/fleet-tempo-interior.jpg";
import sedan from "@/assets/fleet-sedan-front.jpg";
import innova from "@/assets/fleet-innova.jpg";
import ertiga from "@/assets/fleet-ertiga.jpg";
import { waLink } from "@/data/site";
import { FaWhatsapp } from "react-icons/fa";

type FleetItem = { name: string; images: { src: string; caption: string }[]; seats: string; ac: string; best: string };
const FLEET: FleetItem[] = [
  {
    name: "Force Tempo Traveller (14 / 16 / 17+1)",
    images: [
      { src: tempo1, caption: "Exterior" },
      { src: tempoInt, caption: "Interior · push-back seats" },
      { src: tempoRear, caption: "Rear view · emergency exit" },
    ],
    seats: "14 / 16 / 17+1",
    ac: "AC",
    best: "Char Dham, wedding, group tours",
  },
  { name: "Sedan — Swift Dzire", images: [{ src: sedan, caption: "Front" }], seats: "4", ac: "AC", best: "Kotdwar → Delhi / Dehradun / Pauri" },
  { name: "Innova Crysta", images: [{ src: innova, caption: "Exterior" }], seats: "6+1", ac: "AC", best: "Premium family travel" },
  { name: "Maruti Ertiga", images: [{ src: ertiga, caption: "Exterior" }], seats: "6+1", ac: "AC", best: "Small family / corporate" },
];

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet: Sedan, Innova, Tempo Traveller | Jai Maa Jwalpa" },
      { name: "description", content: "Clean, well-maintained fleet: Dzire sedan, Ertiga, Innova Crysta and 14/16/17+1 seater luxury Tempo Travellers with AC and push-back seats." },
      { property: "og:title", content: "Our Fleet — Jai Maa Jwalpa" },
      { property: "og:description", content: "Sedan, Innova Crysta & Tempo Traveller for Char Dham & Uttarakhand." },
     { property: "og:url", content: "https://jaimaajwalpa.in/fleet" },
    ],
links: [{ rel: "canonical", href: "https://jaimaajwalpa.in/fleet" }],
  }),
  component: Fleet,
});

function FleetCarousel({ images, name }: { images: { src: string; caption: string }[]; name: string }) {
  const [i, setI] = useState(0);
  const single = images.length <= 1;
  return (
    <div className="relative aspect-[16/10] bg-secondary overflow-hidden">
      {images.map((im, k) => (
        <img
          key={k}
          src={im.src}
          alt={`${name} — ${im.caption}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === k ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      {!single && (
        <>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Show ${images[k].caption}`}
                className={`h-1.5 rounded-full transition-all ${i === k ? "bg-accent w-6" : "bg-white/70 w-2.5"}`}
              />
            ))}
          </div>
          <span className="absolute top-2 right-2 rounded-full bg-black/55 text-white text-[10px] px-2 py-0.5">
            {i + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}

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
              <FleetCarousel images={v.images} name={v.name} />
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

