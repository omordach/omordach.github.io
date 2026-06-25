import { Section } from "./section";

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
export function Expertise() {
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
