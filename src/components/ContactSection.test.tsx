import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll } from "vitest";
import ContactSection from "./ContactSection";

describe("ContactSection", () => {
  beforeAll(() => {
    // Mock IntersectionObserver for framer-motion
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it("renders headings and descriptions correctly", () => {
    render(<ContactSection />);

    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Open to discussing new opportunities, collaboration, or just exchanging ideas/i
      )
    ).toBeInTheDocument();
  });

  it("renders contact links with correct attributes", () => {
    render(<ContactSection />);

    // Email link - updated to query by the text 'Email'
    const emailLink = screen.getByRole("link", { name: /Email/i });
    expect(emailLink).toHaveAttribute("href", "mailto:omordach+cv@gmail.com");
    expect(emailLink).not.toHaveAttribute("target");
    expect(emailLink).not.toHaveAttribute("rel");

    // LinkedIn link
    const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/oleh-mordach/");
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");

    // GitHub link
    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/omordach");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
