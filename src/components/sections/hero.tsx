const stats = [
  { k: "Role", v: "Delivery Manager" },
  { k: "Focus", v: "Global Product & Infrastructure Delivery" },
  { k: "Credential", v: "PMP · PSM II · PSPO II" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-page pt-20 pb-28 md:pt-32 md:pb-40">
        <h1 className="display-1 mt-6 max-w-5xl animate-rise">
          Scaling complex technical programs
          <br />
          from <em className="italic text-muted-foreground">chaos to predictability.</em>
        </h1>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            10+ years driving operational excellence for high-growth tech organizations. I lead
            cross-functional engineering, product, and infrastructure teams to deliver
            enterprise-scale SaaS and AI platforms by designing scalable delivery mechanisms,
            navigating ambiguity, and enforcing rigorous execution standards.
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
          {stats.map((i) => (
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
