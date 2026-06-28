import { describe, it, expect } from "vitest";
import { renderErrorPage } from "./error-page";

describe("renderErrorPage", () => {
  it("returns a valid HTML string", () => {
    const html = renderErrorPage();
    expect(typeof html).toBe("string");
    expect(html).toContain("<!doctype html>");
    expect(html).toContain('<html lang="en">');
  });

  it("contains expected error messages and actions", () => {
    const html = renderErrorPage();

    // Check for main heading
    expect(html).toContain("This page didn't load");

    // Check for description text
    expect(html).toContain("Something went wrong on our end");

    // Check for action buttons
    expect(html).toContain("Try again");
    expect(html).toContain("Go home");
  });

  it("can be parsed as HTML", () => {
    const html = renderErrorPage();

    // Use DOMParser to parse the HTML string in jsdom environment
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    expect(doc.title).toBe("This page didn't load");
    expect(doc.querySelector("h1")?.textContent).toBe("This page didn't load");
    expect(doc.querySelector("button")?.textContent).toBe("Try again");
    expect(doc.querySelector("button")?.getAttribute("onclick")).toBe("location.reload()");
    expect(doc.querySelector("a")?.textContent).toBe("Go home");
    expect(doc.querySelector("a")?.getAttribute("href")).toBe("/");
  });
});
