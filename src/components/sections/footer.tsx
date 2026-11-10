import { useEffect, useState } from "react";

function useWarsawTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/Warsaw",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        }).format(new Date());
        setTime(formatted);
      } catch {
        setTime(null);
      }
    };
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export function Footer() {
  const warsawTime = useWarsawTime();

  return (
    <footer className="hairline-t">
      <div className="container-page py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Oleh Mordach. All rights reserved.</div>
        <div className="font-mono text-xs flex flex-wrap items-center gap-2">
          <span>Warsaw · 52.2297° N, 21.0122° E</span>
          {warsawTime && (
            <>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-foreground/80">
                <span className="inline-block size-1.5 rounded-full bg-accent animate-pulse" />
                {warsawTime}
              </span>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
