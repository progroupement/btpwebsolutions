import type { MetadataRoute } from "next";
import { blogPosts, siteConfig } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/a-propos",
    "/services",
    "/realisations",
    "/contact",
    "/blog",
    "/diagnostic",
    "/offre",
    "/merci"
  ].map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const articles = blogPosts.map((post) => ({
    url: `${siteConfig.domain}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticPages, ...articles];
}
