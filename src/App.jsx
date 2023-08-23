import { useEffect, useState } from 'react'
import './App.css'
import { MiApi } from './Components/MiApi'

function App() {
const [listPokemon, setListPokemon]=useState([1,2,3,4,5,6,7,8,9,10])


  return (
    <>
    <div className='flex gap-1 flex-wrap'>
    {listPokemon.map(idPoke=> 
      <MiApi idPoke={idPoke}/>
    )}
    </div>
    </>
  )
}

export default App
