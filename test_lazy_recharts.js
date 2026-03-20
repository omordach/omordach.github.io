import fs from 'fs';
const file = 'src/pages/Index.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'import { lazy, Suspense } from "react";\nconst ImpactSection = lazy(() => import("@/components/ImpactSection"));',
  'import ImpactSection from "@/components/ImpactSection";'
);

content = content.replace(
  '<Suspense fallback={<div className="min-h-screen" />}><ImpactSection /></Suspense>',
  '<ImpactSection />'
);

fs.writeFileSync(file, content);
