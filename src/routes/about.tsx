import { createFileRoute, Link } from "@tanstack/react-router";
import { BUSINESS, waLink } from "@/data/site";
import { FaCheckCircle, FaWhatsapp, FaShieldAlt, FaClock, FaUsers, FaMountain } from "react-icons/fa";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Jai Maa Jwalpa Tour and Travel — Kotdwar" },
      { name: "description", content: "Kotdwar-based tour operator for Char Dham Yatra, Kedarnath & Badrinath tours, and comfortable Uttarakhand taxi service." },
      { property: "og:title", content: "About — Jai Maa Jwalpa Tour and Travel" },
      { property: "og:description", content: "Trusted Kotdwar-based Char Dham & Uttarakhand tour operator." },
      { property: "og:url", content: "https://jaimaajwalpa.in/about" },
    ],
    links: [{ rel: "canonical", href: "https://jaimaajwalpa.in/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-pro py-16 md:py-24">
          <h1 className="font-display text-4xl md:text-6xl font-semibold max-w-3xl leading-[1.05]">
            A Kotdwar-based travel company you can actually trust
          </h1>
          <p className="mt-5 max-w-3xl text-white/85 text-lg leading-relaxed">
            Planning a Char Dham Yatra should feel hassle-free — that's the idea behind Jai Maa Jwalpa Tour and Travel's luxury tempo traveller and cab services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-pro grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5 text-[15px] leading-relaxed text-foreground/85">
            <p>
              Jai Maa Jwalpa Tour and Travel is a trusted Kotdwar-based travel company offering comfortable, safe, and well-organized pilgrimage and tour services across Uttarakhand and nearby destinations. We specialize in Char Dham Yatra, Kedarnath and Badrinath tours, Yamunotri and Gangotri tours, and local Uttarakhand travel — Dehradun, Haridwar, Rishikesh, Mussoorie, Nainital, Jim Corbett, and Auli — ensuring a smooth and peaceful journey for every traveler.
            </p>
            <p>
              With a well-maintained fleet including sedans, Innova Crysta, and Tempo Travellers, we cater to families, groups, and yatri mandals of all sizes. Our experienced drivers, transparent pricing, and customer-focused service help us deliver reliable travel experiences every time.
            </p>
            <p>
              Whether it's a family, a couple, or a solo traveller, the fleet is built for safe, comfortable, reliable journeys to the holy destinations of Uttarakhand. Based in Kotdwar, the company focuses on safety, convenience, and affordability for pilgrims and travellers exploring from Kotdwar and nearby areas — letting customers focus on the spiritual experience while the travel logistics are handled.
            </p>

            <div className="rounded-2xl bg-primary text-primary-foreground p-6 mt-8">
              <h3 className="font-display text-xl font-semibold text-accent">Our Mission</h3>
              <p className="mt-2 text-white/90">
                To provide safe, comfortable, reliable, and affordable travel experiences that allow every customer to explore Uttarakhand with confidence and peace of mind.
              </p>
            </div>

            <div className="rounded-2xl border border-accent/40 bg-accent/10 p-6 mt-4">
              <h3 className="font-display text-xl font-semibold text-primary">24 × 7 Support</h3>
              <p className="mt-2 text-foreground/85">
                You can rely on our dedicated support team for round-the-clock assistance. Whether it's booking help, travel queries, or on-road support, we are always available to ensure a smooth, safe, and completely hassle-free travel experience.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            {[
              { icon: FaShieldAlt, title: "Safe & Verified Drivers" },
              { icon: FaClock, title: "24×7 Assistance" },
              { icon: FaUsers, title: "Family, Group & Yatri Mandal" },
              { icon: FaMountain, title: "Char Dham Specialists" },
            ].map((x) => (
              <div key={x.title} className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4">
                <div className="w-11 h-11 grid place-items-center rounded-xl bg-primary text-primary-foreground">
                  <x.icon />
                </div>
                <div>
                  <h4 className="font-semibold">{x.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Trusted by 16+ Google-reviewed travellers, 4.9 ★ rating.</p>
                </div>
              </div>
            ))}
            <a href={waLink()} target="_blank" rel="noopener" className="btn-gold w-full inline-flex justify-center items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
              <FaWhatsapp /> Chat with us
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}