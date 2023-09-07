import { PokemonCard } from "./PokemonCard";
import { useEffect, useState } from "react";
import { getInfoPokemon } from "../logic/function";
export function MiApi({ ENDPOINT_POKEMON }) {
  const [pokemon, setPokemon] = useState({
    name: "",
    imgFront: "",
    type: "unknown",
    id: "000",
  });

  //Modificar Array de Pokemon a renderizar
  useEffect(() => {
    getInfoPokemon(ENDPOINT_POKEMON,setPokemon);
  },[ENDPOINT_POKEMON]);

  // // Función para obtener datos de pokemon en api
  //   const getInfoPokemon = async () => {
  //   const res = await fetch(ENDPOINT_POKEMON);
  //   const data = await res.json();
  //   const imgFront = data.sprites.other.dream_world.front_default;
  //   const name = data.name;
  //   const type = data.types[0].type.name;
  //   const id = data.id;
  //   setPokemon({ name, imgFront, type, id });
  // };

  return (
    <>
      <PokemonCard
        name={pokemon.name}
        type={pokemon.type}
        imgFront={pokemon.imgFront}
        idPoke={pokemon.id}
      />
    </>
  );
}
