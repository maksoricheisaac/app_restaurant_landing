"use client"
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Combien coûte App_Restaurant ?",
      answer:
        "Le pack complet Restaurant Pro+ est à 350 000 FCFA en paiement unique (au lieu de 700 000 FCFA). Cela inclut tout : application, installation, formation, support 6 mois et hébergement 1 an. Pas d'abonnement mensuel ! Options de paiement : comptant, 2 fois ou 3 fois sans frais.",
    },
    {
      question: "Combien de temps prend la mise en place ?",
      answer:
        "Seulement 7 jours ! Installation complète, personnalisation, formation de votre équipe et tests inclus. Vous serez opérationnel en moins d'une semaine.",
    },
    {
      question: "Dois-je acheter du matériel spécial ?",
      answer:
        "Non ! App_Restaurant fonctionne sur vos appareils existants : smartphones, tablettes ou ordinateurs. Nous recommandons une tablette pour la cuisine et une pour la caisse, mais ce n'est pas obligatoire.",
    },
    {
      question: "Y a-t-il des frais cachés ou récurrents ?",
      answer:
        "Aucun frais caché ! Le paiement unique de 350 000 FCFA inclut tout pour la première année. À partir de la 2ème année, seul l'hébergement est à renouveler (50 000 FCFA/an). Aucun abonnement mensuel obligatoire.",
    },
    {
      question: "Proposez-vous une formation ?",
      answer:
        "Oui ! Formation initiale d'une journée complète (6h) incluse dans le pack. Vous recevrez aussi un manuel utilisateur, 15+ vidéos tutorielles en accès à vie, et un guide de démarrage rapide.",
    },
    {
      question: "Quel support est inclus ?",
      answer:
        "Support technique pendant 6 mois inclus : WhatsApp (7j/7, 8h-20h), Email (réponse sous 24h), Téléphone (Lun-Sam, 9h-18h), et 1 intervention sur site comprise. Support local en français par notre équipe au Congo.",
    },
    {
      question: "Puis-je personnaliser le menu et les prix ?",
      answer:
        "Absolument ! Vous avez un contrôle total : ajout/retrait de plats, modification des prix, upload de photos, gestion des catégories, options et variantes. Tout se fait facilement depuis votre tableau de bord.",
    },
    {
      question: "Puis-je essayer avant de payer ?",
      answer:
        "Oui ! Demandez une démo gratuite de 15 minutes pour voir App_Restaurant en action.",
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
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur App_Restaurant
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg mb-4">Vous avez d&apos;autres questions ?</p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-primary font-semibold hover:underline"
          >
            Contactez-nous →
          </button>
        </motion.div>
      </div>
    </section>
  );
};


