import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Delivery Lead & Senior Project Manager",
    company: "GetCode",
    location: "Warsaw, Poland",
    period: "Nov 2022 – Present",
    description: "GetCode is a Warsaw-based software company delivering modular ERP/CRM SaaS platforms to 100+ corporate B2B clients across European markets.",
    highlights: [
      "Designed and implemented a CI/CD release strategy using Gitea/GitHub Actions enabling multiple production deployments per week, significantly reducing time-to-market compared to previous monthly release cycles.",
      "Reduced production regression rate by implementing Playwright-based end-to-end test infrastructure and AI-assisted test generation pipelines.",
      "Led distributed engineering teams across frontend, backend, and QA disciplines using Agile/Scrum ceremonies and OKR-based quarterly planning.",
      "Architected AWS auto-scaling infrastructure proposal for high-load client scenarios (bulk payment processing spikes), conducting comparative analysis of AWS vs. DigitalOcean solutions.",
      "Designed LLM-powered test generation workflow using Anthropic Claude API to auto-generate Pest tests via pre-commit hooks — adopted across team engineering workflow."
    ],
  },
  {
    role: "Technical Project Manager",
    company: "GetCode",
    location: "Lviv, Ukraine",
    period: "Oct 2018 – Mar 2022",
    description: "Focused on removing delivery bottlenecks, optimizing engineering workflows, and ensuring predictable program execution for custom B2B integrations.",
    highlights: [
      "Drove 50% improvement in project delivery efficiency by restructuring Jira workflows and scaling Agile practices across 4 simultaneous delivery streams.",
      "Reduced unexpected project delays and budget overruns by 35% through advanced dependency mapping and risk management tracking.",
      "Reduced deployment downtime by 60% through technical process optimization and improved multi-environment CI/CD release standards.",
      "Created transparent reporting structures using Confluence dashboards and Jira KPIs for executive visibility into program health."
    ],
  },
  {
    role: "Quality Assurance Automation Engineer",
    company: "GetCode",
    location: "Lviv, Ukraine",
    period: "Mar 2017 – Oct 2018",
    description: "Developed and scaled automated testing frameworks serving as the foundation for the company's early CI/CD integration initiatives.",
    highlights: [
      "Architected and deployed a comprehensive end-to-end automation framework utilizing Selenium and PHP Unit testing.",
      "Reduced regression testing execution time by 60% (from 4 days to 1.5 days), significantly accelerating the feedback loop for backend engineering teams."
    ],
  },
  {
    role: "Quality Assurance Engineer",
    company: "GetCode",
    location: "Lviv, Ukraine",
    period: "Dec 2015 – Mar 2017",
    description: "Established core quality assurance processes from scratch, building robust standards that enhanced overall enterprise client satisfaction.",
    highlights: [
      "Authored and standardized the initial comprehensive test case repository, covering over 500+ critical path scenarios for the core CRM module.",
      "Implemented early defect tracking lifecycle and triage processes, reducing production bug leakage by establishing formal staging verification."
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding section-container">
      <div className="divider mb-16" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-label mb-4">Experience</p>
        <h2 className="heading-section">Professional History</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-experience bg-card border border-border p-8 rounded-sm shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground font-heading mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground font-medium">{exp.company} <span className="text-muted-foreground/60 font-normal">• {exp.location}</span></p>
                </div>
                <p className="text-sm text-foreground font-mono whitespace-nowrap bg-secondary px-3 py-1 rounded-sm">{exp.period}</p>
              </div>
              
              <p className="text-body mb-6 italic border-l-2 border-accent pl-4">{exp.description}</p>
              
              <ul className="space-y-3">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-[15px] leading-relaxed text-muted-foreground flex items-start gap-3">
                    <span className="text-accent mt-1">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
