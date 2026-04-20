import type { Metadata } from "next";
import { CTAButtons } from "@/components/CTAButtons";
import { caseStudies } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Réalisations | Sites internet, SEO local et digitalisation pour le BTP",
  description:
    "Consultez nos études de cas pour les artisans et entreprises du bâtiment : performances SEO, demandes de devis et outils métier.",
  path: "/realisations"
});

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-shell">
          <div className="page-hero-copy">
            <p className="eyebrow">Réalisations</p>
            <h1>Des projets construits pour améliorer la visibilité, les leads et l&apos;organisation</h1>
            <p className="lead">
              Chaque réalisation montre comment un meilleur site internet, un SEO local plus propre
              ou un outil métier plus fluide peuvent avoir un vrai impact sur le quotidien
              d&apos;une entreprise du bâtiment.
            </p>
          </div>
          <aside className="page-hero-aside">
            <p className="eyebrow small">Nos résultats</p>
            <h2>Des preuves concrètes</h2>
            <div className="page-hero-points">
              <div className="page-hero-point">
                <strong>SEO et visibilité</strong>
                <span>Progression sur Google, hausse du trafic qualifié et meilleures demandes.</span>
              </div>
              <div className="page-hero-point">
                <strong>Organisation métier</strong>
                <span>Suivi chantier plus fluide, meilleur traitement des leads et coordination simplifiée.</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          {caseStudies.map((caseStudy) => (
            <article key={caseStudy.slug} className="case-study-card">
              <div className="case-study-head">
                <p className="eyebrow small">{caseStudy.sector}</p>
                <h2>{caseStudy.title}</h2>
              </div>
              <div className="case-study-grid">
                <div>
                  <h3>Contexte</h3>
                  <p>{caseStudy.challenge}</p>
                </div>
                <div>
                  <h3>Réponse apportée</h3>
                  <p>{caseStudy.solution}</p>
                </div>
                <div>
                  <h3>Résultats obtenus</h3>
                  <ul className="check-list">
                    {caseStudy.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section final-cta">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Votre projet</p>
            <h2>Vous voulez le même niveau d&apos;exigence pour votre site ou votre visibilité Google ?</h2>
            <p>
              Nous pouvons cadrer vos priorités et vous proposer une feuille de route claire pour le
              site, le SEO local et la digitalisation métier.
            </p>
          </div>
          <CTAButtons secondaryLabel="Prendre rendez-vous" />
        </div>
      </section>
    </main>
  );
}
