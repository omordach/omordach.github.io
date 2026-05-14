import { MapPin, Linkedin } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-sm mb-1">{t.nav.brand}</p>
            <p className="text-xs italic text-slate-500">"{t.footer.tagline}"</p>
            <p className="text-xs mt-2 text-slate-500">{t.footer.certifications}</p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2">
            <a
              href="https://www.linkedin.com/in/oleh-mordach/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={13} /> linkedin.com/in/oleh-mordach
            </a>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin size={12} /> {t.footer.location}
            </span>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-xs text-slate-600 text-center">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
