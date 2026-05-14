import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { LanguageProvider, useLang } from '../context/LanguageContext'

function TestConsumer() {
  const { lang, setLang, t } = useLang()
  return (
    <div>
      <span data-testid="current-lang">{lang}</span>
      <span data-testid="translated-text">{t.nav.brand}</span>
      <button onClick={() => setLang('uk')}>Set UK</button>
      <button onClick={() => setLang('en')}>Set EN</button>
    </div>
  )
}

describe('LanguageContext', () => {
  it('provides default english language', () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    )

    expect(screen.getByTestId('current-lang')).toHaveTextContent('en')
    expect(screen.getByTestId('translated-text')).toHaveTextContent('Oleh Mordach, PMP')
  })

  it('allows changing language to ukrainian', () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    )

    fireEvent.click(screen.getByText('Set UK'))

    expect(screen.getByTestId('current-lang')).toHaveTextContent('uk')
    expect(screen.getByTestId('translated-text')).toHaveTextContent('Олег Мордач, PMP')
  })

  it('allows changing language back to english', () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    )

    fireEvent.click(screen.getByText('Set UK'))
    fireEvent.click(screen.getByText('Set EN'))

    expect(screen.getByTestId('current-lang')).toHaveTextContent('en')
    expect(screen.getByTestId('translated-text')).toHaveTextContent('Oleh Mordach, PMP')
  })

  it('throws an error if useLang is used outside of LanguageProvider', () => {
    // Suppress console.error for this test as React will log the error boundary failure
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => render(<TestConsumer />)).toThrow('useLang must be used inside LanguageProvider')

    consoleError.mockRestore()
  })
})
