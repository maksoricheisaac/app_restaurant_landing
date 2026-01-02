"use client"
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export const Pricing = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const packageIncludes = [
    {
      category: "Application Complète",
      items: [
        "Site web professionnel aux couleurs de votre restaurant",
        "Menu interactif avec photos et descriptions",
        "Commande en ligne (Sur place • À emporter • Livraison)",
        "Suivi de commande en temps réel",
        "Interface d'administration complète",
        "Tableau de bord avec statistiques en temps réel",
        "Gestion complète du menu et des catégories",
        "Gestion de tables & Code QR",
        "Système de caisse intégré",
        "Gestion des stocks avec alertes",
        "Rapports et exports (PDF, Excel)",
      ]
    },
    {
      category: "Installation & Configuration",
      items: [
        "Personnalisation complète (logo, couleurs)",
        "Intégration de vos photos",
        "Configuration des zones de livraison",
        "Création des comptes utilisateurs",
        "Tests complets avant lancement",
      ]
    },
    {
      category: "Formation & Accompagnement",
      items: [
        "Formation initiale – 1 journée (6h)",
        "Manuel utilisateur (PDF)",
        "Guide de démarrage rapide",
        "Support technique pendant 6 mois",
      ]
    }
  ];

  const exclusiveBonuses = [
    "Hébergement professionnel pendant 1 an (valeur 120 000 FCFA)",
    "Nom de domaine personnalisé offert (votrerestaur ant.com)",
    "Certificat SSL sécurisé (HTTPS) inclus",
    "Sauvegardes automatiques quotidiennes",
    "Protection anti-DDoS et sécurité renforcée",
    "Maintenance et mises à jour gratuites pendant 1 an",
    "Support technique prioritaire 7j/7",
  ];

  const paymentOptions = [
    {
      name: "Paiement comptant",
      price: "350 000",
      bonus: "Sans frais",
    },
    {
      name: "Paiement en 2 fois",
      price: "175 000 x 2",
      bonus: "Sans frais",
    },
    {
      name: "Paiement en 3 fois",
      price: "116 700 x 3",
      bonus: "Sans frais",
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-20">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>OFFRE DE LANCEMENT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
            Investissez 350 000 FCFA Aujourd&apos;hui,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Gagnez 10x Plus Demain
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 px-2">
            Un seul paiement. Aucun abonnement mensuel. Tout inclus : logiciel complet, installation, formation, support 6 mois, hébergement 1 an. Rentabilisé en moins de 2 mois.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-lg sm:text-2xl line-through text-muted-foreground">700 000 FCFA</span>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">350 000 FCFA</span>
          </div>
          <p className="text-xs sm:text-sm text-primary font-semibold mt-2 px-2">🔥 Économisez 350 000 FCFA - Offre limitée aux 5 premiers</p>
        </motion.div>

        {/* What's Included */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 px-2">Tout Ce Que Vous Obtenez Pour 350 000 FCFA</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 px-2">Valeur réelle : 700 000 FCFA - Vous économisez 50%</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {packageIncludes.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-4 sm:p-6 lg:p-8 border border-border shadow-md hover:shadow-xl transition-shadow"
              >
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6 flex items-center">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm mr-2 sm:mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="break-words">{section.category}</span>
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>


        {/* Exclusive Bonuses for First 3 Restaurants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-accent shadow-glow">
            <div className="text-center mb-4 sm:mb-6">
              <div className="inline-block bg-accent text-accent-foreground px-3 sm:px-4 py-2 rounded-full font-bold mb-4 text-xs sm:text-sm">
                🏆 BONUS EXCLUSIF - 5 Premiers Restaurants Seulement
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold px-2">
                Hébergement Premium OFFERT Pendant 1 An
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mt-2 px-2">
                Valeur 120 000 FCFA - Entièrement pris en charge pour vous
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {exclusiveBonuses.map((bonus, index) => (
                <div key={index} className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-xs sm:text-sm break-words">{bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Payment Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center px-2">Choisissez Votre Mode de Paiement</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {paymentOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-4 sm:p-6 border-2 ${
                  index === 0 ? "border-primary shadow-glow" : "border-border"
                } hover:shadow-xl transition-all`}
              >
                <h4 className="font-bold text-base sm:text-lg mb-2 break-words">
                  {option.name}
                  {index === 0 && <span className="ml-2 text-xs bg-primary/20 px-2 py-1 rounded">POPULAIRE</span>}
                </h4>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-3 break-words">{option.price} <span className="text-xs sm:text-sm text-muted-foreground">FCFA</span></div>
                <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-primary/10 rounded-full">
                  <span className="text-xs sm:text-sm font-semibold text-primary">{option.bonus}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-6 px-2">
            Moyens acceptés : Mobile Money (AIRTEL, MTN) • Espèces • Carte Onyfast
          </p>
        </motion.div>

        {/* Offer Deadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-muted/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-border text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 px-2">⏰ Cette Offre Expire Bientôt</h3>
          <ul className="space-y-2 text-left inline-block">
            <li className="flex items-start space-x-2">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base break-words">Offre valable jusqu&apos;au <strong>25 octobre 2025</strong> uniquement</span>
            </li>
            <li className="flex items-start space-x-2">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base break-words">Limitée aux <strong>5 premiers restaurants</strong> qui réservent</span>
            </li>
          </ul>
          <Button
            variant="hero"
            size="lg"
            className="mt-6 cursor-pointer"
            onClick={() => scrollToSection("#contact")}
          >
            Je Réserve Ma Place
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
