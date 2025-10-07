"use client"
import { Instagram, Linkedin, Mail, Phone, MapPin, Github, Globe } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const footerLinks = {
    product: [
      { name: "Fonctionnalités", href: "#features" },
      { name: "Tarifs", href: "#pricing" },
      { name: "Témoignages", href: "#testimonials" },
      { name: "FAQ", href: "#" },
    ],
    company: [
      { name: "À propos", href: "/about" },
      { name: "Notre mission", href: "/our-mission" },
      { name: "Pourquoi nous choisir", href: "/why-us" },
    ],
    support: [
      { name: "Centre d'aide", href: "/help-center" },
      { name: "Contact", href: "#contact" },
      { name: "Documentation", href: "/documentation" },
    ],
    legal: [
      { name: "Politique de confidentialité", href: "#" },
      { name: "CGU", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Globe, href: "https://www.richemakso.site", label: "Site Web" },
    { icon: Instagram, href: "https://www.instagram.com/riche_makso/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/riche-isaac-makso", label: "LinkedIn" },
    { icon: Github, href: "https://www.github.com/maksoricheisaac/", label: "Github" },
  ];

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="App_Restaurant Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                App_Restaurant
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Logiciel de gestion restaurant avec commande en ligne, caisse enregistreuse, gestion des stocks et menu digital QR code. Solution 100% congolaise pour restaurants, maquis et nganda en Afrique.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:contact@richemakso.site"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@richemakso.site</span>
              </a>
              <a
                href="tel:+242056073456"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+242 05 607 34 56</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Avenue de l&apos;Indépendance, Brazzaville</span>
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold mb-4">Produit</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4">À propos</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 App_Restaurant – Propulsé par{" "}
            <a
              href="#"
              className="text-primary hover:underline font-medium"
            >
              Riche Isaac MAKSO
            </a>
            . Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

