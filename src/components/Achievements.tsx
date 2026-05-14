import { useLang } from '../context/LanguageContext'

export default function Achievements() {
  const { t } = useLang()

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            {t.achievements.title}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">{t.achievements.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.achievements.items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              {/* Metric */}
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-blue-600 group-hover:text-blue-500 transition-colors">
                  {item.metric}
                </span>
                <span className="block text-xs text-slate-400 font-medium uppercase tracking-wide mt-0.5">
                  {item.metricLabel}
                </span>
              </div>

              {/* Title + description */}
              <h3 className="text-sm font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
