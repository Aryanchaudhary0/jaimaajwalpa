import { Link } from "@tanstack/react-router";
import { BUSINESS, ROUTES, waLink } from "@/data/site";
import logo from "@/assets/logo-tiger.png.asset.json";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaStar, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const FLEET = [
  "Ertiga", "Dzire", "Innova Crysta",
  "Tempo Traveller 14 Seater", "Tempo Traveller 16 Seater", "Tempo Traveller 17+1 Seater",
];

const PACKAGE_LINKS = [
  "kotdwar-to-vaishno-devi-temple",
  "dehradun-to-char-dham-yatra",
  "haridwar-to-char-dham-yatra",
  "kotdwar-to-char-dham-yatra",
  "delhi-to-char-dham-yatra",
  "kotdwar-to-pauri-garhwal",
  "kotdwar-to-kathmandu",
  "kotdwar-to-dehradun-taxi-service",
  "kotdwar-to-banaras",
  "kotdwar-to-ayodhya",
  "kotdwar-to-delhi-taxi-service",
];

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-pro py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Jai Maa Jwalpa logo" className="w-12 h-12 rounded-full ring-2 ring-accent/60" />
            <div>
              <div className="font-display text-lg font-semibold">Jai Maa Jwalpa</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Tour &amp; Travel</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            A trusted Kotdwar-based tour operator specialising in Char Dham Yatra, taxi service and comfortable Uttarakhand travel since day one.
          </p>
          <a
            href={BUSINESS.googleUrl}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold"
          >
            <FaStar /> {BUSINESS.rating} ★ · {BUSINESS.reviewCount}+ Google Reviews
          </a>
          <div className="mt-4 flex gap-3 opacity-80">
            <a href="#" aria-label="Facebook" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20"><FaInstagram /></a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-accent">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/fleet" className="hover:text-accent">Our Fleet</Link></li>
            <li><Link to="/packages" className="hover:text-accent">Destinations</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
            <li><Link to="/legal/privacy" className="hover:text-accent">Privacy Policy</Link></li>
            <li><Link to="/legal/terms" className="hover:text-accent">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-accent">Our Packages</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            {PACKAGE_LINKS.map((slug) => {
              const r = ROUTES.find((x) => x.slug === slug);
              if (!r) return null;
              return (
                <li key={slug}>
                  <Link to="/routes/$slug" params={{ slug }} className="hover:text-accent">
                    {r.h1.replace(/ — .*/, "").replace(/ Package.*/, " Package")}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-accent">Our Fleet</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            {FLEET.map((f) => (
              <li key={f}><Link to="/fleet" className="hover:text-accent">{f}</Link></li>
            ))}
          </ul>

          <h4 className="mt-6 text-sm uppercase tracking-widest text-accent">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-accent shrink-0" /> {BUSINESS.address}</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-accent" /> <a href={`tel:${BUSINESS.phonePrimaryDigits}`}>{BUSINESS.phonePrimary}</a></li>
            <li className="flex items-center gap-2"><FaWhatsapp className="text-accent" /> <a href={waLink()} target="_blank" rel="noopener">WhatsApp</a></li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-accent" /> <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pro py-5 text-xs opacity-70 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Jai Maa Jwalpa Tour and Travel. All rights reserved.</p>
          <p>Kotdwar, Uttarakhand · GSTIN available on request</p>
        </div>
      </div>
    </footer>
  );
}
