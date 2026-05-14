import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  LineChart,
} from "recharts";

const velocityData = [
  { sprint: "Q1", velocity: 45, expected: 40 },
  { sprint: "Q2", velocity: 52, expected: 45 },
  { sprint: "Q3", velocity: 68, expected: 50 },
  { sprint: "Q4", velocity: 84, expected: 55 },
];

const resourceData = [
  { name: "Dev", allocated: 80, optimized: 95 },
  { name: "QA", allocated: 65, optimized: 85 },
  { name: "Ops", allocated: 50, optimized: 75 },
  { name: "Design", allocated: 70, optimized: 90 },
];

const defectData = [
  { month: "Jan", defects: 45 },
  { month: "Feb", defects: 38 },
  { month: "Mar", defects: 25 },
  { month: "Apr", defects: 18 },
  { month: "May", defects: 12 },
];

const kpiStats = [
  { value: "50%", label: "Delivery Efficiency", detail: "Agile workflow restructuring" },
  { value: "35%", label: "Fewer Project Delays", detail: "Dependency mapping & risk tracking" },
  { value: "73%", label: "Defect Reduction", detail: "CI/CD + QA automation" },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="section-padding section-container">
      <div className="divider mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-label mb-4">Impact & Metrics</p>
        <h2 className="heading-section">Quantifiable Results</h2>

        <p className="text-body mb-10 max-w-3xl">
          Focused on delivering measurable value — here is a snapshot of how I drive delivery
          velocity, optimize resources, and improve product quality across cross-functional teams.
        </p>

        {/* KPI stat highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {kpiStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-md border border-border bg-card shadow-sm text-center"
            >
              <div className="text-3xl font-bold text-accent font-heading mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.detail}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Delivery Velocity Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-experience"
          >
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Delivery Velocity
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Consistent increase in team output through optimized Agile workflows.
            </p>
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={velocityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorVelocity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="sprint" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "var(--radius)", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Area type="monotone" dataKey="velocity" stroke="hsl(var(--accent))" fillOpacity={1} fill="url(#colorVelocity)" strokeWidth={2} name="Actual Velocity" />
                  <Line type="monotone" dataKey="expected" stroke="hsl(var(--muted-foreground))" strokeDasharray="4 4" dot={false} strokeWidth={2} name="Expected Velocity" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Resource Optimization Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-experience"
          >
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Resource Optimization
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Improved resource utilization through strategic allocation.
            </p>
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={resourceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "var(--radius)", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                    cursor={{ fill: "hsl(var(--muted))", opacity: 0.5 }}
                  />
                  <Bar dataKey="optimized" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} name="Optimized (%)" maxBarSize={40} />
                  <Bar dataKey="allocated" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} name="Baseline (%)" maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Quality Improvement Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-experience md:col-span-2"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Defect Reduction
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Implementing robust QA processes and CI/CD pipelines significantly reduced
                  post-release defects, enhancing overall client satisfaction.
                </p>
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-bold font-heading text-accent">-73%</div>
                  <div className="text-xs text-muted-foreground leading-tight">Reduction in<br />critical bugs</div>
                </div>
              </div>
              <div className="h-[200px] w-full md:w-2/3">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={defectData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "var(--radius)", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                      itemStyle={{ color: "hsl(var(--foreground))" }}
                    />
                    <Line type="monotone" dataKey="defects" stroke="hsl(var(--destructive))" strokeWidth={3} dot={{ fill: "hsl(var(--card))", strokeWidth: 2, stroke: "hsl(var(--destructive))" }} activeDot={{ r: 6 }} name="Reported Defects" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ImpactSection;
