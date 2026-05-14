import { createContext, useContext, useMemo, useState } from 'react'
import { type Language, type Dict, dictionaries } from '../i18n'

interface LanguageContextValue {
  lang: Language
  t: Dict
  setLang: (l: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en')
  const t = dictionaries[lang]

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
