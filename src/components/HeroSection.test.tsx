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
    const mainTitle = screen.getByRole("heading", { name: /Oleh Mordach/i });
    expect(mainTitle).toBeInTheDocument();
  });

  it("renders the 'Get in Touch' button with correct href", () => {
    render(<HeroSection />);
    const contactButton = screen.getByRole("link", { name: /Get in Touch/i });
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveAttribute("href", "#contact");
  });

  it("renders the 'Learn More' button with correct href", () => {
    render(<HeroSection />);
    const learnMoreButton = screen.getByRole("link", { name: /Learn More/i });
    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton).toHaveAttribute("href", "#about");
  });
});
