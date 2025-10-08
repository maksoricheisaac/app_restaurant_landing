"use client"
import { motion } from "motion/react";
import { 
  ClipboardX, 
  ClipboardCheck, 
  Frown, 
  Smile, 
  Calculator, 
  Receipt, 
  EyeOff, 
  BarChart3, 
  PackageX, 
  PackageCheck 
} from "lucide-react";

export const ProblemSolution = () => {
  const comparisons = [
    {
      problem: "Commandes oubliées, clients furieux qui partent",
      problemIcon: ClipboardX,
      solution: "Chaque commande enregistrée et traçée automatiquement",
      solutionIcon: ClipboardCheck,
    },
    {
      problem: "Files d'attente interminables, clients impatients",
      problemIcon: Frown,
      solution: "Commande en ligne = service 3x plus rapide",
      solutionIcon: Smile,
    },
    {
      problem: "Erreurs de calcul, disputes avec les clients",
      problemIcon: Calculator,
      solution: "Calculs parfaits à chaque fois, zéro dispute",
      solutionIcon: Receipt,
    },
    {
      problem: "Vous ne savez pas si vous gagnez ou perdez de l'argent",
      problemIcon: EyeOff,
      solution: "Voyez vos profits en direct, prenez les bonnes décisions",
      solutionIcon: BarChart3,
    },
    {
      problem: "Ruptures de stock fréquentes, clients déçus",
      problemIcon: PackageX,
      solution: "Alertes automatiques, jamais à court d'ingrédients",
      solutionIcon: PackageCheck,
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
            Vous Reconnaissez{" "}
            <span className="text-primary">Ces Problèmes</span> ?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Chaque jour sans logiciel, c&apos;est de l&apos;argent perdu, des clients insatisfaits et du stress inutile. Il est temps de changer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <ClipboardX className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-destructive break-words">Votre Quotidien Aujourd&apos;hui</h3>
            </div>
            {comparisons.map((item, index) => {
              const ProblemIcon = item.problemIcon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 lg:p-5 rounded-xl bg-destructive/5 border-2 border-destructive/20 hover:border-destructive/40 transition-colors"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <ProblemIcon className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base pt-1.5 break-words">{item.problem}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <PackageCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary break-words">Votre Quotidien Avec App_Restaurant</h3>
            </div>
            {comparisons.map((item, index) => {
              const SolutionIcon = item.solutionIcon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 lg:p-5 rounded-xl bg-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <SolutionIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm sm:text-base pt-1.5 break-words">{item.solution}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

