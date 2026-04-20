import type { Metadata } from "next";
import { QualificationForm } from "@/components/QualificationForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Diagnostic digital artisan | Recevez une offre personnalisee pour votre entreprise BTP",
  description:
    "Repondez a 4 questions pour recevoir une orientation claire et une offre adaptee a votre metier du batiment, votre zone et votre priorite business.",
  path: "/diagnostic"
});

export default function DiagnosticPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Qualification</p>
          <h1>Identifiez en 2 minutes le dispositif digital le plus pertinent pour votre activite</h1>
          <p className="lead">
            Cette etape nous permet de personnaliser votre offre selon votre metier, votre zone et
            votre besoin principal, sans vous noyer dans un formulaire interminable.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <QualificationForm />
        </div>
      </section>
    </main>
  );
}
