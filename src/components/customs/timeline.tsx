"use client"
import { motion } from "motion/react";
import { CheckCircle2, Calendar, Settings, GraduationCap, Rocket } from "lucide-react";

export const Timeline = () => {
  const steps = [
    {
      day: "Jour 1-2",
      title: "On Installe Tout Pour Vous",
      description: "Création compte, ajout de votre menu avec photos, configuration paiements. Vous ne faites rien, on s'occupe de tout.",
      icon: Settings,
    },
    {
      day: "Jour 3-4",
      title: "Votre Équipe Devient Experte",
      description: "Formation complète de 6h pour toute l'équipe. Serveurs, cuisiniers, caissiers : tout le monde sait utiliser le logiciel.",
      icon: GraduationCap,
    },
    {
      day: "Jour 5-6",
      title: "On Teste Ensemble, On Ajuste",
      description: "Commandes de test, ajustements selon vos besoins. Tout doit être parfait avant le lancement officiel.",
      icon: CheckCircle2,
    },
    {
      day: "Jour 7",
      title: "Vous Êtes En Ligne !",
      description: "Votre restaurant est digitalisé. Vos clients peuvent commander. On reste avec vous toute la semaine pour assurer.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            <span>Lancement Express</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            De Zéro à Héros en{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              7 Jours Chrono
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Le processus le plus simple et rapide pour digitaliser votre restaurant. Pas de stress, on gère tout.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-primary hidden md:block" />
              )}

              <div className="flex items-start space-x-6 mb-12 md:mb-16">
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-xl p-6 border border-border shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {step.day}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg font-medium mb-4">
            Dans 7 jours, vous pourriez déjà recevoir vos premières commandes en ligne
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold shadow-glow hover:shadow-xl transition-all"
          >
            Commencer maintenant
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
