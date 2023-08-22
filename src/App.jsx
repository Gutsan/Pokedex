import { useEffect, useState } from 'react'

import './App.css'

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
    <div>
      <input type="number" placeholder='indique numero de pokemon' onChange={handlerChange}/>
      <h3>{pokemon.name}</h3>
      <h2>{pokemon.type}</h2>
      <img src={pokemon.imgFront} alt="imagen de pokemon" />

    </div>
      <p></p>
    </>
  )
}

export default App
