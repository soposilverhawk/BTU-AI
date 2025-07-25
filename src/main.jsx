import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DesignProvider } from "./context/DesignProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/BTU-AI/">
      <DesignProvider>
        <App />
      </DesignProvider>
    </BrowserRouter>
  </StrictMode>
);
