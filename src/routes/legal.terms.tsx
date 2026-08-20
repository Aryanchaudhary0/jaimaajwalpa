import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS } from "@/data/site";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Jai Maa Jwalpa Tour and Travel" },
      { name: "description", content: "Terms and Conditions for booking taxi services and tour packages with Jai Maa Jwalpa Tour and Travel." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: "https://jaimaajwalpa.in/legal/terms" },
    ],
    links: [{ rel: "canonical", href: "https://jaimaajwalpa.in/legal/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-pro max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-primary">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-foreground/85">
          <p>
            These Terms &amp; Conditions govern your use of {BUSINESS.name}'s taxi and tour booking
            services. By booking with us, you agree to the terms below.
          </p>

          <div>
            <h2 className="font-display text-xl font-semibold text-primary">Bookings</h2>
            <p className="mt-2">
              Bookings can be made by phone, WhatsApp or through the enquiry form on this website. Fares
              shared during enquiry are indicative and confirmed before the trip begins. Prices may vary
              based on season, vehicle type, exact pickup point and route conditions.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-primary">Advance Payment &amp; Cancellation</h2>
            <p className="mt-2">
              For multi-day tour packages such as Char Dham Yatra, an advance booking amount is required
              to confirm your reservation. This advance is non-refundable if the booking is cancelled.
              Please confirm final cancellation terms with our team at the time of booking.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-primary">Traveller Responsibilities</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>A valid Aadhaar card is mandatory for Char Dham Yatra bookings</li>
              <li>Travellers should carry personal medicines, weather-appropriate clothing and identification</li>
              <li>Pony, palki, helicopter charges, first-day lunch and personal expenses are not included in package pricing unless stated otherwise</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-primary">Vehicle &amp; Driver Conduct</h2>
            <p className="mt-2">
              We provide well-maintained vehicles and experienced, background-verified drivers. In case
              of unforeseen vehicle issues, we will make reasonable efforts to arrange a suitable
              replacement with minimal delay.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-primary">Liability</h2>
            <p className="mt-2">
              {BUSINESS.name} is not liable for delays caused by weather, road closures, landslides or
              other conditions beyond our control, which are common on Himalayan hill routes. We will
              make every reasonable effort to keep you informed and adjust plans where possible.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-primary">Contact Us</h2>
            <p className="mt-2">
              For questions about these Terms, contact us at{" "}
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