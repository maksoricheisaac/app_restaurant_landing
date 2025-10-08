import { BarChart, Book, Settings, ShoppingCart, Smartphone, Users } from "lucide-react";
import { GridBackground } from "@/components/customs/grid-background";

export default function Documentation(){
    const sections = [
        {
          icon: Book,
          title: "Premiers Pas",
          topics: [
            "Créer votre compte",
            "Configuration initiale",
            "Personnaliser votre profil restaurant",
            "Ajouter votre premier menu"
          ]
        },
        {
          icon: ShoppingCart,
          title: "Gestion des Commandes",
          topics: [
            "Recevoir et traiter les commandes",
            "Système de notifications",
            "Gestion des livraisons",
            "Historique des commandes"
          ]
        },
        {
          icon: Settings,
          title: "Configuration",
          topics: [
            "Paramètres généraux",
            "Modes de paiement",
            "Horaires d'ouverture",
            "Zones de livraison"
          ]
        },
        {
          icon: BarChart,
          title: "Statistiques & Rapports",
          topics: [
            "Tableau de bord analytique",
            "Rapports de ventes",
            "Analyse des performances",
            "Export des données"
          ]
        },
        {
          icon: Users,
          title: "Gestion de l'Équipe",
          topics: [
            "Ajouter des utilisateurs",
            "Rôles et permissions",
            "Suivi des performances",
            "Communication interne"
          ]
        },
        {
          icon: Smartphone,
          title: "Application Mobile",
          topics: [
            "Installation de l'app",
            "Utilisation hors ligne",
            "Notifications push",
            "Synchronisation des données"
          ]
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
                Documentation
              </h1>
              <p className="text-xl text-muted-foreground">
                Tout ce que vous devez savoir pour maîtriser App_Restaurant
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center mb-12">
                <h2 className="text-2xl font-bold text-primary-foreground mb-4">
                  Guide Complet d&apos;Utilisation
                </h2>
                <p className="text-primary-foreground/90 mb-6">
                  Découvrez toutes les fonctionnalités de notre plateforme à travers une documentation détaillée et des exemples pratiques.
                </p>
                <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-1">
                  Télécharger le PDF
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-8 shadow-elegant border border-border hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <section.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold">{section.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {section.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>
                          <a
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                            {topic}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
                <h2 className="text-2xl font-bold mb-6">Tutoriels Vidéo</h2>
                <p className="text-muted-foreground mb-8">
                  Préférez apprendre en vidéo ? Découvrez notre bibliothèque complète de tutoriels vidéo qui vous guident pas à pas à travers chaque fonctionnalité de la plateforme.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted rounded-lg p-6 hover:bg-muted/80 transition-colors cursor-pointer">
                    <div className="aspect-video bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                      <div className="w-16 h-16 bg-background/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-l-[20px] border-l-primary-foreground border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">Démarrage Rapide</h4>
                    <p className="text-sm text-muted-foreground">Configuration initiale en 10 minutes</p>
                  </div>
                  <div className="bg-muted rounded-lg p-6 hover:bg-muted/80 transition-colors cursor-pointer">
                    <div className="aspect-video bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                      <div className="w-16 h-16 bg-background/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-l-[20px] border-l-primary-foreground border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">Gérer les Commandes</h4>
                    <p className="text-sm text-muted-foreground">Workflow complet de A à Z</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}