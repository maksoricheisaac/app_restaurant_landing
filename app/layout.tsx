import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/customs/header";
import { Footer } from "@/components/customs/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App_Restaurant - Logiciel de Gestion Restaurant & Commande en Ligne | Congo Brazzaville",
  description: "Logiciel de gestion restaurant complet pour digitaliser votre établissement. Commande en ligne, caisse enregistreuse, gestion des stocks, menu digital QR code, livraison à domicile. Solution 100% congolaise adaptée aux restaurants africains. 350 000 FCFA sans abonnement - Brazzaville, Pointe-Noire, Congo.",
  keywords: [
    // Mots-clés principaux
    "logiciel gestion restaurant", "application restaurant", "commande en ligne restaurant", "système caisse restaurant", 
    "POS restaurant", "caisse enregistreuse restaurant", "menu digital restaurant", "QR code menu restaurant",
    
    // Fonctionnalités
    "gestion stocks restaurant", "livraison restaurant", "commande à emporter", "réservation table restaurant",
    "tableau de bord restaurant", "statistiques restaurant", "gestion personnel restaurant", "menu interactif",
    
    // Localisation géographique
    "restaurant Congo", "restaurant Brazzaville", "restaurant Pointe-Noire", "restaurant Afrique centrale",
    "digitalisation restaurant Congo", "solution restaurant africain", "restaurant RDC", "restaurant Kinshasa",
    
    // Type d'établissements
    "maquis", "nganda", "restaurant congolais", "fast food", "pizzeria", "café restaurant",
    
    // Problématiques ciblées
    "augmenter ventes restaurant", "gérer restaurant efficacement", "moderniser restaurant",
    "digitaliser restaurant Afrique", "application mobile restaurant", "site web restaurant",
    
    // Développeur
    "Riche Isaac MAKSO", "développeur Congo", "startup tech Congo"
  ],
  authors: [{ name: "Riche Isaac MAKSO", url: "https://www.richemakso.site" }],
  creator: "Riche Isaac MAKSO",
  publisher: "Riche Isaac MAKSO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://app-restaurant.com",
    siteName: "App_Restaurant - Logiciel Gestion Restaurant Congo",
    title: "Logiciel de Gestion Restaurant & Commande en Ligne | Congo Brazzaville",
    description: "Logiciel complet pour gérer votre restaurant : commande en ligne, caisse enregistreuse, gestion stocks, menu QR code, livraison. Solution congolaise adaptée aux restaurants africains. 350 000 FCFA sans abonnement mensuel.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "App_Restaurant - Logiciel de gestion restaurant avec commande en ligne pour restaurants au Congo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logiciel Gestion Restaurant & Commande en Ligne | Congo",
    description: "Digitalisez votre restaurant avec notre logiciel complet : commande en ligne, caisse, stocks, menu digital. Solution congolaise pour restaurants africains. 350 000 FCFA.",
    images: ["/logo.png"],
    creator: "@richemakso",
  },
  alternates: {
    canonical: "https://app-restaurant.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "App_Restaurant - Logiciel de Gestion Restaurant",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "350000",
      "priceCurrency": "XAF",
      "description": "Logiciel de gestion restaurant complet - Paiement unique, sans abonnement mensuel",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-10-25"
    },
    "creator": {
      "@type": "Person",
      "name": "Riche Isaac MAKSO",
      "url": "https://www.richemakso.site",
      "jobTitle": "Développeur Full-Stack",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brazzaville",
        "addressCountry": "CG"
      }
    },
    "publisher": {
      "@type": "Person",
      "name": "Riche Isaac MAKSO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://app-restaurant.com/logo.png"
      }
    },
    "description": "Logiciel de gestion restaurant complet pour digitaliser votre établissement au Congo et en Afrique. Commande en ligne, caisse enregistreuse, gestion des stocks, menu digital avec QR code, livraison à domicile. Solution adaptée aux restaurants, maquis, nganda, fast-food africains.",
    "keywords": "logiciel gestion restaurant, commande en ligne restaurant, caisse restaurant, POS restaurant, menu digital, QR code restaurant, gestion stocks restaurant, restaurant Congo, restaurant Brazzaville, digitalisation restaurant Afrique",
    "featureList": [
      "Commande en ligne (sur place, à emporter, livraison)",
      "Système de caisse enregistreuse intégré (POS)",
      "Gestion des stocks avec alertes automatiques",
      "Menu digital interactif avec QR code",
      "Tableau de bord temps réel avec statistiques",
      "Gestion des tables et plan de salle",
      "Application mobile pour clients",
      "Gestion du personnel et des permissions",
      "Rapports et exports comptables",
      "Paiement mobile money (Airtel, MTN)"
    ],
    "screenshot": "https://app-restaurant.com/hero-restaurant.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "50",
      "bestRating": "5"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Congo, Afrique Centrale",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": ["CG", "CD"]
      }
    }
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          <Header />
          <main>
            {children}
          </main> 
          <Footer />
        </div>
      </body>
    </html>
  );
}
