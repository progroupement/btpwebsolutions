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

      <section className="hero-section hero-premium">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="eyebrow">Agence digitale premium pour artisans et entreprises du BTP</p>
            <h1>Le site, le SEO et les outils metier qui donnent enfin une vraie allure a votre acquisition</h1>
            <p className="lead">
              BTP Web Solutions aide les professionnels du batiment a gagner des demandes de devis,
              rassurer des la premiere visite et structurer leur digitalisation avec une image plus
              haut de gamme.
            </p>
            <CTAButtons />
            <div className="metric-row">
              <article className="metric-card">
                <strong>90+</strong>
                <span>entreprises batiment accompagnees</span>
              </article>
              <article className="metric-card">
                <strong>SEO local</strong>
                <span>concu pour les recherches metier et zone</span>
              </article>
              <article className="metric-card">
                <strong>Web + metier</strong>
                <span>site, tunnel, application et suivi reunis</span>
              </article>
            </div>
            <div className="objection-strip compact">
              <strong>Freins traites des l'entree :</strong> peur du digital, manque de temps,
              crainte d'un site inutile ou trop cher. Notre approche est cadrée, visuelle et
              orientee resultat.
            </div>
          </div>

          <div className="hero-stage">
            <div className="hero-stage-top">
              <span className="hero-badge">Tunnel pense conversion</span>
              <span className="hero-badge">SEO local pret a scaler</span>
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
            <div className="hero-stage-bottom">
              <article className="floating-panel">
                <p className="eyebrow small">Positionnement</p>
                <h2>Une presence plus premium sur Google</h2>
                <p>Architecture claire, pages metier, preuves visuelles et prise de rendez-vous directe.</p>
              </article>
              <article className="floating-panel">
                <p className="eyebrow small">Pilotage</p>
                <h2>Des outils qui font gagner du temps</h2>
                <p>Devis, qualification et suivi chantier peuvent enfin travailler ensemble.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="container narrow">
          <div className="section-heading narrow">
            <p className="eyebrow">Page de qualification</p>
            <h2>Un tunnel court pour filtrer le besoin et afficher une offre adaptee</h2>
            <p>
              Le parcours demarre par une qualification legere. En quatre questions, nous affinons
              le metier, la zone et la priorite business pour personnaliser l'offre qui suit.
            </p>
          </div>
          <QualificationForm />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Services coeur de croissance</p>
              <h2>Des leviers penses ensemble pour donner une allure serieuse a toute la chaine commerciale</h2>
            </div>
            <p>
              Nous ne vendons pas seulement un site. Nous construisons une presence complete :
              visibilite, credibilite, conversion et simplification operationnelle.
            </p>
          </div>
          <div className="service-showcase">
            <article className="service-highlight">
              <p className="eyebrow small">Approche agence</p>
              <h3>Design, SEO, acquisition et outils metier dans une seule direction visuelle</h3>
              <p>
                Le but est d'eviter le site banal. Chaque page doit inspirer confiance a un
                dirigeant, un particulier ou un donneur d'ordre des les premieres secondes.
              </p>
            </article>
            <div className="card-grid">
              {services.map((service) => (
                <article key={service.title} className="card service-card premium-card">
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
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">Benefices concrets</p>
            <h2>Une promesse plus credible car traduite en resultats visibles, lisibles et utiles</h2>
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
        <div className="container trades-shell">
          <div className="section-heading">
            <p className="eyebrow">Metiers accompagnes</p>
            <h2>Une meme rigueur visuelle, avec un discours qui change selon le corps d'etat</h2>
            <p>
              Le message, les references et les elements de reassurance doivent etre adaptes a la
              realite d'un plombier, d'un peintre, d'un electricien ou d'une entreprise generale.
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
          <article className="content-card feature-panel">
            <p className="eyebrow">Conversion</p>
            <h2>Une page de reservation qui inspire plus confiance qu'un simple formulaire</h2>
            <p>
              La prise de rendez-vous, les garanties et le calendrier sont integres dans une meme
              sequence pour reduire les hesitations et augmenter la prise de contact utile.
            </p>
            <ul className="check-list">
              <li>Calendrier integre et formulaire concis</li>
              <li>Reassurance visible sans ton commercial agressif</li>
              <li>Urgence douce basee sur la capacite d'onboarding</li>
            </ul>
          </article>
          <article className="content-card feature-panel">
            <p className="eyebrow">Digitalisation metier</p>
            <h2>Le site n'est qu'une facade visible d'un systeme plus profond</h2>
            <p>
              Suivi chantier, devis, planification ou automatisation administrative : la couche
              applicative donne de la profondeur a la promesse et credibilise l'agence.
            </p>
            <ul className="check-list">
              <li>Applications web et mobiles sur mesure</li>
              <li>Automatisations utiles pour gagner du temps</li>
              <li>Vision plus globale de la transformation digitale BTP</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Preuves sociales</p>
            <h2>Des retours clients mis en scene comme des validations de credibilite</h2>
          </div>
          <div className="card-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="card testimonial-card premium-card">
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
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Realisations</p>
              <h2>Des cas concrets presentes comme des dossiers premium et non des blocs generiques</h2>
            </div>
            <p>
              Resultats SEO, amelioration de la perception de marque et logique metier sont visibles
              des la lecture des etudes de cas.
            </p>
          </div>
          <div className="card-grid">
            {caseStudies.map((caseStudy) => (
              <article key={caseStudy.slug} className="card premium-card">
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
            <h2>Les questions frequentes traitees dans un espace plus lisible et plus editorial</h2>
          </div>
          <FAQList entries={faqs} />
        </div>
      </section>

      <section className="section final-cta">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Passer a l'action</p>
            <h2>Vous voulez une presence digitale qui ait enfin le niveau de votre savoir-faire ?</h2>
            <p>
              Lancez le diagnostic, recevez une offre adaptee puis reservez une demo gratuite avec
              une direction claire pour le site, le SEO et la digitalisation metier.
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
