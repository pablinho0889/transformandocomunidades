import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";

const CTASection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Animated orbital background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ scale: bgScale, rotate: bgRotate }}
      >
        <motion.div
          className="absolute inset-0 rounded-full blur-[180px]"
          style={{ background: "radial-gradient(ellipse, hsl(24 95% 53% / 0.15), hsl(36 100% 50% / 0.08), transparent)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Orbital rings */}
        <motion.div
          className="absolute inset-[15%] rounded-full border border-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-[30%] rounded-full border border-primary/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Rising particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${10 + i * 11}%`,
            bottom: "10%",
          }}
          animate={{
            y: [0, -300],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal variant="cinematic">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              ¿Listo para{" "}
              <span className="text-shimmer">transformar</span>{" "}
              tu realidad?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15} variant="blur">
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Únete a miles de personas que ya están cambiando sus vidas, sus finanzas y su comunidad.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} variant="scale">
            <motion.a
              href="#planes"
              className="inline-block relative bg-gradient-primary text-primary-foreground px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  "0 0 40px -10px hsl(24 95% 53% / 0.3)",
                  "0 0 80px -10px hsl(24 95% 53% / 0.5)",
                  "0 0 40px -10px hsl(24 95% 53% / 0.3)",
                ],
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <span className="relative z-10">Comenzar mi transformación</span>
            </motion.a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
