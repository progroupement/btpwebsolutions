import type { Metadata } from "next";
import { CTAButtons } from "@/components/CTAButtons";
import { services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | Site internet artisan, SEO BTP, Google Ads et applications métier",
  description:
    "Découvrez nos services pour les artisans et entreprises du bâtiment : création de site internet, référencement local, Google Ads, génération de leads et applications métier BTP.",
  path: "/services"
});

const detailedSections = [
  {
    title: "Création de site internet pour artisans",
    text:
      "Nous concevons des sites sobres, crédibles et centrés sur la prise de contact. Chaque page valorise vos prestations, vos réalisations, vos garanties et vos zones d'intervention."
  },
  {
    title: "Site internet pour entreprise du bâtiment",
    text:
      "Pour les structures plus développées, nous construisons une arborescence multi-services, multi-zones et multi-cibles, avec un vrai socle SEO."
  },
  {
    title: "Référencement SEO local bâtiment",
    text:
      "Audit technique, structure sémantique, contenus métier, maillage interne, pages géo-ciblées et suivi des positions pour gagner en visibilité locale."
  },
  {
    title: "Campagnes publicitaires Google Ads",
    text:
      "Des campagnes pilotées par prestation, géographie et niveau d'urgence pour capter la demande à forte intention."
  },
  {
    title: "Réseaux sociaux pour artisans",
    text:
      "Une présence utile pour rassurer, montrer l'avancement des chantiers et nourrir la preuve sociale."
  },
  {
    title: "Génération de prospects qualifiés",
    text:
      "Landing pages, offres de prise de contact, call tracking et suivi des leads pour transformer plus de visites en opportunités."
  },
  {
    title: "Développement d'applications métier BTP",
    text:
      "Applications web et mobiles pour suivi chantier, validation client, partage de photos, planning, devis et gestion des données terrain."
  },
  {
    title: "Automatisation des processus",
    text:
      "Relances clients, qualification de leads, synchronisation administrative et réduction des doubles saisies."
  },
  {
    title: "Maintenance et accompagnement digital",
    text:
      "Mises à jour, sécurité, analyse des performances et évolution continue du site et de vos outils."
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Services</p>
          <h1>Des prestations digitales pensées pour les entreprises du bâtiment</h1>
          <p className="lead">
            Nous intervenons sur la visibilité, la conversion et les outils métier pour aider votre
            entreprise à développer son chiffre d'affaires sans perdre en lisibilité ni en confort
            de gestion.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid">
          {services.map((service) => (
            <article key={service.title} className="card premium-card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="check-list">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="stack">
            {detailedSections.map((item) => (
              <article key={item.title} className="detail-row">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Vous voulez prioriser les leviers les plus rentables pour votre activité ?</h2>
          <p>
            Nous pouvons vous aider à définir la bonne combinaison entre site internet, SEO local,
            campagnes payantes et outils métier sur mesure.
          </p>
          <CTAButtons secondaryLabel="Prendre rendez-vous" />
        </div>
      </section>
    </main>
  );
}
