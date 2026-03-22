import { renderHook, act } from "@testing-library/react";
import { SidebarProvider, useSidebar } from "./sidebar";
import { vi, describe, it, expect, beforeEach } from "vitest";
import * as React from "react";

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe("SidebarProvider Cookie", () => {
  beforeEach(() => {
    // Clear cookies before each test
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    vi.clearAllMocks();
  });

  it("should set sidebar cookie without HttpOnly flag", () => {
    const cookieSpy = vi.spyOn(document, "cookie", "set");

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SidebarProvider defaultOpen={true}>{children}</SidebarProvider>
    );

    const { result } = renderHook(() => useSidebar(), { wrapper });

    act(() => {
      result.current.setOpen(false);
    });

    // Check if document.cookie was called
    expect(cookieSpy).toHaveBeenCalled();

    // Get the last cookie string set
    const lastCookieCall = cookieSpy.mock.calls[cookieSpy.mock.calls.length - 1][0];

    // Verify it contains expected parts but NOT HttpOnly
    expect(lastCookieCall).toContain("sidebar:state=false");
    expect(lastCookieCall).toContain("path=/");
    expect(lastCookieCall).toContain("Secure");
    expect(lastCookieCall).toContain("SameSite=Strict");
    expect(lastCookieCall).not.toContain("HttpOnly");
  });
});
