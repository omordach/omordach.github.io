import { ArrowRight, MessageCircle } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLang()

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 opacity-90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge row */}
          <div className="flex flex-wrap gap-2 mb-6">
            {t.hero.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-600/20 text-blue-300 border border-blue-500/30"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {t.hero.headline}
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-blue-300 font-medium mb-5 italic">
            "{t.hero.tagline}"
          </p>

          {/* Summary */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            {t.hero.summary}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollTo('services')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-slate-500 hover:border-slate-300 text-slate-200 hover:text-white font-semibold rounded-lg transition-colors text-sm"
            >
              <MessageCircle size={16} />
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
