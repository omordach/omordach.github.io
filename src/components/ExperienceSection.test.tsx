import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ExperienceSection from "./ExperienceSection";

// Mock framer-motion to avoid animation-related issues and IntersectionObserver requirements in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, className, id, ...props }: any) => {
      // Filter out framer-motion specific props to avoid React warnings on DOM elements
      const validProps = { className, id };
      return <div {...validProps}>{children}</div>;
    },
  },
}));

describe("ExperienceSection", () => {
  it("renders section headers correctly", () => {
    render(<ExperienceSection />);

    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Career Highlights")).toBeInTheDocument();
  });

  it("renders experience items correctly", () => {
    render(<ExperienceSection />);

    // Roles
    expect(screen.getByText("Senior Project Manager / Product Delivery Lead")).toBeInTheDocument();
    expect(screen.getByText("Technical Project Manager")).toBeInTheDocument();
    expect(screen.getByText("Quality Assurance Automation Engineer")).toBeInTheDocument();
    expect(screen.getByText("Quality Assurance Engineer")).toBeInTheDocument();

    // Companies - Note: the company names and locations are combined in the component: "{exp.company} • {exp.location}"
    expect(screen.getByText(/Get-Code/)).toBeInTheDocument();
    // Use getAllByText for GetCode because it appears multiple times
    expect(screen.getAllByText(/GetCode/).length).toBeGreaterThan(0);
  });

  it("renders description and highlights", () => {
    render(<ExperienceSection />);

    expect(screen.getByText(/Serves as the Senior Project Manager/)).toBeInTheDocument();
    expect(screen.getByText(/Lead the end-to-end lifecycle and roadmap planning/)).toBeInTheDocument();
  });
});
