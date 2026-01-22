import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding section-container">
      <div className="divider mb-16" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-label mb-4">Contact</p>
        <h2 className="heading-section">Let's Connect</h2>
        
        <p className="text-body max-w-xl mb-10">
          Open to discussing new opportunities, collaboration, or just exchanging ideas 
          about product, program management, and building great things.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="mailto:oleh@mordach.com"
            className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
          >
            <span className="w-10 h-10 flex items-center justify-center border border-border rounded-sm group-hover:border-muted-foreground/50 transition-colors">
              <Mail className="w-4 h-4" />
            </span>
            <span className="font-medium">oleh@mordach.com</span>
          </a>
          
          <a
            href="https://linkedin.com/in/olehmordach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
          >
            <span className="w-10 h-10 flex items-center justify-center border border-border rounded-sm group-hover:border-muted-foreground/50 transition-colors">
              <Linkedin className="w-4 h-4" />
            </span>
            <span className="font-medium">LinkedIn</span>
          </a>
          
          <a
            href="https://github.com/olehmordach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
          >
            <span className="w-10 h-10 flex items-center justify-center border border-border rounded-sm group-hover:border-muted-foreground/50 transition-colors">
              <Github className="w-4 h-4" />
            </span>
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
