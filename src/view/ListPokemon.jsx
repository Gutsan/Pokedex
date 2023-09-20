
import { ModfPage } from "../Components/Pages";
import { PokemonCard } from "../Components/PokemonCard";
import { Searcher } from "../Components/Searcher";
import { SortSelect } from "../Components/SortSelect";
import { useState,useEffect, useContext } from "react";
import { useListPokemon } from "../hooks/PokemonHook";
import { FilterContext } from "../Context/filter";
import { usePageRange } from "../hooks/PageView";


export const ListPokemon=()=>{
  // const [endpointLimit, setEndpointLimit] = useState([0, 11]);
  const {searchValue,sortType} = useContext(FilterContext);
  const dataListPokemon=useListPokemon(649,searchValue,sortType)
  const [RenderPage, setRenderPage] = useState(1);
  const endpointLimit=usePageRange(RenderPage,12)
  
    return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full gap-5 flex h-20 items-center justify-between">
          <Searcher setRenderPage={setRenderPage} />
          <SortSelect />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 place-items-center ">
          {dataListPokemon.map((data, index) => {
            if (index >= endpointLimit.lowerLimit && index <= endpointLimit.upperLimit) {
              return  <PokemonCard key={index} endpoint={data.url}/>;
            }
          })}
        </div>
        <ModfPage RenderPage={RenderPage} setRenderPage={setRenderPage} dataRequestPokemon={dataListPokemon}/>

      </div>
    </>
  );
}