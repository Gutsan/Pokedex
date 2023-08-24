import { useEffect, useState } from 'react'
import './App.css'
import { MiApi } from './Components/MiApi'
import {cantPokemonGeneracion} from './logic/const'
import { Header } from './Components/Header'
function App() {
const [listPokemon, setListPokemon]=useState([1,2,3,4,5,6,7,8,9,10,11,12])
const [generation, setGeneration]=useState(2)
const [RenderPage,setRenderPage]=useState(1)
useEffect(()=>{
const listRender=[1,2,3,4,5,6,7,8,9,10,11,12]
const arrayList=listRender.map((idPoke)=> idPoke+12*RenderPage-12)
setListPokemon(arrayList)
}
,[RenderPage,generation])
const handleChange=(e)=>{
  if(e.target.value>0){
    setRenderPage(e.target.value)
  }
}
  return (
    <>
    <Header />
    
    <div className='w-5/6 grid grid-cols-3 gap-3'>
    {listPokemon.map((idPoke)=> 
      <MiApi key={idPoke} idPoke={idPoke}/>
    )}
    <input type="number" min="1" onChange={handleChange} />
    </div>
    </>
  )
}

export default App
