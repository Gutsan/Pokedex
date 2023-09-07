import { useEffect, useState } from "react";
import { MiApi } from "../Components/MiApi.jsx"; 


import { Searcher } from "../Components/Searcher";
import { ModfPage } from "../Components/Pages";
import { SortSelect } from "../Components/SortSelect";
import { Footer } from "../Components/Footer";

import { getSearchByName } from "../logic/callApi";

export function Home(setPokemonSelect) {
  const [endpointLimit, setEndpointLimit] = useState([0, 11]);
  const [dataRequestPokemon, setDataRequestPokemon] = useState([
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [RenderPage, setRenderPage] = useState(1);
  const [sortType, setSortType] = useState(["number"]);
  const ENDPOINT_SEARCH = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=649`;
  
  //Cambiar limites para renderizar distinas paginas
  useEffect(() => {
    const limit = 12;
    const offset = limit * RenderPage - limit;
    setEndpointLimit([offset, offset + limit - 1]);
  }, [RenderPage]);

  //Función para modificar endpoint según busqueda
  useEffect(() => {
      getSearchByName(ENDPOINT_SEARCH, searchValue, setDataRequestPokemon, sortType);
  }, [searchValue,sortType]);


  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full gap-5 flex h-20 items-center justify-between">
          <Searcher setSearchValue={setSearchValue} setRenderPage={setRenderPage} />
          <SortSelect setSortType={setSortType} />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 place-items-center ">
          {dataRequestPokemon.map((data, index) => {
            if (index >= endpointLimit[0] && index <= endpointLimit[1]) {
              return  <MiApi key={index} ENDPOINT_POKEMON={data.url} setPokemonSelect={setPokemonSelect} />;
            }
          })}
        </div>
        <ModfPage RenderPage={RenderPage} setRenderPage={setRenderPage} dataRequestPokemon={dataRequestPokemon}/>
        <Footer/>
      </div>
    </>
  );
}