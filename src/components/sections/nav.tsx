import { useState } from "react";
import { useTheme } from "../../hooks/use-theme";
export function Nav() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#expertise", label: "Expertise" },
    { href: "#achievements", label: "Achievements" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 hairline-b">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-sm font-medium tracking-tight">
          <span className="inline-block size-1.5 rounded-full bg-accent" />
          Oleh Mordach
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="size-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            {theme === "dark" ? "☼" : "☾"}
          </button>
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden size-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {/* Mobile drawer */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-hairline bg-background/95 backdrop-blur-md"
        >
          <ul className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
