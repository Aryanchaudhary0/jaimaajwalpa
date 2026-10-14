import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ROUTES, BUSINESS, waLink } from "@/data/site";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaMapMarkedAlt,
  FaClock,
  FaRupeeSign,
} from "react-icons/fa";
import ogImage from "@/assets/fleet-tempo-sedan.jpg";

const BASE_URL = "https://jaimaajwalpa.in";
const OG_IMAGE_URL = `${BASE_URL}${ogImage}`;

export const Route = createFileRoute("/routes/$slug")({
  loader: ({ params }) => {
    const route = ROUTES.find((item) => item.slug === params.slug);

    if (!route) {
      throw notFound();
    }

    return { route };
  },

  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Route not found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const route = loaderData.route;
    const pageUrl = `${BASE_URL}/routes/${params.slug}`;

    return {
      meta: [
        { title: route.metaTitle },
        { name: "description", content: route.metaDescription },
        { name: "keywords", content: route.keywords.join(", ") },
        { property: "og:title", content: route.metaTitle },
        { property: "og:description", content: route.metaDescription },
        { property: "og:url", content: pageUrl },
        { property: "og:type", content: "website" },
        { property: "og:image", content: OG_IMAGE_URL },
        {
          property: "og:image:alt",
          content: "Jai Maa Jwalpa taxi and Tempo Traveller service",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: OG_IMAGE_URL },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: route.h1,
            serviceType: route.h1,
            url: pageUrl,
            description: route.metaDescription,
            ...(route.price
              ? {
                  offers: {
                    "@type": "Offer",
                    price: route.price.match(/₹\s?([\d,]+)/)?.[1]?.replace(/,/g, ""),
                    priceCurrency: "INR",
                    url: pageUrl,
                  },
                }
              : {}),
            provider: {
              "@type": "TravelAgency",
              name: BUSINESS.name,
              url: BASE_URL,
              telephone: BUSINESS.phonePrimary,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dhanesh Farm, Near Civil Court, Jhanda Chowk",
                addressLocality: "Kotdwar",
                addressRegion: "Uttarakhand",
                postalCode: "246149",
                addressCountry: "IN",
              },
            },
            areaServed: "Uttarakhand, India",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Taxi Services", item: `${BASE_URL}/services` },
              { "@type": "ListItem", position: 3, name: route.h1, item: pageUrl },
            ],
          }),
        },
      ],
    };
  },

  component: RouteLandingPage,
});

function RouteLandingPage() {
  const { route } = Route.useLoaderData();

  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-pro py-16 md:py-24">
          <nav className="mb-6 flex gap-2 text-xs opacity-80">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <span>›</span>
            <Link to="/packages" className="hover:text-accent">
              Routes &amp; Packages
            </Link>
            <span>›</span>
            <span className="text-white/90">{route.h1}</span>
          </nav>

          <h1 className="max-w-4xl font-display text-3xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
            {route.h1}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            {route.intro}
          </p>

          {(route.price || route.km || route.duration) && (
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {route.price && (
                <Pill icon={<FaRupeeSign />}>{route.price}</Pill>
              )}
              {route.km && <Pill icon={<FaMapMarkedAlt />}>{route.km}</Pill>}
              {route.duration && (
                <Pill icon={<FaClock />}>{route.duration}</Pill>
              )}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(
                `Hello Jai Maa Jwalpa, I'm interested in: ${route.h1}. Please share details.`,
              )}
              target="_blank"
              rel="noopener"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <FaWhatsapp /> WhatsApp for Quote
            </a>

            <a
              href={`tel:${BUSINESS.phonePrimaryDigits}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 glass-dark px-6 py-3 text-sm font-semibold"
            >
              <FaPhoneAlt /> {BUSINESS.phonePrimary}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-pro grid gap-10 lg:grid-cols-3">
          <article className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-luxe md:p-8">
              <h2 className="font-display text-2xl font-semibold text-primary">
                Why book this with Jai Maa Jwalpa
              </h2>

              <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                {route.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-emerald" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose prose-slate max-w-none">
              {route.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 text-[15px] leading-relaxed text-foreground/85"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-secondary/50 p-6">
              <h3 className="font-display text-lg font-semibold text-primary">
                Related routes &amp; packages
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {ROUTES.filter((item) => item.slug !== route.slug)
                  .slice(0, 8)
                  .map((item) => (
                    <Link
                      key={item.slug}
                      to="/routes/$slug"
                      params={{ slug: item.slug }}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs hover:border-accent"
                    >
                      {item.h1
                        .replace(/ — .*/, "")
                        .replace(/ Package.*/, "")}
                    </Link>
                  ))}
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <EnquiryForm prefilledDestination={route.h1} />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Pill({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 glass-dark px-3.5 py-1.5">
      <span className="text-accent">{icon}</span>
      {children}
    </span>
  );
}