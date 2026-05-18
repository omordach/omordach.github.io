import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { LanguageProvider } from '../context/LanguageContext'
import Contact from './Contact'

describe('Contact Form Error Handling', () => {
  const originalFetch = global.fetch

  beforeEach(() => {
    global.fetch = vi.fn()
  })

  afterEach(() => {
    global.fetch = originalFetch
    vi.clearAllMocks()
  })

  function renderContact() {
    return render(
      <LanguageProvider>
        <Contact />
      </LanguageProvider>
    )
  }

  async function fillAndSubmitForm() {
    const nameInput = screen.getByLabelText(/Full Name/i)
    const emailInput = screen.getByLabelText(/Email Address/i)
    const messageInput = screen.getByLabelText(/Your Message/i)
    const submitButton = screen.getByRole('button', { name: /Send Message/i })

    fireEvent.change(nameInput, { target: { value: 'Test User' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'Test message content' } })

    fireEvent.click(submitButton)
  }

  it('shows error state when fetch fails (network error)', async () => {
    // Mock network failure
    vi.mocked(global.fetch).mockRejectedValueOnce(new Error('Network error'))

    renderContact()
    await fillAndSubmitForm()

    // Should show error message
    expect(await screen.findByText(/Something went wrong/i)).toBeInTheDocument()

    // Ensure form is not reset
    expect(screen.getByLabelText(/Full Name/i)).toHaveValue('Test User')
    expect(screen.getByRole('button', { name: /Send Message/i })).not.toBeDisabled()
  })

  it('shows error state when fetch returns non-ok response', async () => {
    // Mock successful fetch but with error status code (e.g., 500)
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: false,
      status: 500,
    } as Response)

    renderContact()
    await fillAndSubmitForm()

    // Should show error message
    expect(await screen.findByText(/Something went wrong/i)).toBeInTheDocument()

    // Ensure form is not reset
    expect(screen.getByLabelText(/Full Name/i)).toHaveValue('Test User')
  })

  it('shows success state and resets form when fetch succeeds', async () => {
    // Mock successful fetch
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      status: 200,
    } as Response)

    renderContact()
    await fillAndSubmitForm()

    // Should show success message
    expect(await screen.findByText(/Message sent!/i)).toBeInTheDocument()

    // Ensure form is reset after success message is shown
    await waitFor(() => {
      // Form itself unmounts and is replaced by success message so checking form values is not applicable,
      // instead we wait for the Send another button, click it, and then check values
      const sendAnotherButton = screen.getByRole('button', { name: /Send another/i })
      fireEvent.click(sendAnotherButton)
    })

    await waitFor(() => {
        expect(screen.getByLabelText(/Full Name/i)).toHaveValue('')
    })
  })
})
