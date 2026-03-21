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

  // Scroll to About section
  const aboutSection = page.locator('#about');
  await aboutSection.scrollIntoViewIfNeeded();

  // Verify About section is visible
  await expect(aboutSection).toBeVisible();
});
