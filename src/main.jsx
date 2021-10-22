import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import { LanguageProvider } from "./components/Context/LanguageContext.jsx";
import { ThemeProvider } from "./components/Context/ThemeContext";
import { FormProvider } from "./components/Context/FormContext";
import { TodoProvider } from "./components/Context/TodoReducers";
ReactDOM.render(
  <FormProvider>
    <TodoProvider>
      <React.StrictMode>
        <ThemeProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </ThemeProvider>
      </React.StrictMode>
    </TodoProvider>
  </FormProvider>,

  document.getElementById("root")
);
