import { test, expect } from '@playwright/test';

test('homepage has correct title and visible main sections', async ({ page }) => {
  await page.goto('/');

  // Verify the page title (usually Vite + React or similar, let's just make sure it loads something)
  await expect(page).toHaveTitle(/Oleh Mordach/i);

  // Check that the Hero section displays the main heading
  const mainHeading = page.locator('h1', { hasText: 'Oleh Mordach' });
  await expect(mainHeading).toBeVisible();

  // Check that the Navigation is visible (first one usually in header)
  const nav = page.locator('nav').first();
  await expect(nav).toBeVisible();

  // Check the presence of a few sections by their headings
  await expect(page.locator('h2', { hasText: 'Background' })).toBeVisible();
  await expect(page.locator('h2', { hasText: 'Career Highlights' })).toBeVisible();

  // Click the 'Get in Touch' button and verify it navigates/scrolls to Contact section
  const contactButton = page.locator('a', { hasText: 'Get in Touch' });
  await contactButton.click();

  // The contact section heading should be visible in viewport eventually
  const contactHeading = page.locator('h2', { hasText: "Let's Connect" });
  await expect(contactHeading).toBeVisible();
});
