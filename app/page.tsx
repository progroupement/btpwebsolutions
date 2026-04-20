import Image from "next/image";
import Link from "next/link";
import { CTAButtons } from "@/components/CTAButtons";
import { FAQList } from "@/components/FAQList";
import { QualificationForm } from "@/components/QualificationForm";
import { StructuredData } from "@/components/StructuredData";
import {
  benefits,
  caseStudies,
  faqs,
  services,
  siteConfig,
  testimonials,
  trades
} from "@/lib/content";
import { getFaqSchema, getServiceSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <main>
      <StructuredData data={getServiceSchema()} />
      <StructuredData data={getFaqSchema(faqs)} />

      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Page d'accroche specialisee artisans et entreprises du BTP</p>
            <h1>
              Vous etes artisan, electricien, peintre ou macon ? Gagnez plus de demandes de devis
              avec un tunnel digital concu pour le batiment
            </h1>
            <p className="lead">
              Nous concevons des sites, des pages SEO, des campagnes et des applications metier
              qui transforment votre visibilite Google en prises de contact concretes. Pas de
              jargon. Pas de strategie floue. Des resultats, un parcours clair et un accompagnement
              terrain.
            </p>
            <CTAButtons />
            <ul className="hero-trust">
              <li>Compteur de confiance : 90+ entreprises du batiment accompagnees</li>
              <li>Parcours de vente fluide pense pour le mobile et la prise de contact rapide</li>
              <li>Preuves sociales, FAQ, maillage SEO et outils metier relies ensemble</li>
            </ul>
            <div className="objection-strip compact">
              <strong>Objections levees :</strong> "Le digital n'est pas pour moi" {"->"}{" "}
              temoignages d'artisans similaires. "C'est trop cher" {"->"} nous ciblons d'abord les
              prestations les plus rentables. "Je n'ai pas le temps" {"->"} mise en place
              accompagnee et simplifiee.
            </div>
          </div>

          <div className="hero-visual card card-dark">
            <Image
              src="/hero-btp-digital.svg"
              alt="Illustration d'une entreprise du batiment qui developpe sa visibilite digitale"
              width={620}
              height={520}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="section-heading narrow">
            <p className="eyebrow">Page de qualification</p>
            <h2>Quatre questions pour filtrer le besoin et afficher une offre adaptee</h2>
            <p>
              Le tunnel commence par une qualification legere pour identifier le metier, la zone,
              la taille de l'equipe et le probleme principal. Cela permet d'afficher une offre plus
              pertinente des l'etape suivante.
            </p>
          </div>
          <QualificationForm />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Page de l'offre</p>
            <h2>Une offre dynamique qui s'adapte au metier selectionne</h2>
            <p>
              Le contenu, les preuves, le vocabulaire et les benefices affiches changent selon le
              profil : peintre, electricien, plombier, menuisier ou autre metier du batiment.
            </p>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="check-list">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">Benefices concrets</p>
            <h2>Une presentation claire des gains attendus pour rassurer avant la conversion</h2>
          </div>
          <div className="stats-grid">
            {benefits.map((benefit) => (
              <article key={benefit} className="stat-card">
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Metiers accompagnes</p>
            <h2>Des variations du tunnel selon la realite de chaque corps d'etat</h2>
            <p>
              Le message n'est pas le meme pour un plombier, un electricien ou une entreprise de
              renovation. Nous adaptons la promesse, les exemples et les CTA a la situation du
              prospect.
            </p>
          </div>
          <div className="pill-grid">
            {trades.map((trade) => (
              <span key={trade} className="pill">
                {trade}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-gradient">
        <div className="container two-column">
          <article className="content-card">
            <p className="eyebrow">Page de conversion</p>
            <h2>Une prise de rendez-vous simple avec garanties visibles et urgence douce</h2>
            <p>
              La derniere etape du tunnel transforme l'interet en engagement concret : reservation
              d'une demo gratuite, reassurance, badges de confiance et disponibilites limitees pour
              encourager l'action.
            </p>
            <ul className="check-list">
              <li>Calendrier integre et formulaire concis</li>
              <li>Garantie satisfaction, donnees securisees et process transparent</li>
              <li>Urgence douce basee sur les places d'onboarding disponibles</li>
            </ul>
          </article>
          <article className="content-card">
            <p className="eyebrow">Page de remerciement</p>
            <h2>Une confirmation utile qui rassure, fidelise et propose un upsell intelligent</h2>
            <p>
              Apres conversion, le prospect recoit une confirmation claire, les prochaines etapes
              et une proposition immediate d'audit digital gratuit pour prolonger l'engagement.
            </p>
            <ul className="check-list">
              <li>Resume du rendez-vous et rappel avant l'echange</li>
              <li>Audit digital gratuit en attendant la demo</li>
              <li>Base ideale pour une sequence email post-inscription</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Temoignages</p>
            <h2>Des preuves de resultat pour lever les doutes avant la reservation</h2>
          </div>
          <div className="card-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="card testimonial-card">
                <p className="quote">"{testimonial.quote}"</p>
                <p className="result-tag">{testimonial.result}</p>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Realisations</p>
            <h2>Des cas concrets pour rendre la promesse plus credible</h2>
          </div>
          <div className="card-grid">
            {caseStudies.map((caseStudy) => (
              <article key={caseStudy.slug} className="card">
                <p className="eyebrow small">{caseStudy.sector}</p>
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.solution}</p>
                <ul className="check-list">
                  {caseStudy.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="section-actions">
            <Link href="/realisations" className="button button-secondary">
              Voir toutes les realisations
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">FAQ SEO et conversion</p>
            <h2>Les questions frequentes avant de reserver une demo</h2>
          </div>
          <FAQList entries={faqs} />
        </div>
      </section>

      <section className="section final-cta">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Passer a l'action</p>
            <h2>Vous voulez plus de clients sans complexifier votre quotidien ?</h2>
            <p>
              Lancez le diagnostic, recevez une offre personnalisee puis reservez votre demo
              gratuite avec un plan d'action concret pour votre entreprise du batiment.
            </p>
          </div>
          <div>
            <CTAButtons primaryHref="/diagnostic" primaryLabel="Lancer mon diagnostic" />
            <p className="cta-note">
              Reponse sous 24h ouvrables. Intervention : {siteConfig.zone}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
