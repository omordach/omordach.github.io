import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Navigation", () => {
  beforeAll(() => {
    // Mock IntersectionObserver for framer-motion
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;

    // Mock requestAnimationFrame for the scroll listener
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
      cb(0);
      return 0;
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderWithRouter = (initialRoute = "/") => {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <Navigation />
      </MemoryRouter>
    );
  };

  it("renders the brand logo and desktop links", () => {
    renderWithRouter();

    // Brand
    expect(screen.getByText(/Oleh/)).toBeInTheDocument();
    expect(screen.getByText(/.Mordach/)).toBeInTheDocument();

    // Desktop links
    const aboutLinks = screen.getAllByRole("link", { name: /About/i });
    expect(aboutLinks.length).toBeGreaterThan(0);

    const resumeLinks = screen.getAllByRole("link", { name: /Resume/i });
    expect(resumeLinks[0]).toHaveAttribute("href", "/resume.pdf");
  });

  it("toggles the mobile menu when the hamburger button is clicked", () => {
    renderWithRouter();

    // The mobile menu shouldn't be open initially
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Download Resume/i })).not.toBeInTheDocument();

    // Click the open menu button
    const toggleButton = screen.getByRole("button", { name: /Open menu/i });
    fireEvent.click(toggleButton);

    // Now the mobile menu should be open
    expect(screen.getByRole("link", { name: /Download Resume/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Close menu/i })).toHaveAttribute("aria-expanded", "true");

    // Click a link in the mobile menu, it should close the menu
    const aboutLink = screen.getAllByRole("link", { name: /About/i }).find((el) => el.closest('#mobile-menu'));
    if (aboutLink) {
        fireEvent.click(aboutLink);
    }

    // Check if aria-expanded becomes false
    expect(screen.getByRole("button", { name: /Open menu/i })).toHaveAttribute("aria-expanded", "false");
  });

  it("changes styling on scroll", () => {
    renderWithRouter();

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("py-4");
    expect(header).not.toHaveClass("backdrop-blur-sm");

    // Simulate scroll
    act(() => {
        window.scrollY = 100;
        fireEvent.scroll(window);
    });

    expect(header).toHaveClass("backdrop-blur-sm");
    expect(header).toHaveClass("bg-background/95");
    expect(header).not.toHaveClass("py-4");
  });

  it("uses absolute paths when not on the home page", () => {
    renderWithRouter("/experience");

    const aboutLinks = screen.getAllByRole("link", { name: /About/i });
    expect(aboutLinks[0]).toHaveAttribute("href", "/#about");
  });

  it("uses hash links when on the home page", () => {
    renderWithRouter("/");

    const aboutLinks = screen.getAllByRole("link", { name: /About/i });
    expect(aboutLinks[0]).toHaveAttribute("href", "/#about");
  });
});
