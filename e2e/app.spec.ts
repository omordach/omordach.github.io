import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test('displays hero headline', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Senior Technical Program Manager')).toBeVisible()
  })

  test('language switcher changes content to Ukrainian', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: /^uk$/i }).first().click()
    await expect(page.getByText('Старший Технічний Програм-Менеджер')).toBeVisible()
  })

  test('service card navigates to detail page', async ({ page }) => {
    await page.goto('/')
    await page.getByText('Mentorship').first().click()
    await page.getByText('Learn More').first().click()
    await expect(page).toHaveURL(/#\/services\/mentorship/)
    await expect(page.getByText('Navigate your career with a practitioner who has been there.')).toBeVisible()
  })

  test('contact form is present', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByPlaceholder('Your name')).toBeVisible()
    await expect(page.getByPlaceholder('you@company.com')).toBeVisible()
  })

  test('WhatsApp link has correct href', async ({ page }) => {
    await page.goto('/')
    const link = page.getByRole('link', { name: /whatsapp/i }).first()
    await expect(link).toHaveAttribute('href', 'https://wa.me/48727452024')
  })
})

test.describe('Service detail pages', () => {
  const slugs = [
    'mentorship', 'scrum-master', 'product-owner',
    'project-management', 'technical-skills', 'consultation', 'interview-prep',
  ]

  for (const slug of slugs) {
    test(`renders ${slug} detail page`, async ({ page }) => {
      await page.goto(`/#/services/${slug}`)
      await expect(page.getByText(/Back to Services/i)).toBeVisible()
      await expect(page.getByText(/What's Included/i)).toBeVisible()
    })
  }
})
