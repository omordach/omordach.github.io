import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import { LanguageProvider } from '../context/LanguageContext'
import App from '../App'

function renderApp() {
  return render(
    <HashRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HashRouter>,
  )
}

describe('App', () => {
  it('renders the hero headline in English', () => {
    renderApp()
    expect(screen.getByText('Senior Technical Program Manager')).toBeInTheDocument()
  })

  it('switches to Ukrainian when UK is clicked', () => {
    renderApp()
    const ukButton = screen.getAllByRole('button', { name: /uk/i })[0]
    fireEvent.click(ukButton)
    expect(screen.getByText('Старший Технічний Програм-Менеджер')).toBeInTheDocument()
  })

  it('renders all 7 service cards', () => {
    renderApp()
    const cards = screen.getAllByText(/Learn More/i)
    expect(cards.length).toBe(7)
  })

  it('shows achievements section with 4 cards', () => {
    renderApp()
    expect(screen.getByText('Key Achievements')).toBeInTheDocument()
    expect(screen.getByText('AI-First Product Delivery')).toBeInTheDocument()
    expect(screen.getByText('Enterprise Security & Scale')).toBeInTheDocument()
  })

  it('renders contact form fields', () => {
    renderApp()
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@company.com')).toBeInTheDocument()
  })

  it('shows Ukrainian contact title after language switch', () => {
    renderApp()
    const ukButton = screen.getAllByRole('button', { name: /uk/i })[0]
    fireEvent.click(ukButton)
    expect(screen.getByText("Зв'яжіться зі Мною")).toBeInTheDocument()
  })
})
