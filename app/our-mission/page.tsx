import { Globe, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { GridBackground } from "@/components/customs/grid-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Mission - App_Restaurant | Digitaliser la Restauration en Afrique",
  description: "Notre mission : digitaliser et moderniser la restauration en Afrique. Découvrez nos valeurs de transparence, qualité, engagement et innovation. Transformer les idées des restaurateurs africains en plateformes digitales performantes avec React, Next.js et Tailwind CSS.",
  openGraph: {
    title: "Notre Mission - App_Restaurant | Digitaliser la Restauration en Afrique",
    description: "Notre mission : digitaliser et moderniser la restauration en Afrique avec transparence, qualité, engagement et innovation. Transformer les idées en plateformes digitales performantes.",
    url: "https://app-restaurant-landing.com/our-mission",
  },
  alternates: {
    canonical: "https://app-restaurant-landing.com/our-mission",
  },
};

export default function OurMission(){
    const values = [
        {
          icon: Lightbulb,
          title: "Transparence",
          description: "Communication à chaque étape, pas de surprise sur les délais ou le budget. Une relation de confiance avec nos clients."
        },
        {
          icon: Rocket,
          title: "Qualité",
          description: "Un code propre, maintenable et documenté. Des solutions performantes et scalables qui durent dans le temps."
        },
        {
          icon: TrendingUp,
          title: "Engagement",
          description: "Votre succès est notre priorité. Support continu et disponibilité pour l'évolution de votre projet."
        },
        {
          icon: Globe,
          title: "Innovation",
          description: "Développer des solutions technologiques de pointe adaptées au contexte africain avec les dernières technologies."
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
                Notre Mission
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-2">
                Digitaliser et moderniser la restauration en Afrique
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12 sm:mb-20">
              <div className="bg-card rounded-2xl p-4 sm:p-8 md:p-12 shadow-elegant border border-border">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Ma Mission</h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p className="sm:text-lg break-words">
                    En tant que développeur web full-stack passionné, ma mission est d&apos;aider les restaurateurs africains à transformer leurs idées en plateformes digitales performantes et scalables.
                  </p>
                  <p className="sm:text-lg break-words">
                    Je mets mon expertise technique (React, Next.js, Tailwind CSS) au service de vos objectifs business pour vous faire gagner du temps et de l&apos;argent en automatisant vos processus métier, booster votre visibilité en ligne et offrir à vos clients une expérience fluide et moderne.
                  </p>
                  <p className="sm:text-lg break-words">
                    Avec App_Restaurant, je m&apos;engage à vous fournir un code propre, maintenable et documenté, avec un support continu et une disponibilité totale pour l&apos;évolution de votre projet. Votre succès est ma priorité.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 px-2">Mes Valeurs</h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-4 sm:p-6 lg:p-8 shadow-elegant border border-border hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 break-words">{value.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground break-words">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    )
}