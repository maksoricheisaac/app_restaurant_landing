import { Globe, Lightbulb, Rocket, TrendingUp } from "lucide-react";

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
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Notre Mission
              </h1>
              <p className="text-xl text-muted-foreground">
                Digitaliser et moderniser la restauration en Afrique
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-20">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Ma Mission</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    En tant que développeur web full-stack passionné, ma mission est d&apos;aider les restaurateurs africains à transformer leurs idées en plateformes digitales performantes et scalables.
                  </p>
                  <p className="text-lg">
                    Je mets mon expertise technique (React, Next.js, Tailwind CSS) au service de vos objectifs business pour vous faire gagner du temps et de l&apos;argent en automatisant vos processus métier, booster votre visibilité en ligne et offrir à vos clients une expérience fluide et moderne.
                  </p>
                  <p className="text-lg">
                    Avec App_Restaurant, je m&apos;engage à vous fournir un code propre, maintenable et documenté, avec un support continu et une disponibilité totale pour l&apos;évolution de votre projet. Votre succès est ma priorité.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Mes Valeurs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-8 shadow-elegant border border-border hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    )
}