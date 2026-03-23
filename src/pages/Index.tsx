import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import { lazy, Suspense } from "react";
const ImpactSection = lazy(() => import("@/components/ImpactSection"));
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";

const Index = () => {
  useSEO(
    "Oleh Mordach — Technical Program Manager & Senior Delivery Lead | Warsaw",
    "Oleh Mordach is a PMP-certified Technical Program Manager and Senior Delivery Lead in Warsaw, Poland. Expert in CI/CD automation, Agile SaaS delivery, and distributed team leadership for enterprise B2B platforms. Transitioning to TPM at tier-1 tech."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <Suspense fallback={<div className="section-padding section-container flex items-center justify-center min-h-[500px]"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" /></div>}>
          <ImpactSection />
        </Suspense>
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
