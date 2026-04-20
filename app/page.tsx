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
            <p className="eyebrow">Agence web BTP spécialisée en visibilité, conversion et outils métier</p>
            <h1>Le partenaire digital des artisans et entreprises du bâtiment</h1>
            <p className="lead">
              BTP Web Solutions conçoit des sites internet, des stratégies SEO et des applications
              métier pour aider les professionnels du bâtiment à gagner en visibilité, en demandes
              de devis et en efficacité commerciale.
            </p>
            <CTAButtons secondaryLabel="Prendre rendez-vous" />
            <div className="metric-row">
              <article className="metric-card">
                <strong>90+</strong>
                <span>entreprises du bâtiment accompagnées</span>
              </article>
              <article className="metric-card">
                <strong>SEO local</strong>
                <span>pensé pour les recherches métier et zone</span>
              </article>
              <article className="metric-card">
                <strong>Web + logiciel</strong>
                <span>site, acquisition et outils internes alignés</span>
              </article>
            </div>
            <div className="objection-strip compact">
              <strong>Une approche claire :</strong> un site crédible, une visibilité Google plus
              forte et des outils simples à utiliser par vos équipes.
            </div>
          </div>

          <div className="hero-stage">
            <div className="hero-stage-top">
              <span className="hero-badge">Création de site internet BTP</span>
              <span className="hero-badge">Référencement local et génération de leads</span>
            </div>
            <div className="hero-visual card card-dark">
              <Image
                src="/hero-btp-digital.svg"
                alt="Illustration premium d'une agence digitale spécialisée dans le bâtiment"
                width={920}
                height={760}
                priority
              />
            </div>
            <div className="hero-stage-bottom">
              <article className="floating-panel">
                <p className="eyebrow small">Image de marque</p>
                <h2>Un site plus crédible dès les premières secondes</h2>
                <p>Design premium, messages clairs, preuves métier et prise de contact visible.</p>
              </article>
              <article className="floating-panel">
                <p className="eyebrow small">Performance commerciale</p>
                <h2>Une acquisition mieux structurée</h2>
                <p>SEO local, campagnes ciblées et parcours de conversion construits pour le BTP.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="container narrow">
          <div className="section-heading narrow">
            <p className="eyebrow">Diagnostic rapide</p>
            <h2>Recevez une recommandation adaptée à votre métier et à votre zone</h2>
            <p>
              En quelques questions, nous identifions votre priorité pour vous orienter vers la
              bonne combinaison entre site internet, SEO local, publicité digitale et outils métier.
            </p>
          </div>
          <QualificationForm />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Nos expertises</p>
              <h2>Des services digitaux construits pour faire grandir une entreprise du bâtiment</h2>
            </div>
            <p>
              Nous créons des dispositifs utiles, lisibles et rentables, avec une vraie logique de
              visibilité Google, d&apos;image professionnelle et de gain de temps.
            </p>
          </div>
          <div className="service-showcase">
            <article className="service-highlight">
              <p className="eyebrow small">Vision d&apos;ensemble</p>
              <h3>Un seul partenaire pour votre site, votre acquisition et vos outils métier</h3>
              <p>
                L&apos;objectif n&apos;est pas de livrer un site décoratif, mais une base digitale
                cohérente, capable d&apos;attirer, de rassurer et de convertir.
              </p>
              <div className="service-highlight-visual">
                <Image
                  src="/illustration-seo-btp.svg"
                  alt="Illustration d'un pilotage SEO et conversion pour une entreprise du bâtiment"
                  width={720}
                  height={520}
                />
              </div>
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
            <p className="eyebrow">Bénéfices concrets</p>
            <h2>Un site internet plus utile, plus visible et plus rentable</h2>
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
            <p className="eyebrow">Métiers accompagnés</p>
            <h2>Un discours adapté à chaque spécialité du bâtiment</h2>
            <p>
              Les attentes d&apos;un plombier, d&apos;un électricien ou d&apos;une entreprise générale
              ne sont pas les mêmes. Nous adaptons le message, la structure du site et les pages
              SEO à votre réalité métier.
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
            <p className="eyebrow">Référencement naturel</p>
            <h2>Des pages SEO pensées pour remonter sur Google là où vos prospects vous cherchent</h2>
            <div className="feature-illustration">
              <Image
                src="/illustration-seo-btp.svg"
                alt="Illustration d'une stratégie SEO local pour le bâtiment"
                width={720}
                height={520}
              />
            </div>
            <p>
              Architecture sémantique, pages services, maillage interne, contenus métier et pages
              locales : nous préparons le site pour gagner durablement en visibilité.
            </p>
            <ul className="check-list">
              <li>SEO local par prestation et zone</li>
              <li>Pages claires pour les recherches à forte intention</li>
              <li>Structure prête pour le blog et les cas clients</li>
            </ul>
          </article>
          <article className="content-card feature-panel">
            <p className="eyebrow">Applications métier</p>
            <h2>Des outils sur mesure pour simplifier le suivi chantier et la relation client</h2>
            <div className="feature-illustration">
              <Image
                src="/illustration-app-btp.svg"
                alt="Illustration d'une application métier pour le suivi de chantier"
                width={720}
                height={520}
              />
            </div>
            <p>
              Nous concevons aussi des interfaces métier pour organiser les devis, les relances, les
              validations terrain et les échanges internes.
            </p>
            <ul className="check-list">
              <li>Suivi de chantier et planification</li>
              <li>Automatisation administrative</li>
              <li>Meilleure coordination entre bureau et terrain</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Témoignages</p>
            <h2>Des résultats visibles pour des entreprises du bâtiment exigeantes</h2>
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
              <p className="eyebrow">Études de cas</p>
              <h2>Des projets concrets en création de site, SEO et digitalisation métier</h2>
            </div>
            <p>
              Nous mettons en avant des résultats réels, une progression visible et des dispositifs
              construits pour le quotidien des entreprises du BTP.
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
              Voir toutes les réalisations
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Les questions les plus fréquentes avant de lancer un projet digital BTP</h2>
          </div>
          <FAQList entries={faqs} />
        </div>
      </section>

      <section className="section final-cta">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Prendre contact</p>
            <h2>Parlons de votre site internet, de votre SEO local ou de votre application métier</h2>
            <p>
              Nous vous aidons à clarifier les priorités, structurer le projet et construire un
              dispositif digital cohérent avec vos objectifs de croissance.
            </p>
          </div>
          <CTAButtons
            primaryHref="/diagnostic"
            primaryLabel="Recevoir mon diagnostic"
            secondaryLabel="Prendre rendez-vous"
          />
        </div>
      </section>
    </main>
  );
}
