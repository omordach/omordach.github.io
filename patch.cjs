const fs = require('fs');

const heroSectionPath = 'src/components/HeroSection.tsx';
let content = fs.readFileSync(heroSectionPath, 'utf8');

const newTextSection = `
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full">
          <div className="p-6 border border-border bg-card/30 rounded-sm">
            <h3 className="text-foreground font-semibold mb-4 pb-2 border-b border-border uppercase tracking-wider text-sm">Background</h3>
            <p className="text-body text-base leading-relaxed">
              <strong>Oleh Mordach</strong> is a Warsaw-based Technical Program Manager and Senior Delivery Lead with 7+ years of experience building and shipping enterprise SaaS products for 100+ corporate clients.
            </p>
          </div>

          <div className="p-6 border border-border bg-card/30 rounded-sm">
            <h3 className="text-foreground font-semibold mb-4 pb-2 border-b border-border uppercase tracking-wider text-sm">Expertise</h3>
            <p className="text-body text-base leading-relaxed">
              Specializing in the intersection of technical execution and program governance, Oleh leads CI/CD automation, Agile delivery workflows, and distributed engineering teams — with a track record of high-frequency releases and measurable reduction in production regression rates.
            </p>
          </div>

          <div className="md:col-span-2 p-6 border border-border bg-card/50 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-body text-base m-0">
              Currently: Delivery Lead at <strong>GetCode</strong> (Warsaw), managing a modular ERP/CRM platform.
            </p>
            <div className="text-base text-muted-foreground md:border-l md:border-border md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 border-border">
              Target: <strong className="text-foreground">Technical Program Manager</strong> at a tier-1 technology company.
            </div>
          </div>
        </div>
`;

content = content.replace(
  /<div className="text-body text-xl max-w-3xl mb-12 leading-relaxed space-y-6">([\s\S]*?)<\/div>/,
  newTextSection.trim()
);

fs.writeFileSync(heroSectionPath, content);
console.log("Patched HeroSection.tsx");
