import type { Metadata } from "next";
import { CTAButtons } from "@/components/CTAButtons";
import { caseStudies } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Realisations | Projets SEO, sites internet et applications pour le BTP",
  description:
    "Consultez nos etudes de cas et nos resultats pour des artisans et entreprises du batiment : performances SEO, demandes de devis et digitalisation metier.",
  path: "/realisations"
});

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Realisations</p>
          <h1>Des projets qui melent impact business, SEO et efficacité operationnelle</h1>
          <p className="lead">
            Nos realisations montrent comment une strategie digitale specialisee batiment peut
            ameliorer la visibilite, la qualite des leads et le pilotage interne.
          </p>
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
                  <h3>Solution</h3>
                  <p>{caseStudy.solution}</p>
                </div>
                <div>
                  <h3>Resultats obtenus</h3>
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
            <h2>Vous souhaitez obtenir le meme niveau d'exigence pour votre activite ?</h2>
            <p>
              Nous vous proposons un cadrage clair de vos objectifs SEO, commerciaux et applicatifs.
            </p>
          </div>
          <CTAButtons />
        </div>
      </section>
    </main>
  );
}
