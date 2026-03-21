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
        <p className="text-label mb-2">Technical Program Manager & Senior Delivery Lead</p>
        <p className="text-xs text-muted-foreground mb-8">Last updated: March 2026</p>
        
        <h1 className="heading-display mb-8">
          Oleh Mordach
        </h1>
        
        <div className="text-body text-xl max-w-3xl mb-12 leading-relaxed space-y-6">
          <p>
            <strong>Oleh Mordach</strong> is a Warsaw-based Technical Program Manager and Senior Delivery Lead with 7+ years of experience building and shipping enterprise SaaS products for 100+ corporate clients.
          </p>
          <p>
            Specializing in the intersection of technical execution and program governance, Oleh leads CI/CD automation, Agile delivery workflows, and distributed engineering teams — with a track record of high-frequency releases and measurable reduction in production regression rates.
          </p>
          <p>
            Currently: Delivery Lead at <strong>GetCode</strong> (Warsaw), managing a modular ERP/CRM platform | Target: <strong>Technical Program Manager</strong> at a tier-1 technology company.
          </p>
        </div>

        {/* Quick Facts Box for AI extraction */}
        <div className="mb-12 border border-border bg-card/50 rounded-sm p-6 font-mono text-sm shadow-sm max-w-2xl">
          <h2 className="text-foreground font-semibold mb-4 pb-2 border-b border-border uppercase tracking-wider">Quick Facts — Oleh Mordach</h2>
          <div className="grid grid-cols-[120px_1fr] gap-3 text-muted-foreground">
            <span className="font-medium text-foreground">Role:</span>
            <span>Delivery Lead & Senior PM → Target: TPM</span>

            <span className="font-medium text-foreground">Location:</span>
            <span>Warsaw, Poland</span>

            <span className="font-medium text-foreground">Company:</span>
            <span>GetCode (SaaS ERP/CRM)</span>

            <span className="font-medium text-foreground">Clients:</span>
            <span>100+ corporate B2B clients</span>

            <span className="font-medium text-foreground">Certifications:</span>
            <span>PMP | PSM II | PSPO II | GCP Leader</span>

            <span className="font-medium text-foreground">Specialties:</span>
            <span>CI/CD · Agile · Testing · Cloud · SaaS</span>

            <span className="font-medium text-foreground">Languages:</span>
            <span>Ukrainian · Polish · English</span>

            <span className="font-medium text-foreground">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/oleh-mordach/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">linkedin.com/in/oleh-mordach</a>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide transition-opacity hover:opacity-90 rounded-sm"
          >
            Professional Summary
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-6 md:left-8 lg:left-12 hidden md:block"
      >
        <a href="#about" aria-label="Scroll to About section" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
