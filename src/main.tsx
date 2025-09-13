
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { useEffect } from "react";
import { initAOS } from "./aos-init";

// Initialize AOS on app load
initAOS();

createRoot(document.getElementById("root")!).render(<App />);