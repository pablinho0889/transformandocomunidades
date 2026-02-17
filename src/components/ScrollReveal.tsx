import { useRef, ReactNode } from "react";
import { motion, useInView, useScroll, useTransform, MotionStyle } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  variant?: "fade" | "mask" | "scale" | "blur" | "rise" | "cinematic";
  parallax?: boolean;
  parallaxSpeed?: number;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const easeOutQuart = [0.25, 1, 0.5, 1] as const;

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  variant = "fade",
  parallax = false,
  parallaxSpeed = 0.15,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100 * parallaxSpeed, -100 * parallaxSpeed]);

  const directionOffset = {
    up: { y: 80, x: 0 },
    down: { y: -80, x: 0 },
    left: { y: 0, x: 100 },
    right: { y: 0, x: -100 },
  };

  const variantMap = {
    fade: {
      hidden: { opacity: 0, ...directionOffset[direction] },
      visible: {
        opacity: 1, y: 0, x: 0,
        transition: { duration: 0.9, delay, ease: easeOutExpo },
      },
    },
    mask: {
      hidden: { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
      visible: {
        opacity: 1, clipPath: "inset(0% 0% 0% 0%)",
        transition: { duration: 1.0, delay, ease: easeOutQuart },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
      visible: {
        opacity: 1, scale: 1, filter: "blur(0px)",
        transition: { duration: 1.0, delay, ease: easeOutExpo },
      },
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(20px)", y: 30 },
      visible: {
        opacity: 1, filter: "blur(0px)", y: 0,
        transition: { duration: 1.2, delay, ease: easeOutQuart },
      },
    },
    rise: {
      hidden: { opacity: 0, y: 120, rotateX: 15 },
      visible: {
        opacity: 1, y: 0, rotateX: 0,
        transition: { duration: 1.1, delay, ease: easeOutExpo },
      },
    },
    cinematic: {
      hidden: { opacity: 0, y: 100, scale: 0.9, filter: "blur(8px)" },
      visible: {
        opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
        transition: { duration: 1.3, delay, ease: easeOutExpo },
      },
    },
  };

  const style: MotionStyle = parallax ? { y: parallaxY } : {};

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variantMap[variant]}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
