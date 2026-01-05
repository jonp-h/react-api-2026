import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PokemonGrid from "./components/PokemonGrid";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PokemonGrid />
  </StrictMode>
);
