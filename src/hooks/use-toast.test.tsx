/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useToast, toast, reducer } from "./use-toast";
import type { ToastProps } from "@/components/ui/toast";

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: any;
};

describe("useToast hook", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Dismiss all toasts to clear the memory state
    const { result } = renderHook(() => useToast());
    act(() => {
      result.current.dismiss();
    });

    // Fast-forward timers to ensure toasts are actually removed from the state
    act(() => {
      vi.advanceTimersByTime(1000000); // TOAST_REMOVE_DELAY is 1000000
    });
  });

  afterEach(() => {
    act(() => {
      vi.runOnlyPendingTimers();
    });
    vi.useRealTimers();
  });

  it("should start with an empty toasts array", () => {
    const { result } = renderHook(() => useToast());
    expect(result.current.toasts).toEqual([]);
  });

  it("should add a toast when toast() is called", () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({ title: "Test Toast", description: "This is a test" });
    });

    expect(result.current.toasts.length).toBe(1);
    expect(result.current.toasts[0].title).toBe("Test Toast");
    expect(result.current.toasts[0].description).toBe("This is a test");
    expect(result.current.toasts[0].open).toBe(true);
    expect(result.current.toasts[0].id).toBeDefined();
  });

  it("should limit the number of toasts to TOAST_LIMIT (1)", () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({ title: "First Toast" });
    });

    act(() => {
      toast({ title: "Second Toast" });
    });

    // According to the code, TOAST_LIMIT is 1
    expect(result.current.toasts.length).toBe(1);
    expect(result.current.toasts[0].title).toBe("Second Toast");
  });

  it("should update a toast when update() is called via returned object", () => {
    const { result } = renderHook(() => useToast());
    let toastRef: any;

    act(() => {
      toastRef = toast({ title: "Initial Title" });
    });

    expect(result.current.toasts[0].title).toBe("Initial Title");

    act(() => {
      toastRef.update({ id: toastRef.id, title: "Updated Title" });
    });

    expect(result.current.toasts[0].title).toBe("Updated Title");
  });

  it("should dismiss a toast when dismiss() is called via returned object", () => {
    const { result } = renderHook(() => useToast());
    let toastRef: any;

    act(() => {
      toastRef = toast({ title: "To Be Dismissed" });
    });

    expect(result.current.toasts[0].open).toBe(true);

    act(() => {
      toastRef.dismiss();
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it("should completely remove a toast after TOAST_REMOVE_DELAY", () => {
    const { result } = renderHook(() => useToast());
    let toastRef: any;

    act(() => {
      toastRef = toast({ title: "To Be Removed" });
    });

    expect(result.current.toasts.length).toBe(1);

    act(() => {
      toastRef.dismiss();
    });

    expect(result.current.toasts[0].open).toBe(false);
    expect(result.current.toasts.length).toBe(1); // Still there, just closed

    act(() => {
      vi.advanceTimersByTime(1000000); // Fast-forward TOAST_REMOVE_DELAY
    });

    expect(result.current.toasts.length).toBe(0); // Should be removed now
  });

  it("should handle onOpenChange callback", () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({ title: "Open Change Test" });
    });

    expect(result.current.toasts[0].open).toBe(true);

    // Simulate radix UI dialog calling onOpenChange(false) when closed
    act(() => {
      result.current.toasts[0].onOpenChange?.(false);
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it("should safely handle onOpenChange callback with true", () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({ title: "Open Change Test True" });
    });

    expect(result.current.toasts[0].open).toBe(true);

    // Simulate radix UI dialog calling onOpenChange(true)
    act(() => {
      result.current.toasts[0].onOpenChange?.(true);
    });

    // Should still be open, dismiss wasn't called
    expect(result.current.toasts[0].open).toBe(true);
  });

  it("should dismiss a toast using the dismiss function returned by the hook", () => {
    const { result } = renderHook(() => useToast());
    let toastId: string;

    act(() => {
      const toastRef = toast({ title: "To Be Hook Dismissed" });
      toastId = toastRef.id;
    });

    expect(result.current.toasts[0].open).toBe(true);

    act(() => {
      result.current.dismiss(toastId);
    });

    expect(result.current.toasts[0].open).toBe(false);
  });
});

describe("toast reducer", () => {
  const dummyToast: ToasterToast = { id: "1", title: "Test", open: true };

  it("should handle ADD_TOAST", () => {
    const initialState = { toasts: [] };
    const state = reducer(initialState, { type: "ADD_TOAST", toast: dummyToast });

    expect(state.toasts.length).toBe(1);
    expect(state.toasts[0]).toEqual(dummyToast);
  });

  it("should enforce TOAST_LIMIT on ADD_TOAST", () => {
    // Current limit is 1, so adding a second toast should replace the first
    const initialState = { toasts: [{ id: "old", title: "Old", open: true }] };
    const newToast = { id: "new", title: "New", open: true };
    const state = reducer(initialState, { type: "ADD_TOAST", toast: newToast });

    expect(state.toasts.length).toBe(1);
    expect(state.toasts[0]).toEqual(newToast);
  });

  it("should handle UPDATE_TOAST", () => {
    const initialState = { toasts: [dummyToast] };
    const state = reducer(initialState, {
      type: "UPDATE_TOAST",
      toast: { id: "1", title: "Updated" }
    });

    expect(state.toasts[0].title).toBe("Updated");
    expect(state.toasts[0].open).toBe(true);
  });

  it("should handle UPDATE_TOAST when toast not found", () => {
    const initialState = { toasts: [dummyToast] };
    const state = reducer(initialState, {
      type: "UPDATE_TOAST",
      toast: { id: "999", title: "Updated" }
    });

    expect(state.toasts[0].title).toBe("Test"); // Unchanged
  });

  it("should handle DISMISS_TOAST for a specific toast", () => {
    const initialState = {
      toasts: [
        { id: "1", title: "One", open: true },
        { id: "2", title: "Two", open: true }
      ]
    };

    const state = reducer(initialState, {
      type: "DISMISS_TOAST",
      toastId: "1"
    });

    expect(state.toasts[0].open).toBe(false);
    expect(state.toasts[1].open).toBe(true);
  });

  it("should handle DISMISS_TOAST for all toasts when toastId is undefined", () => {
    const initialState = {
      toasts: [
        { id: "1", title: "One", open: true },
        { id: "2", title: "Two", open: true }
      ]
    };

    const state = reducer(initialState, {
      type: "DISMISS_TOAST"
    });

    expect(state.toasts[0].open).toBe(false);
    expect(state.toasts[1].open).toBe(false);
  });

  it("should handle REMOVE_TOAST for a specific toast", () => {
    const initialState = {
      toasts: [
        { id: "1", title: "One", open: false },
        { id: "2", title: "Two", open: true }
      ]
    };

    const state = reducer(initialState, {
      type: "REMOVE_TOAST",
      toastId: "1"
    });

    expect(state.toasts.length).toBe(1);
    expect(state.toasts[0].id).toBe("2");
  });

  it("should handle REMOVE_TOAST for all toasts when toastId is undefined", () => {
    const initialState = {
      toasts: [
        { id: "1", title: "One", open: false },
        { id: "2", title: "Two", open: false }
      ]
    };

    const state = reducer(initialState, {
      type: "REMOVE_TOAST"
    });

    expect(state.toasts.length).toBe(0);
  });
});
