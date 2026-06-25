import { Section } from "./section";

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
export function Certifications() {
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
