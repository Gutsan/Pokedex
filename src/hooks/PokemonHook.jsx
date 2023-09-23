import { useState,useEffect } from "react"
import {getListFromApi } from "../logic/callApi";
import { getInfoEvolution, getInfoPokemon, getInfoSpecies } from "../logic/function";


export const usePokemon=(ENDPOINT_POKEMON)=>{
    const [pokemon, setPokemon] = useState({
        name: "",
        imgFront: "",
        type: "unknown",
        id: "000",
        stats:[
          {
            base_stat:0,
            stat:{
              name:"",
              url:""
            }
          }
        ],
        height:0,
        weight:0,
        base_experience:0,
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

export const useSpecie=(idPoke)=>{
  const [specieData, setSpecieData] = useState({
    curiosities:[],
    evolutionsURL:""
  });
    useEffect(() => {
    getInfoSpecies(idPoke).then(poke=>setSpecieData(poke));
    },[idPoke]);
  return specieData
}

export const useEvolutions=(evolutionUrl)=>{
  const [evolution, SetEvolution]=useState({nameEvolutions:[]})
  useEffect(()=>{
    getInfoEvolution(evolutionUrl).then(evol=>SetEvolution(evol))
  },[evolutionUrl])
  return evolution
}