import { test, expect } from '@playwright/test';

test('homepage has correct title and visible main sections', async ({ page }) => {
  // Navigate to index
  await page.goto('/');

  // Verify page title
  await expect(page).toHaveTitle(/Oleh Mordach/);

  // Check that Hero section rendered
  const heading = page.locator('h1', { hasText: 'Oleh Mordach' });
  await expect(heading).toBeVisible();

  // Check the presence of a few sections by their headings
  await expect(page.locator('h2', { hasText: 'Professional Summary' })).toBeVisible();
  await expect(page.locator('h2', { hasText: 'Professional History' })).toBeVisible();

  // Click the 'Professional Summary' button and verify it navigates/scrolls to About section
  const aboutButton = page.locator('a', { hasText: 'Professional Summary' });
  await aboutButton.click();
  await expect(page.url()).toContain('#about');
});
