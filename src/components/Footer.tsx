const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="section-container py-12">
      <div className="divider mb-8" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Oleh Mordach. All rights reserved.
        </p>
        <nav className="flex gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
