import { Section } from "./section";

const TIMELINE = [
  {
    period: "2015 — 2017",
    role: "Quality Assurance Engineer",
    org: "",
    body: "Established foundational QA processes and release gating criteria, reducing post-launch defects by implementing structured manual testing and release management protocols.",
  },
  {
    period: "2017 — 2018",
    role: "Automation QA Engineer",
    org: "",
    body: "Accelerated release cycles and increased deployment confidence by architecting and implementing automated end-to-end testing frameworks into the CI/CD pipeline.",
  },
  {
    period: "2018 — 2022",
    role: "Technical Project Manager",
    org: "GetCode",
    body: "Scaled delivery across multiple product streams by introducing metrics-driven Agile frameworks, unblocking cross-functional dependencies, and standardizing release orchestration.",
  },
  {
    period: "2022 — 2026",
    role: "Senior Project Manager · Product Delivery Lead",
    org: "GetCode",
    body: "Led the delivery of a highly modular, enterprise-grade SaaS platform serving 100+ B2B customers across North America. Drove cross-organizational alignment, managed complex API integrations, and established scalable deployment mechanisms to support high-growth roadmaps.",
  },
  {
    period: "2026 →",
    role: "Delivery Manager",
    org: "Shooters.Global",
    body: "Directing end-to-end global delivery across hardware, firmware, mobile, web, and simulation platforms. Establishing operational excellence by implementing measurable KPIs, capacity planning models, and continuous improvement mechanisms across highly distributed engineering organizations.",
  },
];
export function Timeline() {
  return (
    <Section
      id="experience"
      eyebrow="Career Journey"
      title="A decade of scaling technical delivery."
      intro="From engineering quality at the code level to governing complex, multi-disciplinary programs at an organizational scale."
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
