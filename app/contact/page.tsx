import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactPageContent } from "@/components/ContactPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Reserver une demo gratuite pour votre entreprise du batiment",
  description:
    "Reservez une demo gratuite pour faire le point sur votre acquisition digitale, votre SEO local et vos opportunites de digitalisation dans le batiment.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <Suspense fallback={<main><section className="page-hero"><div className="container narrow"><p className="eyebrow">Contact</p><h1>Preparation de votre page de conversion</h1></div></section></main>}>
      <ContactPageContent />
    </Suspense>
  );
}
