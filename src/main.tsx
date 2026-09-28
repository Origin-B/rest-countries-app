import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// context
import { BrowserRouter } from "react-router-dom";
import CountryProvider from "./context/CountryProvider.tsx";

// component
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CountryProvider>
        <App />
      </CountryProvider>
    </BrowserRouter>
  </StrictMode>,
);
