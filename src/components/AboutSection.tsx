import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-container pt-20">
      <div className="divider mb-16" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div>
          <p className="text-label mb-4">About</p>
          <h2 className="heading-section">Professional Summary</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="p-8 border border-border bg-card/30 rounded-sm">
            <h3 className="text-foreground font-semibold mb-6 pb-3 border-b border-border uppercase tracking-wider text-sm">Background</h3>
            <p className="text-body text-base leading-relaxed">
              <strong>Oleh Mordach</strong> is a Warsaw-based Technical Program Manager and Senior Delivery Lead with 7+ years of experience building and shipping enterprise SaaS products for 100+ corporate clients. He operates at the intersection of software engineering and program governance, translating technical complexity into delivery outcomes.
            </p>
          </div>

          <div className="p-8 border border-border bg-card/30 rounded-sm">
            <h3 className="text-foreground font-semibold mb-6 pb-3 border-b border-border uppercase tracking-wider text-sm">Expertise</h3>
            <p className="text-body text-base leading-relaxed">
              Specializing in the intersection of technical execution and program governance, Oleh leads CI/CD automation, Agile delivery workflows, and distributed engineering teams — with a track record of high-frequency releases and measurable reduction in production regression rates.
            </p>
          </div>
        </div>

        <div className="p-6 border border-border bg-card/50 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8">
          <p className="text-body text-base m-0">
            Currently: Delivery Lead at <strong>GetCode</strong> (Warsaw), managing a modular ERP/CRM platform.
          </p>
          <div className="text-base text-muted-foreground md:border-l md:border-border md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 border-border">
            Target: <strong className="text-foreground">Technical Program Manager</strong> at a tier-1 technology company.
          </div>
        </div>

        {/* Quick Facts Box */}
        <div className="border border-border bg-card/50 rounded-sm p-8 font-mono text-sm shadow-sm w-full mt-12">
          <h2 className="text-foreground font-semibold mb-6 pb-3 border-b border-border uppercase tracking-wider">Quick Facts — Oleh Mordach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-muted-foreground">
            <div className="space-y-2">
              <span className="block font-medium text-foreground">Role</span>
              <span className="block">Delivery Lead & Senior PM → Target: TPM</span>
            </div>

            <div className="space-y-2">
              <span className="block font-medium text-foreground">Location</span>
              <span className="block">Warsaw, Poland</span>
            </div>

            <div className="space-y-2">
              <span className="block font-medium text-foreground">Company</span>
              <span className="block">GetCode (SaaS ERP/CRM)</span>
            </div>

            <div className="space-y-2">
              <span className="block font-medium text-foreground">Clients</span>
              <span className="block">100+ corporate B2B clients</span>
            </div>

            <div className="space-y-2">
              <span className="block font-medium text-foreground">Certifications</span>
              <span className="block">PMP | PSM II | PSPO II | GCP Leader</span>
            </div>

            <div className="space-y-2">
              <span className="block font-medium text-foreground">Specialties</span>
              <span className="block">CI/CD · Agile · Testing · Cloud · SaaS</span>
            </div>

            <div className="space-y-2">
              <span className="block font-medium text-foreground">Languages</span>
              <span className="block">Ukrainian · Polish · English</span>
            </div>

            <div className="space-y-2">
              <span className="block font-medium text-foreground">LinkedIn</span>
              <a href="https://www.linkedin.com/in/oleh-mordach/" target="_blank" rel="noopener noreferrer" className="block text-accent hover:underline truncate">linkedin.com/in/oleh-mordach</a>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default AboutSection;
