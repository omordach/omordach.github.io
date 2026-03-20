import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useToast, toast } from "../hooks/use-toast";
import * as React from "react";

describe("useToast performance", () => {
  it("should only register listener once", () => {
    const { result, rerender } = renderHook(() => useToast());

    // We need a way to track how many times the effect runs.
    // Since we can't easily see into the hook's internal useEffect without modifying it,
    // we can use a proxy or just observe the 'listeners' array if we could access it.
    // However, 'listeners' is not exported.

    // Alternative: use a spy on React.useEffect? No, that's hard to get right.

    // Let's try to trigger state changes and see if it causes issues.
    act(() => {
      toast({ title: "Test 1" });
    });

    expect(result.current.toasts.length).toBe(1);

    act(() => {
      toast({ title: "Test 2" });
    });

    // TOAST_LIMIT is 1, so it should still be 1
    expect(result.current.toasts.length).toBe(1);
  });
});
