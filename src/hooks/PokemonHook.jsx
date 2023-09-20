import { useState,useEffect } from "react"
import {getListFromApi } from "../logic/callApi";
import { getInfoPokemon } from "../logic/function";


export const usePokemon=(ENDPOINT_POKEMON)=>{
    const [pokemon, setPokemon] = useState({
        name: "",
        imgFront: "",
        type: "unknown",
        id: "000",
      });
      useEffect(() => {
      getInfoPokemon(ENDPOINT_POKEMON).then(poke=>setPokemon(poke));
      },[ENDPOINT_POKEMON]);
    return pokemon
}


export const useListPokemon=(qty,searchValue,sortType)=>{
  const [dataListPokemon, setDataListPokemon] = useState([
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
  ]);

useEffect(()=>{
  getListFromApi(qty,searchValue,sortType).then(list=>setDataListPokemon(list))
},[qty,searchValue,sortType])
  return dataListPokemon
}

