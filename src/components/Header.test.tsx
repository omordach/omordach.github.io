import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { LanguageProvider } from '../context/LanguageContext'
import Header from './Header'

// Mock react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe('Header scroll to section behavior', () => {
  const scrollIntoViewMock = vi.fn()

  beforeEach(() => {
    // Mock scrollIntoView since it's not implemented in jsdom
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock

    // Add a dummy element for the header to find
    document.body.innerHTML = '<div id="experience"></div>'

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
    document.body.innerHTML = ''
    scrollIntoViewMock.mockClear()
  })

  it('scrolls immediately when on the home page', () => {
    const navigateMock = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(navigateMock)

    render(
      <MemoryRouter initialEntries={['/']}>
        <LanguageProvider>
          <Header />
        </LanguageProvider>
      </MemoryRouter>
    )

    const experienceButton = screen.getAllByText('Experience')[0]
    fireEvent.click(experienceButton)

    // Should not call navigate since we are already on '/'
    expect(navigateMock).not.toHaveBeenCalled()

    // Should call scrollIntoView immediately
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('navigates to home and scrolls after delay when not on home page', () => {
    const navigateMock = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(navigateMock)

    render(
      <MemoryRouter initialEntries={['/other-page']}>
        <LanguageProvider>
          <Header />
        </LanguageProvider>
      </MemoryRouter>
    )

    const experienceButton = screen.getAllByText('Experience')[0]
    fireEvent.click(experienceButton)

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
