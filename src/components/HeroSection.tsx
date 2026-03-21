import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-container relative pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <div className="mb-8">
          <h1 className="heading-display mb-2">
            Oleh Mordach
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-heading">
            Technical Program Manager
          </h2>
          <p className="text-xl md:text-2xl text-foreground font-light mt-6 max-w-2xl leading-relaxed">
            Turning engineering complexity into measurable delivery outcomes.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-12">
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide transition-opacity hover:opacity-90 rounded-sm"
          >
            Download Resume
          </a>
          <a 
            href="https://www.linkedin.com/in/oleh-mordach/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-transparent text-foreground font-medium text-sm tracking-wide transition-colors hover:bg-secondary rounded-sm"
          >
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-6 md:left-8 lg:left-12 hidden md:block"
      >
        <a href="#about" aria-label="Scroll to About section" className="text-muted-foreground hover:text-foreground transition-colors flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
