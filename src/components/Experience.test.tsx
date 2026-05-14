import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Experience from './Experience'
import { LanguageProvider } from '../context/LanguageContext'
import { en } from '../i18n/en'

describe('Experience component', () => {
  it('renders title and subtitle correctly', () => {
    render(
      <LanguageProvider>
        <Experience />
      </LanguageProvider>
    )

    expect(screen.getByText(en.experience.title)).toBeInTheDocument()
    expect(screen.getByText(en.experience.subtitle)).toBeInTheDocument()
  })

  it('renders all experience roles', () => {
    render(
      <LanguageProvider>
        <Experience />
      </LanguageProvider>
    )

    en.experience.roles.forEach((role) => {
      expect(screen.getByText(role.title)).toBeInTheDocument()
      const companyElements = screen.getAllByText(role.company)
      expect(companyElements.length).toBeGreaterThan(0)
      expect(companyElements[0]).toBeInTheDocument()

      expect(screen.getByText(new RegExp(`${role.period}.*${role.periodEnd}`))).toBeInTheDocument()

      const locationElements = screen.getAllByText(role.location)
      expect(locationElements.length).toBeGreaterThan(0)
      expect(locationElements[0]).toBeInTheDocument()

      if (role.companyNote) {
        expect(screen.getByText(role.companyNote)).toBeInTheDocument()
      }

      role.bullets.forEach((bullet) => {
        const bulletElements = screen.getAllByText(bullet)
        expect(bulletElements.length).toBeGreaterThan(0)
        expect(bulletElements[0]).toBeInTheDocument()
      })
    })
  })

  it('renders certifications sidebar', () => {
    render(
      <LanguageProvider>
        <Experience />
      </LanguageProvider>
    )

    expect(screen.getByText(en.experience.certifications.title)).toBeInTheDocument()

    en.experience.certifications.items.forEach((cert) => {
      expect(screen.getByText(cert)).toBeInTheDocument()
    })
  })
})
