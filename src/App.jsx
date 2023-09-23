import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./view/Home";
import { Header } from "./Components/Header";
import { ListPokemon } from "./view/ListPokemon";
import { FilterPovider } from "./Context/filter";
import { PokemonPage } from "./view/PokemonPage";
import { Loader } from "./Components/Loader";
import { useContext } from "react";
import { LouderContext } from "./Context/contextLouder";
import { PageProvider } from "./Context/paginado";

function App() {
  const {louder}=useContext(LouderContext)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Pokemon"
            element={
              <PageProvider>
                <FilterPovider>
                  <ListPokemon />
                </FilterPovider>
              </PageProvider>
            }
          />
          <Route path="/Pokemon/:idPoke" element={<PokemonPage />} />
        </Routes>
        {louder?<Loader/>:""}
      </BrowserRouter>
    </>
  );
}

export default App;
