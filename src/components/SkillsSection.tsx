import { motion } from "framer-motion";

const skillCategories = [
  { domain: "Program & Delivery Management", skills: "Agile, Scrum, Kanban, OKRs, Roadmapping, Risk Management" },
  { domain: "CI/CD & Release Engineering", skills: "GitHub Actions, Gitea Actions, Release automation, Multi-env pipelines" },
  { domain: "Testing & QA Architecture", skills: "Playwright, Pest (PHP), AI-assisted test generation, Pre-commit hooks" },
  { domain: "Cloud & Infrastructure", skills: "AWS (Auto Scaling, EC2, RDS), DigitalOcean (Droplets, DOKS), Laravel/MariaDB" },
  { domain: "Product & Stakeholder Management", skills: "SaaS B2B, ERP/CRM, Enterprise client management, API integrations" },
  { domain: "Tools", skills: "Jira, Confluence, GitHub, Gitea, Docker, REST APIs" },
  { domain: "Certifications", skills: "PMP, PSM II, PSPO II, A-CSPO, Google Cloud Digital Leader" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding section-container">
      <div className="divider mb-16" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-label mb-4">Skills & Expertise</p>
        <h2 className="heading-section">Technical & Program Management Competencies</h2>
        
        <div className="mb-10 border border-border rounded-sm shadow-sm bg-card/50">
          <div className="hidden md:grid grid-cols-12 bg-secondary/50 font-semibold text-foreground border-b border-border">
            <div className="col-span-4 py-4 px-6">Domain</div>
            <div className="col-span-8 py-4 px-6">Skills & Tools</div>
          </div>
          <div className="divide-y divide-border">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 hover:bg-muted/30 transition-colors">
                <div className="col-span-1 md:col-span-4 py-4 px-6 font-medium text-foreground align-top bg-muted/10 md:bg-transparent">
                  {category.domain}
                </div>
                <div className="col-span-1 md:col-span-8 py-3 md:py-4 px-6 leading-relaxed align-top">
                  {category.skills}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-body max-w-4xl leading-relaxed">
          Oleh's technical breadth distinguishes him from traditional project managers. His hands-on experience with CI/CD pipeline architecture, cloud auto-scaling design (AWS vs. DigitalOcean trade-off analysis), and AI-assisted development workflows positions him as a TPM candidate who can credibly engage with engineering teams at the implementation level — not only at the process layer.
        </p>

      </motion.div>
    </section>
  );
};

export default SkillsSection;
