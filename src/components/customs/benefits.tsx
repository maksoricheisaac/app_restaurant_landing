"use client"
import { motion } from "motion/react";
import { TrendingUp, Clock, ShieldCheck, BarChart3 } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Augmentez vos ventes de 35%",
      description: "Menu digital avec QR code, commande en ligne 24/7 (sur place/à emporter/livraison). Statistiques des plats populaires pour optimiser votre carte. Logiciel adapté aux restaurants congolais.",
      stats: "+30% à +40% de croissance moyenne",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Clock,
      title: "Gagnez 3h par jour",
      description: "Caisse enregistreuse automatique, gestion des commandes simplifiée, tickets générés automatiquement. Interface intuitive pour votre équipe de restaurant ou maquis.",
      stats: "2 à 3 heures économisées par jour",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: ShieldCheck,
      title: "Réduisez les erreurs",
      description: "Synchronisation cuisine-salle en temps réel, calculs automatiques (prix, TVA, monnaie), stock mis à jour automatiquement.",
      stats: "-90% d'erreurs de commande et d'écarts de caisse",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: BarChart3,
      title: "Pilotez votre activité",
      description: "Tableau de bord complet et interactif, rapports de ventes détaillés, suivi du personnel et des performances. Décisions basées sur les données.",
      stats: "Visibilité en temps réel",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Avantages du Logiciel de Gestion Restaurant{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              App_Restaurant
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Logiciel complet pour augmenter vos ventes, optimiser la gestion et digitaliser votre restaurant au Congo
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card rounded-xl p-6 border border-border shadow-md hover:shadow-xl transition-all"
            >
              <div
                className={`w-14 h-14 ${benefit.bgColor} rounded-lg flex items-center justify-center mb-4`}
              >
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {benefit.description}
              </p>
              <div className="inline-flex items-center px-3 py-1 bg-primary/5 rounded-full border border-primary/20">
                <span className="text-sm font-semibold text-primary">{benefit.stats}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
