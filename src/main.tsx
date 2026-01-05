import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PokemonGrid from "./components/PokemonGrid";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* REACT ROUTER */}
      <PokemonGrid />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
