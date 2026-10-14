import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { BUSINESS } from "@/data/site";
import ogImage from "@/assets/fleet-tempo-sedan.webp";

const SITE_URL = `https://${BUSINESS.domain}`;
const OG_IMAGE_URL = `${SITE_URL}${ogImage}`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="btn-gold inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error | unknown;
  reset: () => void;
}) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-gold rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-input px-5 py-2.5 text-sm font-semibold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "TaxiService", "LocalBusiness"],
  name: BUSINESS.name,
  image: OG_IMAGE_URL,
  telephone: BUSINESS.phonePrimary,
  email: BUSINESS.email,
  url: SITE_URL,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dhanesh Farm, Near Civil Court, Jhanda Chowk",
    addressLocality: "Kotdwar",
    addressRegion: "Uttarakhand",
    postalCode: "246149",
    addressCountry: "IN",
  },
  areaServed: [
    "Kotdwar",
    "Delhi",
    "Dehradun",
    "Haridwar",
    "Rishikesh",
    "Pauri Garhwal",
    "Char Dham",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
  },
  openingHours: "Mo-Su 00:00-23:59",
};

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jai Maa Jwalpa | Kotdwar Taxi & Char Dham Yatra" },
      {
        name: "description",
        content:
          "Kotdwar taxi service & Char Dham Yatra packages. Sedan, Innova & Tempo Traveller. 4.9★ on Google.",
      },
      { name: "author", content: "Jai Maa Jwalpa Tour and Travel" },
      {
        name: "google-site-verification",
        content: "bm5Vy9gwVvSVPDdXo1-eER5BQ9M9rYQnGmEaJ4V-4Fg",
      },
      { name: "theme-color", content: "#1a2b6d" },
      {
        property: "og:site_name",
        content: "Jai Maa Jwalpa Tour and Travel",
      },
      {
        property: "og:title",
        content: "Jai Maa Jwalpa | Kotdwar Taxi & Char Dham",
      },
      {
        property: "og:description",
        content:
          "Kotdwar tour operator. Char Dham from ₹19,500. Tempo Travellers, sedans & SUVs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE_URL },
      {
        property: "og:image:alt",
        content: "Jai Maa Jwalpa Tempo Traveller for Uttarakhand travel",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}