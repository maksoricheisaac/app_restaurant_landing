import { BarChart, Book, Settings, ShoppingCart, Smartphone, Users } from "lucide-react";
import { GridBackground } from "@/components/customs/grid-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - App_Restaurant | Guide Complet d'Utilisation du Logiciel",
  description: "Documentation complète d'App_Restaurant : guides de démarrage, gestion des commandes, configuration, statistiques, gestion d'équipe et application mobile. Tutoriels vidéo et guides étape par étape pour maîtriser votre logiciel de gestion restaurant.",
  openGraph: {
    title: "Documentation - App_Restaurant | Guide Complet d'Utilisation du Logiciel",
    description: "Documentation complète d'App_Restaurant : guides de démarrage, gestion des commandes, configuration, statistiques et tutoriels vidéo pour maîtriser votre logiciel de gestion restaurant.",
    url: "https://app-restaurant-landing.com/documentation",
  },
  alternates: {
    canonical: "https://app-restaurant-landing.com/documentation",
  },
};

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
        <section className="relative py-12 sm:py-20 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 -z-10">
            <GridBackground />
          </div>
          <div className="container mx-auto px-3 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent px-2">
                Documentation
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-2">
                Tout ce que vous devez savoir pour maîtriser App_Restaurant
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
              <div className="bg-gradient-primary rounded-2xl p-6 sm:p-8 md:p-12 text-center mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3 sm:mb-4 px-2">
                  Guide Complet d&apos;Utilisation
                </h2>
                <p className="text-sm sm:text-base text-primary-foreground/90 mb-4 sm:mb-6 px-2">
                  Découvrez toutes les fonctionnalités de notre plateforme à travers une documentation détaillée et des exemples pratiques.
                </p>
                <button className="bg-background text-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-1 text-sm sm:text-base">
                  Télécharger le PDF
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-4 sm:p-6 lg:p-8 shadow-elegant border border-border hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold break-words">{section.title}</h3>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      {section.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>
                          <a
                            href="#"
                            className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors flex items-start group"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 group-hover:scale-150 transition-transform mt-1.5 flex-shrink-0"></span>
                            <span className="break-words">{topic}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-4 sm:p-8 md:p-12 border border-border">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Tutoriels Vidéo</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 break-words">
                  Préférez apprendre en vidéo ? Découvrez notre bibliothèque complète de tutoriels vidéo qui vous guident pas à pas à travers chaque fonctionnalité de la plateforme.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-muted rounded-lg p-4 sm:p-6 hover:bg-muted/80 transition-colors cursor-pointer">
                    <div className="aspect-video bg-gradient-primary rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-background/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-l-[16px] sm:border-l-[20px] border-l-primary-foreground border-t-[10px] sm:border-t-[12px] border-t-transparent border-b-[10px] sm:border-b-[12px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Démarrage Rapide</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Configuration initiale en 10 minutes</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4 sm:p-6 hover:bg-muted/80 transition-colors cursor-pointer">
                    <div className="aspect-video bg-gradient-primary rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-background/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-l-[16px] sm:border-l-[20px] border-l-primary-foreground border-t-[10px] sm:border-t-[12px] border-t-transparent border-b-[10px] sm:border-b-[12px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Gérer les Commandes</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Workflow complet de A à Z</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}