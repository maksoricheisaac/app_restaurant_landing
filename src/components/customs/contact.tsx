"use client"
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "+242 05 607 34 56",
      href: "tel:+242056073456",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@richemakso.site",
      href: "mailto:contact@richemakso.site",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Discutez avec moi",
      href: "https://wa.me/242056073456",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-20">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
            Prêt à Transformer{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Votre Restaurant
            </span>
            ?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Contactez-moi maintenant pour une démo gratuite. Dans 7 jours, votre restaurant pourrait déjà être digitalisé et générer plus de ventes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground break-all">{item.value}</p>
              </motion.a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-primary rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-primary-foreground"
          >
            <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 px-2">Parlons de Votre Restaurant</h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2">
              Un message WhatsApp suffit. Je réponds en moins de 5 minutes. Démo gratuite, sans engagement. Vous décidez après avoir vu.
            </p>
            <a
              href="https://wa.me/242056073456?text=Bonjour%20Riche,%20je%20suis%20int%C3%A9ress%C3%A9%20par%20App_Restaurant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="lg"
                className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-4 sm:py-6 cursor-pointer"
              >
                <MessageCircle className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                Écrire sur WhatsApp Maintenant
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
