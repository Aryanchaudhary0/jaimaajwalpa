import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS } from "@/data/site";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Jai Maa Jwalpa Tour and Travel" },
      { name: "description", content: "Privacy Policy for Jai Maa Jwalpa Tour and Travel — how we collect, use and protect your information." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: "https://jaimaajwalpa.in/legal/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://jaimaajwalpa.in/legal/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-pro max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-primary">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-foreground/85">
          <p>
            {BUSINESS.name} ("we", "us", "our") operates {BUSINESS.domain} and provides taxi and tour
            services in Uttarakhand. This Privacy Policy explains how we collect, use and protect
            information you share with us when you use our website or book a service.
          </p>

          <div>
            <h2 className="font-display text-xl font-semibold text-primary">Information We Collect</h2>
            <p className="mt-2">
              When you fill out our enquiry form, call, or message us on WhatsApp, we may collect your
              name, phone number, email address, travel dates, pickup/drop location and any other
              details you choose to share to help us plan and confirm your booking.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-primary">How We Use Your Information</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>To respond to your enquiry and confirm bookings</li>
              <li>To coordinate pickup, drop and itinerary details with our drivers</li>
              <li>To send booking confirmations and updates via call, SMS or WhatsApp</li>
              <li>To improve our services based on feedback</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-primary">Sharing of Information</h2>
            <p className="mt-2">
              We do not sell your personal information. Your details are shared only with our drivers
              and staff as needed to fulfil your booking, and are not passed to third parties for
              marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-primary">Data Security</h2>
            <p className="mt-2">
              We take reasonable steps to protect the information you share with us. However, no method
              of transmission over the internet or WhatsApp is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-primary">Contact Us</h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy, contact us at{" "}
              <a href={`tel:${BUSINESS.phonePrimaryDigits}`} className="text-primary underline underline-offset-4">{BUSINESS.phonePrimary}</a>{" "}
              or{" "}
              <a href={`mailto:${BUSINESS.email}`} className="text-primary underline underline-offset-4">{BUSINESS.email}</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}