import { useEffect, useState } from "react";
import "./App.css";
import { MiApi } from "./Components/MiApi";
import { cantPokemonGeneracion } from "./logic/const";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Searcher } from "./Components/Searcher";
import { ROUNDUP } from "./logic/function";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
function App() {
  const [endpointLimit, setEndpointLimit] = useState([0, 11]);
  const [searchType, setSearchType] = useState("name");
  const [dataRequestPokemon, setDataRequestPokemon] = useState([
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [RenderPage, setRenderPage] = useState(1);

  //Cambiar limites para renderizar
  useEffect(() => {
    const limit = 12;
    const offset = limit * RenderPage - limit;
    setEndpointLimit([offset, offset + limit - 1]);
  }, [RenderPage]);

  //Función para modificar endpoin según busqueda
  useEffect(() => {
    if (searchType === "name") {
      const ENDPOINT_SEARCH = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=649`;
      getSearchByName(ENDPOINT_SEARCH);
    }
  }, [searchType, searchValue, endpointLimit]);

  //Manejo de cambio de pagina renderizada
  const handleChange = (e) => {
    if (
      e.target.value > 0 &&
      ROUNDUP(dataRequestPokemon.length, 12) >= e.target.value
    ) {
      setRenderPage(e.target.value);
    } else {
      e.target.value = ROUNDUP(dataRequestPokemon.length, 12);
    }
  };
  const handleClickMas = () => {
    const newRenderPage = RenderPage + 1;
    if (
      newRenderPage > 0 &&
      ROUNDUP(dataRequestPokemon.length, 12) >= newRenderPage
    ) {
      setRenderPage(newRenderPage);
    }
  };
  const handleClickMenos = () => {
    const newRenderPage = RenderPage - 1;
    if (
      newRenderPage > 0 &&
      ROUNDUP(dataRequestPokemon.length, 12) >= newRenderPage
    ) {
      setRenderPage(newRenderPage);
    }
  };

  //Obtener datos de pokemones según busqueda (por derecto busca a todos)
  const getSearchByName = async (ENDPOINT) => {
    try {
      const res = await fetch(ENDPOINT);
      const data = await res.json();
      const arrayFilter = data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setDataRequestPokemon(arrayFilter);
    } catch (error) {}
  };
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="w-[1000px] flex h-10 items-center justify-between">
          <Searcher
            setSearchType={setSearchType}
            setSearchValue={setSearchValue}
          />
          <div className="flex w-16">
            <button
              value={1}
              className="align-middle"
              onClick={handleClickMenos}
            >
              <IconChevronLeft />
            </button>
            <p>{RenderPage}</p>
            <button
              value={-1}
              className="align-middle"
              onClick={handleClickMas}
            >
              <IconChevronRight />
            </button>
          </div>
        </div>
        <div className="w-[1000px] h-[710px] grid grid-cols-3 gap-2 place-items-center">
          {dataRequestPokemon.map((data, index) => {
            if (index >= endpointLimit[0] && index <= endpointLimit[1]) {
              return <MiApi key={index} ENDPOINT_POKEMON={data.url} />;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default App;
