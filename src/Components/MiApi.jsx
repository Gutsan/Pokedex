import { PokemonCard } from "./PokemonCard";
import { useEffect, useState } from 'react'

export function MiApi ({ idPoke }) {
  
  const ENDPOINT_POKEMON=`https://pokeapi.co/api/v2/pokemon/${idPoke}/`
  const [pokemon, setPokemon]=useState({
    name:"",
    imgFront:"",
    type:"",
  })
  
  useEffect(()=>{
    fetch(ENDPOINT_POKEMON)
    .then(res=>res.json())
    .then(response=>{
      const imgFront= response.sprites.other.dream_world.front_default
      const name= response.name
      const type= response.types[0].type.name
      setPokemon({name,imgFront,type})
    }
    )
    },[])

    return (
      <>
      <PokemonCard name={pokemon.name} type={pokemon.type} imgFront={pokemon.imgFront}/>
      </>
    )
};
