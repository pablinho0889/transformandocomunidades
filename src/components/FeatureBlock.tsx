import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";

interface FeatureBlockProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  mockupSrc: string;
  mockupAlt: string;
  reversed?: boolean;
  sectionIndex?: number;
}

const sectionVariants: Array<{
  textVariant: "fade" | "mask" | "blur" | "rise" | "cinematic";
  mockupVariant: "scale" | "cinematic" | "blur" | "rise";
  textDirection: "left" | "right";
}> = [
  { textVariant: "mask", mockupVariant: "scale", textDirection: "left" },
  { textVariant: "blur", mockupVariant: "cinematic", textDirection: "right" },
  { textVariant: "rise", mockupVariant: "blur", textDirection: "left" },
  { textVariant: "cinematic", mockupVariant: "rise", textDirection: "right" },
];

const FeatureBlock = ({
  id,
  badge,
  title,
  description,
  features,
  mockupSrc,
  mockupAlt,
  reversed = false,
  sectionIndex = 0,
}: FeatureBlockProps) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const mockupRotate = useTransform(scrollYProgress, [0, 0.5, 1], [reversed ? 3 : -3, 0, reversed ? -2 : 2]);
  const bgGlowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.6, 0]);

  const variant = sectionVariants[sectionIndex % sectionVariants.length];

  return (
    <section id={id} ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient background glow per section */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: bgGlowOpacity }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px]"
          style={{ background: `radial-gradient(ellipse, hsl(24 95% 53% / 0.08), transparent)` }}
        />
      </motion.div>

      <div className="container mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reversed ? "lg:direction-rtl" : ""}`}
          style={reversed ? { direction: "rtl" } : {}}
        >
          {/* Text content */}
          <div style={{ direction: "ltr" }}>
            <ScrollReveal variant={variant.textVariant} direction={variant.textDirection}>
              <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-4 uppercase tracking-wider">
                {badge}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1} variant={variant.textVariant} direction={variant.textDirection}>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                {title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.18} variant="blur">
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {description}
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={0.25 + index * 0.06} variant="fade" direction={reversed ? "right" : "left"}>
                  <motion.div
                    className="flex items-center gap-3 group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center"
                      whileHover={{ scale: 1.2, backgroundColor: "hsl(24 95% 53% / 0.4)" }}
                    >
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </motion.div>
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">{feature}</span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Mockup with parallax and 3D tilt */}
          <div style={{ direction: "ltr" }}>
            <ScrollReveal delay={0.15} variant={variant.mockupVariant} direction={reversed ? "left" : "right"}>
              <motion.div
                className="relative"
                style={{ y: parallaxY, rotateY: mockupRotate }}
                whileHover={{ scale: 1.03, rotateY: reversed ? 4 : -4 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="rounded-2xl overflow-hidden mockup-shadow border-glow relative">
                  <img
                    src={mockupSrc}
                    alt={mockupAlt}
                    className="w-full h-auto"
                  />
                  {/* Subtle animated overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                {/* Depth glow behind mockup */}
                <motion.div
                  className="absolute -inset-6 bg-primary/5 rounded-3xl blur-3xl -z-10"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating accent orbs */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/20 blur-sm"
                  animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div
                  className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-glow-amber/20 blur-sm"
                  animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
