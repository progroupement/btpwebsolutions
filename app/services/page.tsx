import type { Metadata } from "next";
import { CTAButtons } from "@/components/CTAButtons";
import { services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | Site internet artisan, SEO BTP, Google Ads et application metier",
  description:
    "Decouvrez nos services pour les artisans et entreprises du batiment : creation de site internet, referencement local, Google Ads, generation de leads et applications metier BTP.",
  path: "/services"
});

const detailedSections = [
  {
    title: "Creation de site internet pour artisans",
    text:
      "Nous concevons des sites sobres, credibles et centres sur la prise de contact. Chaque page valorise vos prestations, vos realisations, vos garanties et vos zones d'intervention."
  },
  {
    title: "Creation de site internet pour entreprise du batiment",
    text:
      "Pour les structures plus developpees, nous construisons une arborescence multi-services, multi-zones et multi-cibles, avec un vrai socle SEO."
  },
  {
    title: "Referencement SEO local batiment",
    text:
      "Audit technique, structure semantique, contenus metier, maillage interne, pages geo-ciblees et suivi des positions pour gagner en visibilite locale."
  },
  {
    title: "Campagnes publicitaires Google Ads",
    text:
      "Des campagnes pilotees par prestation, geographie et niveau d'urgence pour capter la demande a forte intention."
  },
  {
    title: "Reseaux sociaux pour artisans",
    text:
      "Une presence utile pour rassurer, montrer l'avancement des chantiers et nourrir la preuve sociale."
  },
  {
    title: "Generation de prospects qualifies",
    text:
      "Landing pages, offres de prise de contact, tunnels de conversion, call tracking et suivi des leads."
  },
  {
    title: "Developpement d'applications metier BTP",
    text:
      "Applications web et mobiles pour suivi chantier, validation client, partage de photos, planning, devis et gestion de donnees terrain."
  },
  {
    title: "Automatisation des processus",
    text:
      "Relances clients, qualification de leads, synchronisation administrative et reduction des doubles saisies."
  },
  {
    title: "Maintenance et accompagnement digital",
    text:
      "Mises a jour, securite, analyse des performances, evolution continue du site et de vos outils."
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Services</p>
          <h1>Des prestations digitales construites pour les entreprises du batiment ambitieuses</h1>
          <p className="lead">
            Nous intervenons a la fois sur l'acquisition, la conversion et les outils metier pour
            vous aider a developper votre chiffre d'affaires sans perdre en simplicite.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid">
          {services.map((service) => (
            <article key={service.title} className="card">
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
          <h2>Vous voulez prioriser les leviers les plus rentables pour votre activite ?</h2>
          <p>
            Nous pouvons vous aider a definir la bonne combinaison entre site internet, SEO local,
            campagnes payantes et outils metier sur mesure.
          </p>
          <CTAButtons />
        </div>
      </section>
    </main>
  );
}
