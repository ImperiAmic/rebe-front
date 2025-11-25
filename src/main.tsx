import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "@fontsource-variable/roboto/index.css";
import "@fontsource/arvo/index.css";
import App from "./components/App/App.tsx";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
