import { useEffect, useState } from "react";
import { BUSINESS, waLink } from "@/data/site";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 flex flex-col gap-3">
      <a
        href={waLink("Hello Jai Maa Jwalpa, I would like to book a trip.")}
        target="_blank"
        rel="noopener"
        className="w-14 h-14 grid place-items-center rounded-full bg-emerald text-white shadow-luxe hover:scale-105 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
      <a
        href={`tel:${BUSINESS.phonePrimaryDigits}`}
        className="w-14 h-14 grid place-items-center rounded-full bg-primary text-primary-foreground shadow-luxe hover:scale-105 transition"
        aria-label="Call now"
      >
        <FaPhoneAlt className="text-xl" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-11 h-11 grid place-items-center rounded-full glass shadow-luxe"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
