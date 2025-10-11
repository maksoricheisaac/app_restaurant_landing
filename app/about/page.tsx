import { GridBackground } from "@/components/customs/grid-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos - App_Restaurant | Développeur Full-Stack Riche Isaac MAKSO",
  description: "Découvrez l'histoire d'App_Restaurant, créée par Riche Isaac MAKSO, développeur web full-stack passionné basé à Brazzaville. Diplômé en informatique de l'E.C.E.S, spécialisé en React, Next.js et Tailwind CSS pour digitaliser les restaurants africains.",
  openGraph: {
    title: "À propos - App_Restaurant | Développeur Full-Stack Riche Isaac MAKSO",
    description: "Découvrez l'histoire d'App_Restaurant, créée par Riche Isaac MAKSO, développeur web full-stack passionné basé à Brazzaville, spécialisé en React, Next.js et Tailwind CSS.",
    url: "https://app-restaurant-landing.com/about",
  },
  alternates: {
    canonical: "https://app-restaurant-landing.com/about",
  },
};

export default function About(){
    return (
        <section className="relative py-12 sm:py-20 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 -z-10">
            <GridBackground />
          </div>
          <div className="container mx-auto px-3 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent px-2">
                À propos d&apos;App_Restaurant
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-2">
                La solution de digitalisation conçue en Afrique, pour les restaurants africains
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12 sm:mb-20">
              <div className="bg-card rounded-2xl p-4 sm:p-8 md:p-12 shadow-elegant border border-border">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Le Créateur</h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p className="break-words">
                    App_Restaurant a été conçue par <strong className="text-foreground">Riche Isaac MAKSO</strong>, développeur web full-stack passionné basé à Brazzaville. Diplômé en informatique de l&apos;École Communautaire de l&apos;Enseignement Supérieur (E.C.E.S), Riche accompagne les entreprises et entrepreneur dans la création d&apos;applications web performantes et scalables.
                  </p>
                  <p className="break-words">
                    Passionné par le développement web depuis son premier « Hello World », Riche a choisi de mettre son expertise technique (React, Next.js, Tailwind CSS) au service des restaurateurs africains. Sa mission : transformer les idées en plateformes digitales performantes, centrées sur l&apos;utilisateur et optimisées pour la conversion.
                  </p>
                  <p className="break-words">
                    Avec App_Restaurant, Riche Isaac MAKSO propose une solution complète, intuitive et abordable, spécialement adaptée aux réalités des restaurants en Afrique centrale. Un code propre, maintenable et documenté, avec un engagement total pour votre succès.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}