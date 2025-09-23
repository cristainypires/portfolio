// src/app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

// Força o sitemap a ser gerado estaticamente no build
export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://cristianypires.cv";
  const pages = ["", "/about", "/projects", "/contact"]; // todas as páginas que quer indexar

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
