/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useToast, toast, reducer } from "./use-toast";

describe("useToast", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // clear memory state
    const { result } = renderHook(() => useToast());
    act(() => {
      result.current.dismiss();
    });
    act(() => {
      vi.runAllTimers();
    });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("should have an initial empty state", () => {
    const { result } = renderHook(() => useToast());
    expect(result.current.toasts).toEqual([]);
  });

  it("should add a new toast", () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({
        title: "Test Toast",
        description: "This is a test",
      });
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe("Test Toast");
    expect(result.current.toasts[0].description).toBe("This is a test");
    expect(result.current.toasts[0].open).toBe(true);
  });

  it("should update an existing toast", () => {
    const { result } = renderHook(() => useToast());

    let toastId = "";
    let updateFn: any;

    act(() => {
      const toastData = toast({
        title: "Initial Title",
      });
      toastId = toastData.id;
      updateFn = toastData.update;
    });

    expect(result.current.toasts[0].title).toBe("Initial Title");

    act(() => {
      updateFn({
        id: toastId,
        title: "Updated Title",
        description: "Updated Description",
      });
    });

    expect(result.current.toasts[0].title).toBe("Updated Title");
    expect(result.current.toasts[0].description).toBe("Updated Description");
  });

  it("should dismiss a toast", () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({
        title: "To be dismissed",
      });
    });

    expect(result.current.toasts[0].open).toBe(true);

    // Call dismiss from hook rather than exported fn to avoid double state updates
    act(() => {
      result.current.dismiss(result.current.toasts[0].id);
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it("should dismiss all toasts if no id provided", () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({ title: "Toast 1" });
    });

    expect(result.current.toasts[0].open).toBe(true);

    act(() => {
      result.current.dismiss();
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it("should enforce the TOAST_LIMIT", () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({ title: "Toast 1" });
    });
    act(() => {
      toast({ title: "Toast 2" });
    });

    // Since TOAST_LIMIT is 1, only the latest toast should be present
    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe("Toast 2");
  });

  it("should synchronize state across multiple instances", () => {
    const { result: result1 } = renderHook(() => useToast());
    const { result: result2 } = renderHook(() => useToast());

    act(() => {
      toast({ title: "Sync Toast" });
    });

    expect(result1.current.toasts[0].title).toBe("Sync Toast");
    expect(result2.current.toasts[0].title).toBe("Sync Toast");
    expect(result1.current.toasts).toEqual(result2.current.toasts);
  });

  it("should remove a toast after TOAST_REMOVE_DELAY", () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({ title: "Temporary Toast" });
    });

    expect(result.current.toasts).toHaveLength(1);

    act(() => {
      result.current.dismiss();
    });

    // Toast is dismissed but not yet removed
    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].open).toBe(false);

    // Fast-forward time by TOAST_REMOVE_DELAY (1000000ms)
    act(() => {
      vi.advanceTimersByTime(1000000);
    });

    // Toast should be removed from the state
    expect(result.current.toasts).toHaveLength(0);
  });

  it("reducer coverage: ADD_TOAST, UPDATE_TOAST, DISMISS_TOAST, REMOVE_TOAST", () => {
    let state: any = { toasts: [] };
    const testToast = { id: "1", title: "Test", action: undefined };

    // ADD_TOAST
    state = reducer(state, { type: "ADD_TOAST", toast: testToast } as any);
    expect(state.toasts).toHaveLength(1);

    // UPDATE_TOAST
    state = reducer(state, { type: "UPDATE_TOAST", toast: { id: "1", title: "Updated" } } as any);
    expect(state.toasts[0].title).toBe("Updated");

    // DISMISS_TOAST single
    state = reducer(state, { type: "DISMISS_TOAST", toastId: "1" } as any);
    expect(state.toasts[0].open).toBe(false);

    // DISMISS_TOAST all
    state = reducer(state, { type: "DISMISS_TOAST" } as any);
    expect(state.toasts[0].open).toBe(false);

    // REMOVE_TOAST single
    state = reducer(state, { type: "REMOVE_TOAST", toastId: "1" } as any);
    expect(state.toasts).toHaveLength(0);

    // REMOVE_TOAST all
    state = reducer(state, { type: "ADD_TOAST", toast: testToast } as any);
    state = reducer(state, { type: "REMOVE_TOAST" } as any);
    expect(state.toasts).toHaveLength(0);
  });
});
