import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS, waLink } from "@/data/site";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FaMapMarkedAlt, FaPhoneAlt, FaWhatsapp, FaClock, FaEnvelope } from "react-icons/fa";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Jai Maa Jwalpa Tour and Travel, Kotdwar" },
      { name: "description", content: "Call, WhatsApp or email Jai Maa Jwalpa Tour and Travel, Kotdwar. Address: Dhanesh Farm, Near Civil Court, Jhanda Chowk, Kotdwar, Uttarakhand 246149." },
      { property: "og:title", content: "Contact — Jai Maa Jwalpa" },
      { property: "og:description", content: "Book your Uttarakhand journey. 24×7 support." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-pro py-16 md:py-24">
          <h1 className="font-display text-4xl md:text-6xl font-semibold">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-white/85 text-lg">We reply on WhatsApp within minutes — 24 × 7.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-pro grid gap-8 lg:grid-cols-2">
          <EnquiryForm />
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-luxe">
              <h3 className="font-display text-xl font-semibold text-primary">Reach us directly</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3"><FaMapMarkedAlt className="mt-1 text-accent" /><span>{BUSINESS.address}<br /><span className="text-xs text-muted-foreground">Plus Code: {BUSINESS.plusCode}</span></span></li>
                <li className="flex items-center gap-3"><FaPhoneAlt className="text-accent" /><a href={`tel:${BUSINESS.phonePrimaryDigits}`} className="font-medium">{BUSINESS.phonePrimary}</a></li>
                <li className="flex items-center gap-3"><FaPhoneAlt className="text-accent" /><a href={`tel:${BUSINESS.phoneSecondaryDigits}`}>{BUSINESS.phoneSecondary}</a></li>
                <li className="flex items-center gap-3"><FaWhatsapp className="text-emerald" /><a href={waLink()} target="_blank" rel="noopener" className="font-medium">WhatsApp Chat</a></li>
                <li className="flex items-center gap-3"><FaEnvelope className="text-accent" /><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
                <li className="flex items-center gap-3"><FaClock className="text-accent" />{BUSINESS.hours}</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border aspect-[16/10]">
              <iframe src={BUSINESS.mapsEmbed} title="Jai Maa Jwalpa on Google Maps" width="100%" height="100%" loading="lazy" className="border-0" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
