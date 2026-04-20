import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog SEO bâtiment | Conseils web, visibilité Google et digitalisation BTP",
  description:
    "Articles SEO et marketing digital pour les artisans et entreprises du bâtiment : visibilité Google, site internet, acquisition locale et outils métier.",
  path: "/blog"
});

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <main>
      <section className="page-hero page-hero-editorial">
        <div className="container editorial-hero">
          <div className="editorial-copy">
            <p className="eyebrow">Blog BTP Web Solutions</p>
            <h1>Des articles pensés pour attirer les bons prospects du bâtiment sur Google</h1>
            <p className="lead">
              Ce blog a pour vocation d&apos;aider les artisans et entreprises du BTP à mieux
              comprendre le SEO local, la création de site internet, la conversion et la
              digitalisation métier.
            </p>
          </div>
          <div className="editorial-panel">
            <p className="eyebrow small">Ligne éditoriale</p>
            <h2>Du contenu concret, utile et orienté résultats</h2>
            <p>
              Nous privilégions des sujets proches des vraies questions du terrain : comment être
              trouvé sur Google, comment mieux présenter son entreprise, comment filtrer les
              demandes et comment gagner du temps avec de meilleurs outils.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <article className="editorial-card featured">
            <div className="editorial-card-meta">
              <p className="eyebrow small">{featuredPost.category}</p>
              <span className="editorial-chip">Article pilier</span>
            </div>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <div className="editorial-card-footer">
              <Link href={`/blog/${featuredPost.slug}`} className="text-link">
                Lire l&apos;article complet
              </Link>
            </div>
          </article>

          {otherPosts.map((post) => (
            <article key={post.slug} className="editorial-card">
              <div className="editorial-card-meta">
                <p className="eyebrow small">{post.category}</p>
                <span className="editorial-chip">Conseil pratique</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="editorial-card-footer">
                <Link href={`/blog/${post.slug}`} className="text-link">
                  Lire l&apos;article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
