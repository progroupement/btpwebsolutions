import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Merci | Votre demande a bien ete envoyee",
  description:
    "Confirmation de votre demande, prochaines etapes et audit digital gratuit pour votre entreprise du batiment.",
  path: "/merci"
});

export default function ThankYouPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Merci</p>
          <h1>Votre demande est bien prise en compte</h1>
          <p className="lead">
            Vous recevez un email de confirmation, puis un rappel avant le rendez-vous choisi. Nous
            preparons egalement un premier cadrage de votre situation digitale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container offer-layout">
          <article className="content-card">
            <p className="eyebrow">Confirmation</p>
            <h2>Ce qui se passe maintenant</h2>
            <p>
              Un email recapitule votre demande, puis un rappel vous est envoye avant votre
              rendez-vous. Vous pouvez aussi ajouter directement le rendez-vous a votre agenda via
              notre calendrier.
            </p>
            <Link href={siteConfig.calendarUrl} className="text-link">
              Ajouter ou verifier un creneau
            </Link>
          </article>

          <article className="content-card">
            <p className="eyebrow">Video bienvenue</p>
            <h2>Ce que nous verrons ensemble pendant la demo</h2>
            <p>
              Nous analysons votre visibilite actuelle, votre parcours de contact, vos opportunites
              SEO locales et les gains possibles cote devis, planning ou suivi client.
            </p>
          </article>

          <article className="content-card">
            <p className="eyebrow">Upsell immediat</p>
            <h2>Recevoir votre audit digital gratuit</h2>
            <p>
              En attendant, envoyez-nous simplement l'URL de votre site ou le nom de votre
              entreprise. Nous vous preparons un mini rapport avec 3 axes prioritaires.
            </p>
            <a href={`mailto:${siteConfig.email}`} className="button">
              Recevoir mon audit gratuit
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
