import type { Metadata } from "next";
import { Suspense } from "react";
import { OfferPageContent } from "@/components/OfferPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Offre personnalisee | Strategie digitale pour artisan et entreprise du batiment",
  description:
    "Decouvrez une offre adaptee a votre metier du batiment, vos objectifs de leads et votre zone d'intervention.",
  path: "/offre"
});

export default function OfferPage() {
  return (
    <Suspense fallback={<main><section className="page-hero"><div className="container narrow"><p className="eyebrow">Offre</p><h1>Chargement de votre offre personnalisee</h1></div></section></main>}>
      <OfferPageContent />
    </Suspense>
  );
}
