import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { LanguageProvider } from '../context/LanguageContext'
import Hero from './Hero'

// Mock react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe('Hero interaction and scroll to section behavior', () => {
  const scrollIntoViewMock = vi.fn()

  beforeEach(() => {
    // Mock scrollIntoView since it's not implemented in jsdom
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock

    // Add dummy elements for the Hero component to find
    document.body.innerHTML = '<div id="services"></div><div id="contact"></div>'

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
    document.body.innerHTML = ''
    scrollIntoViewMock.mockClear()
  })

  it('scrolls to "services" when Explore Services CTA is clicked from home page', () => {
    const navigateMock = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(navigateMock)

    render(
      <MemoryRouter initialEntries={['/']}>
        <LanguageProvider>
          <Hero />
        </LanguageProvider>
      </MemoryRouter>
    )

    const servicesButton = screen.getByText('Explore Services')
    fireEvent.click(servicesButton)

    // Should not call navigate since we are already on '/'
    expect(navigateMock).not.toHaveBeenCalled()

    // Should call scrollIntoView immediately
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('scrolls to "contact" when Get in Touch CTA is clicked from home page', () => {
    const navigateMock = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(navigateMock)

    render(
      <MemoryRouter initialEntries={['/']}>
        <LanguageProvider>
          <Hero />
        </LanguageProvider>
      </MemoryRouter>
    )

    const contactButton = screen.getByText('Get in Touch')
    fireEvent.click(contactButton)

    // Should not call navigate since we are already on '/'
    expect(navigateMock).not.toHaveBeenCalled()

    // Should call scrollIntoView immediately
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('navigates to home and scrolls after delay when not on home page for services', () => {
    const navigateMock = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(navigateMock)

    render(
      <MemoryRouter initialEntries={['/other-page']}>
        <LanguageProvider>
          <Hero />
        </LanguageProvider>
      </MemoryRouter>
    )

    const servicesButton = screen.getByText('Explore Services')
    fireEvent.click(servicesButton)

    // Should navigate to home
    expect(navigateMock).toHaveBeenCalledWith('/')

    // Should NOT call scrollIntoView immediately
    expect(scrollIntoViewMock).not.toHaveBeenCalled()

    // Fast-forward timers by 80ms
    vi.advanceTimersByTime(80)

    // Now it should be called
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('navigates to home and scrolls after delay when not on home page for contact', () => {
    const navigateMock = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(navigateMock)

    render(
      <MemoryRouter initialEntries={['/other-page']}>
        <LanguageProvider>
          <Hero />
        </LanguageProvider>
      </MemoryRouter>
    )

    const contactButton = screen.getByText('Get in Touch')
    fireEvent.click(contactButton)

    // Should navigate to home
    expect(navigateMock).toHaveBeenCalledWith('/')

    // Should NOT call scrollIntoView immediately
    expect(scrollIntoViewMock).not.toHaveBeenCalled()

    // Fast-forward timers by 80ms
    vi.advanceTimersByTime(80)

    // Now it should be called
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })
  })
})
