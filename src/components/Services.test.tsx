import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { LanguageProvider } from '../context/LanguageContext'
import Services from './Services'
import { en } from '../i18n/en'

// Mock react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe('Services Component Navigation', () => {
  const navigateMock = vi.fn()

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(navigateMock)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('navigates to the correct service page on click for all services', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          <Services />
        </LanguageProvider>
      </MemoryRouter>
    )

    en.services.items.forEach((service) => {
      const serviceButton = screen.getByText(service.title).closest('button')
      expect(serviceButton).not.toBeNull()

      fireEvent.click(serviceButton!)
      expect(navigateMock).toHaveBeenCalledWith(`/services/${service.slug}`)
    })
  })
})
