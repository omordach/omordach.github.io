import { Section } from "./section";

const ACHIEVEMENTS = [
  "Scaled enterprise SaaS delivery supporting 100+ B2B customers.",
  "Increased deployment frequency to 10+ releases daily.",
  "Reduced release regressions by 30%.",
  "Improved project delivery efficiency by 50%.",
  "Reduced unexpected delays by 35%.",
  "Built delivery frameworks combining Agile, Product Thinking, Systems Thinking, and AI-assisted execution.",
  "Successfully led distributed teams across multiple countries and disciplines.",
];
export function Achievements() {
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
