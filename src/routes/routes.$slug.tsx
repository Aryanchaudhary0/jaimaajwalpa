import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ROUTES, BUSINESS, waLink } from "@/data/site";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaMapMarkedAlt, FaClock, FaRupeeSign } from "react-icons/fa";

export const Route = createFileRoute("/routes/$slug")({
  loader: ({ params }) => {
    const r = ROUTES.find((x) => x.slug === params.slug);
    if (!r) throw notFound();
    return { route: r };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Route not found" }, { name: "robots", content: "noindex" }] };
    const r = loaderData.route;
    return {
      meta: [
        { title: r.metaTitle },
        { name: "description", content: r.metaDescription },
        { name: "keywords", content: r.keywords.join(", ") },
        { property: "og:title", content: r.metaTitle },
        { property: "og:description", content: r.metaDescription },
        { property: "og:url", content: `/routes/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/routes/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: r.h1,
            provider: {
              "@type": "TravelAgency",
              name: BUSINESS.name,
              telephone: BUSINESS.phonePrimary,
              address: BUSINESS.address,
            },
            areaServed: "Uttarakhand, India",
            description: r.metaDescription,
          }),
        },
      ],
    };
  },
  component: RouteLandingPage,
});

function RouteLandingPage() {
  const { route: r } = Route.useLoaderData();
  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-pro py-16 md:py-24">
          <nav className="text-xs opacity-80 mb-6 flex gap-2">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span>›</span>
            <Link to="/packages" className="hover:text-accent">Routes &amp; Packages</Link>
            <span>›</span>
            <span className="text-white/90">{r.h1}</span>
          </nav>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold max-w-4xl leading-[1.05]">
            {r.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-white/85 text-base md:text-lg leading-relaxed">{r.intro}</p>

          {(r.price || r.km || r.duration) && (
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {r.price && <Pill icon={<FaRupeeSign />}>{r.price}</Pill>}
              {r.km && <Pill icon={<FaMapMarkedAlt />}>{r.km}</Pill>}
              {r.duration && <Pill icon={<FaClock />}>{r.duration}</Pill>}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(`Hello Jai Maa Jwalpa, I'm interested in: ${r.h1}. Please share details.`)}
              target="_blank"
              rel="noopener"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <FaWhatsapp /> WhatsApp for Quote
            </a>
            <a href={`tel:${BUSINESS.phonePrimaryDigits}`} className="inline-flex items-center gap-2 rounded-full glass-dark border border-white/30 px-6 py-3 text-sm font-semibold">
              <FaPhoneAlt /> {BUSINESS.phonePrimary}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-pro grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-luxe">
              <h2 className="font-display text-2xl font-semibold text-primary">Why book this with Jai Maa Jwalpa</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                {r.highlights.map((h: string) => (
                  <li key={h} className="flex items-start gap-2">
                    <FaCheckCircle className="mt-1 text-emerald shrink-0" /> <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose prose-slate max-w-none">
              {r.body.map((p: string, i: number) => (
                <p key={i} className="text-[15px] leading-relaxed text-foreground/85 mb-4">{p}</p>
              ))}
            </div>

            <div className="rounded-2xl bg-secondary/50 border border-border p-6">
              <h3 className="font-display text-lg font-semibold text-primary">Related routes &amp; packages</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {ROUTES.filter((x) => x.slug !== r.slug).slice(0, 8).map((x) => (
                  <Link key={x.slug} to="/routes/$slug" params={{ slug: x.slug }} className="rounded-full bg-card border border-border px-3 py-1.5 text-xs hover:border-accent">
                    {x.h1.replace(/ — .*/, "").replace(/ Package.*/, "")}
                  </Link>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <EnquiryForm prefilledDestination={r.h1} />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Pill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass-dark border border-white/20 px-3.5 py-1.5">
      <span className="text-accent">{icon}</span> {children}
    </span>
  );
}
