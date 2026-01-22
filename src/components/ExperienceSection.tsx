import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Senior Program Manager",
    company: "Enterprise Technology",
    period: "2021 — Present",
    description: "Leading cross-functional programs across multiple product lines, coordinating 50+ engineers and stakeholders.",
    highlights: [
      "Delivered $12M program on time, achieving 40% improvement in release velocity",
      "Established governance framework adopted organization-wide",
      "Led digital transformation initiative impacting 200+ internal users",
    ],
  },
  {
    role: "Product Manager",
    company: "SaaS Platform",
    period: "2018 — 2021",
    description: "Owned product strategy and roadmap for B2B platform serving 500+ enterprise customers.",
    highlights: [
      "Grew product revenue by 85% through strategic feature prioritization",
      "Reduced customer churn by 30% via data-driven product improvements",
      "Built and mentored product team from 2 to 8 members",
    ],
  },
  {
    role: "Technical Project Manager",
    company: "IT Consulting",
    period: "2015 — 2018",
    description: "Managed delivery of complex technical projects for Fortune 500 clients.",
    highlights: [
      "Successfully delivered 15+ projects ranging from $500K to $5M",
      "Achieved 98% client satisfaction across all engagements",
      "Pioneered Agile adoption within the organization",
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
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
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
