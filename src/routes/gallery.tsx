import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import tempo1 from "@/assets/fleet-tempo-sedan.jpg.asset.json";
import tempoRear from "@/assets/fleet-tempo-rear.jpg.asset.json";
import tempoInt from "@/assets/fleet-tempo-interior.jpg.asset.json";
import sedan from "@/assets/fleet-sedan-front.jpg.asset.json";

const IMGS = [
  { src: tempo1.url, alt: "Force Tempo Traveller and sedan fleet" },
  { src: tempoInt.url, alt: "Luxury Tempo Traveller interior with push-back seats" },
  { src: tempoRear.url, alt: "Tempo Traveller rear view — emergency exit" },
  { src: sedan.url, alt: "Swift Dzire sedan for city and outstation" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Jai Maa Jwalpa Tour and Travel — Fleet & Trips" },
      { name: "description", content: "Real photos of our fleet, Tempo Traveller interiors and traveller journeys. Kotdwar-based tour operator." },
      { property: "og:title", content: "Gallery — Jai Maa Jwalpa" },
      { property: "og:description", content: "Fleet & journey photos." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-pro py-16"><h1 className="font-display text-4xl md:text-6xl font-semibold">Gallery</h1></div>
      </section>
      <section className="py-16">
        <div className="container-pro">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {IMGS.map((im, k) => (
              <button
                key={k}
                onClick={() => setOpen(k)}
                className={`relative overflow-hidden rounded-2xl bg-secondary ${k === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`}
              >
                <img src={im.src} alt={im.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </button>
            ))}

          </div>
        </div>
      </section>

      {open !== null && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm grid place-items-center p-4 cursor-zoom-out">
          <img src={IMGS[open].src} alt={IMGS[open].alt} className="max-h-[90vh] max-w-full rounded-xl shadow-2xl" />
        </div>
      )}
    </>
  );
}
