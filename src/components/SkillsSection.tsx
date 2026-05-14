import { motion } from "framer-motion";

const skillCategories = [
  {
    domain: "Program & Delivery Management",
    skills: ["Agile", "Scrum", "Kanban", "OKRs", "Roadmapping", "Risk Management"],
  },
  {
    domain: "CI/CD & Release Engineering",
    skills: ["GitHub Actions", "Gitea Actions", "Release automation", "Multi-env pipelines"],
  },
  {
    domain: "Testing & QA Architecture",
    skills: ["Playwright", "Pest (PHP)", "AI-assisted testing", "Pre-commit hooks"],
  },
  {
    domain: "Cloud & Infrastructure",
    skills: ["AWS Auto Scaling", "EC2", "RDS", "DigitalOcean", "Docker", "Laravel/MariaDB"],
  },
  {
    domain: "Product & Stakeholder Management",
    skills: ["SaaS B2B", "ERP/CRM", "Enterprise clients", "API integrations"],
  },
  {
    domain: "Tools & Platforms",
    skills: ["Jira", "Confluence", "GitHub", "Gitea", "Docker", "REST APIs"],
  },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="p-6 rounded-md border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">
                {category.domain}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-body max-w-4xl leading-relaxed">
          Technical breadth distinguishes Oleh from traditional project managers. Hands-on experience
          with CI/CD pipeline architecture, cloud auto-scaling design (AWS vs. DigitalOcean analysis),
          and AI-assisted development workflows positions him as a TPM candidate who can credibly
          engage with engineering teams at the implementation level — not only at the process layer.
        </p>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
