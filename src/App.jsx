import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./view/Home";
import { Header } from "./Components/Header";
import { ListPokemon } from "./view/ListPokemon";
import { FilterPovider } from "./Context/filter";
import { PokemonPage } from "./view/PokemonPage";

function App() {
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
          <Route path="/Pokemon/:idPoke" element={<PokemonPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
