"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CTAButtons } from "@/components/CTAButtons";
import { offerProfiles, siteConfig, tradeOptions } from "@/lib/content";

export function OfferPageContent() {
  const searchParams = useSearchParams();
  const tradeParam = searchParams.get("trade") || "autre";
  const trade = offerProfiles[tradeParam] ? tradeParam : "autre";
  const area = searchParams.get("area") || "";
  const team = searchParams.get("team") || "";
  const pain = searchParams.get("pain") || "";
  const profile = offerProfiles[trade];
  const tradeLabel =
    tradeOptions.find((option) => option.value === trade)?.label || "professionnel du batiment";

  const primaryHref = `/contact?trade=${encodeURIComponent(trade)}&area=${encodeURIComponent(
    area
  )}&team=${encodeURIComponent(team)}&pain=${encodeURIComponent(pain)}`;

  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Etape 2 sur 3</p>
          <h1>{profile.title}</h1>
          <p className="lead">
            {profile.subtitle} {area ? `Zone cible detectee : ${area}.` : ""}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container offer-layout">
          <article className="content-card">
            <p className="eyebrow">Contenu dynamique</p>
            <h2>Une recommandation concue pour votre profil</h2>
            <p>
              Metier selectionne : <strong>{tradeLabel}</strong>. Taille d'equipe :{" "}
              <strong>{team || "non precisee"}</strong>. Priorite actuelle :{" "}
              <strong>{pain || "ameliorer la performance commerciale"}</strong>.
            </p>
            <p>{profile.accent}</p>
            <p>{profile.launchNote}</p>
          </article>

          <article className="content-card">
            <p className="eyebrow">Benefices concrets</p>
            <h2>Ce que vous pouvez attendre du dispositif</h2>
            <ul className="check-list">
              {profile.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <p className="proof-line">{profile.proof}</p>
          </article>

          <article className="content-card">
            <p className="eyebrow">Temoignage</p>
            <h2>Une preuve sociale proche de votre realite</h2>
            <p className="quote">"{profile.testimonial}"</p>
            <p>{profile.testimonialMeta}</p>
          </article>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Etape 3</p>
            <h2>Demarrer une demo gratuite et recevoir un plan d'action clair</h2>
            <p>
              En 30 minutes, nous vous montrons ce qui peut etre mis en place pour augmenter votre
              visibilite Google, simplifier vos demandes de devis et accelerer votre digitalisation.
            </p>
          </div>
          <div>
            <CTAButtons
              primaryHref={primaryHref}
              primaryLabel="Demarrer ma demo gratuite"
              secondaryHref="/services"
              secondaryLabel="Voir les tarifs et services"
            />
            <p className="cta-note">
              Operationnel vite, sans jargon, avec accompagnement personnalise. {siteConfig.zone}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container narrow">
          <div className="objection-strip">
            <strong>Objections levees :</strong> "Est-ce que ca marche vraiment ?" {"->"} cas
            clients et preuves concretes. "C'est complique a mettre en place ?" {"->"} nous nous
            occupons du cadrage, de la mise en ligne et du pilotage.
          </div>
          <div className="section-actions">
            <Link href="/realisations" className="text-link">
              Voir des resultats concrets dans le batiment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
