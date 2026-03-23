import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/use-seo";

const TpmJourneyIndex = () => {
  useSEO(
    "TPM Journey | Oleh Mordach",
    "Documenting the transition from Senior Project Manager and Delivery Lead to Technical Program Manager (TPM). Insights on architecture, CI/CD, and program governance."
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-grow pt-32 pb-16 section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-label mb-4 text-accent">Career Evolution</p>
          <h1 className="heading-display mb-8">
            Transitioning to Technical Program Manager (TPM)
          </h1>

          <div className="prose prose-invert max-w-none text-body leading-relaxed space-y-8">
            <section>
              <p className="text-xl mb-6">
                <strong>How to transition from Project Manager to Technical Program Manager?</strong> This page documents my ongoing professional journey from Delivery Lead and Senior Project Manager to a Technical Program Manager (TPM) role at a tier-1 technology company. It serves as both a public roadmap and a resource for others navigating the intersection of engineering and program governance.
              </p>
            </section>

            <div className="divider my-10" />

            <section>
              <h2 className="text-2xl font-heading text-foreground mb-4">Why TPM? The Natural Evolution from PM and Delivery Lead</h2>
              <p>
                My career began deep in the technical weeds as a QA Automation Engineer, architecting test frameworks and managing the pipelines that run them. As I moved into Technical Project Management and Delivery Leadership, my focus shifted toward process, people, and program execution.
              </p>
              <p className="mt-4">
                The TPM role represents the synthesis of these two halves. While a traditional PM focuses heavily on schedule, budget, and resource allocation (the "when" and "who"), a TPM must deeply understand the system architecture, infrastructure constraints, and engineering trade-offs (the "how" and "why"). At GetCode, I found myself naturally gravitating toward TPM responsibilities—designing CI/CD strategies, debating AWS auto-scaling configurations, and building AI-assisted testing workflows—while still holding accountability for the overall program delivery.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-heading text-foreground mb-6">Skills Gap Analysis & Execution Plan</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card/50 p-6 rounded-sm border border-border">
                  <h3 className="text-foreground font-semibold mb-4 text-lg border-b border-border pb-2">Current Strengths</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2"><span className="text-accent">✓</span> Agile/Scrum scaling across distributed teams</li>
                    <li className="flex gap-2"><span className="text-accent">✓</span> CI/CD pipeline architecture and release engineering</li>
                    <li className="flex gap-2"><span className="text-accent">✓</span> Enterprise SaaS delivery and stakeholder management</li>
                    <li className="flex gap-2"><span className="text-accent">✓</span> Test automation architecture (Playwright, Pest)</li>
                    <li className="flex gap-2"><span className="text-accent">✓</span> Risk management and dependency mapping</li>
                  </ul>
                </div>

                <div className="bg-muted/20 p-6 rounded-sm border border-border">
                  <h3 className="text-foreground font-semibold mb-4 text-lg border-b border-border pb-2">Areas of Focus (2025-2026)</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2"><span className="text-muted-foreground">→</span> Large-scale system design and architecture patterns</li>
                    <li className="flex gap-2"><span className="text-muted-foreground">→</span> Deepening cloud infrastructure expertise (AWS/GCP)</li>
                    <li className="flex gap-2"><span className="text-muted-foreground">→</span> Advanced portfolio management financials</li>
                    <li className="flex gap-2"><span className="text-muted-foreground">→</span> FAANG-specific TPM interview preparation</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-heading text-foreground mb-4">Certifications Roadmap</h2>
              <p className="mb-6">Continuous learning is critical for maintaining technical authority and program governance expertise.</p>

              <div className="relative border-l border-border pl-6 ml-4 space-y-8">
                <div className="relative">
                  <span className="absolute -left-[31px] bg-accent w-3 h-3 rounded-full mt-1.5 ring-4 ring-background"></span>
                  <h3 className="text-foreground font-medium">Completed Core Certifications</h3>
                  <p className="text-sm text-muted-foreground mt-1">PMP, PSM II, PSPO II, A-CSPO</p>
                  <p className="text-sm mt-2">Established foundational excellence in project management and Agile product delivery.</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] bg-accent w-3 h-3 rounded-full mt-1.5 ring-4 ring-background"></span>
                  <h3 className="text-foreground font-medium">Technical Baseline Expansion</h3>
                  <p className="text-sm text-muted-foreground mt-1">Google Cloud Digital Leader</p>
                  <p className="text-sm mt-2">Formalized understanding of cloud infrastructure, data, and ML concepts crucial for technical program oversight.</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] bg-muted w-3 h-3 rounded-full mt-1.5 ring-4 ring-background"></span>
                  <h3 className="text-foreground font-medium">In Progress (Target: 2026)</h3>
                  <p className="text-sm text-muted-foreground mt-1">E5 Program & Portfolio Mastery</p>
                  <p className="text-sm mt-2">Deepening portfolio management competencies strictly aligned with enterprise-grade TPM requirements.</p>
                </div>
              </div>
            </section>

            <section className="mt-16 bg-accent/5 border border-accent/20 p-8 rounded-sm">
              <h2 className="text-xl font-heading text-foreground mb-3">Connecting with the Community</h2>
              <p>
                Are you a TPM, an aspiring TPM, or an engineering leader looking to optimize delivery? I am actively networking within the TPM community and always open to discussing system design, release automation, or program governance.
              </p>
              <div className="mt-6">
                 <a href="https://www.linkedin.com/in/oleh-mordach/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide transition-opacity hover:opacity-90 rounded-sm">
                  Connect on LinkedIn
                </a>
              </div>
            </section>

          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default TpmJourneyIndex;
