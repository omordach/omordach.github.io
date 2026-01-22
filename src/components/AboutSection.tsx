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
        <h2 className="heading-section">Background</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-6">
            <p className="text-body">
              I'm a Senior Product and Program Manager with deep experience in IT, 
              specializing in complex systems, large-scale programs, and cross-functional leadership.
            </p>
            <p className="text-body">
              My approach combines strategic thinking with hands-on execution—understanding 
              both the big picture and the technical details that make delivery possible.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-body">
              I thrive in environments where clarity is scarce and stakes are high. 
              Whether it's aligning stakeholders, scaling processes, or navigating 
              organizational complexity, I focus on outcomes that matter.
            </p>
            <p className="text-body">
              Systems thinking is at the core of how I work—seeing interdependencies, 
              anticipating second-order effects, and building for sustainability.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
