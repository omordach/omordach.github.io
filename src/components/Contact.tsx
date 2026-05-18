import { useCallback, useMemo, useState, type FormEvent } from 'react'
import { Send, MessageCircle, Linkedin, CheckCircle } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const { t } = useLang()
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault()
    setState('sending')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10s timeout

    try {
      // Use environment variable for Formspree ID to prevent exposing sensitive IDs in source code
      const formId = import.meta.env.VITE_FORMSPREE_ID || 'YOUR_FORM_ID';
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
        signal: controller.signal,
      })
      clearTimeout(timeoutId)
      if (res.ok) {
        setState('success')
        setForm({ name: '', email: '', service: '', message: '' })
      } else {
        setState('error')
      }
    } catch {
      clearTimeout(timeoutId)
      setState('error')
    }
  }, [form])

  const messengerButtons = useMemo(() => [
    {
      label: t.contact.whatsapp,
      href: 'https://wa.me/48727452024',
      icon: <MessageCircle size={16} />,
      className: 'bg-green-600 hover:bg-green-500 text-white',
    },
    {
      label: t.contact.signal,
      href: 'https://signal.me/#p/+48727452024',
      icon: <MessageCircle size={16} />,
      className: 'bg-blue-600 hover:bg-blue-500 text-white',
    },
    {
      label: t.contact.linkedin,
      href: 'https://www.linkedin.com/in/oleh-mordach/',
      icon: <Linkedin size={16} />,
      className: 'bg-slate-700 hover:bg-slate-600 text-white',
    },
  ], [t.contact])

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{t.contact.title}</h2>
          <p className="text-slate-500 text-sm sm:text-base">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            {state === 'success' ? (
              <div
                className="flex flex-col items-start gap-3 p-8 bg-green-50 border border-green-200 rounded-xl"
                aria-live="polite"
              >
                <CheckCircle className="text-green-600" size={28} />
                <h3 className="text-base font-semibold text-slate-900">{t.contact.successTitle}</h3>
                <p className="text-sm text-slate-600">{t.contact.successMessage}</p>
                <button
                  onClick={() => setState('idle')}
                  className="mt-2 text-xs font-semibold text-blue-600 hover:underline"
                >
                  ← Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contact.name}
                    </label>
                    <input
                      required
                      id="contact-name"
                      type="text"
                      maxLength={100}
                      aria-required="true"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contact.email}
                    </label>
                    <input
                      required
                      id="contact-email"
                      type="email"
                      maxLength={320}
                      aria-required="true"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.contact.service}
                  </label>
                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="">{t.contact.servicePlaceholder}</option>
                    {t.services.items.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.contact.message}
                  </label>
                  <textarea
                    required
                    id="contact-message"
                    maxLength={2000}
                    aria-required="true"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                {state === 'error' && (
                  <p role="alert" className="text-xs text-red-600">{t.contact.errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold text-sm rounded-lg transition-colors"
                >
                  <Send size={15} />
                  {state === 'sending' ? t.contact.sending : t.contact.send}
                </button>
              </form>
            )}
          </div>

          {/* Messenger sidebar */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              {t.contact.orContact}
            </p>
            {messengerButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-sm transition-colors ${btn.className}`}
              >
                {btn.icon}
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
