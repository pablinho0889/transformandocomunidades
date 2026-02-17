import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$59",
    period: "/mes",
    description: "Acceso esencial a la plataforma",
    features: [
      "Acceso a cursos básicos",
      "Comunidad general",
      "Reto de 7 días",
      "Soporte por email",
      "Recursos descargables",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$254",
    period: "/mes",
    description: "Para quienes buscan resultados reales",
    features: [
      "Todos los cursos disponibles",
      "Comunidad premium con gamificación",
      "Retos de 7 y 21 días",
      "Mentoría grupal semanal",
      "Acceso a la Fundación",
      "Soporte prioritario",
      "Certificaciones",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "$1200",
    period: "/mes",
    description: "Transformación total y acompañamiento",
    features: [
      "Todo lo del plan Pro",
      "Mentoría 1-a-1",
      "Acceso VIP a eventos",
      "Mastermind exclusivo",
      "Plan personalizado",
      "Línea directa de soporte",
      "Contenido exclusivo",
    ],
    highlighted: false,
  },
];

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section id="planes" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-hero-glow opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal variant="blur">
            <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-4 uppercase tracking-wider">
              Planes
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1} variant="mask">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Elige tu camino de{" "}
              <span className="text-gradient">transformación</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.18} variant="blur">
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cada plan está diseñado para llevarte al siguiente nivel
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={0.15 + index * 0.12} variant="rise">
              <motion.div
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  transition: { duration: 0.4, ease: easeOutExpo },
                }}
                animate={
                  selectedPlan === plan.name
                    ? { scale: [1, 1.05, 1.02], transition: { duration: 0.5 } }
                    : {}
                }
                className={`relative rounded-2xl p-8 h-full flex flex-col cursor-pointer transition-shadow duration-500 ${
                  plan.highlighted
                    ? "bg-gradient-primary shadow-glow border-0"
                    : "glass-card shadow-card-dark hover:cinematic-card-hover"
                } ${selectedPlan === plan.name ? "ring-2 ring-primary/60" : ""}`}
                onClick={() => setSelectedPlan(plan.name)}
                style={{
                  boxShadow: plan.highlighted
                    ? undefined
                    : selectedPlan === plan.name
                    ? "0 20px 60px -15px hsl(0 0% 0% / 0.7), 0 0 40px -10px hsl(24 95% 53% / 0.25)"
                    : undefined,
                }}
              >
                {plan.highlighted && (
                  <motion.div
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <span className="bg-background text-primary text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      MÁS POPULAR
                    </span>
                  </motion.div>
                )}

                {/* Hover glow overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: plan.highlighted
                      ? "transparent"
                      : "radial-gradient(circle at 50% 0%, hsl(24 95% 53% / 0.08), transparent 70%)",
                  }}
                />

                <div className="mb-6 relative z-10">
                  <h3
                    className={`font-display text-xl font-bold mb-2 ${
                      plan.highlighted ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 relative z-10">
                  <span className={`text-4xl font-display font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-3 mb-8 flex-grow relative z-10">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                      <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}`}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden ${
                    plan.highlighted
                      ? "bg-background text-foreground hover:bg-secondary"
                      : "bg-gradient-primary text-primary-foreground"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Comenzar ahora</span>
                </motion.button>

                {/* Selection confirmation */}
                <AnimatePresence>
                  {selectedPlan === plan.name && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-primary/40 pointer-events-none"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
