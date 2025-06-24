import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Web } from "./screens/Web";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Web />
  </StrictMode>,
);
