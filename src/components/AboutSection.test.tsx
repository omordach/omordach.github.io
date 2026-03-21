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

  it("renders the section text blocks", () => {
    render(<AboutSection />);
    const text1 = screen.getByText(/Oleh Mordach is a Technical Program Manager and Senior Delivery Lead/i);
    const text2 = screen.getByText(/At GetCode, Oleh manages delivery of a modular SaaS ERP/i);
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });
});
