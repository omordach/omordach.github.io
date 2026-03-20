import fs from 'fs';
const file = 'src/pages/Index.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'import { lazy, Suspense } from "react";\nconst ImpactSection = lazy(() => import("@/components/ImpactSection"));',
  'import { lazy, Suspense } from "react";\nconst ImpactSection = lazy(() => import("@/components/ImpactSection"));'
);

content = content.replace(
  '<Suspense fallback={<div className="section-padding section-container flex items-center justify-center min-h-[500px]"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" /></div>}><Suspense fallback={<div className="section-padding section-container flex items-center justify-center min-h-[500px]"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" /></div>}>\n          <ImpactSection />\n        </Suspense></Suspense>',
  '<Suspense fallback={<div className="section-padding section-container flex items-center justify-center min-h-[500px]"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" /></div>}>\n          <ImpactSection />\n        </Suspense>'
);

fs.writeFileSync(file, content);
