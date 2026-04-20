import type { Metadata } from "next";
import { CTAButtons } from "@/components/CTAButtons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "À propos | Agence digitale spécialisée pour les entreprises du bâtiment",
  description:
    "Découvrez l'histoire, la mission et l'approche terrain de notre agence spécialisée en marketing digital, sites internet et applications métier pour le BTP.",
  path: "/a-propos"
});

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">À propos</p>
          <h1>Une agence digitale qui parle le langage du terrain, du chantier et du résultat</h1>
          <p className="lead">
            Notre conviction est simple : les professionnels du bâtiment méritent des outils
            digitaux vraiment adaptés à leurs enjeux commerciaux et opérationnels.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <article className="content-card">
            <h2>Notre histoire</h2>
            <p>
              BTP Web Solutions est née du constat que beaucoup d&apos;artisans et d&apos;entreprises du
              BTP investissent dans le digital sans obtenir de résultats mesurables. Nous avons
              donc construit une offre spécialisée, alignée sur les cycles de vente, les contraintes
              de terrain et les enjeux de marge du secteur.
            </p>
          </article>
          <article className="content-card">
            <h2>Notre mission</h2>
            <p>
              Aider les entreprises du bâtiment à gagner en visibilité, en demandes qualifiées et
              en efficacité interne grâce à une stratégie digitale sur mesure, pragmatique et
              orientée ROI.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container card-grid">
          <article className="card premium-card">
            <h2>Une expertise vraiment spécialisée bâtiment</h2>
            <p>
              Nous connaissons les problématiques de devis, de saisonnalité, de zones
              d&apos;intervention, de prestations prioritaires, de relation syndic et de coordination
              chantier.
            </p>
          </article>
          <article className="card premium-card">
            <h2>Une approche terrain</h2>
            <p>
              Nous simplifions le digital pour qu&apos;il soutienne l&apos;activité, sans alourdir vos
              équipes. Chaque recommandation doit pouvoir s&apos;appliquer dans la vraie vie.
            </p>
          </article>
          <article className="card premium-card">
            <h2>Des valeurs de clarté et d&apos;accompagnement</h2>
            <p>
              Transparence, exigence, pédagogie et sens du résultat. Nous privilégions les actions
              utiles, mesurables et durables.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Ce que nous comprenons des entreprises du BTP</h2>
          <p>
            Les dirigeants du bâtiment ont besoin de générer des chantiers rentables, de filtrer
            les demandes peu pertinentes, de rassurer rapidement les prospects et de gagner du temps
            dans le suivi. C&apos;est pour cela que nous combinons marketing, UX, SEO technique et
            développement applicatif.
          </p>
          <CTAButtons />
        </div>
      </section>
    </main>
  );
}
