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

  it("renders the 'Professional Summary' button with correct href", () => {
    render(<HeroSection />);
    const learnMoreButton = screen.getByRole("link", { name: /Professional Summary/i });
    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton).toHaveAttribute("href", "#about");
  });
});
