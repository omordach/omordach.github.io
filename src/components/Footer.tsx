const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="section-container py-12">
      <div className="divider mb-8" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground font-mono">
          © {currentYear} Oleh Mordach. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="/#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-4 border-l border-border pl-6">
            <a href="https://www.linkedin.com/in/oleh-mordach/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/omordach" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
