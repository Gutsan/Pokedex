import { useEffect, useState } from 'react'
import './App.css'
import { MiApi } from './Components/MiApi'

function App() {
const [listPokemon, setListPokemon]=useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])


  return (
    <>
    <div className='w-5/6 grid grid-cols-3 gap-3'>
    {listPokemon.map((idPoke,index)=> 
      <MiApi key={index} idPoke={idPoke}/>
    )}
    </div>
    </>
  )
}

export default App
