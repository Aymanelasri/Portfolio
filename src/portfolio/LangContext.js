import { createContext, useContext, useState } from 'react';

export const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  const toggle = () => setLang(l => l === 'en' ? 'fr' : 'en');
  const t = (en, fr) => lang === 'en' ? en : fr;
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
