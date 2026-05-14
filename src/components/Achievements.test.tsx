import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '../context/LanguageContext'
import Achievements from './Achievements'

describe('Achievements', () => {
  it('renders the achievements section and all items', () => {
    render(
      <LanguageProvider>
        <Achievements />
      </LanguageProvider>
    )

    // Check title and subtitle
    expect(screen.getByText('Key Achievements')).toBeInTheDocument()
    expect(
      screen.getByText('A measurable track record across engineering, delivery, and strategy.')
    ).toBeInTheDocument()

    // Check items from the en.ts dictionary
    expect(screen.getByText('AI-First Product Delivery')).toBeInTheDocument()
    expect(screen.getByText('Process Predictability & Optimization')).toBeInTheDocument()
    expect(screen.getByText('Enterprise Security & Scale')).toBeInTheDocument()
    expect(screen.getByText('High-Impact Engineering Foundation')).toBeInTheDocument()

    // Check metrics
    expect(screen.getByText('5+')).toBeInTheDocument()

    // 60% appears twice in the metrics
    const sixtyPercents = screen.getAllByText('60%')
    expect(sixtyPercents).toHaveLength(2)

    expect(screen.getByText('100+')).toBeInTheDocument()

    // Check metric labels
    expect(screen.getByText('releases / day')).toBeInTheDocument()
    expect(screen.getByText('downtime reduction')).toBeInTheDocument()
    expect(screen.getByText('enterprise clients')).toBeInTheDocument()
    expect(screen.getByText('testing time saved')).toBeInTheDocument()
  })
})
