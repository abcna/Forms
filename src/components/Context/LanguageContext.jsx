import { createContext, React, useState } from "react";

export const LanguageContext = createContext();
import frFR from "antd/lib/locale/fr_FR";
import en_US from "antd/lib/locale/en_US";
import fa_IR from "antd/lib/locale/fa_IR";
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(fa_IR);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
