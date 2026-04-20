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
        <div className="container page-hero-shell">
          <div className="page-hero-copy">
            <p className="eyebrow">À propos</p>
            <h1>Une agence digitale qui comprend vraiment les entreprises du bâtiment</h1>
            <p className="lead">
              BTP Web Solutions est née d&apos;un constat simple : beaucoup d&apos;artisans et
              d&apos;entreprises du BTP investissent dans le digital sans obtenir une vraie
              amélioration de leur visibilité, de leurs leads ou de leur organisation.
            </p>
          </div>
          <aside className="page-hero-aside">
            <p className="eyebrow small">Notre ligne</p>
            <h2>Utilité, clarté, résultats</h2>
            <div className="page-hero-points">
              <div className="page-hero-point">
                <strong>Spécialisation BTP</strong>
                <span>Des messages, des parcours et des outils pensés pour le terrain.</span>
              </div>
              <div className="page-hero-point">
                <strong>Vision globale</strong>
                <span>Site internet, visibilité Google, conversion et digitalisation métier.</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <article className="content-card">
            <h2>Notre histoire</h2>
            <p>
              Nous avons construit une offre spécialisée, alignée sur les cycles de vente, les
              contraintes de chantier et les enjeux de marge du secteur. Notre rôle n&apos;est pas
              de livrer des éléments décoratifs, mais de bâtir une base digitale cohérente et utile.
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
          <h2>Ce que nous comprenons du quotidien d&apos;une entreprise du BTP</h2>
          <p>
            Les dirigeants ont besoin de générer des chantiers rentables, de filtrer les demandes
            peu pertinentes, de rassurer rapidement les prospects et de gagner du temps dans le
            suivi. C&apos;est pour cela que nous combinons marketing, UX, SEO technique et
            développement applicatif.
          </p>
          <CTAButtons secondaryLabel="Prendre rendez-vous" />
        </div>
      </section>
    </main>
  );
}
