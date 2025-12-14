'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import en from './en';
import ar from './ar';

type Lang = 'en' | 'ar';

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isRTL: boolean;
  t: typeof en;
}

const LangContext = createContext<LangContextType | null>(null);

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const value = {
    lang,
    setLang,
    isRTL: lang === 'ar',
    t: lang === 'ar' ? ar : en,
  };

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error('useLang must be used inside LangProvider');
  }

  return context;
};

