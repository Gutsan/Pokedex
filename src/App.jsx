import { useEffect, useState } from "react";

import "./App.css";

import { MiApi } from "./Components/MiApi";
import { Header } from "./Components/Header";
import { Searcher } from "./Components/Searcher";
import { ModfPage } from "./Components/Pages";
import { SortSelect } from "./Components/SortSelect";
import { Footer } from "./Components/Footer";

function App() {
  const [endpointLimit, setEndpointLimit] = useState([0, 11]);
  const [searchType, setSearchType] = useState("name"); //Pendiente cambio de busqueda por tipo
  const [dataRequestPokemon, setDataRequestPokemon] = useState([
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [RenderPage, setRenderPage] = useState(1);
  const [sortType, setSortType] = useState(["number"]);
  
  //Cambiar limites para renderizar distinas paginas
  useEffect(() => {
    const limit = 12;
    const offset = limit * RenderPage - limit;
    setEndpointLimit([offset, offset + limit - 1]);
  }, [RenderPage]);

  //Función para modificar endpoint según busqueda
  useEffect(() => {
    if (searchType === "name") {
      const ENDPOINT_SEARCH = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=649`;
      getSearchByName(ENDPOINT_SEARCH);
    } else if (searchType === "type") {
    //UderConstruccion
    }
  }, [searchValue, endpointLimit,dataRequestPokemon,sortType]);


  //Obtener datos de pokemones según busqueda (por derecto busca a todos)
  const getSearchByName = async (ENDPOINT) => {
    try {
      const res = await fetch(ENDPOINT);
      const data = await res.json();
      const arrayFilter = await data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      sortPokemon(sortType,arrayFilter)
      setDataRequestPokemon(arrayFilter)
    } catch (error) {}
  };
  const sortPokemon=(typeOrder,arrayPokemon)=>{
    if(typeOrder==="Alphabetic"){
      arrayPokemon.sort((a,b)=>{
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      })
    }
  }
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="w-full gap-5 flex h-20 items-center justify-between">
          <Searcher setSearchValue={setSearchValue} setRenderPage={setRenderPage} />
          <SortSelect setSortType={setSortType} />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 place-items-center ">
          {dataRequestPokemon.map((data, index) => {
            if (index >= endpointLimit[0] && index <= endpointLimit[1]) {
              return <MiApi key={index} ENDPOINT_POKEMON={data.url} />;
            }
          })}
        </div>
        <ModfPage RenderPage={RenderPage} setRenderPage={setRenderPage} dataRequestPokemon={dataRequestPokemon}/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
