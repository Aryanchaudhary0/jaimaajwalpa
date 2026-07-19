import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BUSINESS, NAV, waLink } from "@/data/site";
import logo from "@/assets/logo-tiger-new.png";
import { FaWhatsapp, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border"
          : "glass border-b border-border/60"
      }`}
    >
      <div className="container-pro flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Jai Maa Jwalpa Tour and Travel logo"
            className="w-11 h-11 rounded-full ring-2 ring-accent/60 object-cover bg-primary"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg md:text-xl font-semibold text-primary">
              Jai Maa Jwalpa
            </span>
            <span className="block text-[10px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Tour &amp; Travel · Kotdwar
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={`tel:${BUSINESS.phonePrimaryDigits}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary"
          >
            <FaPhoneAlt className="text-primary" /> {BUSINESS.phonePrimary}
          </a>
          <a
            href={waLink("Hello Jai Maa Jwalpa, I would like to enquire about a trip.")}
            target="_blank"
            rel="noopener"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold hover:btn-gold-hover"
          >
            <FaWhatsapp /> Book Now
          </a>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-pro py-4 flex flex-col gap-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-2 rounded-md hover:bg-secondary"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <a href={`tel:${BUSINESS.phonePrimaryDigits}`} className="flex-1 text-center rounded-full border border-border px-4 py-2 text-sm">
                Call
              </a>
              <a href={waLink()} target="_blank" rel="noopener" className="flex-1 text-center btn-gold rounded-full px-4 py-2 text-sm font-semibold">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
