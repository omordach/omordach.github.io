import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import CertificationsSection from "./CertificationsSection";

describe("CertificationsSection", () => {
  beforeAll(() => {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it("renders the Certifications section heading", () => {
    render(<CertificationsSection />);
    const heading = screen.getByRole("heading", { name: /Professional Credentials/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders all certification cards", () => {
    render(<CertificationsSection />);
    expect(screen.getByText("PMP")).toBeInTheDocument();
    expect(screen.getByText("Project Management Professional")).toBeInTheDocument();
    expect(screen.getByText("PMI")).toBeInTheDocument();

    expect(screen.getByText("PSM II")).toBeInTheDocument();
    expect(screen.getByText("Professional Scrum Master II")).toBeInTheDocument();

    expect(screen.getByText("PSPO II")).toBeInTheDocument();
    expect(screen.getByText("Professional Scrum Product Owner II")).toBeInTheDocument();

    // Scrum.org is the issuer for multiple certs, so we use getAllByText
    const scrumOrgIssuers = screen.getAllByText("Scrum.org");
    expect(scrumOrgIssuers.length).toBeGreaterThan(0);

    expect(screen.getByText("ICP-ATF")).toBeInTheDocument();
    expect(screen.getByText("Agile Team Facilitation")).toBeInTheDocument();
    expect(screen.getByText("ICAgile")).toBeInTheDocument();

    expect(screen.getByText("A-CSPO")).toBeInTheDocument();
    expect(screen.getByText("Advanced Certified Scrum Product Owner")).toBeInTheDocument();
    expect(screen.getByText("Scrum Alliance")).toBeInTheDocument();

    expect(screen.getByText("GCP-CDL")).toBeInTheDocument();
    expect(screen.getByText("Google Cloud Digital Leader")).toBeInTheDocument();
    expect(screen.getByText("Google")).toBeInTheDocument();
  });

  it("renders external links for certifications with URLs", () => {
    render(<CertificationsSection />);

    // There are 5 links out of 6 certifications
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(6);

    links.forEach(link => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link).toHaveAttribute("href");
    });
  });
});
