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
    role: "Senior Project Manager / Product Delivery Lead",
    company: "Get-Code",
    location: "Warsaw, Poland (Remote)",
    period: "Nov 2022 – Present",
    description: "Serves as the Senior Project Manager / Product Delivery Lead for a modular ERP/CRM SaaS platform, overseeing architecture, infrastructure, and delivery for 100+ enterprise clients across North America.",
    highlights: [
      "Lead the end-to-end lifecycle and roadmap planning for a high-scale platform, ensuring alignment with business objectives and client requirements",
      "Designed and managed infrastructure for multi-client customization, achieving 10+ releases per day through optimized CI/CD pipelines",
      "Reduced release regression rates by 30% by implementing enhanced test automation strategies and staged rollout process",
      "Fostered alignment among distributed engineering teams, balancing scope, time, and cost to deliver measurable value",
      "Orchestrated the full release lifecycle from roadmap planning to automated production rollout",
    ],
  },
  {
    role: "Technical Project Manager",
    company: "GetCode",
    location: "Lviv, Ukraine (Remote)",
    period: "Oct 2018 – Mar 2022",
    description: "Focused on removing delivery bottlenecks, optimizing engineering workflows, and ensuring predictable program execution.",
    highlights: [
      "Drove 50% improvement in project delivery efficiency by restructuring technical workflows and scaling Agile practices",
      "Reduced unexpected project delays and budget overruns by 35% through advanced risk management strategy",
      "Reduced deployment downtime by 60% through technical process optimization and improved site reliability standards",
      "Created transparent reporting structures using KPIs and metrics for clear visibility into project health",
    ],
  },
  {
    role: "Quality Assurance Automation Engineer",
    company: "GetCode",
    location: "Lviv, Ukraine (Remote)",
    period: "Mar 2017 – Oct 2018",
    description: "Developed and scaled automation frameworks serving as a foundation for CI/CD initiatives.",
    highlights: [
      "Developed and scaled a comprehensive automation framework for future CI/CD initiatives",
      "Reduced regression testing time by 60%, significantly accelerating the feedback loop for engineering teams",
    ],
  },
  {
    role: "Quality Assurance Engineer",
    company: "GetCode",
    location: "Lviv, Ukraine (Remote)",
    period: "Dec 2015 – Mar 2017",
    description: "Established quality assurance processes from scratch, building robust standards that enhanced overall client satisfaction.",
    highlights: [
      "Developed Quality Assurance processes from scratch with robust standards",
      "Enhanced overall client satisfaction through systematic quality improvements",
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
        <h2 className="heading-section">Career Highlights</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-experience"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground font-heading">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground">{exp.company} <span className="text-muted-foreground/60">• {exp.location}</span></p>
                </div>
                <p className="text-sm text-muted-foreground font-mono whitespace-nowrap">{exp.period}</p>
              </div>
              
              <p className="text-body mb-4">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                    <span className="text-accent mt-1.5">—</span>
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
