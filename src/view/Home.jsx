import { Link } from "react-router-dom";


export function Home() {
  
  return (
    <main className="flex flex-col gap-10 justify-start items-center w-full min-h-screen bg-slate-800">
      <img src="src\assets\img\pokemon-logo-png-5.png" alt="logo-pokemon" className="w-80"/>
      <h1 className="text-red-500 text-2xl">Bievenido Maestro a Pokedex</h1>
      <div className="flex justify-center gap-0 w-5/6">
        <img src="public\bulbasaur.svg" alt="Bulbasaur" className="w-1/6 m-0" />
        <img src="public\Charmander.svg" alt="Charmander" className="w-1/6 m-0" />
        <img src="public/Squirtle.svg" alt="Squirtle" className="w-1/6 m-0" />
        <img src="public/Pikachu.svg" alt="Picachu" className="w-1/6 m-0" />
        <img src="public/Chikorita.svg" alt="Chikorita" className="w-1/6 m-0" />
        <img src="public/cindquil.svg" alt="cindquil" className="w-1/6 m-0" />
        <img src="public/Totodile.svg" alt="totodile" className="w-1/6 m-0" />
      </div>
      <Link to="/Pokemon" className="w-24 h-10 border border-red-500 text-red-500 flex items-center justify-center rounded">Atrapalos!</Link>
      </main>
  );
}