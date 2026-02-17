import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureBlock from "@/components/FeatureBlock";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import academyMockup from "@/assets/academy-mockup.png";
import communityMockup from "@/assets/community-mockup.png";
import programsMockup from "@/assets/programs-mockup.png";
import foundationMockup from "@/assets/foundation-mockup.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <FeatureBlock
        id="academy"
        badge="Academy"
        title="Educación estructurada para tu crecimiento"
        description="Accede a cursos diseñados por expertos en educación financiera, liderazgo y desarrollo personal. Aprende a tu ritmo con contenido que transforma."
        features={[
          "Cursos en video de alta calidad",
          "Rutas de aprendizaje personalizadas",
          "Certificaciones al completar",
          "Material descargable y práctico",
          "Seguimiento de progreso en tiempo real",
        ]}
        mockupSrc={academyMockup}
        mockupAlt="Academy - Educación estructurada"
        sectionIndex={0}
      />

      <FeatureBlock
        id="comunidad"
        badge="Comunidad"
        title="Una red que te impulsa hacia adelante"
        description="Conecta con personas que comparten tu visión. Participa en conversaciones, comparte logros y crece junto a una comunidad comprometida con la transformación."
        features={[
          "Red social interna exclusiva",
          "Sistema de gamificación y badges",
          "Ranking y desafíos comunitarios",
          "Grupos temáticos especializados",
          "Eventos virtuales en vivo",
        ]}
        mockupSrc={communityMockup}
        mockupAlt="Comunidad - Red social interna"
        reversed
        sectionIndex={1}
      />

      <FeatureBlock
        id="programas"
        badge="Programas"
        title="Retos que generan resultados reales"
        description="Participa en programas intensivos de 7 y 21 días diseñados para crear hábitos poderosos y generar transformaciones medibles en tu vida."
        features={[
          "Retos de 7 días para empezar",
          "Programas de 21 días para consolidar",
          "Seguimiento diario de actividades",
          "Comunidad de accountability",
          "Resultados medibles y tangibles",
        ]}
        mockupSrc={programsMockup}
        mockupAlt="Programas - Retos de transformación"
        sectionIndex={2}
      />

      <FeatureBlock
        id="fundacion"
        badge="Fundación"
        title="Impacto social que trasciende"
        description="Cada miembro contribuye al cambio real. Nuestra fundación lleva educación financiera y oportunidades a comunidades que más lo necesitan."
        features={[
          "Programas educativos gratuitos",
          "Becas para comunidades vulnerables",
          "Impacto medible y transparente",
          "Voluntariado activo",
          "Reportes de impacto trimestrales",
        ]}
        mockupSrc={foundationMockup}
        mockupAlt="Fundación - Impacto social"
        reversed
        sectionIndex={3}
      />

      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
