"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smartphone, Users, PieChart, MenuSquare, Sliders, Clock, 
  History, CreditCard, ClipboardList, Eye, Bell, LayoutGrid, 
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
        title: "Commande mobile facile",
        description: "Passez vos commandes en quelques clics depuis votre smartphone",
      },
      {
        icon: MenuSquare,
        title: "Menu interactif",
        description: "Explorez le menu avec photos et descriptions détaillées",
      },
      {
        icon: Sliders,
        title: "Personnalisation des plats",
        description: "Ajustez vos commandes selon vos préférences",
      },
      {
        icon: Clock,
        title: "Suivi en temps réel",
        description: "Suivez l'état de votre commande en direct",
      },
      {
        icon: History,
        title: "Historique des commandes",
        description: "Retrouvez facilement vos commandes précédentes",
      },
      {
        icon: CreditCard,
        title: "Paiement sécurisé",
        description: "Payez en toute sécurité avec plusieurs options de paiement",
      },
    ],
    equipe: [
      {
        icon: ClipboardList,
        title: "Gestion des commandes",
        description: "Gérez toutes les commandes en temps réel",
      },
      {
        icon: Eye,
        title: "Suivi des commandes",
        description: "Suivez le statut de chaque commande",
      },
      {
        icon: Bell,
        title: "Notifications instantanées",
        description: "Recevez des alertes pour chaque nouvelle commande",
      },
      {
        icon: LayoutGrid,
        title: "Gestion des tables",
        description: "Organisez et gérez l'occupation des tables",
      },
      {
        icon: MessageSquare,
        title: "Communication d'équipe",
        description: "Coordonnez-vous efficacement entre cuisine et service",
      },
      {
        icon: Package,
        title: "Gestion du stock",
        description: "Suivez les stocks et recevez des alertes",
      },
      {
        icon: Zap,
        title: "Interface intuitive",
        description: "Travaillez avec une interface simple et rapide",
      },
    ],
    proprietaire: [
      {
        icon: LayoutDashboard,
        title: "Tableau de bord complet",
        description: "Visualisez toutes les métriques importantes en un coup d'œil",
      },
      {
        icon: BarChart3,
        title: "Rapports détaillés",
        description: "Analysez les ventes, revenus et performances",
      },
      {
        icon: FileEdit,
        title: "Gestion du menu",
        description: "Créez et modifiez votre menu facilement",
      },
      {
        icon: UserCog,
        title: "Gestion du personnel",
        description: "Gérez les comptes et permissions de votre équipe",
      },
      {
        icon: Activity,
        title: "Statistiques en temps réel",
        description: "Suivez les performances de votre restaurant en direct",
      },
      {
        icon: TrendingUp,
        title: "Analyse des tendances",
        description: "Identifiez les plats populaires et les heures de pointe",
      },
      {
        icon: Download,
        title: "Export de données",
        description: "Exportez vos données pour la comptabilité",
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
            Fonctionnalités Logiciel Gestion Restaurant Complètes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Logiciel de gestion restaurant avec commande en ligne, caisse enregistreuse, gestion des stocks et menu digital. Solution adaptée aux restaurants, maquis et nganda au Congo.
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

