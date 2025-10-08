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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Vous Reconnaissez{" "}
            <span className="text-primary">Ces Problèmes</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque jour sans logiciel, c&apos;est de l&apos;argent perdu, des clients insatisfaits et du stress inutile. Il est temps de changer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <ClipboardX className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-destructive">Votre Quotidien Aujourd&apos;hui</h3>
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
                  className="flex items-start space-x-4 p-5 rounded-xl bg-destructive/5 border-2 border-destructive/20 hover:border-destructive/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <ProblemIcon className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="text-foreground text-base pt-1.5">{item.problem}</span>
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
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <PackageCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Votre Quotidien Avec App_Restaurant</h3>
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
                  className="flex items-start space-x-4 p-5 rounded-xl bg-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <SolutionIcon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-base pt-1.5">{item.solution}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

