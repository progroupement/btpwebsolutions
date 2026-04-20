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
        <section className="page-hero">
          <div className="container narrow">
            <p className="eyebrow">{article.category}</p>
            <h1>{article.heroTitle}</h1>
            <p className="lead">{article.intro}</p>
          </div>
        </section>

        <section className="section">
          <div className="container article-layout">
            {article.sections.map((section) => (
              <section key={section.heading} className="article-section">
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="section section-muted">
          <div className="container narrow">
            <h2>Questions frequentes</h2>
            <FAQList entries={article.faq} />
          </div>
        </section>

        <section className="section final-cta">
          <div className="container cta-panel">
            <div>
              <p className="eyebrow">Besoin d'un accompagnement sur mesure ?</p>
              <h2>Transformons ces bonnes pratiques en plan d'action pour votre entreprise</h2>
              <p>
                Nous aidons les artisans et entreprises du batiment a deployer une strategie
                digitale performante, concrète et orientee resultats.
              </p>
            </div>
            <CTAButtons />
          </div>
        </section>
      </article>
    </main>
  );
}
