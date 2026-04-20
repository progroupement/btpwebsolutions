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
    tradeOptions.find((option) => option.value === trade)?.label || "professionnel du bâtiment";

  const primaryHref = `/contact?trade=${encodeURIComponent(trade)}&area=${encodeURIComponent(
    area
  )}&team=${encodeURIComponent(team)}&pain=${encodeURIComponent(pain)}`;

  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Étape 2 sur 3</p>
          <h1>{profile.title}</h1>
          <p className="lead">
            {profile.subtitle} {area ? `Zone cible détectée : ${area}.` : ""}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container offer-layout">
          <article className="content-card">
            <p className="eyebrow">Synthèse</p>
            <h2>Une recommandation conçue pour votre profil</h2>
            <p>
              Métier sélectionné : <strong>{tradeLabel}</strong>. Taille d'équipe :{" "}
              <strong>{team || "non précisée"}</strong>. Priorité actuelle :{" "}
              <strong>{pain || "améliorer la performance commerciale"}</strong>.
            </p>
            <p>{profile.accent}</p>
            <p>{profile.launchNote}</p>
          </article>

          <article className="content-card">
            <p className="eyebrow">Bénéfices concrets</p>
            <h2>Ce que vous pouvez attendre du dispositif</h2>
            <ul className="check-list">
              {profile.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <p className="proof-line">{profile.proof}</p>
          </article>

          <article className="content-card">
            <p className="eyebrow">Témoignage</p>
            <h2>Une preuve sociale proche de votre réalité</h2>
            <p className="quote">"{profile.testimonial}"</p>
            <p>{profile.testimonialMeta}</p>
          </article>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Étape 3</p>
            <h2>Planifier un échange et recevoir un plan d'action clair</h2>
            <p>
              En 30 minutes, nous vous montrons ce qui peut être mis en place pour augmenter votre
              visibilité Google, simplifier vos demandes de devis et structurer votre digitalisation.
            </p>
          </div>
          <div>
            <CTAButtons
              primaryHref={primaryHref}
              primaryLabel="Prendre rendez-vous"
              secondaryHref="/services"
              secondaryLabel="Découvrir les services"
            />
            <p className="cta-note">
              Accompagnement clair, sans jargon, avec une feuille de route adaptée à votre réalité.
              {" "}{siteConfig.zone}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container narrow">
          <div className="objection-strip">
            <strong>Ce que nous clarifions :</strong> la stratégie à privilégier, les priorités SEO,
            la structure du site et les gains possibles côté organisation.
          </div>
          <div className="section-actions">
            <Link href="/realisations" className="text-link">
              Voir des résultats concrets dans le bâtiment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
