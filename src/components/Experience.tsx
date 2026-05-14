import { MapPin, Award, CheckCircle2 } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Experience() {
  const { t } = useLang()

  return (
    <section id="experience" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            {t.experience.title}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">{t.experience.subtitle}</p>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-10">
            {t.experience.roles.map((role, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-slate-200">
                {/* Timeline dot */}
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-white ring-1 ring-blue-600" />

                <div className="mb-3">
                  <h3 className="text-base font-semibold text-slate-900">{role.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1">
                    <span className="text-sm font-medium text-blue-600">{role.company}</span>
                    {role.companyNote && (
                      <span className="text-xs text-slate-400 italic">{role.companyNote}</span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 mt-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {role.location}
                    </span>
                    <span>
                      {role.period} – {role.periodEnd}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-600 leading-snug">
                      <CheckCircle2
                        size={14}
                        className="shrink-0 text-blue-400 mt-0.5"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications sidebar */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <Award size={16} className="text-blue-600" />
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                  {t.experience.certifications.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {t.experience.certifications.items.map((cert, i) => (
                  <li key={i} className="text-xs text-slate-600 leading-snug border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
