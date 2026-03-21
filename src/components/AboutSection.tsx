import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-container">
      <div className="divider mb-16" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-label mb-4">About</p>
        <h2 className="heading-section">Professional Summary</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-6">
            <p className="text-body leading-relaxed">
              Oleh Mordach is a Technical Program Manager and Senior Delivery Lead, which is a professional responsible for orchestrating complex technical programs from inception to production deployment. He operates at the intersection of software engineering and program governance, translating technical complexity into delivery outcomes for enterprise clients.
            </p>
            <p className="text-body leading-relaxed">
              With a background that spans QA Engineering, QA Automation, and Technical Project Management, Oleh has progressively moved into senior delivery and program leadership roles. His career progression — from hands-on test automation to leading multi-team release cadences — gives him rare dual fluency in both engineering execution and stakeholder management.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-body leading-relaxed">
              At GetCode, Oleh manages delivery of a modular SaaS ERP/CRM platform used by 100+ corporate clients across multiple industries. Key achievements include implementing a CI/CD pipeline strategy that enabled multiple production releases per week, designing an AI-assisted test generation architecture using LLM APIs (Claude), and leading Playwright-based test infrastructure adoption across distributed teams.
            </p>
            <p className="text-body leading-relaxed">
              Oleh holds PMP, PSM II, PSPO II, A-CSPO, and Google Cloud Digital Leader certifications. In 2026, he is pursuing the E5 Program & Portfolio Mastery certification to deepen portfolio management competencies aligned with enterprise TPM requirements.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
