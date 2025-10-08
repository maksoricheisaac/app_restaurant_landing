"use client"
import { motion } from "motion/react";
import { TrendingUp, Clock, ShieldCheck, BarChart3 } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Explosez Votre Chiffre d'Affaires",
      description: "Vos clients commandent 24/7, même quand vous dormez. Menu QR code qui booste les ventes. Identifiez vos best-sellers et maximisez vos profits. Résultat : +35% de CA en moyenne.",
      stats: "Jusqu'à +40% de ventes supplémentaires",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Clock,
      title: "Libérez Votre Temps Précieux",
      description: "Fini les calculs manuels, les tickets à la main, les erreurs de caisse. Tout est automatisé. Concentrez-vous sur ce qui compte : vos clients et votre croissance.",
      stats: "3 heures redonnées chaque jour",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: ShieldCheck,
      title: "Zéro Erreur, Zéro Perte",
      description: "Plus de commandes mal prises. Plus d'erreurs de calcul. Plus de vols discrets. Chaque franc est traçé. Votre marge est protégée.",
      stats: "90% d'erreurs en moins = plus de profit",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: BarChart3,
      title: "Prenez le Contrôle Total",
      description: "Sachez exactement ce qui se passe dans votre restaurant, même à distance. Chiffres clairs, décisions rapides, croissance maîtrisée. Vous êtes le patron, vraiment.",
      stats: "Visibilité complète 24/7",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
            Ce Que App_Restaurant Va{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Changer Pour Vous
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Des résultats concrets et mesurables dès les premières semaines. Rejoignez les restaurateurs qui ont transformé leur business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card rounded-xl p-4 sm:p-6 border border-border shadow-md hover:shadow-xl transition-all"
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 ${benefit.bgColor} rounded-lg flex items-center justify-center mb-3 sm:mb-4`}
              >
                <benefit.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${benefit.color}`} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 break-words">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 break-words">
                {benefit.description}
              </p>
              <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-primary/5 rounded-full border border-primary/20">
                <span className="text-xs sm:text-sm font-semibold text-primary break-words">{benefit.stats}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
