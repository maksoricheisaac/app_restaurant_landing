# 🍽️ App_Restaurant - Landing Page

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwind-css)

Landing page moderne et optimisée SEO pour **App_Restaurant**, le logiciel de gestion restaurant complet conçu pour digitaliser les restaurants au Congo et en Afrique.

## 🎯 À Propos

App_Restaurant est une solution complète de gestion restaurant qui permet aux restaurateurs africains de :
- 📱 Gérer les commandes en ligne (sur place, à emporter, livraison)
- 💰 Utiliser une caisse enregistreuse intégrée (POS)
- 📦 Gérer les stocks avec alertes automatiques
- 🍔 Créer un menu digital interactif avec QR code
- 📊 Accéder à un tableau de bord temps réel
- 💳 Accepter les paiements mobile money (Airtel, MTN)

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ 
- pnpm (recommandé) ou npm

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/app_restaurant_landing.git

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🛠️ Stack Technique

- **Framework** : [Next.js 15.5.4](https://nextjs.org/) (App Router)
- **UI Library** : [React 19.1.0](https://react.dev/)
- **Langage** : [TypeScript 5.x](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS 4.x](https://tailwindcss.com/)
- **Animations** : [Motion](https://motion.dev/)
- **Icons** : [Lucide React](https://lucide.dev/)
- **Components** : [Radix UI](https://www.radix-ui.com/)
- **Forms** : [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## 📁 Structure du Projet

```
app_restaurant_landing/
├── app/                      # App Router (Next.js 15)
│   ├── about/               # Page À propos
│   ├── documentation/       # Page Documentation
│   ├── help-center/         # Page Centre d'aide
│   ├── our-mission/         # Page Notre mission
│   ├── why-us/              # Page Pourquoi nous
│   ├── layout.tsx           # Layout principal avec SEO
│   ├── page.tsx             # Page d'accueil
│   ├── sitemap.ts           # Sitemap dynamique
│   └── manifest.ts          # PWA Manifest
├── src/
│   ├── components/
│   │   ├── customs/         # Composants personnalisés
│   │   │   ├── hero.tsx
│   │   │   ├── features.tsx
│   │   │   ├── pricing.tsx
│   │   │   ├── structured-data.tsx  # Données structurées SEO
│   │   │   └── ...
│   │   └── ui/              # Composants UI réutilisables
│   └── lib/                 # Utilitaires
├── public/                  # Assets statiques
│   ├── logo.png
│   ├── robots.txt
│   └── ...
└── next.config.ts           # Configuration Next.js
```

## 🎨 Fonctionnalités

### Pages
- ✅ **Accueil** - Hero, fonctionnalités, pricing, témoignages, FAQ
- ✅ **À propos** - Présentation du créateur
- ✅ **Documentation** - Guides d'utilisation complets
- ✅ **Centre d'aide** - FAQ et support
- ✅ **Notre mission** - Valeurs et engagement
- ✅ **Pourquoi nous** - 6 raisons de nous choisir

### Optimisations SEO
- ✅ Métadonnées complètes sur toutes les pages
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Données structurées Schema.org (SoftwareApplication, Organization, FAQPage)
- ✅ Sitemap.xml dynamique
- ✅ Robots.txt optimisé
- ✅ PWA Manifest
- ✅ Headers de sécurité
- ✅ Canonical URLs

### Performance
- ✅ Next.js Image optimization
- ✅ Compression activée
- ✅ ETags pour cache
- ✅ Preconnect pour Google Fonts
- ✅ Lazy loading des composants

### UX/UI
- ✅ Design moderne et responsive
- ✅ Animations fluides (Motion)
- ✅ Dark mode ready
- ✅ Composants accessibles (Radix UI)
- ✅ Formulaire de contact validé

## 🔧 Scripts Disponibles

```bash
# Développement
pnpm dev          # Lancer le serveur de dev avec Turbopack

# Production
pnpm build        # Build de production
pnpm start        # Lancer le serveur de production

# Qualité du code
pnpm lint         # Linter ESLint
pnpm tsc --noEmit # Vérification TypeScript
```

## 🌍 SEO & Référencement

### Mots-clés Ciblés
- **Principaux** : logiciel gestion restaurant, commande en ligne restaurant, caisse restaurant, POS restaurant, menu digital QR code
- **Géographiques** : restaurant Congo, restaurant Brazzaville, restaurant Pointe-Noire, digitalisation restaurant Afrique
- **Long-tail** : logiciel de gestion restaurant complet Congo, système caisse restaurant Brazzaville

### Actions Post-Déploiement
1. Remplacer `your-google-verification-code` dans `app/layout.tsx`
2. Soumettre le sitemap à Google Search Console
3. Configurer Google Analytics 4
4. Créer un compte Google My Business
5. Surveiller les Core Web Vitals

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Déployer sur Vercel
vercel

# Ou via GitHub
# Connecter le repo à Vercel pour déploiement automatique
```

### Autres Plateformes
- **Netlify** : Compatible
- **AWS Amplify** : Compatible
- **Docker** : Dockerfile disponible sur demande

## 👨‍💻 Développeur

**Riche Isaac MAKSO**
- Développeur Full-Stack
- Spécialisé en React, Next.js, Tailwind CSS
- Basé à Brazzaville, Congo
- 🌐 [richemakso.site](https://www.richemakso.site)
- 📧 contact@richemakso.site
- 📱 +242 05 607 34 56

## 📄 Licence

© 2025 Riche Isaac MAKSO. Tous droits réservés.

## 🤝 Support

Pour toute question ou assistance :
- **Email** : contact@richemakso.site
- **Téléphone** : +242 05 607 34 56
- **WhatsApp** : +242 05 607 34 56

---

**Fait avec ❤️ au Congo** 🇨🇬
