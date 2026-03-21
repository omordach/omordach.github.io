import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const BlogIndex = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-grow pt-32 pb-16 section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-label mb-4 text-accent">Insights</p>
          <h1 className="heading-display mb-12">
            Technical & Program Delivery Insights
          </h1>

          <p className="text-body text-lg max-w-2xl mb-16 leading-relaxed">
            Thoughts, case studies, and practical guides on CI/CD automation, enterprise SaaS delivery, QA architecture, and transitioning from Project Manager to Technical Program Manager.
          </p>

          <div className="space-y-16">
            {/* Article 1 */}
            <article id="tpm-vs-pm" className="border-b border-border pb-12 scroll-mt-32">
              <span className="text-sm font-mono text-muted-foreground mb-3 inline-block">March 2026</span>
              <h2 className="text-3xl font-heading text-foreground mb-6">
                What is a Technical Program Manager? How TPM differs from PM and Engineering Manager
              </h2>
              <div className="text-body leading-relaxed max-w-3xl space-y-4">
                <p>
                  <strong>What does a Technical Program Manager do?</strong> A Technical Program Manager (TPM) is a specialized leadership role responsible for driving complex, cross-functional engineering initiatives from system design through to production deployment. Unlike a traditional Project Manager who focuses primarily on schedules, resources, and risk tracking, a TPM operates at the intersection of technical architecture and program execution. They are expected to deeply understand the underlying technology stack, challenge engineering decisions, and align technical trade-offs with business objectives.
                </p>
                <p>
                  As enterprise systems grow increasingly distributed and complex—especially in cloud-native SaaS environments—the gap between high-level product vision and low-level engineering implementation widens. TPMs bridge this gap. They own the "how" and the "when" of technical delivery across multiple engineering teams, ensuring that disparate systems integrate seamlessly and that architectural dependencies are resolved early.
                </p>
                <p>
                  The distinction between a TPM, a Product Manager (PM), and an Engineering Manager (EM) is often misunderstood but critical for organizational scaling. While Product Managers focus on the "what" and "why" (customer needs, market fit, product roadmap), and Engineering Managers focus on "who" and "how" (team health, individual career growth, code quality), the TPM focuses on cross-system execution. They are the glue that binds multi-team efforts, orchestrating CI/CD pipelines, release engineering processes, and infrastructure migrations. By abstracting execution complexity away from EMs and PMs, TPMs allow engineering teams to maintain focus on writing robust code.
                </p>

                <div className="mt-8 bg-card/50 p-6 rounded-sm border border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Article Outline</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li><strong>Introduction:</strong> Defining the TPM role in modern enterprise tech.</li>
                    <li><strong>The Core Differences:</strong> TPM vs. Product Manager vs. Engineering Manager.</li>
                    <li><strong>Technical Depth Required:</strong> How deep into the code does a TPM need to go?</li>
                    <li><strong>Day in the Life:</strong> Orchestrating multi-team dependencies and cloud migrations.</li>
                    <li><strong>The Value Add:</strong> Why high-performing engineering orgs hire TPMs.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article id="cicd-best-practices" className="border-b border-border pb-12 scroll-mt-32">
              <span className="text-sm font-mono text-muted-foreground mb-3 inline-block">February 2026</span>
              <h2 className="text-3xl font-heading text-foreground mb-6">
                CI/CD Pipeline Best Practices for Enterprise SaaS Teams: Lessons from 100+ Client Deployments
              </h2>
              <div className="text-body leading-relaxed max-w-3xl space-y-4">
                <p>
                  <strong>How to improve CI/CD in enterprise SaaS?</strong> Improving Continuous Integration and Continuous Deployment (CI/CD) pipelines in an enterprise SaaS environment requires a shift from viewing pipelines as mere automation scripts to treating them as critical production infrastructure. When managing deployments for over 100 corporate B2B clients, the stakes for every release multiply. A single flawed deployment can trigger cascading service disruptions across multiple tenant environments, leading to significant SLA penalties and degraded client trust.
                </p>
                <p>
                  At GetCode, we transitioned from a monolithic monthly release cycle to a high-frequency delivery model enabling multiple production deployments per week. This evolution was not simply a tooling change; it was a fundamental architectural shift. The core challenge was orchestrating multi-tenant deployment strategies that balanced high release velocity with the zero-downtime requirements mandated by enterprise clients.
                </p>
                <p>
                  One of our most impactful realizations was that CI/CD maturity is gated by test automation architecture, not deployment scripts. To safely increase deployment frequency, we implemented strict pre-commit hooks, containerized local testing environments parity, and automated rollback triggers. We moved away from long-running, flaky end-to-end testing suites in favor of highly parallelized Playwright tests executed against ephemeral staging environments. Furthermore, we introduced feature flagging infrastructure, decoupling code deployment from feature release. This allowed engineering teams to merge code continuously into the main branch without exposing unfinished features to enterprise clients, fundamentally de-risking our delivery cadence.
                </p>

                <div className="mt-8 bg-card/50 p-6 rounded-sm border border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Article Outline</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li><strong>Introduction:</strong> The high stakes of enterprise SaaS deployments.</li>
                    <li><strong>Moving Beyond the Monolith:</strong> Why monthly releases fail B2B clients.</li>
                    <li><strong>Test Architecture as the Gatekeeper:</strong> Parallelized Playwright in ephemeral environments.</li>
                    <li><strong>Decoupling Deployment from Release:</strong> The power of feature flagging.</li>
                    <li><strong>Automated Rollbacks:</strong> Designing self-healing deployment pipelines.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article id="playwright-vs-selenium" className="border-b border-border pb-12 scroll-mt-32">
              <span className="text-sm font-mono text-muted-foreground mb-3 inline-block">January 2026</span>
              <h2 className="text-3xl font-heading text-foreground mb-6">
                Playwright vs Selenium for Enterprise E2E Testing: A PM's Perspective
              </h2>
              <div className="text-body leading-relaxed max-w-3xl space-y-4">
                <p>
                  <strong>Playwright vs Selenium enterprise 2025:</strong> When evaluating Playwright versus Selenium for enterprise end-to-end (E2E) testing, Technical Program Managers must look beyond basic feature checklists and analyze execution speed, developer experience, and CI/CD integration costs. For over a decade, Selenium has been the undisputed industry standard for web automation. However, as enterprise applications have evolved into complex, stateful Single Page Applications (SPAs) heavily reliant on asynchronous JavaScript, Selenium's architecture has begun to show its age, often resulting in flaky tests and frustrated engineering teams.
                </p>
                <p>
                  During our E2E testing infrastructure migration at GetCode, we conducted a rigorous comparative analysis between maintaining our legacy Selenium suite and adopting Microsoft's Playwright. From a program management perspective, the primary metric wasn't just test execution time—it was the total cost of ownership (TCO) of the testing infrastructure. Selenium required extensive custom scaffolding to handle network intercepts, dynamic waits, and cross-browser driver management. This overhead consumed a significant portion of our QA automation team's bandwidth just to keep the tests running reliably.
                </p>
                <p>
                  Playwright, conversely, provided an out-of-the-box architecture built specifically for the modern web. Its auto-waiting mechanisms and bidirectional communication with the browser dramatically reduced test flakiness out of the gate. More importantly for our delivery velocity, Playwright's native browser context isolation allowed us to execute tests in parallel with minimal overhead, cutting our CI pipeline execution time by nearly 60%. This reduction in feedback loop latency meant developers could merge code faster, directly impacting our ability to ship features to our 100+ enterprise clients.
                </p>

                <div className="mt-8 bg-card/50 p-6 rounded-sm border border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Article Outline</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li><strong>Introduction:</strong> The shifting landscape of E2E testing in 2025.</li>
                    <li><strong>The Hidden Costs of Selenium:</strong> Maintenance, flakiness, and infrastructure overhead.</li>
                    <li><strong>Why Playwright Wins on Architecture:</strong> Auto-waiting and browser contexts.</li>
                    <li><strong>Impact on CI/CD:</strong> Measuring velocity gains from parallel execution.</li>
                    <li><strong>Migration Strategy:</strong> How to transition an enterprise suite without halting delivery.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Article 4 */}
            <article id="ai-test-generation" className="border-b border-border pb-12 scroll-mt-32">
              <span className="text-sm font-mono text-muted-foreground mb-3 inline-block">December 2025</span>
              <h2 className="text-3xl font-heading text-foreground mb-6">
                How to Use AI (LLMs) to Auto-Generate Test Cases: A Practical Workflow
              </h2>
              <div className="text-body leading-relaxed max-w-3xl space-y-4">
                <p>
                  <strong>How to auto-generate test cases with Claude API?</strong> Auto-generating test cases using Large Language Models (LLMs) like Anthropic's Claude API is transforming modern QA architecture by shifting test scaffolding left, directly into the developer's pre-commit workflow. Historically, writing comprehensive unit and integration tests has been viewed by many engineering teams as a time-consuming chore, often deferred until the end of a sprint. This delay inevitably leads to technical debt, lower test coverage, and a higher risk of production regressions.
                </p>
                <p>
                  To address this bottleneck at GetCode, we designed and implemented a practical, AI-assisted test generation pipeline integrated directly into our developers' local environments. Rather than relying on generic AI coding assistants in the IDE, we built a custom CLI tool leveraging the Claude 3.5 Sonnet API. This tool acts as a pre-commit hook that analyzes the modified source code, identifies the core logic and edge cases, and automatically generates boilerplate Pest (PHP) tests tailored to our specific enterprise ERP/CRM domain constraints.
                </p>
                <p>
                  The workflow is straightforward but highly effective: when a developer stages a new feature or bug fix, the CLI extracts the diff and relevant context (like data models and interface contracts). It sends a heavily engineered prompt to the Claude API, instructing it to generate comprehensive Pest test scenarios covering both happy paths and edge cases. The generated tests are not expected to be perfect—they act as advanced scaffolding. The developer reviews, refines, and executes the AI-generated tests before committing. This workflow has decreased the time spent writing tests by over 40% while simultaneously increasing our overall test coverage density.
                </p>

                <div className="mt-8 bg-card/50 p-6 rounded-sm border border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Article Outline</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li><strong>Introduction:</strong> The test coverage bottleneck and why manual scaffolding is slow.</li>
                    <li><strong>Architecture Overview:</strong> Integrating Claude API via pre-commit CLI hooks.</li>
                    <li><strong>Prompt Engineering for QA:</strong> Structuring prompts for Pest/PHP test accuracy.</li>
                    <li><strong>The Developer Workflow:</strong> From AI generation to human refinement.</li>
                    <li><strong>Results & Metrics:</strong> Measuring time saved and coverage density improvements.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Article 5 */}
            <article id="aws-vs-digitalocean" className="border-b border-border pb-12 scroll-mt-32">
              <span className="text-sm font-mono text-muted-foreground mb-3 inline-block">November 2025</span>
              <h2 className="text-3xl font-heading text-foreground mb-6">
                AWS vs DigitalOcean for Laravel SaaS: Auto-Scaling Architecture Comparison
              </h2>
              <div className="text-body leading-relaxed max-w-3xl space-y-4">
                <p>
                  <strong>AWS vs DigitalOcean for Laravel auto-scaling:</strong> Comparing AWS versus DigitalOcean for a Laravel-based SaaS application reveals critical trade-offs between DevOps complexity, infrastructure elasticity, and operational cost, particularly during high-load enterprise scenarios. When engineering the infrastructure for GetCode's modular ERP/CRM platform, we faced a pivotal architectural decision. Our clients required reliable bulk payment processing systems that experienced massive, unpredictable traffic spikes at the end of each fiscal month. We needed an auto-scaling architecture that could handle these surges without over-provisioning expensive idle resources during off-peak periods.
                </p>
                <p>
                  DigitalOcean has long been favored in the Laravel ecosystem (often paired with Laravel Forge) due to its exceptional developer experience, predictable pricing, and straightforward Droplet management. For predictable workloads, a load-balanced DigitalOcean setup is highly efficient. However, as our enterprise client base scaled past 100 corporate accounts, the limitations of DigitalOcean's auto-scaling capabilities became apparent. Reacting to a sudden 10x traffic spike required manual intervention or custom API scripting to spin up new Droplets and attach them to the load balancer, a process that was too slow for synchronous bulk processing.
                </p>
                <p>
                  Migrating to Amazon Web Services (AWS) provided the deep infrastructure elasticity our platform required. By leveraging AWS Auto Scaling Groups (ASG) combined with Application Load Balancers (ALB) and EC2 instances configured via custom AMIs, we built a self-healing, highly responsive environment. When CPU utilization on our Laravel worker nodes exceeded 70%, the ASG automatically provisioned new instances within seconds. While AWS introduced significant DevOps complexity and a less predictable billing model compared to DigitalOcean, its native auto-scaling capabilities proved essential for maintaining strict enterprise SLAs during our most critical high-load events.
                </p>

                <div className="mt-8 bg-card/50 p-6 rounded-sm border border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Article Outline</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li><strong>Introduction:</strong> The challenge of high-load bulk processing in Laravel SaaS.</li>
                    <li><strong>DigitalOcean's Strengths:</strong> Predictability, developer experience, and cost efficiency.</li>
                    <li><strong>The Auto-Scaling Bottleneck:</strong> Why manual scaling fails during traffic spikes.</li>
                    <li><strong>The AWS Architecture:</strong> Implementing ASGs, ALBs, and EC2 for deep elasticity.</li>
                    <li><strong>Conclusion:</strong> Evaluating the trade-off between DevOps complexity and enterprise reliability.</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
