import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { LanguageProvider } from '../../context/LanguageContext'
import { HelmetProvider } from 'react-helmet-async'
import ServicePage from './ServicePage'
import { useScrollTo } from '../../hooks/useScrollTo'

// Mock react-router-dom to track navigate calls
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

// Mock the hook separately to mock goToSection behavior directly
vi.mock('../../hooks/useScrollTo', () => ({
  useScrollTo: vi.fn(),
}))

describe('ServicePage', () => {
  it('renders "Service not found." when service does not exist', () => {
    // Reset mock
    const mockNavigate = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)

    const mockGoToSection = vi.fn()
    vi.mocked(useScrollTo).mockReturnValue(mockGoToSection)

    render(
      <MemoryRouter initialEntries={['/services/non-existent-service']}>
        <HelmetProvider>
<LanguageProvider>
          <Routes>
            <Route path="/services/:slug" element={<ServicePage />} />
          </Routes>
        </LanguageProvider>
</HelmetProvider>
      </MemoryRouter>
    )

    // Check content
    expect(screen.getByText('Service not found.')).toBeInTheDocument()
    const backButton = screen.getByRole('button', { name: '← Back to Services' })
    expect(backButton).toBeInTheDocument()

    // Test back button behavior
    fireEvent.click(backButton)
    expect(mockGoToSection).toHaveBeenCalledWith('services')
  })

  it('renders the service correctly when a valid slug is provided', () => {
    // Reset mock
    const mockNavigate = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)

    const mockGoToSection = vi.fn()
    vi.mocked(useScrollTo).mockReturnValue(mockGoToSection)

    render(
      <MemoryRouter initialEntries={['/services/mentorship']}>
        <HelmetProvider>
<LanguageProvider>
          <Routes>
            <Route path="/services/:slug" element={<ServicePage />} />
          </Routes>
        </LanguageProvider>
</HelmetProvider>
      </MemoryRouter>
    )

    // Check content
    expect(screen.getByText('Mentorship')).toBeInTheDocument()
    expect(screen.getByText('Navigate your career with a practitioner who has been there.')).toBeInTheDocument()
    expect(screen.getByText(/Whether you're an engineer moving into a TPM role/)).toBeInTheDocument()

    // Check navigation buttons are present
    const backButton = screen.getByRole('button', { name: '← Back to Services' })
    expect(backButton).toBeInTheDocument()

    // Test back button behavior
    fireEvent.click(backButton)
    expect(mockGoToSection).toHaveBeenCalledWith('services')

    const contactButton = screen.getByRole('button', { name: 'Contact Now' })
    expect(contactButton).toBeInTheDocument()

    // Test contact button behavior
    fireEvent.click(contactButton)
    expect(mockGoToSection).toHaveBeenCalledWith('contact')
  })
})
