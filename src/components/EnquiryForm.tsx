import { useState } from "react";
import { BUSINESS, waLink } from "@/data/site";
import { FaWhatsapp } from "react-icons/fa";

const VEHICLES = ["Sedan (Dzire)", "Ertiga", "Innova Crysta", "Tempo Traveller 14", "Tempo Traveller 16", "Tempo Traveller 17+1"];
const PACKAGES = [
  "Char Dham Yatra (10D/9N)",
  "Do Dham (Kedarnath + Badrinath)",
  "Yamunotri + Gangotri",
  "Local Kotdwar Taxi",
  "Kotdwar → Delhi",
  "Kotdwar → Dehradun",
  "Kotdwar → Pauri",
  "Custom Tour",
];

export function EnquiryForm({ prefilledDestination }: { prefilledDestination?: string }) {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "Kotdwar",
    destination: prefilledDestination ?? "",
    date: "",
    passengers: "2",
    vehicle: VEHICLES[0],
    pkg: PACKAGES[0],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!data.name.trim()) err.name = "Please enter your name";
    if (!/^\+?\d[\d\s-]{7,}$/.test(data.phone)) err.phone = "Enter a valid phone number";
    if (!data.destination.trim()) err.destination = "Please enter a destination";
    if (!data.date) err.date = "Choose a travel date";
    setErrors(err);
    if (Object.keys(err).length) return;

    const msg = [
      "Hello Jai Maa Jwalpa Tour and Travel,",
      "I would like to book a trip.",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Pickup: ${data.pickup}`,
      `Destination: ${data.destination}`,
      `Travel Date: ${data.date}`,
      `Passengers: ${data.passengers}`,
      `Vehicle: ${data.vehicle}`,
      `Package: ${data.pkg}`,
      data.message ? `Message: ${data.message}` : null,
      "Please contact me with the details.",
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank");
  }

  const field = "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring";
  const label = "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5";

  return (
    <form onSubmit={submit} className="rounded-2xl bg-card p-6 md:p-8 shadow-luxe border border-border">
      <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary">Send an Enquiry</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill in the details — we'll respond on WhatsApp with a firm quote within minutes.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className={label}>Full Name *</label>
          <input className={field} value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className={label}>Phone / WhatsApp *</label>
          <input className={field} value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} placeholder="+91 …" />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label className={label}>Email</label>
          <input type="email" className={field} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        </div>
        <div>
          <label className={label}>Pickup Location</label>
          <input className={field} value={data.pickup} onChange={(e) => setData({ ...data, pickup: e.target.value })} />
        </div>
        <div>
          <label className={label}>Destination *</label>
          <input className={field} value={data.destination} onChange={(e) => setData({ ...data, destination: e.target.value })} placeholder="e.g. Char Dham Yatra" />
          {errors.destination && <p className="mt-1 text-xs text-destructive">{errors.destination}</p>}
        </div>
        <div>
          <label className={label}>Travel Date *</label>
          <input type="date" className={field} value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} />
          {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
        </div>
        <div>
          <label className={label}>Passengers</label>
          <input type="number" min={1} className={field} value={data.passengers} onChange={(e) => setData({ ...data, passengers: e.target.value })} />
        </div>
        <div>
          <label className={label}>Vehicle Type</label>
          <select className={field} value={data.vehicle} onChange={(e) => setData({ ...data, vehicle: e.target.value })}>
            {VEHICLES.map((v) => <option key={v}>{v}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className={label}>Tour Package</label>
          <select className={field} value={data.pkg} onChange={(e) => setData({ ...data, pkg: e.target.value })}>
            {PACKAGES.map((v) => <option key={v}>{v}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className={label}>Message</label>
          <textarea rows={3} className={field} value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} placeholder="Any preferences, hotel category, senior citizens, etc." />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button type="submit" className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:btn-gold-hover">
          <FaWhatsapp /> Send Enquiry on WhatsApp
        </button>
        <a
          href={`tel:${BUSINESS.phonePrimaryDigits}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
        >
          Call {BUSINESS.phonePrimary}
        </a>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Accepted payment methods: Cash · UPI / GPay · Bank Transfer. Advance booking amount confirms your reservation.
      </p>
    </form>
  );
}
