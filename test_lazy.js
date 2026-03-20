import fs from 'fs';
const file = 'src/pages/Index.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'import ImpactSection from "@/components/ImpactSection";',
  'import { lazy, Suspense } from "react";\nconst ImpactSection = lazy(() => import("@/components/ImpactSection"));'
);

content = content.replace(
  '<ImpactSection />',
  '<Suspense fallback={<div className="min-h-screen" />}><ImpactSection /></Suspense>'
);

fs.writeFileSync(file, content);
