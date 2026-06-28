export function Contact() {
  return (
    <section id="contact" className="hairline-t">
      <div className="container-page py-24 md:py-36">
        <div className="eyebrow">Contact</div>
        <h2 className="display-1 mt-4 max-w-4xl">
          Let&apos;s build something <em className="italic text-muted-foreground">predictable.</em>
        </h2>
        <div className="mt-12 grid gap-px bg-hairline hairline-t hairline-b sm:grid-cols-3">
          <a
            href="https://www.linkedin.com/in/oleh-mordach/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background px-6 py-8 group"
          >
            <div className="eyebrow">LinkedIn</div>
            <div className="mt-3 text-lg link-underline">oleh-mordach →</div>
          </a>
          <a href="mailto:omordach@gmail.com" className="bg-background px-6 py-8 group">
            <div className="eyebrow">Email</div>
            <div className="mt-3 text-lg link-underline">omordach@gmail.com →</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1Z4qugohv7f-0cPCIsZVISJhk-tSGT8me/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background px-6 py-8 group"
          >
            <div className="eyebrow">Resume</div>
            <div className="mt-3 text-lg link-underline">Download PDF →</div>
          </a>
        </div>
        <div className="mt-10 text-sm text-muted-foreground">
          Based in Warsaw, Poland · Open to Tier-1 global technology programs.
        </div>
      </div>
    </section>
  );
}
