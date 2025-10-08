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
      question: "Combien ça coûte vraiment ?",
      answer:
        "350 000 FCFA en paiement unique (prix normal : 700 000 FCFA). TOUT est inclus : logiciel complet, installation, formation, support 6 mois, hébergement 1 an. Zéro abonnement mensuel. Zéro frais cachés. Vous pouvez payer comptant (+1 mois de support offert), en 2 fois ou en 3 fois sans frais.",
    },
    {
      question: "En combien de temps je peux démarrer ?",
      answer:
        "7 jours chrono ! Du premier contact au lancement officiel. On installe tout, on personnalise aux couleurs de votre restaurant, on forme votre équipe, on teste ensemble. En une semaine, vous êtes en ligne et opérationnel.",
    },
    {
      question: "J'ai besoin d'acheter du matériel ?",
      answer:
        "Non, zéro achat obligatoire ! App_Restaurant marche sur ce que vous avez déjà : votre smartphone, tablette ou ordinateur. Pour une expérience optimale, on recommande une tablette pour la cuisine et une pour la caisse, mais c'est optionnel.",
    },
    {
      question: "Pas de frais cachés ? Vraiment ?",
      answer:
        "Vraiment ! 350 000 FCFA = TOUT inclus pour 1 an complet. Pas d'abonnement mensuel. Pas de frais de transaction. Pas de surprise. Année 2 et suivantes : seulement 50 000 FCFA/an pour l'hébergement. C'est tout. Promis.",
    },
    {
      question: "Mon équipe va comprendre comment ça marche ?",
      answer:
        "Absolument ! On forme votre équipe pendant 6 heures (inclus). En plus : manuel utilisateur simple, guide de démarrage rapide. L'interface est si intuitive que même quelqu'un qui n'a jamais utilisé un smartphone peut l'utiliser.",
    },
    {
      question: "Si j'ai un problème, vous m'aidez ?",
      answer:
        "Toujours ! Support inclus pendant 6 mois : WhatsApp (7j/7, 8h-20h, réponse en 5-10 min), Email (sous 24h max), Téléphone (Lun-Sam, 9h-18h), + 1 intervention sur place offerte. Support 100% local, en français, par des Congolais qui comprennent votre réalité.",
    },
    {
      question: "Je peux changer mon menu quand je veux ?",
      answer:
        "Quand vous voulez, autant de fois que vous voulez ! Nouveau plat ? Ajoutez-le en 2 minutes. Prix qui change ? Modifiez instantanément. Rupture de stock ? Désactivez le plat d'un clic. Tout depuis votre téléphone. Vous êtes 100% autonome.",
    },
    {
      question: "Je peux voir comment ça marche avant de payer ?",
      answer:
        "Bien sûr ! Demandez une démo gratuite de 15 minutes. Je vous montre tout en direct : interface client, gestion des commandes, tableau de bord. Zéro engagement. Vous décidez après avoir vu.",
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
            Vous Avez Des Questions ?{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              On a Les Réponses
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Les questions que tous nos clients se posent avant de démarrer
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
                className="bg-card border border-border rounded-lg px-3 sm:px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:text-primary break-words">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
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
          className="text-center mt-8 sm:mt-12 px-2"
        >
          <p className="text-base sm:text-lg mb-4">Vous avez d&apos;autres questions ?</p>
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


