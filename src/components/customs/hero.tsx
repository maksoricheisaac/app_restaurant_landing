"use client"
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Play} from "lucide-react";
import heroImage from "@public/hero-restaurant.jpg";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GridBackground } from "@/components/customs/grid-background";

export const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <GridBackground />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
               Conçu pour les Restaurants Congolais
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Transformez Votre Restaurant en{" "}
              <span className="text-primary">
                Machine à Ventes
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Le seul logiciel de gestion restaurant dont vous avez besoin : Commandes en ligne 24/7, caisse automatique, menu QR code, gestion des stocks. Rejoignez les 50+ restaurants qui ont augmenté leurs ventes de 35% au Congo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("#contact")}
                className="group cursor-pointer"
              >
                Démarrer Gratuitement
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => setIsVideoOpen(true)}
                className="cursor-pointer"
              >
                <Play className="mr-2 w-5 h-5" />
                Voir la Démo en Vidéo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">7j</div>
                <div className="text-sm text-muted-foreground">Installation</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                width={100}
                height={100}
                src={heroImage}
                alt="Logiciel de gestion restaurant avec commande en ligne et caisse enregistreuse - App_Restaurant Congo"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  +35%
                </div>
                <div>
                  <div className="font-semibold">Chiffre d&apos;affaires</div>
                  <div className="text-sm text-muted-foreground">Augmentation moyenne</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Démonstration Logiciel Gestion Restaurant - App_Restaurant</DialogTitle>
            <DialogDescription>
              Découvrez notre logiciel de gestion restaurant avec commande en ligne, caisse enregistreuse et menu digital pour restaurants au Congo
            </DialogDescription>
          </DialogHeader>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/JG1TcUROLDE?si=t1uJjSws7kpJPHQ-"
              title="Logiciel Gestion Restaurant & Commande en Ligne - Démonstration App_Restaurant"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};


