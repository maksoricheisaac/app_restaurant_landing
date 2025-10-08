import { DollarSign, HeadphonesIcon, Shield, Smartphone, Users, Zap } from "lucide-react";
import Link from "next/link";
import { GridBackground } from "@/components/customs/grid-background";

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
        <section className="relative py-20 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 -z-10">
            <GridBackground />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Pourquoi Nous Choisir ?
              </h1>
              <p className="text-xl text-muted-foreground">
                6 raisons qui font d&apos;App_Restaurant le meilleur choix pour digitaliser votre restaurant
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 shadow-elegant border border-border hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <reason.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                  Prêt à digitaliser votre restaurant ?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Profitez d&apos;une solution développée avec passion et expertise par un développeur local qui comprend vos besoins.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  Demander une Démo
                </Link>
              </div>
            </div>
          </div>
        </section>
    )
}