const METRICS = [
  { value: "10+", label: "Years in technology" },
  { value: "100+", label: "Enterprise customers supported" },
  { value: "10+", label: "Production releases per day" },
  { value: "30%", label: "Fewer release regressions" },
  { value: "50%", label: "Improvement in delivery efficiency" },
  { value: "35%", label: "Reduction in project delays" },
];
export function Metrics() {
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
