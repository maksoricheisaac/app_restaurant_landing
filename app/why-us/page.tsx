import { DollarSign, HeadphonesIcon, Shield, Smartphone, Users, Zap } from "lucide-react";
import Link from "next/link";
import { GridBackground } from "@/components/customs/grid-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pourquoi Nous Choisir - App_Restaurant | 6 Raisons de Digitaliser avec Nous",
  description: "Découvrez 6 raisons de choisir App_Restaurant : développeur expérimenté, code de qualité professionnelle, transparence totale, centré sur l'utilisateur, technologies modernes (Next.js 15, React 19, Tailwind CSS 4) et engagement total. Le meilleur choix pour digitaliser votre restaurant.",
  openGraph: {
    title: "Pourquoi Nous Choisir - App_Restaurant | 6 Raisons de Digitaliser avec Nous",
    description: "6 raisons de choisir App_Restaurant : développeur expérimenté, code de qualité, transparence, technologies modernes et engagement total pour digitaliser votre restaurant.",
    url: "https://app-restaurant-landing.com/why-us",
  },
  alternates: {
    canonical: "https://app-restaurant-landing.com/why-us",
  },
};

export default function WhyUs(){
    const reasons = [
        {
          icon: Shield,
          title: "Développeur expérimenté",
          description: "Conçue par Riche Isaac MAKSO, développeur full-stack diplômé en ingénierie informatique, avec une expertise en React, Next.js et Tailwind CSS."
        },
        {
          icon: Zap,
          title: "Code de qualité professionnelle",
          description: "Un code propre, maintenable et documenté. Des solutions performantes, scalables et optimisées pour la vitesse."
        },
        {
          icon: DollarSign,
          title: "Transparence totale",
          description: "Communication à chaque étape, pas de surprise sur les délais ou le budget. Une relation de confiance basée sur l'honnêteté."
        },
        {
          icon: Users,
          title: "Centré sur l'utilisateur",
          description: "Une expérience fluide, responsive et moderne. Chaque fonctionnalité est pensée pour maximiser la conversion et la satisfaction."
        },
        {
          icon: Smartphone,
          title: "Technologies modernes",
          description: "Utilisation des dernières technologies web (Next.js 15, React 19, Tailwind CSS 4) pour des performances optimales."
        },
        {
          icon: HeadphonesIcon,
          title: "Engagement total",
          description: "Votre succès est ma priorité. Support continu, disponibilité pour l'évolution de votre projet et maintenance incluse."
        }
    ]; 

    return (
        <section className="relative py-12 sm:py-20 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 -z-10">
            <GridBackground />
          </div>
          <div className="container mx-auto px-3 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent px-2">
                Pourquoi Nous Choisir ?
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-2">
                6 raisons qui font d&apos;App_Restaurant le meilleur choix pour digitaliser votre restaurant
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 sm:p-6 lg:p-8 shadow-elegant border border-border hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <reason.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 break-words">{reason.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground break-words">{reason.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-primary rounded-2xl p-6 sm:p-8 md:p-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3 sm:mb-4 px-2">
                  Prêt à digitaliser votre restaurant ?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 px-2">
                  Profitez d&apos;une solution développée avec passion et expertise par un développeur local qui comprend vos besoins.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-background text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-1 text-sm sm:text-base"
                >
                  Demander une Démo
                </Link>
              </div>
            </div>
          </div>
        </section>
    )
}