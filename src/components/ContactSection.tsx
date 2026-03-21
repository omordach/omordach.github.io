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

        <div className="flex flex-wrap gap-4 sm:gap-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground hover:opacity-90 rounded-sm transition-all group"
          >
            <Download className="w-5 h-5" />
            <span className="font-medium tracking-wide">Download Resume</span>
          </a>

          <a
            href="mailto:omordach+cv@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-4 border border-border bg-card/50 hover:bg-secondary rounded-sm transition-all group"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="font-medium">Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/oleh-mordach/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 border border-border bg-card/50 hover:bg-secondary rounded-sm transition-all group"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href="https://github.com/omordach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 border border-border bg-card/50 hover:bg-secondary rounded-sm transition-all group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
