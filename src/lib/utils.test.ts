import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn()", () => {
  it("returns an empty string when called with no arguments", () => {
    expect(cn()).toBe("");
  });

  it("joins multiple class strings", () => {
    expect(cn("foo", "bar", "baz")).toBe("foo bar baz");
  });

  it("filters out falsy values", () => {
    const condition = false;
    expect(cn("foo", condition && "bar", undefined, null as never, "baz")).toBe("foo baz");
  });

  it("resolves conflicting Tailwind classes (last wins)", () => {
    // tailwind-merge should resolve p-2 vs p-4 → keeps p-4
    expect(cn("p-2", "p-4")).toBe("p-4");
  });

  it("handles conditional classes via objects", () => {
    expect(cn({ "font-bold": true, "text-red-500": false })).toBe("font-bold");
  });

  it("merges arbitrary and conditional classes together", () => {
    const active = true;
    expect(cn("base-class", active && "active", "px-2 py-1", "px-4")).toBe(
      "base-class active py-1 px-4",
    );
  });
});
