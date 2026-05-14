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
  it('renders the hero headline in English', async () => {
    renderApp()
    expect(await screen.findByText('Senior Technical Program Manager')).toBeInTheDocument()
  })

  it('switches to Ukrainian when UK is clicked', async () => {
    renderApp()
    const ukButton = (await screen.findAllByRole('button', { name: /uk/i }))[0]
    fireEvent.click(ukButton)
    expect(await screen.findByText('Старший Технічний Програм-Менеджер')).toBeInTheDocument()
  })

  it('renders all 7 service cards', async () => {
    renderApp()
    const cards = await screen.findAllByText(/Learn More/i)
    expect(cards.length).toBe(7)
  })

  it('shows achievements section with 4 cards', async () => {
    renderApp()
    expect(await screen.findByText('Key Achievements')).toBeInTheDocument()
    expect(await screen.findByText('AI-First Product Delivery')).toBeInTheDocument()
    expect(await screen.findByText('Enterprise Security & Scale')).toBeInTheDocument()
  })

  it('renders contact form fields', async () => {
    renderApp()
    expect(await screen.findByPlaceholderText('Your name')).toBeInTheDocument()
    expect(await screen.findByPlaceholderText('you@company.com')).toBeInTheDocument()
  })

  it('shows Ukrainian contact title after language switch', async () => {
    renderApp()
    const ukButton = (await screen.findAllByRole('button', { name: /uk/i }))[0]
    fireEvent.click(ukButton)
    expect(await screen.findByText("Зв'яжіться зі Мною")).toBeInTheDocument()
  })
})
