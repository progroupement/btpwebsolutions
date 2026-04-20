import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTAButtons } from "@/components/CTAButtons";
import { FAQList } from "@/components/FAQList";
import { StructuredData } from "@/components/StructuredData";
import { blogPosts } from "@/lib/content";
import { buildMetadata, getArticleSchema, getFaqSchema } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogPosts.find((post) => post.slug === slug);

  if (!article) {
    return {};
  }

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = blogPosts.find((post) => post.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <StructuredData data={getArticleSchema(article.slug)} />
      <StructuredData data={getFaqSchema(article.faq)} />

      <article>
        <section className="page-hero page-hero-editorial">
          <div className="container editorial-hero single-article-hero">
            <div className="editorial-copy">
              <p className="eyebrow">{article.category}</p>
              <h1>{article.heroTitle}</h1>
              <p className="lead">{article.intro}</p>
            </div>
            <div className="editorial-panel article-side-panel">
              <p className="eyebrow small">Pourquoi ce sujet compte</p>
              <h2>{article.title}</h2>
              <p>
                Ce contenu est pensé pour capter une intention SEO concrète puis orienter vers une
                prise de contact utile, pas vers un simple trafic décoratif.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container article-shell">
            <div className="article-intro-card">
              <p className="eyebrow small">Plan éditorial</p>
              <h2>Les points traités dans l&apos;article</h2>
              <ul className="check-list">
                {article.sections.map((section) => (
                  <li key={section.heading}>{section.heading}</li>
                ))}
              </ul>
            </div>
            <div className="article-layout">
              {article.sections.map((section) => (
                <section key={section.heading} className="article-section">
                  <h2>{section.heading}</h2>
                  <p>{section.content}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container narrow">
            <h2>Questions fréquentes</h2>
            <FAQList entries={article.faq} />
          </div>
        </section>

        <section className="section final-cta">
          <div className="container cta-panel">
            <div>
              <p className="eyebrow">Besoin d&apos;un accompagnement sur mesure ?</p>
              <h2>Transformons ces bonnes pratiques en plan d&apos;action pour votre entreprise</h2>
              <p>
                Nous aidons les artisans et entreprises du bâtiment à déployer une stratégie
                digitale performante, concrète et orientée résultats.
              </p>
            </div>
            <CTAButtons />
          </div>
        </section>
      </article>
    </main>
  );
}
