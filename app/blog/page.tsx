import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog SEO batiment | Conseils pour artisans et entreprises du BTP",
  description:
    "Articles SEO et marketing digital pour les artisans et entreprises du batiment : acquisition client, site internet, SEO local, digitalisation et applications metier.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Blog SEO</p>
          <h1>Des contenus pensés pour capter le trafic Google des professionnels du batiment</h1>
          <p className="lead">
            Cette structure de blog est prete a accueillir vos contenus piliers, vos guides locaux
            et vos articles de conversion.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid">
          {blogPosts.map((post) => (
            <article key={post.slug} className="card">
              <p className="eyebrow small">{post.category}</p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-link">
                Lire l'article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
