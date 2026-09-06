/**
 * Smoke tests for the main page sections.
 *
 * Renders the real exported section components directly (not the route file
 * itself, since createFileRoute needs a full router context that's heavyweight
 * for smoke tests) and asserts key structural content is present.
 */
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@/hooks/use-theme";
import { Hero } from "@/components/sections/hero";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";

describe("Index page — Hero section", () => {
  it("renders the headline", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Scaling complex technical programs",
    );
  });

  it('renders the "View Experience" CTA link', () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "View Experience" })).toBeInTheDocument();
  });

  it("lists the current role", () => {
    render(<Hero />);
    expect(screen.getByText("Delivery Manager")).toBeInTheDocument();
  });
});

describe("Index page — Nav", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
  });

  it("renders all navigation links", () => {
    render(
      <ThemeProvider>
        <Nav />
      </ThemeProvider>,
    );

    ["Experience", "Expertise", "Achievements", "Certifications", "Contact"].forEach((label) => {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    });
  });
});

describe("Index page — Footer", () => {
  it("renders the current copyright year", () => {
    const year = new Date().getFullYear().toString();
    render(<Footer />);
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders the Warsaw coordinates", () => {
    render(<Footer />);
    expect(screen.getByText(/52\.2297/)).toBeInTheDocument();
  });
});
