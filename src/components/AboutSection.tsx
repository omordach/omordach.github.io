import { motion } from "framer-motion";

const quickFacts = [
  { label: "Role", value: "Delivery Lead & Senior PM → Target: TPM" },
  { label: "Location", value: "Warsaw, Poland" },
  { label: "Company", value: "GetCode (SaaS ERP/CRM)" },
  { label: "Clients", value: "100+ corporate B2B clients" },
  { label: "Certifications", value: "PMP · PSM II · PSPO II · GCP Leader" },
  { label: "Specialties", value: "CI/CD · Agile · Testing · Cloud · SaaS" },
  { label: "Languages", value: "Ukrainian · Polish · English" },
  { label: "LinkedIn", value: "linkedin.com/in/oleh-mordach", href: "https://www.linkedin.com/in/oleh-mordach/" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-container pt-20">
      <div className="divider mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        <div>
          <p className="text-label mb-4">About</p>
          <h2 className="heading-section">Professional Summary</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-7 border border-border bg-card rounded-md shadow-sm">
            <h3 className="text-foreground font-semibold mb-5 pb-3 border-b border-border uppercase tracking-wider text-xs text-accent">
              Background
            </h3>
            <p className="text-body text-base leading-relaxed">
              <strong>Oleh Mordach</strong> is a Warsaw-based Technical Program Manager and Senior Delivery Lead with 7+ years of experience building and shipping enterprise SaaS products for 100+ corporate B2B clients across European markets. He operates at the intersection of software engineering and program governance, translating technical complexity into delivery outcomes.
            </p>
          </div>

          <div className="p-7 border border-border bg-card rounded-md shadow-sm">
            <h3 className="text-foreground font-semibold mb-5 pb-3 border-b border-border uppercase tracking-wider text-xs text-accent">
              Expertise
            </h3>
            <p className="text-body text-base leading-relaxed">
              Specializing in the intersection of technical execution and program governance, Oleh leads CI/CD automation, Agile delivery workflows, and distributed engineering teams — with a track record of high-frequency releases and measurable reduction in production regression rates.
            </p>
          </div>
        </div>

        <div className="p-5 border border-border bg-secondary/50 rounded-md flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-base text-foreground m-0">
            Currently: Delivery Lead at <strong>GetCode</strong> (Warsaw), managing a modular ERP/CRM platform.
          </p>
          <div className="text-base text-muted-foreground md:border-l md:border-border md:pl-6 pt-3 md:pt-0 border-t md:border-t-0 border-border whitespace-nowrap">
            Target: <strong className="text-accent">Technical Program Manager</strong> at a tier-1 technology company.
          </div>
        </div>

        {/* Quick Facts */}
        <div className="border border-border bg-card rounded-md shadow-sm overflow-hidden">
          <div className="px-7 py-5 border-b border-border bg-secondary/40">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Facts — Oleh Mordach
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x-0">
            {quickFacts.map((fact, i) => (
              <div
                key={fact.label}
                className={`px-7 py-4 flex flex-col gap-0.5 ${i % 2 === 0 && i < quickFacts.length - 1 ? 'sm:border-r border-border' : ''} ${i < quickFacts.length - 2 ? 'sm:border-b border-border' : ''} border-b border-border last:border-b-0`}
              >
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">{fact.label}</span>
                {fact.href ? (
                  <a
                    href={fact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-accent transition-colors truncate"
                  >
                    {fact.value}
                  </a>
                ) : (
                  <span className="text-sm text-foreground">{fact.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
