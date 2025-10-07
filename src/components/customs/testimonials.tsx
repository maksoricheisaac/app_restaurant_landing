"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Jean-Pierre Makolo",
      role: "Propriétaire",
      restaurant: "Chez JP - Kinshasa",
      image: "👨🏿‍💼",
      rating: 5,
      comment:
        "App_Restaurant a transformé mon restaurant. Les commandes sont devenues fluides, plus d'erreurs, et mes ventes ont augmenté de 40% en 3 mois. Mon équipe adore l'interface !",
    },
    {
      name: "Marie Nsimba",
      role: "Gérante",
      restaurant: "La Tropicale - Pointe-Noire",
      image: "👩🏿‍💼",
      rating: 5,
      comment:
        "Enfin une solution adaptée au Congo ! La mise en place a été rapide et l'équipe de support est toujours disponible. Je recommande à 100%.",
    },
    {
      name: "Patrick Mwamba",
      role: "Chef & Propriétaire",
      restaurant: "Le Gourmet - Brazzaville",
      image: "👨🏿‍🍳",
      rating: 5,
      comment:
        "Le tableau de bord me permet de tout contrôler en temps réel, même quand je ne suis pas sur place. Un vrai game-changer pour mon business !",
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
            Ils nous font déjà confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que nos restaurateurs partenaires disent d&apos;App_Restaurant
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
