import { useEffect, useState } from 'react'
import './App.css'
import { PokemonCard } from './Components/PokemonCard'
function App() {
const [idPoke, setIdPokemon]=useState("")
const ENDPOINT_POKEMON=`https://pokeapi.co/api/v2/pokemon/${idPoke}/`
const [pokemon, setPokemon]=useState({})

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
  },[idPoke])
const handlerChange=(e)=>{
  setIdPokemon(e.target.value)
}

  return (
    <>
    <input type="number" placeholder='indique numero de pokemon' onChange={handlerChange}/>
    <PokemonCard name={pokemon.name} type={pokemon.type} imgFront={pokemon.imgFront}/>
      <p></p>
    </>
  )
}

export default App
