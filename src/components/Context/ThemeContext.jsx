import { createContext, React, useReducer, useState } from "react";

export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}{" "}
    </ThemeContext.Provider>
  );
}
