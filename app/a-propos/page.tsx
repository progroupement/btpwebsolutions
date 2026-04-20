import type { Metadata } from "next";
import { CTAButtons } from "@/components/CTAButtons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "A propos | Agence digitale specialisee pour les entreprises du batiment",
  description:
    "Decouvrez l'histoire, la mission et l'approche terrain de notre agence specialisee en marketing digital, sites internet et applications metier pour le BTP.",
  path: "/a-propos"
});

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">A propos</p>
          <h1>Une agence digitale qui parle le langage du terrain, du chantier et du resultat</h1>
          <p className="lead">
            Notre conviction est simple : les professionnels du batiment meritent des outils
            digitaux vraiment adaptes a leurs enjeux commerciaux et operationnels.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <article className="content-card">
            <h2>Notre histoire</h2>
            <p>
              BatiDigital Performance est nee du constat que beaucoup d'artisans et d'entreprises
              du BTP investissent dans le digital sans obtenir de resultats mesurables. Nous avons
              donc construit une offre specialisee, alignee sur les cycles de vente, les contraintes
              de terrain et les enjeux de marge du secteur.
            </p>
          </article>
          <article className="content-card">
            <h2>Notre mission</h2>
            <p>
              Aider les entreprises du batiment a gagner en visibilite, en demandes qualifiees et
              en efficacite interne grace a une strategie digitale sur mesure, pragmatique et
              orientee ROI.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container card-grid">
          <article className="card">
            <h2>Une expertise vraiment specialisee batiment</h2>
            <p>
              Nous connaissons les problematiques de devis, de saisonnalite, de zones
              d'intervention, de prestations prioritaires, de relation syndic et de coordination
              chantier.
            </p>
          </article>
          <article className="card">
            <h2>Une approche terrain</h2>
            <p>
              Nous simplifions le digital pour qu'il soutienne l'activite, sans alourdir vos
              equipes. Chaque recommandation doit pouvoir s'appliquer dans la vraie vie.
            </p>
          </article>
          <article className="card">
            <h2>Des valeurs de clarte et d'accompagnement</h2>
            <p>
              Transparence, exigence, pedagogie et sens du resultat. Nous privilegions les actions
              utiles, mesurables et durables.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Ce que nous comprenons des entreprises du BTP</h2>
          <p>
            Les dirigeants du batiment ont besoin de generer des chantiers rentables, de filtrer
            les demandes peu pertinentes, de rassurer rapidement les prospects et de gagner du temps
            dans le suivi. C'est pour cela que nous combinons marketing, UX, SEO technique et
            developpement applicatif.
          </p>
          <CTAButtons />
        </div>
      </section>
    </main>
  );
}
