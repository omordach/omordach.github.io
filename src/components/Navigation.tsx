import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Use hash links if on the home page, otherwise use absolute paths to the home page anchors
  const getHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  const navLinks = [
    { label: "About", href: getHref("#about") },
    { label: "Experience", href: getHref("#experience") },
    { label: "Skills", href: getHref("#skills") },
    { label: "Certifications", href: getHref("#certifications") },
    { label: "Contact", href: getHref("#contact") },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-primary text-primary-foreground font-medium rounded-sm shadow-sm"
      >
        Skip to main content
      </a>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm py-2" : "py-4"
        }`}
      >
        <div className="section-container max-w-[1400px]">
          <nav className="flex items-center justify-between">
            {/* Bolt: Optimized routing by replacing <a> tags with React Router <Link> components to enable SPA client-side navigation and prevent full page reloads. */}
            <Link to="/" className="text-foreground font-heading text-xl tracking-tight font-semibold hover:text-accent transition-colors">
              Oleh<span className="text-muted-foreground font-normal">.Mordach</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = isHome ? (location.hash === link.href || (location.hash === '' && link.href === '#about')) : location.pathname === link.href;
                return (
                <Link
                  key={link.href}
                  to={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm tracking-wide transition-colors ${isActive ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {link.label}
                </Link>
              )})}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-6 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground rounded-sm hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-24 md:hidden border-b border-border shadow-lg h-fit pb-8"
          >
            <nav className="section-container flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = isHome ? (location.hash === link.href || (location.hash === '' && link.href === '#about')) : location.pathname === link.href;
                return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-xl font-heading transition-colors border-b border-border/50 pb-2 ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`}
                >
                  {link.label}
                </Link>
              )})}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-heading text-foreground hover:text-accent transition-colors border-b border-border/50 pb-2 mt-2"
              >
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
