import React from "react";
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="hairline-t">
      <div className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="display-2 mt-4">{title}</h2>
            {intro && (
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">{intro}</p>
            )}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
