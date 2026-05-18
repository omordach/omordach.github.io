import { useParams } from 'react-router-dom'
import { useScrollTo } from '../../hooks/useScrollTo'
import {
  MessageSquare, CheckCircle2, ChevronRight, ArrowLeft,
} from 'lucide-react'
import { ICON_MAP } from '../../constants/icons'
import { useLang } from '../../context/LanguageContext'
import SEO from '../../components/SEO'

type DetailKey =
  | 'mentorship' | 'scrumMaster' | 'productOwner' | 'projectManagement'
  | 'technicalSkills' | 'consultation' | 'interviewPrep'

const SLUG_TO_KEY: Record<string, DetailKey> = {
  'mentorship':         'mentorship',
  'scrum-master':       'scrumMaster',
  'product-owner':      'productOwner',
  'project-management': 'projectManagement',
  'technical-skills':   'technicalSkills',
  'consultation':       'consultation',
  'interview-prep':     'interviewPrep',
}

export default function ServicePage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const { t } = useLang()
  const goToSection = useScrollTo()

  const detailKey = SLUG_TO_KEY[slug]
  const serviceItem = t.services.items.find((s) => s.slug === slug)

  if (!detailKey || !serviceItem) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-slate-500 mb-4">Service not found.</p>
        <button
          onClick={() => goToSection('services')}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          {t.serviceDetail.backToServices}
        </button>
      </div>
    )
  }

  const detail = t.serviceDetail.details[detailKey]
  const Icon = ICON_MAP[serviceItem.icon] ?? MessageSquare


  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mordach.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": serviceItem.title,
            "item": `https://mordach.com/#/services/${slug}`
          }
        ]
      },
      {
        "@type": "Service",
        "name": serviceItem.title,
        "description": detail.description,
        "provider": {
          "@id": "https://mordach.com/#organization"
        },
        "url": `https://mordach.com/#/services/${slug}`
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title={`${serviceItem.title} | Oleh Mordach, PMP`}
        description={detail.description.substring(0, 155) + '...'}
        canonical={`https://mordach.com/#/services/${slug}`}
        schema={schema}
      />

      {/* Hero band */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <button
            onClick={() => goToSection('services')}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={13} />
            {t.serviceDetail.backToServices}
          </button>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
              <Icon size={22} className="text-blue-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{serviceItem.title}</h1>
              <p className="text-blue-300 text-sm sm:text-base font-medium italic">
                {detail.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <p className="text-slate-600 text-base leading-relaxed">{detail.description}</p>

            {/* What's Included */}
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center">
                  <ChevronRight size={13} className="text-blue-600" />
                </span>
                {t.serviceDetail.whatYouGet}
              </h2>
              <ul className="space-y-2.5">
                {detail.whatYouGet.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 size={15} className="shrink-0 text-blue-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who is it for */}
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center">
                  <ChevronRight size={13} className="text-blue-600" />
                </span>
                {t.serviceDetail.whoIsItFor}
              </h2>
              <ul className="space-y-2.5">
                {detail.whoIsItFor.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                {t.serviceDetail.format}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">{detail.format}</p>
            </div>

            <div className="bg-blue-600 rounded-xl p-5 text-white">
              <h3 className="text-base font-semibold mb-2">{t.serviceDetail.contactCta}</h3>
              <p className="text-xs text-blue-100 mb-4 leading-relaxed">
                {t.serviceDetail.contactDescription}
              </p>
              <button
                onClick={() => goToSection('contact')}
                className="w-full bg-white text-blue-600 font-semibold text-sm py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {t.serviceDetail.contactButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
