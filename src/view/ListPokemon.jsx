
import { ModfPage } from "../Components/Pages";
import { PokemonCard } from "../Components/PokemonCard";
import { Searcher } from "../Components/Searcher";
import { SortSelect } from "../Components/SortSelect";
import { useState,useEffect, useContext } from "react";
import { useListPokemon } from "../hooks/PokemonHook";
import { FilterContext } from "../Context/filter";
import { usePageRange } from "../hooks/PageView";
import { PageContext } from "../Context/paginado";


export const ListPokemon=()=>{
  // const [endpointLimit, setEndpointLimit] = useState([0, 11]);
  const {searchValue,sortType} = useContext(FilterContext);
  const dataListPokemon=useListPokemon(649,searchValue,sortType)
  const {RenderPage} = useContext(PageContext);
  const endpointLimit=usePageRange(RenderPage,12)
  
    return (
    <>
    {console.log(RenderPage)}
      <div className="flex flex-col items-center max-w-5xl
      animate-fade animate-once animate-duration-1000 animate-delay-1000 animate-ease-out animate-normal animate-fill-both">
        <div className="w-full gap-5 flex h-20 items-center justify-between px-10">
          <Searcher />
          <SortSelect />
        </div>
        <div className="w-full flex flex-wrap justify-center gap-5 place-items-center ">
          {dataListPokemon.map((data, index) => {
            if (index >= endpointLimit.lowerLimit && index <= endpointLimit.upperLimit) {
              return  <PokemonCard key={index} endpoint={data.url}/>;
            }
          })}
        </div>
        <ModfPage dataListPokemon={dataListPokemon}/>

      </div>
    </>
  );
}
//grid-cols-1 lg:grid-cols-4 md:grid-cols-2