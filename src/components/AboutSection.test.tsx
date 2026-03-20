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
    const heading = screen.getByRole("heading", { name: /Background/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the section text blocks", () => {
    render(<AboutSection />);
    const text1 = screen.getByText(/I'm a Senior Project Manager and Product Delivery Lead/i);
    const text2 = screen.getByText(/I thrive in environments where clarity is scarce/i);
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });
});
