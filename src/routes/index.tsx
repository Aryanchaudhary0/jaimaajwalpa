import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BUSINESS, PACKAGES, DESTINATIONS, TESTIMONIALS, FAQS, ROUTES, waLink } from "@/data/site";
import { EnquiryForm } from "@/components/EnquiryForm";
import tempo1 from "@/assets/fleet-tempo-sedan.webp";
import tempoRear from "@/assets/fleet-tempo-rear.webp";
import tempoInt from "@/assets/fleet-tempo-interior.webp";
import sedan from "@/assets/fleet-sedan-front.webp";
import innova from "@/assets/fleet-innova.webp";
import ertiga from "@/assets/fleet-ertiga.webp";
import {
  FaStar, FaWhatsapp, FaPhoneAlt, FaShieldAlt, FaClock, FaMapMarkedAlt, FaUserTie,
  FaCarSide, FaRoute, FaMountain, FaPrayingHands, FaCheckCircle, FaChevronDown,
} from "react-icons/fa";

const HERO_SLIDES = [
  { img: tempo1, title: "Luxury Tempo Traveller for Char Dham", sub: "14 / 16 / 17+1 seater with push-back seats & AC" },
  { img: tempoInt, title: "Comfort you can feel", sub: "Push-back seats, curtains, LED lighting, ample luggage" },
  { img: sedan, title: "Sedan cabs from ₹3,500", sub: "Kotdwar → Dehradun, Pauri, Delhi & more" },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const REVIEW_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
  },
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
    reviewBody: t.text,
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kotdwar Taxi & Char Dham Yatra | Jai Maa Jwalpa" },
      { name: "description", content: "Book Kotdwar taxi service & Char Dham Yatra packages. Sedan, Innova & Tempo Traveller. 4.9★ on Google." },
      { property: "og:title", content: "Kotdwar Taxi & Char Dham Yatra | Jai Maa Jwalpa" },
      { property: "og:description", content: "Trusted Kotdwar tour operator. Char Dham from ₹19,500." },
      { property: "og:url", content: "https://jaimaajwalpa.in/" },
    ],
    links: [{ rel: "canonical", href: "https://jaimaajwalpa.in/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(REVIEW_JSONLD) },
    ],
  }),
  component: Home,
});
function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <FeaturedPackages />
      <CharDhamItinerary />
      <Fleet />
      <WhyUs />
      <Routes />
      <DestinationsGrid />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ContactBlock />
    </>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative overflow-hidden hero-gradient text-white">
      <div className="absolute inset-0">
        {HERO_SLIDES.map((s, k) => (
          <div
            key={k}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === k ? 0.45 : 0 }}
          >
            <img
              src={s.img}
              alt={s.title}
              width={1920}
              height={1080}
              {...(k === 0 ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/80" />
      </div>

      <div className="relative container-pro pt-16 pb-24 md:pt-24 md:pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-widest">
            <FaMapMarkedAlt className="text-accent" /> Kotdwar · Uttarakhand
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-4xl">
           Reliable Taxi Service in Kotdwar with{" "}
            <span className="text-gold-gradient">Comfort, Safety &amp; Trust</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
            Reliable taxi services and customised tour packages for Char Dham, hill stations,
            family vacations, corporate travel, and local sightseeing — from a trusted
            Kotdwar-based operator.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#enquiry" className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:btn-gold-hover">
              Book Your Trip
            </a>
            <a
              href={waLink("Hello Jai Maa Jwalpa, I'd like to enquire about a trip.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full glass-dark border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <FaWhatsapp className="text-emerald-300" /> WhatsApp Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-xs">
            <TrustPill icon={<FaStar />}>4.9 ★ Google (16+ Reviews)</TrustPill>
            <TrustPill icon={<FaShieldAlt />}>Licensed Tour Operator</TrustPill>
            <TrustPill icon={<FaUserTie />}>Professional Drivers</TrustPill>
            <TrustPill icon={<FaClock />}>24 × 7 Support</TrustPill>
          </div>
        </motion.div>

        <div className="absolute right-6 bottom-8 hidden md:flex gap-1.5">
          {HERO_SLIDES.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${i === k ? "bg-accent w-8" : "bg-white/40 w-3"}`}
              aria-label={`Slide ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustPill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass-dark border border-white/20 px-3.5 py-1.5 text-white">
      <span className="text-accent">{icon}</span>{children}
    </span>
  );
}

function TrustBar() {
  const items = [
    { k: "9+", v: "Years serving pilgrims" },
    { k: "16+", v: "Google reviews · 4.9★" },
    { k: "50+", v: "Fleet vehicles &amp; partners" },
    { k: "24×7", v: "Support &amp; on-road help" },
  ];
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="container-pro py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.k} className="text-center">
            <div className="font-display text-3xl md:text-4xl font-semibold text-primary">{it.k}</div>
            <div
              className="mt-1 text-xs md:text-sm text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: it.v }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const svcs: { icon: typeof FaCarSide; title: string; body: string; badge?: string }[] = [
    { icon: FaCarSide, title: "Local Taxi", body: "Kotdwar city, Sidhbali, Kanvashram sightseeing" },
    { icon: FaRoute, title: "Outstation Taxi", body: "Delhi, Dehradun, Haridwar, Rishikesh, Pauri" },
    { icon: FaRoute, title: "Kotdwar ↔ Delhi Daily Service", body: "Daily scheduled shared & private cabs — both ways", badge: "Daily" },
    { icon: FaPrayingHands, title: "Char Dham Yatra", body: "Complete 10-day tempo traveller circuit" },
    { icon: FaMountain, title: "Hill Station Tours", body: "Mussoorie, Nainital, Auli, Jim Corbett" },
    { icon: FaUserTie, title: "Corporate & Wedding", body: "Reliable transport for functions & events" },
    { icon: FaCarSide, title: "Airport / Railway", body: "Dehradun, Delhi IGI, Haridwar, Kotdwar" },
  ];
  return (
    <Section eyebrow="Taxi Services" title="Every kind of Uttarakhand journey" id="services">
      <div className="grid gap-4 md:grid-cols-3">
        {svcs.map((s) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-border bg-card p-6 shadow-luxe hover:border-accent transition"
          >
            {s.badge && (
              <span className="absolute top-4 right-4 rounded-full btn-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest">
                {s.badge}
              </span>
            )}
            <div className="w-12 h-12 grid place-items-center rounded-xl bg-primary text-primary-foreground">
              <s.icon />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function FeaturedPackages() {
  return (
    <Section eyebrow="Tour Packages" title="Best Char Dham & Yatra packages" id="packages">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {PACKAGES.map((p) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl border p-6 shadow-luxe bg-card ${p.featured ? "border-accent ring-2 ring-accent/30" : "border-border"}`}
          >
            {p.featured && (
              <span className="absolute -top-3 left-6 rounded-full btn-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Most Popular</span>
            )}
            <h3 className="font-display text-lg font-semibold text-primary">{p.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{p.duration}</p>
            <p className="mt-4 text-sm">{p.covers}</p>
            <p className="mt-2 text-xs text-muted-foreground">{p.incl}</p>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="font-display text-2xl font-bold text-foreground">{p.price}</span>
            </div>
            <div className="mt-5 flex gap-2">
              <Link to="/routes/$slug" params={{ slug: p.slug }} className="flex-1 text-center rounded-full border border-border px-3 py-2 text-xs font-semibold hover:bg-secondary">
                Full Itinerary
              </Link>
              <a href="#enquiry" className="flex-1 text-center btn-gold rounded-full px-3 py-2 text-xs font-semibold">Enquire</a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

const ITINERARY = [
  ["Day 1", "Haridwar → Barkot (220 km / 8–9 hrs)", "Via Mussoorie & Kempty Falls. Overnight at Barkot."],
  ["Day 2", "Barkot → Yamunotri → Barkot", "6 km trek from Janki Chatti. Darshan of Maa Yamuna."],
  ["Day 3", "Barkot → Uttarkashi (100 km / 4 hrs)", "Vishwanath Temple darshan. Overnight at Uttarkashi."],
  ["Day 4", "Uttarkashi → Gangotri → Uttarkashi (200 km / 8 hrs)", "Harsil Valley scenery, Ganga darshan."],
  ["Day 5", "Uttarkashi → Guptkashi / Fata (220 km / 9 hrs)", "Overnight at Guptkashi/Fata."],
  ["Day 6", "Guptkashi → Kedarnath", "18 km trek from Gaurikund. Night stay at Kedarnath."],
  ["Day 7", "Kedarnath → Guptkashi / Fata", "Return trek, overnight at Guptkashi/Fata."],
  ["Day 8", "Guptkashi → Pipalkoti (150 km / 6 hrs)", "Via Rudraprayag & Karnaprayag."],
  ["Day 9", "Pipalkoti → Badrinath → Pipalkoti (80 km / 3 hrs)", "Tapt Kund, Mana Village, Bheem Pul."],
  ["Day 10", "Pipalkoti → Haridwar (250 km / 9 hrs)", "Devprayag darshan. Yatra concludes."],
];

function CharDhamItinerary() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="10 Days / 9 Nights" title="Char Dham Yatra — Day-wise Itinerary" id="itinerary">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-5 md:p-7 shadow-luxe">
          <div className="divide-y divide-border">
            {ITINERARY.map(([day, title, desc], k) => (
              <button
                key={day}
                onClick={() => setOpen(open === k ? null : k)}
                className="w-full text-left py-4 group"
              >
                <div className="flex items-center gap-4">
                  <span className="shrink-0 w-16 rounded-full bg-primary text-primary-foreground text-xs font-bold text-center py-1.5">{day}</span>
                  <span className="flex-1 font-medium">{title}</span>
                  <FaChevronDown className={`text-muted-foreground transition-transform ${open === k ? "rotate-180" : ""}`} />
                </div>
                {open === k && <p className="mt-3 pl-20 text-sm text-muted-foreground">{desc}</p>}
              </button>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-2 space-y-5">
          <div className="rounded-2xl bg-primary text-primary-foreground p-6 shadow-luxe">
            <p className="text-xs uppercase tracking-widest opacity-70">Featured Package</p>
            <p className="mt-1 font-display text-3xl font-semibold">₹19,500 <span className="text-base opacity-70">/ person</span></p>
            <p className="mt-2 text-sm opacity-85">10 Days · 9 Nights · Transport + Hotel + Breakfast + Dinner</p>
            <a href="#enquiry" className="mt-5 inline-flex btn-gold rounded-full px-5 py-2.5 text-sm font-semibold">Ask for Full Itinerary</a>
          </div>
          <InclCard title="Inclusions" items={["Transport (as per selected vehicle)", "Hotel stay: 4/6-bed sharing", "Breakfast & dinner daily", "Experienced Char Dham driver"]} />
          <InclCard title="Not Included" items={["Pony / palki / helicopter", "First day lunch", "Personal expenses & tips"]} tone="muted" />
          <div className="rounded-2xl border border-border bg-secondary/40 p-5 text-xs text-muted-foreground">
            <p><strong>Traveller notes:</strong> Carry torch, bedding, blankets, raincoat & regular medicines. Aadhaar card is mandatory. Advance booking amount is non-refundable if cancelled.</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function InclCard({ title, items, tone }: { title: string; items: string[]; tone?: "muted" }) {
  return (
    <div className={`rounded-2xl border border-border p-5 ${tone === "muted" ? "bg-secondary/30" : "bg-card"} shadow-luxe`}>
      <h4 className="font-display font-semibold text-primary">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <FaCheckCircle className="mt-1 text-emerald shrink-0" /> <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type FleetCard = { name: string; images: { src: string; caption: string }[]; seats: string; ac: string; luggage: string; best: string };
const FLEET_CARDS: FleetCard[] = [
  {
    name: "Force Tempo Traveller (14 / 16 / 17+1)",
    images: [
      { src: tempo1, caption: "Exterior" },
      { src: tempoInt, caption: "Interior · push-back seats" },
      { src: tempoRear, caption: "Rear view · emergency exit" },
    ],
    seats: "14 / 16 / 17+1",
    ac: "AC",
    luggage: "Roof + rear · push-back",
    best: "Char Dham, weddings, group tours",
  },
  { name: "Sedan (Swift Dzire)", images: [{ src: sedan, caption: "Front" }], seats: "4", ac: "AC", luggage: "3 bags", best: "Kotdwar → Delhi / Dehradun / Pauri" },
  { name: "Innova Crysta", images: [{ src: innova, caption: "Exterior" }], seats: "6+1", ac: "AC", luggage: "4 bags", best: "Premium family travel" },
  { name: "Maruti Ertiga", images: [{ src: ertiga, caption: "Exterior" }], seats: "6+1", ac: "AC", luggage: "3 bags", best: "Small family / corporate" },
];

function VehicleCarousel({ images, name }: { images: { src: string; caption: string }[]; name: string }) {
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
    <Section eyebrow="Our Fleet" title="Vehicles built for hills & long distance" id="fleet">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FLEET_CARDS.map((v) => (
          <article key={v.name} className="rounded-2xl overflow-hidden border border-border bg-card shadow-luxe">
            <VehicleCarousel images={v.images} name={v.name} />
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold">{v.name}</h3>
              <dl className="mt-3 grid grid-cols-2 gap-y-2 text-xs">
                <dt className="text-muted-foreground">Seats</dt><dd>{v.seats}</dd>
                <dt className="text-muted-foreground">AC</dt><dd>{v.ac}</dd>
                <dt className="text-muted-foreground">Luggage</dt><dd>{v.luggage}</dd>
                <dt className="text-muted-foreground">Best for</dt><dd>{v.best}</dd>
              </dl>
              <a href="#enquiry" className="mt-4 inline-flex w-full justify-center btn-gold rounded-full px-4 py-2 text-xs font-semibold">Enquire</a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}


function WhyUs() {
  const items = [
    ["Verified Drivers", "Background-checked & experienced hill route drivers"],
    ["Clean Vehicles", "Sanitised & mechanically inspected before every trip"],
    ["GPS Enabled", "Live-tracking for family peace of mind"],
    ["24 × 7 Support", "Round-the-clock booking & on-road assistance"],
    ["Transparent Pricing", "No hidden charges. Toll & parking shared upfront"],
    ["On-Time Pickup", "We arrive early, not late"],
    ["Comfortable Travel", "Push-back seats, AC, curtains, mobile charging"],
    ["Local Tour Experts", "Kotdwar operator with deep Char Dham experience"],
    ["Custom Packages", "Senior-citizen friendly, custom durations, custom hotels"],
    ["Family-Friendly", "Trusted by families, couples, corporate groups"],
  ];
  return (
    <Section eyebrow="Why Choose Us" title="A trusted partner for Uttarakhand travel">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {items.map(([t, d]) => (
          <div key={t} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4">
            <FaCheckCircle className="mt-1 text-emerald shrink-0" />
            <div>
              <h4 className="font-semibold">{t}</h4>
              <p className="text-xs text-muted-foreground">{d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-4 gap-4">
        {["Contact Us", "Choose Package", "Confirm Booking", "Enjoy Your Journey"].map((s, i) => (
          <div key={s} className="rounded-2xl bg-secondary/60 p-6 relative">
            <span className="font-display text-5xl font-semibold text-accent/70">0{i + 1}</span>
            <p className="mt-2 font-semibold">{s}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const ROUTE_PRICING = [
  { r: "Kotdwar → Delhi", p: "₹4,500", slug: "kotdwar-to-delhi-taxi-service" },
  { r: "Kotdwar → Dehradun", p: "₹3,500", slug: "kotdwar-to-dehradun-taxi-service" },
  { r: "Kotdwar → Pauri", p: "₹3,500", slug: "kotdwar-to-pauri-taxi-service" },
  { r: "Delhi → Kotdwar", p: "₹4,500", slug: "delhi-to-kotdwar-taxi-service" },
  { r: "Sharing Cab to Delhi", p: "₹1,000 / person", slug: "kotdwar-to-delhi-taxi-service" },
];

function Routes() {
  return (
    <Section eyebrow="Popular Routes" title="Transparent fares from Kotdwar" id="routes">
      <div className="rounded-2xl overflow-hidden border border-border shadow-luxe">
        <table className="w-full text-sm">
          <thead className="bg-primary text-primary-foreground text-left">
            <tr>
              <th className="p-4 font-semibold">Route</th>
              <th className="p-4 font-semibold">Starting Fare</th>
              <th className="p-4 font-semibold text-right">Book</th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {ROUTE_PRICING.map((r) => (
              <tr key={r.r} className="hover:bg-secondary/40">
                <td className="p-4 font-medium">{r.r}</td>
                <td className="p-4 text-accent-foreground"><span className="font-display font-semibold text-lg text-primary">{r.p}</span></td>
                <td className="p-4 text-right">
                  <Link to="/routes/$slug" params={{ slug: r.slug }} className="text-xs font-semibold text-primary underline underline-offset-4">Details →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Prices may vary based on season, vehicle type and exact pickup point — confirm on enquiry.</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {ROUTES.map((r) => (
          <Link key={r.slug} to="/routes/$slug" params={{ slug: r.slug }} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs hover:border-accent hover:text-primary">
            {r.h1.replace(/ — .*/, "").replace(/ Package.*/, "")}
          </Link>
        ))}
      </div>
    </Section>
  );
}

function DestinationsGrid() {
  return (
    <Section eyebrow="Destinations" title="Every corner of Uttarakhand & beyond">
      <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-secondary/60 via-background to-secondary/40 p-6 md:p-10">
        {/* Stylised Uttarakhand map graphic (decorative background) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 600 400"
          className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.12] mix-blend-multiply"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="ridge" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.32 0.11 250)" />
              <stop offset="100%" stopColor="oklch(0.58 0.13 165)" />
            </linearGradient>
          </defs>
          <path
            d="M60,260 L110,210 L150,240 L190,180 L230,220 L270,150 L320,200 L370,140 L420,190 L470,150 L520,210 L540,260 L500,300 L440,310 L380,290 L320,320 L260,300 L200,330 L140,310 L90,320 Z"
            fill="url(#ridge)"
            stroke="oklch(0.32 0.11 250)"
            strokeWidth="1.5"
          />
          {/* Destination markers */}
          {[[120,240],[190,200],[260,180],[320,210],[370,170],[420,205],[470,180],[300,270],[220,280],[380,290],[150,300]].map(([x,y],k)=>(
            <g key={k}>
              <circle cx={x} cy={y} r="4" fill="oklch(0.78 0.17 68)" />
              <circle cx={x} cy={y} r="9" fill="none" stroke="oklch(0.78 0.17 68)" strokeWidth="1" opacity="0.5" />
            </g>
          ))}
        </svg>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {DESTINATIONS.map((d) => (
            <div key={d} className="group rounded-2xl bg-card/90 backdrop-blur border border-border p-4 shadow-luxe flex flex-col">
              <div className="flex items-center gap-2">
                <FaMountain className="text-accent" />
                <h3 className="font-display text-base font-semibold text-primary">{d}</h3>
              </div>
              <span className="mt-2 inline-flex self-start rounded-full bg-emerald/10 text-emerald border border-emerald/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest">
                Tour Available
              </span>
              <Link
                to="/packages"
                className="mt-3 text-xs font-semibold text-primary hover:text-accent inline-flex items-center gap-1"
              >
                Explore Package →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Gallery() {
  const imgs = [tempo1, tempoInt, sedan, tempoRear];
  return (
    <Section eyebrow="Gallery" title="Real fleet, real journeys">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {imgs.map((src, k) => (
          <div key={k} className={`relative overflow-hidden rounded-2xl bg-secondary ${k === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`}>
            <img src={src} alt="Jai Maa Jwalpa fleet" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
          </div>
        ))}
      </div>
    </Section>
  );
}


function Testimonials() {
  return (
    <Section eyebrow="Testimonials" title="What travellers say">
      <div className="grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="rounded-2xl bg-card border border-border p-6 shadow-luxe">
            <div className="flex text-accent">
              {Array.from({ length: t.rating }).map((_, i) => <FaStar key={i} />)}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed">"{t.text}"</blockquote>
            <figcaption className="mt-4 text-sm font-semibold">— {t.name}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href={BUSINESS.googleUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-accent">
          <FaStar className="text-accent" /> 4.9 ★ on Google · 16+ Reviews
        </a>
      </div>
    </Section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="FAQ" title="Answers before you book">
      <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card divide-y divide-border shadow-luxe">
        {FAQS.map((f, k) => (
          <button key={f.q} onClick={() => setOpen(open === k ? null : k)} className="w-full text-left p-5">
            <div className="flex items-center justify-between gap-4">
              <span className="font-semibold">{f.q}</span>
              <FaChevronDown className={`text-muted-foreground transition-transform ${open === k ? "rotate-180" : ""}`} />
            </div>
            {open === k && <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>}
          </button>
        ))}
      </div>
    </Section>
  );
}

function ContactBlock() {
  return (
    <section id="enquiry" className="scroll-mt-24">
      <Section eyebrow="Contact & Booking" title="Book your Uttarakhand journey">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <EnquiryForm />
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-luxe">
              <h3 className="font-display text-xl font-semibold text-primary">Reach us directly</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3"><FaMapMarkedAlt className="mt-1 text-accent" /><span>{BUSINESS.address}<br /><span className="text-xs text-muted-foreground">Plus Code: {BUSINESS.plusCode}</span></span></li>
                <li className="flex items-center gap-3"><FaPhoneAlt className="text-accent" /><a href={`tel:${BUSINESS.phonePrimaryDigits}`} className="font-medium">{BUSINESS.phonePrimary}</a> · <a href={`tel:${BUSINESS.phoneSecondaryDigits}`} className="text-muted-foreground">{BUSINESS.phoneSecondary}</a></li>
                <li className="flex items-center gap-3"><FaWhatsapp className="text-emerald" /><a href={waLink()} target="_blank" rel="noopener" className="font-medium">WhatsApp Chat</a></li>
                <li className="flex items-center gap-3"><FaClock className="text-accent" /><span>{BUSINESS.hours}</span></li>
              </ul>
              <div className="mt-5 rounded-xl bg-secondary/50 p-4 text-xs">
                <p className="font-semibold text-foreground">Accepted Payment Methods</p>
                <p className="mt-1 text-muted-foreground">Cash · UPI / GPay · Bank Transfer</p>
                <p className="mt-2 text-muted-foreground">A confirmed UPI / GPay QR for advance booking can be shared on WhatsApp on request.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-luxe aspect-[16/10]">
              <iframe
                src={BUSINESS.mapsEmbed}
                title="Jai Maa Jwalpa location on Google Maps"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

function Section({
  eyebrow,
  title,
  id,
  children,
}: {
  eyebrow: string;
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="container-pro">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
