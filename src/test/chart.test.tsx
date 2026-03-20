import React from 'react';
import { render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { ChartContainer } from '../components/ui/chart';
import { Bar, BarChart } from 'recharts';

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

test('ChartContainer renders without crashing and escapes configuration properly', () => {
  const chartConfig = {
    malicious: {
      color: '</style><script>alert(1)</script>'
    }
  };

  const { container } = render(
    <ChartContainer config={chartConfig}>
      <BarChart data={[{ name: 'A', malicious: 400 }]}>
        <Bar dataKey="malicious" fill="var(--color-malicious)" />
      </BarChart>
    </ChartContainer>
  );

  const styleTag = container.querySelector('style');
  expect(styleTag).not.toBeNull();
  expect(styleTag?.textContent).toContain('</style><script>alert(1)</script>');
});
