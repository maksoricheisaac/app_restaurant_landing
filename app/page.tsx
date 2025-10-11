import { Benefits } from "@/components/customs/benefits";
import { Contact } from "@/components/customs/contact";
import { FAQ } from "@/components/customs/faq";
import { Features } from "@/components/customs/features";
import { Hero } from "@/components/customs/hero";
import { Pricing } from "@/components/customs/pricing";
import { ProblemSolution } from "@/components/customs/problem-solution";
import { Testimonials } from "@/components/customs/testimonials";
import { Timeline } from "@/components/customs/timeline";
import { FAQStructuredData } from "@/components/customs/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App_Restaurant - Logiciel de Gestion Restaurant & Commande en Ligne | Congo Brazzaville",
  description: "Logiciel de gestion restaurant complet pour digitaliser votre établissement. Commande en ligne, caisse enregistreuse, gestion des stocks, menu digital QR code, livraison à domicile. Solution 100% congolaise adaptée aux restaurants africains. 350 000 FCFA sans abonnement - Brazzaville, Pointe-Noire, Congo.",
  openGraph: {
    title: "Logiciel de Gestion Restaurant & Commande en Ligne | Congo Brazzaville",
    description: "Logiciel complet pour gérer votre restaurant : commande en ligne, caisse enregistreuse, gestion stocks, menu QR code, livraison. Solution congolaise adaptée aux restaurants africains. 350 000 FCFA sans abonnement mensuel.",
    url: "https://app-restaurant-landing.com",
  },
  alternates: {
    canonical: "https://app-restaurant-landing.com",
  },
};

export default function Home(){
  return (
    <>
      <FAQStructuredData />
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Features />
      <Pricing />
      <Timeline />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}