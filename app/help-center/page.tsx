import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Book, FileText, Mail, MessageCircle, Phone, Video } from "lucide-react";
import { GridBackground } from "@/components/customs/grid-background";

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
        <section className="relative py-20 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 -z-10">
            <GridBackground />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Centre d&apos;Aide
              </h1>
              <p className="text-xl text-muted-foreground">
                Trouvez rapidement des réponses à vos questions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="bg-card rounded-xl p-8 shadow-elegant border border-border hover:shadow-xl transition-all hover:-translate-y-1 block"
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <resource.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground">{resource.description}</p>
                </a>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Questions Fréquentes</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-lg border border-border px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-elegant">
                <h2 className="text-2xl font-bold mb-6 text-center">Besoin d&apos;aide supplémentaire ?</h2>
                <p className="text-center text-muted-foreground mb-8">
                  Notre équipe est disponible pour répondre à toutes vos questions
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <a
                    href="mailto:contact@richemakso.site"
                    className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Mail className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground">contact@richemakso.site</p>
                  </a>
                  <a
                    href="tel:+242056073456"
                    className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Phone className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Téléphone</h3>
                    <p className="text-sm text-muted-foreground">+242 05 607 34 56</p>
                  </a>
                  <a
                    href="https://wa.me/242056073456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-muted transition-colors"
                  >
                    <MessageCircle className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">Disponible 9h-18h</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}