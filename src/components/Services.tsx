import {
  Users, RefreshCw, LayoutList, FolderKanban, Terminal, MessageSquare, BriefcaseIcon,
  ArrowRight, type LucideIcon,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  RefreshCw,
  LayoutList,
  FolderKanban,
  Terminal,
  MessageSquare,
  BriefcaseBusiness: BriefcaseIcon,
}

export default function Services() {
  const { t } = useLang()
  const navigate = useNavigate()

  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            {t.services.title}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">{t.services.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {t.services.items.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? MessageSquare
            return (
              <button
                key={service.slug}
                onClick={() => navigate(`/services/${service.slug}`)}
                className="group text-left bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-400 hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon size={18} className="text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed flex-1">{service.description}</p>
                <div className="flex items-center gap-1 mt-4 text-xs font-semibold text-blue-600 group-hover:gap-2 transition-all">
                  {t.services.cta} <ArrowRight size={13} />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
