import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ROUTES } from "@/data/site";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          { p: "/", pri: "1.0" },
          { p: "/about", pri: "0.7" },
          { p: "/services", pri: "0.9" },
          { p: "/packages", pri: "0.9" },
          { p: "/fleet", pri: "0.8" },
          { p: "/gallery", pri: "0.6" },
          { p: "/contact", pri: "0.7" },
          ...ROUTES.map((r) => ({ p: `/routes/${r.slug}`, pri: "0.85" })),
        ];
        const urls = paths.map(
          (u) =>
            `  <url>\n    <loc>${BASE_URL}${u.p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${u.pri}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
