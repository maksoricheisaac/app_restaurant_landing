import { GridBackground } from "@/components/customs/grid-background";

export default function About(){
    return (
        <section className="relative py-20 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 -z-10">
            <GridBackground />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                À propos d&apos;App_Restaurant
              </h1>
              <p className="text-xl text-muted-foreground">
                La solution de digitalisation conçue en Afrique, pour les restaurants africains
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-20">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Le Créateur</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    App_Restaurant a été conçue par <strong className="text-foreground">Riche Isaac MAKSO</strong>, développeur web full-stack passionné basé à Brazzaville. Diplômé en informatique de l&apos;École Communautaire de l&apos;Enseignement Supérieur (E.C.E.S), Riche accompagne les entreprises et entrepreneur dans la création d&apos;applications web performantes et scalables.
                  </p>
                  <p>
                    Passionné par le développement web depuis son premier « Hello World », Riche a choisi de mettre son expertise technique (React, Next.js, Tailwind CSS) au service des restaurateurs africains. Sa mission : transformer les idées en plateformes digitales performantes, centrées sur l&apos;utilisateur et optimisées pour la conversion.
                  </p>
                  <p>
                    Avec App_Restaurant, Riche Isaac MAKSO propose une solution complète, intuitive et abordable, spécialement adaptée aux réalités des restaurants en Afrique centrale. Un code propre, maintenable et documenté, avec un engagement total pour votre succès.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}