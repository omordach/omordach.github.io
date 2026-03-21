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
        
        <div className="overflow-x-auto mb-10 border border-border rounded-sm shadow-sm bg-card/50">
          <table className="w-full text-left text-body border-collapse">
            <thead className="bg-secondary/50 font-semibold text-foreground border-b border-border">
              <tr>
                <th className="py-4 px-6 min-w-[280px]">Domain</th>
                <th className="py-4 px-6 min-w-[320px]">Skills & Tools</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {skillCategories.map((category, idx) => (
                <tr key={idx} className="hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-6 font-medium text-foreground align-top">{category.domain}</td>
                  <td className="py-4 px-6 leading-relaxed align-top">{category.skills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-body max-w-4xl leading-relaxed">
          Oleh's technical breadth distinguishes him from traditional project managers. His hands-on experience with CI/CD pipeline architecture, cloud auto-scaling design (AWS vs. DigitalOcean trade-off analysis), and AI-assisted development workflows positions him as a TPM candidate who can credibly engage with engineering teams at the implementation level — not only at the process layer.
        </p>

      </motion.div>
    </section>
  );
};

export default SkillsSection;
