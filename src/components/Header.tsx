import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import type { Language } from '../i18n'

export default function Header() {
  const { t, lang, setLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  function scrollTo(id: string) {
    setMenuOpen(false)
    if (!isHome) {
      navigate('/')
      // allow Home to render before scrolling
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { label: t.nav.experience, id: 'experience' },
    { label: t.nav.services,   id: 'services'   },
    { label: t.nav.contact,    id: 'contact'     },
  ]

  const langs: Language[] = ['en', 'uk']

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            to="/"
            className="text-slate-900 font-semibold text-base sm:text-lg tracking-tight hover:text-blue-600 transition-colors"
          >
            {t.nav.brand}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Language switcher */}
            <div className="flex items-center gap-1 border border-slate-200 rounded-md overflow-hidden ml-2">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-xs font-semibold uppercase transition-colors ${
                    lang === l
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile: lang switcher + burger */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-0.5 border border-slate-200 rounded-md overflow-hidden">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
                    lang === l
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 text-slate-600 hover:text-slate-900"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
