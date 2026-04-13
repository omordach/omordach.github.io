import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import LiveStats from './LiveStats';

describe('LiveStats', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;

    // Default env variables
    vi.stubEnv('VITE_TINYBIRD_PIPE_URL', 'https://api.example.com/pipe');
    vi.stubEnv('VITE_TINYBIRD_TOKEN', 'test-token');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it('renders stats when fetch is successful', async () => {
    const mockData = {
      data: [{ views_today: 100, unique_sessions: 50 }]
    };

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    }));

    render(<LiveStats />);

    await waitFor(() => {
      expect(screen.getByText('100')).toBeInTheDocument();
      expect(screen.getByText('50')).toBeInTheDocument();
    });

    expect(screen.getByText(/views today/i)).toBeInTheDocument();
    expect(screen.getByText(/visitors this month/i)).toBeInTheDocument();
  });

  it('renders nothing when fetch fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Fetch failed')));

    const { container } = render(<LiveStats />);

    // Allow for microtasks to complete
    await new Promise(resolve => setTimeout(resolve, 10));

    expect(container.firstChild).toBeNull();
  });

  it('renders nothing when response is not ok', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
    }));

    const { container } = render(<LiveStats />);

    await new Promise(resolve => setTimeout(resolve, 10));

    expect(container.firstChild).toBeNull();
  });

  it('renders nothing when env variables are missing', async () => {
    vi.stubEnv('VITE_TINYBIRD_PIPE_URL', '');
    vi.stubEnv('VITE_TINYBIRD_TOKEN', '');

    const { container } = render(<LiveStats />);

    await new Promise(resolve => setTimeout(resolve, 10));

    expect(container.firstChild).toBeNull();
  });
});
