import { React, createContext } from "react";
import { useState } from "react";
export const FormContext = createContext();
import Registery from "../Pages/Registery";
export function FormProvider({ children }) {
  const [form, setForm] = useState(<Registery />);
  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}{" "}
    </FormContext.Provider>
  );
}
