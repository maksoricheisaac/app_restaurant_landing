"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Propriétaire de Restaurant",
      role: "Brazzaville",
      restaurant: "Secteur Restauration",
      image: "👨🏿‍💼",
      rating: 5,
      comment:
        "C'est une superbe idée ! On digitalise les restaurants comme en Occident. Avec la commande en ligne et le menu QR code, on peut vraiment moderniser notre façon de travailler et attirer plus de clients. C'est exactement ce dont le Congo a besoin.",
    },
    {
      name: "Gérant de Restaurant",
      role: "Brazzaville",
      restaurant: "Secteur Hôtellerie-Restauration",
      image: "👩🏿‍💼",
      rating: 5,
      comment:
        "C'est une bonne idée pour la pub et l'image du resto. Avoir un site web professionnel avec commande en ligne, ça donne confiance aux clients. Ça montre qu'on est moderne et sérieux. Les jeunes clients adorent commander en ligne.",
    },
    {
      name: "Community Manager",
      role: "Brazzaville",
      restaurant: "Marketing Digital",
      image: "👨🏿‍💻",
      rating: 5,
      comment:
        "C'est excellent pour l'image de marque ! Un restaurant avec commande en ligne et menu digital, c'est plus facile à promouvoir sur les réseaux sociaux. Les clients peuvent partager, commander directement. C'est un vrai plus pour la visibilité.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ils Ont Transformé Leur Restaurant,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              À Votre Tour
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des restaurateurs comme vous qui ont fait le choix de la digitalisation et ne regrettent rien
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-xl relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                &ldquo;{testimonials[currentIndex].comment}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-3xl">
                  {testimonials[currentIndex].image}
                </div>
                <div>
                  <div className="font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} •{" "}
                    {testimonials[currentIndex].restaurant}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
