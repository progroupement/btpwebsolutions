import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactPageContent } from "@/components/ContactPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Parlons de votre site internet, SEO local ou outil métier BTP",
  description:
    "Prenez contact pour faire le point sur votre site internet, votre visibilité Google, votre génération de devis ou votre digitalisation métier dans le bâtiment.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <main>
          <section className="page-hero">
            <div className="container narrow">
              <p className="eyebrow">Contact</p>
              <h1>Préparation de votre page de contact</h1>
            </div>
          </section>
        </main>
      }
    >
      <ContactPageContent />
    </Suspense>
  );
}
