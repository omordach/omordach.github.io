import { Section } from "./section";

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
export function Timeline() {
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
