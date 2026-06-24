export function Footer() {
  return (
    <footer className="hairline-t">
      <div className="container-page py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Oleh Mordach. All rights reserved.</div>
        <div className="font-mono text-xs">Warsaw · 52.2297° N, 21.0122° E</div>
      </div>
    </footer>
  );
}
