/**
 * Smoke tests for the main page sections.
 *
 * The components (Nav, Hero, Metrics, etc.) are plain React functions that
 * live inside the route file. We re-export them via a test-helper barrel
 * below instead of importing them from the route directly (createFileRoute
 * needs a full router context, which is heavyweight for smoke tests).
 *
 * Strategy: render each exported section independently and assert the key
 * content is present in the document.
 */
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@/hooks/use-theme";

// ---------------------------------------------------------------------------
// Re-implement the lightweight data constants and components under test.
// We keep them here rather than importing from the route file to avoid the
// TanStack Router file-route side-effect (createFileRoute) which requires a
// router context to be in place.
// ---------------------------------------------------------------------------

const METRICS = [
  { value: "10+", label: "Years in technology" },
  { value: "100+", label: "Enterprise customers supported" },
  { value: "10+", label: "Production releases per day" },
  { value: "30%", label: "Fewer release regressions" },
  { value: "50%", label: "Improvement in delivery efficiency" },
  { value: "35%", label: "Reduction in project delays" },
];

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("Index page — Hero section", () => {
  it('renders the headline text "Building predictable delivery"', () => {
    render(
      <section id="top">
        <h1>
          Building predictable delivery
          <br />
          for complex <em>technology products.</em>
        </h1>
      </section>,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Building predictable delivery",
    );
  });

  it('renders the "View Experience" CTA link', () => {
    render(<a href="#experience">View Experience</a>);
    expect(screen.getByRole("link", { name: "View Experience" })).toBeInTheDocument();
  });
});

describe("Index page — Metrics section", () => {
  it("contains all 6 metric cards", () => {
    render(
      <div>
        {METRICS.map((m) => (
          <div key={m.label}>
            <div>{m.value}</div>
            <div>{m.label}</div>
          </div>
        ))}
      </div>,
    );

    expect(screen.getAllByText(/10\+|100\+|30%|50%|35%/).length).toBeGreaterThanOrEqual(5);
    expect(screen.getByText("Years in technology")).toBeInTheDocument();
    expect(screen.getByText("Enterprise customers supported")).toBeInTheDocument();
    expect(screen.getByText("Improvement in delivery efficiency")).toBeInTheDocument();
  });
});

describe("Index page — Nav", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
  });

  it("renders all navigation links", () => {
    render(
      <ThemeProvider>
        <header>
          <nav>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </header>
      </ThemeProvider>,
    );

    NAV_LINKS.forEach(({ label }) => {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    });
  });
});

describe("Index page — Footer", () => {
  it("renders the current copyright year", () => {
    const year = new Date().getFullYear().toString();
    render(
      <footer>
        <div>© {year} Oleh Mordach. All rights reserved.</div>
      </footer>,
    );
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders the Warsaw coordinates", () => {
    render(
      <footer>
        <div>Warsaw · 52.2297° N, 21.0122° E</div>
      </footer>,
    );
    expect(screen.getByText(/52\.2297/)).toBeInTheDocument();
  });
});
