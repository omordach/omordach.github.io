import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="text-label mb-6">Senior Product & Program Manager</p>
        
        <h1 className="heading-display mb-8">
          Oleh Mordach
        </h1>
        
        <p className="text-body text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed">
          Delivering complex IT programs at scale. Building systems that work, 
          leading cross-functional teams, and turning ambiguity into measurable outcomes.
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide transition-opacity hover:opacity-90"
          >
            Learn More
            <ArrowDown className="w-4 h-4" />
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium text-sm tracking-wide transition-colors hover:bg-secondary"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-6 md:left-8 lg:left-12"
      >
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
