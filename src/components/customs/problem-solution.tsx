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
      problem: "Commandes mal prises ou perdues",
      problemIcon: ClipboardX,
      solution: "Commandes 100% exactes et traçables",
      solutionIcon: ClipboardCheck,
    },
    {
      problem: "Service lent et clients mécontents",
      problemIcon: Frown,
      solution: "Service rapide et efficace",
      solutionIcon: Smile,
    },
    {
      problem: "Erreurs de facturation fréquentes",
      problemIcon: Calculator,
      solution: "Facturation automatique et sans erreur",
      solutionIcon: Receipt,
    },
    {
      problem: "Aucune visibilité sur les ventes",
      problemIcon: EyeOff,
      solution: "Tableau de bord en temps réel",
      solutionIcon: BarChart3,
    },
    {
      problem: "Gestion des stocks chaotique",
      problemIcon: PackageX,
      solution: "Gestion automatisée des stocks",
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
            Pourquoi un Logiciel de Gestion Restaurant est{" "}
            <span className="text-primary">Indispensable</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sans logiciel de gestion, les restaurants perdent du temps, de l&apos;argent et des clients. Découvrez la différence avec App_Restaurant.
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
              <h3 className="text-2xl font-bold">Sans Logiciel de Gestion</h3>
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
              <h3 className="text-2xl font-bold">Avec Logiciel App_Restaurant</h3>
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

