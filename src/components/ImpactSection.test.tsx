import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ImpactSection from "./ImpactSection";

// Mock recharts to avoid complex rendering and resize observer issues in JSDOM
vi.mock("recharts", async (importOriginal) => {
  const OriginalRechartsModule: Record<string, unknown> = await importOriginal();
  return {
    ...OriginalRechartsModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    AreaChart: () => <div data-testid="area-chart" />,
    BarChart: () => <div data-testid="bar-chart" />,
    LineChart: () => <div data-testid="line-chart" />,
  };
});

// Mock framer-motion to avoid animation-related issues and IntersectionObserver requirements in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, className, id, ...props }: { children?: React.ReactNode; className?: string; id?: string; [key: string]: unknown }) => {
      // Filter out framer-motion specific props to avoid React warnings on DOM elements
      const validProps = { className, id };
      return <div {...validProps}>{children}</div>;
    },
  },
}));

describe("ImpactSection", () => {
  it("renders section headers correctly", () => {
    render(<ImpactSection />);

    expect(screen.getByText("Impact & Metrics")).toBeInTheDocument();
    expect(screen.getByText("Quantifiable Results")).toBeInTheDocument();
  });

  it("renders the introduction text", () => {
    render(<ImpactSection />);
    expect(screen.getByText(/As a Project and Program Manager, I focus on delivering measurable value/)).toBeInTheDocument();
  });

  it("renders all chart cards with correct titles and descriptions", () => {
    render(<ImpactSection />);

    // Delivery Velocity
    expect(screen.getByText("Delivery Velocity")).toBeInTheDocument();
    expect(screen.getByText("Consistent increase in team output through optimized Agile workflows.")).toBeInTheDocument();

    // Resource Optimization
    expect(screen.getByText("Resource Optimization")).toBeInTheDocument();
    expect(screen.getByText("Improved resource utilization through strategic allocation.")).toBeInTheDocument();

    // Defect Reduction
    expect(screen.getByText("Defect Reduction")).toBeInTheDocument();
    expect(screen.getByText("-73%")).toBeInTheDocument();
  });

  it("renders the mocked charts", () => {
    render(<ImpactSection />);

    expect(screen.getByTestId("area-chart")).toBeInTheDocument();
    expect(screen.getByTestId("bar-chart")).toBeInTheDocument();
    expect(screen.getByTestId("line-chart")).toBeInTheDocument();
  });
});
