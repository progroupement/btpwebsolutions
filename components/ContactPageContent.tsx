"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { ScheduleEmbed } from "@/components/ScheduleEmbed";
import { siteConfig } from "@/lib/content";

export function ContactPageContent() {
  const searchParams = useSearchParams();
  const journey = {
    trade: searchParams.get("trade") || "",
    area: searchParams.get("area") || "",
    team: searchParams.get("team") || "",
    pain: searchParams.get("pain") || ""
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-shell">
          <div className="page-hero-copy">
            <p className="eyebrow">Contact</p>
            <h1>Parlons de votre site internet, de votre SEO local ou de vos outils métier</h1>
            <p className="lead">
              Prenons 30 minutes pour faire le point sur votre visibilité Google, vos demandes de
              devis, votre positionnement et les optimisations prioritaires à lancer.
            </p>
          </div>
          <aside className="page-hero-aside">
            <p className="eyebrow small">Échange utile</p>
            <h2>Ce que vous obtenez</h2>
            <div className="page-hero-points">
              <div className="page-hero-point">
                <strong>Un cadrage clair</strong>
                <span>Nous identifions les priorités site, SEO local ou digitalisation métier.</span>
              </div>
              <div className="page-hero-point">
                <strong>Des coordonnées directes</strong>
                <span>{siteConfig.phone} · {siteConfig.email}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="content-card">
            <h2>Décrivez votre besoin</h2>
            <p>
              Remplissez le formulaire. Nous revenons vers vous avec une première recommandation
              claire, utile et adaptée à votre situation.
            </p>
            <ContactForm journey={journey} />
          </div>

          <aside className="content-card">
            <h2>Ce que vous obtenez</h2>
            <ul className="contact-points">
              <li>
                <strong>Échange cadré :</strong> un point clair sur votre site, votre SEO local ou
                votre organisation digitale
              </li>
              <li>
                <strong>Vision concrète :</strong> les priorités à traiter en premier
              </li>
              <li>
                <strong>Process simple :</strong> pas de jargon, pas de pression commerciale, pas de
                parcours compliqué
              </li>
              <li>
                <strong>WhatsApp :</strong> <a href={siteConfig.whatsapp}>Échanger sur WhatsApp</a>
              </li>
            </ul>

            <div className="reassurance-box">
              <h3>Coordonnées directes</h3>
              <p>
                Téléphone : <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </p>
              <p>
                Email : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
              <p>Zone d&apos;intervention : {siteConfig.zone}</p>
            </div>

            <div className="reassurance-box">
              <h3>Prise de rendez-vous</h3>
              <p>
                Si vous préférez, vous pouvez directement choisir un créneau dans notre agenda et
                réserver un échange de 30 minutes.
              </p>
              <a href={siteConfig.calendarUrl} className="text-link">
                Choisir un créneau
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <ScheduleEmbed />
        </div>
      </section>
    </main>
  );
}
