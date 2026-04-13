import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import LiveStats from "./LiveStats";

describe("LiveStats", () => {
  const mockStats = {
    data: [{
      views_today: 100,
      unique_sessions: 50,
    }]
  };

  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
    vi.stubEnv("VITE_TINYBIRD_PIPE_URL", "https://api.tinybird.co/v0/pipes/test.json");
    vi.stubEnv("VITE_TINYBIRD_TOKEN", "test-token");
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
    vi.resetModules(); // This is important to reset module-level cache between tests
  });

  it("fetches stats on mount", async () => {
    (fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockStats),
    });

    render(<LiveStats />);

    await waitFor(() => {
      expect(screen.getByText("100")).toBeInTheDocument();
      expect(screen.getByText("50")).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("uses cached stats on remount within duration", async () => {
    (fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockStats),
    });

    // First mount
    const { unmount } = render(<LiveStats />);
    await waitFor(() => expect(screen.getByText("100")).toBeInTheDocument());
    expect(fetch).toHaveBeenCalledTimes(1);
    unmount();

    // Second mount (should use cache)
    render(<LiveStats />);
    await waitFor(() => expect(screen.getByText("100")).toBeInTheDocument());

    // Should still be 1 after second mount
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("fetches again after cache expiration", async () => {
    (fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockStats),
    });

    vi.useFakeTimers();

    // First mount
    const { unmount } = render(<LiveStats />);
    await waitFor(() => expect(screen.getByText("100")).toBeInTheDocument());
    expect(fetch).toHaveBeenCalledTimes(1);
    unmount();

    // Advance time by 6 minutes (more than 5 minute cache)
    vi.advanceTimersByTime(6 * 60 * 1000);

    // Second mount
    render(<LiveStats />);
    await waitFor(() => expect(screen.getByText("100")).toBeInTheDocument());

    // Should be 2 now
    expect(fetch).toHaveBeenCalledTimes(2);

    vi.useRealTimers();
  });
});
