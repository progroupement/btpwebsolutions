import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog SEO bâtiment | Conseils pour artisans et entreprises du BTP",
  description:
    "Articles SEO et marketing digital pour les artisans et entreprises du bâtiment : acquisition client, site internet, SEO local, digitalisation et applications métier.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero page-hero-editorial">
        <div className="container editorial-hero">
          <div className="editorial-copy">
            <p className="eyebrow">Blog SEO</p>
            <h1>Des contenus pensés pour capter le trafic Google des professionnels du bâtiment</h1>
            <p className="lead">
              Cette structure de blog est prête à accueillir vos contenus piliers, vos guides
              locaux et vos articles de conversion.
            </p>
          </div>
          <div className="editorial-panel">
            <p className="eyebrow small">Ligne éditoriale</p>
            <h2>Du contenu utile, précis et orienté terrain</h2>
            <p>
              Chaque article doit capter une intention claire : visibilité locale, acquisition,
              digitalisation ou optimisation de la relation client dans le bâtiment.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          {blogPosts.map((post, index) => (
            <article key={post.slug} className={`editorial-card ${index === 0 ? "featured" : ""}`}>
              <div className="editorial-card-meta">
                <p className="eyebrow small">{post.category}</p>
                <span className="editorial-chip">SEO bâtiment</span>
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
