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
        <div className="container narrow">
          <p className="eyebrow">Etape 3 sur 3</p>
          <h1>Reservez votre demo gratuite et sans engagement</h1>
          <p className="lead">
            Prenons 30 minutes pour analyser votre visibilite Google, vos demandes de devis, votre
            positionnement et les optimisations prioritaires a lancer.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="content-card">
            <h2>Prise de rendez-vous</h2>
            <p>
              Remplissez le formulaire. Nous revenons vers vous avec une premiere recommandation
              claire et un echange utile, sans pression commerciale inutile.
            </p>
            <ContactForm journey={journey} />
          </div>

          <aside className="content-card">
            <h2>Garanties et reponses rapides</h2>
            <ul className="contact-points">
              <li>
                <strong>Calendrier :</strong>{" "}
                <a href={siteConfig.calendarUrl}>Choisir un creneau de 30 minutes</a>
              </li>
              <li>
                <strong>Garantie :</strong> Satisfaction, clarte et accompagnement personnalise
              </li>
              <li>
                <strong>Donnees securisees :</strong> Process simples, transparents et sans spam
              </li>
              <li>
                <strong>Urgence douce :</strong> 3 onboardings approfondis maximum par mois
              </li>
              <li>
                <strong>WhatsApp :</strong> <a href={siteConfig.whatsapp}>Echanger sur WhatsApp</a>
              </li>
            </ul>

            <div className="reassurance-box">
              <h3>30 minutes suffisent pour savoir quoi faire ensuite</h3>
              <p>
                Vous n'avez pas besoin d'arriver avec un brief parfait. Nous clarifions vos
                priorites, les opportunites les plus rentables et la meilleure suite a donner.
              </p>
            </div>

            <div className="reassurance-box">
              <h3>Coordonnees directes</h3>
              <p>
                Telephone : <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </p>
              <p>
                Email : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
              <p>Zone d'intervention : {siteConfig.zone}</p>
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
