import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Book, FileText, Mail, MessageCircle, Phone, Video } from "lucide-react";
import { GridBackground } from "@/components/customs/grid-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centre d'Aide - App_Restaurant | FAQ & Support 24/7",
  description: "Trouvez rapidement des réponses à vos questions sur App_Restaurant. FAQ, guides de démarrage, vidéos tutorielles et support client disponible par email, téléphone et WhatsApp. Assistance 24/7 pour votre logiciel de gestion restaurant.",
  openGraph: {
    title: "Centre d'Aide - App_Restaurant | FAQ & Support 24/7",
    description: "Trouvez rapidement des réponses à vos questions sur App_Restaurant. FAQ, guides, vidéos tutorielles et support client disponible 24/7 par email, téléphone et WhatsApp.",
    url: "https://app-restaurant-landing.com/help-center",
  },
  alternates: {
    canonical: "https://app-restaurant-landing.com/help-center",
  },
};

export default function HelpCenter(){
    const resources = [
        {
          icon: Book,
          title: "Guides de démarrage",
          description: "Tutoriels étape par étape pour configurer votre restaurant",
          link: "#"
        },
        {
          icon: Video,
          title: "Vidéos tutorielles",
          description: "Apprenez en vidéo comment utiliser toutes les fonctionnalités",
          link: "#"
        },
        {
          icon: FileText,
          title: "Documentation complète",
          description: "Consultez notre documentation technique détaillée",
          link: "/documentation"
        }
    ];
    
    const faqs = [
        {
          question: "Comment créer mon premier menu ?",
          answer: "Depuis votre tableau de bord, cliquez sur 'Menu' puis 'Ajouter un plat'. Remplissez les informations (nom, prix, description, photo) et validez. Votre plat apparaîtra immédiatement sur votre site de commande en ligne."
        },
        {
          question: "Comment gérer les commandes en temps réel ?",
          answer: "Toutes les nouvelles commandes apparaissent instantanément dans votre tableau de bord avec une notification sonore. Vous pouvez les accepter, les préparer, et marquer comme livrées en un clic."
        },
        {
          question: "Puis-je modifier mes tarifs facilement ?",
          answer: "Oui, vous pouvez modifier vos prix à tout moment depuis le tableau de bord. Les changements sont appliqués immédiatement sur votre site de commande."
        },
        {
          question: "Comment fonctionne le système de paiement ?",
          answer: "Nous supportons les paiements mobiles (Mobile Money, Airtel Money) ainsi que le paiement à la livraison. Vous configurez les modes de paiement acceptés depuis vos paramètres."
        },
        {
          question: "Le système fonctionne-t-il hors ligne ?",
          answer: "L'application nécessite une connexion internet pour synchroniser les commandes. Cependant, vous pouvez consulter votre menu et historique même sans connexion."
        }
    ];

    return (
        <section className="relative py-12 sm:py-20 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 -z-10">
            <GridBackground />
          </div>
          <div className="container mx-auto px-3 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent px-2">
                Centre d&apos;Aide
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-2">
                Trouvez rapidement des réponses à vos questions
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="bg-card rounded-xl p-4 sm:p-6 lg:p-8 shadow-elegant border border-border hover:shadow-xl transition-all hover:-translate-y-1 block"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <resource.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 break-words">{resource.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground break-words">{resource.description}</p>
                </a>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center px-2">Questions Fréquentes</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-lg border border-border px-3 sm:px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      <span className="font-semibold break-words">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground break-words">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-4 sm:p-8 md:p-12 border border-border shadow-elegant">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center px-2">Besoin d&apos;aide supplémentaire ?</h2>
                <p className="text-center text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 px-2">
                  Notre équipe est disponible pour répondre à toutes vos questions
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <a
                    href="mailto:contact@richemakso.site"
                    className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3" />
                    <h3 className="font-semibold mb-2 text-sm sm:text-base">Email</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground break-all">contact@richemakso.site</p>
                  </a>
                  <a
                    href="tel:+242056073456"
                    className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3" />
                    <h3 className="font-semibold mb-2 text-sm sm:text-base">Téléphone</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">+242 05 607 34 56</p>
                  </a>
                  <a
                    href="https://wa.me/242056073456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg hover:bg-muted transition-colors sm:col-span-2 md:col-span-1"
                  >
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3" />
                    <h3 className="font-semibold mb-2 text-sm sm:text-base">WhatsApp</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Disponible 9h-18h</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}