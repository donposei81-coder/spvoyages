import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://spvoyages.com";
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/test" },
    sitemap: `${base}/sitemap.xml`,
  };
}
