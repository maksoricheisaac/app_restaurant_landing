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
        "Plan de salle interactif + QR codes (10 tables)",
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
        "Paramétrage des moyens de paiement",
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
      bonus: "+1 mois de support offert",
    },
    {
      name: "Paiement en 2 fois",
      price: "175 000 x 2",
      bonus: "Sans frais",
    },
    {
      name: "Paiement en 3 fois",
      price: "120 000 x 3",
      bonus: "Sans frais",
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>OFFRE DE LANCEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Investissez 350 000 FCFA Aujourd&apos;hui,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Gagnez 10x Plus Demain
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Un seul paiement. Aucun abonnement mensuel. Tout inclus : logiciel complet, installation, formation, support 6 mois, hébergement 1 an. Rentabilisé en moins de 2 mois.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-2xl line-through text-muted-foreground">700 000 FCFA</span>
            <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">350 000 FCFA</span>
          </div>
          <p className="text-sm text-primary font-semibold mt-2">🔥 Économisez 350 000 FCFA - Offre limitée aux 5 premiers</p>
        </motion.div>

        {/* What's Included */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Tout Ce Que Vous Obtenez Pour 350 000 FCFA</h3>
            <p className="text-muted-foreground mb-8">Valeur réelle : 700 000 FCFA - Vous économisez 50%</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packageIncludes.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border shadow-md hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">
                    {index + 1}
                  </span>
                  {section.category}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
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
          <div className="bg-card rounded-2xl p-8 border-2 border-accent shadow-glow">
            <div className="text-center mb-6">
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold mb-4">
                🏆 BONUS EXCLUSIF - 5 Premiers Restaurants Seulement
              </div>
              <h3 className="text-2xl font-bold">
                Hébergement Premium OFFERT Pendant 1 An
              </h3>
              <p className="text-muted-foreground mt-2">
                Valeur 120 000 FCFA - Entièrement pris en charge pour vous
              </p>
            </div>
            <div className="space-y-3">
              {exclusiveBonuses.map((bonus, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{bonus}</span>
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
          <h3 className="text-2xl font-bold mb-8 text-center">Choisissez Votre Mode de Paiement</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {paymentOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-6 border-2 ${
                  index === 0 ? "border-primary shadow-glow" : "border-border"
                } hover:shadow-xl transition-all`}
              >
                <h4 className="font-bold text-lg mb-2">
                  {option.name}
                  {index === 0 && <span className="ml-2 text-xs bg-primary/20 px-2 py-1 rounded">POPULAIRE</span>}
                </h4>
                <div className="text-3xl font-bold text-primary mb-3">{option.price} <span className="text-sm text-muted-foreground">FCFA</span></div>
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
                  <span className="text-sm font-semibold text-primary">{option.bonus}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6">
            Moyens acceptés : Mobile Money (AIRTEL, MTN) • Espèces • Carte Onyfast
          </p>
        </motion.div>

        {/* Offer Deadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-muted/50 rounded-xl p-8 border border-border text-center"
        >
          <h3 className="text-2xl font-bold mb-4">⏰ Cette Offre Expire Bientôt</h3>
          <ul className="space-y-2 text-left inline-block">
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-primary" />
              <span>Offre valable jusqu&apos;au <strong>25 octobre 2025</strong> uniquement</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-primary" />
              <span>Limitée aux <strong>5 premiers restaurants</strong> qui réservent</span>
            </li>
          </ul>
          <Button
            variant="hero"
            size="lg"
            className="mt-6"
            onClick={() => scrollToSection("#contact")}
          >
            Je Réserve Ma Place
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
