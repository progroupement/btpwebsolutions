import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Merci | Votre demande a bien été prise en compte",
  description:
    "Confirmation de votre demande, prochaines étapes et prise de rendez-vous pour votre projet digital BTP.",
  path: "/merci"
});

export default function ThankYouPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-shell">
          <div className="page-hero-copy">
            <p className="eyebrow">Merci</p>
            <h1>Votre demande a bien été prise en compte</h1>
            <p className="lead">
              Nous revenons vers vous rapidement avec un premier cadrage. Si vous le souhaitez, vous
              pouvez aussi réserver directement un créneau d&apos;échange.
            </p>
          </div>
          <aside className="page-hero-aside">
            <p className="eyebrow small">Prochaine étape</p>
            <h2>Un échange utile et cadré</h2>
            <div className="page-hero-points">
              <div className="page-hero-point">
                <strong>Analyse rapide</strong>
                <span>Nous préparons un premier regard sur votre site, votre visibilité ou votre besoin.</span>
              </div>
              <div className="page-hero-point">
                <strong>Prise de rendez-vous</strong>
                <span>Vous pouvez vérifier ou choisir un créneau à tout moment.</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container offer-layout">
          <article className="content-card">
            <p className="eyebrow">Suite du parcours</p>
            <h2>Ce qui se passe maintenant</h2>
            <p>
              Votre demande est enregistrée. Nous analysons votre besoin, puis nous revenons vers
              vous avec une réponse claire et les prochaines étapes adaptées à votre projet.
            </p>
            <Link href={siteConfig.calendarUrl} className="text-link">
              Réserver ou vérifier un créneau
            </Link>
          </article>

          <article className="content-card">
            <p className="eyebrow">Pendant l&apos;échange</p>
            <h2>Ce que nous verrons ensemble</h2>
            <p>
              Nous passons en revue votre visibilité actuelle, votre site, votre génération de
              demandes de devis et les priorités les plus rentables à traiter.
            </p>
          </article>

          <article className="content-card">
            <p className="eyebrow">Audit rapide</p>
            <h2>Recevoir un premier retour sur votre présence en ligne</h2>
            <p>
              Vous pouvez aussi nous envoyer l&apos;adresse de votre site ou le nom de votre
              entreprise par email pour recevoir un premier avis ciblé.
            </p>
            <a href={`mailto:${siteConfig.email}`} className="button">
              Envoyer mon site
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
