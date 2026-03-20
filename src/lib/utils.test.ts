import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("should merge standard classes", () => {
    expect(cn("bg-red-500", "text-white")).toBe("bg-red-500 text-white");
  });

  it("should handle conditional classes", () => {
    expect(cn("bg-red-500", { "text-white": true, "text-black": false })).toBe("bg-red-500 text-white");
  });

  it("should override conflicting tailwind classes", () => {
    expect(cn("p-4 px-2", "p-8")).toBe("p-8");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("should handle array inputs", () => {
    expect(cn(["bg-red-500", "text-white"])).toBe("bg-red-500 text-white");
  });

  it("should handle falsy values", () => {
    expect(cn("bg-red-500", null, undefined, false, 0, "", "text-white")).toBe("bg-red-500 text-white");
  });

  it("should handle complex nested inputs", () => {
    expect(
      cn(
        "bg-red-500",
        ["text-white", { "opacity-50": true }],
        null,
        "p-4"
      )
    ).toBe("bg-red-500 text-white opacity-50 p-4");
  });
});
