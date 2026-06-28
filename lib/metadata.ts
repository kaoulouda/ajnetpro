// lib/metadata.ts
import type { Metadata } from "next"

const baseUrl = "https://www.ajnetpro.ca"

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ajnetpro – Services de nettoyage professionnels",
    template: "%s | Ajnetpro",
  },
  description:
    "Ajnetpro offre des services de nettoyage résidentiel, commercial et industriel partout au Canada, avec une équipe qualifiée et fiable.",
  keywords: [
    "ajnetpro",
    "entretien canada",
    "nettoyage professionnel",
    "ménage commercial",
    "nettoyage industriel",
    "services de propreté",
    "Canada",
  ],
  authors: [{ name: "Ajnetpro" }],
  creator: "Ajnetpro",
  publisher: "Ajnetpro",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: baseUrl,
    siteName: "Ajnetpro",
    title: "Ajnetpro – Nettoyage professionnel au Canada",
    description:
      "Des solutions d'entretien résidentiel, commercial et industriel adaptées à vos besoins.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Ajnetpro - Services de nettoyage professionnels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajnetpro – Services de nettoyage professionnels",
    description:
      "Services d'entretien et de nettoyage partout au Canada pour particuliers et entreprises.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "business",
  classification: "Cleaning Services",
  // TODO: Remplacer par votre vrai code Google Search Console
  // verification: {
  //   google: "VOTRE_CODE_ICI",
  // },
  other: {
    "article:author": "Ajnetpro",
    "article:publisher": "https://www.ajnetpro.ca",
  },
}
