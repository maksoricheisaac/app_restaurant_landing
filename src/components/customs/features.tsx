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
import dashboard from "@public/dashboard.png"
import iphone from "@public/iphone.png"
import report from "@public/reports.png"
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
    { value: "clients", label: "Pour les clients", icon: Smartphone, image: iphone },
    { value: "equipe", label: "Pour l'équipe", icon: Users, image: dashboard },
    { value: "proprietaire", label: "Pour le propriétaire", icon: PieChart, image: report },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
            Tout Ce Dont Votre Restaurant a Besoin,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              En Une Seule Solution
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Découvrez comment App_Restaurant simplifie chaque aspect de votre activité : des commandes clients à la gestion financière, en passant par votre équipe.
          </p>
        </motion.div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-1 sm:grid-cols-3 h-auto mb-10 sm:mb-14 lg:mb-16 bg-background/50 backdrop-blur-sm p-1 sm:p-1.5 rounded-xl max-w-3xl mx-auto">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-4 sm:px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-lg transition-all duration-300 text-sm sm:text-base font-semibold"
              >
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {Object.entries(features).map(([key, featureList]) => {
              const currentTab = tabsData.find(tab => tab.value === key);
              const isClients = key === 'clients';
              
              return (
                <TabsContent key={key} value={key} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
                  >
                    {/* Image - Order changes on mobile for clients tab */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className={`relative ${isClients ? 'lg:order-2' : 'lg:order-1'} order-1 flex items-center justify-center`}
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-4 sm:p-6 lg:p-8 w-full">
                        <div className="relative aspect-[4/3] w-full flex items-center justify-center">
                          <Image
                            src={currentTab?.image || iphone}
                            alt={`Interface ${key === 'clients' ? 'client' : key === 'equipe' ? 'équipe' : 'propriétaire'} App_Restaurant`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                            priority={key === activeTab}
                          />
                        </div>
                        {/* Decorative gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                      </div>
                      
                      {/* Floating badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg text-sm font-bold hidden sm:block"
                      >
                        {key === 'clients' ? '📱 Mobile' : key === 'equipe' ? '💼 Dashboard' : '📊 Analytics'}
                      </motion.div>
                    </motion.div>

                    {/* Features List */}
                    <div className={`space-y-3 sm:space-y-4 ${isClients ? 'lg:order-1' : 'lg:order-2'} order-2`}>
                      {featureList.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: isClients ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.08, duration: 0.3 }}
                          className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-lg hover:bg-card transition-all duration-300"
                        >
                          <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                            <feature.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2 text-foreground group-hover:text-primary transition-colors">
                              {feature.title}
                            </h3>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              );
            })}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

