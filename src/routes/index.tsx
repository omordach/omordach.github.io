import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTheme } from "../hooks/use-theme";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oleh Mordach, PMP — Technical Program Manager | Warsaw" },
      {
        name: "description",
        content:
          "Personal website of Oleh Mordach, PMP — Technical Program Manager and Product Delivery Leader building predictable delivery for complex technology products.",
      },
      { property: "og:title", content: "Oleh Mordach, PMP — Technical Program Manager" },
      {
        property: "og:description",
        content: "Building predictable delivery for complex technology products.",
      },
    ],
  }),
  component: Index,
});

const METRICS = [
  { value: "10+", label: "Years in technology" },
  { value: "100+", label: "Enterprise customers supported" },
  { value: "10+", label: "Production releases per day" },
  { value: "30%", label: "Fewer release regressions" },
  { value: "50%", label: "Improvement in delivery efficiency" },
  { value: "35%", label: "Reduction in project delays" },
];

const TIMELINE = [
  {
    period: "2015 — 2017",
    role: "Quality Assurance Engineer",
    org: "",
    body: "Built QA processes and quality standards from the ground up — the operational foundation for everything that followed.",
  },
  {
    period: "2017 — 2018",
    role: "Automation QA Engineer",
    org: "",
    body: "Created automated testing frameworks that became the backbone of CI/CD practices and predictable release cycles.",
  },
  {
    period: "2018 — 2022",
    role: "Technical Project Manager",
    org: "GetCode",
    body: "Scaled Agile delivery, introduced metrics-driven management, and removed operational inefficiencies across multiple product streams.",
  },
  {
    period: "2022 — 2026",
    role: "Senior Project Manager · Product Delivery Lead",
    org: "GetCode",
    body: "Led delivery of a modular ERP/CRM SaaS platform serving enterprise customers across North America. Owned integrations, CI/CD, release orchestration, stakeholder alignment, and roadmap execution.",
  },
  {
    period: "2026 →",
    role: "Delivery Manager",
    org: "Confidential — Under NDA",
    body: "End-to-end delivery across hardware, firmware, mobile, web, and simulation platforms. Established operational excellence through measurable KPIs, predictable releases, and continuous improvement across embedded, software, QA, DevOps, and hardware engineering.",
  },
];

const EXPERTISE = [
  "Technical Program Management",
  "Product Delivery",
  "Program Governance",
  "Release Management",
  "Strategic Roadmapping",
  "Risk & Dependency Management",
  "Agile at Scale",
  "SaaS Platforms",
  "AI-Augmented Delivery",
  "Cloud Platforms (AWS, GCP)",
  "CI/CD & DevOps",
  "API & Enterprise Integrations",
  "Cross-Functional Leadership",
  "Operational Excellence",
];

const ACHIEVEMENTS = [
  "Scaled enterprise SaaS delivery supporting 100+ B2B customers.",
  "Increased deployment frequency to 10+ releases daily.",
  "Reduced release regressions by 30%.",
  "Improved project delivery efficiency by 50%.",
  "Reduced unexpected delays by 35%.",
  "Built delivery frameworks combining Agile, Product Thinking, Systems Thinking, and AI-assisted execution.",
  "Successfully led distributed teams across multiple countries and disciplines.",
];

const CERTS = [
  "PMP",
  "PSM II",
  "PSPO II",
  "A-CSPO",
  "ICP-ATF",
  "Cloud Digital Leader",
  "AWS AI Practitioner",
  "Scrum Kanban Practitioner",
  "PMI Citizen Developer",
  "AI & GenAI",
];

function Nav() {
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

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-page pt-20 pb-28 md:pt-32 md:pb-40">
        <div className="eyebrow animate-fade">Warsaw, Poland · Available 2026</div>
        <h1 className="display-1 mt-6 max-w-5xl animate-rise">
          Building predictable delivery
          <br />
          for complex <em className="italic text-muted-foreground">technology products.</em>
        </h1>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            10+ years in technology. From QA Engineer to Technical Program Manager. Led enterprise
            SaaS platforms, AI-enabled delivery transformations, large-scale integrations, and
            cross-functional engineering programs across software, infrastructure, and product
            organizations.
          </p>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <a
              href="#experience"
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-px bg-hairline hairline-t hairline-b">
          {[
            { k: "Role", v: "Technical Program Manager" },
            { k: "Focus", v: "Product Delivery Leadership" },
            { k: "Credential", v: "PMP · PSM II · PSPO II" },
          ].map((i) => (
            <div key={i.k} className="bg-background px-4 py-5">
              <div className="eyebrow">{i.k}</div>
              <div className="mt-2 text-sm md:text-base font-medium">{i.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="hairline-t">
      <div className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="display-2 mt-4">{title}</h2>
            {intro && (
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">{intro}</p>
            )}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section id="metrics" className="hairline-t bg-surface">
      <div className="container-page py-20 md:py-24">
        <div className="eyebrow mb-10">Outcomes by the numbers</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-hairline">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-surface px-6 py-10">
              <div className="font-display text-5xl md:text-6xl tracking-tight">{m.value}</div>
              <div className="mt-3 text-sm text-muted-foreground max-w-[14rem]">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <Section
      id="experience"
      eyebrow="Career Journey"
      title="A decade compounding into program leadership."
      intro="From hands-on engineering quality to multi-disciplinary program governance — every step deepened the operating model."
    >
      <ol className="relative">
        {TIMELINE.map((t, i) => (
          <li key={t.period} className="relative pl-8 pb-12 last:pb-0">
            <span className="absolute left-0 top-2 size-2 rounded-full bg-accent" />
            <span className="absolute left-[3px] top-5 bottom-0 w-px bg-hairline last:hidden" />
            <div className="eyebrow">{t.period}</div>
            <h3 className="mt-2 text-xl md:text-2xl font-medium tracking-tight">
              {t.role}
              {t.org && <span className="text-muted-foreground"> · {t.org}</span>}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{t.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Core Expertise"
      title="The operating system behind reliable delivery."
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline border border-hairline">
        {EXPERTISE.map((e, i) => (
          <li
            key={e}
            className="bg-background px-5 py-4 text-sm md:text-[15px] flex items-center gap-3"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            {e}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Philosophy() {
  return (
    <section className="hairline-t">
      <div className="container-page py-24 md:py-36">
        <div className="eyebrow">Leadership Philosophy</div>
        <blockquote className="mt-6 display-2 max-w-4xl">
          “Technology succeeds when strategy, engineering, and execution operate as a
          <em className="italic text-muted-foreground"> single system.</em> My role is to create
          clarity, alignment, and predictable outcomes — while enabling highly autonomous teams.”
        </blockquote>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Selected Achievements"
      title="Measurable outcomes across SaaS, AI, and enterprise integration."
    >
      <ul className="divide-y divide-hairline border-y border-hairline">
        {ACHIEVEMENTS.map((a, i) => (
          <li key={a} className="grid grid-cols-[3rem_1fr] gap-6 py-5">
            <span className="font-mono text-xs text-muted-foreground pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-base md:text-lg leading-relaxed">{a}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continuous investment in craft and credentials."
    >
      <div className="flex flex-wrap gap-2">
        {CERTS.map((c) => (
          <span
            key={c}
            className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary transition-colors"
          >
            {c}
          </span>
        ))}
      </div>
    </Section>
  );
}

function Vision() {
  return (
    <section className="hairline-t bg-surface">
      <div className="container-page py-24 md:py-32 grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
        <div>
          <div className="eyebrow">Vision</div>
          <h2 className="display-2 mt-4">The next five years.</h2>
        </div>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
          Evolving from delivery leadership into large-scale{" "}
          <span className="text-foreground">Technical Program Management</span> — leading strategic
          programs that combine software, AI, cloud infrastructure, and emerging technologies at
          global scale.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="hairline-t">
      <div className="container-page py-24 md:py-36">
        <div className="eyebrow">Contact</div>
        <h2 className="display-1 mt-4 max-w-4xl">
          Let&apos;s build something <em className="italic text-muted-foreground">predictable.</em>
        </h2>
        <div className="mt-12 grid gap-px bg-hairline hairline-t hairline-b sm:grid-cols-3">
          <a
            href="https://www.linkedin.com/in/olehmordach/"
            target="_blank"
            rel="noreferrer"
            className="bg-background px-6 py-8 group"
          >
            <div className="eyebrow">LinkedIn</div>
            <div className="mt-3 text-lg link-underline">olehmordach →</div>
          </a>
          <a href="mailto:oleh.mordach@gmail.com" className="bg-background px-6 py-8 group">
            <div className="eyebrow">Email</div>
            <div className="mt-3 text-lg link-underline">oleh.mordach@gmail.com →</div>
          </a>
          <a
            href="https://www.linkedin.com/in/olehmordach/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background px-6 py-8 group"
          >
            <div className="eyebrow">Resume</div>
            <div className="mt-3 text-lg link-underline">View on LinkedIn →</div>
          </a>
        </div>
        <div className="mt-10 text-sm text-muted-foreground">
          Based in Warsaw, Poland · Open to Tier-1 global technology programs.
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="hairline-t">
      <div className="container-page py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Oleh Mordach. All rights reserved.</div>
        <div className="font-mono text-xs">Warsaw · 52.2297° N, 21.0122° E</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Metrics />
      <Timeline />
      <Expertise />
      <Philosophy />
      <Achievements />
      <Certifications />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
