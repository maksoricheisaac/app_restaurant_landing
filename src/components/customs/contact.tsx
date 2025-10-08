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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Prêt à Transformer{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Votre Restaurant
            </span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contactez-moi maintenant pour une démo gratuite. Dans 7 jours, votre restaurant pourrait déjà être digitalisé et générer plus de ventes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.value}</p>
              </motion.a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-primary rounded-2xl p-12 text-center text-primary-foreground"
          >
            <MessageCircle className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Parlons de Votre Restaurant</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
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
                className="text-lg px-8 py-6"
              >
                <MessageCircle className="mr-2 w-6 h-6" />
                Écrire sur WhatsApp Maintenant
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
