import { useState } from "react";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import { debounce } from "lodash";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error } = usePokemonSearch(searchTerm);

  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, 500);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon..."
        className="border-2 border-black"
        onChange={(e) => handleSearch(e)}
      />
      <p>Du søkte på: {searchTerm}</p>
      <p>{JSON.stringify(data || error)}</p>
    </div>
  );
}

export default App;
