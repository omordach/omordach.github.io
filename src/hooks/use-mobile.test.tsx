import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useIsMobile } from "./use-mobile";

const MOBILE_BREAKPOINT = 768;

describe("useIsMobile", () => {
  let originalInnerWidth: number;
  let matchMediaMock: {
    matches: boolean;
    addEventListener: ReturnType<typeof vi.fn>;
    removeEventListener: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    originalInnerWidth = window.innerWidth;

    matchMediaMock = {
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        ...matchMediaMock,
        media: query,
      })),
    });
  });

  afterEach(() => {
    window.innerWidth = originalInnerWidth;
    vi.restoreAllMocks();
  });

  const setInnerWidth = (width: number) => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    });
  };

  it("should return false if window is wider than breakpoint", () => {
    setInnerWidth(800);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it("should return true if window is narrower than breakpoint", () => {
    setInnerWidth(500);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it("should add and remove event listener", () => {
    setInnerWidth(800);
    const { unmount } = renderHook(() => useIsMobile());

    expect(window.matchMedia).toHaveBeenCalledWith(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    expect(matchMediaMock.addEventListener).toHaveBeenCalledWith("change", expect.any(Function));

    unmount();

    expect(matchMediaMock.removeEventListener).toHaveBeenCalledWith("change", expect.any(Function));
  });

  it("should update when resize event is triggered", () => {
    setInnerWidth(800);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);

    // Simulate window resize
    act(() => {
      setInnerWidth(500);
      // Trigger the registered change event listener
      const onChange = matchMediaMock.addEventListener.mock.calls[0][1];
      onChange();
    });

    expect(result.current).toBe(true);
  });
});
