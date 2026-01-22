import { motion } from "framer-motion";

interface Certification {
  name: string;
  fullName: string;
  issuer: string;
}

const certifications: Certification[] = [
  { name: "PMP", fullName: "Project Management Professional", issuer: "PMI" },
  { name: "PSM II", fullName: "Professional Scrum Master II", issuer: "Scrum.org" },
  { name: "PSPO II", fullName: "Professional Scrum Product Owner II", issuer: "Scrum.org" },
  { name: "ICP-ATF", fullName: "Agile Team Facilitation", issuer: "ICAgile" },
  { name: "A-CSPO", fullName: "Advanced Certified Scrum Product Owner", issuer: "Scrum Alliance" },
  { name: "GCP-CDL", fullName: "Google Cloud Digital Leader", issuer: "Google" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding section-container">
      <div className="divider mb-16" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-label mb-4">Certifications</p>
        <h2 className="heading-section">Professional Credentials</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 border border-border rounded-sm bg-card/50"
            >
              <span className="cert-badge mb-3 inline-block">{cert.name}</span>
              <h3 className="text-foreground font-medium mb-1">{cert.fullName}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
