import { Link } from "react-router-dom";


export function Home() {
  
  return (
    <main className="flex flex-col gap-10 justify-start items-center w-full min-h-screen bg-slate-800">
      <img src="https://clipground.com/images/pokemon-logo-png-5.png" alt="logo-pokemon" className="w-80"/>
      <h1 className="text-red-500 text-2xl">Bievenido Maestro a Pokedex</h1>
      <div className="flex justify-center gap-0 w-5/6">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Bulbasaur" className="w-1/6 m-0" />
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="Charmander" className="w-1/6 m-0" />
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg" alt="Squirtle" className="w-1/6 m-0" />
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt="Picachu" className="w-1/6 m-0" />
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/152.svg" alt="Chikorita" className="w-1/6 m-0" />
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/155.svg" alt="cindquil" className="w-1/6 m-0" />
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/158.svg" alt="totodile" className="w-1/6 m-0" />
      </div>
      <Link to="/Pokemon" className="w-24 h-10 border border-red-500 text-red-500 flex items-center justify-center rounded">Atrapalos!</Link>
      </main>
  );
}