import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import AboutSection from "./AboutSection";

describe("AboutSection", () => {
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

  it("renders the About section heading", () => {
    render(<AboutSection />);
    const heading = screen.getByRole("heading", { name: /Professional Summary/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the Background and Expertise cards", () => {
    render(<AboutSection />);
    const backgroundHeading = screen.getByRole("heading", { name: /Background/i });
    const expertiseHeading = screen.getByRole("heading", { name: /Expertise/i });
    expect(backgroundHeading).toBeInTheDocument();
    expect(expertiseHeading).toBeInTheDocument();
  });

  it("renders the Quick Facts table", () => {
    render(<AboutSection />);
    const quickFactsHeading = screen.getByRole("heading", { name: /Quick Facts — Oleh Mordach/i });
    expect(quickFactsHeading).toBeInTheDocument();

    // There are multiple "Target: TPM" strings now, use getAllByText
    const roleText = screen.getAllByText(/Delivery Lead & Senior PM → Target: TPM/i);
    expect(roleText.length).toBeGreaterThan(0);
  });

  it("renders the Currently/Target status strip", () => {
    render(<AboutSection />);
    const currentlyText = screen.getByText(/Currently: Delivery Lead at/i);
    const targetText = screen.getAllByText(/Target:/i);
    expect(currentlyText).toBeInTheDocument();
    expect(targetText.length).toBeGreaterThan(0);
  });
});
