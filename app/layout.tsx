import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import { buildMetadata, getLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Agence marketing digital batiment, creation site artisan et application BTP",
  description:
    "Agence specialisee dans le marketing digital pour les entreprises du batiment, la creation de sites internet pour artisans et le developpement d'applications metier BTP.",
  path: "/"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <StructuredData data={getLocalBusinessSchema()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
