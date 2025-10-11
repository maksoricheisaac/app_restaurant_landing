export function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce qu'App_Restaurant ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "App_Restaurant est un logiciel de gestion restaurant complet qui permet de gérer les commandes en ligne, la caisse enregistreuse, les stocks, le menu digital avec QR code et la livraison. Solution 100% congolaise adaptée aux restaurants africains."
        }
      },
      {
        "@type": "Question",
        "name": "Combien coûte App_Restaurant ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "App_Restaurant coûte 350 000 FCFA en paiement unique, sans abonnement mensuel. Ce prix inclut toutes les fonctionnalités, le support 24/7 et les mises à jour."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles sont les fonctionnalités principales ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les fonctionnalités principales incluent : commande en ligne (sur place, à emporter, livraison), système de caisse enregistreuse (POS), gestion des stocks avec alertes, menu digital avec QR code, tableau de bord temps réel, gestion des tables, application mobile, gestion du personnel et paiement mobile money."
        }
      },
      {
        "@type": "Question",
        "name": "Le système fonctionne-t-il au Congo ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, App_Restaurant est spécialement conçu pour les restaurants au Congo (Brazzaville, Pointe-Noire) et en Afrique centrale. Le système supporte les paiements mobile money locaux (Airtel Money, MTN Mobile Money) et est adapté aux réalités du marché africain."
        }
      },
      {
        "@type": "Question",
        "name": "Quel support est disponible ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous offrons un support 24/7 par email, téléphone et WhatsApp. L'installation prend 7 jours et inclut la formation complète de votre équipe. Un développeur local est disponible pour vous accompagner."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

export function OrganizationStructuredData() {
  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "App_Restaurant",
    "url": "https://app-restaurant-landing.com",
    "logo": "https://app-restaurant-landing.com/logo.png",
    "description": "Logiciel de gestion restaurant complet pour digitaliser votre établissement au Congo et en Afrique.",
    "founder": {
      "@type": "Person",
      "name": "Riche Isaac MAKSO",
      "jobTitle": "Développeur Full-Stack",
      "url": "https://www.richemakso.site"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brazzaville",
      "addressCountry": "CG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+242-05-607-34-56",
      "contactType": "Customer Service",
      "email": "contact@richemakso.site",
      "availableLanguage": ["French"]
    },
    "sameAs": [
      "https://www.richemakso.site"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
    />
  );
}
