import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import SkillsSection from "./SkillsSection";

describe("SkillsSection", () => {
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

  it("renders the main headings and label", () => {
    render(<SkillsSection />);
    const mainHeading = screen.getByRole("heading", { name: /Technical & Program Management Competencies/i });
    const label = screen.getByText(/Skills & Expertise/i);
    expect(mainHeading).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it("renders the table headers for domains and skills", () => {
    render(<SkillsSection />);
    const domainHeader = screen.getByText(/^Domain$/i);
    const skillsHeader = screen.getByText(/^Skills & Tools$/i);
    expect(domainHeader).toBeInTheDocument();
    expect(skillsHeader).toBeInTheDocument();
  });

  it("renders the skill domains and specific skills", () => {
    render(<SkillsSection />);
    const programDeliveryDomain = screen.getByText(/Program & Delivery Management/i);
    const cicdDomain = screen.getByText(/CI\/CD & Release Engineering/i);
    const agileSkills = screen.getByText(/Agile, Scrum, Kanban, OKRs, Roadmapping, Risk Management/i);

    expect(programDeliveryDomain).toBeInTheDocument();
    expect(cicdDomain).toBeInTheDocument();
    expect(agileSkills).toBeInTheDocument();
  });

  it("renders the concluding summary paragraph", () => {
    render(<SkillsSection />);
    const concludingParagraph = screen.getByText(/Oleh's technical breadth distinguishes him from traditional project managers./i);
    expect(concludingParagraph).toBeInTheDocument();
  });
});
