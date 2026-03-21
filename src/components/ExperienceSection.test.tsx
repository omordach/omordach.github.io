import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ExperienceSection from "./ExperienceSection";

// Mock framer-motion to avoid animation-related issues and IntersectionObserver requirements in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, className, id, ...props }: { children?: React.ReactNode; className?: string; id?: string; [key: string]: unknown }) => {
      // Filter out framer-motion specific props to avoid React warnings on DOM elements
      const validProps = { className, id };
      return <div {...validProps}>{children}</div>;
    },
    span: ({ children, className, id, ...props }: { children?: React.ReactNode; className?: string; id?: string; [key: string]: unknown }) => {
      const validProps = { className, id };
      return <span {...validProps}>{children}</span>;
    }
  },
}));

describe("ExperienceSection", () => {
  it("renders section headers correctly", () => {
    render(<ExperienceSection />);

    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Professional History")).toBeInTheDocument();
  });

  it("renders experience items correctly", () => {
    render(<ExperienceSection />);

    // Roles
    expect(screen.getByText("Delivery Lead & Senior Project Manager")).toBeInTheDocument();
    expect(screen.getByText("Technical Project Manager")).toBeInTheDocument();
    expect(screen.getByText("Quality Assurance Automation Engineer")).toBeInTheDocument();
    expect(screen.getByText("Quality Assurance Engineer")).toBeInTheDocument();

    // Companies - Note: the company names and locations are combined in the component: "{exp.company} • {exp.location}"
    expect(screen.getAllByText(/GetCode/).length).toBeGreaterThan(0);
  });

  it("renders description and highlights", () => {
    render(<ExperienceSection />);

    expect(screen.getByText(/GetCode is a Warsaw-based software company delivering/)).toBeInTheDocument();
    expect(screen.getByText(/Designed and implemented a CI\/CD release strategy using Gitea/)).toBeInTheDocument();
  });
});
