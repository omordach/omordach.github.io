import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const metrics = [
  { value: "7+", label: "Years in Delivery" },
  { value: "100+", label: "Enterprise Clients" },
  { value: "6", label: "Certifications" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-container relative pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-semibold tracking-wide mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
          Open to Technical Program Manager opportunities
        </motion.div>

        {/* Name & role */}
        <div className="mb-8">
          <h1 className="heading-display mb-4">
            Oleh Mordach
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-accent font-heading">
            Technical Program Manager
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light mt-5 max-w-2xl leading-relaxed">
            Turning engineering complexity into measurable delivery outcomes.
          </p>
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap gap-10 py-8 border-y border-border mb-10">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-3xl md:text-4xl font-bold text-foreground font-heading leading-none">
                {m.value}
              </span>
              <span className="text-sm text-muted-foreground mt-1.5">{m.label}</span>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide rounded-md hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/oleh-mordach/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card text-foreground font-medium text-sm tracking-wide rounded-md hover:bg-secondary transition-colors"
          >
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-6 md:left-8 lg:left-12 hidden md:block"
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="text-muted-foreground hover:text-accent transition-colors flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
