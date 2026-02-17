import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.png";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const mockupScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated aurora background */}
      <motion.div className="absolute inset-0" style={{ opacity: bgOpacity }}>
        <div className="absolute inset-0 bg-hero-glow" />
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(ellipse, hsl(24 95% 53% / 0.12), hsl(36 100% 50% / 0.06), transparent)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse, hsl(24 95% 53% / 0.08), transparent)" }}
          animate={{
            x: [0, 100, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 14}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center max-w-4xl mx-auto mb-16" style={{ y: titleY }}>
          {/* Badge - blur reveal */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.8 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Plataforma Integral
            </span>
          </motion.div>

          {/* Title - mask reveal line by line */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="font-display text-5xl md:text-7xl font-bold leading-tight"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.4, ease: easeOutExpo }}
            >
              Transforma tu mente.{" "}
              <span className="text-shimmer">Transforma tu vida.</span>{" "}
              Transforma tu comunidad.
            </motion.h1>
          </div>

          {/* Subtitle - blur fade */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 0.7, ease: easeOutExpo }}
          >
            Plataforma integral de educación financiera, liderazgo, comunidad y transformación real para la comunidad latina.
          </motion.p>

          {/* Buttons - staggered scale */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: easeOutExpo }}
          >
            <motion.a
              href="#planes"
              className="relative bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold shadow-glow transition-all duration-300 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Entrar a la Academy</span>
              <motion.div
                className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100"
                animate={{ boxShadow: ["0 0 30px -10px hsl(24 95% 53% / 0.3)", "0 0 60px -10px hsl(24 95% 53% / 0.6)", "0 0 30px -10px hsl(24 95% 53% / 0.3)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.a>
            <motion.a
              href="#academy"
              className="px-8 py-4 rounded-xl text-base font-semibold border border-border hover:border-primary/50 text-foreground transition-all duration-300 hover:bg-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Explorar Programas
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Mockup - dramatic 3D entrance */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ y: 200, opacity: 0, scale: 0.7, rotateX: 25, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 0.8, ease: easeOutExpo }}
          style={{ perspective: "1200px", y: mockupY, scale: mockupScale }}
        >
          <div className="relative rounded-2xl overflow-hidden mockup-shadow border-glow">
            <img
              src={heroMockup}
              alt="Transformando Comunidades Dashboard"
              className="w-full h-auto"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            {/* Animated scan line */}
            <motion.div
              className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              initial={{ top: "0%" }}
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
            />
          </div>
          {/* Ambient glow under mockup */}
          <motion.div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 rounded-full blur-3xl"
            style={{ background: "hsl(24 95% 53% / 0.15)" }}
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Section transition gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0.3, 0.8], [0, 1]) }}
      />
    </section>
  );
};

export default HeroSection;
