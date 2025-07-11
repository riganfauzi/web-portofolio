import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Web } from "./screens/Web";
import AOS from 'aos';

AOS.init({
  duration: 1000, 
  easing: 'ease-in-out', 
  once: true, 
  mirror: false, 
});

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Web />
  </StrictMode>,
);
