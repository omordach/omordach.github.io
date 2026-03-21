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
        
        <div className="mb-8">
          <h1 className="heading-display mb-2">
            Oleh Mordach
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-heading">
            Technical Program Manager
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full">
          <div className="p-6 border border-border bg-card/30 rounded-sm">
            <h3 className="text-foreground font-semibold mb-4 pb-2 border-b border-border uppercase tracking-wider text-sm">Background</h3>
            <p className="text-body text-base leading-relaxed">
              <strong>Oleh Mordach</strong> is a Warsaw-based Technical Program Manager and Senior Delivery Lead with 7+ years of experience building and shipping enterprise SaaS products for 100+ corporate clients.
            </p>
          </div>

          <div className="p-6 border border-border bg-card/30 rounded-sm">
            <h3 className="text-foreground font-semibold mb-4 pb-2 border-b border-border uppercase tracking-wider text-sm">Expertise</h3>
            <p className="text-body text-base leading-relaxed">
              Specializing in the intersection of technical execution and program governance, Oleh leads CI/CD automation, Agile delivery workflows, and distributed engineering teams — with a track record of high-frequency releases and measurable reduction in production regression rates.
            </p>
          </div>

          <div className="md:col-span-2 p-6 border border-border bg-card/50 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-body text-base m-0">
              Currently: Delivery Lead at <strong>GetCode</strong> (Warsaw), managing a modular ERP/CRM platform.
            </p>
            <div className="text-base text-muted-foreground md:border-l md:border-border md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 border-border">
              Target: <strong className="text-foreground">Technical Program Manager</strong> at a tier-1 technology company.
            </div>
          </div>
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
        <a href="#about" aria-label="Scroll to About section" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
