import { Section } from "./section";

const ACHIEVEMENTS = [
  "Scaled enterprise SaaS delivery for 100+ B2B customers by re-architecting release pipelines and aligning cross-functional product roadmaps.",
  "Increased deployment frequency to 10+ daily releases by implementing robust CI/CD practices and shifting quality verification left.",
  "Reduced release regressions by 30% through the introduction of standardized testing frameworks and automated deployment gates.",
  "Improved project delivery efficiency by 50% by establishing clear KPIs, capacity planning models, and removing critical path blockers.",
  "Reduced unexpected project delays by 35% through proactive risk modeling, dependency mapping, and continuous stakeholder alignment.",
  "Architected hybrid delivery frameworks that integrated Agile principles, Systems Thinking, and AI-assisted execution strategies.",
  "Consistently delivered complex, multi-disciplinary programs across distributed global engineering, product, and infrastructure teams.",
];
export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Selected Achievements"
      title="Measurable impact across SaaS, AI, and enterprise programs."
      intro="A decade of quantified outcomes across delivery, AI, and infrastructure programs."
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
