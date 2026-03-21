const fs = require('fs');

const heroSectionPath = 'src/components/HeroSection.tsx';
let content = fs.readFileSync(heroSectionPath, 'utf8');

const newTextSection = `
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 border border-border bg-card/30 rounded-sm space-y-4">
            <h3 className="text-foreground font-medium uppercase tracking-wider text-sm border-b border-border pb-2">Background</h3>
            <p className="text-body text-base leading-relaxed">
              <strong>Oleh Mordach</strong> is a Warsaw-based Technical Program Manager and Senior Delivery Lead with 7+ years of experience building and shipping enterprise SaaS products for 100+ corporate clients.
            </p>
          </div>

          <div className="p-6 border border-border bg-card/30 rounded-sm space-y-4">
            <h3 className="text-foreground font-medium uppercase tracking-wider text-sm border-b border-border pb-2">Expertise</h3>
            <p className="text-body text-base leading-relaxed">
              Specializing in the intersection of technical execution and program governance, Oleh leads CI/CD automation, Agile delivery workflows, and distributed engineering teams.
            </p>
          </div>

          <div className="md:col-span-2 p-6 border border-border bg-primary/5 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-body text-base leading-relaxed mb-1">
                Currently: Delivery Lead at <strong>GetCode</strong> (Warsaw), managing a modular ERP/CRM platform.
              </p>
            </div>
            <div className="shrink-0 text-right sm:text-left text-sm text-muted-foreground border-l-0 sm:border-l sm:border-border sm:pl-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-border w-full sm:w-auto">
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
