import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
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

  it("renders the main title", () => {
    render(<HeroSection />);
    const mainTitle = screen.getByRole("heading", { name: "Oleh Mordach" });
    expect(mainTitle).toBeInTheDocument();
  });

  it("renders the Download Resume and Connect on LinkedIn buttons", () => {
    render(<HeroSection />);
    const downloadResume = screen.getByRole("link", { name: /Download Resume/i });
    const connectLinkedIn = screen.getByRole("link", { name: /Connect on LinkedIn/i });

    expect(downloadResume).toBeInTheDocument();
    expect(downloadResume).toHaveAttribute("href", "/resume.pdf");

    expect(connectLinkedIn).toBeInTheDocument();
    expect(connectLinkedIn).toHaveAttribute("href", "https://www.linkedin.com/in/oleh-mordach/");
  });

  it("renders the new tagline", () => {
    render(<HeroSection />);
    const tagline = screen.getByText(/Turning engineering complexity into measurable delivery outcomes/i);
    expect(tagline).toBeInTheDocument();
  });
});
