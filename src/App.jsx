import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./view/Home";
import { Header } from "./Components/Header";
import { useState } from "react";
import { ListPokemon } from "./view/ListPokemon";
import { FilterPovider } from "./Context/filter";

function App() {
  const [pokemonSelect, setPokemonSelect] = useState("");
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Pokemon"
            element={
              <FilterPovider>
                <ListPokemon />
              </FilterPovider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
