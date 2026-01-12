import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PokemonGrid from "./components/PokemonGrid";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./components/App";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* REACT ROUTER */}
      {/* Kommenter ut eller inn PokemonGrid eller App-komponentene for å se noe annet */}
      <PokemonGrid />
      {/* <App /> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
