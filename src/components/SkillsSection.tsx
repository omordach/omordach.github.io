import { motion } from "framer-motion";

const skills = [
  "Product Management",
  "Program Management",
  "Agile & Scrum",
  "Scaling Frameworks (SAFe, LeSS)",
  "Systems Thinking",
  "Stakeholder Management",
  "Technical Literacy",
  "Data-Driven Decision Making",
  "Cross-Functional Leadership",
  "Strategic Planning",
  "Risk Management",
  "Change Management",
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
        <p className="text-label mb-4">Skills</p>
        <h2 className="heading-section">Core Competencies</h2>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="skill-tag"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
