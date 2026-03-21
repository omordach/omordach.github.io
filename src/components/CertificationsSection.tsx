import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  fullName: string;
  issuer: string;
  url?: string;
}

const certifications: Certification[] = [
  { name: "PMP", fullName: "Project Management Professional", issuer: "PMI", url: "https://www.credly.com/badges/ab4c5958-13e5-4af3-9092-2231a1925459" },
  { name: "PSM II", fullName: "Professional Scrum Master II", issuer: "Scrum.org", url: "https://www.credly.com/badges/a8127707-970c-4f62-be59-67ffa96493f9" },
  { name: "PSPO II", fullName: "Professional Scrum Product Owner II", issuer: "Scrum.org", url: "https://www.credly.com/badges/2ab40a08-fb58-4ebf-86b7-2a8f2733a101" },
  { name: "ICP-ATF", fullName: "Agile Team Facilitation", issuer: "ICAgile", url: "https://www.credly.com/badges/f85f154d-a965-4187-a7c7-ffbe01331117" },
  { name: "A-CSPO", fullName: "Advanced Certified Scrum Product Owner", issuer: "Scrum Alliance", url: "https://www.scrumalliance.org" },
  { name: "GCP-CDL", fullName: "Google Cloud Digital Leader", issuer: "Google", url: "https://www.credly.com/badges/304b4c9c-ef28-4cf5-8371-3700924d00a8" },
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
          {certifications.map((cert, index) => {
            const cardContent = (
              <div className={`p-5 border border-border rounded-sm bg-card/50 h-full ${cert.url ? 'hover:bg-card/80 hover:border-primary/50 transition-colors cursor-pointer' : ''}`}>
                <div className="flex justify-between items-start mb-3">
                  <span className="cert-badge inline-block">{cert.name}</span>
                  {cert.url && (
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
                <h3 className="text-foreground font-medium mb-1">{cert.fullName}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            );

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full"
              >
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
