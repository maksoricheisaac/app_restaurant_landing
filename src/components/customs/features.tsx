"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smartphone, Users, PieChart, MenuSquare, Sliders, Clock, 
  History, ClipboardList, Eye, Bell, LayoutGrid, 
  MessageSquare, Package, Zap, LayoutDashboard, BarChart3, 
  FileEdit, UserCog, Activity, TrendingUp, Download 
} from "lucide-react";
import appMobile from "@public/app-mobile.jpg";
import Image from "next/image";

export const Features = () => {
  const [activeTab, setActiveTab] = useState("clients");

  const features = {
    clients: [
      {
        icon: Smartphone,
        title: "Commandez en 30 secondes chrono",
        description: "Vos clients commandent directement depuis leur téléphone. Plus de file d'attente, plus de frustration.",
      },
      {
        icon: MenuSquare,
        title: "Menu qui donne envie",
        description: "Photos appétissantes, descriptions détaillées. Vos plats se vendent tout seuls.",
      },
      {
        icon: Sliders,
        title: "Chaque client est unique",
        description: "Sans piment, extra sauce, sans oignons... Vos clients personnalisent comme ils veulent.",
      },
      {
        icon: Clock,
        title: "Zéro stress pour vos clients",
        description: "Ils voient exactement où en est leur commande : en préparation, prête, en livraison.",
      },
      {
        icon: History,
        title: "Recommander en 1 clic",
        description: "Vos clients fidèles retrouvent leurs plats préférés et recommandent instantanément.",
      }
    ],
    equipe: [
      {
        icon: ClipboardList,
        title: "Toutes vos commandes au même endroit",
        description: "Sur place, à emporter, livraison. Tout centralisé sur une seule interface simple.",
      },
      {
        icon: Eye,
        title: "Plus aucune commande oubliée",
        description: "Chaque commande est traçée du début à la fin. Fini les clients mécontents.",
      },
      {
        icon: Bell,
        title: "Réagissez en temps réel",
        description: "Nouvelle commande ? Votre équipe est alertée instantanément. Service ultra-rapide garanti.",
      },
      {
        icon: LayoutGrid,
        title: "Salle toujours organisée",
        description: "Visualisez vos tables en un coup d'œil. Optimisez votre capacité et votre chiffre d'affaires.",
      },
      {
        icon: MessageSquare,
        title: "Cuisine et salle synchronisées",
        description: "Fini les malentendus. Votre équipe travaille comme une machine bien huilée.",
      },
      {
        icon: Package,
        title: "Ne manquez plus jamais d'ingrédients",
        description: "Alertes automatiques quand un produit est bientôt épuisé. Vos clients ont toujours ce qu'ils veulent.",
      },
      {
        icon: Zap,
        title: "Si simple qu'un enfant pourrait l'utiliser",
        description: "Votre équipe est opérationnelle en 10 minutes. Zéro formation compliquée.",
      },
    ],
    proprietaire: [
      {
        icon: LayoutDashboard,
        title: "Pilotez votre business comme un pro",
        description: "Ventes du jour, plats populaires, performance équipe. Tout ce qui compte, en temps réel.",
      },
      {
        icon: BarChart3,
        title: "Comprenez vraiment votre activité",
        description: "Rapports clairs et actionables. Identifiez ce qui marche et ce qui doit changer.",
      },
      {
        icon: FileEdit,
        title: "Changez votre menu en 2 minutes",
        description: "Nouveau plat ? Prix modifié ? Rupture de stock ? Mettez à jour instantanément depuis votre téléphone.",
      },
      {
        icon: UserCog,
        title: "Contrôlez qui fait quoi",
        description: "Droits d'accès personnalisés. Votre caissier ne voit que ce qu'il doit voir.",
      },
      {
        icon: Activity,
        title: "Sachez toujours où vous en êtes",
        description: "Chiffre d'affaires du jour, commandes en cours, stock restant. Tout en direct.",
      },
      {
        icon: TrendingUp,
        title: "Prenez les bonnes décisions",
        description: "Quel plat cartonne ? Quelle heure est la plus rentable ? Les données vous guident.",
      },
      {
        icon: Download,
        title: "Comptabilité simplifiée",
        description: "Exportez tout en Excel ou PDF. Votre comptable vous remerciera.",
      },
    ],
  };

  const tabsData = [
    { value: "clients", label: "Pour les clients", icon: Smartphone },
    { value: "equipe", label: "Pour l'équipe", icon: Users },
    { value: "proprietaire", label: "Pour le propriétaire", icon: PieChart },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tout Ce Dont Votre Restaurant a Besoin,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              En Une Seule Solution
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment App_Restaurant simplifie chaque aspect de votre activité : des commandes clients à la gestion financière, en passant par votre équipe.
          </p>
        </motion.div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-6xl mx-auto"
        >
          <TabsList className="grid grid-cols-1 sm:grid-cols-3 h-auto mb-12 bg-background">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center justify-center space-x-2 py-4 px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {Object.entries(features).map(([key, featureList]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Features List */}
                  <div className="space-y-6">
                    {featureList.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border hover:shadow-md transition-shadow"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        width={100}
                        height={100}
                        src={appMobile}
                        alt="Application mobile de commande en ligne restaurant - Interface client App_Restaurant pour commander au restaurant"
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

