import type { Metadata } from "next";
import { blogPosts, siteConfig } from "@/lib/content";

export function buildMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteConfig.domain}${path}`;

  return {
    metadataBase: new URL(siteConfig.domain),
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "fr_FR",
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.domain}/og-btp-digital.svg`,
          width: 1200,
          height: 630,
          alt: "Agence web et marketing digital pour le batiment"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.domain}/og-btp-digital.svg`]
    }
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.domain}/og-btp-digital.svg`,
    areaServed: ["France", "Ile-de-France", "Lyon", "Marseille", "Lille", "Bordeaux", "Toulouse"],
    serviceType: [
      "Agence marketing digital batiment",
      "Creation site internet artisan",
      "SEO artisan batiment",
      "Developpement application metier BTP"
    ],
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address
    }
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      "Creation de site internet pour artisan",
      "Creation de site internet pour entreprise du batiment",
      "Referencement local BTP",
      "Campagnes Google Ads",
      "Developpement d'applications metier BTP"
    ].map((name, index) => ({
      "@type": "Service",
      position: index + 1,
      name,
      provider: {
        "@type": "Organization",
        name: siteConfig.name
      }
    }))
  };
}

export function getFaqSchema(
  entries: Array<{
    question: string;
    answer: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer
      }
    }))
  };
}

export function getArticleSchema(slug: string) {
  const article = blogPosts.find((post) => post.slug === slug);

  if (!article) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    inLanguage: "fr-FR",
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/og-btp-digital.svg`
      }
    },
    mainEntityOfPage: `${siteConfig.domain}/blog/${article.slug}`,
    image: `${siteConfig.domain}/og-btp-digital.svg`
  };
}
