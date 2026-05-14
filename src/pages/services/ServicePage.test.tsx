import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { LanguageProvider } from '../../context/LanguageContext'
import ServicePage from './ServicePage'

// Mock react-router-dom to track navigate calls
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe('ServicePage', () => {
  it('renders "Service not found." when service does not exist', () => {
    // Reset mock
    const mockNavigate = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)

    render(
      <MemoryRouter initialEntries={['/services/non-existent-service']}>
        <LanguageProvider>
          <Routes>
            <Route path="/services/:slug" element={<ServicePage />} />
          </Routes>
        </LanguageProvider>
      </MemoryRouter>
    )

    // Check content
    expect(screen.getByText('Service not found.')).toBeInTheDocument()
    const backButton = screen.getByRole('button', { name: '← Back to Services' })
    expect(backButton).toBeInTheDocument()

    // Test back button behavior
    fireEvent.click(backButton)
    expect(mockNavigate).toHaveBeenCalledWith('/')

    // We can't easily mock/test the setTimeout scrollIntoView without mocking DOM APIs,
    // but we can ensure navigate is called.
  })
})
