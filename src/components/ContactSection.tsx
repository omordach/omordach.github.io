import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download } from "lucide-react";

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

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-primary text-primary-foreground rounded-md font-medium text-sm tracking-wide hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>

          <a
            href="mailto:omordach+cv@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-border bg-card text-foreground rounded-md font-medium text-sm hover:bg-secondary hover:border-border/60 transition-colors group"
          >
            <Mail className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/oleh-mordach/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-border bg-card text-foreground rounded-md font-medium text-sm hover:bg-secondary hover:border-border/60 transition-colors group"
          >
            <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            LinkedIn
          </a>

          <a
            href="https://github.com/omordach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-border bg-card text-foreground rounded-md font-medium text-sm hover:bg-secondary hover:border-border/60 transition-colors group"
          >
            <Github className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
